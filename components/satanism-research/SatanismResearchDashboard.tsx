'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  TAXONOMY,
  RITUAL_NEUROSCIENCE,
  NEUROPLASTICITY_NOTES,
  RECEPTOR_MAP,
  DISORDERS,
  METAPHYSICAL_PANELS,
  GENE_ENTRIES,
  RECOVERY_PHASES,
  BIBLIOGRAPHY,
  EVIDENCE_CAVEAT,
} from '@/lib/satanismResearchData'

// ── Colour tokens ─────────────────────────────────────────────────────────────
const C = {
  bg: '#0a0a0a',
  surface: '#111111',
  surface2: '#161616',
  border: '#1e1e1e',
  borderAccent: '#3a1010',
  crimson: '#8A0303',
  crimsonDim: '#5a0202',
  text: '#e0e0e0',
  textDim: '#777777',
  textMid: '#aaaaaa',
  teal: '#1a6b6b',
  tealLight: '#2a9d9d',
  gold: '#b8860b',
  goldLight: '#d4a017',
}

const SECTION_NAV = [
  { id: 'taxonomy',     label: '01 Taxonomy',        short: '01' },
  { id: 'neuroscience', label: '02 Ritual Neuro',     short: '02' },
  { id: 'receptors',   label: '03 Neuroreceptors',   short: '03' },
  { id: 'disorders',   label: '04 Disorders',        short: '04' },
  { id: 'metaphysical',label: '05 Soul / Metaphysical', short: '05' },
  { id: 'genes',       label: '06 Epigenetics',      short: '06' },
  { id: 'recovery',    label: '07 Recovery',         short: '07' },
  { id: 'bibliography',label: '08 Bibliography',     short: '08' },
]

// ── Shared primitives ─────────────────────────────────────────────────────────

function SectionHeader({ id, number, title, subtitle }: { id: string; number: string; title: string; subtitle: string }) {
  return (
    <div id={id} className="mb-8 pt-2">
      <div style={{ fontFamily: 'monospace', fontSize: 11, color: C.crimson, letterSpacing: '0.22em', marginBottom: 6 }}>
        {`SECTION ${number} //`}
      </div>
      <h2 style={{ fontFamily: 'monospace', fontSize: 22, fontWeight: 700, color: C.text, letterSpacing: '0.08em', marginBottom: 8 }}>
        {title}
      </h2>
      <p style={{ fontFamily: 'monospace', fontSize: 12, color: C.textDim, lineHeight: 1.7, maxWidth: 680 }}>
        {subtitle}
      </p>
    </div>
  )
}

function Panel({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <div style={{
      background: C.surface,
      border: `1px solid ${accent ? C.borderAccent : C.border}`,
      padding: '20px 22px',
      marginBottom: 14,
    }}>
      {children}
    </div>
  )
}

function Tag({ label, color = C.crimson }: { label: string; color?: string }) {
  return (
    <span style={{
      fontFamily: 'monospace',
      fontSize: 10,
      color,
      border: `1px solid ${color}`,
      padding: '2px 8px',
      letterSpacing: '0.15em',
      marginRight: 6,
      marginBottom: 4,
      display: 'inline-block',
    }}>
      {label}
    </span>
  )
}

function EvidenceBadge({ level }: { level: string }) {
  const map: Record<string, { color: string; label: string }> = {
    strong:    { color: C.tealLight,  label: 'STRONG EVIDENCE'    },
    moderate:  { color: C.goldLight,  label: 'MODERATE EVIDENCE'  },
    limited:   { color: C.textDim,    label: 'LIMITED EVIDENCE'   },
    contested: { color: C.crimson,    label: 'CONTESTED'          },
  }
  const { color, label } = map[level] ?? map.limited
  return <Tag label={label} color={color} />
}

