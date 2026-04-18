'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  NEUROIMAGING,
  CIRCADIAN_GENES,
  CIRCADIAN_TEXT,
  LITHIUM_MECHANISMS,
  CREATIVITY_DATA,
  BIPOLAR_SUICIDALITY,
  BIPOLAR_GENES_EXTENDED,
  BIPOLAR_REFS,
} from '@/lib/bipolarData'

const C = {
  bg: '#040408',
  panel: '#08080f',
  border: '#1a1a2e',
  accent: '#2a9d9d',
  accentDim: '#1a5f5f',
  red: '#8A0303',
  gold: '#d4a017',
  purple: '#7c3aed',
  text: '#c8c8d4',
  textMid: '#888899',
  textDim: '#444455',
}

const SECTIONS = [
  { id: 'neuroimaging',  label: 'NEUROIMAGING',   num: '01' },
  { id: 'circadian',     label: 'CIRCADIAN',       num: '02' },
  { id: 'lithium',       label: 'LITHIUM',         num: '03' },
  { id: 'genetics',      label: 'GENETICS',        num: '04' },
  { id: 'creativity',    label: 'CREATIVITY',      num: '05' },
  { id: 'suicidality',   label: 'SUICIDALITY',     num: '06' },
  { id: 'bibliography',  label: 'BIBLIOGRAPHY',    num: '07' },
]

