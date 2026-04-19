'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { trackEbookConversion } from '@/lib/gtag'

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
  error: '#8A0303',
}

export default function LandingEN() {
  const [ebookEmail, setEbookEmail] = useState('')
  const [ebookLoading, setEbookLoading] = useState(false)
  const [ebookError, setEbookError] = useState<string | null>(null)
  const [ebookDone, setEbookDone] = useState(false)
  const [capReached, setCapReached] = useState(false)
  const [ebookClaimed, setEbookClaimed] = useState(0)
  const EBOOK_MAX = 200

  const [nlEmail, setNlEmail] = useState('')
  const [nlLoading, setNlLoading] = useState(false)
  const [nlError, setNlError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/ebook/availability')
      .then(r => r.json())
      .then(d => {
        if (!d.available) setCapReached(true)
        setEbookClaimed(d.claimed ?? 0)
      })
      .catch(() => {})
  }, [])

  async function handleEbook() {
    if (!ebookEmail.trim()) { setEbookError('Enter your email to claim the free ebook.'); return }
    setEbookLoading(true)
    setEbookError(null)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: ebookEmail.trim(), source: 'ebook', language: 'en' }),
      })
      const data = await res.json()
      if (data.error === 'EBOOK_CAP_REACHED') { setCapReached(true); setEbookLoading(false); return }
      if (!res.ok) throw new Error(data.error || 'Something went wrong')
      trackEbookConversion()
      setEbookDone(true)
    } catch (err) {
      setEbookError(err instanceof Error ? err.message : 'Something went wrong')
      setEbookLoading(false)
    }
  }

  async function handleNewsletter() {
    if (!nlEmail.trim()) { setNlError('Enter your email to start your free trial.'); return }
    setNlLoading(true)
    setNlError(null)
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: nlEmail.trim(), source: 'newsletter', language: 'en' }),
      })
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product: 'newsletter', email: nlEmail.trim() }),
      })
      const data = await res.json()
      if (!res.ok || !data.url) throw new Error(data.error || 'Checkout failed')
      window.location.href = data.url
    } catch (err) {
      setNlError(err instanceof Error ? err.message : 'Something went wrong')
      setNlLoading(false)
    }
  }

  const spotsLeft = Math.max(0, EBOOK_MAX - ebookClaimed)

  return (
    <main style={{ background: C.bg, minHeight: '100vh', padding: '60px 24px 80px' }}>
      <style>{`
        @media (max-width: 600px) {
          .lp-row { flex-direction: column !important; }
          .lp-row input { border-right: 1px solid #1a3a3a !important; border-bottom: none !important; }
          .lp-row button { width: 100% !important; }
        }
      `}</style>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.tealLight, letterSpacing: '0.25em', marginBottom: 14 }}>
            {`// LIMBICLAB`}
          </div>
          <h1 style={{ fontFamily: 'monospace', fontSize: 28, fontWeight: 700, color: C.text, letterSpacing: '0.07em', lineHeight: 1.25, marginBottom: 14 }}>
            THE NEUROSCIENCE<br />OF THE DARK
          </h1>
          <p style={{ fontFamily: 'monospace', fontSize: 12, color: C.textDim, lineHeight: 1.75, maxWidth: 480, margin: '0 auto' }}>
            Bipolar disorder, trauma, dark psychology — graduate-level research distilled into clear, cited dispatches. Free ebook + weekly newsletter.
          </p>
        </div>

        {/* Ebook section */}
        <div style={{ background: C.surface, border: `1px solid ${C.tealLight}`, padding: '36px 36px 32px', marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <div style={{ fontFamily: 'monospace', fontSize: 10, color: '#0a0a0a', background: C.tealLight, letterSpacing: '0.2em', padding: '3px 10px', fontWeight: 700 }}>
              FREE
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.tealLight, letterSpacing: '0.2em', border: `1px solid ${C.tealLight}`, padding: '3px 10px' }}>
              E-BOOK
            </div>
            {!capReached && (
              <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim, letterSpacing: '0.12em', marginLeft: 'auto' }}>
                {spotsLeft} of {EBOOK_MAX} spots left
              </div>
            )}
          </div>

          <h2 style={{ fontFamily: 'monospace', fontSize: 20, fontWeight: 700, color: C.text, letterSpacing: '0.05em', marginBottom: 10, lineHeight: 1.3 }}>
            The Neuroscience of the Dark
          </h2>
          <p style={{ fontFamily: 'monospace', fontSize: 12, color: C.textDim, lineHeight: 1.75, marginBottom: 24 }}>
            Five chapters. Bipolar oscillation, environmental trauma, ritual neuroscience, suicidality convergence, and the creative brain. 21+ peer-reviewed citations.
          </p>

          {capReached ? (
            <div style={{ background: C.surface2, border: `1px solid ${C.border}`, padding: '18px 20px' }}>
              <p style={{ fontFamily: 'monospace', fontSize: 12, color: C.textMid, lineHeight: 1.7, margin: 0 }}>
                ◈ Free access has closed — all 200 copies claimed.<br />
                <span style={{ color: C.textDim }}>Subscribe to the newsletter below to stay in the loop.</span>
              </p>
            </div>
          ) : ebookDone ? (
            <div style={{ background: C.surface2, border: `1px solid ${C.tealLight}`, padding: '18px 20px' }}>
              <p style={{ fontFamily: 'monospace', fontSize: 12, color: C.tealLight, lineHeight: 1.7, margin: 0 }}>
                ◈ Check your inbox — your personal ebook link is on its way.
              </p>
            </div>
          ) : (
            <>
              <div className="lp-row" style={{ display: 'flex', gap: 0, maxWidth: 480 }}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={ebookEmail}
                  onChange={(e) => setEbookEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleEbook()}
                  style={{
                    fontFamily: 'monospace', fontSize: 12, color: C.text,
                    background: C.surface2, border: `1px solid ${ebookError ? C.error : C.borderAccent}`,
                    borderRight: 'none', padding: '12px 16px', flex: 1, outline: 'none', letterSpacing: '0.05em',
                  }}
                />
                <button
                  onClick={handleEbook}
                  disabled={ebookLoading}
                  style={{
                    fontFamily: 'monospace', fontSize: 11, letterSpacing: '0.18em',
                    color: ebookLoading ? C.textDim : C.bg,
                    background: ebookLoading ? C.surface2 : C.tealLight,
                    border: `1px solid ${ebookLoading ? C.border : C.tealLight}`,
                    padding: '12px 22px', cursor: ebookLoading ? 'not-allowed' : 'pointer',
                    whiteSpace: 'nowrap', fontWeight: 700,
                  }}
                >
                  {ebookLoading ? 'SENDING...' : 'GET FREE EBOOK →'}
                </button>
              </div>
              {ebookError && (
                <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.error, marginTop: 8 }}>◈ {ebookError}</p>
              )}
              <p style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim, marginTop: 12, letterSpacing: '0.1em' }}>
                Instant delivery to your inbox · No credit card · No spam
              </p>
            </>
          )}
        </div>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, margin: '40px 0 32px' }}>
          <div style={{ flex: 1, height: 1, background: C.border }} />
          <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim, letterSpacing: '0.22em' }}>WEEKLY NEWSLETTER</div>
          <div style={{ flex: 1, height: 1, background: C.border }} />
        </div>

        {/* Newsletter section */}
        <div style={{ background: C.surface, border: `1px solid ${C.borderAccent}`, padding: '36px 36px 32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <div style={{ fontFamily: 'monospace', fontSize: 10, color: '#0a0a0a', background: C.tealLight, letterSpacing: '0.2em', padding: '3px 10px', fontWeight: 700 }}>
              14 DAYS FREE
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.tealLight, letterSpacing: '0.2em', border: `1px solid ${C.tealLight}`, padding: '3px 10px' }}>
              NEWSLETTER
            </div>
          </div>

          <h2 style={{ fontFamily: 'monospace', fontSize: 20, fontWeight: 700, color: C.text, letterSpacing: '0.05em', marginBottom: 10, lineHeight: 1.3 }}>
            LimbicLab Weekly
          </h2>
          <p style={{ fontFamily: 'monospace', fontSize: 12, color: C.textDim, lineHeight: 1.75, marginBottom: 12 }}>
            Graduate-level research briefs on bipolar disorder, trauma, and dark psychology — cited, sourced, and in your inbox every week.
          </p>
          <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.6, marginBottom: 24 }}>
            14-day free trial, then $9.99/month. Use code <strong style={{ color: C.tealLight }}>VENEZIA300</strong> for 3 months free.
          </p>

          <div className="lp-row" style={{ display: 'flex', gap: 0, maxWidth: 480 }}>
            <input
              type="email"
              placeholder="your@email.com"
              value={nlEmail}
              onChange={(e) => setNlEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleNewsletter()}
              style={{
                fontFamily: 'monospace', fontSize: 12, color: C.text,
                background: C.surface2, border: `1px solid ${nlError ? C.error : C.borderAccent}`,
                borderRight: 'none', padding: '12px 16px', flex: 1, outline: 'none', letterSpacing: '0.05em',
              }}
            />
            <button
              onClick={handleNewsletter}
              disabled={nlLoading}
              style={{
                fontFamily: 'monospace', fontSize: 11, letterSpacing: '0.18em',
                color: nlLoading ? C.textDim : C.bg,
                background: nlLoading ? C.surface2 : C.tealLight,
                border: `1px solid ${nlLoading ? C.border : C.tealLight}`,
                padding: '12px 22px', cursor: nlLoading ? 'not-allowed' : 'pointer',
                whiteSpace: 'nowrap', fontWeight: 700,
              }}
            >
              {nlLoading ? 'LOADING...' : 'START FREE TRIAL →'}
            </button>
          </div>
          {nlError && (
            <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.error, marginTop: 8 }}>◈ {nlError}</p>
          )}
          <p style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim, marginTop: 12, letterSpacing: '0.1em' }}>
            No charge for 14 days · Cancel anytime · Secured by Stripe
          </p>
        </div>

        {/* Footer */}
        <div style={{ marginTop: 40, fontFamily: 'monospace', fontSize: 11, color: C.textDim, lineHeight: 1.7, textAlign: 'center' }}>
          <Link href="/lp/es" style={{ color: C.textDim, textDecoration: 'underline', marginRight: 20 }}>Ver en Español</Link>
          <Link href="/" style={{ color: C.textDim, textDecoration: 'underline' }}>← limbiclab.com</Link>
        </div>
      </div>
    </main>
  )
}
