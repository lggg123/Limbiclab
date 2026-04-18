import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'LimbicLab — Computational Neuroscience Research'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#020202',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'monospace',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Scanline texture overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.008) 3px, rgba(255,255,255,0.008) 4px)',
          }}
        />

        {/* Red glow top-left */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            left: -120,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(138,3,3,0.25) 0%, transparent 70%)',
          }}
        />
        {/* Red glow bottom-right */}
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            right: -100,
            width: 350,
            height: 350,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(138,3,3,0.15) 0%, transparent 70%)',
          }}
        />

        {/* Border frame */}
        <div
          style={{
            position: 'absolute',
            inset: 32,
            border: '1px solid #3a1010',
            display: 'flex',
          }}
        />
        {/* Inner accent lines */}
        <div
          style={{
            position: 'absolute',
            inset: 40,
            border: '1px solid #1a0808',
            display: 'flex',
          }}
        />

        {/* Corner marks */}
        {[
          { top: 28, left: 28 },
          { top: 28, right: 28 },
          { bottom: 28, left: 28 },
          { bottom: 28, right: 28 },
        ].map((pos, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              ...pos,
              width: 20,
              height: 20,
              borderTop: i < 2 ? '2px solid #8A0303' : 'none',
              borderBottom: i >= 2 ? '2px solid #8A0303' : 'none',
              borderLeft: i % 2 === 0 ? '2px solid #8A0303' : 'none',
              borderRight: i % 2 === 1 ? '2px solid #8A0303' : 'none',
            }}
          />
        ))}

        {/* Main content — logo + title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0,
            position: 'relative',
            zIndex: 10,
          }}
        >
          {/* Metallic inverted cross */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 300"
            width="80"
            height="120"
            style={{ marginBottom: 24 }}
          >
            <defs>
              <linearGradient id="mg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   style={{ stopColor: '#888888', stopOpacity: 1 }} />
                <stop offset="40%"  style={{ stopColor: '#cccccc', stopOpacity: 1 }} />
                <stop offset="60%"  style={{ stopColor: '#aaaaaa', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#555555', stopOpacity: 1 }} />
              </linearGradient>
              <filter id="sh">
                <feDropShadow dx="3" dy="3" stdDeviation="4" floodColor="#000000" floodOpacity="0.7" />
              </filter>
            </defs>
            <rect x="85" y="40" width="30" height="220" fill="url(#mg)" filter="url(#sh)" rx="2" ry="2" />
            <rect x="30" y="190" width="140" height="30" fill="url(#mg)" filter="url(#sh)" rx="2" ry="2" />
            <rect x="85" y="40" width="4" height="220" fill="#dddddd" opacity="0.3" rx="1" />
            <rect x="30" y="190" width="140" height="4" fill="#dddddd" opacity="0.3" rx="1" />
          </svg>

          {/* Site name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: '#e0e0e0',
              letterSpacing: '0.18em',
              lineHeight: 1,
              marginBottom: 14,
            }}
          >
            LIMBICLAB
          </div>

          {/* Crimson rule */}
          <div
            style={{
              width: 280,
              height: 1,
              background: 'linear-gradient(90deg, transparent, #8A0303, transparent)',
              marginBottom: 18,
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: 18,
              color: '#8A0303',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              marginBottom: 10,
            }}
          >
            Computational Neuroscience Research
          </div>

          {/* Sub-tagline */}
          <div
            style={{
              fontSize: 14,
              color: '#555',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            Brain · Belief · Neurochemistry · Epigenetics
          </div>
        </div>

        {/* Bottom status bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 52,
            left: 52,
            right: 52,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ fontSize: 11, color: '#333', letterSpacing: '0.2em' }}>
            limbiclab.com
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            {['SIMULATOR', 'BRAIN ATLAS', 'SATANISM RESEARCH', 'PSYCH PROFILE'].map((item) => (
              <div key={item} style={{ fontSize: 10, color: '#333', letterSpacing: '0.15em' }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
