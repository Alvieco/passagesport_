import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/transfers')({
  component: TransfersPage,
})

const ALL_TRANSFERS = [
  {
    player: 'Lukasz Petrov',
    age: 26,
    position: 'ST',
    from: 'Dynamo Kyiv',
    fromLeague: 'Ukrainian PL',
    to: 'Paris SG',
    toLeague: 'Ligue 1',
    fee: '€47.3M',
    feeRaw: 47.3,
    status: 'CONFIRMED',
    statusColor: 'var(--green)',
    nationality: 'UKR',
    date: '01 MAY 2026',
    contractYears: 5,
    rating: 83,
    stats: { goals: 24, assists: 9, apps: 38 },
  },
  {
    player: 'Alejandro Vega',
    age: 22,
    position: 'CAM',
    from: 'Atlético Madrid',
    fromLeague: 'La Liga',
    to: 'Man City',
    toLeague: 'Premier League',
    fee: '£73.8M',
    feeRaw: 73.8,
    status: 'CONFIRMED',
    statusColor: 'var(--green)',
    nationality: 'ARG',
    date: '30 APR 2026',
    contractYears: 6,
    rating: 86,
    stats: { goals: 17, assists: 22, apps: 42 },
  },
  {
    player: 'Nkosi Okafor',
    age: 24,
    position: 'LW',
    from: 'Ajax',
    fromLeague: 'Eredivisie',
    to: 'Liverpool',
    toLeague: 'Premier League',
    fee: '€56.2M',
    feeRaw: 56.2,
    status: 'CONFIRMED',
    statusColor: 'var(--green)',
    nationality: 'NGA',
    date: '28 APR 2026',
    contractYears: 5,
    rating: 84,
    stats: { goals: 21, assists: 14, apps: 40 },
  },
  {
    player: 'Tomás Červenka',
    age: 28,
    position: 'CB',
    from: 'Napoli',
    fromLeague: 'Serie A',
    to: 'Real Madrid',
    toLeague: 'La Liga',
    fee: '€38.9M',
    feeRaw: 38.9,
    status: 'MEDICAL',
    statusColor: 'var(--yellow)',
    nationality: 'CZE',
    date: '02 MAY 2026',
    contractYears: 4,
    rating: 85,
    stats: { goals: 4, assists: 3, apps: 34 },
  },
  {
    player: 'Dante Ferreira',
    age: 23,
    position: 'CDM',
    from: 'Santos FC',
    fromLeague: 'Brasileiro',
    to: 'Arsenal',
    toLeague: 'Premier League',
    fee: '£41.6M',
    feeRaw: 41.6,
    status: 'NEGOTIATING',
    statusColor: 'var(--cyan)',
    nationality: 'BRA',
    date: '02 MAY 2026',
    contractYears: 5,
    rating: 82,
    stats: { goals: 6, assists: 11, apps: 37 },
  },
  {
    player: 'Yuki Tanaka',
    age: 27,
    position: 'RW',
    from: 'Urawa Reds',
    fromLeague: 'J-League',
    to: 'Bayern Munich',
    toLeague: 'Bundesliga',
    fee: '€29.4M',
    feeRaw: 29.4,
    status: 'CONFIRMED',
    statusColor: 'var(--green)',
    nationality: 'JPN',
    date: '27 APR 2026',
    contractYears: 4,
    rating: 81,
    stats: { goals: 19, assists: 18, apps: 44 },
  },
  {
    player: 'Marcelo Vásquez',
    age: 29,
    position: 'CM',
    from: 'Inter Milan',
    fromLeague: 'Serie A',
    to: 'Juventus',
    toLeague: 'Serie A',
    fee: '€22.7M',
    feeRaw: 22.7,
    status: 'RUMOUR',
    statusColor: 'var(--text-secondary)',
    nationality: 'URU',
    date: '01 MAY 2026',
    contractYears: 3,
    rating: 80,
    stats: { goals: 8, assists: 16, apps: 39 },
  },
  {
    player: 'Kofi Agyemang',
    age: 21,
    position: 'ST',
    from: 'Bayer Leverkusen',
    fromLeague: 'Bundesliga',
    to: 'Chelsea',
    toLeague: 'Premier League',
    fee: '£65.0M',
    feeRaw: 65.0,
    status: 'NEGOTIATING',
    statusColor: 'var(--cyan)',
    nationality: 'GHA',
    date: '29 APR 2026',
    contractYears: 6,
    rating: 84,
    stats: { goals: 28, assists: 7, apps: 41 },
  },
]

const POSITIONS = ['ALL', 'ST', 'LW', 'RW', 'CAM', 'CM', 'CDM', 'CB']
const STATUSES = ['ALL', 'CONFIRMED', 'MEDICAL', 'NEGOTIATING', 'RUMOUR']

