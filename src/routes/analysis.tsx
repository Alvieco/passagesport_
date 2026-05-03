import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/analysis')({
  component: AnalysisPage,
})

const ANALYSES = [
  {
    id: 1,
    match: 'Real Madrid vs Manchester City',
    competition: 'UCL Semifinal · Leg 1',
    date: '01 MAY 2026',
    score: '2–1',
    tag: 'TACTICAL',
    tagColor: 'var(--cyan)',
    headline: "The Low-Block Trap: How Madrid Turned City's Possession Into a Weapon Against Them",
    summary:
      "Ancelotti's side absorbed 65% possession and responded with clinical counter-attacks, generating a higher xG than City despite fewer touches in the final third. An in-depth look at the press triggers, transition sequences, and Bellingham's movement patterns.",
    keyInsight: 'Madrid had 11 counter-attacks — 7 created clear chances. City had 19 crosses, 0 goals.',
    author: 'RAFAEL MENEZES',
    readTime: '12 MIN READ',
    xG: { home: 2.41, away: 1.87 },
    possession: { home: 35, away: 65 },
    tacticalPoints: [
      'Bellingham dropped to create 3v2 superiority in central transitions',
      'Rodrygo\'s decoy runs opened the left channel 8 times in 90 minutes',
      'Madrid\'s mid-block set at 40m line — not a classic low block',
      'City\'s inverted fullbacks struggled against Madrid\'s wide pressing traps',
    ],
    playerRatings: [
      { name: 'Bellingham', pos: 'CAM', rating: 9.2, goals: 2, assists: 0, keyPasses: 4 },
      { name: 'Rüdiger', pos: 'CB', rating: 8.7, goals: 0, assists: 0, keyPasses: 1 },
      { name: 'Rodrygo', pos: 'RW', rating: 8.4, goals: 0, assists: 1, keyPasses: 5 },
      { name: 'Haaland', pos: 'ST', rating: 6.1, goals: 1, assists: 0, keyPasses: 2 },
      { name: 'De Bruyne', pos: 'CM', rating: 7.3, goals: 0, assists: 1, keyPasses: 7 },
    ],
    formation: {
      home: '4-3-3',
      away: '3-2-4-1',
    },
  },
  {
    id: 2,
    match: 'Arsenal vs Liverpool',
    competition: 'Premier League · GW 36',
    date: '27 APR 2026',
    score: '3–1',
    tag: 'DEEP DIVE',
    tagColor: 'var(--yellow)',
    headline: "Arsenal's Inverted Fullback System: The Most Innovative Shape in European Football Right Now",
    summary:
      "Arteta's 3-2-5 shape in possession — disguised as a 4-3-3 at rest — creates structural overloads that no Premier League team has found an answer to. After dismantling Liverpool, we break down the specific rotations that make it impossible to defend.",
    keyInsight: '34% more progressive carries than any PL side this season. 8th consecutive win.',
    author: 'DIANA KOWALSKI',
    readTime: '15 MIN READ',
    xG: { home: 2.88, away: 1.12 },
    possession: { home: 57, away: 43 },
    tacticalPoints: [
      'White and Timber invert to form a double pivot, freeing Odegaard',
      '5 players consistently appearing in or ahead of the opposition half-line',
      'Havertz\'s pressing triggers account for 41% of Arsenal\'s ball recoveries',
      'Liverpool\'s high line exploited by diagonal through-balls 6 times',
    ],
    playerRatings: [
      { name: 'Saka', pos: 'RW', rating: 9.1, goals: 1, assists: 2, keyPasses: 6 },
      { name: 'Odegaard', pos: 'CAM', rating: 8.9, goals: 2, assists: 1, keyPasses: 5 },
      { name: 'Havertz', pos: 'ST', rating: 8.3, goals: 0, assists: 1, keyPasses: 3 },
      { name: 'Salah', pos: 'RW', rating: 6.8, goals: 1, assists: 0, keyPasses: 3 },
      { name: 'Núñez', pos: 'ST', rating: 5.9, goals: 0, assists: 0, keyPasses: 1 },
    ],
    formation: {
      home: '4-3-3',
      away: '4-3-3',
    },
  },
  {
    id: 3,
    match: 'Bayern Munich vs Dortmund',
    competition: 'Bundesliga · GW 32 · Der Klassiker',
    date: '22 APR 2026',
    score: '4–2',
    tag: 'KLASSIKER',
    tagColor: 'var(--magenta)',
    headline: "Kane and Tanaka's Devastating Partnership Dismantles Dortmund's Compact Mid-Block",
    summary:
      'Harry Kane and new signing Yuki Tanaka combined for 3 goals and 4 assists in an emphatic Der Klassiker victory. The chemistry between the two was built on Tanaka\'s diagonal dribbles and Kane\'s intelligent off-ball movement.',
    keyInsight: 'Kane–Tanaka combined: 3G + 4A. Bayern won every aerial duel in the box.',
    author: 'HANS MÜLLER-BRANDT',
    readTime: '10 MIN READ',
    xG: { home: 3.62, away: 1.44 },
    possession: { home: 54, away: 46 },
    tacticalPoints: [
      'Tanaka\'s diagonal cuts from right wing created 3 pockets for Kane',
      'Bayern\'s gegenpress won ball 18 times in Dortmund half',
      'Dortmund\'s mid-block set too deep — gave Bayern time to switch flanks',
      'Neuer\'s distribution launched 6 counter-attacks directly',
    ],
    playerRatings: [
      { name: 'Kane', pos: 'ST', rating: 9.4, goals: 2, assists: 2, keyPasses: 4 },
      { name: 'Tanaka', pos: 'RW', rating: 9.0, goals: 1, assists: 2, keyPasses: 7 },
      { name: 'Kimmich', pos: 'CM', rating: 8.2, goals: 1, assists: 0, keyPasses: 6 },
      { name: 'Adeyemi', pos: 'LW', rating: 7.1, goals: 1, assists: 0, keyPasses: 4 },
      { name: 'Reus', pos: 'CAM', rating: 6.4, goals: 1, assists: 0, keyPasses: 3 },
    ],
    formation: {
      home: '4-2-3-1',
      away: '4-2-3-1',
    },
  },{
    id: 4,
    match: 'PSG vs Bayern München',
    competition: 'UCL Semifinal · Leg 1',
    date: '01 MAY 2025',
    score: '5–4',
    tag: 'TACTICAL',
    tagColor: 'var(--cyan)',
    headline: "9 Goals, Two Philosophies: How PSG's Fluid Rotations Dismantled Bayern's Man Press",
    summary:
      "Luis Enrique's side exploited Bayern's unstructured man-to-man press through fluid positional rotations and long balls behind the line. 5 goals in the first half — a UCL semifinal record. Enrique then switched to reactive football to protect the lead.",
    keyInsight: 'PSG scored 3 goals directly from transition phases. Bayern pressed 47 times, won ball only 11.',
    author: 'PASSAGESPORT',
    readTime: '14 MIN READ',
    xG: { home: 3.85, away: 3.12 },
    possession: { home: 58, away: 42 },
    tacticalPoints: [
      "Bayern's man press had no structural symmetry — Stanisic tracked Zaïre-Emery into the center",
      'Hakimi inverted to winger, giving Dembélé freedom to roam as false striker',
      "PSG's long ball game bypassed Bayern's high press 12 times in 90 minutes",
      'Enrique switched to reactive 4-4-2 block at 5-2 — possession dropped from 63% to 44%',
    ],
    playerRatings: [
      { name: 'Dembélé', pos: 'RW', rating: 8.8, goals: 1, assists: 2, keyPasses: 5 },
      { name: 'Fabian Ruiz', pos: 'CM', rating: 8.5, goals: 2, assists: 0, keyPasses: 3 },
      { name: 'Hakimi', pos: 'RB', rating: 8.2, goals: 0, assists: 1, keyPasses: 4 },
      { name: 'Olise', pos: 'RW', rating: 8.3, goals: 1, assists: 0, keyPasses: 5 },
      { name: 'Kane', pos: 'ST', rating: 8.1, goals: 1, assists: 1, keyPasses: 3 },
    ],
    formation: {
      home: '4-3-3',
      away: '4-2-3-1',
    },
  },
]

