'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import NeroSection from './NeroSection'
import {
  PETER_CASE,
  PETER_VERSE,
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
  RITUALS,
  RITUAL_DANGER_NOTE,
  SYMBOLS,
  type RitualEntry,
  type SymbolEntry,
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
  { id: 'peter-case',   label: '00a Peter — The Case'  },
  { id: 'peter-verse',  label: '00b Primary Source'    },
  { id: 'peter-media',  label: '00c Visual Record'     },
  { id: 'nero-666',     label: '00d Nero & 666'        },
  { id: 'taxonomy',     label: '01 Taxonomy'           },
  { id: 'neuroscience', label: '02 Ritual Neuro'        },
  { id: 'receptors',   label: '03 Neuroreceptors'      },
  { id: 'disorders',   label: '04 Disorders'           },
  { id: 'metaphysical',label: '05 Soul / Metaphysical' },
  { id: 'genes',       label: '06 Epigenetics'         },
  { id: 'recovery',    label: '07 Recovery'            },
  { id: 'rituals',     label: '08 Rituals'             },
  { id: 'symbolism',    label: '09 Symbolism'           },
  { id: 'bibliography', label: '10 Bibliography'        },
]

const DANGER_COLORS: Record<string, string> = {
  extreme: '#8A0303',
  high:    '#a84b00',
  moderate:'#b8860b',
  low:     '#2a9d9d',
}

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

// ── Section 00a: Peter Case ───────────────────────────────────────────────────

