'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HPA_AXIS,
  ENVIRONMENTAL_RISKS,
  SUICIDOLOGY,
  EPIGENETICS,
  INTERVENTIONS,
  ENV_REFS,
} from '@/lib/environmentalData'

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
  { id: 'hpa',         label: 'STRESS AXIS',   num: '01' },
  { id: 'risks',       label: 'ENV. RISKS',    num: '02' },
  { id: 'suicidology', label: 'SUICIDOLOGY',   num: '03' },
  { id: 'epigenetics', label: 'EPIGENETICS',   num: '04' },
  { id: 'interventions', label: 'INTERVENTION', num: '05' },
  { id: 'bibliography', label: 'BIBLIOGRAPHY', num: '06' },
]

export default function EnvironmentalDashboard() {
  const [active, setActive] = useState('hpa')
  const [expandedRisk, setExpandedRisk] = useState<string | null>(null)
  const [suicideTab, setSuicideTab] = useState<'epi' | 'predictors' | 'warning' | 'protective'>('epi')
  const [expandedEpigen, setExpandedEpigen] = useState<string | null>(null)

  return (
    <div style={{ background: C.bg, minHeight: '100vh', fontFamily: 'monospace', color: C.text }}>
      <style>{`
        @media (max-width: 640px) {
          .env-header { padding: 24px 16px 20px !important; }
          .env-crisis { padding: 10px 16px !important; }
          .env-body { padding: 20px 16px !important; }
          .env-cascade-row { grid-template-columns: 32px 1fr !important; gap: 12px !important; }
          .env-cascade-label { grid-column: 2; grid-row: 1; }
          .env-cascade-body { grid-column: 1 / -1; padding-top: 0 !important; }
          .env-header h1 { font-size: 22px !important; }
        }
      `}</style>
      {/* Header */}
      <div className="env-header" style={{ borderBottom: `1px solid ${C.border}`, padding: '40px 48px 32px' }}>
        <div style={{ fontSize: 11, color: C.red, letterSpacing: '0.3em', marginBottom: 12, textTransform: 'uppercase' }}>
          Deep Research // Environmental Psychiatry & Suicidology
        </div>
        <h1 style={{ fontSize: 38, fontWeight: 700, color: '#e0e0e0', letterSpacing: '0.08em', margin: 0, lineHeight: 1 }}>
          ENVIRONMENTAL MENTAL DISORDERS
        </h1>
        <div style={{ fontSize: 13, color: C.accentDim, letterSpacing: '0.18em', marginTop: 8 }}>
          SUICIDAL TENDENCIES · TRAUMA · EPIGENETICS · EVIDENCE-BASED INTERVENTION
        </div>
        <div style={{ marginTop: 20, display: 'flex', gap: 32, fontSize: 11, color: C.textDim, letterSpacing: '0.15em', flexWrap: 'wrap' }}>
          <span>ACEs: ADVERSE CHILDHOOD EXPERIENCES</span>
          <span style={{ color: C.border }}>|</span>
          <span>RACIAL TRAUMA</span>
          <span style={{ color: C.border }}>|</span>
          <span>CLIMATE GRIEF</span>
          <span style={{ color: C.border }}>|</span>
          <span style={{ color: C.red }}>988 CRISIS LINE: CALL OR TEXT 988</span>
        </div>
      </div>

      {/* Crisis banner */}
      <div className="env-crisis" style={{ background: '#0c0202', borderBottom: `1px solid ${C.red}44`, padding: '10px 48px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: C.red, flexShrink: 0 }} />
        <span style={{ fontSize: 11, color: '#e0e0e0' }}>
          <strong>Crisis resources:</strong> 988 Suicide & Crisis Lifeline (call/text 988) · Crisis Text Line: text HOME to 741741 · International: befrienders.org
        </span>
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
      <div className="env-body" style={{ padding: '40px 48px', maxWidth: 1100 }}>
        <AnimatePresence mode="wait">

          {active === 'hpa' && (
            <motion.div key="hpa" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <SectionHeader num="01" title="The HPA Stress Axis" sub="How environmental stressors are transduced into neurological disease" />
              <div style={{ border: `1px solid ${C.border}`, background: C.panel, padding: 20, borderRadius: 4, marginBottom: 28 }}>
                <p style={{ fontSize: 12, color: C.text, lineHeight: 1.9, margin: 0 }}>{HPA_AXIS.overview}</p>
              </div>
              <div style={{ display: 'grid', gap: 0, borderRadius: 4, overflow: 'hidden', border: `1px solid ${C.border}` }}>
                {HPA_AXIS.cascade.map((step, i) => (
                  <div key={step.step} className="env-cascade-row" style={{ borderBottom: i < HPA_AXIS.cascade.length - 1 ? `1px solid ${C.border}` : 'none', padding: '18px 24px', display: 'grid', gridTemplateColumns: '40px 160px 1fr', gap: 20, alignItems: 'start', background: C.panel }}>
                    <div style={{ fontSize: 22, fontWeight: 700, color: C.accentDim }}>{step.step}</div>
                    <div className="env-cascade-label" style={{ fontSize: 12, color: C.accent, fontWeight: 600, letterSpacing: '0.05em', paddingTop: 2 }}>{step.label}</div>
                    <div className="env-cascade-body" style={{ fontSize: 11, color: C.textMid, lineHeight: 1.7 }}>{step.body}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {active === 'risks' && (
            <motion.div key="risks" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <SectionHeader num="02" title="Environmental Risk Factors" sub="Evidence-based stressors with documented psychiatric consequences" />
              <div style={{ display: 'grid', gap: 16 }}>
                {ENVIRONMENTAL_RISKS.map((r) => (
                  <div
                    key={r.category}
                    style={{ border: `1px solid ${expandedRisk === r.category ? r.color : C.border}`, background: expandedRisk === r.category ? '#0a0a12' : C.panel, borderRadius: 4, overflow: 'hidden', cursor: 'pointer', transition: 'border-color 0.2s' }}
                    onClick={() => setExpandedRisk(expandedRisk === r.category ? null : r.category)}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 20px' }}>
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: r.color, flexShrink: 0 }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 13, color: '#e0e0e0', letterSpacing: '0.08em', fontWeight: 600 }}>{r.category}</div>
                        <div style={{ fontSize: 11, color: C.textMid, marginTop: 4, lineHeight: 1.5 }}>{r.overview}</div>
                      </div>
                      <div style={{ fontSize: 16, color: r.color, flexShrink: 0 }}>{expandedRisk === r.category ? '−' : '+'}</div>
                    </div>
                    <AnimatePresence>
                      {expandedRisk === r.category && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                          <div style={{ borderTop: `1px solid ${C.border}`, padding: '16px 20px 20px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 14 }}>
                              <div>
                                <div style={{ fontSize: 10, color: C.textDim, letterSpacing: '0.2em', marginBottom: 10 }}>KEY FINDINGS</div>
                                {r.findings.map((f, i) => (
                                  <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                                    <div style={{ color: r.color, fontSize: 10, flexShrink: 0, paddingTop: 2 }}>◈</div>
                                    <div style={{ fontSize: 11, color: C.text, lineHeight: 1.5 }}>{f}</div>
                                  </div>
                                ))}
                              </div>
                              <div>
                                <div style={{ fontSize: 10, color: C.textDim, letterSpacing: '0.2em', marginBottom: 10 }}>MECHANISM</div>
                                <p style={{ fontSize: 11, color: C.textMid, lineHeight: 1.8, margin: 0 }}>{r.mechanism}</p>
                              </div>
                            </div>
                            <div style={{ fontSize: 10, color: C.textDim, fontStyle: 'italic', borderTop: `1px solid ${C.border}`, paddingTop: 12 }}>{r.citation}</div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {active === 'suicidology' && (
            <motion.div key="suicidology" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <SectionHeader num="03" title="Suicidal Tendencies" sub="Epidemiology, environmental predictors, warning signs, and protective factors" />

              <div style={{ border: `1px solid ${C.border}`, background: C.panel, padding: 20, borderRadius: 4, marginBottom: 24 }}>
                <p style={{ fontSize: 12, color: C.text, lineHeight: 1.9, margin: 0 }}>{SUICIDOLOGY.overview}</p>
              </div>

              <div style={{ display: 'flex', gap: 0, marginBottom: 24, border: `1px solid ${C.border}`, borderRadius: 4, overflow: 'hidden', width: 'fit-content' }}>
                {([
                  { id: 'epi',       label: 'EPIDEMIOLOGY' },
                  { id: 'predictors', label: 'ENV. PREDICTORS' },
                  { id: 'warning',   label: 'WARNING SIGNS' },
                  { id: 'protective', label: 'PROTECTIVE' },
                ] as const).map((t) => (
                  <button key={t.id} onClick={() => setSuicideTab(t.id)} style={{ background: suicideTab === t.id ? '#1a0808' : 'transparent', border: 'none', borderBottom: suicideTab === t.id ? `2px solid ${C.red}` : '2px solid transparent', color: suicideTab === t.id ? '#e0e0e0' : C.textDim, padding: '10px 20px', fontSize: 10, letterSpacing: '0.15em', cursor: 'pointer', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                    {t.label}
                  </button>
                ))}
              </div>

              {suicideTab === 'epi' && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
                  {SUICIDOLOGY.epidemiology.map((s, i) => (
                    <div key={i} style={{ border: `1px solid ${C.border}`, background: C.panel, padding: '20px 16px', borderRadius: 4 }}>
                      <div style={{ fontSize: 32, fontWeight: 700, color: C.red, letterSpacing: '0.04em', lineHeight: 1, marginBottom: 8 }}>{s.stat}</div>
                      <div style={{ fontSize: 11, color: C.textMid, lineHeight: 1.5 }}>{s.desc}</div>
                    </div>
                  ))}
                </div>
              )}

              {suicideTab === 'predictors' && (
                <div style={{ display: 'grid', gap: 16 }}>
                  {SUICIDOLOGY.environmentalPredictors.map((p) => (
                    <div key={p.name} style={{ border: `1px solid ${C.border}`, background: C.panel, padding: '20px 24px', borderRadius: 4 }}>
                      <div style={{ fontSize: 13, color: '#e0e0e0', fontWeight: 600, letterSpacing: '0.08em', marginBottom: 12 }}>{p.name}</div>
                      <p style={{ fontSize: 11, color: C.textMid, lineHeight: 1.8, margin: '0 0 12px' }}>{p.body}</p>
                      <div style={{ fontSize: 10, color: C.textDim, fontStyle: 'italic' }}>{p.citation}</div>
                    </div>
                  ))}
                </div>
              )}

              {suicideTab === 'warning' && (
                <div>
                  <div style={{ border: `1px solid ${C.border}`, background: C.panel, padding: 20, borderRadius: 4, marginBottom: 16 }}>
                    <div style={{ fontSize: 12, color: C.accent, fontWeight: 600, letterSpacing: '0.1em', marginBottom: 12 }}>{SUICIDOLOGY.warningSignsACT.title}</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 20 }}>
                      {[
                        { label: 'A — ACKNOWLEDGE', body: SUICIDOLOGY.warningSignsACT.acknowledge },
                        { label: 'C — CARE', body: SUICIDOLOGY.warningSignsACT.care },
                        { label: 'T — TELL', body: SUICIDOLOGY.warningSignsACT.tell },
                      ].map((a) => (
                        <div key={a.label} style={{ border: `1px solid ${C.border}`, padding: 14, borderRadius: 4 }}>
                          <div style={{ fontSize: 11, color: C.accent, fontWeight: 600, marginBottom: 6 }}>{a.label}</div>
                          <div style={{ fontSize: 11, color: C.textMid, lineHeight: 1.6 }}>{a.body}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{ fontSize: 10, color: C.textDim, letterSpacing: '0.2em', marginBottom: 10 }}>WARNING SIGNS</div>
                    {SUICIDOLOGY.warningSignsACT.signs.map((sign, i) => (
                      <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
                        <div style={{ color: C.red, fontSize: 10, flexShrink: 0, paddingTop: 2 }}>◈</div>
                        <div style={{ fontSize: 11, color: C.text, lineHeight: 1.5 }}>{sign}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {suicideTab === 'protective' && (
                <div style={{ border: `1px solid ${C.border}`, background: C.panel, borderRadius: 4, overflow: 'hidden' }}>
                  {SUICIDOLOGY.protectiveFactors.map((f, i) => (
                    <div key={i} style={{ padding: '14px 20px', borderBottom: i < SUICIDOLOGY.protectiveFactors.length - 1 ? `1px solid ${C.border}` : 'none', display: 'flex', gap: 14, alignItems: 'center' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.accent, flexShrink: 0 }} />
                      <div style={{ fontSize: 12, color: C.text, lineHeight: 1.5 }}>{f}</div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {active === 'epigenetics' && (
            <motion.div key="epigenetics" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <SectionHeader num="04" title="Epigenetics of Environmental Stress" sub="How trauma is written into the genome — and inherited across generations" />
              <div style={{ border: `1px solid ${C.border}`, background: C.panel, padding: 20, borderRadius: 4, marginBottom: 24 }}>
                <p style={{ fontSize: 12, color: C.text, lineHeight: 1.9, margin: 0 }}>{EPIGENETICS.overview}</p>
              </div>
              <div style={{ display: 'grid', gap: 16 }}>
                {EPIGENETICS.mechanisms.map((m) => (
                  <div
                    key={m.name}
                    onClick={() => setExpandedEpigen(expandedEpigen === m.name ? null : m.name)}
                    style={{ border: `1px solid ${expandedEpigen === m.name ? C.purple : C.border}`, background: C.panel, borderRadius: 4, padding: '18px 20px', cursor: 'pointer', transition: 'border-color 0.2s' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ fontSize: 13, color: '#e0e0e0', fontWeight: 600, letterSpacing: '0.08em' }}>{m.name}</div>
                      <div style={{ fontSize: 16, color: C.purple }}>{expandedEpigen === m.name ? '−' : '+'}</div>
                    </div>
                    <AnimatePresence>
                      {expandedEpigen === m.name && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                          <div style={{ marginTop: 14, borderTop: `1px solid ${C.border}`, paddingTop: 14 }}>
                            <p style={{ fontSize: 11, color: C.textMid, lineHeight: 1.8, margin: '0 0 10px' }}>{m.body}</p>
                            <div style={{ fontSize: 10, color: C.textDim, fontStyle: 'italic' }}>{m.citation}</div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {active === 'interventions' && (
            <motion.div key="interventions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <SectionHeader num="05" title="Evidence-Based Interventions" sub="Treatments with empirical support for environmental mental health and suicidality" />
              <div style={{ display: 'grid', gap: 16 }}>
                {INTERVENTIONS.map((iv, i) => (
                  <div key={iv.name} style={{ border: `1px solid ${C.border}`, background: C.panel, borderRadius: 4, padding: '20px 24px', display: 'grid', gridTemplateColumns: '28px 1fr', gap: 20, alignItems: 'start' }}>
                    <div style={{ fontSize: 20, fontWeight: 700, color: C.accentDim, paddingTop: 2 }}>{String(i + 1).padStart(2, '0')}</div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 8 }}>
                        <div style={{ fontSize: 13, color: '#e0e0e0', fontWeight: 600, letterSpacing: '0.05em' }}>{iv.name}</div>
                        <div style={{ fontSize: 10, color: iv.color, letterSpacing: '0.15em', border: `1px solid ${iv.color}44`, padding: '2px 8px', borderRadius: 2 }}>{iv.level}</div>
                      </div>
                      <p style={{ fontSize: 11, color: C.textMid, lineHeight: 1.8, margin: 0 }}>{iv.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {active === 'bibliography' && (
            <motion.div key="bibliography" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <SectionHeader num="06" title="Bibliography" sub="Primary sources — peer-reviewed and academic press publications" />
              <div style={{ border: `1px solid ${C.border}`, background: C.panel, borderRadius: 4, overflow: 'hidden' }}>
                {ENV_REFS.map((ref, i) => (
                  <div key={i} style={{ padding: '14px 20px', borderBottom: i < ENV_REFS.length - 1 ? `1px solid ${C.border}` : 'none', display: 'flex', gap: 16, alignItems: 'start' }}>
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
