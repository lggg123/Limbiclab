import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "LimbicLab — Computational Psychiatry Simulator",
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center px-6 py-32 text-center">
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <Badge variant="outline" className="mb-6">
          Computational Psychiatry · Open Science
        </Badge>

        <h1 className="mb-6 max-w-3xl text-5xl font-bold leading-tight text-foreground sm:text-6xl lg:text-7xl">
          <span className="text-primary">LimbicLab</span>
        </h1>

        <p className="mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Model how cannabis interacts with bipolar vulnerability across polygenic
          risk. Stochastic ODE engine, kindling model, and plain-language
          neuroscience — all in your browser.
        </p>

        <p className="mb-8 max-w-2xl text-sm text-muted-foreground">
          LimbicLab uses a stress-diathesis framing: vulnerability is widely
          distributed across people, and sustained stress can increase the chance of
          mood-disorder expression.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/simulator">Launch Simulator</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/learn">Neuroscience Explainer</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/brain">Creative Brain Atlas</Link>
          </Button>
        </div>
      </section>

      {/* ── Feature Cards ──────────────────────────────────────────────────── */}
      <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-24 sm:grid-cols-3">
        <Card className="flex flex-col gap-3 p-6">
          <div className="text-3xl">🧬</div>
          <h2 className="text-lg font-semibold text-foreground">
            Polygenic Risk
          </h2>
          <p className="text-sm text-muted-foreground">
            Input your own GWAS loci or use preset risk profiles. Watch how
            genetic loading shifts the manic-episode threshold in real time.
          </p>
        </Card>

        <Card className="flex flex-col gap-3 p-6">
          <div className="text-3xl">🌿</div>
          <h2 className="text-lg font-semibold text-foreground">
            Cannabis Exposure
          </h2>
          <p className="text-sm text-muted-foreground">
            Adjust THC/CBD potency and use frequency. The ODE engine models
            dopamine, serotonin, and GABA dynamics with CB1 receptor kinetics.
          </p>
        </Card>

        <Card className="flex flex-col gap-3 p-6">
          <div className="text-3xl">⚡</div>
          <h2 className="text-lg font-semibold text-foreground">
            Kindling Model
          </h2>
          <p className="text-sm text-muted-foreground">
            Each simulated episode lowers the threshold for the next — mirroring
            Post&apos;s electrophysiological kindling hypothesis.
          </p>
        </Card>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer className="mt-auto border-t border-border py-8 text-center text-sm text-muted-foreground">
        <p>
          LimbicLab is an educational tool. It does{" "}
          <span className="font-semibold text-foreground">not</span> constitute
          medical advice.
        </p>
        <p className="mt-1">
          Built with Next.js 15 · TypeScript · Tailwind CSS
        </p>
      </footer>
    </main>
  );
}
