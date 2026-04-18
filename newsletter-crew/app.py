import os
import threading
import logging
from datetime import datetime

from flask import Flask, jsonify, request

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)

# Track generation state without a DB
_state = {
    "status": "idle",       # idle | running | done | error
    "topic": None,
    "started_at": None,
    "finished_at": None,
    "newsletter_html": None,
    "error": None,
}


def _run_crew(topic: str | None):
    _state["status"] = "running"
    _state["started_at"] = datetime.utcnow().isoformat()
    _state["error"] = None
    _state["newsletter_html"] = None
    try:
        # Import here so Flask starts fast even if crewai is slow to import
        from src.limbiclab_newsletter.main import kickoff
        html = kickoff(topic=topic)
        _state["newsletter_html"] = html
        _state["status"] = "done"
        _state["finished_at"] = datetime.utcnow().isoformat()
        logger.info("Newsletter generation complete.")
    except Exception as e:
        _state["status"] = "error"
        _state["error"] = str(e)
        _state["finished_at"] = datetime.utcnow().isoformat()
        logger.exception("Newsletter generation failed.")


@app.get("/health")
def health():
    return jsonify({"status": "ok", "service": "limbiclab-newsletter"})


@app.post("/generate")
def generate():
    """
    Trigger newsletter generation.
    Optional JSON body: {"topic": "bipolar disorder neuroscience"}
    Protected by WEBHOOK_SECRET env var if set.
    """
    secret = os.getenv("WEBHOOK_SECRET")
    if secret:
        provided = request.headers.get("X-Webhook-Secret", "")
        if provided != secret:
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


@app.get("/status")
def status():
    return jsonify({
        "status": _state["status"],
        "topic": _state["topic"],
        "started_at": _state["started_at"],
        "finished_at": _state["finished_at"],
        "error": _state["error"],
        "has_output": _state["newsletter_html"] is not None,
    })


@app.get("/latest")
def latest():
    """Return the latest generated newsletter HTML."""
    if _state["newsletter_html"] is None:
        return jsonify({"error": "No newsletter generated yet"}), 404
    return app.response_class(
        response=_state["newsletter_html"],
        status=200,
        mimetype="text/html",
    )


@app.post("/cron")
def cron():
    """
    Railway cron endpoint — called weekly by Railway's cron service.
    Uses auto topic rotation (no body needed).
    Requires WEBHOOK_SECRET header for security.
    """
    secret = os.getenv("WEBHOOK_SECRET")
    if secret:
        provided = request.headers.get("X-Webhook-Secret", "")
        if provided != secret:
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