export default function BipolarDashboard() {
  const [active, setActive] = useState('neuroimaging')
  const [expandedRegion, setExpandedRegion] = useState<string | null>(null)
  const [creativeTab, setCreativeTab] = useState<'studies' | 'individuals'>('studies')
  const [suicideTab, setSuicideTab] = useState<'stats' | 'mechanisms' | 'joiner'>('stats')

  return (
    <div style={{ background: C.bg, minHeight: '100vh', fontFamily: 'monospace', color: C.text }}>
      {/* Header */}
      <div style={{ borderBottom: `1px solid ${C.border}`, padding: '40px 48px 32px' }}>
        <div style={{ fontSize: 11, color: C.red, letterSpacing: '0.3em', marginBottom: 12, textTransform: 'uppercase' }}>
          Deep Research // Bipolar Spectrum Disorders
        </div>
        <h1 style={{ fontSize: 42, fontWeight: 700, color: '#e0e0e0', letterSpacing: '0.08em', margin: 0, lineHeight: 1 }}>
          BIPOLAR DISORDER
        </h1>
        <div style={{ fontSize: 14, color: C.accentDim, letterSpacing: '0.2em', marginTop: 8 }}>
          NEUROIMAGING · CIRCADIAN BIOLOGY · LITHIUM MECHANISM · GENETICS · CREATIVITY · SUICIDALITY
        </div>
        <div style={{ marginTop: 20, display: 'flex', gap: 32, fontSize: 11, color: C.textDim, letterSpacing: '0.15em' }}>
          <span>LIFETIME PREVALENCE: ~2.4%</span>
          <span style={{ color: C.border }}>|</span>
          <span>HERITABILITY: 60–85%</span>
          <span style={{ color: C.border }}>|</span>
          <span>MEAN ONSET: 20–25 YEARS</span>
          <span style={{ color: C.border }}>|</span>
          <span style={{ color: C.red }}>SUICIDE ATTEMPT RATE: 25–50%</span>
        </div>
      </div>

      {/* Nav */}
      <div style={{ display: 'flex', borderBottom: `1px solid ${C.border}`, overflowX: 'auto' }}>
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            style={{
              background: 'none',
              border: 'none',
              borderBottom: active === s.id ? `2px solid ${C.accent}` : '2px solid transparent',
              color: active === s.id ? C.accent : C.textDim,
              padding: '14px 24px',
              fontSize: 10,
              letterSpacing: '0.2em',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'color 0.2s',
            }}
          >
            <span style={{ color: C.textDim, marginRight: 6 }}>{s.num}</span>
            {s.label}
          </button>
        ))}
      </div>

      {/* Body */}
      <div style={{ padding: '40px 48px', maxWidth: 1100 }}>
        <AnimatePresence mode="wait">
          {active === 'neuroimaging' && (
            <motion.div key="neuroimaging" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <SectionHeader num="01" title="Neuroimaging Findings" sub="Structural & functional MRI, DTI, and PET evidence in bipolar disorder" />
              <div style={{ display: 'grid', gap: 16 }}>
                {NEUROIMAGING.map((r) => (
                  <div
                    key={r.region}
                    style={{ border: `1px solid ${expandedRegion === r.region ? r.color : C.border}`, background: expandedRegion === r.region ? '#0c0c16' : C.panel, borderRadius: 4, overflow: 'hidden', cursor: 'pointer', transition: 'border-color 0.2s' }}
                    onClick={() => setExpandedRegion(expandedRegion === r.region ? null : r.region)}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 20px' }}>
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: r.color, flexShrink: 0 }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 13, color: '#e0e0e0', letterSpacing: '0.1em', fontWeight: 600 }}>{r.region}</div>
                        <div style={{ fontSize: 11, color: C.textMid, marginTop: 4, lineHeight: 1.5 }}>{r.finding}</div>
                      </div>
                      <div style={{ fontSize: 16, color: r.color, flexShrink: 0 }}>{expandedRegion === r.region ? '−' : '+'}</div>
                    </div>
                    <AnimatePresence>
                      {expandedRegion === r.region && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                          <div style={{ borderTop: `1px solid ${C.border}`, padding: '16px 20px 20px' }}>
                            <div style={{ fontSize: 11, color: C.textMid, lineHeight: 1.8, marginBottom: 12 }}>{r.mechanism}</div>
                            <div style={{ fontSize: 10, color: C.textDim, letterSpacing: '0.1em', fontStyle: 'italic' }}>{r.citation}</div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {active === 'circadian' && (
            <motion.div key="circadian" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <SectionHeader num="02" title="Circadian Biology" sub="Molecular clock dysregulation, sleep architecture, and the oscillation hypothesis" />

              {/* Overview boxes */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
                {[
                  { label: 'OVERVIEW', text: CIRCADIAN_TEXT.overview },
                  { label: 'LITHIUM & GSK-3β', text: CIRCADIAN_TEXT.lithiumMechanism },
                ].map((b) => (
                  <div key={b.label} style={{ border: `1px solid ${C.border}`, background: C.panel, padding: 20, borderRadius: 4 }}>
                    <div style={{ fontSize: 10, color: C.accent, letterSpacing: '0.25em', marginBottom: 10 }}>{b.label}</div>
                    <p style={{ fontSize: 11, color: C.textMid, lineHeight: 1.8, margin: 0 }}>{b.text}</p>
                  </div>
                ))}
              </div>
              <div style={{ border: `1px solid ${C.border}`, background: C.panel, padding: 20, borderRadius: 4, marginBottom: 32 }}>
                <div style={{ fontSize: 10, color: C.gold, letterSpacing: '0.25em', marginBottom: 10 }}>SLEEP DEPRIVATION AS TRIGGER</div>
                <p style={{ fontSize: 11, color: C.textMid, lineHeight: 1.8, margin: 0 }}>{CIRCADIAN_TEXT.sleepDeprivation}</p>
              </div>

              {/* Gene table */}
              <div style={{ fontSize: 10, color: C.textDim, letterSpacing: '0.2em', marginBottom: 12 }}>CIRCADIAN CLOCK GENES IN BIPOLAR DISORDER</div>
              <div style={{ display: 'grid', gap: 12 }}>
                {CIRCADIAN_GENES.map((g) => (
                  <div key={g.gene} style={{ border: `1px solid ${C.border}`, background: C.panel, borderRadius: 4, padding: '16px 20px', display: 'grid', gridTemplateColumns: '80px 1fr 1fr', gap: 16, alignItems: 'start' }}>
                    <div style={{ fontSize: 18, fontWeight: 700, color: C.accent, letterSpacing: '0.05em' }}>{g.gene}</div>
                    <div>
                      <div style={{ fontSize: 10, color: C.textDim, letterSpacing: '0.15em', marginBottom: 4 }}>FUNCTION</div>
                      <div style={{ fontSize: 11, color: C.textMid, lineHeight: 1.6 }}>{g.function}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 10, color: C.textDim, letterSpacing: '0.15em', marginBottom: 4 }}>BIPOLAR LINK</div>
                      <div style={{ fontSize: 11, color: C.text, lineHeight: 1.6 }}>{g.bipolarLink}</div>
                      <div style={{ fontSize: 10, color: C.textDim, marginTop: 6, fontStyle: 'italic' }}>{g.evidence}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {active === 'lithium' && (
            <motion.div key="lithium" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <SectionHeader num="03" title="Lithium Mechanism" sub="Molecular targets of lithium — the oldest and most effective mood stabilizer" />
              <div style={{ display: 'grid', gap: 16 }}>
                {LITHIUM_MECHANISMS.map((m, i) => (
                  <div key={m.target} style={{ border: `1px solid ${C.border}`, background: C.panel, borderRadius: 4, padding: '20px 24px', display: 'grid', gridTemplateColumns: '28px 1fr 1fr', gap: 20, alignItems: 'start' }}>
                    <div style={{ fontSize: 22, fontWeight: 700, color: C.accentDim, letterSpacing: '0.05em', paddingTop: 2 }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <div style={{ fontSize: 13, color: C.accent, letterSpacing: '0.1em', fontWeight: 600, marginBottom: 8 }}>{m.target}</div>
                      <p style={{ fontSize: 11, color: C.textMid, lineHeight: 1.8, margin: 0 }}>{m.mechanism}</p>
                    </div>
                    <div>
                      <div style={{ fontSize: 10, color: C.textDim, letterSpacing: '0.2em', marginBottom: 8 }}>CLINICAL CONSEQUENCE</div>
                      <p style={{ fontSize: 11, color: C.text, lineHeight: 1.7, margin: 0 }}>{m.consequence}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 24, border: `1px solid ${C.accentDim}`, background: '#040c0c', borderRadius: 4, padding: 20 }}>
                <div style={{ fontSize: 10, color: C.accent, letterSpacing: '0.25em', marginBottom: 10 }}>CLINICAL NOTE</div>
                <p style={{ fontSize: 11, color: C.textMid, lineHeight: 1.8, margin: 0 }}>
                  Lithium has the narrowest therapeutic index of any psychiatric medication. Therapeutic serum level: 0.6–1.2 mEq/L.
                  Toxic above 1.5 mEq/L. Requires regular blood monitoring. Despite this, it remains the gold standard for Bipolar I
                  disorder and is the only medication with Level 1 evidence for suicide prevention across all psychiatric conditions.
                </p>
              </div>
            </motion.div>
          )}

          {active === 'genetics' && (
            <motion.div key="genetics" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <SectionHeader num="04" title="Extended Genetic Profile" sub="GWAS-identified and exome-sequenced risk loci with mechanistic relevance" />
              <div style={{ display: 'grid', gap: 16 }}>
                {BIPOLAR_GENES_EXTENDED.map((g) => (
                  <div key={g.gene} style={{ border: `1px solid ${C.border}`, background: C.panel, borderRadius: 4, padding: '20px 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 12 }}>
                      <div style={{ fontSize: 20, fontWeight: 700, color: C.purple, letterSpacing: '0.05em', fontFamily: 'monospace' }}>{g.gene}</div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                      <div>
                        <div style={{ fontSize: 10, color: C.textDim, letterSpacing: '0.2em', marginBottom: 6 }}>DESCRIPTION</div>
                        <p style={{ fontSize: 11, color: C.textMid, lineHeight: 1.7, margin: 0 }}>{g.description}</p>
                      </div>
                      <div>
                        <div style={{ fontSize: 10, color: C.textDim, letterSpacing: '0.2em', marginBottom: 6 }}>BIPOLAR RELEVANCE</div>
                        <p style={{ fontSize: 11, color: C.text, lineHeight: 1.7, margin: 0 }}>{g.relevance}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {active === 'creativity' && (
            <motion.div key="creativity" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <SectionHeader num="05" title="Creativity & Bipolar Disorder" sub="The most replicated finding in the psychology of creative cognition" />
              <div style={{ border: `1px solid ${C.border}`, background: C.panel, padding: 20, borderRadius: 4, marginBottom: 24 }}>
                <p style={{ fontSize: 12, color: C.text, lineHeight: 1.9, margin: 0 }}>{CREATIVITY_DATA.overview}</p>
              </div>

              <div style={{ display: 'flex', gap: 0, marginBottom: 20, border: `1px solid ${C.border}`, borderRadius: 4, overflow: 'hidden', width: 'fit-content' }}>
                {(['studies', 'individuals'] as const).map((t) => (
                  <button key={t} onClick={() => setCreativeTab(t)} style={{ background: creativeTab === t ? C.accentDim : 'transparent', border: 'none', color: creativeTab === t ? '#e0e0e0' : C.textDim, padding: '10px 24px', fontSize: 10, letterSpacing: '0.2em', cursor: 'pointer', textTransform: 'uppercase' }}>
                    {t}
                  </button>
                ))}
              </div>

              {creativeTab === 'studies' && (
                <div style={{ display: 'grid', gap: 12 }}>
                  {CREATIVITY_DATA.studies.map((s, i) => (
                    <div key={i} style={{ border: `1px solid ${C.border}`, background: C.panel, padding: '16px 20px', borderRadius: 4, display: 'flex', gap: 16, alignItems: 'start' }}>
                      <div style={{ fontSize: 22, fontWeight: 700, color: C.accentDim, flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</div>
                      <div>
                        <p style={{ fontSize: 12, color: C.text, lineHeight: 1.7, margin: '0 0 8px' }}>{s.finding}</p>
                        <div style={{ fontSize: 10, color: C.textDim, fontStyle: 'italic' }}>{s.citation}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {creativeTab === 'individuals' && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {CREATIVITY_DATA.notableIndividuals.map((ind, i) => {
                    const [name, ...rest] = ind.split(' — ')
                    return (
                      <div key={i} style={{ border: `1px solid ${C.border}`, background: C.panel, padding: '14px 18px', borderRadius: 4 }}>
                        <div style={{ fontSize: 12, color: '#e0e0e0', fontWeight: 600, marginBottom: 4 }}>{name}</div>
                        <div style={{ fontSize: 11, color: C.textMid }}>{rest.join(' — ')}</div>
                      </div>
                    )
                  })}
                </div>
              )}

              <div style={{ marginTop: 20, border: `1px solid ${C.gold}22`, background: '#0c0a02', padding: 20, borderRadius: 4 }}>
                <div style={{ fontSize: 10, color: C.gold, letterSpacing: '0.25em', marginBottom: 8 }}>CRITICAL CAVEAT</div>
                <p style={{ fontSize: 11, color: C.textMid, lineHeight: 1.8, margin: 0 }}>{CREATIVITY_DATA.caveat}</p>
              </div>
            </motion.div>
          )}

          {active === 'suicidality' && (
            <motion.div key="suicidality" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <SectionHeader num="06" title="Suicidality in Bipolar Disorder" sub="Risk factors, neurobiological mechanisms, and Joiner's Interpersonal Theory" />

              {/* Crisis line */}
              <div style={{ border: `1px solid ${C.red}`, background: '#0c0202', padding: '12px 20px', borderRadius: 4, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: C.red, flexShrink: 0 }} />
                <div style={{ fontSize: 11, color: '#e0e0e0' }}>
                  <strong>988 Suicide & Crisis Lifeline</strong> — Call or text <strong>988</strong> (US) · Crisis Text Line: text <strong>HOME</strong> to 741741
                </div>
              </div>

              <div style={{ display: 'flex', gap: 0, marginBottom: 20, border: `1px solid ${C.border}`, borderRadius: 4, overflow: 'hidden', width: 'fit-content' }}>
                {(['stats', 'mechanisms', 'joiner'] as const).map((t) => (
                  <button key={t} onClick={() => setSuicideTab(t)} style={{ background: suicideTab === t ? '#1a0808' : 'transparent', border: 'none', borderBottom: suicideTab === t ? `2px solid ${C.red}` : '2px solid transparent', color: suicideTab === t ? '#e0e0e0' : C.textDim, padding: '10px 24px', fontSize: 10, letterSpacing: '0.2em', cursor: 'pointer', textTransform: 'uppercase' }}>
                    {t === 'joiner' ? `JOINER'S THEORY` : t}
                  </button>
                ))}
              </div>

              {suicideTab === 'stats' && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {BIPOLAR_SUICIDALITY.statistics.map((s, i) => (
                    <div key={i} style={{ border: `1px solid ${C.border}`, background: C.panel, padding: '24px 20px', borderRadius: 4 }}>
                      <div style={{ fontSize: 36, fontWeight: 700, color: C.red, letterSpacing: '0.05em', lineHeight: 1 }}>{s.stat}</div>
                      <div style={{ fontSize: 12, color: C.textMid, marginTop: 8, lineHeight: 1.5 }}>{s.desc}</div>
                    </div>
                  ))}
                </div>
              )}

              {suicideTab === 'mechanisms' && (
                <div style={{ display: 'grid', gap: 16 }}>
                  {BIPOLAR_SUICIDALITY.mechanisms.map((m) => (
                    <div key={m.name} style={{ border: `1px solid ${C.border}`, background: C.panel, padding: '20px 24px', borderRadius: 4 }}>
                      <div style={{ fontSize: 13, color: '#e0e0e0', fontWeight: 600, letterSpacing: '0.08em', marginBottom: 12 }}>{m.name}</div>
                      <p style={{ fontSize: 11, color: C.textMid, lineHeight: 1.8, margin: 0 }}>{m.body}</p>
                    </div>
                  ))}
                </div>
              )}

              {suicideTab === 'joiner' && (
                <div>
                  <div style={{ border: `1px solid ${C.border}`, background: C.panel, padding: '16px 20px', borderRadius: 4, marginBottom: 16 }}>
                    <div style={{ fontSize: 12, color: C.textMid, fontStyle: 'italic' }}>{BIPOLAR_SUICIDALITY.joinersTheory.name}</div>
                  </div>
                  <div style={{ display: 'grid', gap: 14 }}>
                    {BIPOLAR_SUICIDALITY.joinersTheory.components.map((c, i) => (
                      <div key={i} style={{ border: `1px solid ${C.border}`, background: C.panel, padding: '20px 24px', borderRadius: 4, display: 'grid', gridTemplateColumns: '28px 1fr', gap: 16, alignItems: 'start' }}>
                        <div style={{ fontSize: 20, fontWeight: 700, color: C.red }}>{i + 1}</div>
                        <div>
                          <div style={{ fontSize: 13, color: '#e0e0e0', fontWeight: 600, marginBottom: 8 }}>{c.name}</div>
                          <p style={{ fontSize: 11, color: C.textMid, lineHeight: 1.8, margin: 0 }}>{c.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {active === 'bibliography' && (
            <motion.div key="bibliography" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <SectionHeader num="07" title="Bibliography" sub="Primary sources — all peer-reviewed or academic press publications" />
              <div style={{ border: `1px solid ${C.border}`, background: C.panel, borderRadius: 4, overflow: 'hidden' }}>
                {BIPOLAR_REFS.map((ref, i) => (
                  <div key={i} style={{ padding: '14px 20px', borderBottom: i < BIPOLAR_REFS.length - 1 ? `1px solid ${C.border}` : 'none', display: 'flex', gap: 16, alignItems: 'start' }}>
                    <div style={{ fontSize: 10, color: C.textDim, flexShrink: 0, paddingTop: 2 }}>{String(i + 1).padStart(2, '0')}</div>
                    <div style={{ fontSize: 11, color: C.textMid, lineHeight: 1.6, fontStyle: 'italic' }}>{ref}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function SectionHeader({ num, title, sub }: { num: string; title: string; sub: string }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ fontSize: 10, color: C.textDim, letterSpacing: '0.3em', marginBottom: 6 }}>SECTION {num}</div>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#e0e0e0', letterSpacing: '0.08em', margin: '0 0 6px' }}>{title}</h2>
      <div style={{ fontSize: 12, color: C.textMid }}>{sub}</div>
    </div>
  )
}
