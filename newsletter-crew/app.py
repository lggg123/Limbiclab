import os
import threading
import logging
from datetime import datetime

from flask import Flask, jsonify, request

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)

_state = {
    "status": "idle",
    "topic": None,
    "started_at": None,
    "finished_at": None,
    "newsletter_en": None,
    "newsletter_es": None,
    "error": None,
}


def _run_crew(topic: str | None):
    _state["status"] = "running"
    _state["started_at"] = datetime.utcnow().isoformat()
    _state["error"] = None
    _state["newsletter_en"] = None
    _state["newsletter_es"] = None
    try:
        from src.limbiclab_newsletter.main import kickoff
        en_html, es_html = kickoff(topic=topic)
        _state["newsletter_en"] = en_html
        _state["newsletter_es"] = es_html
        _state["status"] = "done"
        _state["finished_at"] = datetime.utcnow().isoformat()
        logger.info("Newsletter generation complete.")
    except Exception as e:
        _state["status"] = "error"
        _state["error"] = str(e)
        _state["finished_at"] = datetime.utcnow().isoformat()
        logger.exception("Newsletter generation failed.")


def _make_unsubscribe_url(email: str) -> str:
    import hmac, hashlib, urllib.parse
    secret = os.environ.get("WEBHOOK_SECRET", "")
    sig = hmac.new(secret.encode(), email.encode(), hashlib.sha256).hexdigest()
    base_url = os.getenv("LIMBICLAB_SITE_URL") or os.getenv("NEXT_PUBLIC_BASE_URL") or "https://limbiclab.com"
    return f"{base_url.rstrip('/')}/api/unsubscribe?email={urllib.parse.quote(email)}&sig={sig}"


def _send_newsletters():
    """Send EN and ES newsletters to subscribers grouped by language preference."""
    import resend
    from supabase import create_client

    resend.api_key = os.environ["RESEND_API_KEY"]
    from_addr = os.getenv("RESEND_FROM_EMAIL", "LimbicLab <onboarding@resend.dev>")

    supabase_url = os.environ["NEXT_PUBLIC_SUPABASE_URL"]
    supabase_key = os.environ["SUPABASE_SERVICE_ROLE_KEY"]
    db = create_client(supabase_url, supabase_key)

    subject_en = f"LimbicLab · {_state['topic'] or 'Weekly Dispatch'}"
    subject_es = f"LimbicLab · {_state['topic'] or 'Despacho Semanal'}"

    for lang in ("en", "es"):
        html = _state["newsletter_en"] if lang == "en" else _state["newsletter_es"]
        subject = subject_en if lang == "en" else subject_es
        if not html:
            logger.warning(f"No HTML for language '{lang}' — skipping.")
            continue

        result = db.from_("leads") \
            .select("email") \
            .eq("source", "newsletter") \
            .eq("language", lang) \
            .execute()

        emails = [row["email"] for row in (result.data or [])]
        if not emails:
            logger.info(f"No {lang.upper()} subscribers found.")
            continue

        logger.info(f"Sending to {len(emails)} {lang.upper()} subscribers.")
        for email in emails:
            try:
                unsubscribe_url = _make_unsubscribe_url(email)
                personalized_html = html.replace("{{UNSUBSCRIBE_URL}}", unsubscribe_url)
                resend.Emails.send({
                    "from": from_addr,
                    "to": email,
                    "subject": subject,
                    "html": personalized_html,
                    "headers": {"List-Unsubscribe": f"<{unsubscribe_url}>"},
                })
            except Exception as e:
                logger.error(f"Failed to send to {email}: {e}")

    logger.info("Send complete.")


@app.get("/")
def root():
    return jsonify({"status": "ok", "service": "limbiclab-newsletter", "endpoints": ["/health", "/generate", "/send", "/status", "/cron"]})


@app.get("/health")
def health():
    return jsonify({"status": "ok", "service": "limbiclab-newsletter"})


@app.post("/generate")
def generate():
    secret = os.getenv("WEBHOOK_SECRET")
    if secret:
        if request.headers.get("X-Webhook-Secret", "") != secret:
            return jsonify({"error": "Unauthorized"}), 401

    if _state["status"] == "running":
        return jsonify({"error": "Generation already in progress", "started_at": _state["started_at"]}), 409

    body = request.get_json(silent=True) or {}
    topic = body.get("topic") or None
    _state["topic"] = topic

    thread = threading.Thread(target=_run_crew, args=(topic,), daemon=True)
    thread.start()

    return jsonify({
        "message": "Newsletter generation started",
        "topic": topic or "auto (weekly rotation)",
        "status": "running",
    }), 202


@app.post("/send")
def send():
    """Send the latest generated newsletters to subscribers by language."""
    secret = os.getenv("WEBHOOK_SECRET")
    if secret:
        if request.headers.get("X-Webhook-Secret", "") != secret:
            return jsonify({"error": "Unauthorized"}), 401

    if _state["status"] != "done":
        return jsonify({"error": f"Newsletter not ready — status: {_state['status']}"}), 409

    if not _state["newsletter_en"] and not _state["newsletter_es"]:
        return jsonify({"error": "No newsletter content available"}), 404

    thread = threading.Thread(target=_send_newsletters, daemon=True)
    thread.start()

    return jsonify({"message": "Sending started — EN and ES dispatched by language preference"}), 202


@app.get("/status")
def status():
    return jsonify({
        "status": _state["status"],
        "topic": _state["topic"],
        "started_at": _state["started_at"],
        "finished_at": _state["finished_at"],
        "error": _state["error"],
        "has_en": _state["newsletter_en"] is not None,
        "has_es": _state["newsletter_es"] is not None,
    })


@app.get("/latest/<lang>")
def latest(lang: str):
    """Return the latest generated newsletter HTML for 'en' or 'es'."""
    if lang not in ("en", "es"):
        return jsonify({"error": "Use /latest/en or /latest/es"}), 400
    html = _state["newsletter_en"] if lang == "en" else _state["newsletter_es"]
    if html is None:
        return jsonify({"error": f"No {lang.upper()} newsletter generated yet"}), 404
    return app.response_class(response=html, status=200, mimetype="text/html")


@app.get("/latest")
def latest_default():
    """Backwards-compatible — returns EN newsletter."""
    if _state["newsletter_en"] is None:
        return jsonify({"error": "No newsletter generated yet"}), 404
    return app.response_class(response=_state["newsletter_en"], status=200, mimetype="text/html")


@app.post("/cron")
def cron():
    secret = os.getenv("WEBHOOK_SECRET")
    if secret:
        if request.headers.get("X-Webhook-Secret", "") != secret:
            return jsonify({"error": "Unauthorized"}), 401

    if _state["status"] == "running":
        return jsonify({"message": "Already running, skipping cron trigger"}), 200

    _state["topic"] = None
    thread = threading.Thread(target=_run_crew, args=(None,), daemon=True)
    thread.start()

    return jsonify({"message": "Weekly newsletter generation started"}), 202


if __name__ == "__main__":
    port = int(os.getenv("PORT", 8080))
    app.run(host="0.0.0.0", port=port)
