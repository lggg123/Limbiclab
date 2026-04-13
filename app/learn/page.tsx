import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ConceptCard } from "@/components/learn/ConceptCard";
import { DsmCategoryCard } from "@/components/learn/DsmCategoryCard";
import { DisorderExplorer } from "@/components/learn/DisorderExplorer";
import { Glossary } from "@/components/learn/Glossary";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  LEARN_CONCEPTS,
  DSM5_CATEGORIES,
  DISORDER_SPOTLIGHTS,
  PSYCHOTIC_SYMPTOM_DOMAINS,
  STRESS_DIATHESIS_PARAGRAPHS,
  NEUROTRANSMITTER_PROFILES,
  GLOSSARY_TERMS,
  LEARN_REFERENCES,
} from "@/lib/learnContent";

export const metadata: Metadata = {
  title: "Neuroscience Explainer",
  description:
    "Plain-language explanations of bipolar neuroscience, stress-diathesis framing, and DSM-5 disorder families.",
};

export default function LearnPage() {
  return (
    <main className="min-h-screen px-6 py-12">
      {/* Header */}
      <div className="mx-auto mb-12 max-w-3xl">
        <Link
          href="/"
          className="mb-4 inline-block text-sm text-muted-foreground hover:text-foreground"
        >
          ← Back to home
        </Link>

        <div className="mb-4 flex flex-wrap gap-2">
          <Badge>Neuroscience</Badge>
          <Badge variant="outline">Plain Language</Badge>
          <Badge variant="outline">No Jargon Required</Badge>
          <Badge variant="outline">DSM-5 Context</Badge>
        </div>

        <h1 className="mb-4 text-4xl font-bold text-foreground">
          Neuroscience Explainer
        </h1>
        <p className="text-lg text-muted-foreground">
          The science behind LimbicLab — explained without unnecessary jargon.
          Whether you&apos;re a clinician, researcher, or curious non-specialist, this
          guide walks through every concept the simulator uses, including how DSM-5
          disorder families are organized in practice.
        </p>
      </div>

      {/* Concepts */}
      <section className="mx-auto mb-16 max-w-3xl">
        <h2 className="mb-6 text-2xl font-bold text-foreground">Core Concepts</h2>
        <div className="flex flex-col gap-6">
          {LEARN_CONCEPTS.map((c) => (
            <ConceptCard key={c.title} {...c} />
          ))}
        </div>
      </section>

      {/* Neurotransmitter primer */}
      <section className="mx-auto mb-16 max-w-3xl">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Dopamine, GABA, and Serotonin
        </h2>
        <p className="mb-6 text-sm text-muted-foreground">
          These systems interact continuously. In neuroscience, symptoms usually reflect
          circuit-level imbalance over time, not one neurotransmitter acting alone.
        </p>
        <div className="flex flex-col gap-4">
          {NEUROTRANSMITTER_PROFILES.map((item) => (
            <Card key={item.name}>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-foreground/90">
                  <span className="font-semibold text-foreground">Primary role: </span>
                  {item.primaryRole}
                </p>
                <p className="text-sm text-foreground/90">
                  <span className="font-semibold text-foreground">When low: </span>
                  {item.whenLow}
                </p>
                <p className="text-sm text-foreground/90">
                  <span className="font-semibold text-foreground">
                    When high or dysregulated: 
                  </span>
                  {item.whenHighOrDysregulated}
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold">Learning note: </span>
                  {item.learningNote}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* DSM-5 section */}
      <section className="mx-auto mb-16 max-w-3xl">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          DSM-5 Disorder Families (Study Map)
        </h2>
        <p className="mb-6 text-sm text-muted-foreground">
          DSM categories organize symptom patterns for communication and research.
          They are not moral labels and should not be used to reduce a person to a diagnosis.
        </p>
        <div className="flex flex-col gap-4">
          {DSM5_CATEGORIES.map((category) => (
            <DsmCategoryCard key={category.family} category={category} />
          ))}
        </div>
      </section>

      {/* Disorder explorer */}
      <section className="mb-16">
        <Suspense fallback={<div className="py-12 text-center text-sm text-muted-foreground">Loading disorder explorer…</div>}>
          <DisorderExplorer
            profiles={DISORDER_SPOTLIGHTS}
            psychoticDomains={PSYCHOTIC_SYMPTOM_DOMAINS}
          />
        </Suspense>
      </section>

      {/* Stress-diathesis framing */}
      <section className="mx-auto mb-16 max-w-3xl">
        <Card className="border-primary/30 bg-primary/5">
          <CardHeader>
            <CardTitle>Stress-Diathesis Framework</CardTitle>
          </CardHeader>
          <CardContent>
            {STRESS_DIATHESIS_PARAGRAPHS.map((text, idx) => (
              <p
                key={text}
                className={
                  idx === 0
                    ? "text-sm leading-relaxed text-foreground/90"
                    : "mt-3 text-sm leading-relaxed text-foreground/90"
                }
              >
                {text}
              </p>
            ))}
          </CardContent>
        </Card>
      </section>

      {/* Glossary */}
      <section className="mx-auto mb-16 max-w-3xl">
        <h2 className="mb-6 text-2xl font-bold text-foreground">Glossary</h2>
        <Card>
          <CardHeader>
            <CardTitle>Key Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <Glossary terms={GLOSSARY_TERMS} />
          </CardContent>
        </Card>
      </section>

      {/* References */}
      <section className="mx-auto mb-16 max-w-3xl">
        <h2 className="mb-6 text-2xl font-bold text-foreground">
          Selected References
        </h2>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          {LEARN_REFERENCES.map((ref) => (
            <p key={ref} className="border-l-2 border-border pl-3">
              {ref}
            </p>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <p className="mx-auto max-w-2xl text-center text-xs text-muted-foreground">
        LimbicLab is an educational tool. It does{" "}
        <span className="font-semibold text-foreground">not</span> constitute
        medical advice, clinical guidelines, or a validated diagnostic instrument.
      </p>
    </main>
  );
}
