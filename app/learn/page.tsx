import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ConceptCard } from "@/components/learn/ConceptCard";
import { DsmCategoryCard } from "@/components/learn/DsmCategoryCard";
import { DisorderExplorer } from "@/components/learn/DisorderExplorer";
import { Glossary, toGlossaryTermId } from "@/components/learn/Glossary";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  LEARN_CONCEPTS,
  DSM5_CATEGORIES,
  DISORDER_SPOTLIGHTS,
  PSYCHOTIC_SYMPTOM_DOMAINS,
  STRESS_DIATHESIS_PARAGRAPHS,
  NEUROTRANSMITTER_PROFILES,
  GENE_PRIMER_PARAGRAPHS,
  PRIORITY_GENE_PROFILES,
  GLOSSARY_TERMS,
  LEARN_REFERENCES,
  WORLDVIEW_CASE_STUDY_INTRO,
  WORLDVIEW_TAXONOMY,
  WORLDVIEW_BRAIN_MAP,
  WORLDVIEW_MECHANISM_PANELS,
  WORLDVIEW_EVIDENCE_BOUNDARIES,
  WORLDVIEW_CASE_STUDY_REFERENCES,
} from "@/lib/learnContent";

export const metadata: Metadata = {
  title: "Neuroscience Explainer",
  description:
    "Plain-language explanations of neuroscience concepts, brain-region mapping, and evidence-aware worldview case studies.",
};

