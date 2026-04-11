import type { Metadata } from "next";
import Link from "next/link";
import { ConceptCard } from "@/components/learn/ConceptCard";
import { Glossary } from "@/components/learn/Glossary";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Neuroscience Explainer",
  description:
    "Plain-language explanations of the neuroscience behind bipolar disorder, cannabis interactions, and polygenic risk.",
};

const concepts = [
  {
    emoji: "⚡",
    title: "Kindling Model",
    summary: "Why episodes beget episodes",
    detail:
      "In 1973, Robert Post proposed that mood episodes in bipolar disorder can be modelled like seizure kindling in animals. Each episode lowers the neurobiological threshold for the next — meaning that early treatment to prevent episodes may reduce long-term illness severity. In LimbicLab, every episode increments the kindling index, lowering the threshold parameter in the ODE system.",
  },
  {
    emoji: "🧬",
    title: "Polygenic Risk",
    summary: "Many small genetic variants combine to create vulnerability",
    detail:
      "Bipolar disorder is ~60–80 % heritable, but no single gene determines risk. Instead, hundreds of common variants — each with a tiny effect — combine into a polygenic risk score (PRS). Variants near genes like CACNA1C, ANK3, and NRXN1 are among the best-replicated. LimbicLab lets you specify individual loci (with log-odds ratios from GWAS) or enter a pre-computed PRS directly.",
  },
  {
    emoji: "🌿",
    title: "Cannabis & the Endocannabinoid System",
    summary: "CB1 receptors, dopamine, and mood destabilisation",
    detail:
      "THC is a partial agonist at CB1 receptors, which are densely expressed on GABAergic interneurons in the striatum, prefrontal cortex, and hippocampus. Acute THC disinhibits dopaminergic VTA neurons, causing a surge in nucleus-accumbens dopamine — the same circuit implicated in mania. High-CBD strains partially dampen this effect by modulating CB1 receptor signalling. Chronic heavy use is associated with a 2–4× increased risk of manic episodes in at-risk individuals.",
  },
  {
    emoji: "🔬",
    title: "Neurotransmitter ODE Model",
    summary: "Dopamine, serotonin, and GABA as coupled differential equations",
    detail:
      "LimbicLab uses a three-variable Euler-integrated ODE inspired by Goldbeter-style biochemical oscillators. Dopamine (D), serotonin (S), and GABA (G) each have a homeostatic set-point modulated by cannabis parameters. Cross-coupling terms capture the inhibitory role of GABA on dopamine, and the reciprocal effects between dopamine and serotonin. Gaussian noise is added each step to reflect biological stochasticity.",
  },
  {
    emoji: "📊",
    title: "Risk Score Composition",
    summary: "How the 0–100 composite score is calculated",
    detail:
      "The risk score weights four components: polygenic risk score (30 %), kindling index (25 %), total episode count (20 %), and cannabis use × THC potency (25 %). These weights are heuristic approximations of their relative clinical importance in research literature — they are not validated for individual clinical use.",
  },
  {
    emoji: "🧠",
    title: "Mood Valence & Arousal",
    summary: "The two-dimensional mood model",
    detail:
      "Mood is modelled on two axes — valence (depression ↔ mania) and arousal (low energy ↔ high energy) — loosely analogous to the Russell circumplex model. Valence is derived from the dopamine–serotonin difference; arousal from dopamine and GABA disinhibition. Discrete labels (euthymic, hypomanic, manic, depressed, mixed) are assigned by threshold rules on these continuous values.",
  },
];

const glossaryTerms = [
  {
    term: "Bipolar Disorder",
    definition:
      "A mood disorder characterised by episodes of mania or hypomania alternating with depression. Lifetime prevalence ≈ 2 %.",
  },
  {
    term: "Hypomania",
    definition:
      "A less severe form of mania lasting ≥ 4 days, without psychosis or hospitalisation. Criterion for Bipolar II.",
  },
  {
    term: "GWAS (Genome-Wide Association Study)",
    definition:
      "A study comparing millions of SNPs across cases and controls to find variants associated with a trait.",
  },
  {
    term: "Log-Odds Ratio",
    definition:
      "The natural logarithm of the odds ratio for a genetic variant; used as the effect size weight in polygenic risk calculations.",
  },
  {
    term: "CB1 Receptor",
    definition:
      "Cannabinoid receptor type 1, the primary brain target of THC. Most abundant in the basal ganglia, cerebellum, and hippocampus.",
  },
  {
    term: "ODE (Ordinary Differential Equation)",
    definition:
      "An equation relating a function to its derivatives. Used here to model how neurotransmitter levels change over time.",
  },
  {
    term: "Euler Method",
    definition:
      "A first-order numerical procedure for solving ODEs by approximating the next state from the current state and its derivative.",
  },
  {
    term: "Polygenic Risk Score (PRS)",
    definition:
      "A single number summarising an individual's genetic liability for a trait, calculated as a weighted sum of risk alleles.",
  },
  {
    term: "Kindling",
    definition:
      "Originally a seizure model: repeated sub-threshold stimulation lowers the threshold for full seizures. Post (1992) proposed an analogous mechanism for mood episodes.",
  },
  {
    term: "Stochastic",
    definition:
      "Involving random variables. A stochastic simulation includes noise terms, so each run can yield slightly different results.",
  },
];

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
        </div>

        <h1 className="mb-4 text-4xl font-bold text-foreground">
          Neuroscience Explainer
        </h1>
        <p className="text-lg text-muted-foreground">
          The science behind LimbicLab — explained without unnecessary jargon.
          Whether you&apos;re a clinician, researcher, or curious non-specialist, this
          guide walks through every concept the simulator uses.
        </p>
      </div>

      {/* Concepts */}
      <section className="mx-auto mb-16 max-w-3xl">
        <h2 className="mb-6 text-2xl font-bold text-foreground">Core Concepts</h2>
        <div className="flex flex-col gap-6">
          {concepts.map((c) => (
            <ConceptCard key={c.title} {...c} />
          ))}
        </div>
      </section>

      {/* Glossary */}
      <section className="mx-auto mb-16 max-w-3xl">
        <h2 className="mb-6 text-2xl font-bold text-foreground">Glossary</h2>
        <Card>
          <CardHeader>
            <CardTitle>Key Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <Glossary terms={glossaryTerms} />
          </CardContent>
        </Card>
      </section>

      {/* References */}
      <section className="mx-auto mb-16 max-w-3xl">
        <h2 className="mb-6 text-2xl font-bold text-foreground">
          Selected References
        </h2>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          {[
            "Post, R.M. (1992). Transduction of psychosocial stress into the neurobiology of recurrent affective disorder. American Journal of Psychiatry, 149(8), 999–1010.",
            "Bipolar Disorder Working Group of the Psychiatric Genomics Consortium (2021). Large-scale GWAS meta-analysis of bipolar disorder identifies 64 loci and clarifies the genetic basis of bipolar subtypes. Nature Genetics.",
            "Murray, R.M. et al. (2017). Traditional marijuana, high-potency cannabis and synthetic cannabinoids: increasing risk for psychosis. World Psychiatry, 16(2), 146–149.",
            "Goldbeter, A. (1996). Biochemical Oscillations and Cellular Rhythms. Cambridge University Press.",
            "Russell, J.A. (1980). A circumplex model of affect. Journal of Personality and Social Psychology, 39(6), 1161–1178.",
          ].map((ref) => (
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
