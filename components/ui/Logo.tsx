import React from 'react'

interface LogoProps {
  size?: number
  className?: string
  wordmark?: boolean
}

export function LogoMark({ size = 48, className }: { size?: number; className?: string }) {
  const w = size
  const h = size * 1.5

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 300"
      width={w}
      height={h}
      className={className}
      aria-label="LimbicLab — inverted cross"
    >
      <defs>
        <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   style={{ stopColor: '#888888', stopOpacity: 1 }} />
          <stop offset="40%"  style={{ stopColor: '#cccccc', stopOpacity: 1 }} />
          <stop offset="60%"  style={{ stopColor: '#aaaaaa', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#555555', stopOpacity: 1 }} />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="3" dy="3" stdDeviation="4" floodColor="#000000" floodOpacity="0.7" />
        </filter>
      </defs>

      {/* Vertical beam */}
      <rect x="85" y="40" width="30" height="220"
        fill="url(#metalGrad)"
        filter="url(#shadow)"
        rx="2" ry="2"
      />
      {/* Horizontal beam */}
      <rect x="30" y="190" width="140" height="30"
        fill="url(#metalGrad)"
        filter="url(#shadow)"
        rx="2" ry="2"
      />
      {/* Edge highlight — vertical */}
      <rect x="85" y="40" width="4" height="220" fill="#dddddd" opacity="0.3" rx="1" />
      {/* Edge highlight — horizontal */}
      <rect x="30" y="190" width="140" height="4" fill="#dddddd" opacity="0.3" rx="1" />
    </svg>
  )
}

export function Logo({ size = 48, wordmark = true, className }: LogoProps) {
  if (!wordmark) return <LogoMark size={size} className={className} />

  return (
    <div className={`flex items-center gap-3 ${className ?? ''}`}>
      <LogoMark size={size} />
      <div style={{ fontFamily: 'monospace' }}>
        <div
          style={{
            fontSize: size * 0.28,
            fontWeight: 700,
            color: '#e0e0e0',
            letterSpacing: '0.12em',
            lineHeight: 1.1,
          }}
        >
          LIMBICLAB
        </div>
        <div
          style={{
            fontSize: size * 0.18,
            color: '#8A0303',
            letterSpacing: '0.22em',
            lineHeight: 1.2,
          }}
        >
          NEURO RESEARCH
        </div>
      </div>
    </div>
  )
}
