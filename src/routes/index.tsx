import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'

export const Route = createFileRoute('/')({
  component: Home,
})

// ── Data ──────────────────────────────────────────────────────

const tickerItems = [
  'BREAKING: Alejandro Vega completes medical ahead of City move',
  'CONFIRMED: Nkosi Okafor joins Liverpool on 5-year deal — £56.2M',
  'UCL SEMIFINAL: PSG 5–4 Bayern Munchen — Full time',
  'Tomás Červenka set for Bernabéu medical this weekend',
  'Arsenal leading race for Dante Ferreira amid PSG interest',
  'Bayern Munich confirm Yuki Tanaka agreement — €29.4M fee',
  'RUMOUR: Juventus revive interest in Marcelo Vásquez',
  'Lukasz Petrov: "I am excited to join this project" — PSG announce deal',
]

const featuredNews = [
  {
    homeTeam: 'PSG',
  awayTeam: 'Bayern München',
  score: '5 — 4',
  stats: [
    { label: 'Possession', home: 58, away: 42, unit: '%' },
    { label: 'Shots', home: 16, away: 18, unit: '' },
    { label: 'xG', home: 3.85, away: 3.12, unit: '' },
    { label: 'Pass Acc.', home: 79, away: 83, unit: '%' },
    { label: 'Pressures', home: 103, away: 118, unit: '' },
  },
  {
    id: 2,
    tag: 'TRANSFER',
    tagColor: 'var(--cyan)',
    headline: 'Vega Deal Reaches Final Stages — City Confirm €78.3M Agreement',
    summary:
      'Manchester City have reached full agreement with Atlético Madrid for the midfielder, subject to personal terms and medical.',
    time: '4H AGO',
    category: 'PREMIER LEAGUE',
  },
  {
    id: 3,
    tag: 'ANALYSIS',
    tagColor: 'var(--magenta)',
    headline: "Arsenal's Inverted Fullback System: Why It's Breaking Every Defensive Shape",
    summary:
      "Arteta's revolutionary approach has created 34% more progressive carries than any side in the Premier League this season.",
    time: '6H AGO',
    category: 'TACTICAL',
  },
]

const transfers = [
  {
    player: 'Lukasz Petrov',
    age: 26,
    position: 'ST',
    from: 'Dynamo Kyiv',
    to: 'Paris SG',
    fee: '€47.3M',
    status: 'CONFIRMED',
    statusColor: 'var(--green)',
    nationality: 'UKR',
  },
  {
    player: 'Alejandro Vega',
    age: 22,
    position: 'CAM',
    from: 'Atlético Madrid',
    to: 'Man City',
    fee: '£73.8M',
    status: 'CONFIRMED',
    statusColor: 'var(--green)',
    nationality: 'ARG',
  },
  {
    player: 'Nkosi Okafor',
    age: 24,
    position: 'LW',
    from: 'Ajax',
    to: 'Liverpool',
    fee: '€56.2M',
    status: 'CONFIRMED',
    statusColor: 'var(--green)',
    nationality: 'NGA',
  },
  {
    player: 'Tomás Červenka',
    age: 28,
    position: 'CB',
    from: 'Napoli',
    to: 'Real Madrid',
    fee: '€38.9M',
    status: 'MEDICAL',
    statusColor: 'var(--yellow)',
    nationality: 'CZE',
  },
  {
    player: 'Dante Ferreira',
    age: 23,
    position: 'CDM',
    from: 'Santos FC',
    to: 'Arsenal',
    fee: '£41.6M',
    status: 'NEGOTIATING',
    statusColor: 'var(--cyan)',
    nationality: 'BRA',
  },
  {
    player: 'Yuki Tanaka',
    age: 27,
    position: 'RW',
    from: 'Urawa Reds',
    to: 'Bayern Munich',
    fee: '€29.4M',
    status: 'CONFIRMED',
    statusColor: 'var(--green)',
    nationality: 'JPN',
  },
]

const leagueTable = [
  { pos: 1, club: 'Manchester City', p: 35, w: 26, d: 5, l: 4, gd: '+51', pts: 83, form: ['W','W','W','D','W'] },
  { pos: 2, club: 'Arsenal',         p: 35, w: 24, d: 7, l: 4, gd: '+46', pts: 79, form: ['W','W','D','W','W'] },
  { pos: 3, club: 'Liverpool',       p: 35, w: 23, d: 5, l: 7, gd: '+38', pts: 74, form: ['D','W','W','L','W'] },
  { pos: 4, club: 'Chelsea',         p: 35, w: 20, d: 6, l: 9, gd: '+22', pts: 66, form: ['W','L','W','W','D'] },
  { pos: 5, club: 'Tottenham',       p: 35, w: 18, d: 7, l:10, gd: '+14', pts: 61, form: ['L','W','W','D','W'] },
  { pos: 6, club: 'Aston Villa',     p: 35, w: 17, d: 5, l:13, gd:  '+9', pts: 56, form: ['W','D','L','W','L'] },
  { pos: 7, club: 'Newcastle',       p: 35, w: 15, d: 8, l:12, gd:  '+6', pts: 53, form: ['D','W','D','W','L'] },
  { pos: 8, club: 'Man United',      p: 35, w: 12, d: 6, l:17, gd:  '-8', pts: 42, form: ['L','L','W','D','L'] },
]

const matchStats = {
 <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--yellow)', letterSpacing: '0.12em' }}>
  PSG
</span>
<span style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 900, color: 'var(--text-primary)' }}>
  5 — 4
