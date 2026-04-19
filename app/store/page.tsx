'use client'

import { useState } from 'react'
import Link from 'next/link'

const C = {
  bg: '#0a0a0a',
  surface: '#111111',
  surface2: '#161616',
  border: '#1e1e1e',
  borderAccent: '#1a3a3a',
  text: '#e0e0e0',
  textDim: '#777777',
  textMid: '#aaaaaa',
  teal: '#1a6b6b',
  tealLight: '#2a9d9d',
}

const NEWSLETTER_FEATURES = [
  'Weekly neuroscience dispatches direct to your inbox',
  'Bipolar disorder, trauma, and dark psychology research briefs',
  'Case studies drawn from the LimbicLab research archive',
  'Early access to new site content and research drops',
  'Every claim annotated with peer-reviewed citations',
  'Cancel anytime — no commitment',
]

const GUIDE_FEATURES = [
  'Identify 12 dark psychology manipulation tactics',
  'Neuroscience-backed defense frameworks',
  'Covert narcissism recognition patterns',
  'Emotional blackmail deconstruction toolkit',
  'Field-tested boundary-setting scripts',
  'Instant PDF download after purchase',
]

export default function StorePage() {
  const [email, setEmail] = useState('')
  const [language, setLanguage] = useState<'en' | 'es'>('en')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [guideLoading, setGuideLoading] = useState(false)
  const [guideError, setGuideError] = useState<string | null>(null)

  async function handleNewsletter() {
    if (!email.trim()) {
      setError('Enter your email to start your free trial.')
      return
    }
    setLoading(true)
    setError(null)
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), source: 'newsletter', language }),
      })
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product: 'newsletter', email: email.trim() }),
      })
      const data = await res.json()
      if (!res.ok || !data.url) throw new Error(data.error || 'Checkout failed')
      window.location.href = data.url
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
      setLoading(false)
    }
  }

  async function handleGuide() {
    setGuideLoading(true)
    setGuideError(null)
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product: 'guide' }),
      })
      const data = await res.json()
      if (!res.ok || !data.url) throw new Error(data.error || 'Checkout failed')
      window.location.href = data.url
    } catch (err) {
      setGuideError(err instanceof Error ? err.message : 'Something went wrong')
      setGuideLoading(false)
    }
  }

  return (
    <main style={{ background: C.bg, minHeight: '100vh', padding: '60px 24px 80px' }}>
      <style>{`
        @media (max-width: 600px) {
          .store-feature-grid { grid-template-columns: 1fr !important; }
          .store-email-row { flex-direction: column !important; }
          .store-email-row input { border-right: 1px solid #1a3a3a !important; border-bottom: none !important; }
          .store-email-row button { width: 100% !important; }
          .store-guide-card { flex-direction: column !important; }
          .store-guide-price { align-items: flex-start !important; flex-direction: row !important; align-items: center !important; }
        }
      `}</style>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: 56, textAlign: 'center' }}>
          <div style={{ fontFamily: 'monospace', fontSize: 11, color: C.tealLight, letterSpacing: '0.22em', marginBottom: 16 }}>
            {`// LIMBICLAB STORE`}
          </div>
          <h1 style={{ fontFamily: 'monospace', fontSize: 32, fontWeight: 700, color: C.text, letterSpacing: '0.08em', marginBottom: 14, lineHeight: 1.2 }}>
            NEUROSCIENCE RESEARCH<br />DELIVERED WEEKLY
          </h1>
          <p style={{ fontFamily: 'monospace', fontSize: 13, color: C.textDim, lineHeight: 1.7, maxWidth: 520, margin: '0 auto' }}>
            Graduate-level research on bipolar disorder, trauma, dark psychology, and the neuroscience of behavior — cited, sourced, and in your inbox every week.
          </p>
        </div>

        {/* Newsletter Hero */}
        <div style={{
          background: C.surface,
          border: `1px solid ${C.tealLight}`,
          padding: '40px 40px 36px',
          marginBottom: 24,
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Background glow */}
          <div style={{ position: 'absolute', top: -60, right: -60, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(42,157,157,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

          {/* Trial badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <div style={{ fontFamily: 'monospace', fontSize: 10, color: '#0a0a0a', background: C.tealLight, letterSpacing: '0.2em', padding: '4px 12px', fontWeight: 700 }}>
              14 DAYS FREE
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.tealLight, letterSpacing: '0.2em', border: `1px solid ${C.tealLight}`, padding: '4px 12px' }}>
              WEEKLY NEWSLETTER
            </div>
          </div>

          <h2 style={{ fontFamily: 'monospace', fontSize: 24, fontWeight: 700, color: C.text, letterSpacing: '0.06em', marginBottom: 12, lineHeight: 1.3 }}>
            LimbicLab Newsletter
          </h2>

          <p style={{ fontFamily: 'monospace', fontSize: 12, color: C.textDim, lineHeight: 1.8, marginBottom: 28, maxWidth: 560 }}>
            Start free. No charge for 14 days. After your trial, just $9.99/month — cancel anytime with one click.
          </p>

          {/* Features */}
          <ul className="store-feature-grid" style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 24px' }}>
            {NEWSLETTER_FEATURES.map((f) => (
              <li key={f} style={{ fontFamily: 'monospace', fontSize: 12, color: C.textMid, lineHeight: 1.6, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <span style={{ color: C.tealLight, flexShrink: 0, marginTop: 1 }}>◈</span>
                {f}
              </li>
            ))}
          </ul>

          {/* Language toggle */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
            {(['en', 'es'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                style={{
                  fontFamily: 'monospace', fontSize: 10, letterSpacing: '0.18em',
                  padding: '4px 14px',
                  border: `1px solid ${language === lang ? C.tealLight : C.border}`,
                  background: language === lang ? 'rgba(42,157,157,0.1)' : 'transparent',
                  color: language === lang ? C.tealLight : C.textDim,
                  cursor: 'pointer',
                }}
              >
                {lang === 'en' ? 'EN — English' : 'ES — Español'}
              </button>
            ))}
          </div>

          {/* Email + CTA */}
          <div className="store-email-row" style={{ display: 'flex', gap: 0, maxWidth: 520 }}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleNewsletter()}
              style={{
                fontFamily: 'monospace',
                fontSize: 12,
                color: C.text,
                background: C.surface2,
                border: `1px solid ${error ? '#8A0303' : C.borderAccent}`,
                borderRight: 'none',
                padding: '12px 16px',
                flex: 1,
                outline: 'none',
                letterSpacing: '0.05em',
              }}
            />
            <button
              onClick={handleNewsletter}
              disabled={loading}
              style={{
                fontFamily: 'monospace',
                fontSize: 11,
                letterSpacing: '0.18em',
                color: loading ? C.textDim : C.bg,
                background: loading ? C.surface2 : C.tealLight,
                border: `1px solid ${loading ? C.border : C.tealLight}`,
                padding: '12px 24px',
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.15s',
                whiteSpace: 'nowrap',
                fontWeight: 700,
              }}
              onMouseOver={(e) => { if (!loading) { e.currentTarget.style.background = C.teal; e.currentTarget.style.borderColor = C.teal } }}
              onMouseOut={(e) => { if (!loading) { e.currentTarget.style.background = C.tealLight; e.currentTarget.style.borderColor = C.tealLight } }}
            >
              {loading ? 'LOADING...' : 'START FREE TRIAL →'}
            </button>
          </div>

          {error && (
            <p style={{ fontFamily: 'monospace', fontSize: 11, color: '#8A0303', marginTop: 10 }}>◈ {error}</p>
          )}

          <p style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim, marginTop: 14, letterSpacing: '0.1em' }}>
            14-day free trial · then $9.99/month · cancel anytime · secured by Stripe
          </p>
        </div>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '48px 0 36px' }}>
          <div style={{ flex: 1, height: 1, background: C.border }} />
          <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim, letterSpacing: '0.25em' }}>ALSO AVAILABLE</div>
          <div style={{ flex: 1, height: 1, background: C.border }} />
        </div>

        {/* Guide card */}
        <div style={{ background: C.surface, border: `1px solid ${C.borderAccent}`, padding: '28px 32px 28px' }}>
          <div className="store-guide-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24, flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 260 }}>
              <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.tealLight, letterSpacing: '0.22em', border: `1px solid ${C.tealLight}`, display: 'inline-block', padding: '2px 8px', marginBottom: 14 }}>
                ONE-TIME PURCHASE
              </div>
              <h2 style={{ fontFamily: 'monospace', fontSize: 18, fontWeight: 700, color: C.text, letterSpacing: '0.06em', marginBottom: 10, lineHeight: 1.3 }}>
                Dark Psychology Defense Guide
              </h2>
              <p style={{ fontFamily: 'monospace', fontSize: 12, color: C.textDim, lineHeight: 1.7, marginBottom: 18 }}>
                A field manual for recognizing covert manipulation, narcissistic abuse patterns, and dark triad behavior — grounded in neuroscience and clinical psychology research.
              </p>
              <ul className="store-feature-grid" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 20px' }}>
                {GUIDE_FEATURES.map((f) => (
                  <li key={f} style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.6, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <span style={{ color: C.tealLight, flexShrink: 0 }}>◈</span>{f}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12, flexShrink: 0 }}>
              <div>
                <span style={{ fontFamily: 'monospace', fontSize: 32, fontWeight: 700, color: C.text }}>$27</span>
                <span style={{ fontFamily: 'monospace', fontSize: 11, color: C.textDim, marginLeft: 6 }}>one-time</span>
              </div>
              {guideError && (
                <p style={{ fontFamily: 'monospace', fontSize: 11, color: '#8A0303', textAlign: 'right' }}>◈ {guideError}</p>
              )}
              <button
                onClick={handleGuide}
                disabled={guideLoading}
                style={{ fontFamily: 'monospace', fontSize: 11, letterSpacing: '0.18em', color: guideLoading ? C.textDim : C.bg, background: guideLoading ? C.surface2 : C.tealLight, border: `1px solid ${guideLoading ? C.border : C.tealLight}`, padding: '10px 24px', cursor: guideLoading ? 'not-allowed' : 'pointer', transition: 'all 0.15s', whiteSpace: 'nowrap' }}
                onMouseOver={(e) => { if (!guideLoading) { e.currentTarget.style.background = C.teal; e.currentTarget.style.borderColor = C.teal } }}
                onMouseOut={(e) => { if (!guideLoading) { e.currentTarget.style.background = C.tealLight; e.currentTarget.style.borderColor = C.tealLight } }}
              >
                {guideLoading ? 'REDIRECTING...' : 'GET THE GUIDE →'}
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${C.border}`, fontFamily: 'monospace', fontSize: 11, color: C.textDim, lineHeight: 1.7 }}>
          <span style={{ color: C.tealLight }}>◈</span> All transactions processed securely via Stripe.{' '}
          <Link href="/" style={{ color: C.textDim, textDecoration: 'underline' }}>← Back to home</Link>
        </div>
      </div>
    </main>
  )
}