function PeterCaseSection() {
  const [openActor, setOpenActor] = useState<string | null>(null)
  const c = PETER_CASE

  return (
    <div id="peter-case">
      <div style={{ fontFamily: 'monospace', fontSize: 11, color: C.crimson, letterSpacing: '0.22em', marginBottom: 6 }}>
        {`SECTION 00a //`}
      </div>
      <h2 style={{ fontFamily: 'monospace', fontSize: 22, fontWeight: 700, color: C.text, letterSpacing: '0.08em', marginBottom: 6 }}>
        {c.title}
      </h2>
      <p style={{ fontFamily: 'monospace', fontSize: 13, color: C.crimson, letterSpacing: '0.1em', fontStyle: 'italic', marginBottom: 10 }}>
        {c.subtitle}
      </p>

      {/* Disclaimer */}
      <div style={{ background: C.surface2, borderLeft: `3px solid ${C.gold}`, padding: '10px 14px', marginBottom: 28 }}>
        <div style={{ fontFamily: 'monospace', fontSize: 9, color: C.goldLight, letterSpacing: '0.2em', marginBottom: 4 }}>⚠ SOURCE NOTE</div>
        <p style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim, lineHeight: 1.8, margin: 0 }}>{c.disclaimer}</p>
      </div>

      {/* Actors */}
      <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.crimson, letterSpacing: '0.2em', marginBottom: 10 }}>◈ THE ACTORS</div>
      <div style={{ display: 'grid', gap: 8, marginBottom: 28 }}>
        {c.actors.map((actor) => (
          <div key={actor.name}>
            <button
              onClick={() => setOpenActor(openActor === actor.name ? null : actor.name)}
              style={{
                width: '100%', textAlign: 'left', background: C.surface,
                border: `1px solid ${openActor === actor.name ? C.crimson : C.border}`,
                padding: '12px 16px', cursor: 'pointer',
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12,
              }}
            >
              <div>
                <div style={{ fontFamily: 'monospace', fontSize: 12, fontWeight: 700, color: C.text, marginBottom: 3 }}>{actor.name}</div>
                <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.crimson }}>{actor.role}</div>
              </div>
              <span style={{ fontFamily: 'monospace', fontSize: 14, color: C.crimson, flexShrink: 0 }}>
                {openActor === actor.name ? '−' : '+'}
              </span>
            </button>
            <AnimatePresence>
              {openActor === actor.name && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.18 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ background: C.surface2, borderLeft: `2px solid ${C.borderAccent}`, padding: '12px 16px' }}>
                    <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.85, margin: 0 }}>{actor.note}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* The Women */}
      <div style={{ background: C.surface, border: `1px solid ${C.borderAccent}`, padding: '20px 22px', marginBottom: 16 }}>
        <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.crimson, letterSpacing: '0.2em', marginBottom: 8 }}>◈ {c.theWomen.heading}</div>
        <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.9, marginBottom: 14 }}>{c.theWomen.body}</p>
        <div style={{ borderLeft: `2px solid ${C.gold}`, paddingLeft: 12 }}>
          <div style={{ fontFamily: 'monospace', fontSize: 9, color: C.goldLight, letterSpacing: '0.18em', marginBottom: 5 }}>LEGAL NOTE</div>
          <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textDim, lineHeight: 1.85, margin: 0 }}>{c.theWomen.legalNote}</p>
        </div>
      </div>

      {/* Political Context */}
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, padding: '20px 22px', marginBottom: 16 }}>
        <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.crimson, letterSpacing: '0.2em', marginBottom: 14 }}>◈ {c.thePoliticalContext.heading}</div>
        <div style={{ display: 'grid', gap: 14 }}>
          {[
            { label: 'AUGUSTUS — THE FIRST CITIZEN',         body: c.thePoliticalContext.augustusNote  },
            { label: 'JULIUS CAESAR — THE FIRST MISTAKE',    body: c.thePoliticalContext.julianNote    },
            { label: 'NERO AND THE NERONIAN FRACTURE',       body: c.thePoliticalContext.neroninanNote },
            { label: 'WHERE PETER STOOD IN ALL OF THIS',     body: c.thePoliticalContext.peterNote     },
          ].map((item) => (
            <div key={item.label} style={{ borderLeft: `2px solid ${C.border}`, paddingLeft: 12 }}>
              <div style={{ fontFamily: 'monospace', fontSize: 9, color: C.textDim, letterSpacing: '0.18em', marginBottom: 5 }}>{item.label}</div>
              <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.85, margin: 0 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* The Execution */}
      <div style={{ background: C.surface, border: `1px solid ${C.borderAccent}`, padding: '20px 22px', marginBottom: 16 }}>
        <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.crimson, letterSpacing: '0.2em', marginBottom: 10 }}>◈ {c.theExecution.heading}</div>
        <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.9, marginBottom: 16 }}>{c.theExecution.body}</p>
        <div style={{ fontFamily: 'monospace', fontSize: 9, color: C.goldLight, letterSpacing: '0.18em', marginBottom: 10 }}>HISTORICAL IRONIES</div>
        <div style={{ display: 'grid', gap: 8 }}>
          {c.theExecution.ironies.map((irony, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'monospace', fontSize: 10, color: C.crimson, flexShrink: 0, paddingTop: 1 }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.8, margin: 0 }}>{irony}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sources */}
      <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 12 }}>
        <div style={{ fontFamily: 'monospace', fontSize: 9, color: C.textDim, letterSpacing: '0.18em', marginBottom: 8 }}>SOURCES</div>
        <div style={{ display: 'grid', gap: 5 }}>
          {c.sources.map((s, i) => (
            <div key={i} style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim, borderLeft: `1px solid ${C.border}`, paddingLeft: 10 }}>{s}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Section 00: Peter Verse ───────────────────────────────────────────────────

function PeterVerseSection() {
  const [showBreakdown, setShowBreakdown] = useState(false)
  const v = PETER_VERSE

  return (
    <div id="peter-verse">
      {/* Header label */}
      <div style={{ fontFamily: 'monospace', fontSize: 11, color: C.crimson, letterSpacing: '0.22em', marginBottom: 6 }}>
        {`SECTION 00 //`}
      </div>
      <h2 style={{ fontFamily: 'monospace', fontSize: 22, fontWeight: 700, color: C.text, letterSpacing: '0.08em', marginBottom: 4 }}>
        PRIMARY SOURCE — THE YESHUA DECLARATION
      </h2>
      <p style={{ fontFamily: 'monospace', fontSize: 12, color: C.textDim, lineHeight: 1.7, maxWidth: 680, marginBottom: 28 }}>
        Before clinical analysis, the primary source. The word &ldquo;Satan&rdquo; was spoken by Yeshua himself — in Aramaic, the language he lived and taught in — directly to the man whose inverted cross became the emblem of Satanism.
      </p>

      {/* Reference strip */}
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginBottom: 20 }}>
        {[
          { label: 'REFERENCE',  value: v.reference },
          { label: 'SPEAKER',    value: v.speaker },
          { label: 'ADDRESSEE',  value: v.addressee },
          { label: 'SOURCE',     value: v.aramaic.source },
        ].map((item) => (
          <div key={item.label} style={{ borderLeft: `2px solid ${C.crimsonDim}`, paddingLeft: 10 }}>
            <div style={{ fontFamily: 'monospace', fontSize: 9, color: C.crimson, letterSpacing: '0.2em', marginBottom: 2 }}>{item.label}</div>
            <div style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid }}>{item.value}</div>
          </div>
        ))}
      </div>

      {/* Aramaic script — large display */}
      <div style={{
        background: C.surface,
        border: `1px solid ${C.borderAccent}`,
        padding: '28px 24px',
        marginBottom: 14,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Faint cross watermark */}
        <div style={{
          position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)',
          fontFamily: 'serif', fontSize: 120, color: C.crimson, opacity: 0.04,
          userSelect: 'none', lineHeight: 1,
        }}>
          ☩
        </div>

        <div style={{ fontFamily: 'monospace', fontSize: 9, color: C.crimson, letterSpacing: '0.22em', marginBottom: 12 }}>
          ◈ ARAMAIC — PESHITTA (EASTERN SYRIAC SCRIPT) · RIGHT TO LEFT
        </div>

        {/* Aramaic text — right-to-left */}
        <div style={{
          direction: 'rtl',
          fontSize: 26,
          lineHeight: 1.9,
          color: C.text,
          fontFamily: 'serif',
          marginBottom: 18,
          letterSpacing: '0.04em',
        }}>
          {v.aramaic.script}
        </div>

        {/* Transliteration */}
        <div style={{ fontFamily: 'monospace', fontSize: 9, color: C.textDim, letterSpacing: '0.18em', marginBottom: 6 }}>
          TRANSLITERATION (LATIN SCRIPT)
        </div>
        <div style={{
          fontFamily: 'monospace', fontSize: 14, color: C.textMid,
          fontStyle: 'italic', lineHeight: 1.7, marginBottom: 18,
        }}>
          {v.aramaic.transliteration}
        </div>

        {/* English */}
        <div style={{ fontFamily: 'monospace', fontSize: 9, color: C.textDim, letterSpacing: '0.18em', marginBottom: 6 }}>
          ENGLISH TRANSLATION
        </div>
        <div style={{
          fontFamily: 'monospace', fontSize: 14, color: C.text, lineHeight: 1.7,
          borderLeft: `3px solid ${C.crimson}`, paddingLeft: 16,
        }}>
          {v.english}
        </div>
      </div>

      {/* Word-by-word breakdown toggle */}
      <button
        onClick={() => setShowBreakdown(!showBreakdown)}
        style={{
          fontFamily: 'monospace', fontSize: 10, letterSpacing: '0.15em',
          padding: '7px 14px', marginBottom: 14,
          border: `1px solid ${showBreakdown ? C.crimson : C.border}`,
          background: showBreakdown ? C.crimsonDim : 'transparent',
          color: showBreakdown ? C.text : C.textDim,
          cursor: 'pointer',
        }}
      >
        {showBreakdown ? '− HIDE' : '+ SHOW'} ARAMAIC WORD-BY-WORD BREAKDOWN
      </button>

      <AnimatePresence>
        {showBreakdown && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: 'hidden', marginBottom: 14 }}
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
              gap: 8,
              padding: '14px 0',
            }}>
              {v.aramaic.wordBreakdown.map((w) => (
                <div key={w.roman} style={{
                  background: C.surface2,
                  border: `1px solid ${C.border}`,
                  padding: '10px 12px',
                }}>
                  <div style={{ direction: 'rtl', fontFamily: 'serif', fontSize: 20, color: C.text, marginBottom: 4 }}>
                    {w.aramaic}
                  </div>
                  <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.goldLight, fontStyle: 'italic', marginBottom: 2 }}>
                    {w.roman}
                  </div>
                  <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim }}>
                    {w.meaning}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Context */}
      <div style={{ display: 'grid', gap: 12 }}>
        {[
          { label: 'CONTEXT',                   body: v.context,                  color: C.textDim   },
          { label: 'LINGUISTIC NOTE ON ܣܛܢܐ',   body: v.linguisticNote,           color: C.crimson   },
          { label: 'THEOLOGICAL SIGNIFICANCE',   body: v.theologicalSignificance,  color: C.textDim   },
          { label: 'THE INVERSION OF THE CROSS', body: v.inversionNote,            color: C.crimson   },
        ].map((item) => (
          <div key={item.label} style={{
            background: C.surface2,
            borderLeft: `2px solid ${item.color === C.crimson ? C.borderAccent : C.border}`,
            padding: '12px 16px',
          }}>
            <div style={{ fontFamily: 'monospace', fontSize: 9, color: item.color, letterSpacing: '0.2em', marginBottom: 6 }}>
              ◈ {item.label}
            </div>
            <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.85, margin: 0 }}>
              {item.body}
            </p>
          </div>
        ))}
      </div>
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

