export function Footer() {
  return (
    <footer
      style={{
        background: 'var(--bg-panel)',
        borderTop: '1px solid var(--border)',
        marginTop: '80px',
        padding: '48px 24px 32px',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            marginBottom: '40px',
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '16px',
                fontWeight: 900,
                letterSpacing: '0.12em',
                color: 'var(--cyan)',
                textShadow: '0 0 16px rgba(0,212,245,0.5)',
                marginBottom: '12px',
              }}
            >
              PASSAGESPORT
            </div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                margin: 0,
              }}
            >
              The definitive source for football analysis, transfer intelligence,
              and tactical insights.
            </p>
          </div>

          {/* Sections */}
          {[
            {
              title: 'COVERAGE',
              links: ['Premier League', 'Champions League', 'La Liga', 'Bundesliga', 'Serie A', 'Ligue 1'],
            },
            {
              title: 'FEATURES',
              links: ['Transfer Hub', 'Tactical Analysis', 'Player Ratings', 'xG Metrics', 'Live Scores'],
            },
          ].map((col) => (
            <div key={col.title}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '9px',
                  letterSpacing: '0.22em',
                  color: 'var(--cyan)',
                  marginBottom: '14px',
                }}
              >
                {col.title}
              </div>
              {col.links.map((l) => (
                <div
                  key={l}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    color: 'var(--text-secondary)',
                    padding: '4px 0',
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--text-primary)')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--text-secondary)')}
                >
                  {l}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="section-divider" style={{ marginBottom: '24px' }} />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--text-muted)',
              letterSpacing: '0.1em',
            }}
          >
            © 2026 PASSAGESPORT — ALL RIGHTS RESERVED
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              color: 'var(--text-muted)',
              letterSpacing: '0.12em',
            }}
          >
            v2.4.1 // SYSTEM ONLINE
          </span>
        </div>
      </div>
    </footer>
  )
}