function SeverityBar({ level }: { level: 'high' | 'moderate' | 'low' }) {
  const values = { high: 100, moderate: 60, low: 25 }
  const colors = { high: C.crimson, moderate: C.goldLight, low: C.tealLight }
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
      <span style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim, width: 60 }}>SEVERITY</span>
      <div style={{ flex: 1, height: 2, background: C.border }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${values[level]}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{ height: '100%', background: colors[level] }}
        />
      </div>
      <span style={{ fontFamily: 'monospace', fontSize: 10, color: colors[level], textTransform: 'uppercase' }}>
        {level}
      </span>
    </div>
  )
}

// ── Section 1 ─────────────────────────────────────────────────────────────────

function TaxonomySection() {
  const [active, setActive] = useState<string | null>('laveyan')
  const entry = TAXONOMY.find((t) => t.id === active)

  return (
    <div>
      <SectionHeader
        id="taxonomy"
        number="01"
        title="TAXONOMY OF SATANISM"
        subtitle="A precise classification is prerequisite to any neurological analysis. Lumping all Satanic traditions together produces analytical noise — each variant has a distinct psychological profile and therefore distinct neurological correlates."
      />

      {/* Tab selector */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 16, flexWrap: 'wrap' }}>
        {TAXONOMY.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            style={{
              fontFamily: 'monospace',
              fontSize: 11,
              letterSpacing: '0.12em',
              padding: '8px 16px',
              border: `1px solid ${active === t.id ? C.crimson : C.border}`,
              background: active === t.id ? C.crimsonDim : 'transparent',
              color: active === t.id ? C.text : C.textDim,
              cursor: 'pointer',
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {entry && (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <Panel accent>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 14 }}>
                <div>
                  <div style={{ fontFamily: 'monospace', fontSize: 16, fontWeight: 700, color: C.text, marginBottom: 4 }}>
                    {entry.label}
                  </div>
                  <div style={{ fontFamily: 'monospace', fontSize: 11, color: C.crimson }}>
                    EST. {entry.founded}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  {entry.keyFigures.map((f) => (
                    <div key={f} style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim }}>{f}</div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'grid', gap: 14 }}>
                <div>
                  <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.crimson, letterSpacing: '0.18em', marginBottom: 6 }}>
                    ◈ CORE PHILOSOPHY
                  </div>
                  <p style={{ fontFamily: 'monospace', fontSize: 12, color: C.textMid, lineHeight: 1.8 }}>{entry.corePhilosophy}</p>
                </div>
                <div>
                  <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.crimson, letterSpacing: '0.18em', marginBottom: 6 }}>
                    ◈ PSYCHOLOGICAL PROFILE OF ADHERENTS
                  </div>
                  <p style={{ fontFamily: 'monospace', fontSize: 12, color: C.textMid, lineHeight: 1.8 }}>{entry.psychProfile}</p>
                </div>
                <div>
                  <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.crimson, letterSpacing: '0.18em', marginBottom: 6 }}>
                    ◈ WORLDVIEW
                  </div>
                  <p style={{ fontFamily: 'monospace', fontSize: 12, color: C.textMid, lineHeight: 1.8 }}>{entry.worldview}</p>
                </div>
                <div style={{ paddingTop: 4 }}>
                  {entry.tags.map((t) => <Tag key={t} label={t} />)}
                </div>
              </div>
            </Panel>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ── Section 2 ─────────────────────────────────────────────────────────────────