// ── Section 9 Symbolism ───────────────────────────────────────────────────────

function SymbolCard({ symbol }: { symbol: SymbolEntry }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Panel accent>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%', background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
          gap: 12, padding: 0, marginBottom: 10,
        }}
      >
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontFamily: 'monospace', fontSize: 14, fontWeight: 700, color: C.text, letterSpacing: '0.06em', marginBottom: 4 }}>
            {symbol.name}
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim, letterSpacing: '0.1em' }}>
            {symbol.altNames.join(' · ')}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <EvidenceBadge level={symbol.evidenceLevel} />
          <span style={{ fontFamily: 'monospace', fontSize: 10, color: C.crimson }}>{isOpen ? '▲' : '▼'}</span>
        </div>
      </button>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: isOpen ? 18 : 0 }}>
        {symbol.tags.map(t => <Tag key={t} label={t} color={C.teal} />)}
      </div>

      {isOpen && (
        <div style={{ marginTop: 4 }}>
          {/* Misconception vs Actual */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 18 }}>
            <div style={{ background: '#1a0303', border: `1px solid ${C.crimsonDim}`, padding: '12px 14px' }}>
              <div style={{ fontFamily: 'monospace', fontSize: 9, color: C.crimson, letterSpacing: '0.18em', marginBottom: 6 }}>
                ✗ COMMON MISCONCEPTION
              </div>
              <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.7, margin: 0 }}>
                {symbol.commonMisconception}
              </p>
            </div>
            <div style={{ background: '#031a1a', border: `1px solid ${C.teal}`, padding: '12px 14px' }}>
              <div style={{ fontFamily: 'monospace', fontSize: 9, color: C.tealLight, letterSpacing: '0.18em', marginBottom: 6 }}>
                ◈ ACTUAL MEANING
              </div>
              <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.7, margin: 0 }}>
                {symbol.actualMeaning}
              </p>
            </div>
          </div>

          {/* Origin */}
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontFamily: 'monospace', fontSize: 9, color: C.gold, letterSpacing: '0.18em', marginBottom: 6 }}>
              HISTORICAL ORIGIN //
            </div>
            <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textDim, lineHeight: 1.8, margin: 0 }}>
              {symbol.origin}
            </p>
          </div>

          {/* Psychological Function */}
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontFamily: 'monospace', fontSize: 9, color: C.gold, letterSpacing: '0.18em', marginBottom: 6 }}>
              PSYCHOLOGICAL FUNCTION //
            </div>
            <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textDim, lineHeight: 1.8, margin: 0 }}>
              {symbol.psychologicalFunction}
            </p>
          </div>

          {/* Neurological Profile */}
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontFamily: 'monospace', fontSize: 9, color: C.gold, letterSpacing: '0.18em', marginBottom: 6 }}>
              NEUROLOGICAL PROFILE //
            </div>
            <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textDim, lineHeight: 1.8, margin: 0 }}>
              {symbol.neurologicalProfile}
            </p>
          </div>

          {/* Used By */}
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontFamily: 'monospace', fontSize: 9, color: C.textDim, letterSpacing: '0.18em', marginBottom: 8 }}>
              USED BY //
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {symbol.usedBy.map(u => (
                <span key={u} style={{ fontFamily: 'monospace', fontSize: 10, color: C.textMid, border: `1px solid ${C.border}`, padding: '2px 8px' }}>
                  {u}
                </span>
              ))}
            </div>
          </div>

          {/* Sources */}
          <div>
            <div style={{ fontFamily: 'monospace', fontSize: 9, color: C.textDim, letterSpacing: '0.18em', marginBottom: 8 }}>
              SOURCES //
            </div>
            {symbol.sources.map((s, i) => (
              <div key={i} style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim, lineHeight: 1.7, paddingLeft: 12, position: 'relative', marginBottom: 2 }}>
                <span style={{ position: 'absolute', left: 0, color: C.crimsonDim }}>›</span>
                {s}
              </div>
            ))}
          </div>
        </div>
      )}
    </Panel>
  )
}

