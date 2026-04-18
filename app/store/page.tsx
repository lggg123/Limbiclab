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

const GUIDE_FEATURES = [
  'Identify 12 dark psychology manipulation tactics',
  'Neuroscience-backed defense frameworks',
  'Covert narcissism recognition patterns',
  'Emotional blackmail deconstruction toolkit',
  'Field-tested boundary-setting scripts',
  'Instant PDF download after purchase',
]

const MEMBERSHIP_FEATURES = [
  'Monthly deep-dive neuroscience briefings',
  'Early access to LimbicLab research drops',
  'Psychological case study breakdowns',
  'Dark pattern analysis of cultural events',
  'Members-only annotated reading lists',
  'Cancel anytime — no commitment',
]

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
      {items.map((item) => (
        <li
          key={item}
          style={{
            fontFamily: 'monospace',
            fontSize: 12,
            color: C.textMid,
            lineHeight: 1.7,
            display: 'flex',
            alignItems: 'flex-start',
            gap: 8,
            marginBottom: 6,
          }}
        >
          <span style={{ color: C.tealLight, flexShrink: 0 }}>◈</span>
          {item}
        </li>
      ))}
    </ul>
  )
}

function ProductCard({
  tag,
  title,
  description,
  features,
  price,
  priceNote,
  product,
}: {
  tag: string
  title: string
  description: string
  features: string[]
  price: string
  priceNote: string
  product: 'guide' | 'membership'
}) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleCheckout() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product }),
      })
      const data = await res.json()
      if (!res.ok || !data.url) {
        throw new Error(data.error || 'Checkout failed')
      }
      window.location.href = data.url
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
      setLoading(false)
    }
  }

  return (
    <div
      style={{
        background: C.surface,
        border: `1px solid ${C.borderAccent}`,
        padding: '28px 26px 24px',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      }}
    >
      <div
        style={{
          fontFamily: 'monospace',
          fontSize: 10,
          color: C.tealLight,
          letterSpacing: '0.22em',
          border: `1px solid ${C.tealLight}`,
          display: 'inline-block',
          padding: '2px 8px',
          marginBottom: 16,
        }}
      >
        {tag}
      </div>

      <h2
        style={{
          fontFamily: 'monospace',
          fontSize: 18,
          fontWeight: 700,
          color: C.text,
          letterSpacing: '0.06em',
          marginBottom: 12,
          lineHeight: 1.3,
        }}
      >
        {title}
      </h2>

      <p
        style={{
          fontFamily: 'monospace',
          fontSize: 12,
          color: C.textDim,
          lineHeight: 1.7,
          marginBottom: 22,
        }}
      >
        {description}
      </p>

      <FeatureList items={features} />

      <div style={{ marginTop: 'auto' }}>
        <div style={{ marginBottom: 16 }}>
          <span
            style={{
              fontFamily: 'monospace',
              fontSize: 28,
              fontWeight: 700,
              color: C.text,
              letterSpacing: '0.04em',
            }}
          >
            {price}
          </span>
          <span
            style={{
              fontFamily: 'monospace',
              fontSize: 11,
              color: C.textDim,
              marginLeft: 6,
            }}
          >
            {priceNote}
          </span>
        </div>

        {error && (
          <p
            style={{
              fontFamily: 'monospace',
              fontSize: 11,
              color: '#8A0303',
              marginBottom: 10,
            }}
          >
            ◈ {error}
          </p>
        )}

        <button
          onClick={handleCheckout}
          disabled={loading}
          style={{
            fontFamily: 'monospace',
            fontSize: 11,
            letterSpacing: '0.18em',
            color: loading ? C.textDim : C.bg,
            background: loading ? C.surface2 : C.tealLight,
            border: `1px solid ${loading ? C.border : C.tealLight}`,
            padding: '10px 24px',
            cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'all 0.15s',
            width: '100%',
          }}
          onMouseOver={(e) => {
            if (!loading) {
              e.currentTarget.style.background = C.teal
              e.currentTarget.style.borderColor = C.teal
            }
          }}
          onMouseOut={(e) => {
            if (!loading) {
              e.currentTarget.style.background = C.tealLight
              e.currentTarget.style.borderColor = C.tealLight
            }
          }}
        >
          {loading ? 'REDIRECTING...' : product === 'guide' ? 'GET THE GUIDE →' : 'START MEMBERSHIP →'}
        </button>
      </div>
    </div>
  )
}

export default function StorePage() {
  return (
    <main style={{ background: C.bg, minHeight: '100vh', padding: '60px 24px 80px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div
            style={{
              fontFamily: 'monospace',
              fontSize: 11,
              color: C.tealLight,
              letterSpacing: '0.22em',
              marginBottom: 12,
            }}
          >
            {`// STORE`}
          </div>
          <h1
            style={{
              fontFamily: 'monospace',
              fontSize: 28,
              fontWeight: 700,
              color: C.text,
              letterSpacing: '0.08em',
              marginBottom: 14,
            }}
          >
            LIMBICLAB RESOURCES
          </h1>
          <p
            style={{
              fontFamily: 'monospace',
              fontSize: 13,
              color: C.textDim,
              lineHeight: 1.7,
              maxWidth: 580,
            }}
          >
            Applied neuroscience and psychological defense tools — built from the research.
            Payments are secured by Stripe.
          </p>
        </div>

        {/* Product Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 20,
          }}
        >
          <ProductCard
            tag="ONE-TIME PURCHASE"
            title="Dark Psychology Defense Guide"
            description="A field manual for recognizing covert manipulation, narcissistic abuse patterns, and dark triad behavior — grounded in neuroscience and clinical psychology research."
            features={GUIDE_FEATURES}
            price="$27"
            priceNote="one-time · instant download"
            product="guide"
          />
          <ProductCard
            tag="MONTHLY SUBSCRIPTION"
            title="Limbic Intel Monthly"
            description="A curated monthly intelligence briefing on the neuroscience of behavior, psychological case studies, and emerging research on mind, memory, and manipulation."
            features={MEMBERSHIP_FEATURES}
            price="$9.99"
            priceNote="/ month · cancel anytime"
            product="membership"
          />
        </div>

        {/* Footer note */}
        <div
          style={{
            marginTop: 48,
            paddingTop: 24,
            borderTop: `1px solid ${C.border}`,
            fontFamily: 'monospace',
            fontSize: 11,
            color: C.textDim,
            lineHeight: 1.7,
          }}
        >
          <span style={{ color: C.tealLight }}>◈</span> All transactions processed securely via Stripe.{' '}
          <Link href="/" style={{ color: C.textDim, textDecoration: 'underline' }}>
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  )
}
