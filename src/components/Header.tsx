import { Link, useLocation } from '@tanstack/react-router'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'HOME' },
  { to: '/transfers', label: 'TRANSFERS' },
  { to: '/analysis', label: 'ANALYSIS' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(7, 9, 15, 0.96)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(0, 212, 245, 0.18)',
      }}
    >
      {/* Rainbow top accent line */}
      <div
        style={{
          height: '2px',
          background: 'linear-gradient(90deg, var(--magenta) 0%, var(--cyan) 40%, var(--yellow) 100%)',
        }}
      />

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <HexBallIcon />
          <span
            className="glitch neon-flicker"
            data-text="PASSAGESPORT"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '17px',
              fontWeight: 900,
              letterSpacing: '0.12em',
              color: 'var(--cyan)',
              textShadow: '0 0 20px rgba(0,212,245,0.6)',
            }}
          >
            PASSAGESPORT
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="hidden md:flex">
          {navItems.map(({ to, label }) => {
            const active = location.pathname === to
            return (
              <Link
                key={to}
                to={to}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  padding: '6px 16px',
                  textDecoration: 'none',
                  color: active ? 'var(--cyan)' : 'var(--text-secondary)',
                  textShadow: active ? '0 0 10px rgba(0,212,245,0.5)' : 'none',
                  borderBottom: active ? '1px solid var(--cyan)' : '1px solid transparent',
                  transition: 'color 0.2s, border-color 0.2s',
                  position: 'relative',
                }}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              padding: '5px 12px',
              border: '1px solid rgba(245,0,110,0.4)',
              background: 'rgba(245,0,110,0.07)',
              clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)',
            }}
          >
            <span className="live-dot" />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.15em',
                color: 'var(--magenta)',
              }}
            >
              LIVE
            </span>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            style={{
              display: 'none',
              background: 'none',
              border: '1px solid var(--border)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              padding: '6px 10px',
            }}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <line x1="0" y1="1" x2="18" y2="1" stroke="currentColor" strokeWidth="1.5" />
              <line x1="0" y1="7" x2="18" y2="7" stroke="currentColor" strokeWidth="1.5" />
              <line x1="0" y1="13" x2="18" y2="13" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: 'rgba(7,9,15,0.98)',
            borderTop: '1px solid var(--border)',
            padding: '16px 24px',
          }}
        >
          {navItems.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                fontFamily: 'var(--font-display)',
                fontSize: '12px',
                letterSpacing: '0.18em',
                color: location.pathname === to ? 'var(--cyan)' : 'var(--text-secondary)',
                padding: '12px 0',
                textDecoration: 'none',
                borderBottom: '1px solid var(--border)',
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

function HexBallIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <polygon
        points="17,2 30,9 30,25 17,32 4,25 4,9"
        fill="rgba(0,212,245,0.1)"
        stroke="var(--cyan)"
        strokeWidth="1.2"
      />
      <circle cx="17" cy="17" r="7" fill="none" stroke="var(--cyan)" strokeWidth="1" />
      <line x1="17" y1="10" x2="17" y2="24" stroke="var(--cyan)" strokeWidth="0.7" opacity="0.6" />
      <line x1="10" y1="17" x2="24" y2="17" stroke="var(--cyan)" strokeWidth="0.7" opacity="0.6" />
      <line x1="12.1" y1="12.1" x2="21.9" y2="21.9" stroke="var(--cyan)" strokeWidth="0.5" opacity="0.4" />
      <line x1="21.9" y1="12.1" x2="12.1" y2="21.9" stroke="var(--cyan)" strokeWidth="0.5" opacity="0.4" />
    </svg>
  )
}
