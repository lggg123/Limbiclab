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
    newsletter_html: str = ""
    week_number: int = 0


class LimbicLabNewsletterFlow(Flow[NewsletterFlowState]):

    @start()
    def prepare_topic(self, crewai_trigger_payload: dict | None = None):
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
        result = NewsletterCrew().crew().kickoff(inputs={"topic": self.state.topic})
        self.state.newsletter_html = result.raw
        print("[LimbicLab Newsletter] Crew finished.")

    @listen(run_newsletter_crew)
    def finalize(self):
        output_path = os.path.join("output", "newsletter.html")
        print(f"[LimbicLab Newsletter] Output written to {output_path}")
        return self.state.newsletter_html


def kickoff(topic: str | None = None) -> str:
    payload = {"topic": topic} if topic else None
    flow = LimbicLabNewsletterFlow()
    flow.kickoff(inputs=payload)
    return flow.state.newsletter_html


def plot():
    LimbicLabNewsletterFlow().plot()


if __name__ == "__main__":
    kickoff()
