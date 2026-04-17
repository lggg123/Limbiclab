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
  family: string;
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
    family: "Control",
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
    family: "Cortical",
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
    family: "Cortical",
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
    family: "Cortical",
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
    family: "Cortical",
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
    family: "Limbic",
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
    family: "Limbic",
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
    family: "Subcortical",
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
    family: "Regulatory",
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
    family: "Subcortical",
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
    family: "Subcortical",
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
    family: "Regulatory",
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
    family: "Support",
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
    family: "Support",
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
    family: "Subcortical",
    x: "47%",
    y: "36%",
    color: "from-neutral-300/80 to-stone-200/80",
  },
];

const REGION_FAMILIES = ["Control", "Cortical", "Limbic", "Subcortical", "Regulatory", "Support"];

const CEREBRUM_OUTLINE_PATH =
  "M15,58 C14,43 22,28 35,20 C46,13 62,13 74,19 C85,25 91,36 91,47 C91,57 86,64 79,68 C73,72 69,75 63,77 C57,79 51,80 44,79 C35,78 27,75 21,70 C16,66 13,62 15,58 Z";

const BRAINSTEM_PATH =
  "M63,72 C66,74 68,77 68,81 C68,85 66,89 63,91 C60,89 59,85 59,81 C59,77 60,74 63,72 Z";

const CEREBELLUM_PATH =
  "M70,69 C76,67 82,69 85,74 C87,78 86,83 82,86 C77,89 71,88 67,84 C64,80 65,73 70,69 Z";

const MIDLINE_PATH = "M53,22 C53,32 54,40 55,48 C56,57 57,66 58,74";

const SULCI_PATHS = [
  "M24,33 C31,28 40,27 48,29",
  "M20,44 C29,39 42,39 53,43",
  "M21,56 C31,52 43,52 54,56",
  "M28,67 C38,63 48,63 57,66",
  "M56,31 C66,28 75,31 82,38",
  "M58,44 C68,42 77,46 82,54",
  "M57,57 C65,57 73,61 78,68",
];