function NeuroscienceSection() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <div>
      <SectionHeader
        id="neuroscience"
        number="02"
        title="NEUROSCIENCE OF RITUAL"
        subtitle="Ritual — regardless of content — produces measurable neurological effects. The critical distinction is between rituals that activate threat/fear systems vs. those that activate safety/bonding systems. Dark ritual specifically targets the former."
      />

      <div style={{ display: 'grid', gap: 10 }}>
        {RITUAL_NEUROSCIENCE.map((panel) => (
          <div key={panel.region}>
            <button
              onClick={() => setExpanded(expanded === panel.region ? null : panel.region)}
              style={{
                width: '100%', textAlign: 'left', background: C.surface,
                border: `1px solid ${expanded === panel.region ? C.crimson : C.border}`,
                padding: '14px 18px', cursor: 'pointer',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}
            >
              <div>
                <span style={{ fontFamily: 'monospace', fontSize: 13, fontWeight: 700, color: C.text }}>{panel.region}</span>
                <span style={{ fontFamily: 'monospace', fontSize: 11, color: C.textDim, marginLeft: 12 }}>{panel.role}</span>
              </div>
              <span style={{ fontFamily: 'monospace', fontSize: 14, color: C.crimson }}>
                {expanded === panel.region ? '−' : '+'}
              </span>
            </button>

            <AnimatePresence>
              {expanded === panel.region && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{
                    background: C.surface2, border: `1px solid ${C.borderAccent}`,
                    borderTop: 'none', padding: '16px 18px',
                    display: 'grid', gap: 12,
                  }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                      <div>
                        <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.crimson, letterSpacing: '0.15em', marginBottom: 6 }}>
                          ◈ DARK RITUAL EFFECT
                        </div>
                        <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.8 }}>
                          {panel.darkRitualEffect}
                        </p>
                      </div>
                      <div>
                        <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.tealLight, letterSpacing: '0.15em', marginBottom: 6 }}>
                          ◈ POSITIVE RITUAL EFFECT
                        </div>
                        <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.8 }}>
                          {panel.positiveRitualEffect}
                        </p>
                      </div>
                    </div>
                    <div>
                      <span style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim }}>KEY NEUROTRANSMITTER: </span>
                      <span style={{ fontFamily: 'monospace', fontSize: 10, color: C.goldLight }}>{panel.neurotransmitter}</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20 }}>
        <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.crimson, letterSpacing: '0.18em', marginBottom: 10 }}>
          ◈ NEUROPLASTICITY NOTES
        </div>
        <div style={{ display: 'grid', gap: 8 }}>
          {NEUROPLASTICITY_NOTES.map((note, i) => (
            <div key={i} style={{
              background: C.surface2, borderLeft: `2px solid ${C.crimsonDim}`,
              padding: '10px 14px',
            }}>
              <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.8, margin: 0 }}>{note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Section 3 ─────────────────────────────────────────────────────────────────

function ReceptorSection() {
  return (
    <div>
      <SectionHeader
        id="receptors"
        number="03"
        title="NEURORECEPTOR & NEUROCHEMISTRY MAP"
        subtitle="Each Satanic practice variant engages distinct neurochemical systems. The following maps specific receptor systems to documented or theorized mechanisms of Satanic practice engagement."
      />
      <div style={{ display: 'grid', gap: 14 }}>
        {RECEPTOR_MAP.map((r) => (
          <Panel key={r.system} accent>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 10 }}>
              <div>
                <div style={{ fontFamily: 'monospace', fontSize: 14, fontWeight: 700, color: C.text }}>{r.system}</div>
                <div style={{ fontFamily: 'monospace', fontSize: 11, color: C.goldLight, marginTop: 2 }}>{r.receptors}</div>
              </div>
              <SeverityBar level={r.severity} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
              <div>
                <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim, letterSpacing: '0.15em', marginBottom: 5 }}>BASELINE ROLE</div>
                <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.7 }}>{r.baselineRole}</p>
              </div>
              <div>
                <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.crimson, letterSpacing: '0.15em', marginBottom: 5 }}>SATANISM MECHANISM</div>
                <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.7 }}>{r.satanismMechanism}</p>
              </div>
              <div>
                <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.goldLight, letterSpacing: '0.15em', marginBottom: 5 }}>CHRONIC EFFECTS</div>
                <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.7 }}>{r.chronicsEffects}</p>
              </div>
            </div>
          </Panel>
        ))}
      </div>
    </div>
  )
}

// ── Section 4 ─────────────────────────────────────────────────────────────────