function RatingCircle({ value }: { value: number }) {
  const color = value >= 9 ? 'var(--yellow)' : value >= 8 ? 'var(--cyan)' : value >= 7 ? 'var(--green)' : 'var(--text-secondary)'
  return (
    <div
      style={{
        width: '42px',
        height: '42px',
        border: `2px solid ${color}`,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `${color}18`,
        boxShadow: `0 0 10px ${color}44`,
        flexShrink: 0,
      }}
    >
      <span style={{ fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: 800, color }}>
        {value}
      </span>
    </div>
  )
}

function XGBar({ home, away, homeTeam, awayTeam }: { home: number; away: number; homeTeam: string; awayTeam: string }) {
  const max = Math.max(home, away, 3)
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.16em', color: 'var(--text-secondary)', marginBottom: '8px' }}>
        xG COMPARISON
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '6px' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-secondary)', width: '70px', textAlign: 'right', flexShrink: 0 }}>
          {homeTeam.split(' ')[0].toUpperCase()}
        </span>
        <div style={{ flex: 1, height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '3px', overflow: 'hidden' }}>
          <div
            className="stat-bar-fill"
            style={{ width: `${(home / max) * 100}%`, background: 'var(--cyan)' }}
          />
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--cyan)', fontWeight: 700, width: '36px' }}>
          {home}
        </span>
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-secondary)', width: '70px', textAlign: 'right', flexShrink: 0 }}>
          {awayTeam.split(' ')[0].toUpperCase()}
        </span>
        <div style={{ flex: 1, height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '3px', overflow: 'hidden' }}>
          <div
            className="stat-bar-fill"
            style={{ width: `${(away / max) * 100}%`, background: 'var(--text-secondary)' }}
          />
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-secondary)', width: '36px' }}>
          {away}
        </span>
      </div>
    </div>
  )
}

