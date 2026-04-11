// ─── Genetic & Polygenic Risk ────────────────────────────────────────────────

/** A single genetic variant contributing to polygenic risk. */
export interface GeneticLocus {
  /** rsID or other variant identifier, e.g. "rs4765913" */
  id: string;
  /** Human-readable gene name, e.g. "CACNA1C" */
  gene: string;
  /** Effect allele */
  allele: string;
  /** Log-odds ratio from GWAS */
  logOddsRatio: number;
  /** Minor allele frequency in reference population (0–1) */
  maf: number;
  /** Dosage carried by the subject (0, 1, or 2 copies) */
  dosage: 0 | 1 | 2;
}

// ─── Mood State ──────────────────────────────────────────────────────────────

/** Discrete mood state labels used in the kindling model. */
export type MoodStateLabel =
  | "euthymic"
  | "hypomanic"
  | "manic"
  | "depressed"
  | "mixed"
  | "unknown";

/** Continuous and categorical representation of a mood state at a point in time. */
export interface MoodState {
  /** Simulation time in days */
  timeDay: number;
  /** Continuous mood valence: -1 (severe depression) to +1 (severe mania) */
  valence: number;
  /** Arousal/energy level: 0 (low) to 1 (high) */
  arousal: number;
  /** Discrete mood label derived from valence + arousal */
  label: MoodStateLabel;
}

// ─── Episode Counts ──────────────────────────────────────────────────────────

/** Accumulated count of mood episodes over a simulation run. */
export interface EpisodeCount {
  manic: number;
  hypomanic: number;
  depressive: number;
  mixed: number;
  /** Total episodes (sum of above) */
  total: number;
}

// ─── Simulation Parameters ───────────────────────────────────────────────────

/** All inputs to a single simulation run. */
export interface SimulationParams {
  /** Duration of the simulation in days */
  durationDays: number;
  /** Integration time-step in days (default 0.1) */
  dt: number;

  // --- Cannabis exposure ---
  /** Daily cannabis use frequency (sessions per day, 0 = none) */
  cannabisFrequency: number;
  /** THC potency fraction (0–1) */
  thcPotency: number;
  /** CBD potency fraction (0–1) */
  cbdPotency: number;
  /** Days since cannabis onset (0 = starting now) */
  cannabisDaysElapsed: number;

  // --- Polygenic risk ---
  /** Array of risk-contributing loci. Leave empty for no genetic risk. */
  geneticLoci: GeneticLocus[];
  /** Pre-computed polygenic risk score override (optional, replaces loci sum) */
  polygenicRiskScore?: number;

  // --- Clinical history (kindling inputs) ---
  /** Number of prior mood episodes (drives kindling severity) */
  priorEpisodes: number;
  /** Age of mood-disorder onset in years */
  onsetAge: number;

  // --- Neurotransmitter initial conditions ---
  /** Initial dopamine tone (0–1, default 0.5) */
  initialDopamine: number;
  /** Initial serotonin tone (0–1, default 0.5) */
  initialSerotonin: number;
  /** Initial GABA tone (0–1, default 0.5) */
  initialGaba: number;

  // --- Noise ---
  /** Standard deviation of Gaussian noise added each step (default 0.02) */
  noiseLevel: number;
  /** Random seed for reproducibility (optional) */
  seed?: number;
}

// ─── Simulation Result ───────────────────────────────────────────────────────

/** Output returned after running a full simulation. */
export interface SimulationResult {
  /** Ordered time-series of mood states */
  trajectory: MoodState[];
  /** Aggregated episode counts */
  episodes: EpisodeCount;
  /** Composite risk score in [0, 100] */
  riskScore: number;
  /** Kindling severity index accumulated over the run (0 = none, 1 = maximal) */
  kindlingIndex: number;
  /** Final dopamine level at end of simulation */
  finalDopamine: number;
  /** Final serotonin level at end of simulation */
  finalSerotonin: number;
  /** Final GABA level at end of simulation */
  finalGaba: number;
  /** Human-readable summary of risk level */
  riskSummary: string;
}