function DisordersSection() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <div>
      <SectionHeader
        id="disorders"
        number="04"
        title="PSYCHOLOGICAL DISORDERS — LINKED CORRELATES"
        subtitle="The following disorders have documented or theorized associations with Satanic involvement. Evidence levels are explicitly rated — the field contains a mix of robust findings and contested claims shaped by the moral panic era."
      />

      {/* Evidence caveat */}
      <div style={{
        background: C.surface2, borderLeft: `3px solid ${C.gold}`,
        padding: '12px 16px', marginBottom: 20,
      }}>
        <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.goldLight, letterSpacing: '0.15em', marginBottom: 6 }}>
          ⚠ METHODOLOGICAL CAVEAT
        </div>
        <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textDim, lineHeight: 1.8, margin: 0 }}>
          {EVIDENCE_CAVEAT}
        </p>
      </div>

      <div style={{ display: 'grid', gap: 10 }}>
        {DISORDERS.map((d) => (
          <div key={d.id}>
            <button
              onClick={() => setOpen(open === d.id ? null : d.id)}
              style={{
                width: '100%', textAlign: 'left', background: C.surface,
                border: `1px solid ${open === d.id ? C.crimson : C.border}`,
                padding: '14px 18px', cursor: 'pointer',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'monospace', fontSize: 13, fontWeight: 700, color: C.text }}>{d.name}</span>
                <EvidenceBadge level={d.evidenceLevel} />
              </div>
              <span style={{ fontFamily: 'monospace', fontSize: 14, color: C.crimson, flexShrink: 0 }}>
                {open === d.id ? '−' : '+'}
              </span>
            </button>

            <AnimatePresence>
              {open === d.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{
                    background: C.surface2, border: `1px solid ${C.borderAccent}`,
                    borderTop: 'none', padding: '16px 18px', display: 'grid', gap: 12,
                  }}>
                    <div>
                      <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim, letterSpacing: '0.15em', marginBottom: 5 }}>CORRELATION</div>
                      <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.8 }}>{d.correlation}</p>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.crimson, letterSpacing: '0.15em', marginBottom: 5 }}>NEUROLOGICAL MECHANISM</div>
                      <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.8 }}>{d.mechanism}</p>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.goldLight, letterSpacing: '0.15em', marginBottom: 5 }}>EVIDENCE BASE</div>
                      <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.8 }}>{d.evidence}</p>
                    </div>
                    <div style={{ paddingTop: 4 }}>
                      {d.citations.map((c) => (
                        <div key={c} style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim, marginBottom: 2 }}>
                          [{c}]
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Section 5 ─────────────────────────────────────────────────────────────────

function MetaphysicalSection() {
  const [active, setActive] = useState<string>('fromm')
  const panel = METAPHYSICAL_PANELS.find((p) => p.id === active)

  return (
    <div>
      <SectionHeader
        id="metaphysical"
        number="05"
        title="THE SOUL / METAPHYSICAL DIMENSION"
        subtitle="Cross-cultural philosophical and psychological analysis of how Satanism engages with the self, soul, conscience, and wellbeing — drawing on Fromm, Jung, and comparative philosophy of psychology."
      />

      <div style={{ display: 'flex', gap: 6, marginBottom: 16, flexWrap: 'wrap' }}>
        {METAPHYSICAL_PANELS.map((p) => (
          <button
            key={p.id}
            onClick={() => setActive(p.id)}
            style={{
              fontFamily: 'monospace', fontSize: 11, letterSpacing: '0.12em',
              padding: '8px 14px',
              border: `1px solid ${active === p.id ? C.crimson : C.border}`,
              background: active === p.id ? C.crimsonDim : 'transparent',
              color: active === p.id ? C.text : C.textDim,
              cursor: 'pointer',
            }}
          >
            {p.thinker}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {panel && (
          <motion.div key={panel.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <Panel accent>
              <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.crimson, letterSpacing: '0.18em', marginBottom: 4 }}>
                {panel.thinker}
              </div>
              <div style={{ fontFamily: 'monospace', fontSize: 15, fontWeight: 700, color: C.text, marginBottom: 14 }}>
                {panel.framework}
              </div>
              <div style={{ display: 'grid', gap: 14 }}>
                <div>
                  <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim, letterSpacing: '0.15em', marginBottom: 6 }}>THEORETICAL FRAMEWORK</div>
                  <p style={{ fontFamily: 'monospace', fontSize: 12, color: C.textMid, lineHeight: 1.8 }}>{panel.analysis}</p>
                </div>
                <div>
                  <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.crimson, letterSpacing: '0.15em', marginBottom: 6 }}>SATANISM RELEVANCE</div>
                  <p style={{ fontFamily: 'monospace', fontSize: 12, color: C.textMid, lineHeight: 1.8 }}>{panel.satanismRelevance}</p>
                </div>
                <div style={{ borderLeft: `2px solid ${C.tealLight}`, paddingLeft: 14 }}>
                  <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.tealLight, letterSpacing: '0.15em', marginBottom: 6 }}>DIVERGENCE FROM WELLBEING LITERATURE</div>
                  <p style={{ fontFamily: 'monospace', fontSize: 12, color: C.textMid, lineHeight: 1.8 }}>{panel.divergence}</p>
                </div>
              </div>
            </Panel>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ── Section 6 ─────────────────────────────────────────────────────────────────

function GeneticsSection() {
  return (
    <div>
      <SectionHeader
        id="genes"
        number="06"
        title="GENE EXPRESSION & EPIGENETICS"
        subtitle="Chronic psychological states produce lasting epigenetic signatures. The following genes are implicated in the molecular pathway connecting dark ritual exposure, chronic fear, and lasting neurobiological change."
      />
      <div style={{ display: 'grid', gap: 14 }}>
        {GENE_ENTRIES.map((g) => (
          <Panel key={g.gene} accent>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
              <div>
                <span style={{ fontFamily: 'monospace', fontSize: 16, fontWeight: 700, color: C.crimson }}>{g.gene}</span>
                <span style={{ fontFamily: 'monospace', fontSize: 11, color: C.textDim, marginLeft: 12 }}>{g.fullName}</span>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
              <div>
                <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim, letterSpacing: '0.15em', marginBottom: 5 }}>MECHANISM</div>
                <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.7 }}>{g.mechanism}</p>
              </div>
              <div>
                <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.crimson, letterSpacing: '0.15em', marginBottom: 5 }}>SATANISM LINK</div>
                <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.7 }}>{g.satanismLink}</p>
              </div>
              <div>
                <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.goldLight, letterSpacing: '0.15em', marginBottom: 5 }}>CONSEQUENCE</div>
                <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.7 }}>{g.consequence}</p>
              </div>
            </div>
          </Panel>
        ))}
      </div>
    </div>
  )
}

