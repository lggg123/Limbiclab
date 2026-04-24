'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  JEALOUSY_THESIS,
  BRAIN_REGIONS,
  NEUROCHEMISTRY,
  PATHOLOGICAL_JEALOUSY,
  JEALOUSY_REFS,
} from '@/lib/jealousyData'

const C = {
  bg: '#040408',
  panel: '#08080f',
  border: '#1a1a2e',
  accent: '#8A0303',
  accentDim: '#4a0a0a',
  text: '#c8c8d4',
  textMid: '#888899',
  textDim: '#444455',
  teal: '#2a9d9d',
  gold: '#d4a017',
  purple: '#7c3aed',
}

const SECTIONS = [
  { id: 'thesis',    label: 'THESIS',             num: '01' },
  { id: 'regions',  label: 'BRAIN REGIONS',       num: '02' },
  { id: 'neuro',    label: 'NEUROCHEMISTRY',       num: '03' },
  { id: 'pathological', label: 'PATHOLOGICAL',    num: '04' },
  { id: 'refs',     label: 'BIBLIOGRAPHY',         num: '05' },
]

function SectionHeader({ num, title, sub }: { num: string; title: string; sub: string }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{ fontSize: 10, color: C.textDim, letterSpacing: '0.25em', marginBottom: 6 }}>SECTION {num}</div>
      <h2 style={{ fontSize: 26, fontWeight: 700, color: '#e0e0e0', letterSpacing: '0.08em', margin: 0 }}>{title}</h2>
      <div style={{ fontSize: 11, color: C.accentDim, letterSpacing: '0.15em', marginTop: 6 }}>{sub}</div>
    </div>
  )
}

function InfoBox({ label, text, color }: { label: string; text: string; color?: string }) {
  return (
    <div style={{ border: `1px solid ${C.border}`, background: C.panel, padding: 20, borderRadius: 4 }}>
      <div style={{ fontSize: 10, color: color ?? C.accent, letterSpacing: '0.25em', marginBottom: 10 }}>{label}</div>
      <p style={{ fontSize: 11, color: C.textMid, lineHeight: 1.85, margin: 0 }}>{text}</p>
    </div>
  )
}

