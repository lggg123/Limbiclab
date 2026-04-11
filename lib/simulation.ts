/**
 * simulation.ts
 *
 * Core computational engine for LimbicLab.
 *
 * Architecture:
 *  1. ODE engine  – Euler integration over a 3-variable neurotransmitter system
 *                   (dopamine D, serotonin S, GABA G).
 *  2. Kindling model – episode-history-driven threshold lowering.
 *  3. Risk-score logic – combines polygenic risk, cannabis exposure, and
 *                        kindling index into a single [0-100] composite score.
 */

import type {
  SimulationParams,
  SimulationResult,
  MoodState,
  MoodStateLabel,
  EpisodeCount,
  GeneticLocus,
} from "./types";

// ─── Seeded PRNG (Mulberry32) ────────────────────────────────────────────────

function mulberry32(seed: number): () => number {
  let s = seed >>> 0;
  return function () {
    s += 0x6d2b79f5;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) >>> 0;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ─── Helper: clamp ──────────────────────────────────────────────────────────

function clamp(v: number, lo = 0, hi = 1): number {
  return Math.max(lo, Math.min(hi, v));
}

// ─── Polygenic Risk Score ────────────────────────────────────────────────────

/**
 * Converts an array of GeneticLocus objects into a normalised polygenic risk
 * score in [0, 1].  Uses a weighted sum of (dosage × logOddsRatio) then maps
 * to a probability via a logistic function.
 */
export function computePolygenicRiskScore(loci: GeneticLocus[]): number {
  if (loci.length === 0) return 0;
  const rawScore = loci.reduce(
    (acc, locus) => acc + locus.dosage * locus.logOddsRatio,
    0
  );
  // Logistic transform centred at 0
  return 1 / (1 + Math.exp(-rawScore));
}

// ─── Kindling Model ──────────────────────────────────────────────────────────

/**
 * Returns the current manic-episode threshold given accumulated prior episodes
 * and the simulated kindling index.
 *
 * Threshold starts at 1.0 (no episodes) and decreases as episodes accumulate,
 * reflecting the biological observation that each episode lowers the threshold
 * for the next (Post, 1992).
 */
export function computeKindlingThreshold(
  priorEpisodes: number,
  kindlingIndex: number
): number {
  const base = Math.exp(-0.07 * priorEpisodes);
  const dynamic = Math.exp(-1.5 * kindlingIndex);
  return clamp(base * dynamic, 0.1, 1.0);
}

// ─── ODE Derivatives ────────────────────────────────────────────────────────

interface NTState {
  D: number; // dopamine
  S: number; // serotonin
  G: number; // GABA
}

/**
 * Computes dD/dt, dS/dt, dG/dt for a simplified neurotransmitter ODE.
 *
 * Inspired by Goldbeter-style oscillator models adapted for mood cycling.
 * Cannabis modulates:
 *   – Dopamine up  (THC agonism at CB1 receptors on VTA neurons)
 *   – Serotonin down slightly (acute THC)
 *   – GABA down (disinhibition via CB1 on GABA interneurons)
 * CBD partially reverses THC dopamine surge and stabilises GABA.
 */
function derivatives(
  state: NTState,
  params: SimulationParams
): NTState {
  const { D, S, G } = state;
  const { cannabisFrequency, thcPotency, cbdPotency } = params;

  // Cannabis effect magnitude (session-weighted, CBD-modulated)
  const thcEffect = cannabisFrequency * thcPotency * (1 - 0.4 * cbdPotency);
  const cbdEffect = cannabisFrequency * cbdPotency;

  // Mean-reversion rates
  const kD = 0.3;
  const kS = 0.25;
  const kG = 0.35;

  // Set-points (homeostasis)
  const D0 = 0.5 + 0.25 * thcEffect - 0.1 * cbdEffect;
  const S0 = 0.5 - 0.08 * thcEffect + 0.05 * cbdEffect;
  const G0 = 0.5 - 0.15 * thcEffect + 0.1 * cbdEffect;

  // Cross-coupling: high dopamine suppresses serotonin slightly; GABA inhibits D
  const dD = kD * (D0 - D) - 0.1 * G * D + 0.02 * S;
  const dS = kS * (S0 - S) - 0.05 * D * S;
  const dG = kG * (G0 - G) + 0.04 * S - 0.03 * D;

  return { D: dD, S: dS, G: dG };
}

// ─── Mood Label from NT State ─────────────────────────────────────────────────

function moodLabelFromState(
  valence: number,
  arousal: number
): MoodStateLabel {
  if (valence > 0.55 && arousal > 0.65) return "manic";
  if (valence > 0.3 && arousal > 0.5) return "hypomanic";
  if (valence < -0.3 && arousal < 0.5) return "depressed";
  if (Math.abs(valence) > 0.3 && Math.abs(arousal - 0.5) < 0.2) return "mixed";
  return "euthymic";
}

// ─── Main Simulation Function ────────────────────────────────────────────────

/**
 * Runs the full simulation and returns a `SimulationResult`.
 *
 * Uses first-order Euler integration with optional Gaussian noise.
 */
export function runSimulation(params: SimulationParams): SimulationResult {
  const {
    durationDays,
    dt,
    initialDopamine,
    initialSerotonin,
    initialGaba,
    noiseLevel,
    priorEpisodes,
    seed,
    geneticLoci,
    polygenicRiskScore,
  } = params;

  const rand = mulberry32(seed ?? Date.now());
  const randGaussian = (): number => {
    // Box-Muller transform
    const u1 = rand();
    const u2 = rand();
    return Math.sqrt(-2 * Math.log(u1 + 1e-10)) * Math.cos(2 * Math.PI * u2);
  };

  // Polygenic risk (0–1)
  const prs =
    polygenicRiskScore !== undefined
      ? clamp(polygenicRiskScore, 0, 1)
      : computePolygenicRiskScore(geneticLoci);

  // Initial NT state
  let state: NTState = {
    D: clamp(initialDopamine),
    S: clamp(initialSerotonin),
    G: clamp(initialGaba),
  };

  const steps = Math.round(durationDays / dt);
  const trajectory: MoodState[] = [];
  const episodes: EpisodeCount = {
    manic: 0,
    hypomanic: 0,
    depressive: 0,
    mixed: 0,
    total: 0,
  };

  let kindlingIndex = 0;
  let prevLabel: MoodStateLabel = "euthymic";

  for (let i = 0; i <= steps; i++) {
    const timeDay = i * dt;

    // Euler step
    const d = derivatives(state, params);
    const noise = (): number => noiseLevel * randGaussian();

    state = {
      D: clamp(state.D + d.D * dt + noise()),
      S: clamp(state.S + d.S * dt + noise()),
      G: clamp(state.G + d.G * dt + noise()),
    };

    // Derive mood from NT state
    const valence = (state.D - state.S) * 1.2 - (1 - state.G) * 0.4;
    const arousal = state.D * 0.6 + (1 - state.G) * 0.4;
    const valenceN = clamp((valence + 1) / 2) * 2 - 1; // keep in [-1,1]
    const arousalN = clamp(arousal);

    // Kindling threshold
    const threshold = computeKindlingThreshold(priorEpisodes, kindlingIndex);

    // Apply polygenic risk: lower threshold proportionally
    const effectiveThreshold = threshold * (1 - 0.35 * prs);

    // Upward-shift valence if above threshold (PRS amplifies excursions)
    const adjustedValence =
      valenceN + prs * 0.2 * Math.max(0, valenceN);

    const label = moodLabelFromState(
      Math.min(adjustedValence, effectiveThreshold * 1.5),
      arousalN
    );

    // Count episode transitions
    if (label !== prevLabel && label !== "euthymic") {
      switch (label) {
        case "manic":
          episodes.manic++;
          kindlingIndex = clamp(kindlingIndex + 0.08, 0, 1);
          break;
        case "hypomanic":
          episodes.hypomanic++;
          kindlingIndex = clamp(kindlingIndex + 0.04, 0, 1);
          break;
        case "depressed":
          episodes.depressive++;
          kindlingIndex = clamp(kindlingIndex + 0.05, 0, 1);
          break;
        case "mixed":
          episodes.mixed++;
          kindlingIndex = clamp(kindlingIndex + 0.06, 0, 1);
          break;
      }
      episodes.total = episodes.manic + episodes.hypomanic + episodes.depressive + episodes.mixed;
    }
    prevLabel = label;

    // Store every step (or thin for long simulations)
    if (i % Math.max(1, Math.round(1 / dt)) === 0 || i === steps) {
      trajectory.push({
        timeDay,
        valence: parseFloat(adjustedValence.toFixed(4)),
        arousal: parseFloat(arousalN.toFixed(4)),
        label,
      });
    }
  }

  // ─── Composite Risk Score (0–100) ─────────────────────────────────────────
  const riskScore = computeRiskScore({
    prs,
    kindlingIndex,
    episodeCount: episodes.total,
    cannabisFrequency: params.cannabisFrequency,
    thcPotency: params.thcPotency,
  });

  const riskSummary = riskSummaryFromScore(riskScore);

  return {
    trajectory,
    episodes,
    riskScore,
    kindlingIndex,
    finalDopamine: parseFloat(state.D.toFixed(4)),
    finalSerotonin: parseFloat(state.S.toFixed(4)),
    finalGaba: parseFloat(state.G.toFixed(4)),
    riskSummary,
  };
}

// ─── Risk Score Logic ────────────────────────────────────────────────────────

interface RiskInputs {
  prs: number;
  kindlingIndex: number;
  episodeCount: number;
  cannabisFrequency: number;
  thcPotency: number;
}

/**
 * Combines multiple risk factors into a single 0–100 score.
 *
 * Weights (approximate clinical importance):
 *   – Polygenic risk score:  30 %
 *   – Kindling index:        25 %
 *   – Episode count:         20 %
 *   – Cannabis × THC:        25 %
 */
export function computeRiskScore(inputs: RiskInputs): number {
  const {
    prs,
    kindlingIndex,
    episodeCount,
    cannabisFrequency,
    thcPotency,
  } = inputs;

  const prsComponent = prs * 30;
  const kindlingComponent = kindlingIndex * 25;
  const episodeComponent = Math.min(episodeCount / 10, 1) * 20;
  const cannabisComponent =
    Math.min(cannabisFrequency / 4, 1) * thcPotency * 25;

  const raw =
    prsComponent + kindlingComponent + episodeComponent + cannabisComponent;
  return parseFloat(clamp(raw, 0, 100).toFixed(1));
}

function riskSummaryFromScore(score: number): string {
  if (score < 20) return "Low risk — current parameters suggest a stable mood trajectory.";
  if (score < 40) return "Moderate-low risk — some vulnerability factors present; monitor closely.";
  if (score < 60) return "Moderate risk — significant interactions detected; consider clinical review.";
  if (score < 80) return "High risk — multiple risk amplifiers active; clinical intervention recommended.";
  return "Very high risk — severe convergence of genetic, kindling, and substance-use factors.";
}