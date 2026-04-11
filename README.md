# Limbiclab

Computational psychiatry simulator modeling cannabis × hypomania interactions across polygenic bipolar risk — stochastic ODE engine, kindling model, and plain-language neuroscience explainer.

## Stack

- **Next.js 15** with App Router
- **TypeScript** (strict mode)
- **Tailwind CSS** with CSS-variable color palette
- **ESLint** (`next/core-web-vitals`)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/app
  layout.tsx          Root layout with metadata & next/font
  page.tsx            Landing / home page
  /simulator
    page.tsx          Mood simulation tool (interactive ODE)
  /learn
    page.tsx          Plain-language neuroscience explainer

/components
  /ui                 Shared UI primitives
    Button.tsx
    Card.tsx
    Badge.tsx
  /simulator          Simulator-specific components
    SimulatorForm.tsx
    SimulatorClient.tsx
    ResultsPanel.tsx
  /learn              Explainer-specific components
    ConceptCard.tsx
    Glossary.tsx

/lib
  simulation.ts       ODE engine, kindling model, risk-score logic
  types.ts            All shared TypeScript interfaces

/public               Static assets
```

## Key Interfaces (`lib/types.ts`)

| Interface | Purpose |
|---|---|
| `SimulationParams` | All inputs to a simulation run |
| `SimulationResult` | Output from `runSimulation()` |
| `GeneticLocus` | A single GWAS variant (id, gene, logOR, dosage) |
| `MoodState` | Point-in-time mood (valence, arousal, label) |
| `EpisodeCount` | Aggregated episode tallies |

## Simulator Model

The ODE engine integrates three coupled neurotransmitter variables — **dopamine (D)**, **serotonin (S)**, and **GABA (G)** — using first-order Euler with optional Gaussian noise.

Cannabis modulates:
- THC → ↑ dopamine set-point, ↓ GABA set-point (CB1 disinhibition)
- CBD → partial attenuation of THC dopamine surge

The **kindling model** decrements the manic-episode threshold by a factor of `exp(-0.07 × priorEpisodes)` compounded by a dynamic kindling index that grows with each simulated episode.

The **composite risk score** (0–100) weights polygenic risk (30 %), kindling (25 %), episode count (20 %), and cannabis exposure (25 %).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint via `next lint` |

## Disclaimer

LimbicLab is an **educational tool**. It does not constitute medical advice, clinical guidelines, or a validated diagnostic instrument.