export default function JealousyDashboard() {
  const [active, setActive] = useState('thesis')
  const [expandedRegion, setExpandedRegion] = useState<string | null>(null)
  const [expandedMolecule, setExpandedMolecule] = useState<string | null>(null)

  return (
    <div style={{ background: C.bg, minHeight: '100vh', fontFamily: 'monospace', color: C.text }}>

      {/* Header */}
      <div style={{ borderBottom: `1px solid ${C.border}`, padding: '40px 48px 32px' }}>
        <div style={{ fontSize: 11, color: C.accent, letterSpacing: '0.3em', marginBottom: 12 }}>
          DEEP RESEARCH // AFFECTIVE NEUROSCIENCE
        </div>
        <h1 style={{ fontSize: 42, fontWeight: 700, color: '#e0e0e0', letterSpacing: '0.08em', margin: 0, lineHeight: 1 }}>
          NEUROBIOLOGY OF JEALOUSY
        </h1>
        <div style={{ fontSize: 14, color: C.accentDim, letterSpacing: '0.2em', marginTop: 8 }}>
          SOCIAL PAIN · REWARD DEPRIVATION · NEUROCHEMISTRY · PATHOLOGICAL JEALOUSY · OTHELLO SYNDROME
        </div>
        <div style={{ marginTop: 20, display: 'flex', gap: 32, fontSize: 11, color: C.textDim, letterSpacing: '0.15em', flexWrap: 'wrap' }}>
          <span>KEY CIRCUIT: ACC + AMYGDALA + NAc</span>
          <span style={{ color: C.border }}>|</span>
          <span>MEDIATORS: CORTISOL · TESTOSTERONE · DOPAMINE</span>
          <span style={{ color: C.border }}>|</span>
          <span style={{ color: C.accent }}>OTHELLO SYNDROME: 2–16% PSYCHIATRIC POP.</span>
        </div>
        <div style={{ marginTop: 16, border: `1px solid ${C.accentDim}`, borderRadius: 4, padding: '12px 18px', maxWidth: 780, background: '#080505' }}>
          <span style={{ fontSize: 10, color: C.accent, letterSpacing: '0.2em' }}>CENTRAL THESIS — </span>
          <span style={{ fontSize: 11, color: C.textMid, lineHeight: 1.7 }}>
            Jealousy is an evolved threat-detection system activating social pain, reward deprivation, and aggression-preparation circuits simultaneously. It is not a personality weakness — it is what happens when a bonded brain perceives loss of exclusive access to a primary reward.
          </span>
        </div>
      </div>

      {/* Nav */}
      <div style={{ display: 'flex', borderBottom: `1px solid ${C.border}`, overflowX: 'auto' }}>
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            style={{
              background: 'none', border: 'none',
              borderBottom: active === s.id ? `2px solid ${C.accent}` : '2px solid transparent',
              color: active === s.id ? C.accent : C.textDim,
              padding: '14px 24px', fontSize: 10, letterSpacing: '0.2em',
              cursor: 'pointer', whiteSpace: 'nowrap', transition: 'color 0.2s',
            }}
          >
            <span style={{ color: C.textDim, marginRight: 6 }}>{s.num}</span>{s.label}
          </button>
        ))}
      </div>

      {/* Body */}
      <div style={{ padding: '40px 48px', maxWidth: 1100 }}>
        <AnimatePresence mode="wait">

          {/* THESIS */}
          {active === 'thesis' && (
            <motion.div key="thesis" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <SectionHeader num="01" title="Jealousy as Threat-Detection System" sub="Evolved, embodied, and neurochemically distinct from envy" />
              <div style={{ display: 'grid', gap: 16 }}>
                <InfoBox label="CORE ARGUMENT" text={JEALOUSY_THESIS.core} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <InfoBox label="EVOLUTIONARY LOGIC" text={JEALOUSY_THESIS.evolutionaryLogic} color={C.gold} />
                  <InfoBox label="JEALOUSY VS. ENVY — A NEURAL DISTINCTION" text={JEALOUSY_THESIS.distinction} color={C.purple} />
                </div>
              </div>
            </motion.div>
          )}

          {/* BRAIN REGIONS */}
          {active === 'regions' && (
            <motion.div key="regions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <SectionHeader num="02" title="Brain Regions" sub="The five-node jealousy circuit" />
              <div style={{ display: 'grid', gap: 12 }}>
                {BRAIN_REGIONS.map((r) => (
                  <div
                    key={r.region}
                    style={{ border: `1px solid ${expandedRegion === r.region ? r.color : C.border}`, background: C.panel, borderRadius: 4, cursor: 'pointer', transition: 'border-color 0.2s' }}
                    onClick={() => setExpandedRegion(expandedRegion === r.region ? null : r.region)}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px' }}>
                      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                        <div style={{ width: 10, height: 10, borderRadius: '50%', background: r.color, boxShadow: `0 0 8px ${r.color}` }} />
                        <div>
                          <div style={{ fontSize: 12, fontWeight: 700, color: r.color, letterSpacing: '0.12em' }}>{r.region}</div>
                          <div style={{ fontSize: 10, color: C.textDim, marginTop: 2 }}>{r.role}</div>
                        </div>
                      </div>
                      <div style={{ fontSize: 14, color: C.textDim }}>{expandedRegion === r.region ? '−' : '+'}</div>
                    </div>
                    {expandedRegion === r.region && (
                      <div style={{ padding: '0 20px 20px', borderTop: `1px solid ${C.border}` }}>
                        <p style={{ fontSize: 11, color: C.textMid, lineHeight: 1.85, marginTop: 16, marginBottom: 12 }}>{r.mechanism}</p>
                        <div style={{ background: '#080505', border: `1px solid ${C.accentDim}`, padding: '12px 16px', borderRadius: 4, marginBottom: 10 }}>
                          <div style={{ fontSize: 10, color: C.accent, letterSpacing: '0.2em', marginBottom: 6 }}>CLINICAL NOTE</div>
                          <p style={{ fontSize: 11, color: C.textMid, lineHeight: 1.75, margin: 0 }}>{r.clinicalNote}</p>
                        </div>
                        <div style={{ fontSize: 10, color: C.textDim }}>CITATION: {r.citation}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* NEUROCHEMISTRY */}
          {active === 'neuro' && (
            <motion.div key="neuro" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <SectionHeader num="03" title="Neurochemistry of Jealousy" sub="Cortisol · Testosterone · Oxytocin · Serotonin · Dopamine" />
              <div style={{ display: 'grid', gap: 12 }}>
                {NEUROCHEMISTRY.map((m) => (
                  <div
                    key={m.molecule}
                    style={{ border: `1px solid ${expandedMolecule === m.molecule ? m.color : C.border}`, background: C.panel, borderRadius: 4, cursor: 'pointer', transition: 'border-color 0.2s' }}
                    onClick={() => setExpandedMolecule(expandedMolecule === m.molecule ? null : m.molecule)}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px' }}>
                      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                        <div style={{ width: 10, height: 10, borderRadius: '50%', background: m.color, boxShadow: `0 0 8px ${m.color}` }} />
                        <div>
                          <div style={{ fontSize: 12, fontWeight: 700, color: m.color, letterSpacing: '0.12em' }}>{m.molecule}</div>
                          <div style={{ fontSize: 10, color: C.textDim, marginTop: 2 }}>{m.role}</div>
                        </div>
                      </div>
                      <div style={{ fontSize: 14, color: C.textDim }}>{expandedMolecule === m.molecule ? '−' : '+'}</div>
                    </div>
                    {expandedMolecule === m.molecule && (
                      <div style={{ padding: '0 20px 20px', borderTop: `1px solid ${C.border}` }}>
                        <p style={{ fontSize: 11, color: C.textMid, lineHeight: 1.85, marginTop: 16, marginBottom: 10 }}>{m.jealousyEffect}</p>
                        <div style={{ fontSize: 10, color: C.textDim }}>CITATION: {m.citation}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* PATHOLOGICAL */}
          {active === 'pathological' && (
            <motion.div key="pathological" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <SectionHeader num="04" title="Pathological Jealousy" sub="Othello Syndrome — when the appraisal filter breaks down" />
              <div style={{ display: 'grid', gap: 16 }}>
                <InfoBox label="OTHELLO SYNDROME — DEFINITION & EPIDEMIOLOGY" text={PATHOLOGICAL_JEALOUSY.othellosyndrome} color={C.accent} />
                <InfoBox label="NEURAL BASIS — PFC APPRAISAL COLLAPSE" text={PATHOLOGICAL_JEALOUSY.neuralBasis} color={C.gold} />
                <InfoBox label="VIOLENCE RISK — HOMICIDE PREDICTOR" text={PATHOLOGICAL_JEALOUSY.dangerRisk} color={C.accent} />
                <InfoBox label="TREATMENT APPROACHES" text={PATHOLOGICAL_JEALOUSY.treatment} color={C.teal} />
              </div>
            </motion.div>
          )}

          {/* BIBLIOGRAPHY */}
          {active === 'refs' && (
            <motion.div key="refs" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <SectionHeader num="05" title="Bibliography" sub="Primary sources & foundational studies" />
              <div style={{ display: 'grid', gap: 8 }}>
                {JEALOUSY_REFS.map((r, i) => (
                  <div key={i} style={{ border: `1px solid ${C.border}`, background: C.panel, padding: '14px 18px', borderRadius: 4 }}>
                    <div style={{ fontSize: 11, color: C.textMid }}>
                      <span style={{ color: C.teal }}>{r.authors}</span>
                      {' '}({r.year}).{' '}
                      <em style={{ color: '#e0e0e0' }}>{r.title}</em>.{' '}
                      <span style={{ color: C.textDim }}>{r.journal}.</span>
                    </div>
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
