'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  GWAS_GENES,
  DELETION_22Q,
  GABA_SYSTEM,
  GABA_GENES,
  GABA_CIRCUIT_TABLE,
  PERSECUTION_THESIS,
  SCHIZOAFFECTIVE,
  SCHIZ_REFS,
} from '@/lib/schizophreniaData'

const C = {
  bg: '#040408',
  panel: '#08080f',
  border: '#1a1a2e',
  accent: '#7c3aed',
  accentDim: '#4a1f8f',
  red: '#8A0303',
  gold: '#d4a017',
  teal: '#2a9d9d',
  text: '#c8c8d4',
  textMid: '#888899',
  textDim: '#444455',
}

const SECTIONS = [
  { id: 'thesis',          label: 'THESIS',           num: '01' },
  { id: 'gwas',            label: 'GWAS GENES',       num: '02' },
  { id: 'deletion',        label: '22Q11.2',          num: '03' },
  { id: 'gaba',            label: 'GABA SYSTEM',      num: '04' },
  { id: 'schizoaffective', label: 'SCHIZOAFFECTIVE',  num: '05' },
  { id: 'bibliography',    label: 'BIBLIOGRAPHY',     num: '06' },
]

function SectionHeader({ num, title, sub }: { num: string; title: string; sub: string }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{ fontSize: 10, color: C.textDim, letterSpacing: '0.25em', marginBottom: 6 }}>
        SECTION {num}
      </div>
      <h2 style={{ fontSize: 26, fontWeight: 700, color: '#e0e0e0', letterSpacing: '0.08em', margin: 0 }}>
        {title}
      </h2>
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

