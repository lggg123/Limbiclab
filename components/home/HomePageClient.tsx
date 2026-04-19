'use client'

import Link from "next/link";

const TOOLS = [
  {
    href: "/simulator",
    label: "Neural Simulator",
    tag: "INTERACTIVE",
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.06)",
    border: "rgba(124,58,237,0.25)",
    desc: "Stochastic ODE engine modeling cannabis × bipolar vulnerability across polygenic risk in real time.",
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        <path d="M4.9 4.9l2.1 2.1M16.9 16.9l2.1 2.1M19.1 4.9l-2.1 2.1M7.1 16.9l-2.1 2.1" />
      </svg>
    ),
  },
  {
    href: "/brain",
    label: "Brain Atlas",
    tag: "VISUAL",
    color: "#2a9d9d",
    bg: "rgba(42,157,157,0.06)",
    border: "rgba(42,157,157,0.25)",
    desc: "Interactive anatomical map of neural structures with clinical overlays and research annotations.",
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2a9d9d" strokeWidth="1.5" strokeLinecap="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24A2.5 2.5 0 0 1 9.5 2Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24A2.5 2.5 0 0 0 14.5 2Z" />
      </svg>
    ),
  },
  {
    href: "/learn",
    label: "Neuroscience Explainer",
    tag: "EDUCATION",
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.06)",
    border: "rgba(124,58,237,0.25)",
    desc: "Plain-language synthesis of neurotransmitters, genetics, DSM-5 criteria, and computational models.",
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    href: "/case-analysis",
    label: "Case Analysis",
    tag: "FORENSIC",
    color: "#8A0303",
    bg: "rgba(138,3,3,0.06)",
    border: "rgba(138,3,3,0.25)",
    desc: "Clinical case dissection with differential diagnosis tools and neuropsychological frameworks.",
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8A0303" strokeWidth="1.5" strokeLinecap="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

const RESEARCH = [
  {
    href: "/profile",
    tag: "FORENSIC LOG",
    label: "Psychological Profile",
    color: "#8A0303",
    hoverBg: "#0d0505",
    desc: "Calculated indifference analysis. Interactive subject frame with convulsive glitch states, devaluation metrics, and forensic copy block.",
  },
  {
    href: "/satanism-research",
    tag: "RESEARCH ANALYSIS",
    label: "Satanism — Neuro Profile",
    color: "#8A0303",
    hoverBg: "#0d0505",
    desc: "Graduate-level analysis: taxonomy, receptor mapping, epigenetics, ritual neuroscience, 9 sections, 21+ citations.",
  },
  {
    href: "/bipolar",
    tag: "DEEP RESEARCH",
    label: "Bipolar Disorder",
    color: "#2a9d9d",
    hoverBg: "#030c0c",
    desc: "Neuroimaging, circadian clock biology, lithium mechanism (GSK-3β), CACNA1C genetics, the creativity-bipolar link, and suicidality.",
  },
  {
    href: "/environmental-disorders",
    tag: "DEEP RESEARCH",
    label: "Environmental Disorders",
    color: "#d4a017",
    hoverBg: "#0c0a02",
    desc: "ACEs, poverty neuroscience, racial trauma, climate grief, epigenetics of inherited trauma, and evidence-based interventions.",
  },
  {
    href: "/ebook",
    tag: "E-BOOK · FREE",
    label: "Neuroscience of the Dark",
    color: "#7c3aed",
    hoverBg: "#080412",
    desc: "Five-chapter synthesis: bipolar oscillation, environmental trauma, ritual neuroscience, suicidality convergence, and the creative brain.",
  },
];

