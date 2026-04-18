import Link from 'next/link'

const C = {
  bg: '#0a0a0a',
  surface: '#111111',
  border: '#1e1e1e',
  borderAccent: '#1a3a3a',
  text: '#e0e0e0',
  textDim: '#777777',
  textMid: '#aaaaaa',
  tealLight: '#2a9d9d',
}

export default async function StoreSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>
}) {
  const { type } = await searchParams
  const isGuide = type === 'guide'
  const isMembership = type === 'membership'

  return (
    <main
      style={{
        background: C.bg,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 24px',
      }}
    >
      <div
        style={{
          background: C.surface,
          border: `1px solid ${C.borderAccent}`,
          padding: '40px 36px',
          maxWidth: 520,
          width: '100%',
        }}
      >
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: 11,
            color: C.tealLight,
            letterSpacing: '0.22em',
            marginBottom: 16,
          }}
        >
          {`// ORDER CONFIRMED`}
        </div>

        <div
          style={{
            fontFamily: 'monospace',
            fontSize: 36,
            color: C.tealLight,
            marginBottom: 20,
          }}
        >
          ◈
        </div>

        {isGuide && (
          <>
            <h1
              style={{
                fontFamily: 'monospace',
                fontSize: 20,
                fontWeight: 700,
                color: C.text,
                letterSpacing: '0.06em',
                marginBottom: 14,
              }}
            >
              YOUR PDF IS ON ITS WAY
            </h1>
            <p
              style={{
                fontFamily: 'monospace',
                fontSize: 12,
                color: C.textDim,
                lineHeight: 1.8,
                marginBottom: 28,
              }}
            >
              The Dark Psychology Defense Guide will be delivered to your email shortly.
              Check your inbox — and your spam folder if you don&apos;t see it within a few minutes.
            </p>
          </>
        )}

        {isMembership && (
          <>
            <h1
              style={{
                fontFamily: 'monospace',
                fontSize: 20,
                fontWeight: 700,
                color: C.text,
                letterSpacing: '0.06em',
                marginBottom: 14,
              }}
            >
              WELCOME TO LIMBIC INTEL
            </h1>
            <p
              style={{
                fontFamily: 'monospace',
                fontSize: 12,
                color: C.textDim,
                lineHeight: 1.8,
                marginBottom: 28,
              }}
            >
              Your membership is active. Expect your first briefing at the start of the next cycle.
              We&apos;ll reach out to your email with onboarding details.
            </p>
          </>
        )}

        {!isGuide && !isMembership && (
          <>
            <h1
              style={{
                fontFamily: 'monospace',
                fontSize: 20,
                fontWeight: 700,
                color: C.text,
                letterSpacing: '0.06em',
                marginBottom: 14,
              }}
            >
              PAYMENT SUCCESSFUL
            </h1>
            <p
              style={{
                fontFamily: 'monospace',
                fontSize: 12,
                color: C.textDim,
                lineHeight: 1.8,
                marginBottom: 28,
              }}
            >
              Your order has been received. Check your email for confirmation and next steps.
            </p>
          </>
        )}

        <div
          style={{
            display: 'flex',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily: 'monospace',
              fontSize: 11,
              letterSpacing: '0.18em',
              color: C.bg,
              background: C.tealLight,
              border: `1px solid ${C.tealLight}`,
              padding: '9px 20px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            ← BACK TO HOME
          </Link>
          <Link
            href="/store"
            style={{
              fontFamily: 'monospace',
              fontSize: 11,
              letterSpacing: '0.18em',
              color: C.textMid,
              background: 'transparent',
              border: `1px solid ${C.border}`,
              padding: '9px 20px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            VIEW STORE
          </Link>
        </div>
      </div>
    </main>
  )
}