function SymbolismSection() {
  return (
    <section style={{ marginBottom: 0 }}>
      <SectionHeader
        id="symbolism"
        number="09"
        title="RITUAL SYMBOLISM & SACRED INVERSION"
        subtitle="The actual origins, meanings, and psychological functions of core Satanic symbols — separated from media mythology. Each entry contrasts common misconception with historical record and neurological analysis."
      />
      {SYMBOLS.map(symbol => (
        <SymbolCard key={symbol.id} symbol={symbol} />
      ))}
    </section>
  )
}

// ── Section 10 Bibliography ───────────────────────────────────────────────────

function BibliographySection() {
  return (
    <div>
      <SectionHeader
        id="bibliography"
        number="10"
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

// ── Section 8: Rituals ────────────────────────────────────────────────────────

const CATEGORY_LABELS: Record<string, string> = {
  hate:        'HATE / DESTRUCTION',
  sense:       'SENSE CONDITIONING',
  seance:      'SÉANCE / NECROMANTIC',
  invocation:  'DEMONIC INVOCATION',
  pact:        'BLOOD PACT',
  sabbat:      'SABBAT / GATHERING',
  necromantic: 'NECROMANTIC',
  mass:        'BLACK MASS',
}

function RitualCard({ ritual, isOpen, onToggle }: { ritual: RitualEntry; isOpen: boolean; onToggle: () => void }) {
  const dangerColor = DANGER_COLORS[ritual.dangerLevel]

  return (
    <div>
      <button
        onClick={onToggle}
        style={{
          width: '100%', textAlign: 'left', background: C.surface,
          border: `1px solid ${isOpen ? dangerColor : C.border}`,
          padding: '16px 20px', cursor: 'pointer',
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12,
        }}
      >
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', marginBottom: 6 }}>
            <span style={{ fontFamily: 'monospace', fontSize: 14, fontWeight: 700, color: C.text }}>
              {ritual.name}
            </span>
            <Tag label={CATEGORY_LABELS[ritual.category] ?? ritual.category} color={dangerColor} />
            <Tag label={`DANGER: ${ritual.dangerLevel.toUpperCase()}`} color={dangerColor} />
            <EvidenceBadge level={ritual.evidenceLevel} />
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: 11, color: C.textDim }}>{ritual.tradition}</div>
        </div>
        <span style={{ fontFamily: 'monospace', fontSize: 14, color: dangerColor, flexShrink: 0 }}>
          {isOpen ? '−' : '+'}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              background: C.surface2,
              border: `1px solid ${C.borderAccent}`, borderTop: 'none',
              padding: '20px 22px', display: 'grid', gap: 20,
            }}>

              {/* Overview + Historical Origin */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14 }}>
                <div>
                  <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim, letterSpacing: '0.15em', marginBottom: 6 }}>OVERVIEW</div>
                  <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.8 }}>{ritual.overview}</p>
                </div>
                <div>
                  <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim, letterSpacing: '0.15em', marginBottom: 6 }}>HISTORICAL ORIGIN</div>
                  <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.8 }}>{ritual.historicalOrigin}</p>
                </div>
              </div>

              {/* How Performed */}
              <div>
                <div style={{ fontFamily: 'monospace', fontSize: 10, color: dangerColor, letterSpacing: '0.15em', marginBottom: 8 }}>
                  ◈ HOW PERFORMED — STEP BY STEP
                </div>
                <div style={{ display: 'grid', gap: 6 }}>
                  {ritual.howPerformed.map((step, i) => (
                    <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <span style={{ fontFamily: 'monospace', fontSize: 10, color: dangerColor, flexShrink: 0, paddingTop: 2 }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.8, margin: 0 }}>{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sensory Profile */}
              <div>
                <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.goldLight, letterSpacing: '0.15em', marginBottom: 8 }}>
                  ◈ SENSORY PROFILE — NEUROLOGICAL MAPPING
                </div>
                <div style={{ display: 'grid', gap: 8 }}>
                  {ritual.sensoricProfile.map((s) => (
                    <div key={s.sense} style={{
                      background: C.surface,
                      border: `1px solid ${C.border}`,
                      padding: '10px 14px',
                      display: 'grid',
                      gridTemplateColumns: '80px 1fr 1fr',
                      gap: 12,
                      alignItems: 'start',
                    }}>
                      <div style={{ fontFamily: 'monospace', fontSize: 11, fontWeight: 700, color: C.goldLight }}>{s.sense}</div>
                      <div>
                        <div style={{ fontFamily: 'monospace', fontSize: 9, color: C.textDim, letterSpacing: '0.12em', marginBottom: 3 }}>STIMULUS</div>
                        <p style={{ fontFamily: 'monospace', fontSize: 10, color: C.textMid, lineHeight: 1.7, margin: 0 }}>{s.stimulus}</p>
                      </div>
                      <div>
                        <div style={{ fontFamily: 'monospace', fontSize: 9, color: C.tealLight, letterSpacing: '0.12em', marginBottom: 3 }}>NEUROLOGICAL EFFECT</div>
                        <p style={{ fontFamily: 'monospace', fontSize: 10, color: C.textMid, lineHeight: 1.7, margin: 0 }}>{s.neurological}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Neurological + Psychological + Harms */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
                <div>
                  <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.crimson, letterSpacing: '0.15em', marginBottom: 6 }}>NEUROLOGICAL EFFECTS</div>
                  <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.8 }}>{ritual.neurologicalEffects}</p>
                </div>
                <div>
                  <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim, letterSpacing: '0.15em', marginBottom: 6 }}>PSYCHOLOGICAL FUNCTION</div>
                  <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.8 }}>{ritual.psychologicalFunction}</p>
                </div>
                <div style={{ borderLeft: `2px solid ${dangerColor}`, paddingLeft: 12 }}>
                  <div style={{ fontFamily: 'monospace', fontSize: 10, color: dangerColor, letterSpacing: '0.15em', marginBottom: 6 }}>DOCUMENTED HARMS</div>
                  <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.8 }}>{ritual.documentedHarms}</p>
                </div>
              </div>

              {/* Sources */}
              <div style={{ paddingTop: 6, borderTop: `1px solid ${C.border}` }}>
                <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim, letterSpacing: '0.15em', marginBottom: 6 }}>SOURCES</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {ritual.sources.map((s) => (
                    <span key={s} style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim, border: `1px solid ${C.border}`, padding: '3px 8px' }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function RitualsSection() {
  const [openId, setOpenId] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>('all')

  const categories = ['all', 'hate', 'sense', 'seance', 'invocation', 'pact', 'sabbat', 'mass']
  const filtered = filter === 'all' ? RITUALS : RITUALS.filter((r) => r.category === filter)

  return (
    <div>
      <SectionHeader
        id="rituals"
        number="08"
        title="HATE RITUALS, SENSE RITUALS & DARK CEREMONIES"
        subtitle="Detailed analysis of specific Satanic ritual types: their historical origins, step-by-step performance, complete sensory profiles mapped to neurological mechanisms, psychological functions, and documented harms."
      />

      {/* Danger note */}
      <div style={{
        background: C.surface2, borderLeft: `3px solid ${C.crimson}`,
        padding: '10px 14px', marginBottom: 16,
      }}>
        <p style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim, lineHeight: 1.7, margin: 0 }}>
          {RITUAL_DANGER_NOTE}
        </p>
      </div>

      {/* Category filter */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              fontFamily: 'monospace', fontSize: 10, letterSpacing: '0.12em',
              padding: '5px 12px',
              border: `1px solid ${filter === cat ? C.crimson : C.border}`,
              background: filter === cat ? C.crimsonDim : 'transparent',
              color: filter === cat ? C.text : C.textDim,
              cursor: 'pointer', textTransform: 'uppercase',
            }}
          >
            {cat === 'all' ? 'ALL RITUALS' : (CATEGORY_LABELS[cat] ?? cat)}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gap: 10 }}>
        {filtered.map((ritual) => (
          <RitualCard
            key={ritual.id}
            ritual={ritual}
            isOpen={openId === ritual.id}
            onToggle={() => setOpenId(openId === ritual.id ? null : ritual.id)}
          />
        ))}
      </div>
    </div>
  )
}

