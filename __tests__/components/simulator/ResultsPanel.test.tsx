import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ResultsPanel } from "@/components/simulator/ResultsPanel";
import type { SimulationResult } from "@/lib/types";

function makeResult(overrides: Partial<SimulationResult> = {}): SimulationResult {
  return {
    trajectory: [
      { timeDay: 0, valence: 0.1, arousal: 0.5, label: "euthymic" },
      { timeDay: 1, valence: 0.2, arousal: 0.6, label: "euthymic" },
    ],
    neurochemistry: [
      { timeDay: 0, dopamine: 0.5, serotonin: 0.5, gaba: 0.5, substanceLoad: 0 },
    ],
    episodes: {
      manic: 1,
      hypomanic: 2,
      depressive: 3,
      mixed: 1,
      total: 7,
    },
    riskScore: 45,
    riskBreakdown: { prs: 10, kindling: 10, episodes: 10, cannabis: 10, alcohol: 5 },
    kindlingIndex: 0.3,
    finalDopamine: 0.52,
    finalSerotonin: 0.48,
    finalGaba: 0.51,
    riskSummary: "Moderate risk — significant interactions detected; consider clinical review.",
    ...overrides,
  };
}

describe("ResultsPanel", () => {
  it("renders the composite risk score", () => {
    render(<ResultsPanel result={makeResult({ riskScore: 45 })} />);
    expect(screen.getByText("45 / 100")).toBeInTheDocument();
  });

  it("renders the risk summary text", () => {
    render(<ResultsPanel result={makeResult()} />);
    expect(
      screen.getByText(/Moderate risk — significant interactions detected/)
    ).toBeInTheDocument();
  });

  it("renders the 'Mood Trajectory' heading", () => {
    render(<ResultsPanel result={makeResult()} />);
    expect(screen.getByText("Mood Trajectory")).toBeInTheDocument();
  });

  it("renders the 'Episode Summary' heading", () => {
    render(<ResultsPanel result={makeResult()} />);
    expect(screen.getByText("Episode Summary")).toBeInTheDocument();
  });

  it("renders the 'Final State' heading", () => {
    render(<ResultsPanel result={makeResult()} />);
    expect(screen.getByText("Final State")).toBeInTheDocument();
  });

  it("renders manic episode count", () => {
    render(<ResultsPanel result={makeResult({ episodes: { manic: 3, hypomanic: 0, depressive: 0, mixed: 0, total: 3 } })} />);
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("renders all episode type badges", () => {
    render(<ResultsPanel result={makeResult()} />);
    expect(screen.getByText("Manic")).toBeInTheDocument();
    expect(screen.getByText("Hypomanic")).toBeInTheDocument();
    expect(screen.getByText("Depressed")).toBeInTheDocument();
    expect(screen.getByText("Mixed")).toBeInTheDocument();
  });

  it("renders final neurotransmitter labels", () => {
    render(<ResultsPanel result={makeResult()} />);
    expect(screen.getByText("Dopamine")).toBeInTheDocument();
    expect(screen.getByText("Serotonin")).toBeInTheDocument();
    expect(screen.getByText("GABA")).toBeInTheDocument();
    expect(screen.getByText("Kindling index")).toBeInTheDocument();
  });

  it("renders final dopamine value formatted to 3 decimal places", () => {
    render(<ResultsPanel result={makeResult({ finalDopamine: 0.52 })} />);
    expect(screen.getByText("0.520")).toBeInTheDocument();
  });

  it("renders final serotonin value", () => {
    render(<ResultsPanel result={makeResult({ finalSerotonin: 0.48 })} />);
    expect(screen.getByText("0.480")).toBeInTheDocument();
  });

  it("renders final GABA value", () => {
    render(<ResultsPanel result={makeResult({ finalGaba: 0.51 })} />);
    expect(screen.getByText("0.510")).toBeInTheDocument();
  });

  it("renders kindling index value", () => {
    render(<ResultsPanel result={makeResult({ kindlingIndex: 0.3 })} />);
    expect(screen.getByText("0.300")).toBeInTheDocument();
  });

  it("renders SVG chart when trajectory has 2+ points", () => {
    render(<ResultsPanel result={makeResult()} />);
    const svg = document.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("aria-label", "Mood trajectory chart");
  });

  it("does not render SVG chart when trajectory has fewer than 2 points", () => {
    const result = makeResult({
      trajectory: [{ timeDay: 0, valence: 0.1, arousal: 0.5, label: "euthymic" }],
    });
    render(<ResultsPanel result={result} />);
    expect(document.querySelector("svg")).not.toBeInTheDocument();
  });

  it("renders zero episode counts correctly", () => {
    render(
      <ResultsPanel
        result={makeResult({
          episodes: { manic: 0, hypomanic: 0, depressive: 0, mixed: 0, total: 0 },
        })}
      />
    );
    // All four count cells should show "0"
    const zeros = screen.getAllByText("0");
    expect(zeros.length).toBeGreaterThanOrEqual(4);
  });

  it("renders 'Composite Risk Score' label", () => {
    render(<ResultsPanel result={makeResult()} />);
    expect(screen.getByText("Composite Risk Score")).toBeInTheDocument();
  });

  it("renders risk meter bar with width matching score percent", () => {
    render(<ResultsPanel result={makeResult({ riskScore: 60 })} />);
    const bar = document.querySelector("[style*='60%']");
    expect(bar).toBeInTheDocument();
  });

  it("renders legend labels for the chart", () => {
    render(<ResultsPanel result={makeResult()} />);
    expect(screen.getByText(/Mood valence/)).toBeInTheDocument();
    expect(screen.getByText(/Arousal/)).toBeInTheDocument();
  });

  it("high risk score (>=80) shows correct risk summary category", () => {
    render(
      <ResultsPanel
        result={makeResult({
          riskScore: 85,
          riskSummary: "Very high risk — severe convergence of genetic, kindling, and substance-use factors.",
        })}
      />
    );
    expect(screen.getByText(/Very high risk/)).toBeInTheDocument();
  });
});