function AnalysisCard({ analysis, featured }: { analysis: typeof ANALYSES[0]; featured?: boolean }) {
  const [open, setOpen] = useState(false)
  const [homeTeam, awayTeam] = analysis.match.split(' vs ')

  return (
    <div
      className={`cyber-card ${featured ? 'corner-cut' : 'corner-cut-sm'}`}
      style={{ overflow: 'hidden', cursor: 'pointer' }}
    >
      {/* Top bar */}
      <div style={{ height: '3px', background: `linear-gradient(90deg, ${analysis.tagColor}, transparent)` }} />

      <div style={{ padding: featured ? '32px' : '24px' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span className="cyber-badge" style={{ color: analysis.tagColor, borderColor: analysis.tagColor }}>
              {analysis.tag}
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-secondary)', letterSpacing: '0.1em' }}>
              {analysis.competition}
            </span>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-secondary)', letterSpacing: '0.1em' }}>
            {analysis.date}
          </span>
        </div>

        {/* Score */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '18px',
            padding: '8px 16px',
            border: '1px solid var(--border)',
            background: 'rgba(0,0,0,0.3)',
            clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)',
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-primary)', letterSpacing: '0.08em' }}>
            {homeTeam}
          </span>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 900, color: 'var(--cyan)', textShadow: '0 0 12px rgba(0,212,245,0.5)' }}>
            {analysis.score}
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-secondary)', letterSpacing: '0.08em' }}>
            {awayTeam}
          </span>
        </div>

        {/* Headline */}
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: featured ? 'clamp(16px, 2vw, 22px)' : '15px',
            fontWeight: 700,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            lineHeight: 1.25,
            color: 'var(--text-primary)',
            margin: '0 0 12px',
          }}
        >
          {analysis.headline}
        </h2>

        <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: '0 0 18px' }}>
          {analysis.summary}
        </p>

        {/* Key insight */}
        <div
          style={{
            background: 'rgba(0,212,245,0.06)',
            border: '1px solid rgba(0,212,245,0.2)',
            borderLeft: '3px solid var(--cyan)',
            padding: '10px 14px',
            marginBottom: '20px',
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.16em', color: 'var(--cyan)', display: 'block', marginBottom: '4px' }}>
            KEY INSIGHT
          </span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-primary)' }}>
            {analysis.keyInsight}
          </span>
        </div>

        {/* Meta row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: open ? '24px' : 0 }}>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.14em', color: 'var(--text-secondary)' }}>
              BY {analysis.author}
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.14em', color: 'var(--text-secondary)' }}>
              {analysis.readTime}
            </span>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="cyber-btn"
            style={{ fontSize: '9px', padding: '6px 16px' }}
          >
            {open ? 'COLLAPSE' : 'DEEP DIVE'}
          </button>
        </div>

        {/* Expanded detail */}
        {open && (
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '24px', marginTop: '4px' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '20px',
                marginBottom: '24px',
              }}
            >
              {/* xG */}
              <div className="cyber-card" style={{ padding: '18px', border: '1px solid var(--border)' }}>
                <XGBar home={analysis.xG.home} away={analysis.xG.away} homeTeam={homeTeam} awayTeam={awayTeam} />
              </div>

              {/* Possession */}
              <div className="cyber-card" style={{ padding: '18px', border: '1px solid var(--border)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.16em', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                  POSSESSION
                </div>
                <div style={{ display: 'flex', height: '20px', borderRadius: '2px', overflow: 'hidden', gap: '2px' }}>
                  <div className="stat-bar-fill" style={{ width: `${analysis.possession.home}%`, background: 'var(--cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--bg-base)', fontWeight: 700 }}>
                      {analysis.possession.home}%
                    </span>
                  </div>
                  <div style={{ flex: 1, background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text-secondary)', fontWeight: 700 }}>
                      {analysis.possession.away}%
                    </span>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--cyan)' }}>{homeTeam.split(' ')[0]}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text-secondary)' }}>{awayTeam.split(' ')[0]}</span>
                </div>
              </div>
            </div>

            {/* Tactical points */}
            <div style={{ marginBottom: '24px' }}>
              <div className="section-label" style={{ marginBottom: '12px' }}>TACTICAL OBSERVATIONS</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {analysis.tacticalPoints.map((point, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      gap: '12px',
                      padding: '10px 14px',
                      background: 'rgba(0,0,0,0.2)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--cyan)', flexShrink: 0 }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-primary)' }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Player ratings */}
            <div>
              <div className="section-label" style={{ marginBottom: '12px' }}>PLAYER RATINGS</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {analysis.playerRatings.sort((a, b) => b.rating - a.rating).map((p) => (
                  <div
                    key={p.name}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '10px 14px',
                      background: 'rgba(0,0,0,0.2)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <RatingCircle value={p.rating} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {p.name}
                      </div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text-secondary)', letterSpacing: '0.1em', marginTop: '2px' }}>
                        {p.pos}
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '16px' }}>
                      {[
                        { label: 'G', value: p.goals },
                        { label: 'A', value: p.assists },
                        { label: 'KP', value: p.keyPasses },
                      ].map((s) => (
                        <div key={s.label} style={{ textAlign: 'center' }}>
                          <div style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)' }}>
                            {s.value}
                          </div>
                          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', letterSpacing: '0.12em', color: 'var(--text-secondary)' }}>
                            {s.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function AnalysisPage() {
  return (
    <div style={{ background: 'var(--bg-base)', minHeight: '100vh' }}>
      {/* Hero */}
      <div
        style={{
          background: `
            radial-gradient(ellipse at 70% 40%, rgba(0,212,245,0.1) 0%, transparent 55%),
            radial-gradient(ellipse at 20% 80%, rgba(245,0,110,0.08) 0%, transparent 50%),
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
          <div className="section-label" style={{ marginBottom: '10px' }}>// TACTICAL INTELLIGENCE</div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 900,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--text-primary)',
              margin: '0 0 16px',
            }}
          >
            MATCH ANALYSIS
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--text-secondary)', maxWidth: '500px', margin: 0, lineHeight: 1.7 }}>
            Tactical breakdowns, xG deep dives, and formation intelligence from football's top competitions.
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '48px 24px' }}>
        {/* Featured */}
        <div style={{ marginBottom: '16px' }}>
          <div className="section-label" style={{ marginBottom: '16px' }}>// FEATURED ANALYSIS</div>
          <AnalysisCard analysis={ANALYSES[0]} featured />
        </div>

        {/* Grid */}
        <div style={{ marginTop: '24px' }}>
          <div className="section-label" style={{ marginBottom: '16px' }}>// MORE ANALYSIS</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '16px' }}>
            {ANALYSES.slice(1).map((a) => (
              <AnalysisCard key={a.id} analysis={a} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
