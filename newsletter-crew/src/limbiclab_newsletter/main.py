import os
from pydantic import BaseModel
from crewai.flow import Flow, listen, start
from limbiclab_newsletter.crews.newsletter_crew.newsletter_crew import NewsletterCrew

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
    def prepare_topic(self, crewai_trigger_payload: dict | None = None):
        base_url = (
            os.getenv("LIMBICLAB_SITE_URL")
            or os.getenv("NEXT_PUBLIC_BASE_URL")
            or "https://limbiclab.com"
        ).rstrip("/")
        self.state.store_url = f"{base_url}/store"

        if crewai_trigger_payload and crewai_trigger_payload.get("topic"):
            self.state.topic = crewai_trigger_payload["topic"]
        else:
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
        self.state.newsletter_html = result.raw
        print("[LimbicLab Newsletter] Crew finished.")

    @listen(run_newsletter_crew)
    def finalize(self):
        en_path = os.path.join("output", "newsletter_en.html")
        es_path = os.path.join("output", "newsletter_es.html")

        # Read task output files into state so app.py can access both
        for path, attr in ((en_path, "newsletter_en"), (es_path, "newsletter_es")):
            if os.path.exists(path):
                with open(path, "r", encoding="utf-8") as f:
                    setattr(self.state, attr, f.read())
                print(f"[LimbicLab Newsletter] Loaded: {path}")
            else:
                print(f"[LimbicLab Newsletter] Warning: {path} not found")

        return self.state.newsletter_en, self.state.newsletter_es


def kickoff(topic: str | None = None) -> tuple[str, str]:
    payload = {"topic": topic} if topic else None
    flow = LimbicLabNewsletterFlow()
    flow.kickoff(inputs=payload)
    return flow.state.newsletter_en, flow.state.newsletter_es


def plot():
    LimbicLabNewsletterFlow().plot()


if __name__ == "__main__":
    kickoff()