function PositionBadge({ pos }: { pos: string }) {
  const colors: Record<string, string> = {
    ST: 'var(--magenta)',
    LW: 'var(--yellow)',
    RW: 'var(--yellow)',
    CAM: 'var(--yellow)',
    CM: 'var(--cyan)',
    CDM: 'var(--cyan)',
    CB: 'var(--green)',
    GK: 'var(--green)',
  }
  const c = colors[pos] || 'var(--text-secondary)'
  return (
    <span
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '9px',
        letterSpacing: '0.14em',
        color: c,
        border: `1px solid ${c}`,
        padding: '2px 7px',
        background: `rgba(0,0,0,0.3)`,
      }}
    >
      {pos}
    </span>
  )
}

function RatingBar({ value }: { value: number }) {
  const pct = ((value - 70) / 20) * 100
  const color = value >= 85 ? 'var(--yellow)' : value >= 82 ? 'var(--cyan)' : 'var(--green)'
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <div style={{ flex: 1, height: '4px', background: 'rgba(255,255,255,0.07)', borderRadius: '2px', overflow: 'hidden' }}>
        <div
          className="stat-bar-fill"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 700, color, minWidth: '28px' }}>
        {value}
      </span>
    </div>
  )
}

function TransfersPage() {
  const [posFilter, setPosFilter] = useState('ALL')
  const [statusFilter, setStatusFilter] = useState('ALL')
  const [sortBy, setSortBy] = useState<'fee' | 'date' | 'rating'>('date')

  const filtered = ALL_TRANSFERS
    .filter((t) => posFilter === 'ALL' || t.position === posFilter)
    .filter((t) => statusFilter === 'ALL' || t.status === statusFilter)
    .sort((a, b) => {
      if (sortBy === 'fee') return b.feeRaw - a.feeRaw
      if (sortBy === 'rating') return b.rating - a.rating
      return 0
    })

  const confirmed = ALL_TRANSFERS.filter((t) => t.status === 'CONFIRMED').length
  const totalSpend = ALL_TRANSFERS.reduce((s, t) => s + t.feeRaw, 0)

  return (
    <div style={{ background: 'var(--bg-base)', minHeight: '100vh' }}>
      {/* ── Page Hero ── */}
      <div
        style={{
          background: `
            radial-gradient(ellipse at 60% 50%, rgba(200,245,0,0.08) 0%, transparent 55%),
            radial-gradient(ellipse at 15% 80%, rgba(0,212,245,0.1) 0%, transparent 50%),
            var(--bg-panel)
          `,
          borderBottom: '1px solid var(--border)',
          padding: '60px 24px 48px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="cyber-grid" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="section-label" style={{ marginBottom: '10px' }}>
            // TRANSFER INTELLIGENCE CENTRE
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 900,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--text-primary)',
              margin: '0 0 32px',
            }}
          >
            TRANSFER HUB
          </h1>

          {/* Summary stats */}
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
            {[
              { label: 'TOTAL DEALS', value: `${ALL_TRANSFERS.length}`, color: 'var(--cyan)' },
              { label: 'CONFIRMED', value: `${confirmed}`, color: 'var(--green)' },
              { label: 'TOTAL SPEND', value: `€${totalSpend.toFixed(0)}M+`, color: 'var(--yellow)' },
              { label: 'WINDOW', value: 'SUMMER 2026', color: 'var(--text-secondary)' },
            ].map((s) => (
              <div key={s.label} style={{ paddingRight: '32px', borderRight: '1px solid var(--border)' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '28px',
                    fontWeight: 800,
                    color: s.color,
                    textShadow: `0 0 12px ${s.color}88`,
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.18em', color: 'var(--text-secondary)', marginTop: '4px' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Filters ── */}
      <div
        style={{
          background: 'rgba(0,212,245,0.04)',
          borderBottom: '1px solid var(--border)',
          padding: '16px 24px',
          position: 'sticky',
          top: '66px',
          zIndex: 40,
          backdropFilter: 'blur(10px)',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          {/* Position filter */}
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text-secondary)', letterSpacing: '0.16em', marginRight: '4px' }}>
              POS:
            </span>
            {POSITIONS.map((p) => (
              <button
                key={p}
                onClick={() => setPosFilter(p)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '9px',
                  letterSpacing: '0.14em',
                  padding: '4px 10px',
                  border: '1px solid',
                  borderColor: posFilter === p ? 'var(--cyan)' : 'var(--border)',
                  background: posFilter === p ? 'rgba(0,212,245,0.12)' : 'transparent',
                  color: posFilter === p ? 'var(--cyan)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {p}
              </button>
            ))}
          </div>

          <div style={{ height: '20px', width: '1px', background: 'var(--border)' }} />

          {/* Status filter */}
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text-secondary)', letterSpacing: '0.16em', marginRight: '4px' }}>
              STATUS:
            </span>
            {STATUSES.map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '9px',
                  letterSpacing: '0.12em',
                  padding: '4px 10px',
                  border: '1px solid',
                  borderColor: statusFilter === s ? 'var(--cyan)' : 'var(--border)',
                  background: statusFilter === s ? 'rgba(0,212,245,0.12)' : 'transparent',
                  color: statusFilter === s ? 'var(--cyan)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {s}
              </button>
            ))}
          </div>

          <div style={{ marginLeft: 'auto', display: 'flex', gap: '6px', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text-secondary)', letterSpacing: '0.14em' }}>SORT:</span>
            {(['fee', 'date', 'rating'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setSortBy(s)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '9px',
                  letterSpacing: '0.12em',
                  padding: '4px 10px',
                  border: '1px solid',
                  borderColor: sortBy === s ? 'var(--yellow)' : 'var(--border)',
                  background: sortBy === s ? 'rgba(200,245,0,0.1)' : 'transparent',
                  color: sortBy === s ? 'var(--yellow)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  textTransform: 'uppercase',
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Transfer Cards ── */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px' }}>
        {filtered.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '80px 24px',
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              letterSpacing: '0.14em',
              color: 'var(--text-secondary)',
            }}
          >
            // NO TRANSFERS MATCH CURRENT FILTERS
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '16px',
            }}
          >
            {filtered.map((t) => (
              <div
                key={t.player}
                className="cyber-card corner-cut"
                style={{ padding: '0', overflow: 'hidden', cursor: 'pointer' }}
              >
                {/* Top status bar */}
                <div
                  style={{
                    height: '3px',
                    background: t.statusColor,
                    boxShadow: `0 0 10px ${t.statusColor}`,
                  }}
                />

                <div style={{ padding: '24px' }}>
                  {/* Header row */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '18px',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '16px',
                          fontWeight: 700,
                          letterSpacing: '0.05em',
                          color: 'var(--text-primary)',
                          marginBottom: '6px',
                        }}
                      >
                        {t.player}
                      </div>
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <PositionBadge pos={t.position} />
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '10px',
                            color: 'var(--text-secondary)',
                            letterSpacing: '0.1em',
                          }}
                        >
                          {t.nationality} · {t.age}y
                        </span>
                      </div>
                    </div>
                    <span
                      className="cyber-badge"
                      style={{ color: t.statusColor, borderColor: t.statusColor, flexShrink: 0 }}
                    >
                      {t.status}
                    </span>
                  </div>

                  {/* Transfer path */}
                  <div
                    style={{
                      background: 'rgba(0,0,0,0.3)',
                      padding: '14px',
                      marginBottom: '16px',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text-secondary)', letterSpacing: '0.14em', marginBottom: '3px' }}>
                          FROM
                        </div>
                        <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>
                          {t.from}
                        </div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                          {t.fromLeague}
                        </div>
                      </div>

                      <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
                        <line x1="0" y1="10" x2="26" y2="10" stroke="var(--yellow)" strokeWidth="1.5" />
                        <polyline points="18,3 26,10 18,17" fill="none" stroke="var(--yellow)" strokeWidth="1.5" />
                      </svg>

                      <div style={{ flex: 1, textAlign: 'right' }}>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--yellow)', letterSpacing: '0.14em', marginBottom: '3px' }}>
                          TO
                        </div>
                        <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>
                          {t.to}
                        </div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                          {t.toLeague}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats row */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr 1fr',
                      gap: '8px',
                      marginBottom: '16px',
                    }}
                  >
                    {[
                      { label: 'GOALS', value: t.stats.goals },
                      { label: 'ASSISTS', value: t.stats.assists },
                      { label: 'APPS', value: t.stats.apps },
                    ].map((s) => (
                      <div
                        key={s.label}
                        style={{
                          textAlign: 'center',
                          padding: '8px',
                          background: 'rgba(0,0,0,0.2)',
                          border: '1px solid var(--border)',
                        }}
                      >
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)' }}>
                          {s.value}
                        </div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', letterSpacing: '0.14em', color: 'var(--text-secondary)', marginTop: '2px' }}>
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Rating bar */}
                  <div style={{ marginBottom: '14px' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text-secondary)', letterSpacing: '0.14em', marginBottom: '6px' }}>
                      OVERALL RATING
                    </div>
                    <RatingBar value={t.rating} />
                  </div>

                  {/* Footer row */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingTop: '14px',
                      borderTop: '1px solid var(--border)',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '22px',
                          fontWeight: 900,
                          color: 'var(--yellow)',
                          textShadow: '0 0 12px rgba(200,245,0,0.4)',
                        }}
                      >
                        {t.fee}
                      </div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text-secondary)', letterSpacing: '0.1em', marginTop: '2px' }}>
                        {t.contractYears}Y CONTRACT
                      </div>
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '9px',
                        color: 'var(--text-secondary)',
                        letterSpacing: '0.1em',
                        textAlign: 'right',
                      }}
                    >
                      {t.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