export default function LearnPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_15%,hsl(var(--primary)/0.16),transparent_28%),radial-gradient(circle_at_80%_18%,hsl(var(--accent)/0.14),transparent_24%),radial-gradient(circle_at_50%_80%,hsl(var(--secondary)/0.34),transparent_40%)]"
      />

      {/* Header */}
      <section className="mx-auto mb-16 grid max-w-6xl gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
        <div>
          <Link
            href="/"
            className="mb-4 inline-block text-sm text-muted-foreground hover:text-foreground"
          >
            ← Back to home
          </Link>

          <div className="mb-4 flex flex-wrap gap-2">
            <Badge>Neuroscience</Badge>
            <Badge variant="outline">Brain Atlas Linked</Badge>
            <Badge variant="outline">Evidence-Aware</Badge>
            <Badge variant="outline">DSM-5 Context</Badge>
          </div>

          <h1 className="mb-4 max-w-4xl text-4xl font-bold text-foreground sm:text-5xl">
            Neuroscience Explainer
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
            A clearer research brief for the whole site: core concepts, disorder framing,
            and brain-based case-study analysis mapped directly onto the atlas so the
            anatomy and the interpretation live in the same place.
          </p>
        </div>

        <Card className="border-primary/30 bg-card/70 backdrop-blur">
          <CardHeader>
            <CardTitle>Inside This Guide</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              Start with the core neuroscience concepts, then use the worldview case-study
              section to compare ritual mechanisms against the regions in the creative atlas.
            </p>
            <div className="grid gap-2 text-foreground/90 sm:grid-cols-2">
              <div className="rounded-lg border border-border/60 bg-background/40 p-3">
                Core concepts and DSM study map
              </div>
              <div className="rounded-lg border border-border/60 bg-background/40 p-3">
                Brain-region comparison cards
              </div>
              <div className="rounded-lg border border-border/60 bg-background/40 p-3">
                Neurochemistry and stress systems
              </div>
              <div className="rounded-lg border border-border/60 bg-background/40 p-3">
                Evidence limits and references
              </div>
            </div>
            <div className="flex flex-wrap gap-3 pt-1">
              <Button asChild>
                <Link href="/brain">Open Brain Atlas</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="#worldview-case-study">Jump to Case Study</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href={`#${toGlossaryTermId("Cognitive Dissonance")}`}>
                  Jump to Dissonance
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Concepts */}
      <section className="mx-auto mb-16 max-w-6xl">
        <h2 className="mb-6 text-2xl font-bold text-foreground">Core Concepts</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {LEARN_CONCEPTS.map((c) => (
            <ConceptCard key={c.title} {...c} />
          ))}
        </div>
      </section>

      {/* Worldview case study */}
      <section id="worldview-case-study" className="mx-auto mb-16 max-w-6xl scroll-mt-24">
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <Badge>Case Study</Badge>
          <Badge variant="outline">Belief Systems</Badge>
          <Badge variant="outline">Ritual Neuroscience</Badge>
          <Badge variant="outline">Contested Areas Marked</Badge>
        </div>

        <div className="mb-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="border-primary/30 bg-card/75 backdrop-blur">
            <CardHeader>
              <CardTitle>Satanism as a Worldview Case Study</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-relaxed text-foreground/90">
              {WORLDVIEW_CASE_STUDY_INTRO.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border/70 bg-card/65 backdrop-blur">
            <CardHeader>
              <CardTitle>Compare It to the Brain Map</CardTitle>
              <p className="text-sm text-muted-foreground">
                These atlas nodes are the most relevant anchors for ritual, threat,
                memory, salience, and stress regulation.
              </p>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              {WORLDVIEW_BRAIN_MAP.map((item) => (
                <Link
                  key={item.region}
                  href={`/brain#${item.atlasHash}`}
                  className="rounded-xl border border-border/60 bg-background/50 p-4 transition-colors hover:border-primary/60 hover:bg-primary/5"
                >
                  <p className="text-sm font-semibold text-foreground">{item.region}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {item.role}
                  </p>
                </Link>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {WORLDVIEW_TAXONOMY.map((entry) => (
            <Card key={entry.name} className="border-border/70 bg-card/60 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-lg">{entry.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{entry.summary}</p>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-relaxed text-foreground/90">
                <p>
                  <span className="font-semibold text-foreground">Worldview: </span>
                  {entry.worldview}
                </p>
                <p>
                  <span className="font-semibold text-foreground">Adherent profile: </span>
                  {entry.psychologicalProfile}
                </p>
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Evidence note: </span>
                  {entry.evidenceNote}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-6 border-primary/25 bg-primary/5">
          <CardHeader>
            <CardTitle>Atlas Comparison: Positive Ritual vs. Threat Ritual</CardTitle>
            <p className="text-sm text-muted-foreground">
              The contrast below is about conditioning environment, not moral labeling.
              Safe, restorative ritual and fear-heavy ritual recruit overlapping circuits in
              very different ways.
            </p>
          </CardHeader>
          <CardContent className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {WORLDVIEW_BRAIN_MAP.map((item) => (
              <Card key={`${item.region}-comparison`} className="border-border/60 bg-background/50 shadow-none">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="text-lg">{item.region}</CardTitle>
                    <Link
                      href={`/brain#${item.atlasHash}`}
                      className="text-xs font-medium text-primary hover:text-primary/80"
                    >
                      View atlas node
                    </Link>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </CardHeader>
                <CardContent className="space-y-3 text-sm leading-relaxed text-foreground/90">
                  <div className="rounded-lg border border-success/20 bg-success/10 p-3">
                    <p className="mb-1 font-semibold text-foreground">Supportive / healing pattern</p>
                    <p>{item.positiveRitualPattern}</p>
                  </div>
                  <div className="rounded-lg border border-warning/20 bg-warning/10 p-3">
                    <p className="mb-1 font-semibold text-foreground">Threat / coercive pattern</p>
                    <p>{item.threatRitualPattern}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        <div className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {WORLDVIEW_MECHANISM_PANELS.map((panel) => (
            <Card key={panel.title} className="border-border/70 bg-card/60 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-lg">{panel.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-relaxed text-foreground/90">
                <p>{panel.detail}</p>
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Why it matters: </span>
                  {panel.clinicalMeaning}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="border-border/70 bg-card/65 backdrop-blur">
            <CardHeader>
              <CardTitle>Evidence Boundaries</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-relaxed text-foreground/90">
              {WORLDVIEW_EVIDENCE_BOUNDARIES.map((item) => (
                <div key={item} className="rounded-lg border border-border/60 bg-background/40 p-3">
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border/70 bg-card/65 backdrop-blur">
            <CardHeader>
              <CardTitle>Selected References for This Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              {WORLDVIEW_CASE_STUDY_REFERENCES.map((ref) => (
                <p key={ref} className="border-l-2 border-border pl-3">
                  {ref}
                </p>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Neurotransmitter primer */}
      <section className="mx-auto mb-16 max-w-6xl">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Dopamine, GABA, and Serotonin
        </h2>
        <p className="mb-6 text-sm text-muted-foreground">
          These systems interact continuously. In neuroscience, symptoms usually reflect
          circuit-level imbalance over time, not one neurotransmitter acting alone.
        </p>
        <div className="grid gap-4 lg:grid-cols-3">
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

      {/* Gene primer */}
      <section className="mx-auto mb-16 max-w-6xl">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Genes: What They Are (and Why CACNA1C, ANK3, NRXN1 Matter)
        </h2>
        <div className="mb-6 max-w-4xl space-y-3 text-sm leading-relaxed text-muted-foreground">
          {GENE_PRIMER_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {PRIORITY_GENE_PROFILES.map((gene) => (
            <Card key={gene.symbol}>
              <CardHeader>
                <CardTitle>{gene.symbol}</CardTitle>
                <p className="text-sm text-muted-foreground">{gene.fullName}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-foreground/90">
                  <span className="font-semibold text-foreground">What it does: </span>
                  {gene.whatItDoes}
                </p>
                <p className="text-sm text-foreground/90">
                  <span className="font-semibold text-foreground">
                    Why it is studied in psychiatry: 
                  </span>
                  {gene.whyStudiedInPsychiatry}
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold">Plain-language takeaway: </span>
                  {gene.plainLanguageTakeaway}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* DSM-5 section */}
      <section className="mx-auto mb-16 max-w-6xl">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          DSM-5 Disorder Families (Study Map)
        </h2>
        <p className="mb-6 text-sm text-muted-foreground">
          DSM categories organize symptom patterns for communication and research.
          They are not moral labels and should not be used to reduce a person to a diagnosis.
        </p>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
      <section className="mx-auto mb-16 max-w-4xl">
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
      <section className="mx-auto mb-16 max-w-4xl">
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
      <section className="mx-auto mb-16 max-w-4xl">
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