// ── Section 7 ─────────────────────────────────────────────────────────────────

function RecoverySection() {
  return (
    <div>
      <SectionHeader
        id="recovery"
        number="07"
        title="RECOVERY & NEUROLOGICAL HEALING"
        subtitle="Neuroplasticity operates in both directions. The same mechanisms that allow dark ritual to condition the brain can be engaged therapeutically to re-route fear pathways, restore neurotransmitter balance, and partially reverse epigenetic damage."
      />
      <div style={{ position: 'relative', paddingLeft: 20 }}>
        {/* Timeline line */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: 2, background: `linear-gradient(180deg, ${C.crimson}, ${C.tealLight})`,
        }} />

        <div style={{ display: 'grid', gap: 14 }}>
          {RECOVERY_PHASES.map((phase, i) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Panel>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 10 }}>
                  <div style={{ fontFamily: 'monospace', fontSize: 13, fontWeight: 700, color: C.text }}>{phase.phase}</div>
                  <Tag label={phase.timeframe} color={C.tealLight} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>
                  <div>
                    <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.crimson, letterSpacing: '0.15em', marginBottom: 5 }}>TARGET</div>
                    <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.7 }}>{phase.target}</p>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim, letterSpacing: '0.15em', marginBottom: 5 }}>INTERVENTION</div>
                    <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.7 }}>{phase.intervention}</p>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.tealLight, letterSpacing: '0.15em', marginBottom: 5 }}>NEUROLOGICAL BASIS</div>
                    <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.7 }}>{phase.neurological}</p>
                  </div>
                </div>
              </Panel>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Section 8 Bibliography ────────────────────────────────────────────────────

