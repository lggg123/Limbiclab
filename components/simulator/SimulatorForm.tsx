"use client";

import React from "react";
import type { SimulationParams } from "@/lib/types";

interface SimulatorFormProps {
  params: SimulationParams;
  onChange: (updated: Partial<SimulationParams>) => void;
  onRun: () => void;
  isRunning: boolean;
}

interface SliderRowProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit?: string;
  onChange: (v: number) => void;
}

function SliderRow({ label, value, min, max, step, unit = "", onChange }: SliderRowProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-mono text-foreground">
          {value.toFixed(step < 1 ? 2 : 0)}
          {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="h-2 w-full cursor-pointer accent-primary"
      />
    </div>
  );
}

export function SimulatorForm({ params, onChange, onRun, isRunning }: SimulatorFormProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* Duration */}
      <section>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Simulation
        </h3>
        <div className="flex flex-col gap-4">
          <SliderRow
            label="Duration"
            value={params.durationDays}
            min={30}
            max={730}
            step={10}
            unit=" days"
            onChange={(v) => onChange({ durationDays: v })}
          />
          <SliderRow
            label="Noise level"
            value={params.noiseLevel}
            min={0}
            max={0.2}
            step={0.005}
            onChange={(v) => onChange({ noiseLevel: v })}
          />
        </div>
      </section>

      {/* Cannabis */}
      <section>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Cannabis Exposure
        </h3>
        <div className="flex flex-col gap-4">
          <SliderRow
            label="Use frequency"
            value={params.cannabisFrequency}
            min={0}
            max={4}
            step={0.1}
            unit="×/day"
            onChange={(v) => onChange({ cannabisFrequency: v })}
          />
          <SliderRow
            label="THC potency"
            value={params.thcPotency}
            min={0}
            max={1}
            step={0.01}
            onChange={(v) => onChange({ thcPotency: v })}
          />
          <SliderRow
            label="CBD potency"
            value={params.cbdPotency}
            min={0}
            max={1}
            step={0.01}
            onChange={(v) => onChange({ cbdPotency: v })}
          />
        </div>
      </section>

      {/* Alcohol */}
      <section>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Alcohol Exposure
        </h3>
        <div className="flex flex-col gap-4">
          <SliderRow
            label="Use frequency"
            value={params.alcoholFrequency}
            min={0}
            max={8}
            step={0.1}
            unit=" drinks/day"
            onChange={(v) => onChange({ alcoholFrequency: v })}
          />
          <SliderRow
            label="Intensity"
            value={params.alcoholIntensity}
            min={0}
            max={1}
            step={0.01}
            onChange={(v) => onChange({ alcoholIntensity: v })}
          />
          <SliderRow
            label="Days since onset"
            value={params.alcoholDaysElapsed}
            min={0}
            max={3650}
            step={1}
            unit=" days"
            onChange={(v) => onChange({ alcoholDaysElapsed: v })}
          />
        </div>
      </section>

      {/* Genetic */}
      <section>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Polygenic Risk
        </h3>
        <div className="flex flex-col gap-4">
          <SliderRow
            label="Polygenic risk score"
            value={params.polygenicRiskScore ?? 0}
            min={0}
            max={1}
            step={0.01}
            onChange={(v) => onChange({ polygenicRiskScore: v })}
          />
        </div>
      </section>

      {/* Clinical history */}
      <section>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Clinical History
        </h3>
        <div className="flex flex-col gap-4">
          <SliderRow
            label="Prior episodes"
            value={params.priorEpisodes}
            min={0}
            max={20}
            step={1}
            onChange={(v) => onChange({ priorEpisodes: v })}
          />
          <SliderRow
            label="Onset age"
            value={params.onsetAge}
            min={10}
            max={50}
            step={1}
            unit=" yrs"
            onChange={(v) => onChange({ onsetAge: v })}
          />
        </div>
      </section>

      <button
        onClick={onRun}
        disabled={isRunning}
        className="mt-2 h-12 w-full rounded-xl bg-primary px-6 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
      >
        {isRunning ? "Simulating…" : "Run Simulation"}
      </button>
    </div>
  );
}