export default function HomePageClient() {
  return (
    <main style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 0.7; }
        }
        @keyframes scan {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        .hero-anim { animation: fadeUp 0.7s ease both; }
        .hero-anim-1 { animation-delay: 0.05s; }
        .hero-anim-2 { animation-delay: 0.15s; }
        .hero-anim-3 { animation-delay: 0.25s; }
        .hero-anim-4 { animation-delay: 0.4s; }
        .hero-anim-5 { animation-delay: 0.55s; }

        .tool-card {
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
        }
        .tool-card:hover { transform: translateY(-2px); }

        .research-card {
          transition: border-color 0.2s, background 0.2s;
        }

        @media (max-width: 640px) {
          .tools-grid { grid-template-columns: 1fr !important; }
          .research-grid { grid-template-columns: 1fr !important; }
          .hero-title { font-size: 52px !important; }
          .stats-bar { flex-wrap: wrap; gap: 16px !important; }
          .cta-row { flex-direction: column !important; }
        }
      `}</style>

      {/* ── Giveaway Banner ──────────────────────────────────────────────── */}
      <div style={{
        background: "linear-gradient(90deg, rgba(124,58,237,0.15) 0%, rgba(42,157,157,0.1) 100%)",
        borderBottom: "1px solid rgba(124,58,237,0.2)",
        padding: "10px 24px",
        textAlign: "center",
      }}>
        <Link href="/giveaway" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontFamily: "monospace", fontSize: 9, letterSpacing: "0.25em", color: "#7c3aed", border: "1px solid rgba(124,58,237,0.4)", padding: "2px 8px" }}>GIVEAWAY</span>
          <span style={{ fontFamily: "monospace", fontSize: 11, color: "#aaa", letterSpacing: "0.08em" }}>
            Win 3-month newsletter + ebook + Dark Psychology Guide — Drawing May 19
          </span>
          <span style={{ fontFamily: "monospace", fontSize: 11, color: "#7c3aed", letterSpacing: "0.12em" }}>ENTER FREE →</span>
        </Link>
      </div>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "80px 24px 72px", textAlign: "center" }}>

        <div aria-hidden style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: "linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />

        <div aria-hidden style={{
          position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)",
          width: 700, height: 500, borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)",
          animation: "pulse-glow 4s ease-in-out infinite", zIndex: 0,
        }} />

        <div aria-hidden style={{
          position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", left: 0, right: 0, height: 120,
            background: "linear-gradient(transparent, rgba(124,58,237,0.03), transparent)",
            animation: "scan 8s linear infinite",
          }} />
        </div>

        <div style={{ position: "relative", zIndex: 2, maxWidth: 860, margin: "0 auto" }}>

          <div className="hero-anim hero-anim-1" style={{
            fontFamily: "monospace", fontSize: 11, letterSpacing: "0.28em",
            color: "#7c3aed", marginBottom: 24, display: "inline-block",
            border: "1px solid rgba(124,58,237,0.3)", padding: "4px 16px",
          }}>
            COMPUTATIONAL PSYCHIATRY · OPEN SCIENCE
          </div>

          <h1 className="hero-anim hero-anim-2 hero-title" style={{
            fontFamily: "monospace", fontWeight: 800, fontSize: 72,
            color: "#e0e0e0", letterSpacing: "-0.02em", lineHeight: 1,
            marginBottom: 8,
          }}>
            Limbic<span style={{ color: "#7c3aed" }}>Lab</span>
          </h1>

          <div className="hero-anim hero-anim-2" style={{
            fontFamily: "monospace", fontSize: 11, letterSpacing: "0.2em",
            color: "#333", marginBottom: 32,
          }}>
            ████████████████████████████
          </div>

          <p className="hero-anim hero-anim-3" style={{
            fontFamily: "monospace", fontSize: 16, color: "#aaa",
            lineHeight: 1.75, maxWidth: 580, margin: "0 auto 16px",
          }}>
            Model how cannabis interacts with bipolar vulnerability across polygenic risk.
            Stochastic ODE engine, kindling model, and plain-language neuroscience — all in your browser.
          </p>

          <p className="hero-anim hero-anim-3" style={{
            fontFamily: "monospace", fontSize: 12, color: "#555",
            lineHeight: 1.7, maxWidth: 480, margin: "0 auto 40px",
          }}>
            Stress-diathesis framing: vulnerability is widely distributed across people,
            and sustained stress can increase the chance of mood-disorder expression.
          </p>

          <div className="hero-anim hero-anim-4 cta-row" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/simulator" style={{
              fontFamily: "monospace", fontSize: 12, letterSpacing: "0.18em",
              color: "#0a0a0a", background: "#7c3aed",
              border: "1px solid #7c3aed", padding: "13px 32px",
              textDecoration: "none", fontWeight: 700,
              transition: "all 0.15s", display: "inline-block",
            }}
              onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.background = "#6d28d9"; }}
              onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.background = "#7c3aed"; }}
            >
              LAUNCH SIMULATOR →
            </Link>
            <Link href="/lp/en" style={{
              fontFamily: "monospace", fontSize: 12, letterSpacing: "0.18em",
              color: "#0a0a0a", background: "#2a9d9d",
              border: "1px solid #2a9d9d", padding: "13px 32px",
              textDecoration: "none", fontWeight: 700,
              transition: "all 0.15s", display: "inline-block",
            }}
              onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.background = "#1a6b6b"; (e.currentTarget as HTMLElement).style.borderColor = "#1a6b6b"; }}
              onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.background = "#2a9d9d"; (e.currentTarget as HTMLElement).style.borderColor = "#2a9d9d"; }}
            >
              FREE EBOOK →
            </Link>
            <Link href="/store" style={{
              fontFamily: "monospace", fontSize: 12, letterSpacing: "0.18em",
              color: "#777", background: "transparent",
              border: "1px solid #2a2a2a", padding: "13px 32px",
              textDecoration: "none", transition: "all 0.15s", display: "inline-block",
            }}
              onMouseOver={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "#e0e0e0"; el.style.borderColor = "#555"; }}
              onMouseOut={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "#777"; el.style.borderColor = "#2a2a2a"; }}
            >
              STORE
            </Link>
          </div>

          <div className="hero-anim hero-anim-5 stats-bar" style={{
            display: "flex", justifyContent: "center", gap: 40,
            marginTop: 56, paddingTop: 32,
            borderTop: "1px solid #1a1a1a",
          }}>
            {[
              { n: "10", label: "Research Modules" },
              { n: "21+", label: "Peer Citations" },
              { n: "5", label: "Interactive Tools" },
              { n: "100%", label: "Open Access" },
            ].map(({ n, label }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "monospace", fontSize: 26, fontWeight: 700, color: "#7c3aed" }}>{n}</div>
                <div style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.15em", color: "#444", marginTop: 4 }}>{label.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tools ─────────────────────────────────────────────────────────── */}
      <section style={{ padding: "0 24px 72px", maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
          <div style={{ flex: 1, height: 1, background: "#1a1a1a" }} />
          <span style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.28em", color: "#444" }}>INTERACTIVE TOOLS</span>
          <div style={{ flex: 1, height: 1, background: "#1a1a1a" }} />
        </div>

        <div className="tools-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
          {TOOLS.map((t) => (
            <Link key={t.href} href={t.href} style={{ textDecoration: "none" }}>
              <div className="tool-card" style={{
                background: t.bg,
                border: `1px solid ${t.border}`,
                padding: "28px 28px 24px",
                height: "100%",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <div style={{
                    width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center",
                    border: `1px solid ${t.border}`, background: `rgba(0,0,0,0.4)`, flexShrink: 0,
                  }}>
                    {t.svg}
                  </div>
                  <div>
                    <div style={{ fontFamily: "monospace", fontSize: 9, letterSpacing: "0.22em", color: t.color, marginBottom: 3 }}>{t.tag}</div>
                    <div style={{ fontFamily: "monospace", fontSize: 14, fontWeight: 700, color: "#e0e0e0", letterSpacing: "0.04em" }}>{t.label}</div>
                  </div>
                </div>
                <p style={{ fontFamily: "monospace", fontSize: 12, color: "#666", lineHeight: 1.7, margin: 0 }}>{t.desc}</p>
                <div style={{ fontFamily: "monospace", fontSize: 11, color: t.color, marginTop: 16, letterSpacing: "0.12em" }}>OPEN →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Research Modules ─────────────────────────────────────────────── */}
      <section style={{ padding: "0 24px 72px", maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
          <div style={{ flex: 1, height: 1, background: "#1a1a1a" }} />
          <span style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.28em", color: "#444" }}>DEEP RESEARCH MODULES</span>
          <div style={{ flex: 1, height: 1, background: "#1a1a1a" }} />
        </div>

        <div className="research-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
          {RESEARCH.map((r) => (
            <Link key={r.href} href={r.href} className="group" style={{ textDecoration: "none" }}>
              <div className="research-card" style={{
                background: "#111", border: "1px solid #1e1e1e",
                padding: "22px 24px", height: "100%",
              }}
                onMouseOver={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = r.color + "60"; el.style.background = r.hoverBg; }}
                onMouseOut={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#1e1e1e"; el.style.background = "#111"; }}
              >
                <div style={{ fontFamily: "monospace", fontSize: 9, letterSpacing: "0.22em", color: r.color, marginBottom: 6 }}>{r.tag}</div>
                <h3 style={{ fontFamily: "monospace", fontSize: 13, fontWeight: 700, color: "#e0e0e0", letterSpacing: "0.04em", marginBottom: 10 }}>{r.label}</h3>
                <p style={{ fontFamily: "monospace", fontSize: 11, color: "#555", lineHeight: 1.7, margin: 0 }}>{r.desc}</p>
                <div style={{ fontFamily: "monospace", fontSize: 10, color: r.color, marginTop: 14, letterSpacing: "0.12em" }}>OPEN RESEARCH →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Newsletter CTA ───────────────────────────────────────────────── */}
      <section style={{ padding: "0 24px 80px", maxWidth: 1080, margin: "0 auto" }}>
        <div style={{
          background: "linear-gradient(135deg, rgba(42,157,157,0.06) 0%, rgba(42,157,157,0.02) 100%)",
          border: "1px solid rgba(42,157,157,0.2)",
          padding: "40px 40px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 32, flexWrap: "wrap",
        }}>
          <div>
            <div style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.25em", color: "#2a9d9d", marginBottom: 10 }}>
              WEEKLY NEWSLETTER · 14 DAYS FREE
            </div>
            <h2 style={{ fontFamily: "monospace", fontSize: 20, fontWeight: 700, color: "#e0e0e0", letterSpacing: "0.04em", marginBottom: 8 }}>
              Neuroscience Research, Delivered Weekly
            </h2>
            <p style={{ fontFamily: "monospace", fontSize: 12, color: "#555", lineHeight: 1.7, maxWidth: 460, margin: "0 0 12px" }}>
              Graduate-level research on bipolar disorder, trauma, dark psychology, and the neuroscience of behavior — cited, sourced, and in your inbox every week.
            </p>
            <p style={{ fontFamily: "monospace", fontSize: 11, color: "#444", margin: "0 0 6px" }}>
              Use code <span style={{ color: "#2a9d9d", fontWeight: 700 }}>VENEZIA300</span> for 3 months free — 100 spots only.
            </p>
            <div style={{ display: "flex", gap: 16, marginTop: 4 }}>
              <Link href="/lp/en" style={{ fontFamily: "monospace", fontSize: 10, color: "#555", letterSpacing: "0.15em", textDecoration: "underline" }}>EN — English</Link>
              <Link href="/lp/es" style={{ fontFamily: "monospace", fontSize: 10, color: "#555", letterSpacing: "0.15em", textDecoration: "underline" }}>ES — Español</Link>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, flexShrink: 0 }}>
            <Link href="/store" style={{
              fontFamily: "monospace", fontSize: 11, letterSpacing: "0.18em",
              color: "#0a0a0a", background: "#2a9d9d",
              border: "1px solid #2a9d9d", padding: "13px 28px",
              textDecoration: "none", fontWeight: 700,
              whiteSpace: "nowrap",
              transition: "all 0.15s", display: "inline-block", textAlign: "center",
            }}
              onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.background = "#1a6b6b"; (e.currentTarget as HTMLElement).style.borderColor = "#1a6b6b"; }}
              onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.background = "#2a9d9d"; (e.currentTarget as HTMLElement).style.borderColor = "#2a9d9d"; }}
            >
              START FREE TRIAL →
            </Link>
            <Link href="/lp/en" style={{
              fontFamily: "monospace", fontSize: 10, letterSpacing: "0.15em",
              color: "#2a9d9d", background: "transparent",
              border: "1px solid rgba(42,157,157,0.3)", padding: "9px 28px",
              textDecoration: "none", whiteSpace: "nowrap",
              transition: "all 0.15s", display: "inline-block", textAlign: "center",
            }}
              onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#2a9d9d"; }}
              onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(42,157,157,0.3)"; }}
            >
              GET FREE EBOOK →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer style={{
        borderTop: "1px solid #1a1a1a", padding: "28px 24px",
        maxWidth: 1080, margin: "0 auto",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
          <p style={{ fontFamily: "monospace", fontSize: 11, color: "#444", margin: 0 }}>
            LimbicLab is an educational tool — not medical advice.
          </p>
          <p style={{ fontFamily: "monospace", fontSize: 11, color: "#333", margin: 0 }}>
            Next.js 15 · TypeScript · Tailwind
          </p>
        </div>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          <Link href="/giveaway" style={{ fontFamily: "monospace", fontSize: 10, color: "#444", letterSpacing: "0.12em", textDecoration: "none" }}>GIVEAWAY →</Link>
          <Link href="/store" style={{ fontFamily: "monospace", fontSize: 10, color: "#444", letterSpacing: "0.12em", textDecoration: "none" }}>STORE →</Link>
          <Link href="/lp/en" style={{ fontFamily: "monospace", fontSize: 10, color: "#444", letterSpacing: "0.12em", textDecoration: "none" }}>EN →</Link>
          <Link href="/lp/es" style={{ fontFamily: "monospace", fontSize: 10, color: "#444", letterSpacing: "0.12em", textDecoration: "none" }}>ES →</Link>
        </div>
      </footer>
    </main>
  );
}
