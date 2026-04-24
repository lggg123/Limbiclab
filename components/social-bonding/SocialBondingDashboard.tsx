'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BONDING_THESIS,
  OXYTOCIN_VASOPRESSIN,
  REWARD_CIRCUITS,
  LONELINESS_NEUROSCIENCE,
  PAIR_BONDING_VS_PROMISCUITY,
  BONDING_REFS,
} from '@/lib/socialBondingData'

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
  { id: 'thesis',    label: 'THESIS',            num: '01' },
  { id: 'molecules', label: 'OXT & VASOPRESSIN', num: '02' },
  { id: 'circuits',  label: 'REWARD CIRCUITS',   num: '03' },
  { id: 'loneliness', label: 'LONELINESS',       num: '04' },
  { id: 'pairing',   label: 'PAIR BONDING',      num: '05' },
  { id: 'refs',      label: 'BIBLIOGRAPHY',      num: '06' },
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

export default function SocialBondingDashboard() {
  const [active, setActive] = useState('thesis')
  const [expandedCircuit, setExpandedCircuit] = useState<string | null>(null)

  const oxt = OXYTOCIN_VASOPRESSIN.oxytocinSystem
  const vsp = OXYTOCIN_VASOPRESSIN.vasopressinSystem

  return (
    <div style={{ background: C.bg, minHeight: '100vh', fontFamily: 'monospace', color: C.text }}>

      {/* Header */}
      <div style={{ borderBottom: `1px solid ${C.border}`, padding: '40px 48px 32px' }}>
        <div style={{ fontSize: 11, color: C.accent, letterSpacing: '0.3em', marginBottom: 12 }}>
          DEEP RESEARCH // SOCIAL NEUROSCIENCE
        </div>
        <h1 style={{ fontSize: 42, fontWeight: 700, color: '#e0e0e0', letterSpacing: '0.08em', margin: 0, lineHeight: 1 }}>
          SOCIAL BONDING CIRCUITS
        </h1>
        <div style={{ fontSize: 14, color: C.accentDim, letterSpacing: '0.2em', marginTop: 8 }}>
          OXYTOCIN · VASOPRESSIN · MESOLIMBIC REWARD · PRAIRIE VOLE MODEL · LONELINESS BIOLOGY
        </div>
        <div style={{ marginTop: 20, display: 'flex', gap: 32, fontSize: 11, color: C.textDim, letterSpacing: '0.15em', flexWrap: 'wrap' }}>
          <span>PAIR-BONDING MAMMALS: ~5%</span>
          <span style={{ color: C.border }}>|</span>
          <span>LONELINESS MORTALITY RISK: = 15 CIGARETTES/DAY</span>
          <span style={{ color: C.border }}>|</span>
          <span style={{ color: C.accent }}>KEY MOLECULES: OXYTOCIN + DOPAMINE CO-ACTIVATION</span>
        </div>
        <div style={{ marginTop: 16, border: `1px solid ${C.accentDim}`, borderRadius: 4, padding: '12px 18px', maxWidth: 780, background: '#050810' }}>
          <span style={{ fontSize: 10, color: C.accent, letterSpacing: '0.2em' }}>CENTRAL THESIS — </span>
          <span style={{ fontSize: 11, color: C.textMid, lineHeight: 1.7 }}>
            Social bonding is not an emotion — it is a conserved mammalian neural program. Oxytocin and vasopressin, acting on reward circuits in the nucleus accumbens and ventral pallidum, create partner-specific reward: the conditions for selective, persistent attachment.
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
              <SectionHeader num="01" title="The Bonding Program" sub="A conserved mammalian circuit, not a uniquely human emotion" />
              <div style={{ display: 'grid', gap: 16 }}>
                <InfoBox label="CORE ARGUMENT" text={BONDING_THESIS.core} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <InfoBox label="THE PRAIRIE VOLE DISCOVERY" text={BONDING_THESIS.prairiVoleDiscovery} color={C.gold} />
                  <InfoBox label="HUMAN NEUROIMAGING EVIDENCE" text={BONDING_THESIS.humanEvidence} color={C.accent} />
                </div>
              </div>
            </motion.div>
          )}

          {/* MOLECULES */}
          {active === 'molecules' && (
            <motion.div key="molecules" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <SectionHeader num="02" title="Oxytocin & Vasopressin" sub="The molecular architecture of social bonding" />
              <div style={{ display: 'grid', gap: 20 }}>

                {/* Oxytocin */}
                <div style={{ border: `1px solid ${C.border}`, background: C.panel, borderRadius: 4, padding: 20 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: C.accent, letterSpacing: '0.18em', marginBottom: 4 }}>OXYTOCIN SYSTEM</div>
                  <div style={{ fontSize: 10, color: C.textDim, marginBottom: 16 }}>SOURCE: {oxt.source}</div>
                  <div style={{ fontSize: 10, color: C.gold, letterSpacing: '0.18em', marginBottom: 8 }}>RELEASE TRIGGERS</div>
                  <p style={{ fontSize: 11, color: C.textMid, lineHeight: 1.75, marginBottom: 16 }}>{oxt.release}</p>
                  <div style={{ fontSize: 10, color: C.accent, letterSpacing: '0.18em', marginBottom: 10 }}>CENTRAL EFFECTS</div>
                  <div style={{ display: 'grid', gap: 6 }}>
                    {oxt.centralEffects.map((e, i) => (
                      <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <span style={{ color: C.accent, marginTop: 1, flexShrink: 0 }}>◈</span>
                        <span style={{ fontSize: 11, color: C.textMid, lineHeight: 1.6 }}>{e}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 16, background: '#050810', border: `1px solid ${C.accentDim}`, padding: '12px 16px', borderRadius: 4 }}>
                    <div style={{ fontSize: 10, color: C.red, letterSpacing: '0.18em', marginBottom: 6 }}>THE OXYTOCIN PARADOX</div>
                    <p style={{ fontSize: 11, color: C.textMid, lineHeight: 1.75, margin: 0 }}>{oxt.paradox}</p>
                  </div>
                  <div style={{ marginTop: 14, fontSize: 10, color: C.textDim, lineHeight: 1.6 }}>{oxt.receptorDistribution}</div>
                </div>

                {/* Vasopressin */}
                <div style={{ border: `1px solid ${C.border}`, background: C.panel, borderRadius: 4, padding: 20 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: C.gold, letterSpacing: '0.18em', marginBottom: 4 }}>VASOPRESSIN SYSTEM</div>
                  <div style={{ fontSize: 10, color: C.textDim, marginBottom: 16 }}>SOURCE: {vsp.source}</div>
                  <div style={{ fontSize: 10, color: C.gold, letterSpacing: '0.18em', marginBottom: 8 }}>RELEASE CONTEXTS</div>
                  <p style={{ fontSize: 11, color: C.textMid, lineHeight: 1.75, marginBottom: 16 }}>{vsp.release}</p>
                  <div style={{ fontSize: 10, color: C.accent, letterSpacing: '0.18em', marginBottom: 10 }}>CENTRAL EFFECTS</div>
                  <div style={{ display: 'grid', gap: 6, marginBottom: 16 }}>
                    {vsp.centralEffects.map((e, i) => (
                      <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <span style={{ color: C.gold, marginTop: 1, flexShrink: 0 }}>◉</span>
                        <span style={{ fontSize: 11, color: C.textMid, lineHeight: 1.6 }}>{e}</span>
                      </div>
                    ))}
                  </div>
                  <InfoBox label="SEX DIFFERENCE IN VASOPRESSIN FUNCTION" text={vsp.sexDifference} color={C.gold} />
                  <div style={{ marginTop: 12, fontSize: 10, color: C.textDim, lineHeight: 1.6 }}>{vsp.avpr1a}</div>
                </div>
              </div>
            </motion.div>
          )}

          {/* REWARD CIRCUITS */}
          {active === 'circuits' && (
            <motion.div key="circuits" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <SectionHeader num="03" title="Reward Circuits in Social Bonding" sub="VTA · Nucleus Accumbens · Ventral Pallidum · ACC · Amygdala" />
              <div style={{ display: 'grid', gap: 12 }}>
                {REWARD_CIRCUITS.map((r) => (
                  <div
                    key={r.region}
                    style={{ border: `1px solid ${expandedCircuit === r.region ? r.color : C.border}`, background: C.panel, borderRadius: 4, cursor: 'pointer', transition: 'border-color 0.2s' }}
                    onClick={() => setExpandedCircuit(expandedCircuit === r.region ? null : r.region)}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px' }}>
                      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                        <div style={{ width: 10, height: 10, borderRadius: '50%', background: r.color, boxShadow: `0 0 8px ${r.color}` }} />
                        <div>
                          <div style={{ fontSize: 12, fontWeight: 700, color: r.color, letterSpacing: '0.12em' }}>{r.region}</div>
                          <div style={{ fontSize: 10, color: C.textDim, marginTop: 2 }}>{r.role}</div>
                        </div>
                      </div>
                      <div style={{ fontSize: 14, color: C.textDim }}>{expandedCircuit === r.region ? '−' : '+'}</div>
                    </div>
                    {expandedCircuit === r.region && (
                      <div style={{ padding: '0 20px 20px', borderTop: `1px solid ${C.border}` }}>
                        <p style={{ fontSize: 11, color: C.textMid, lineHeight: 1.85, marginTop: 16, marginBottom: 10 }}>{r.bondingFunction}</p>
                        <div style={{ fontSize: 10, color: C.textDim }}>CITATION: {r.citation}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* LONELINESS */}
          {active === 'loneliness' && (
            <motion.div key="loneliness" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <SectionHeader num="04" title="Loneliness Neuroscience" sub="The biology of social deprivation — threat mode, inflammation, and mortality" />
              <div style={{ display: 'grid', gap: 16 }}>
                <InfoBox label="DEFINITION — LONELINESS ≠ ISOLATION" text={LONELINESS_NEUROSCIENCE.definitionDistinction} color={C.accent} />
                <InfoBox label="NEURAL SIGNATURE — THREAT-MODE SOCIAL PROCESSING" text={LONELINESS_NEUROSCIENCE.neuralSignature} color={C.gold} />
                <InfoBox label="BIOLOGICAL CONSEQUENCES — INFLAMMATION, HPA, AGING" text={LONELINESS_NEUROSCIENCE.biologicalConsequences} color={C.red} />
                <InfoBox label="SOCIAL PAIN = PHYSICAL PAIN — ACETAMINOPHEN EVIDENCE" text={LONELINESS_NEUROSCIENCE.socialPainCircuit} color={C.purple} />
                <InfoBox label="TREATMENT — APPRAISAL OVER EXPOSURE" text={LONELINESS_NEUROSCIENCE.rehabilitation} color={C.accent} />
              </div>
            </motion.div>
          )}

          {/* PAIR BONDING */}
          {active === 'pairing' && (
            <motion.div key="pairing" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <SectionHeader num="05" title="Pair Bonding vs. Promiscuity" sub="Receptor architecture, genetic variation & neuroplasticity" />
              <div style={{ display: 'grid', gap: 16 }}>
                <InfoBox label="GENETIC BASIS — RECEPTOR FIELD ARCHITECTURE" text={PAIR_BONDING_VS_PROMISCUITY.geneticBasis} color={C.accent} />
                <InfoBox label="HUMAN VARIATION — POLYMORPHIC MATING STRATEGY" text={PAIR_BONDING_VS_PROMISCUITY.humanVariation} color={C.gold} />
                <InfoBox label="NEUROPLASTICITY — EXPERIENCE-DEPENDENT BONDING CIRCUIT" text={PAIR_BONDING_VS_PROMISCUITY.neuroplasticity} color={C.purple} />
              </div>
            </motion.div>
          )}

          {/* BIBLIOGRAPHY */}
          {active === 'refs' && (
            <motion.div key="refs" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <SectionHeader num="06" title="Bibliography" sub="Primary sources & foundational studies" />
              <div style={{ display: 'grid', gap: 8 }}>
                {BONDING_REFS.map((r, i) => (
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