</span>
<span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--text-secondary)', letterSpacing: '0.12em' }}>
  BAYERN MÜNCHEN
</span>
  ],
}

// ── Components ────────────────────────────────────────────────

function NewsTicker() {
  const items = [...tickerItems, ...tickerItems]
  return (
    <div
      style={{
        background: 'rgba(0,212,245,0.07)',
        borderTop: '1px solid rgba(0,212,245,0.25)',
        borderBottom: '1px solid rgba(0,212,245,0.25)',
        overflow: 'hidden',
        padding: '10px 0',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: 'max-content',
          animation: 'ticker-move 60s linear infinite',
          gap: '0',
        }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              letterSpacing: '0.08em',
              color: 'var(--text-primary)',
              whiteSpace: 'nowrap',
              padding: '0 32px',
              borderRight: '1px solid rgba(0,212,245,0.2)',
            }}
          >
            <span style={{ color: 'var(--cyan)', marginRight: '8px' }}>▶</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

function FormBadge({ result }: { result: string }) {
  const colors: Record<string, string> = {
    W: 'var(--green)',
    D: 'var(--yellow)',
    L: 'var(--magenta)',
  }
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '18px',
        height: '18px',
        fontSize: '9px',
        fontFamily: 'var(--font-mono)',
        fontWeight: 700,
        color: colors[result] || 'white',
        border: `1px solid ${colors[result] || 'white'}`,
        borderRadius: '2px',
        marginRight: '2px',
      }}
    >
      {result}
    </span>
  )
}

function StatBar({
  label,
  home,
  away,
  unit,
  delay,
}: {
  label: string
  home: number
  away: number
  unit: string
  delay: number
}) {
  const total = home + away
  const homePct = Math.round((home / total) * 100)
  const awayPct = 100 - homePct

  return (
    <div style={{ marginBottom: '16px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '6px',
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
        }}
      >
        <span style={{ color: 'var(--cyan)' }}>
          {home}
          {unit}
        </span>
        <span style={{ color: 'var(--text-secondary)', fontSize: '10px', letterSpacing: '0.12em' }}>
          {label}
        </span>
        <span style={{ color: 'var(--text-secondary)' }}>
          {away}
          {unit}
        </span>
      </div>
      <div style={{ display: 'flex', height: '5px', gap: '2px' }}>
        <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: '2px', overflow: 'hidden' }}>
          <div
            className="stat-bar-fill"
            style={{
              width: `${homePct}%`,
              background: 'var(--cyan)',
              animationDelay: `${delay}s`,
              float: 'right',
            }}
          />
        </div>
        <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: '2px', overflow: 'hidden' }}>
          <div
            className="stat-bar-fill"
            style={{
              width: `${awayPct}%`,
              background: 'var(--text-secondary)',
              animationDelay: `${delay + 0.1}s`,
            }}
          />
        </div>
      </div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────

