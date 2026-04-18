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
              <div className="pointer-events-none absolute right-4 top-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <svg width="80" height="80" viewBox="0 0 200 300">
                  <defs><linearGradient id="lc1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style={{ stopColor: '#888888' }} /><stop offset="40%" style={{ stopColor: '#cccccc' }} /><stop offset="100%" style={{ stopColor: '#555555' }} /></linearGradient></defs>
                  <rect x="85" y="40" width="30" height="220" fill="url(#lc1)" rx="2" />
                  <rect x="30" y="190" width="140" height="30" fill="url(#lc1)" rx="2" />
                </svg>
              </div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-[#8A0303]/40 bg-[#8A0303]/10">
                  <svg width="18" height="28" viewBox="0 0 200 300">
                    <defs><linearGradient id="lc2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style={{ stopColor: '#888888' }} /><stop offset="40%" style={{ stopColor: '#cccccc' }} /><stop offset="100%" style={{ stopColor: '#555555' }} /></linearGradient></defs>
                    <rect x="85" y="40" width="30" height="220" fill="url(#lc2)" rx="2" />
                    <rect x="30" y="190" width="140" height="30" fill="url(#lc2)" rx="2" />
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

          {/* Bipolar Disorder Card */}
          <Link href="/bipolar" className="group block no-underline">
            <div className="relative overflow-hidden rounded-none border border-border bg-card p-6 transition-all duration-300 group-hover:border-[#2a9d9d]/60 group-hover:bg-[#030c0c]">
              <div className="pointer-events-none absolute right-4 top-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="#2a9d9d" strokeWidth="1">
                  <ellipse cx="50" cy="50" rx="45" ry="28" />
                  <ellipse cx="50" cy="50" rx="28" ry="45" />
                  <circle cx="50" cy="50" r="8" fill="#2a9d9d" fillOpacity="0.3" />
                </svg>
              </div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-[#2a9d9d]/40 bg-[#2a9d9d]/10">
                  <svg width="20" height="20" viewBox="0 0 100 100" fill="none" stroke="#2a9d9d" strokeWidth="6">
                    <path d="M10 50 Q25 20 50 50 Q75 80 90 50" strokeLinecap="round" />
                    <circle cx="50" cy="50" r="6" fill="#2a9d9d" />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-xs tracking-widest text-[#2a9d9d]">DEEP RESEARCH</div>
                  <h3 className="font-mono text-sm font-bold text-foreground tracking-wide">
                    Bipolar Disorder
                  </h3>
                </div>
              </div>
              <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                Neuroimaging, circadian clock biology, lithium mechanism (GSK-3β), extended genetics (CACNA1C, ANK3), the creativity-bipolar link, and suicidality including Joiner&apos;s Interpersonal Theory.
              </p>
              <div className="mt-4 font-mono text-xs text-[#2a9d9d] group-hover:text-[#3bbfbf] transition-colors">
                OPEN RESEARCH →
              </div>
            </div>
          </Link>

          {/* Environmental Disorders Card */}
          <Link href="/environmental-disorders" className="group block no-underline">
            <div className="relative overflow-hidden rounded-none border border-border bg-card p-6 transition-all duration-300 group-hover:border-[#d4a017]/60 group-hover:bg-[#0c0a02]">
              <div className="pointer-events-none absolute right-4 top-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="#d4a017" strokeWidth="1">
                  <path d="M50 10 L50 90 M10 50 L90 50" />
                  <circle cx="50" cy="50" r="40" />
                  <circle cx="50" cy="50" r="20" />
                </svg>
              </div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-[#d4a017]/40 bg-[#d4a017]/10">
                  <svg width="20" height="20" viewBox="0 0 100 100" fill="none" stroke="#d4a017" strokeWidth="6">
                    <path d="M20 80 Q50 20 80 80" strokeLinecap="round" />
                    <circle cx="50" cy="52" r="8" fill="#d4a017" fillOpacity="0.4" />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-xs tracking-widest text-[#d4a017]">DEEP RESEARCH</div>
                  <h3 className="font-mono text-sm font-bold text-foreground tracking-wide">
                    Environmental Disorders
                  </h3>
                </div>
              </div>
              <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                ACEs, poverty neuroscience, racial trauma, climate grief, urban density, epigenetics of inherited trauma, suicidology, and evidence-based interventions (TF-CBT, EMDR, DBT, safety planning).
              </p>
              <div className="mt-4 font-mono text-xs text-[#d4a017] group-hover:text-[#f0b820] transition-colors">
                OPEN RESEARCH →
              </div>
            </div>
          </Link>

          {/* E-Book Card */}
          <Link href="/ebook" className="group block no-underline">
            <div className="relative overflow-hidden rounded-none border border-border bg-card p-6 transition-all duration-300 group-hover:border-[#7c3aed]/60 group-hover:bg-[#080412]">
              <div className="pointer-events-none absolute right-4 top-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="#7c3aed" strokeWidth="1">
                  <rect x="15" y="10" width="70" height="80" rx="2" />
                  <line x1="30" y1="30" x2="70" y2="30" />
                  <line x1="30" y1="45" x2="70" y2="45" />
                  <line x1="30" y1="60" x2="55" y2="60" />
                </svg>
              </div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-[#7c3aed]/40 bg-[#7c3aed]/10">
                  <svg width="18" height="22" viewBox="0 0 100 120" fill="none" stroke="#7c3aed" strokeWidth="7">
                    <rect x="15" y="10" width="70" height="100" rx="3" />
                    <line x1="30" y1="40" x2="70" y2="40" />
                    <line x1="30" y1="60" x2="70" y2="60" />
                    <line x1="30" y1="80" x2="55" y2="80" />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-xs tracking-widest text-[#7c3aed]">E-BOOK · FREE DOWNLOAD</div>
                  <h3 className="font-mono text-sm font-bold text-foreground tracking-wide">
                    Neuroscience of the Dark
                  </h3>
                </div>
              </div>
              <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                Five-chapter research synthesis: bipolar oscillation, environmental trauma, ritual neuroscience, suicidality convergence, and the creative brain. Read in-browser or download as text.
              </p>
              <div className="mt-4 font-mono text-xs text-[#7c3aed] group-hover:text-[#9b5cf0] transition-colors">
                READ / DOWNLOAD →
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
