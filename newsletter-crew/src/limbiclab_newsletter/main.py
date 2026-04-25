import os
import re
from pydantic import BaseModel
from crewai.flow import Flow, listen, start
from limbiclab_newsletter.crews.newsletter_crew.newsletter_crew import NewsletterCrew


def _parse_sections(text: str) -> dict:
    """Extract content between ===MARKER=== lines into a dict."""
    markers = ["HOOK", "BIOLOGY", "RESEARCH", "CLINICAL", "CITATION"]
    sections: dict = {m: "" for m in markers}
    current = None
    for line in text.splitlines():
        stripped = line.strip()
        matched = re.match(r"^===([A-Z]+)===$", stripped)
        if matched and matched.group(1) in markers:
            current = matched.group(1)
        elif current:
            sections[current] += line + "\n"
    return {k: v.strip() for k, v in sections.items()}


def _render_html(sections: dict, topic: str, store_url: str, lang: str = "en") -> str:
    """Render parsed content sections into the LimbicLab email template."""
    if lang == "es":
        badge       = "LIMBICLAB · DESPACHO SEMANAL"
        bio_label   = "LA BIOLOGÍA"
        res_label   = "LO QUE MUESTRA LA INVESTIGACIÓN"
        clin_label  = "IMPLICACIONES CLÍNICAS"
        cite_label  = "CITA DE LA SEMANA"
        cta_body    = "LimbicLab publica un informe semanal de investigación sobre trastorno bipolar, neurociencia del trauma y psicología oscura. Nivel universitario. Sin relleno."
        cta_btn     = "COMENZAR PRUEBA GRATUITA &rarr;"
        footer_sub  = "Recibiste esto porque te suscribiste en limbiclab.xyz."
        unsub_text  = "Cancelar suscripción"
    else:
        badge       = "LIMBICLAB · WEEKLY DISPATCH"
        bio_label   = "THE BIOLOGY"
        res_label   = "WHAT THE RESEARCH SHOWS"
        clin_label  = "CLINICAL IMPLICATIONS"
        cite_label  = "THIS WEEK&#39;S CITATION"
        cta_body    = "LimbicLab publishes a weekly research brief on bipolar disorder, trauma neuroscience, and dark psychology. Graduate-level. No fluff."
        cta_btn     = "START FREE TRIAL &rarr;"
        footer_sub  = "You received this because you subscribed at limbiclab.xyz."
        unsub_text  = "Unsubscribe"

    hook     = sections.get("HOOK", "").replace("\n", "<br>")
    biology  = sections.get("BIOLOGY", "").replace("\n\n", "</p><p class='body-text' style='font-size:13px;color:#1a1a1a;line-height:1.9;margin:12px 0 0;'>").replace("\n", " ")
    research = sections.get("RESEARCH", "").replace("\n\n", "</p><p class='body-text' style='font-size:13px;color:#1a1a1a;line-height:1.9;margin:12px 0 0;'>").replace("\n", " ")
    clinical = sections.get("CLINICAL", "").replace("\n\n", "</p><p class='body-text' style='font-size:13px;color:#1a1a1a;line-height:1.9;margin:12px 0 0;'>").replace("\n", " ")
    citation = sections.get("CITATION", "").replace("\n", " ")

    return f"""<!DOCTYPE html>
<html lang="{lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>LimbicLab</title>
<style>
  /* Light mode defaults */
  .email-bg   {{ background-color: #ffffff !important; }}
  .email-td   {{ background-color: #ffffff !important; }}
  .body-text  {{ color: #1a1a1a !important; }}
  .hook-text  {{ color: #0a0a0a !important; }}
  .dim-text   {{ color: #444444 !important; }}
  .cite-text  {{ color: #333333 !important; }}
  .cite-label {{ color: #666666 !important; }}
  .cite-td    {{ background-color: #f5f5f5 !important; border-color: #dddddd !important; }}
  .divider    {{ background-color: #e0e0e0 !important; }}
  .footer-text {{ color: #555555 !important; }}
  .footer-link {{ color: #444444 !important; }}

  /* Dark mode overrides */
  @media (prefers-color-scheme: dark) {{
    .email-bg   {{ background-color: #030305 !important; }}
    .email-td   {{ background-color: #030305 !important; }}
    .body-text  {{ color: #f0f0f0 !important; }}
    .hook-text  {{ color: #ffffff !important; }}
    .dim-text   {{ color: #7a7a9a !important; }}
    .cite-text  {{ color: #d0d0e8 !important; }}
    .cite-label {{ color: #4a4a6a !important; }}
    .cite-td    {{ background-color: #07070e !important; border-color: #1e1e30 !important; }}
    .divider    {{ background-color: #1e1e30 !important; }}
    .footer-text {{ color: #4a4a6a !important; }}
    .footer-link {{ color: #5a5a7a !important; }}
  }}
</style>
</head>
<body class="email-bg" style="margin:0;padding:0;background-color:#ffffff;font-family:'Courier New',Courier,monospace;" bgcolor="#ffffff">
<table width="100%" cellpadding="0" cellspacing="0" class="email-bg" bgcolor="#ffffff" style="background-color:#ffffff;">
<tr><td align="center" class="email-td" style="padding:40px 16px;background-color:#ffffff;" bgcolor="#ffffff">
<table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

  <tr><td class="email-td" style="padding-bottom:24px;background-color:#ffffff;" bgcolor="#ffffff">
    <span style="font-size:9px;letter-spacing:0.28em;color:#2a9d9d;border:1px solid #1a7a7a;padding:4px 14px;text-transform:uppercase;">{badge}</span>
  </td></tr>

  <tr><td class="email-td" style="padding-bottom:10px;background-color:#ffffff;" bgcolor="#ffffff">
    <span class="dim-text" style="font-size:10px;letter-spacing:0.2em;color:#444444;text-transform:uppercase;">{topic}</span>
  </td></tr>

  <tr><td class="email-td" style="padding-bottom:32px;border-bottom:1px solid #e0e0e0;background-color:#ffffff;" bgcolor="#ffffff">
    <p class="hook-text" style="font-size:18px;font-weight:700;color:#0a0a0a;line-height:1.5;letter-spacing:0.03em;margin:0;">{hook}</p>
  </td></tr>

  <tr><td class="email-td" style="padding-top:28px;padding-bottom:24px;background-color:#ffffff;" bgcolor="#ffffff">
    <p style="font-size:10px;letter-spacing:0.28em;color:#2a9d9d;margin:0 0 14px;text-transform:uppercase;">{bio_label}</p>
    <p class="body-text" style="font-size:13px;color:#1a1a1a;line-height:1.9;margin:0;">{biology}</p>
  </td></tr>

  <tr><td class="divider" style="height:1px;font-size:0;line-height:0;background-color:#e0e0e0;">&nbsp;</td></tr>

  <tr><td class="email-td" style="padding-top:28px;padding-bottom:24px;background-color:#ffffff;" bgcolor="#ffffff">
    <p style="font-size:10px;letter-spacing:0.28em;color:#2a9d9d;margin:0 0 14px;text-transform:uppercase;">{res_label}</p>
    <p class="body-text" style="font-size:13px;color:#1a1a1a;line-height:1.9;margin:0;">{research}</p>
  </td></tr>

  <tr><td class="divider" style="height:1px;font-size:0;line-height:0;background-color:#e0e0e0;">&nbsp;</td></tr>

  <tr><td class="email-td" style="padding-top:28px;padding-bottom:28px;background-color:#ffffff;" bgcolor="#ffffff">
    <p style="font-size:10px;letter-spacing:0.28em;color:#2a9d9d;margin:0 0 14px;text-transform:uppercase;">{clin_label}</p>
    <p class="body-text" style="font-size:13px;color:#1a1a1a;line-height:1.9;margin:0;">{clinical}</p>
  </td></tr>

  <tr><td class="cite-td" style="padding:20px;border:1px solid #dddddd;background-color:#f5f5f5;" bgcolor="#f5f5f5">
    <p class="cite-label" style="font-size:9px;letter-spacing:0.22em;color:#666666;margin:0 0 10px;text-transform:uppercase;">{cite_label}</p>
    <p class="cite-text" style="font-size:11px;color:#333333;line-height:1.75;margin:0;font-style:italic;">{citation}</p>
  </td></tr>

  <tr><td class="email-td" style="padding-top:36px;padding-bottom:36px;text-align:center;border-top:1px solid #e0e0e0;background-color:#ffffff;" bgcolor="#ffffff">
    <p class="body-text" style="font-size:12px;color:#1a1a1a;line-height:1.8;margin:0 0 22px;">{cta_body}</p>
    <a href="{store_url}" style="display:inline-block;background-color:#2a9d9d;color:#ffffff;font-family:'Courier New',Courier,monospace;font-size:11px;font-weight:700;letter-spacing:0.2em;padding:14px 32px;text-decoration:none;text-transform:uppercase;">{cta_btn}</a>
  </td></tr>

  <tr><td class="email-td" style="padding-top:24px;border-top:1px solid #eeeeee;background-color:#ffffff;" bgcolor="#ffffff">
    <p class="footer-text" style="font-size:10px;color:#555555;letter-spacing:0.1em;line-height:1.9;margin:0;text-align:center;">
      LIMBICLAB &middot; limbiclab.xyz<br>
      {footer_sub}<br>
      <a class="footer-link" href="%%UNSUBSCRIBE_URL%%" style="color:#444444;text-decoration:underline;">{unsub_text}</a>
    </p>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>"""