function Home() {
  const [mounted, setMounted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div style={{ background: 'var(--bg-base)' }}>
      {/* ── HERO ── */}
      <section
        className="scanlines"
        style={{
          minHeight: '88vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: `
            radial-gradient(ellipse at 20% 70%, rgba(0,212,245,0.13) 0%, transparent 55%),
            radial-gradient(ellipse at 80% 30%, rgba(200,245,0,0.07) 0%, transparent 50%),
            radial-gradient(ellipse at 55% 90%, rgba(245,0,110,0.1) 0%, transparent 45%),
            var(--bg-base)
          `,
        }}
      >
        {/* Grid bg */}
        <div
          className="cyber-grid"
          style={{ position: 'absolute', inset: 0, opacity: 0.6 }}
        />

        {/* Diagonal accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: '22%',
            width: '2px',
            height: '100%',
            background: 'linear-gradient(180deg, transparent, var(--cyan), transparent)',
            opacity: 0.2,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: '44%',
            width: '1px',
            height: '100%',
            background: 'linear-gradient(180deg, transparent, var(--yellow), transparent)',
            opacity: 0.1,
          }}
        />

        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '60px 24px',
            position: 'relative',
            zIndex: 3,
            width: '100%',
          }}
        >
          <div style={{ maxWidth: '780px' }}>
            {/* Label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
              <span className="live-dot" />
              <span
                className="section-label"
                style={{ borderLeft: 'none', paddingLeft: 0, letterSpacing: '0.2em' }}
              >
                CHAMPIONS LEAGUE // SEMIFINAL // LEG 1
              </span>
            </div>

            {/* Score badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '24px',
                padding: '10px 20px',
                border: '1px solid rgba(200,245,0,0.35)',
                background: 'rgba(200,245,0,0.07)',
                clipPath: 'polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%)',
              }}
            >
             <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--yellow)', letterSpacing: '0.12em' }}>
  PSG
</span>
<span style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 900, color: 'var(--text-primary)' }}>
  5 — 4
</span>
<span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--text-secondary)', letterSpacing: '0.12em' }}>
  BAYERN MÜNCHEN
</span> 
            </div>

            {/* Main headline */}
            <h1
  className="glitch"
  data-text="9 GOALS. TWO STYLES. ONE WINNER."
  style={{...}}
>
  9 GOALS.<br />TWO STYLES.<br />ONE WINNER.
</h1>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                fontWeight: 300,
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
                maxWidth: '580px',
                marginBottom: '36px',
              }}
            >
            Dembélé, Fabian Ruiz, dan rotasi posisi cair Luis Enrique membongkar
  high press Bayern yang tidak terstruktur. 5 gol di babak pertama —
  rekor semifinal UCL. PSG menang 5–4 dalam laga yang akan dikenang sejarah.
            </p>

            {/* CTA row */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link to="/analysis" className="cyber-btn">
                Read Full Analysis
              </Link>
              <Link to="/transfers" className="cyber-btn cyber-btn-yellow">
                Transfer Hub
              </Link>
            </div>

            {/* Key stats row */}
            <div
              style={{
                display: 'flex',
                gap: '0',
                marginTop: '48px',
                borderTop: '1px solid var(--border)',
                paddingTop: '28px',
              }}
            >
              {[
              { label: 'xG (PSG)', value: '3.85' },
{ label: 'Total Goals', value: '9' },
{ label: 'Transitions', value: '34' },
{ label: 'Pass acc.', value: '79%' },
              ].map((s, i) => (
                <div
                  key={s.label}
                  style={{
                    flex: 1,
                    paddingRight: '24px',
                    marginRight: i < 3 ? '24px' : 0,
                    borderRight: i < 3 ? '1px solid var(--border)' : 'none',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(20px, 3vw, 30px)',
                      fontWeight: 800,
                      color: 'var(--cyan)',
                      textShadow: '0 0 16px rgba(0,212,245,0.5)',
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '9px',
                      letterSpacing: '0.16em',
                      color: 'var(--text-secondary)',
                      marginTop: '4px',
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '120px',
            background: 'linear-gradient(0deg, var(--bg-base) 0%, transparent 100%)',
            zIndex: 3,
          }}
        />
      </section>

      {/* ── TICKER ── */}
      <NewsTicker />

      {/* ── BREAKING NEWS ── */}
      <section
        ref={sectionRef as React.RefObject<HTMLElement>}
        style={{ maxWidth: '1280px', margin: '0 auto', padding: '72px 24px' }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '36px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div className="section-label" style={{ marginBottom: '8px' }}>
              // LATEST DISPATCHES
            </div>
            <h2 className="section-title" style={{ fontSize: 'clamp(20px, 3vw, 28px)', margin: 0 }}>
              BREAKING NEWS
            </h2>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              color: 'var(--text-secondary)',
              letterSpacing: '0.12em',
            }}
          >
            UPDATED // 02 MAY 2026 // 18:47 UTC
          </span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '16px',
          }}
        >
          {/* Featured large card */}
          <div
            className="cyber-card corner-cut"
            style={{
              gridColumn: 'span 12',
              padding: '0',
              overflow: 'hidden',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '0',
              }}
            >
              {/* Left: visual */}
              <div
                className="diagonal-bg"
                style={{
                  background: `
                    linear-gradient(135deg, rgba(200,245,0,0.08) 0%, transparent 60%),
                    var(--bg-card)
                  `,
                  padding: '36px',
                  position: 'relative',
                  minHeight: '280px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '24px',
                    left: '36px',
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'center',
                  }}
                >
                  <span
                    className="cyber-badge"
                    style={{ color: featuredNews[0].tagColor, borderColor: featuredNews[0].tagColor }}
                  >
                    {featuredNews[0].tag}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      color: 'var(--text-secondary)',
                      letterSpacing: '0.12em',
                    }}
                  >
                    {featuredNews[0].time}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(18px, 2.5vw, 26px)',
                    fontWeight: 700,
                    lineHeight: 1.2,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    color: 'var(--text-primary)',
                    margin: '0 0 14px 0',
                    maxWidth: '600px',
                  }}
                >
                  {featuredNews[0].headline}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                    margin: '0 0 16px 0',
                    lineHeight: '1.65',
                    maxWidth: '540px',
                  }}
                >
                  {featuredNews[0].summary}
                </p>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--yellow)',
                    letterSpacing: '0.1em',
                  }}
                >
                  {featuredNews[0].stat}
                </div>
              </div>

              {/* Right: accent panel */}
              <div
                style={{
                  width: '6px',
                  background: 'linear-gradient(180deg, var(--yellow) 0%, transparent 100%)',
                  opacity: 0.7,
                }}
              />
            </div>
          </div>

          {/* Smaller cards */}
          {featuredNews.slice(1).map((item) => (
            <div
              key={item.id}
              className="cyber-card corner-cut-sm"
              style={{
                gridColumn: 'span 6',
                padding: '28px',
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '14px' }}>
                <span
                  className="cyber-badge"
                  style={{ color: item.tagColor, borderColor: item.tagColor }}
                >
                  {item.tag}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    color: 'var(--text-secondary)',
                    letterSpacing: '0.1em',
                  }}
                >
                  {item.time}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '15px',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: 'var(--text-primary)',
                  margin: '0 0 10px 0',
                  lineHeight: 1.3,
                }}
              >
                {item.headline}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  margin: 0,
                  lineHeight: '1.6',
                }}
              >
                {item.summary}
              </p>
              <div
                style={{
                  marginTop: '16px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '9px',
                  letterSpacing: '0.16em',
                  color: item.tagColor,
                }}
              >
                {item.category} →
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" style={{ margin: '0 24px' }} />

      {/* ── TRANSFER HUB ── */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '72px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '36px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div className="section-label" style={{ marginBottom: '8px' }}>// TRANSFER INTELLIGENCE</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(20px, 3vw, 28px)', margin: 0 }}>
              TRANSFER HUB
            </h2>
          </div>
          <Link to="/transfers" className="cyber-btn cyber-btn-yellow" style={{ fontSize: '9px', padding: '7px 18px' }}>
            View All Transfers
          </Link>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '14px',
          }}
        >
          {transfers.map((t) => (
            <div
              key={t.player}
              className="cyber-card corner-cut-sm"
              style={{ padding: '22px', cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '14px',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      color: 'var(--text-primary)',
                      marginBottom: '4px',
                    }}
                  >
                    {t.player}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      color: 'var(--text-secondary)',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {t.nationality} · {t.position} · AGE {t.age}
                  </div>
                </div>
                <span
                  className="cyber-badge"
                  style={{ color: t.statusColor, borderColor: t.statusColor }}
                >
                  {t.status}
                </span>
              </div>

              {/* Transfer arrow */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 0',
                  borderTop: '1px solid var(--border)',
                  borderBottom: '1px solid var(--border)',
                  margin: '0 0 14px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--text-secondary)',
                    flex: 1,
                    textAlign: 'right',
                  }}
                >
                  {t.from}
                </span>
                <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
                  <line x1="0" y1="6" x2="20" y2="6" stroke="var(--yellow)" strokeWidth="1.5" />
                  <polyline points="14,1 20,6 14,11" fill="none" stroke="var(--yellow)" strokeWidth="1.5" />
                </svg>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--text-primary)',
                    flex: 1,
                  }}
                >
                  {t.to}
                </span>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '20px',
                  fontWeight: 800,
                  color: 'var(--yellow)',
                  textShadow: '0 0 12px rgba(200,245,0,0.5)',
                }}
              >
                {t.fee}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" style={{ margin: '0 24px' }} />

      {/* ── MATCH ANALYSIS + LEAGUE TABLE ── */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '72px 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px',
          }}
        >
          {/* Match Stats */}
          <div>
            <div className="section-label" style={{ marginBottom: '8px' }}>// MATCH BREAKDOWN</div>
            <h2 className="section-title" style={{ fontSize: '22px', margin: '0 0 24px' }}>
              REAL MADRID vs MAN CITY
            </h2>

            <div className="cyber-card corner-cut" style={{ padding: '28px' }}>
              {/* Score header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '28px',
                  paddingBottom: '20px',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--cyan)', letterSpacing: '0.14em' }}>HOME</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2px' }}>
                    REAL MADRID
                  </div>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: 900, color: 'var(--text-primary)' }}>
                  2 — 1
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-secondary)', letterSpacing: '0.14em' }}>AWAY</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: 700, color: 'var(--text-secondary)', marginTop: '2px' }}>
                    MAN CITY
                  </div>
                </div>
              </div>

              {/* Stat bars */}
              {mounted &&
                matchStats.stats.map((s, i) => (
                  <StatBar
                    key={s.label}
                    label={s.label}
                    home={s.home}
                    away={s.away}
                    unit={s.unit}
                    delay={i * 0.15}
                  />
                ))}

              <Link
                to="/analysis"
                className="cyber-btn"
                style={{ display: 'block', textAlign: 'center', marginTop: '20px', textDecoration: 'none' }}
              >
                Deep Tactical Breakdown
              </Link>
            </div>
          </div>

          {/* League Table */}
          <div>
            <div className="section-label" style={{ marginBottom: '8px' }}>// PREMIER LEAGUE 2025/26</div>
            <h2 className="section-title" style={{ fontSize: '22px', margin: '0 0 24px' }}>
              STANDINGS
            </h2>

            <div className="cyber-card corner-cut" style={{ padding: '0', overflow: 'hidden' }}>
              <table className="cyber-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>CLUB</th>
                    <th>P</th>
                    <th>W</th>
                    <th>GD</th>
                    <th>PTS</th>
                    <th>FORM</th>
                  </tr>
                </thead>
                <tbody>
                  {leagueTable.map((row) => {
                    const rowClass =
                      row.pos <= 4 ? 'top-4' : row.pos <= 6 ? 'top-6' : row.pos >= 8 ? 'relegation' : ''
                    return (
                      <tr key={row.pos} className={rowClass}>
                        <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>
                          {row.pos}
                        </td>
                        <td style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>{row.club}</td>
                        <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>{row.p}</td>
                        <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>{row.w}</td>
                        <td
                          style={{
                            fontFamily: 'var(--font-mono)',
                            color: row.gd.startsWith('+') ? 'var(--green)' : 'var(--magenta)',
                          }}
                        >
                          {row.gd}
                        </td>
                        <td
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontWeight: 700,
                            color: 'var(--cyan)',
                          }}
                        >
                          {row.pts}
                        </td>
                        <td>
                          {row.form.map((r, i) => (
                            <FormBadge key={i} result={r} />
                          ))}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>

              {/* Table legend */}
              <div
                style={{
                  display: 'flex',
                  gap: '20px',
                  padding: '12px 16px',
                  borderTop: '1px solid var(--border)',
                }}
              >
                {[
                  { color: 'var(--cyan)', label: 'UCL' },
                  { color: 'var(--yellow)', label: 'UEL' },
                  { color: 'var(--magenta)', label: 'RELEGATION' },
                ].map((l) => (
                  <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '12px', height: '2px', background: l.color }} />
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '9px',
                        letterSpacing: '0.14em',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {l.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
