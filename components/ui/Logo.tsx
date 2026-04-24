import React from 'react'

interface LogoProps {
  size?: number
  className?: string
  wordmark?: boolean
}

export function LogoMark({ size = 48, className }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      aria-label="LimbicLab"
    >
      <defs>
        <radialGradient id="ll-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#5ee0e0" />
          <stop offset="100%" stopColor="#1a7a7a" />
        </radialGradient>
        <radialGradient id="ll-node" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#3dbdbd" />
          <stop offset="100%" stopColor="#0f5252" />
        </radialGradient>
        <filter id="ll-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="ll-soft" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── Outer oval (brain boundary) ── */}
      <path d="M100,42 C122,40 140,50 155,64"    stroke="#2a9d9d" strokeWidth="1"   fill="none" opacity="0.22" strokeLinecap="round" />
      <path d="M155,64 C166,82 168,105 168,129"  stroke="#2a9d9d" strokeWidth="1"   fill="none" opacity="0.22" strokeLinecap="round" />
      <path d="M168,129 C162,141 150,149 130,152" stroke="#2a9d9d" strokeWidth="1"  fill="none" opacity="0.22" strokeLinecap="round" />
      <path d="M130,152 C115,158 85,158 70,152"  stroke="#2a9d9d" strokeWidth="1"   fill="none" opacity="0.22" strokeLinecap="round" />
      <path d="M70,152 C50,149 38,141 32,129"    stroke="#2a9d9d" strokeWidth="1"   fill="none" opacity="0.22" strokeLinecap="round" />
      <path d="M32,129 C32,105 34,82 45,64"      stroke="#2a9d9d" strokeWidth="1"   fill="none" opacity="0.22" strokeLinecap="round" />
      <path d="M45,64 C60,50 78,40 100,42"       stroke="#2a9d9d" strokeWidth="1"   fill="none" opacity="0.22" strokeLinecap="round" />

      {/* ── Axonal connections (core → satellites) ── */}
      <path d="M100,82 C100,68 100,56 100,42"      stroke="#2a9d9d" strokeWidth="2" fill="none" opacity="0.72" strokeLinecap="round" />
      <path d="M114,91 C130,80 142,73 155,64"      stroke="#2a9d9d" strokeWidth="2" fill="none" opacity="0.72" strokeLinecap="round" />
      <path d="M117,107 C135,108 150,117 168,129"  stroke="#2a9d9d" strokeWidth="2" fill="none" opacity="0.72" strokeLinecap="round" />
      <path d="M109,116 C117,128 123,138 130,152"  stroke="#2a9d9d" strokeWidth="2" fill="none" opacity="0.72" strokeLinecap="round" />
      <path d="M91,116 C83,128 77,138 70,152"      stroke="#2a9d9d" strokeWidth="2" fill="none" opacity="0.72" strokeLinecap="round" />
      <path d="M83,107 C65,108 50,117 32,129"      stroke="#2a9d9d" strokeWidth="2" fill="none" opacity="0.72" strokeLinecap="round" />
      <path d="M86,91 C70,80 58,73 45,64"          stroke="#2a9d9d" strokeWidth="2" fill="none" opacity="0.72" strokeLinecap="round" />

      {/* ── Synapse markers ── */}
      <circle cx="100" cy="62"  r="2.5" fill="#2a9d9d" opacity="0.9" />
      <circle cx="127" cy="77"  r="2.5" fill="#2a9d9d" opacity="0.9" />
      <circle cx="143" cy="118" r="2.5" fill="#2a9d9d" opacity="0.9" />
      <circle cx="119" cy="134" r="2.5" fill="#2a9d9d" opacity="0.9" />
      <circle cx="81"  cy="134" r="2.5" fill="#2a9d9d" opacity="0.9" />
      <circle cx="57"  cy="118" r="2.5" fill="#2a9d9d" opacity="0.9" />
      <circle cx="73"  cy="77"  r="2.5" fill="#2a9d9d" opacity="0.9" />

      {/* ── Satellite neurons ── */}
      <circle cx="100" cy="42"  r="6.5" fill="url(#ll-node)" filter="url(#ll-soft)" />
      <circle cx="155" cy="64"  r="6.5" fill="url(#ll-node)" filter="url(#ll-soft)" />
      <circle cx="168" cy="129" r="6.5" fill="url(#ll-node)" filter="url(#ll-soft)" />
      <circle cx="130" cy="152" r="6.5" fill="url(#ll-node)" filter="url(#ll-soft)" />
      <circle cx="70"  cy="152" r="6.5" fill="url(#ll-node)" filter="url(#ll-soft)" />
      <circle cx="32"  cy="129" r="6.5" fill="url(#ll-node)" filter="url(#ll-soft)" />
      <circle cx="45"  cy="64"  r="6.5" fill="url(#ll-node)" filter="url(#ll-soft)" />

      {/* ── Core soma ── */}
      <circle cx="100" cy="100" r="20"  fill="url(#ll-core)" filter="url(#ll-glow)" />
      <circle cx="100" cy="100" r="10"  fill="none" stroke="#7fffff" strokeWidth="1.5" opacity="0.45" />
      <circle cx="100" cy="100" r="4"   fill="#aaffff" opacity="0.55" />
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
            color: '#2a9d9d',
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
