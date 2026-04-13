"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

type BrainRegion = {
  name: string;
  definition: string;
  role: string;
  whyItMatters: string;
  artisticCue: string;
  x: string;
  y: string;
  color: string;
};

const BRAIN_REGIONS: BrainRegion[] = [
  {
    name: "Prefrontal Cortex",
    definition:
      "The most anterior part of the frontal lobes, supporting top-down control of thought and behavior.",
    role: "Planning, decision-making, impulse control, and future-oriented thinking.",
    whyItMatters:
      "Helps regulate emotion and behavior, especially under stress and uncertainty.",
    artisticCue: "The Conductor",
    x: "18%",
    y: "32%",
    color: "from-sky-400/80 to-cyan-300/80",
  },
  {
    name: "Frontal Lobe",
    definition:
      "The front region of the cerebral cortex involved in executive processes, motor planning, and speech production.",
    role: "Executive function, language output, and voluntary motor planning.",
    whyItMatters: "Supports goal pursuit and flexible adaptation in daily life.",
    artisticCue: "The Strategist",
    x: "28%",
    y: "25%",
    color: "from-blue-400/80 to-indigo-300/80",
  },
  {
    name: "Parietal Lobe",
    definition:
      "A cortical region integrating touch, body position, and spatial information.",
    role: "Body awareness, sensory integration, and spatial attention.",
    whyItMatters: "Builds a moment-to-moment map of where you are in space.",
    artisticCue: "The Cartographer",
    x: "55%",
    y: "22%",
    color: "from-teal-400/80 to-emerald-300/80",
  },
  {
    name: "Temporal Lobe",
    definition:
      "A lateral cortical region important for hearing, language comprehension, and memory-related processing.",
    role: "Auditory processing, language comprehension, and memory linkage.",
    whyItMatters: "Helps convert sensory experience into meaningful memories.",
    artisticCue: "The Story Weaver",
    x: "42%",
    y: "62%",
    color: "from-amber-300/80 to-orange-300/80",
  },
  {
    name: "Occipital Lobe",
    definition:
      "The posterior cortical lobe primarily dedicated to visual processing.",
    role: "Primary visual processing and visual pattern interpretation.",
    whyItMatters: "Transforms light into recognizable scenes and symbols.",
    artisticCue: "The Lens",
    x: "78%",
    y: "38%",
    color: "from-fuchsia-400/80 to-pink-300/80",
  },
  {
    name: "Hippocampus",
    definition:
      "A medial temporal lobe structure essential for forming new declarative and contextual memories.",
    role: "Memory formation, contextual learning, and navigation through time/place.",
    whyItMatters:
      "Critical for turning short experiences into longer-term autobiographical memory.",
    artisticCue: "The Archivist",
    x: "50%",
    y: "56%",
    color: "from-violet-400/80 to-purple-300/80",
  },
  {
    name: "Amygdala",
    definition:
      "An almond-shaped limbic structure that rapidly evaluates emotional salience, especially threat-relevant cues.",
    role: "Threat salience, emotional tagging, and rapid affective response.",
    whyItMatters:
      "Shapes fear learning and emotional intensity during high-stakes moments.",
    artisticCue: "The Alarm Bell",
    x: "57%",
    y: "63%",
    color: "from-rose-400/80 to-red-300/80",
  },
  {
    name: "Thalamus",
    definition:
      "A deep diencephalic relay center routing sensory and motor signals to cortical targets.",
    role: "Relay hub routing sensory and motor signals to cortex.",
    whyItMatters: "Coordinates information flow so perception stays coherent.",
    artisticCue: "The Switchboard",
    x: "49%",
    y: "46%",
    color: "from-lime-300/80 to-green-300/80",
  },
  {
    name: "Hypothalamus",
    definition:
      "A small diencephalic control center linking neural activity to endocrine and autonomic regulation.",
    role: "Homeostasis control for hunger, sleep, temperature, and stress hormones.",
    whyItMatters: "Links brain state to endocrine and autonomic body regulation.",
    artisticCue: "The Thermostat",
    x: "46%",
    y: "68%",
    color: "from-yellow-300/80 to-amber-300/80",
  },
  {
    name: "Basal Ganglia",
    definition:
      "A set of subcortical nuclei that modulate movement, action selection, and habit learning.",
    role: "Action selection, habit circuits, and reward-guided movement.",
    whyItMatters: "Supports smooth initiation and inhibition of behavior.",
    artisticCue: "The Gatekeeper",
    x: "34%",
    y: "48%",
    color: "from-cyan-400/80 to-sky-300/80",
  },
  {
    name: "Nucleus Accumbens",
    definition:
      "A ventral striatal hub integrating dopamine and cortical input during reward and motivation processing.",
    role: "Reward anticipation, reinforcement learning, and motivation drive.",
    whyItMatters:
      "Plays a central role in craving, reinforcement, and effort investment.",
    artisticCue: "The Spark",
    x: "32%",
    y: "58%",
    color: "from-orange-400/80 to-rose-300/80",
  },
  {
    name: "Insula",
    definition:
      "A cortical region buried within the lateral sulcus that represents internal bodily states.",
    role: "Interoception, body-state awareness, and subjective feeling tone.",
    whyItMatters:
      "Helps convert heartbeat, breath, and gut signals into conscious experience.",
    artisticCue: "The Inner Mirror",
    x: "39%",
    y: "54%",
    color: "from-emerald-400/80 to-teal-300/80",
  },
  {
    name: "Cerebellum",
    definition:
      "A hindbrain structure that fine-tunes movement timing and contributes to predictive coordination.",
    role: "Fine motor calibration, timing, and error correction.",
    whyItMatters: "Improves movement precision and contributes to cognitive timing.",
    artisticCue: "The Metronome",
    x: "79%",
    y: "70%",
    color: "from-indigo-400/80 to-blue-300/80",
  },
  {
    name: "Brainstem",
    definition:
      "The midbrain, pons, and medulla complex connecting brain and spinal cord while controlling vital functions.",
    role: "Core life support: breathing, heart rate, arousal, and sleep-wake regulation.",
    whyItMatters: "Maintains fundamental survival functions beneath conscious control.",
    artisticCue: "The Lifeline",
    x: "64%",
    y: "78%",
    color: "from-slate-400/80 to-zinc-300/80",
  },
  {
    name: "Corpus Callosum",
    definition:
      "The largest white-matter commissure connecting homologous areas of the two cerebral hemispheres.",
    role: "Major fiber tract connecting left and right hemispheres.",
    whyItMatters:
      "Enables cross-hemisphere integration of language, perception, and motor plans.",
    artisticCue: "The Bridge",
    x: "47%",
    y: "36%",
    color: "from-neutral-300/80 to-stone-200/80",
  },
];