function BibliographySection() {
  return (
    <div>
      <SectionHeader
        id="bibliography"
        number="08"
        title="BIBLIOGRAPHY"
        subtitle="Primary sources cited throughout this analysis. Peer-reviewed where available. Evidence quality varies — see Section 04 methodological caveat."
      />
      <Panel>
        <div style={{ display: 'grid', gap: 10 }}>
          {BIBLIOGRAPHY.map((ref) => (
            <div key={ref.id} style={{ borderBottom: `1px solid ${C.border}`, paddingBottom: 10 }}>
              <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.7, margin: '0 0 4px' }}>
                {ref.citation}
              </p>
              <span style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim }}>
                Relevance: {ref.relevance}
              </span>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  )
}

// ── Main Dashboard ────────────────────────────────────────────────────────────

export default function SatanismResearchDashboard() {
  const [activeNav, setActiveNav] = useState<string>('taxonomy')

  const scrollTo = (id: string) => {
    setActiveNav(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div style={{ background: C.bg, minHeight: '100vh', fontFamily: 'monospace', color: C.text }}>

      {/* Header */}
      <div style={{
        borderBottom: `1px solid ${C.borderAccent}`,
        padding: '28px 24px 20px',
        background: C.surface,
        position: 'sticky', top: 0, zIndex: 50,
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
            <div>
              <Link href="/" style={{ fontFamily: 'monospace', fontSize: 11, color: C.textDim, textDecoration: 'none', display: 'block', marginBottom: 6 }}>
                ← LIMBICLAB HOME
              </Link>
              <div style={{ fontFamily: 'monospace', fontSize: 11, color: C.crimson, letterSpacing: '0.22em', marginBottom: 4 }}>
                RESEARCH ANALYSIS // BELIEF SYSTEM NEUROSCIENCE
              </div>
              <h1 style={{ fontFamily: 'monospace', fontSize: 20, fontWeight: 700, color: C.text, letterSpacing: '0.1em', margin: 0 }}>
                SATANISM — NEUROLOGICAL & PSYCHOLOGICAL PROFILE
              </h1>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim }}>SECTIONS: 7 + BIBLIOGRAPHY</div>
              <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim }}>CITATIONS: {BIBLIOGRAPHY.length}</div>
              <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim }}>ACADEMIC LEVEL: GRADUATE</div>
            </div>
          </div>

          {/* Section nav */}
          <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
            {SECTION_NAV.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                style={{
                  fontFamily: 'monospace', fontSize: 10, letterSpacing: '0.12em',
                  padding: '5px 10px',
                  border: `1px solid ${activeNav === s.id ? C.crimson : C.border}`,
                  background: activeNav === s.id ? C.crimsonDim : 'transparent',
                  color: activeNav === s.id ? C.text : C.textDim,
                  cursor: 'pointer',
                }}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px 80px' }}>

        {/* Disclaimer */}
        <div style={{
          background: C.surface2, border: `1px solid ${C.border}`,
          borderLeft: `3px solid ${C.gold}`,
          padding: '14px 18px', marginBottom: 40,
        }}>
          <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.goldLight, letterSpacing: '0.18em', marginBottom: 6 }}>
            ◈ ACADEMIC DISCLAIMER
          </div>
          <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textDim, lineHeight: 1.8, margin: 0 }}>
            This analysis examines Satanism through neuroscience, psychology, and philosophy as an academic research framework — analogous to studying any other belief system&apos;s neurological correlates. It does not constitute a religious or political endorsement or condemnation. Citations are provided for verification. Research specific to Satanism is sparse; mechanisms are often extrapolated from broader stress, trauma, and psychology literature.
          </p>
        </div>

        <div style={{ display: 'grid', gap: 60 }}>
          <TaxonomySection />
          <NeuroscienceSection />
          <ReceptorSection />
          <DisordersSection />
          <MetaphysicalSection />
          <GeneticsSection />
          <RecoverySection />
          <BibliographySection />
        </div>
      </div>
    </div>
  )
}
