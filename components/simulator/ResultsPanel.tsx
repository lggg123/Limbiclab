"use client";

import React from "react";
import type { SimulationResult, MoodState } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

interface ResultsPanelProps {
  result: SimulationResult;
}

function RiskMeter({ score }: { score: number }) {
  const pct = score;
  const color =
    score < 20
      ? "bg-success"
      : score < 40
      ? "bg-success/70"
      : score < 60
      ? "bg-warning"
      : score < 80
      ? "bg-destructive/70"
      : "bg-destructive";

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">Composite Risk Score</span>
        <span className="font-mono font-bold text-foreground">{score} / 100</span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
        <div
          className={`h-full rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="text-xs text-muted-foreground">{/* summary shown below */}</p>
    </div>
  );
}

function MoodChart({ trajectory }: { trajectory: MoodState[] }) {
  const width = 600;
  const height = 120;
  const pad = 8;

  if (trajectory.length < 2) return null;

  const tMax = trajectory[trajectory.length - 1].timeDay;
  const scaleX = (t: number) => pad + ((t / tMax) * (width - 2 * pad));
  const scaleY = (v: number) => height / 2 - (v * (height / 2 - pad));

  const points = trajectory
    .map((p) => `${scaleX(p.timeDay)},${scaleY(p.valence)}`)
    .join(" ");

  const arousalPoints = trajectory
    .map((p) => `${scaleX(p.timeDay)},${scaleY(p.arousal * 2 - 1)}`)
    .join(" ");

  return (
    <div className="overflow-x-auto">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full rounded-lg bg-muted/30"
        aria-label="Mood trajectory chart"
      >
        {/* Zero line */}
        <line
          x1={pad}
          y1={height / 2}
          x2={width - pad}
          y2={height / 2}
          stroke="hsl(var(--border))"
          strokeWidth={1}
          strokeDasharray="4 4"
        />
        {/* Arousal */}
        <polyline
          points={arousalPoints}
          fill="none"
          stroke="hsl(var(--accent))"
          strokeWidth={1.5}
          strokeOpacity={0.5}
        />
        {/* Valence */}
        <polyline
          points={points}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
        />
      </svg>
      <div className="mt-2 flex gap-4 text-xs text-muted-foreground">
        <span>
          <span className="inline-block h-2 w-4 rounded bg-primary align-middle" /> Mood valence
        </span>
        <span>
          <span className="inline-block h-2 w-4 rounded bg-accent/60 align-middle" /> Arousal
        </span>
      </div>
    </div>
  );
}

export function ResultsPanel({ result }: ResultsPanelProps) {
  const { episodes, riskScore, riskSummary, kindlingIndex, trajectory,
          finalDopamine, finalSerotonin, finalGaba } = result;

  const badgeVariant =
    riskScore < 20 ? "success"
    : riskScore < 60 ? "warning"
    : "destructive";

  return (
    <div className="flex flex-col gap-6">
      {/* Risk meter */}
      <Card className="p-6">
        <RiskMeter score={riskScore} />
        <p className="mt-3 text-sm text-muted-foreground">{riskSummary}</p>
      </Card>

      {/* Trajectory */}
      <Card>
        <CardHeader>
          <CardTitle>Mood Trajectory</CardTitle>
        </CardHeader>
        <CardContent>
          <MoodChart trajectory={trajectory} />
        </CardContent>
      </Card>

      {/* Episode counts */}
      <Card>
        <CardHeader>
          <CardTitle>Episode Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {(
              [
                { label: "Manic", value: episodes.manic, variant: "destructive" },
                { label: "Hypomanic", value: episodes.hypomanic, variant: "warning" },
                { label: "Depressed", value: episodes.depressive, variant: "default" },
                { label: "Mixed", value: episodes.mixed, variant: "outline" },
              ] as const
            ).map(({ label, value, variant }) => (
              <div key={label} className="flex flex-col items-center gap-1 rounded-lg border border-border p-3">
                <span className="text-2xl font-bold text-foreground">{value}</span>
                <Badge variant={variant}>{label}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* NT levels + kindling */}
      <Card>
        <CardHeader>
          <CardTitle>Final State</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
            {[
              ["Dopamine", finalDopamine],
              ["Serotonin", finalSerotonin],
              ["GABA", finalGaba],
              ["Kindling index", kindlingIndex],
            ].map(([label, value]) => (
              <div key={label as string} className="flex justify-between border-b border-border/50 pb-1">
                <span className="text-muted-foreground">{label}</span>
                <span className="font-mono text-foreground">
                  {(value as number).toFixed(3)}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}