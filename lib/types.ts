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

/** Neurochemical state snapshot used for over-time charts. */
export interface NeurochemistryPoint {
  /** Simulation time in days */
  timeDay: number;
  /** Dopamine level (0-1) */
  dopamine: number;
  /** Serotonin level (0-1) */
  serotonin: number;
  /** GABA level (0-1) */
  gaba: number;
  /** Combined psychoactive exposure pressure (0-1) */
  substanceLoad: number;
}

export interface RiskBreakdown {
  prs: number;
  kindling: number;
  episodes: number;
  cannabis: number;
  alcohol: number;
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

  // --- Alcohol exposure ---
  /** Daily alcohol use frequency (drinks per day, 0 = none) */
  alcoholFrequency: number;
  /** Relative alcohol intensity/excess level (0-1) */
  alcoholIntensity: number;
  /** Days since alcohol onset (0 = starting now) */
  alcoholDaysElapsed: number;

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
  /** Ordered time-series of neurotransmitter and substance-load values */
  neurochemistry: NeurochemistryPoint[];
  /** Aggregated episode counts */
  episodes: EpisodeCount;
  /** Composite risk score in [0, 100] */
  riskScore: number;
  /** Contribution of each component to the risk score */
  riskBreakdown: RiskBreakdown;
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

// ─── Learn Content Types ────────────────────────────────────────────────────

export interface LearnConcept {
  emoji: string;
  title: string;
  summary: string;
  detail: string;
}

export interface DsmCategory {
  emoji: string;
  family: string;
  focus: string;
  examples: string[];
}

export interface DisorderProfile {
  name: string;
  family: string;
  keyFeatures: string;
  typicalOnset: string;
  contextNote: string;
  citations: string[];
}

export interface GlossaryEntry {
  term: string;
  definition: string;
}

export interface PsychoticDomain {
  domain: string;
  description: string;
  examples: string[];
  clinicalImportance: string;
}

export interface NeurotransmitterProfile {
  name: string;
  primaryRole: string;
  whenLow: string;
  whenHighOrDysregulated: string;
  learningNote: string;
}

export interface GeneProfile {
  symbol: string;
  fullName: string;
  whatItDoes: string;
  whyStudiedInPsychiatry: string;
  plainLanguageTakeaway: string;
}

export interface WorldviewTaxonomyEntry {
  name: string;
  summary: string;
  worldview: string;
  psychologicalProfile: string;
  evidenceNote: string;
}

export interface BrainAtlasComparison {
  region: string;
  atlasHash: string;
  role: string;
  positiveRitualPattern: string;
  threatRitualPattern: string;
}

export interface MechanismPanel {
  title: string;
  detail: string;
  clinicalMeaning: string;
}
