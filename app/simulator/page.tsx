import type { Metadata } from "next";
import Link from "next/link";
import { SimulatorClient } from "@/components/simulator/SimulatorClient";

export const metadata: Metadata = {
  title: "Mood Simulator",
  description:
    "Interactive stochastic ODE simulator modelling cannabis × bipolar interactions across polygenic risk.",
};

export default function SimulatorPage() {
  return (
    <main className="min-h-screen px-6 py-12">
      {/* Header */}
      <div className="mx-auto mb-10 max-w-6xl">
        <Link
          href="/"
          className="mb-4 inline-block text-sm text-muted-foreground hover:text-foreground"
        >
          ← Back to home
        </Link>
        <h1 className="text-4xl font-bold text-foreground">Mood Simulator</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Adjust parameters below to model how cannabis exposure and polygenic
          bipolar risk interact over time. The ODE engine integrates dopamine,
          serotonin, and GABA dynamics with stochastic noise.
        </p>
      </div>

      {/* Simulator */}
      <div className="mx-auto max-w-6xl">
        <SimulatorClient />
      </div>

      {/* Disclaimer */}
      <p className="mx-auto mt-12 max-w-2xl text-center text-xs text-muted-foreground">
        This simulator is for educational purposes only. Results do not
        constitute medical advice or diagnosis.
      </p>
    </main>
  );
}
