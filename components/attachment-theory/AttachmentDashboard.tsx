'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ATTACHMENT_THESIS,
  ATTACHMENT_STYLES,
  NEURAL_CORRELATES,
  EPIGENETIC_MECHANISMS,
  ADULT_ATTACHMENT_NEUROSCIENCE,
  ATTACHMENT_REFS,
} from '@/lib/attachmentData'

const C = {
  bg: '#040408',
  panel: '#08080f',
  border: '#1a1a2e',
  accent: '#2a9d9d',
  accentDim: '#1a5f5f',
  text: '#c8c8d4',
  textMid: '#888899',
  textDim: '#444455',
  gold: '#d4a017',
  red: '#8A0303',
  purple: '#7c3aed',
}

const SECTIONS = [
  { id: 'thesis',    label: 'THESIS',          num: '01' },
  { id: 'styles',   label: 'ATTACH. STYLES',   num: '02' },
  { id: 'neural',   label: 'NEURAL CIRCUITS',  num: '03' },
  { id: 'epigenetics', label: 'EPIGENETICS',   num: '04' },
  { id: 'adult',    label: 'ADULT ATTACH.',    num: '05' },
  { id: 'refs',     label: 'BIBLIOGRAPHY',     num: '06' },
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

export default function AttachmentDashboard() {
  const [active, setActive] = useState('thesis')
  const [expandedStyle, setExpandedStyle] = useState<string | null>(null)
  const [expandedGene, setExpandedGene] = useState<string | null>(null)

  return (
    <div style={{ background: C.bg, minHeight: '100vh', fontFamily: 'monospace', color: C.text }}>

      {/* Header */}
      <div style={{ borderBottom: `1px solid ${C.border}`, padding: '40px 48px 32px' }}>
        <div style={{ fontSize: 11, color: C.accent, letterSpacing: '0.3em', marginBottom: 12 }}>
          DEEP RESEARCH // SOCIAL NEUROSCIENCE
        </div>
        <h1 style={{ fontSize: 42, fontWeight: 700, color: '#e0e0e0', letterSpacing: '0.08em', margin: 0, lineHeight: 1 }}>
          ATTACHMENT THEORY
        </h1>
        <div style={{ fontSize: 14, color: C.accentDim, letterSpacing: '0.2em', marginTop: 8 }}>
          BOWLBY · AINSWORTH · NEURAL CORRELATES · EPIGENETICS · ADULT ROMANTIC ATTACHMENT
        </div>
        <div style={{ marginTop: 20, display: 'flex', gap: 32, fontSize: 11, color: C.textDim, letterSpacing: '0.15em', flexWrap: 'wrap' }}>
          <span>SECURE: ~60% ADULTS</span>
          <span style={{ color: C.border }}>|</span>
          <span>ANXIOUS: ~15–20%</span>
          <span style={{ color: C.border }}>|</span>
          <span>AVOIDANT: ~20–25%</span>
          <span style={{ color: C.border }}>|</span>
          <span style={{ color: C.red }}>DISORGANIZED: ~10–15%</span>
        </div>
        <div style={{ marginTop: 16, border: `1px solid ${C.accentDim}`, borderRadius: 4, padding: '12px 18px', maxWidth: 780, background: '#050810' }}>
          <span style={{ fontSize: 10, color: C.accent, letterSpacing: '0.2em' }}>CENTRAL THESIS — </span>
          <span style={{ fontSize: 11, color: C.textMid, lineHeight: 1.7 }}>
            Attachment style is not a personality quirk — it is a calibrated neural program shaped by early caregiver experience and maintained by overlapping circuits in the amygdala, PFC, and oxytocin system. It predicts health, relationships, and psychopathology across the lifespan.
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
              <SectionHeader num="01" title="Bowlby's Control Systems Theory" sub="Attachment as a biologically conserved survival program" />
              <div style={{ display: 'grid', gap: 16 }}>
                <InfoBox label="CORE ARGUMENT" text={ATTACHMENT_THESIS.core} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <InfoBox label="BOWLBY'S FRAMEWORK" text={ATTACHMENT_THESIS.bowlbyFrame} color={C.gold} />
                  <InfoBox label="AINSWORTH'S EXTENSION" text={ATTACHMENT_THESIS.ainssworthExtension} color={C.purple} />
                </div>
              </div>
            </motion.div>
          )}

          {/* STYLES */}
          {active === 'styles' && (
            <motion.div key="styles" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <SectionHeader num="02" title="The Four Attachment Styles" sub="Neural calibration patterns set in early development" />
              <div style={{ display: 'grid', gap: 12 }}>
                {ATTACHMENT_STYLES.map((s) => (
                  <div
                    key={s.id}
                    style={{ border: `1px solid ${expandedStyle === s.id ? s.color : C.border}`, background: C.panel, borderRadius: 4, overflow: 'hidden', transition: 'border-color 0.2s', cursor: 'pointer' }}
                    onClick={() => setExpandedStyle(expandedStyle === s.id ? null : s.id)}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px' }}>
                      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                        <div style={{ width: 10, height: 10, borderRadius: '50%', background: s.color, boxShadow: `0 0 8px ${s.color}` }} />
                        <div>
                          <div style={{ fontSize: 12, fontWeight: 700, color: s.color, letterSpacing: '0.15em' }}>{s.label}</div>
                          <div style={{ fontSize: 10, color: C.textDim, marginTop: 2 }}>{s.prevalence}</div>
                        </div>
                      </div>
                      <div style={{ fontSize: 14, color: C.textDim }}>{expandedStyle === s.id ? '−' : '+'}</div>
                    </div>
                    {expandedStyle === s.id && (
                      <div style={{ padding: '0 20px 20px', display: 'grid', gap: 12 }}>
                        <div style={{ fontSize: 11, color: C.textMid, lineHeight: 1.85, borderTop: `1px solid ${C.border}`, paddingTop: 16 }}>
                          <span style={{ color: s.color, letterSpacing: '0.15em', fontSize: 10 }}>DEVELOPMENTAL ORIGIN — </span>{s.core}
                        </div>
                        <div style={{ fontSize: 11, color: C.textMid, lineHeight: 1.85 }}>
                          <span style={{ color: C.accent, letterSpacing: '0.15em', fontSize: 10 }}>NEURAL PROFILE — </span>{s.neuralProfile}
                        </div>
                        <div style={{ fontSize: 11, color: C.textMid, lineHeight: 1.85 }}>
                          <span style={{ color: C.gold, letterSpacing: '0.15em', fontSize: 10 }}>ADULT BEHAVIOR — </span>{s.adultBehavior}
                        </div>
                        <div style={{ fontSize: 11, color: C.textMid, lineHeight: 1.85 }}>
                          <span style={{ color: C.red, letterSpacing: '0.15em', fontSize: 10 }}>PSYCHOPATHOLOGY RISK — </span>{s.psychopathologyRisk}
                        </div>
                        <div style={{ fontSize: 10, color: C.textDim, borderTop: `1px solid ${C.border}`, paddingTop: 10, marginTop: 4 }}>
                          CITATION: {s.citation}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* NEURAL CIRCUITS */}
          {active === 'neural' && (
            <motion.div key="neural" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <SectionHeader num="03" title="Neural Architecture of Attachment" sub="Amygdala · PFC · Hypothalamus · Insula" />
              <div style={{ display: 'grid', gap: 16 }}>
                <InfoBox label="AMYGDALA — THREAT DETECTION & ALARM" text={NEURAL_CORRELATES.amygdala} color={C.red} />
                <InfoBox label="PREFRONTAL CORTEX — TOP-DOWN REGULATION" text={NEURAL_CORRELATES.prefrontalCortex} color={C.purple} />
                <InfoBox label="HYPOTHALAMUS & OXYTOCIN SYSTEM" text={NEURAL_CORRELATES.hypothalamusOxytocinSystem} color={C.accent} />
                <InfoBox label="ANTERIOR INSULA — INTEROCEPTION & SOCIAL PAIN" text={NEURAL_CORRELATES.insula} color={C.gold} />
              </div>
            </motion.div>
          )}

          {/* EPIGENETICS */}
          {active === 'epigenetics' && (
            <motion.div key="epigenetics" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <SectionHeader num="04" title="Epigenetic Mechanisms" sub="How early experience rewrites gene expression across the lifespan" />
              <div style={{ display: 'grid', gap: 12 }}>
                {EPIGENETIC_MECHANISMS.map((g) => (
                  <div
                    key={g.gene}
                    style={{ border: `1px solid ${expandedGene === g.gene ? g.color : C.border}`, background: C.panel, borderRadius: 4, cursor: 'pointer', transition: 'border-color 0.2s' }}
                    onClick={() => setExpandedGene(expandedGene === g.gene ? null : g.gene)}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px' }}>
                      <div>
                        <span style={{ fontSize: 13, fontWeight: 700, color: g.color, letterSpacing: '0.12em' }}>{g.gene}</span>
                        <span style={{ fontSize: 11, color: C.textDim, marginLeft: 12 }}>{g.name}</span>
                      </div>
                      <div style={{ fontSize: 14, color: C.textDim }}>{expandedGene === g.gene ? '−' : '+'}</div>
                    </div>
                    {expandedGene === g.gene && (
                      <div style={{ padding: '0 20px 20px', borderTop: `1px solid ${C.border}` }}>
                        <p style={{ fontSize: 11, color: C.textMid, lineHeight: 1.85, marginTop: 16, marginBottom: 12 }}>{g.mechanism}</p>
                        <div style={{ background: '#050508', border: `1px solid ${C.border}`, padding: '12px 16px', borderRadius: 4 }}>
                          <div style={{ fontSize: 10, color: g.color, letterSpacing: '0.2em', marginBottom: 6 }}>HUMAN EVIDENCE</div>
                          <p style={{ fontSize: 11, color: C.textMid, lineHeight: 1.75, margin: 0 }}>{g.humanEvidence}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ADULT ATTACHMENT */}
          {active === 'adult' && (
            <motion.div key="adult" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <SectionHeader num="05" title="Adult Attachment Neuroscience" sub="Romantic bonding, separation distress & internal working models" />
              <div style={{ display: 'grid', gap: 16 }}>
                <InfoBox label="ROMANTIC BONDING CIRCUITRY" text={ADULT_ATTACHMENT_NEUROSCIENCE.romanticBonding} color={C.accent} />
                <InfoBox label="SEPARATION DISTRESS — SOCIAL PAIN = PHYSICAL PAIN" text={ADULT_ATTACHMENT_NEUROSCIENCE.separationDistress} color={C.red} />
                <InfoBox label="INTERNAL WORKING MODELS & DEFAULT MODE NETWORK" text={ADULT_ATTACHMENT_NEUROSCIENCE.internalWorkingModels} color={C.purple} />
              </div>
            </motion.div>
          )}

          {/* BIBLIOGRAPHY */}
          {active === 'refs' && (
            <motion.div key="refs" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <SectionHeader num="06" title="Bibliography" sub="Primary sources & foundational studies" />
              <div style={{ display: 'grid', gap: 8 }}>
                {ATTACHMENT_REFS.map((r, i) => (
                  <div key={i} style={{ border: `1px solid ${C.border}`, background: C.panel, padding: '14px 18px', borderRadius: 4 }}>
                    <div style={{ fontSize: 11, color: C.textMid }}>
                      <span style={{ color: C.accent }}>{r.authors}</span>
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