TOPICS = [
    "bipolar disorder neuroscience",
    "trauma and epigenetics",
    "dark psychology and manipulation",
    "environmental mental health and suicidality",
    "lithium mechanism and neuroprotection",
    "circadian biology and psychiatric disorders",
    "PTSD neuroimaging",
    "creativity and bipolar disorder",
    "adverse childhood experiences and brain development",
    "climate change and mental health",
]


class NewsletterFlowState(BaseModel):
    topic: str = ""
    research: str = ""
    newsletter_en: str = ""
    newsletter_es: str = ""
    week_number: int = 0
    store_url: str = ""


class LimbicLabNewsletterFlow(Flow[NewsletterFlowState]):

    @start()
    def prepare_topic(self):
        base_url = (
            os.getenv("LIMBICLAB_SITE_URL")
            or os.getenv("NEXT_PUBLIC_BASE_URL")
            or "https://limbiclab.com"
        ).rstrip("/")
        self.state.store_url = f"{base_url}/store"

        if not self.state.topic:
            # Rotate topics by ISO week number so each week is different
            from datetime import date
            week = date.today().isocalendar()[1]
            self.state.week_number = week
            self.state.topic = TOPICS[week % len(TOPICS)]

        print(f"[LimbicLab Newsletter] Week {self.state.week_number} — Topic: {self.state.topic}")

    @listen(prepare_topic)
    def run_newsletter_crew(self):
        result = NewsletterCrew().crew().kickoff(
            inputs={
                "topic": self.state.topic,
                "store_url": self.state.store_url,
            }
        )
        print("[LimbicLab Newsletter] Crew finished.")

    @listen(run_newsletter_crew)
    def finalize(self):
        en_path = os.path.join("output", "newsletter_en.html")
        es_path = os.path.join("output", "newsletter_es.html")

        for path, attr, lang in (
            (en_path, "newsletter_en", "en"),
            (es_path, "newsletter_es", "es"),
        ):
            if os.path.exists(path):
                with open(path, "r", encoding="utf-8") as f:
                    raw = f.read().strip()
                # Strip markdown code fences if the LLM added them
                if raw.startswith("```"):
                    raw = raw.split("\n", 1)[-1]
                if raw.endswith("```"):
                    raw = raw.rsplit("```", 1)[0]
                raw = raw.strip()
                # Parse section markers and render into our HTML template
                sections = _parse_sections(raw)
                html = _render_html(sections, self.state.topic, self.state.store_url, lang)
                setattr(self.state, attr, html)
                print(f"[LimbicLab Newsletter] Rendered {lang.upper()}: {path}")
            else:
                print(f"[LimbicLab Newsletter] Warning: {path} not found")

        return self.state.newsletter_en, self.state.newsletter_es


def kickoff(topic: str | None = None) -> tuple[str, str]:
    flow = LimbicLabNewsletterFlow()
    if topic:
        flow.state.topic = topic
    flow.kickoff()
    return flow.state.newsletter_en, flow.state.newsletter_es


def plot():
    LimbicLabNewsletterFlow().plot()


if __name__ == "__main__":
    kickoff()
