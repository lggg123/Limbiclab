"use client";

import React, { useState, useCallback } from "react";
import type { SimulationParams, SimulationResult } from "@/lib/types";
import { runSimulation } from "@/lib/simulation";
import { SimulatorForm } from "@/components/simulator/SimulatorForm";
import { ResultsPanel } from "@/components/simulator/ResultsPanel";

const DEFAULT_PARAMS: SimulationParams = {
  durationDays: 365,
  dt: 0.1,
  cannabisFrequency: 1,
  thcPotency: 0.5,
  cbdPotency: 0.1,
  cannabisDaysElapsed: 0,
  geneticLoci: [],
  polygenicRiskScore: 0.3,
  priorEpisodes: 2,
  onsetAge: 22,
  initialDopamine: 0.5,
  initialSerotonin: 0.5,
  initialGaba: 0.5,
  noiseLevel: 0.03,
  seed: 42,
};

export function SimulatorClient() {
  const [params, setParams] = useState<SimulationParams>(DEFAULT_PARAMS);
  const [result, setResult] = useState<SimulationResult | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const handleChange = useCallback((updated: Partial<SimulationParams>) => {
    setParams((prev) => ({ ...prev, ...updated }));
  }, []);

  const handleRun = useCallback(() => {
    setIsRunning(true);
    // Run in a microtask so the UI can update the loading state first
    setTimeout(() => {
      try {
        const res = runSimulation(params);
        setResult(res);
      } finally {
        setIsRunning(false);
      }
    }, 0);
  }, [params]);

  return (
    <div className="grid gap-8 lg:grid-cols-[380px_1fr]">
      {/* Controls */}
      <aside className="rounded-xl border border-border bg-card p-6">
        <SimulatorForm
          params={params}
          onChange={handleChange}
          onRun={handleRun}
          isRunning={isRunning}
        />
      </aside>

      {/* Results */}
      <div>
        {result ? (
          <ResultsPanel result={result} />
        ) : (
          <div className="flex h-full min-h-[400px] items-center justify-center rounded-xl border border-dashed border-border">
            <p className="text-muted-foreground">
              Configure parameters and click{" "}
              <span className="font-semibold text-foreground">Run Simulation</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
