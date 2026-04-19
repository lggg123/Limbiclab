'use client'

import { useState, useEffect } from 'react'
import EbookReader from './EbookReader'
import { trackLead } from '@/lib/fbq'

const C = {
  bg: '#030305',
  border: '#161625',
  accent: '#2a9d9d',
  text: '#d4d4e0',
  textDim: '#3a3a52',
  textMid: '#8888a0',
}

const STORAGE_KEY = 'limbiclab_ebook_unlocked'

export default function EbookUnlocker() {
  const [unlocked, setUnlocked] = useState(false)
  const [checked, setChecked] = useState(false)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === '1') {
      setUnlocked(true)
    }
    setChecked(true)
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), source: 'ebook' }),
      })

      if (!res.ok) {
        const data = await res.json()
        setError(data.error || 'Something went wrong.')
        return
      }

      trackLead('ebook')
      localStorage.setItem(STORAGE_KEY, '1')
      setSubmitted(true)

      setTimeout(() => setUnlocked(true), 800)
    } catch {
      setError('Network error — please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (!checked) return null
  if (unlocked) return <EbookReader />

  return (
    <div style={{
      background: C.bg, minHeight: '100vh', display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      fontFamily: 'monospace', padding: '24px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* grid bg */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'linear-gradient(rgba(42,157,157,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(42,157,157,0.03) 1px,transparent 1px)',
        backgroundSize: '48px 48px',
      }} />

      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: 480, width: '100%',
        border: `1px solid ${C.border}`,
        background: 'rgba(7,7,14,0.95)',
        padding: '48px 40px',
        textAlign: 'center',
      }}>
        {/* tag */}
        <div style={{
          fontSize: 9, letterSpacing: '0.28em', color: C.accent,
          border: `1px solid rgba(42,157,157,0.25)`, display: 'inline-block',
          padding: '4px 14px', marginBottom: 28,
        }}>
          E-BOOK · FREE ACCESS
        </div>

        {/* cover icon */}
        <div style={{
          width: 64, height: 80, margin: '0 auto 24px',
          border: `1px solid rgba(42,157,157,0.3)`,
          background: 'rgba(42,157,157,0.05)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.accent} strokeWidth="1.5" strokeLinecap="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
        </div>

        <h1 style={{
          fontSize: 18, fontWeight: 700, color: C.text,
          letterSpacing: '0.04em', marginBottom: 8, lineHeight: 1.4,
        }}>
          The Neuroscience of the Dark
        </h1>

        <p style={{
          fontSize: 11, color: C.textMid, lineHeight: 1.75,
          marginBottom: 32, maxWidth: 340, margin: '0 auto 32px',
        }}>
          Five chapters. Bipolar oscillation, environmental trauma, ritual neuroscience,
          suicidality convergence, and the creative brain. 21+ citations.
        </p>

        {submitted ? (
          <div style={{
            border: `1px solid rgba(42,157,157,0.3)`,
            background: 'rgba(42,157,157,0.05)',
            padding: '16px 24px',
            fontSize: 12, color: C.accent, letterSpacing: '0.1em',
          }}>
            ✓ UNLOCKING EBOOK...
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 12 }}>
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%', boxSizing: 'border-box',
                  background: '#0a0a0f', border: `1px solid ${C.border}`,
                  color: C.text, fontFamily: 'monospace', fontSize: 13,
                  padding: '12px 16px', outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(42,157,157,0.5)')}
                onBlur={(e) => (e.target.style.borderColor = C.border)}
              />
            </div>

            {error && (
              <p style={{ fontSize: 11, color: '#8A0303', marginBottom: 12, letterSpacing: '0.05em' }}>
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%', background: C.accent,
                border: `1px solid ${C.accent}`,
                color: '#030305', fontFamily: 'monospace',
                fontSize: 11, fontWeight: 700, letterSpacing: '0.2em',
                padding: '13px 0', cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1, transition: 'background 0.15s',
              }}
            >
              {loading ? 'UNLOCKING...' : 'GET FREE ACCESS →'}
            </button>

            <p style={{
              fontSize: 10, color: C.textDim, marginTop: 14,
              letterSpacing: '0.08em', lineHeight: 1.6,
            }}>
              No spam. Unsubscribe anytime. We may send you a newsletter trial offer.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