const toRegionId = (name: string) =>
  `region-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;

const toPercentNumber = (value: string) => Number.parseFloat(value.replace("%", ""));

export function BrainAtlasClient() {
  const initialId = useMemo(() => toRegionId(BRAIN_REGIONS[0].name), []);
  const [activeRegionId, setActiveRegionId] = useState(initialId);

  const activeRegion = useMemo(
    () => BRAIN_REGIONS.find((region) => toRegionId(region.name) === activeRegionId) ?? BRAIN_REGIONS[0],
    [activeRegionId]
  );

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

      <div className="mx-auto mb-10 max-w-6xl">
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

        <h1 className="mb-4 max-w-4xl text-4xl font-bold sm:text-5xl lg:text-6xl">
          Brain Atlas: An Artistic Tour
        </h1>
        <p className="max-w-4xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          A creative map of major brain regions, from the hippocampus and amygdala
          to the cortex, cerebellum, and brainstem. Use the map for spatial intuition,
          then compare the selected region with its plain-language role and study notes.
        </p>
      </div>

      <section className="mx-auto grid max-w-6xl gap-8 xl:grid-cols-[1.2fr_0.9fr]">
        <Card className="relative overflow-hidden border-primary/30 bg-card/60 backdrop-blur">
          <CardHeader>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <CardTitle>Constellation Map</CardTitle>
                <p className="text-sm text-muted-foreground">
                  The map is now a cleaner navigator: dots show location, the active region gets the label.
                </p>
              </div>
              <div className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Active region: {activeRegion.name}
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="relative h-[520px] w-full rounded-2xl border border-border/50 bg-[radial-gradient(circle_at_50%_42%,rgba(99,102,241,0.12),transparent_26%),radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.08),transparent_22%),linear-gradient(180deg,rgba(10,16,31,0.94),rgba(9,14,26,0.98))] p-4 sm:h-[600px]">
              <svg
                aria-hidden="true"
                viewBox="0 0 100 100"
                className="pointer-events-none absolute inset-[7%_6%_18%_6%] h-auto w-auto"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="brainFill" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59,130,246,0.10)" />
                    <stop offset="45%" stopColor="rgba(99,102,241,0.12)" />
                    <stop offset="100%" stopColor="rgba(168,85,247,0.10)" />
                  </linearGradient>
                  <radialGradient id="brainGlow" cx="48%" cy="42%" r="45%">
                    <stop offset="0%" stopColor="rgba(148,163,184,0.18)" />
                    <stop offset="100%" stopColor="rgba(15,23,42,0)" />
                  </radialGradient>
                </defs>

                <path d={CEREBRUM_OUTLINE_PATH} fill="url(#brainGlow)" opacity="0.9" />
                <path
                  d={CEREBRUM_OUTLINE_PATH}
                  fill="url(#brainFill)"
                  stroke="hsl(var(--primary) / 0.42)"
                  strokeWidth="0.6"
                />
                <path
                  d={CEREBELLUM_PATH}
                  fill="rgba(148,163,184,0.09)"
                  stroke="hsl(var(--accent) / 0.3)"
                  strokeWidth="0.45"
                />
                <path
                  d={BRAINSTEM_PATH}
                  fill="rgba(148,163,184,0.08)"
                  stroke="hsl(var(--border) / 0.65)"
                  strokeWidth="0.45"
                />
                <path
                  d={MIDLINE_PATH}
                  stroke="hsl(var(--border) / 0.45)"
                  strokeWidth="0.35"
                  fill="none"
                  strokeDasharray="1.2 1.4"
                />
                {SULCI_PATHS.map((path) => (
                  <path
                    key={path}
                    d={path}
                    stroke="hsl(var(--border) / 0.28)"
                    strokeWidth="0.35"
                    fill="none"
                    strokeLinecap="round"
                  />
                ))}
              </svg>

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
                      className={isActive ? "animate-pulse" : "opacity-20"}
                      stroke={isActive ? "hsl(var(--primary) / 0.95)" : "hsl(var(--border) / 0.55)"}
                      strokeWidth={isActive ? "0.65" : "0.18"}
                      fill="none"
                      strokeDasharray={isActive ? "1.2 1.2" : "0.6 2.1"}
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
                      className={`h-4 w-4 rounded-full border border-white/10 bg-gradient-to-r ${region.color} transition-transform duration-300 group-hover:scale-125 ${
                        isActive
                          ? "scale-150 shadow-[0_0_32px_rgba(167,139,250,0.95)]"
                          : "shadow-[0_0_18px_rgba(255,255,255,0.18)]"
                      }`}
                    />
                    {isActive ? (
                      <div className="mt-3 -ml-1 rounded-full border border-primary/30 bg-background/90 px-3 py-1 text-xs font-semibold text-foreground shadow-lg shadow-primary/10 backdrop-blur">
                        {region.name}
                      </div>
                    ) : null}
                  </a>
                );
              })}

              <div
                aria-hidden="true"
                className="absolute left-[13%] top-[18%] rounded-full border border-border/40 bg-background/70 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground backdrop-blur"
              >
                frontal
              </div>
              <div
                aria-hidden="true"
                className="absolute left-[43%] top-[13%] rounded-full border border-border/40 bg-background/70 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground backdrop-blur"
              >
                parietal
              </div>
              <div
                aria-hidden="true"
                className="absolute right-[10%] top-[30%] rounded-full border border-border/40 bg-background/70 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground backdrop-blur"
              >
                occipital
              </div>
              <div
                aria-hidden="true"
                className="absolute left-[29%] bottom-[22%] rounded-full border border-border/40 bg-background/70 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground backdrop-blur"
              >
                temporal
              </div>

              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-border/50 bg-background/80 p-4 backdrop-blur">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                      {activeRegion.artisticCue}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-foreground">{activeRegion.name}</h3>
                  </div>
                  <div className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground">
                    {activeRegion.family}
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90">{activeRegion.role}</p>
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Browse by region family
              </p>
              <div className="space-y-3">
                {REGION_FAMILIES.map((family) => {
                  const regions = BRAIN_REGIONS.filter((region) => region.family === family);

                  return (
                    <div key={family} className="rounded-xl border border-border/50 bg-background/30 p-3">
                      <p className="mb-3 text-sm font-semibold text-foreground">{family}</p>
                      <div className="flex flex-wrap gap-2">
                        {regions.map((region) => {
                          const regionId = toRegionId(region.name);
                          const isActive = regionId === activeRegionId;

                          return (
                            <a
                              key={region.name}
                              href={`#${regionId}`}
                              onClick={() => setActiveRegionId(regionId)}
                              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                                isActive
                                  ? "border-primary/50 bg-primary/10 text-primary"
                                  : "border-border/60 bg-background/60 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                              }`}
                            >
                              {region.name}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-card/70 backdrop-blur">
          <CardHeader>
            <CardTitle>Region Notes</CardTitle>
            <p className="text-sm text-muted-foreground">
              One focused detail card, followed by a compact explorer for the full atlas.
            </p>
          </CardHeader>
          <CardContent className="space-y-5">
            <article id={activeRegionId} className="rounded-2xl border border-primary/40 bg-primary/10 p-5">
              <div className="mb-2 flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-foreground">{activeRegion.name}</h3>
                <span className="text-xs uppercase tracking-[0.2em] text-primary">
                  {activeRegion.artisticCue}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-foreground/90">
                <span className="font-semibold text-foreground">Definition: </span>
                {activeRegion.definition}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">{activeRegion.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {activeRegion.whyItMatters}
              </p>
            </article>

            <div className="max-h-[720px] space-y-3 overflow-auto pr-1">
              {BRAIN_REGIONS.filter(
                (region) => toRegionId(region.name) !== activeRegionId
              ).map((region) => {
                const regionId = toRegionId(region.name);

                return (
                  <article
                    key={region.name}
                    id={regionId}
                    className="rounded-lg border border-border/50 bg-background/40 p-4 transition-colors hover:border-border/80"
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
                    <p className="mt-2 text-sm text-foreground/90">{region.role}</p>
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
