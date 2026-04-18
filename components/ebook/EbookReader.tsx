'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { EBOOK_META, EBOOK_CHAPTERS, type EbookChapter, type EbookBlock } from '@/lib/ebookData'

const C = {
  bg: '#030305',
  panel: '#07070e',
  border: '#161625',
  accent: '#2a9d9d',
  accentDim: '#1a5f5f',
  red: '#8A0303',
  gold: '#d4a017',
  text: '#d4d4e0',
  textMid: '#8888a0',
  textDim: '#3a3a52',
}

export default function EbookReader() {
  const [activeChapter, setActiveChapter] = useState<EbookChapter>(EBOOK_CHAPTERS[0])
  const [fontSize, setFontSize] = useState(14)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const handleDownload = useCallback(() => {
    // Build plain-text content for download
    const lines: string[] = []
    lines.push(EBOOK_META.title.toUpperCase())
    lines.push(EBOOK_META.subtitle)
    lines.push(`${EBOOK_META.author} · ${EBOOK_META.year}`)
    lines.push('='.repeat(72))
    lines.push('')

    EBOOK_CHAPTERS.forEach((ch) => {
      lines.push(`CHAPTER ${ch.number}: ${ch.title.toUpperCase()}`)
      lines.push(ch.subtitle)
      lines.push('-'.repeat(60))
      ch.content.forEach((block) => {
        if (block.type === 'paragraph') lines.push(block.text + '\n')
        if (block.type === 'heading') lines.push(`\n── ${block.text.toUpperCase()} ──\n`)
        if (block.type === 'quote') lines.push(`"${block.text}"\n  — ${block.attribution ?? ''}\n`)
        if (block.type === 'stat') lines.push(`[${block.label}: ${block.value}]\n`)
        if (block.type === 'citation') lines.push(`SOURCES: ${block.text}\n`)
      })
      lines.push('')
    })

    const blob = new Blob([lines.join('\n')], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'LimbicLab_Neuroscience_of_the_Dark.txt'
    a.click()
    URL.revokeObjectURL(url)
  }, [])

  const currentIndex = EBOOK_CHAPTERS.findIndex((c) => c.id === activeChapter.id)

  return (
    <div style={{ background: C.bg, minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'monospace', color: C.text }}>
      {/* Top bar */}
      <div style={{ borderBottom: `1px solid ${C.border}`, padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <button
            onClick={() => setSidebarOpen((v) => !v)}
            style={{ background: 'none', border: `1px solid ${C.border}`, color: C.textMid, padding: '6px 12px', cursor: 'pointer', fontSize: 10, letterSpacing: '0.15em' }}
          >
            {sidebarOpen ? '◂ CONTENTS' : '▸ CONTENTS'}
          </button>
          <div>
            <span style={{ fontSize: 11, color: C.textDim, letterSpacing: '0.2em' }}>{EBOOK_META.title.toUpperCase()}</span>
            <span style={{ fontSize: 11, color: C.textDim, margin: '0 10px' }}>·</span>
            <span style={{ fontSize: 11, color: C.textMid }}>CH. {activeChapter.number}: {activeChapter.title}</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Font size controls */}
          <div style={{ display: 'flex', gap: 0, border: `1px solid ${C.border}`, borderRadius: 2, overflow: 'hidden' }}>
            <button onClick={() => setFontSize((s) => Math.max(11, s - 1))} style={{ background: 'none', border: 'none', color: C.textMid, padding: '6px 10px', cursor: 'pointer', fontSize: 12 }}>A−</button>
            <div style={{ width: 1, background: C.border }} />
            <button onClick={() => setFontSize((s) => Math.min(20, s + 1))} style={{ background: 'none', border: 'none', color: C.textMid, padding: '6px 10px', cursor: 'pointer', fontSize: 14 }}>A+</button>
          </div>
          {/* Download */}
          <button
            onClick={handleDownload}
            style={{ background: C.accentDim, border: `1px solid ${C.accent}`, color: '#e0e0e0', padding: '8px 18px', fontSize: 10, letterSpacing: '0.2em', cursor: 'pointer', transition: 'background 0.15s' }}
            onMouseOver={(e) => (e.currentTarget.style.background = C.accent)}
            onMouseOut={(e) => (e.currentTarget.style.background = C.accentDim)}
          >
            ↓ DOWNLOAD .TXT
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
        {/* Sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 260, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ borderRight: `1px solid ${C.border}`, flexShrink: 0, overflow: 'hidden' }}
            >
              <div style={{ width: 260, padding: '24px 0' }}>
                <div style={{ padding: '0 20px 16px', borderBottom: `1px solid ${C.border}` }}>
                  <div style={{ fontSize: 10, color: C.textDim, letterSpacing: '0.25em', marginBottom: 6 }}>TABLE OF CONTENTS</div>
                  <div style={{ fontSize: 11, color: C.accent }}>{EBOOK_META.title}</div>
                  <div style={{ fontSize: 10, color: C.textMid, marginTop: 2 }}>{EBOOK_CHAPTERS.length} chapters</div>
                </div>
                {EBOOK_CHAPTERS.map((ch) => (
                  <button
                    key={ch.id}
                    onClick={() => setActiveChapter(ch)}
                    style={{
                      display: 'block',
                      width: '100%',
                      background: ch.id === activeChapter.id ? '#0c0c18' : 'none',
                      border: 'none',
                      borderLeft: ch.id === activeChapter.id ? `2px solid ${C.accent}` : '2px solid transparent',
                      textAlign: 'left',
                      padding: '14px 20px',
                      cursor: 'pointer',
                      transition: 'background 0.15s',
                    }}
                  >
                    <div style={{ fontSize: 10, color: C.textDim, letterSpacing: '0.2em', marginBottom: 4 }}>CHAPTER {ch.number}</div>
                    <div style={{ fontSize: 12, color: ch.id === activeChapter.id ? '#e0e0e0' : C.textMid, lineHeight: 1.3 }}>{ch.title}</div>
                    <div style={{ fontSize: 10, color: C.textDim, marginTop: 3 }}>{ch.wordCount.toLocaleString()} words</div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main reading area */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '48px 64px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeChapter.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              style={{ maxWidth: 720, margin: '0 auto' }}
            >
              {/* Chapter header */}
              <div style={{ marginBottom: 48 }}>
                <div style={{ fontSize: 10, color: C.textDim, letterSpacing: '0.3em', marginBottom: 12 }}>
                  CHAPTER {activeChapter.number} OF {EBOOK_CHAPTERS.length}
                </div>
                <h1 style={{ fontSize: 32, fontWeight: 700, color: '#e0e0e0', letterSpacing: '0.06em', margin: '0 0 10px', lineHeight: 1.1 }}>
                  {activeChapter.title}
                </h1>
                <div style={{ fontSize: 14, color: C.textMid, lineHeight: 1.4 }}>{activeChapter.subtitle}</div>
                <div style={{ marginTop: 20, height: 1, background: `linear-gradient(90deg, ${C.accent}, transparent)` }} />
              </div>

              {/* Chapter content */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {activeChapter.content.map((block, i) => (
                  <BlockRenderer key={i} block={block} fontSize={fontSize} />
                ))}
              </div>

              {/* Prev / Next nav */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 56, paddingTop: 24, borderTop: `1px solid ${C.border}` }}>
                {currentIndex > 0 ? (
                  <button
                    onClick={() => setActiveChapter(EBOOK_CHAPTERS[currentIndex - 1])}
                    style={{ background: 'none', border: `1px solid ${C.border}`, color: C.textMid, padding: '10px 20px', cursor: 'pointer', fontSize: 10, letterSpacing: '0.15em' }}
                  >
                    ← CH. {EBOOK_CHAPTERS[currentIndex - 1].number}: {EBOOK_CHAPTERS[currentIndex - 1].title}
                  </button>
                ) : <div />}
                {currentIndex < EBOOK_CHAPTERS.length - 1 ? (
                  <button
                    onClick={() => setActiveChapter(EBOOK_CHAPTERS[currentIndex + 1])}
                    style={{ background: 'none', border: `1px solid ${C.border}`, color: C.textMid, padding: '10px 20px', cursor: 'pointer', fontSize: 10, letterSpacing: '0.15em' }}
                  >
                    CH. {EBOOK_CHAPTERS[currentIndex + 1].number}: {EBOOK_CHAPTERS[currentIndex + 1].title} →
                  </button>
                ) : (
                  <button
                    onClick={handleDownload}
                    style={{ background: C.accentDim, border: `1px solid ${C.accent}`, color: '#e0e0e0', padding: '10px 20px', cursor: 'pointer', fontSize: 10, letterSpacing: '0.15em' }}
                  >
                    ↓ DOWNLOAD FULL BOOK
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

function BlockRenderer({ block, fontSize }: { block: EbookBlock; fontSize: number }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p style={{ fontSize, color: C.text, lineHeight: 1.9, margin: '0 0 20px', fontFamily: 'Georgia, serif' }}>
          {block.text}
        </p>
      )
    case 'heading':
      return (
        <div style={{ fontSize: 12, color: C.accent, letterSpacing: '0.25em', margin: '32px 0 16px', textTransform: 'uppercase', fontFamily: 'monospace' }}>
          ── {block.text}
        </div>
      )
    case 'quote':
      return (
        <div style={{ borderLeft: `3px solid ${C.accentDim}`, paddingLeft: 20, margin: '24px 0', background: C.panel, padding: '16px 20px' }}>
          <div style={{ fontSize: fontSize + 1, color: '#e0e0e0', lineHeight: 1.7, fontStyle: 'italic', fontFamily: 'Georgia, serif', marginBottom: block.attribution ? 8 : 0 }}>
            &ldquo;{block.text}&rdquo;
          </div>
          {block.attribution && (
            <div style={{ fontSize: 10, color: C.textMid, letterSpacing: '0.15em', fontFamily: 'monospace' }}>
              — {block.attribution}
            </div>
          )}
        </div>
      )
    case 'stat':
      return (
        <div style={{ border: `1px solid ${C.border}`, background: C.panel, padding: '16px 20px', margin: '20px 0', display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ fontSize: 28, fontWeight: 700, color: C.red, flexShrink: 0, fontFamily: 'monospace' }}>{block.value}</div>
          <div style={{ fontSize: 12, color: C.textMid }}>{block.label}</div>
        </div>
      )
    case 'citation':
      return (
        <div style={{ fontSize: 10, color: C.textDim, fontStyle: 'italic', margin: '20px 0 32px', padding: '12px 16px', borderTop: `1px solid ${C.border}`, lineHeight: 1.6, fontFamily: 'monospace' }}>
          {block.text}
        </div>
      )
  }
}