// ── Section 00c: Peter Visual Record ─────────────────────────────────────────

function PeterMediaSection() {
  const [crossPlaying, setCrossPlaying] = useState(false)
  const [peterPlaying, setPeterPlaying] = useState(false)

  return (
    <div id="peter-media">
      <div style={{ fontFamily: 'monospace', fontSize: 11, color: C.crimson, letterSpacing: '0.22em', marginBottom: 6 }}>
        {`SECTION 00c //`}
      </div>
      <h2 style={{ fontFamily: 'monospace', fontSize: 22, fontWeight: 700, color: C.text, letterSpacing: '0.08em', marginBottom: 8 }}>
        VISUAL RECORD — THE CRUCIFIXION & ITS INVERSION
      </h2>
      <p style={{ fontFamily: 'monospace', fontSize: 12, color: C.textDim, lineHeight: 1.7, maxWidth: 680, marginBottom: 28 }}>
        Documentary footage and imagery tracing the original crucifixion to Peter&apos;s deliberate inversion — the act that transformed the Roman execution cross into the primary symbol of Satanic opposition.
      </p>

      {/* Three-panel layout: two videos + one image */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14, marginBottom: 28 }}>

        {/* Panel 1 — Jesus Crucifixion */}
        <div style={{ background: C.surface, border: `1px solid ${C.borderAccent}` }}>
          <div style={{ padding: '12px 16px', borderBottom: `1px solid ${C.border}` }}>
            <div style={{ fontFamily: 'monospace', fontSize: 9, color: C.crimson, letterSpacing: '0.2em', marginBottom: 4 }}>
              ◈ RECORD 01 — THE ORIGINAL
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: 13, fontWeight: 700, color: C.text, marginBottom: 2 }}>
              The Crucifixion of Yeshua
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim }}>
              Standard Roman upright cross · c. 30 CE
            </div>
          </div>
          <div style={{ position: 'relative', background: '#000' }}>
            <video
              src="/fonts/jesus_crucification.mp4"
              controls
              playsInline
              onPlay={() => setCrossPlaying(true)}
              onPause={() => setCrossPlaying(false)}
              style={{ width: '100%', display: 'block', maxHeight: 320, objectFit: 'cover' }}
            />
            {!crossPlaying && (
              <div style={{
                position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                pointerEvents: 'none',
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'rgba(138,3,3,0.7)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ color: '#fff', fontSize: 18, marginLeft: 4 }}>▶</span>
                </div>
              </div>
            )}
          </div>
          <div style={{ padding: '10px 16px' }}>
            <p style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim, lineHeight: 1.7, margin: 0 }}>
              The standard Roman crux immissa. The form Peter would later explicitly reject by requesting its inversion.
            </p>
          </div>
        </div>

        {/* Panel 2 — Peter Tapping the Guard */}
        <div style={{ background: C.surface, border: `1px solid ${C.borderAccent}` }}>
          <div style={{ padding: '12px 16px', borderBottom: `1px solid ${C.border}` }}>
            <div style={{ fontFamily: 'monospace', fontSize: 9, color: C.crimson, letterSpacing: '0.2em', marginBottom: 4 }}>
              ◈ RECORD 02 — THE REQUEST
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: 13, fontWeight: 700, color: C.text, marginBottom: 2 }}>
              Nero Instructs the Guard
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim }}>
              The deliberate inversion · Rome · c. 64–68 CE
            </div>
          </div>
          <div style={{ position: 'relative', background: '#000' }}>
            <video
              src="/fonts/peter_tapping_guard.mov"
              controls
              playsInline
              onPlay={() => setPeterPlaying(true)}
              onPause={() => setPeterPlaying(false)}
              style={{ width: '100%', display: 'block', maxHeight: 320, objectFit: 'cover' }}
            />
            {!peterPlaying && (
              <div style={{
                position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                pointerEvents: 'none',
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'rgba(138,3,3,0.7)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ color: '#fff', fontSize: 18, marginLeft: 4 }}>▶</span>
                </div>
              </div>
            )}
          </div>
          <div style={{ padding: '10px 16px' }}>
            <p style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim, lineHeight: 1.7, margin: 0 }}>
              Peter &mdash; whom Yeshua himself called &ldquo;Satan&rdquo; &mdash; specifically requests crucifixion head-down, refusing to die in the same posture as his master.
            </p>
          </div>
        </div>

        {/* Panel 3 — Peter Upside Down photograph */}
        <div style={{ background: C.surface, border: `1px solid ${C.borderAccent}` }}>
          <div style={{ padding: '12px 16px', borderBottom: `1px solid ${C.border}` }}>
            <div style={{ fontFamily: 'monospace', fontSize: 9, color: C.crimson, letterSpacing: '0.2em', marginBottom: 4 }}>
              ◈ RECORD 03 — THE INVERSION
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: 13, fontWeight: 700, color: C.text, marginBottom: 2 }}>
              Peter — Head Down
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim }}>
              Crux inversa · Origin of the Petrine Cross
            </div>
          </div>
          <div style={{ background: '#000', overflow: 'hidden' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/fonts/IMG_1007.png"
              alt="Peter crucified upside down — the origin of the inverted cross"
              style={{ width: '100%', display: 'block', maxHeight: 320, objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
          <div style={{ padding: '10px 16px' }}>
            <p style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim, lineHeight: 1.7, margin: 0 }}>
              The crux inversa, known as the Petrine Cross. This image — the first Christian martyr inverted — became the emblem later appropriated by Satanism as an anti-Christian symbol.
            </p>
          </div>
        </div>
      </div>

      {/* Narrative connector */}
      <div style={{
        background: C.surface2,
        border: `1px solid ${C.borderAccent}`,
        borderLeft: `3px solid ${C.crimson}`,
        padding: '16px 20px',
      }}>
        <div style={{ fontFamily: 'monospace', fontSize: 9, color: C.crimson, letterSpacing: '0.2em', marginBottom: 8 }}>
          ◈ THE SYMBOLIC CHAIN
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
          {[
            { step: '01', label: 'Upright Cross', body: 'The instrument of Yeshua\'s execution — a Roman state punishment, not yet a symbol.' },
            { step: '02', label: 'Peter\'s Request', body: 'Peter, already called "Satan" by Yeshua in Matthew 16:23, refuses to mirror his master\'s death posture — the inversion is deliberate theology.' },
            { step: '03', label: 'Crux Inversa', body: 'The inverted cross becomes the Petrine Cross — originally a mark of humility. Centuries later it is re-appropriated as the primary anti-Christian symbol in Satanic iconography.' },
          ].map((item) => (
            <div key={item.step} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'monospace', fontSize: 13, color: C.crimson, fontWeight: 700, flexShrink: 0, paddingTop: 1 }}>
                {item.step}
              </span>
              <div>
                <div style={{ fontFamily: 'monospace', fontSize: 11, color: C.text, fontWeight: 700, marginBottom: 4 }}>{item.label}</div>
                <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textDim, lineHeight: 1.8, margin: 0 }}>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
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
              <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim }}>SECTIONS: 8 + BIBLIOGRAPHY</div>
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
          <PeterCaseSection />
          <PeterVerseSection />
          <PeterMediaSection />
          <NeroSection />
          <TaxonomySection />
          <NeuroscienceSection />
          <ReceptorSection />
          <DisordersSection />
          <MetaphysicalSection />
          <GeneticsSection />
          <RecoverySection />
          <RitualsSection />
          <SymbolismSection />
          <BibliographySection />
        </div>
      </div>
    </div>
  )
}
