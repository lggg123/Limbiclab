'use client'

import Link from 'next/link'
import { Logo } from './Logo'

const NAV_LINKS = [
  { href: '/simulator',         label: 'Simulator'    },
  { href: '/learn',             label: 'Learn'        },
  { href: '/brain',             label: 'Brain Atlas'  },
  { href: '/case-analysis',     label: 'Case Analysis'},
  { href: '/profile',           label: 'Profile'      },
  { href: '/satanism-research', label: 'Satanism'     },
  { href: '/bipolar',           label: 'Bipolar'      },
  { href: '/environmental-disorders', label: 'Environ.'  },
  { href: '/ebook',             label: 'E-Book'       },
  { href: '/store',             label: 'Store'        },
]

export function Navbar() {
  return (
    <nav
      style={{
        background: '#0a0a0a',
        borderBottom: '1px solid #1e1e1e',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          height: 56,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Logo size={36} wordmark />
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'monospace',
                fontSize: 11,
                letterSpacing: '0.12em',
                color: '#777',
                textDecoration: 'none',
                padding: '6px 10px',
                transition: 'color 0.15s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = '#e0e0e0')}
              onMouseOut={(e)  => (e.currentTarget.style.color = '#777')}
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