export default function SchizophreniaDashboard() {
  const [active, setActive] = useState('thesis')
  const [expandedGene, setExpandedGene] = useState<string | null>(null)
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null)

  return (
    <div style={{ background: C.bg, minHeight: '100vh', fontFamily: 'monospace', color: C.text }}>

      {/* Header */}
      <div style={{ borderBottom: `1px solid ${C.border}`, padding: '40px 48px 32px' }}>
        <div style={{ fontSize: 11, color: C.red, letterSpacing: '0.3em', marginBottom: 12, textTransform: 'uppercase' }}>
          Deep Research // Psychotic Spectrum Disorders
        </div>
        <h1 style={{ fontSize: 42, fontWeight: 700, color: '#e0e0e0', letterSpacing: '0.08em', margin: 0, lineHeight: 1 }}>
          SCHIZOPHRENIA
        </h1>
        <div style={{ fontSize: 14, color: C.accentDim, letterSpacing: '0.2em', marginTop: 8 }}>
          GWAS GENETICS · GABA SYSTEM · 22Q11.2 · ETHNIC PERSECUTION · SCHIZOAFFECTIVE
        </div>
        <div style={{ marginTop: 20, display: 'flex', gap: 32, fontSize: 11, color: C.textDim, letterSpacing: '0.15em', flexWrap: 'wrap' }}>
          <span>LIFETIME PREVALENCE: ~1%</span>
          <span style={{ color: C.border }}>|</span>
          <span>HERITABILITY: 60–80%</span>
          <span style={{ color: C.border }}>|</span>
          <span>MEAN ONSET: 18–25 (M) / 25–35 (F)</span>
          <span style={{ color: C.border }}>|</span>
          <span style={{ color: C.red }}>MIGRANT RISK MULTIPLIER: 2–5×</span>
        </div>
        <div style={{ marginTop: 16, border: `1px solid ${C.accentDim}`, borderRadius: 4, padding: '12px 18px', maxWidth: 780, background: '#0a060f' }}>
          <span style={{ fontSize: 10, color: C.accent, letterSpacing: '0.2em' }}>CENTRAL THESIS — </span>
          <span style={{ fontSize: 11, color: C.textMid, lineHeight: 1.7 }}>
            Schizophrenia is not a genetic sentence. It is a neurobiological vulnerability — shaped by genetics — that ethnic persecution, religious stigma, forced migration, and social defeat convert into disease. The genes set the floor. The social world pulls the trigger.
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

          {/* ── THESIS ── */}
          {active === 'thesis' && (
            <motion.div key="thesis" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <SectionHeader num="01" title="The Ethnic & Religious Thesis" sub="Why schizophrenia is more sociogenic than genetic determinism allows" />

              <div style={{ display: 'grid', gap: 16 }}>
                <InfoBox label="CORE ARGUMENT" text={PERSECUTION_THESIS.coreArgument} />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <InfoBox label="THE STRESS-GABA LOOP" text={PERSECUTION_THESIS.stressGABALoop} color={C.red} />
                  <InfoBox label="MIGRANT DATA" text={PERSECUTION_THESIS.migrantData} color={C.gold} />
                </div>

                <InfoBox label="THE RELIGIOUS DIMENSION" text={PERSECUTION_THESIS.religiousDimension} color={C.teal} />

                {/* Social Defeat box with highlight */}
                <div style={{ border: `1px solid ${C.accentDim}`, background: '#0a060f', borderRadius: 4, padding: 20 }}>
                  <div style={{ fontSize: 10, color: C.accent, letterSpacing: '0.25em', marginBottom: 10 }}>SOCIAL DEFEAT HYPOTHESIS — Selten &amp; Cantor-Graae (2005)</div>
                  <p style={{ fontSize: 11, color: C.textMid, lineHeight: 1.85, margin: 0 }}>{PERSECUTION_THESIS.socialDefeatHypothesis}</p>
                </div>

                <div style={{ border: `1px solid ${C.gold}`, background: '#0c0a02', borderRadius: 4, padding: 20 }}>
                  <div style={{ fontSize: 10, color: C.gold, letterSpacing: '0.25em', marginBottom: 10 }}>SYNTHESIS</div>
                  <p style={{ fontSize: 12, color: C.text, lineHeight: 1.9, margin: 0 }}>{PERSECUTION_THESIS.synthesisStatement}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* ── GWAS GENES ── */}
          {active === 'gwas' && (
            <motion.div key="gwas" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <SectionHeader num="02" title="GWAS Risk Genes" sub="Genome-wide significant loci from Bergen et al. (2012), Lee et al. (2012), and Ripke et al. (2011)" />

              <div style={{ fontSize: 11, color: C.textMid, lineHeight: 1.8, marginBottom: 24, maxWidth: 760 }}>
                Genome-wide association studies offer an unbiased scan of the entire genome, identifying disease-associated variants without prior hypothesis. These five loci represent the most replicated findings — each is a clue, not a cause, and each is modified by the social environment.
              </div>

              <div style={{ display: 'grid', gap: 16 }}>
                {GWAS_GENES.map((g) => (
                  <div
                    key={g.gene}
                    style={{
                      border: `1px solid ${expandedGene === g.gene ? g.color : C.border}`,
                      background: expandedGene === g.gene ? '#0c0c16' : C.panel,
                      borderRadius: 4,
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transition: 'border-color 0.2s',
                    }}
                    onClick={() => setExpandedGene(expandedGene === g.gene ? null : g.gene)}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 22px' }}>
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: g.color, flexShrink: 0 }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', gap: 12, alignItems: 'baseline', flexWrap: 'wrap' }}>
                          <span style={{ fontSize: 16, color: '#e0e0e0', letterSpacing: '0.1em', fontWeight: 700 }}>{g.gene}</span>
                          <span style={{ fontSize: 10, color: C.textDim, letterSpacing: '0.1em' }}>{g.fullName}</span>
                        </div>
                        <div style={{ fontSize: 11, color: C.textMid, marginTop: 4, lineHeight: 1.5 }}>{g.finding}</div>
                      </div>
                      <div style={{ fontSize: 16, color: g.color, flexShrink: 0 }}>{expandedGene === g.gene ? '−' : '+'}</div>
                    </div>

                    <AnimatePresence>
                      {expandedGene === g.gene && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                          <div style={{ borderTop: `1px solid ${C.border}`, padding: '18px 22px 22px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                            <div>
                              <div style={{ fontSize: 10, color: C.textDim, letterSpacing: '0.2em', marginBottom: 8 }}>MECHANISM</div>
                              <p style={{ fontSize: 11, color: C.textMid, lineHeight: 1.8, margin: 0 }}>{g.mechanism}</p>
                            </div>
                            <div>
                              <div style={{ fontSize: 10, color: C.teal, letterSpacing: '0.2em', marginBottom: 8 }}>ETHNIC / ENVIRONMENTAL NOTE</div>
                              <p style={{ fontSize: 11, color: C.text, lineHeight: 1.8, margin: 0 }}>{g.ethnicNote}</p>
                              <div style={{ fontSize: 10, color: C.textDim, marginTop: 10, fontStyle: 'italic' }}>{g.citation}</div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── 22Q11.2 ── */}
          {active === 'deletion' && (
            <motion.div key="deletion" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <SectionHeader num="03" title="22q11.2 Deletion Syndrome" sub="DiGeorge / VCFS — the largest known single genetic risk factor for schizophrenia" />

              <div style={{ border: `1px solid ${C.red}`, background: '#0f0404', borderRadius: 4, padding: '16px 20px', marginBottom: 24 }}>
                <div style={{ fontSize: 10, color: C.red, letterSpacing: '0.25em', marginBottom: 8 }}>RISK MAGNITUDE</div>
                <p style={{ fontSize: 13, color: C.text, lineHeight: 1.7, margin: 0 }}>{DELETION_22Q.overview}</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div style={{ border: `1px solid ${C.border}`, background: C.panel, borderRadius: 4, padding: 20 }}>
                  <div style={{ fontSize: 10, color: C.textDim, letterSpacing: '0.2em', marginBottom: 12 }}>CLINICAL FEATURES</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {DELETION_22Q.features.map((f, i) => (
                      <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: C.red, marginTop: 5, flexShrink: 0 }} />
                        <span style={{ fontSize: 11, color: C.textMid, lineHeight: 1.6 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ border: `1px solid ${C.border}`, background: C.panel, borderRadius: 4, padding: 20 }}>
                  <div style={{ fontSize: 10, color: C.gold, letterSpacing: '0.2em', marginBottom: 10 }}>PRODH CANDIDATE GENE</div>
                  <p style={{ fontSize: 11, color: C.textMid, lineHeight: 1.8, margin: 0 }}>{DELETION_22Q.prodhGene}</p>
                </div>
              </div>

              <InfoBox label="MOUSE MODELS — Df(16)A−/− and LgDel−/−" text={DELETION_22Q.mouseModels} color={C.teal} />

              <div style={{ marginTop: 16, border: `1px solid ${C.gold}`, background: '#0c0a02', borderRadius: 4, padding: 20 }}>
                <div style={{ fontSize: 10, color: C.gold, letterSpacing: '0.25em', marginBottom: 10 }}>CRITICAL OBSERVATION</div>
                <p style={{ fontSize: 12, color: C.text, lineHeight: 1.9, margin: 0 }}>{DELETION_22Q.thesis}</p>
                <div style={{ fontSize: 10, color: C.textDim, marginTop: 12, fontStyle: 'italic' }}>{DELETION_22Q.citation}</div>
              </div>
            </motion.div>
          )}

          {/* ── GABA SYSTEM ── */}
          {active === 'gaba' && (
            <motion.div key="gaba" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <SectionHeader num="04" title="The GABA System" sub="The missing link between genetics, stress, and psychosis" />

              <div style={{ display: 'grid', gap: 16, marginBottom: 32 }}>
                <InfoBox label="OVERVIEW — THE BRAKES ARE FAILING" text={GABA_SYSTEM.overview} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <InfoBox label="PV-INTERNEURONS & GAD67" text={GABA_SYSTEM.interneurons} color={C.red} />
                  <InfoBox label="GAMMA RHYTHM COLLAPSE" text={GABA_SYSTEM.gammaCollapse} color={C.gold} />
                </div>
              </div>

              {/* GABA Genes */}
              <div style={{ fontSize: 10, color: C.textDim, letterSpacing: '0.2em', marginBottom: 12 }}>GABA-RELATED RISK GENES</div>
              <div style={{ display: 'grid', gap: 10, marginBottom: 32 }}>
                {GABA_GENES.map((g) => (
                  <div key={g.gene} style={{ border: `1px solid ${C.border}`, background: C.panel, borderRadius: 4, padding: '14px 20px', display: 'grid', gridTemplateColumns: '160px 1fr', gap: 20, alignItems: 'start' }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: C.accent, letterSpacing: '0.05em', paddingTop: 2 }}>{g.gene}</div>
                    <p style={{ fontSize: 11, color: C.textMid, lineHeight: 1.7, margin: 0 }}>{g.description}</p>
                  </div>
                ))}
              </div>

              {/* Circuit Table */}
              <div style={{ fontSize: 10, color: C.textDim, letterSpacing: '0.2em', marginBottom: 12 }}>GABA CIRCUIT BREAKDOWN TABLE</div>
              <div style={{ border: `1px solid ${C.border}`, borderRadius: 4, overflow: 'hidden' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr 1fr', background: '#0c0c18', borderBottom: `1px solid ${C.border}`, padding: '10px 16px', gap: 16 }}>
                  <div style={{ fontSize: 10, color: C.textDim, letterSpacing: '0.2em' }}>COMPONENT</div>
                  <div style={{ fontSize: 10, color: C.teal, letterSpacing: '0.2em' }}>NORMAL FUNCTION</div>
                  <div style={{ fontSize: 10, color: C.red, letterSpacing: '0.2em' }}>IN SCHIZOPHRENIA</div>
                </div>
                {GABA_CIRCUIT_TABLE.map((row, i) => (
                  <div
                    key={row.component}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '180px 1fr 1fr',
                      padding: '14px 16px',
                      gap: 16,
                      borderBottom: i < GABA_CIRCUIT_TABLE.length - 1 ? `1px solid ${C.border}` : 'none',
                      background: i % 2 === 0 ? 'transparent' : '#06060d',
                    }}
                  >
                    <div style={{ fontSize: 11, color: '#e0e0e0', fontWeight: 600 }}>{row.component}</div>
                    <div style={{ fontSize: 11, color: C.textMid, lineHeight: 1.6 }}>{row.normal}</div>
                    <div style={{ fontSize: 11, color: C.text, lineHeight: 1.6 }}>{row.inSchizophrenia}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── SCHIZOAFFECTIVE ── */}
          {active === 'schizoaffective' && (
            <motion.div key="schizoaffective" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <SectionHeader num="05" title="Schizoaffective Disorder" sub="At the intersection of schizophrenia and mood disorders — a diagnostic and neurobiological overlap zone" />

              <InfoBox label="DEFINITION" text={SCHIZOAFFECTIVE.definition} />

              {/* Subtypes */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 16 }}>
                {SCHIZOAFFECTIVE.subtypes.map((s) => (
                  <div key={s.name} style={{ border: `1px solid ${s.color}`, background: C.panel, borderRadius: 4, padding: 20 }}>
                    <div style={{ fontSize: 10, color: s.color, letterSpacing: '0.2em', marginBottom: 10 }}>{s.name.toUpperCase()}</div>
                    <p style={{ fontSize: 11, color: C.textMid, lineHeight: 1.8, margin: 0 }}>{s.description}</p>
                  </div>
                ))}
              </div>

              <div style={{ display: 'grid', gap: 16, marginTop: 16 }}>
                <InfoBox label="DIAGNOSTIC CHALLENGE" text={SCHIZOAFFECTIVE.diagnosticChallenge} color={C.gold} />
                <InfoBox label="NEUROBIOLOGY — THE OVERLAP ZONE" text={SCHIZOAFFECTIVE.neurobiology} color={C.teal} />

                <div style={{ border: `1px solid ${C.accentDim}`, background: '#0a060f', borderRadius: 4, padding: 20 }}>
                  <div style={{ fontSize: 10, color: C.accent, letterSpacing: '0.25em', marginBottom: 10 }}>ETHNIC & RELIGIOUS DIMENSION</div>
                  <p style={{ fontSize: 11, color: C.textMid, lineHeight: 1.85, margin: 0 }}>{SCHIZOAFFECTIVE.ethnicReligiousDimension}</p>
                </div>

                <InfoBox label="TREATMENT LANDSCAPE" text={SCHIZOAFFECTIVE.treatmentLandscape} color={C.textMid} />

                {/* Open Questions */}
                <div style={{ border: `1px solid ${C.border}`, background: C.panel, borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{ padding: '14px 20px', borderBottom: `1px solid ${C.border}` }}>
                    <div style={{ fontSize: 10, color: C.textDim, letterSpacing: '0.2em' }}>OPEN QUESTIONS IN THE FIELD</div>
                  </div>
                  {SCHIZOAFFECTIVE.openQuestions.map((q, i) => (
                    <div
                      key={i}
                      style={{ borderBottom: i < SCHIZOAFFECTIVE.openQuestions.length - 1 ? `1px solid ${C.border}` : 'none', cursor: 'pointer' }}
                      onClick={() => setExpandedQuestion(expandedQuestion === i ? null : i)}
                    >
                      <div style={{ padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                          <span style={{ fontSize: 10, color: C.accentDim, fontWeight: 700, flexShrink: 0, paddingTop: 1 }}>Q{i + 1}</span>
                          <span style={{ fontSize: 11, color: expandedQuestion === i ? C.text : C.textMid, lineHeight: 1.6 }}>{q}</span>
                        </div>
                        <span style={{ fontSize: 14, color: C.accent, flexShrink: 0 }}>{expandedQuestion === i ? '−' : '+'}</span>
                      </div>
                      <AnimatePresence>
                        {expandedQuestion === i && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.18 }}>
                            <div style={{ padding: '0 20px 16px 44px' }}>
                              <div style={{ fontSize: 10, color: C.textDim, lineHeight: 1.6, fontStyle: 'italic' }}>
                                This is an active research frontier. No consensus answer exists. The question is listed here as a direction for further investigation.
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ── BIBLIOGRAPHY ── */}
          {active === 'bibliography' && (
            <motion.div key="bibliography" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <SectionHeader num="06" title="Bibliography" sub="Source material — Neurobiology of Mental Health Disorders and peer-reviewed literature" />
              <div style={{ display: 'grid', gap: 8 }}>
                {SCHIZ_REFS.map((r, i) => (
                  <div key={i} style={{ border: `1px solid ${C.border}`, background: C.panel, borderRadius: 4, padding: '14px 20px', display: 'grid', gridTemplateColumns: '28px 1fr', gap: 16, alignItems: 'start' }}>
                    <div style={{ fontSize: 12, color: C.accentDim, fontWeight: 700 }}>{String(i + 1).padStart(2, '0')}</div>
                    <div>
                      <span style={{ fontSize: 11, color: '#e0e0e0' }}>{r.authors} ({r.year}). </span>
                      <span style={{ fontSize: 11, color: C.textMid, fontStyle: 'italic' }}>{r.title}. </span>
                      <span style={{ fontSize: 11, color: C.accentDim }}>{r.journal}.</span>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 24, border: `1px solid ${C.border}`, background: C.panel, borderRadius: 4, padding: 20 }}>
                <div style={{ fontSize: 10, color: C.textDim, letterSpacing: '0.2em', marginBottom: 8 }}>PRIMARY SOURCE</div>
                <p style={{ fontSize: 11, color: C.textMid, lineHeight: 1.7, margin: 0 }}>
                  <span style={{ color: C.text }}>Neurobiology of Mental Health Disorders</span> — foundational text for the genetic sections of this analysis, including GWAS data, 22q11.2 deletion models, and the MHC locus discussion.
                </p>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  )
}