const toRegionId = (name: string) =>
  `region-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;

const toPercentNumber = (value: string) => Number.parseFloat(value.replace("%", ""));

export function BrainAtlasClient() {
  const initialId = useMemo(() => toRegionId(BRAIN_REGIONS[0].name), []);
  const [activeRegionId, setActiveRegionId] = useState(initialId);

  useEffect(() => {
    const updateFromHash = () => {
      const nextId = window.location.hash.replace("#", "");
      if (nextId) {
        setActiveRegionId(nextId);
      }
    };

    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);
    return () => window.removeEventListener("hashchange", updateFromHash);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-12 scroll-smooth">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--accent)/0.24),transparent_35%),radial-gradient(circle_at_80%_15%,hsl(var(--primary)/0.2),transparent_30%),radial-gradient(circle_at_50%_80%,hsl(var(--secondary)/0.35),transparent_40%)]"
      />

      <div className="mx-auto mb-10 max-w-5xl">
        <Link
          href="/"
          className="mb-4 inline-block text-sm text-muted-foreground hover:text-foreground"
        >
          ← Back to home
        </Link>

        <div className="mb-4 flex flex-wrap gap-2">
          <Badge>Creative Atlas</Badge>
          <Badge variant="outline">Neuroanatomy</Badge>
          <Badge variant="outline">Plain Language</Badge>
        </div>

        <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
          Brain Atlas: An Artistic Tour
        </h1>
        <p className="max-w-3xl text-base text-muted-foreground sm:text-lg">
          A creative map of major brain regions, from the hippocampus and amygdala
          to the cortex, cerebellum, and brainstem. Tap any node to connect structure
          with function.
        </p>
      </div>

      <section className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_1fr]">
        <Card className="relative overflow-hidden border-primary/30 bg-card/60 backdrop-blur">
          <CardHeader>
            <CardTitle>Constellation Map</CardTitle>
            <p className="text-sm text-muted-foreground">
              Each point marks a key region. Click a node to jump to its definition and notes.
            </p>
          </CardHeader>
          <CardContent>
            <div className="relative h-[480px] w-full rounded-xl border border-border/50 bg-gradient-to-b from-background/40 to-background/70">
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[360px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-border/40 bg-primary/5 blur-[0.2px]"
              />

              <svg
                aria-hidden="true"
                viewBox="0 0 100 100"
                className="pointer-events-none absolute inset-0 h-full w-full"
                preserveAspectRatio="none"
              >
                {BRAIN_REGIONS.map((region) => {
                  const regionId = toRegionId(region.name);
                  const isActive = regionId === activeRegionId;
                  const x = toPercentNumber(region.x);
                  const y = toPercentNumber(region.y);
                  const tx = 50;
                  const ty = 50;
                  const cx = (x + tx) / 2;
                  const cy = (y + ty) / 2 - 4;

                  return (
                    <path
                      key={`line-${region.name}`}
                      d={`M ${x} ${y} Q ${cx} ${cy} ${tx} ${ty}`}
                      className={isActive ? "animate-pulse" : "opacity-50"}
                      stroke={isActive ? "hsl(var(--primary) / 0.95)" : "hsl(var(--border) / 0.65)"}
                      strokeWidth={isActive ? "0.55" : "0.32"}
                      fill="none"
                      strokeDasharray="0.8 1.4"
                    />
                  );
                })}
              </svg>

              {BRAIN_REGIONS.map((region) => {
                const regionId = toRegionId(region.name);
                const isActive = regionId === activeRegionId;

                return (
                  <a
                    key={region.name}
                    href={`#${regionId}`}
                    aria-label={`Jump to ${region.name} definition`}
                    title={`Jump to ${region.name}`}
                    onClick={() => setActiveRegionId(regionId)}
                    className="group absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: region.x, top: region.y }}
                  >
                    <div
                      className={`h-4 w-4 rounded-full bg-gradient-to-r ${region.color} transition-transform duration-300 group-hover:scale-125 ${
                        isActive
                          ? "scale-125 shadow-[0_0_28px_rgba(167,139,250,0.95)]"
                          : "shadow-[0_0_22px_rgba(255,255,255,0.25)]"
                      }`}
                    />
                    <p
                      className={`mt-2 whitespace-nowrap text-xs transition-opacity ${
                        isActive
                          ? "font-semibold text-foreground opacity-100"
                          : "text-foreground/85 opacity-80 group-hover:opacity-100"
                      }`}
                    >
                      {region.name}
                    </p>
                  </a>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-card/70 backdrop-blur">
          <CardHeader>
            <CardTitle>Region Notes</CardTitle>
            <p className="text-sm text-muted-foreground">
              Quick, plain-language descriptions for study and exploration.
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {BRAIN_REGIONS.map((region) => {
                const regionId = toRegionId(region.name);
                const isActive = regionId === activeRegionId;

                return (
                  <article
                    key={region.name}
                    id={regionId}
                    className={`rounded-lg border bg-background/40 p-4 transition-colors ${
                      isActive
                        ? "border-primary/80 bg-primary/10"
                        : "border-border/50"
                    }`}
                  >
                    <div className="mb-1 flex items-center justify-between gap-3">
                      <h3 className="text-sm font-semibold text-foreground">{region.name}</h3>
                      <span className="text-xs uppercase tracking-wide text-muted-foreground">
                        {region.artisticCue}
                      </span>
                    </div>
                    <p className="text-sm text-foreground/90">
                      <span className="font-semibold text-foreground">Definition: </span>
                      {region.definition}
                    </p>
                    <p className="text-sm text-foreground/90">{region.role}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{region.whyItMatters}</p>
                  </article>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </section>

      <p className="mx-auto mt-10 max-w-3xl text-center text-xs text-muted-foreground">
        Educational illustration only. Neuroanatomy is more complex than a single static map,
        and functions emerge from distributed circuits.
      </p>
    </main>
  );
}
