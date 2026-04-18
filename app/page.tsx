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
          <Button asChild variant="outline" size="lg">
            <Link href="/case-analysis#dissociative-deafness">Dissociative Deafness</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/profile">Psychological Profile</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/satanism-research">Satanism — Neuro Profile</Link>
          </Button>
        </div>
      </section>

      {/* ── Feature Cards ──────────────────────────────────────────────────── */}
      <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-10 sm:grid-cols-3">
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

      {/* ── Deep Research Cards ────────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
            Deep Research Modules
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Psychological Profile Card */}
          <Link href="/profile" className="group block no-underline">
            <div className="relative overflow-hidden rounded-none border border-border bg-card p-6 transition-all duration-300 group-hover:border-[#8A0303]/60 group-hover:bg-[#0d0505]">
              {/* Background symbol */}
              <div className="pointer-events-none absolute right-4 top-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#8A0303" strokeWidth="0.8">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-[#8A0303]/40 bg-[#8A0303]/10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8A0303" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" fill="#8A0303" fillOpacity="0.3" />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-xs tracking-widest text-[#8A0303]">FORENSIC LOG</div>
                  <h3 className="font-mono text-sm font-bold text-foreground tracking-wide">
                    Psychological Profile
                  </h3>
                </div>
              </div>
              <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                Calculated indifference analysis. Interactive subject frame with convulsive glitch states, devaluation metrics, and forensic copy block. Visualizes the neurological architecture of tactical shutdown.
              </p>
              <div className="mt-4 font-mono text-xs text-[#8A0303] group-hover:text-[#c00] transition-colors">
                OPEN PROFILE →
              </div>
            </div>
          </Link>

          {/* Satanism Research Card */}
          <Link href="/satanism-research" className="group block no-underline">
            <div className="relative overflow-hidden rounded-none border border-border bg-card p-6 transition-all duration-300 group-hover:border-[#8A0303]/60 group-hover:bg-[#0d0505]">
              {/* Background symbol — inverted pentagram */}
              <div className="pointer-events-none absolute right-4 top-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="#8A0303" strokeWidth="1">
                  <polygon points="50,5 20,90 95,35 5,35 80,90" strokeLinejoin="round" />
                  <circle cx="50" cy="50" r="48" />
                </svg>
              </div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-[#8A0303]/40 bg-[#8A0303]/10">
                  <svg width="20" height="20" viewBox="0 0 100 100" fill="none" stroke="#8A0303" strokeWidth="5">
                    <polygon points="50,5 20,90 95,35 5,35 80,90" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-xs tracking-widest text-[#8A0303]">RESEARCH ANALYSIS</div>
                  <h3 className="font-mono text-sm font-bold text-foreground tracking-wide">
                    Satanism — Neuro Profile
                  </h3>
                </div>
              </div>
              <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                Graduate-level analysis across 9 sections: taxonomy, receptor mapping, epigenetics, ritual neuroscience (Black Mass, hate rituals, sense rituals, séance, blood pacts), psychological disorders, and recovery pathways. 21+ citations.
              </p>
              <div className="mt-4 font-mono text-xs text-[#8A0303] group-hover:text-[#c00] transition-colors">
                OPEN RESEARCH →
              </div>
            </div>
          </Link>
        </div>
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
