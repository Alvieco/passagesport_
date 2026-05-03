# AGENTS.md

This document describes the architecture and conventions for the Passagesport project, for developers and AI agents working on this codebase.

## Project Overview

Passagesport is a cyberpunk-themed football analysis and transfer news website. Built with TanStack Start (React 19 + TanStack Router v1) and deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (React 19, TanStack Router v1) |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + custom CSS variables/animations |
| Typography | Orbitron, Exo 2, Share Tech Mono (Google Fonts) |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
src/
├── components/
│   ├── Header.tsx       # Fixed top nav: logo, route links, LIVE badge, mobile menu
│   └── Footer.tsx       # Site footer with coverage and feature columns
├── routes/
│   ├── __root.tsx       # Root layout: fonts in head(), Header + Outlet + Footer
│   ├── index.tsx        # Homepage: hero, ticker, news grid, transfers, stats, league table
│   ├── transfers.tsx    # Transfer hub: filterable/sortable player transfer cards
│   └── analysis.tsx     # Match analysis: expandable tactical breakdowns
├── router.tsx           # TanStack Router setup
└── styles.css           # Tailwind + cyberpunk design tokens and animations
```

## Design System

All design tokens are CSS custom properties in `src/styles.css`:

| Token | Value | Use |
|-------|-------|-----|
| `--bg-base` | `#07090f` | Page background |
| `--bg-card` | `#0c1019` | Card surfaces |
| `--cyan` | `#00d4f5` | Primary neon, borders, active states |
| `--yellow` | `#c8f500` | Transfer fees, secondary accent |
| `--magenta` | `#f5006e` | LIVE indicator, danger, alerts |
| `--green` | `#00f5a0` | Confirmed status, positive values |
| `--font-display` | Orbitron | Headings, score, buttons |
| `--font-body` | Exo 2 | Summaries, descriptions |
| `--font-mono` | Share Tech Mono | Stats, timestamps, labels |

### Key CSS Classes

- `.cyber-card` — dark card with animated top-left cyan line, hover glow
- `.corner-cut` / `.corner-cut-sm` — diagonal clip-path corners (18px / 10px)
- `.glitch` — dual-layer glitch animation; requires `data-text` attribute matching visible text
- `.scanlines` — CRT scanline overlay via `::after`
- `.cyber-grid` — repeating cyan grid as background texture
- `.cyber-badge` — skewed status pill
- `.cyber-btn` — skewed CTA button with hover fill
- `.section-label` — `// MONOSPACE` left-bordered label
- `.live-dot` — blinking magenta dot
- `.neon-cyan/yellow/magenta` — colored text with matching text-shadow glow

## Routing

| File | Route |
|------|-------|
| `__root.tsx` | Shell (no URL) |
| `index.tsx` | `/` |
| `transfers.tsx` | `/transfers` |
| `analysis.tsx` | `/analysis` |

## Data

All content is static arrays at the top of each route file. To connect to a real backend, replace these with TanStack Start server functions or route loaders.

## Conventions

- **TypeScript strict mode** — all files, `type` keyword for type-only imports
- **No code comments on obvious logic** — only non-obvious invariants
- **Design tokens via CSS variables** — use `style={{ color: 'var(--cyan)' }}` for token values; Tailwind for layout/spacing
- **Route files are self-contained** — data arrays, sub-components, and page component in the same file
- **Shared components only** — `src/components/` is only for Header and Footer

## Non-Obvious Decisions

- `__root.tsx` uses both `component` (Header + Outlet + Footer) and `shellComponent` (HTML document) — TanStack Start's split-responsibility pattern
- The `glitch` CSS class requires `data-text={text}` matching visible text content to work
- The news ticker duplicates its items array so the CSS `translateX` loop is visually seamless
- Stat bar animations only run after `mounted = true` in the homepage to avoid SSR hydration mismatches

## Development Commands

```bash
npm run dev    # Dev server on port 3000
npm run build  # Production build to dist/client
netlify dev    # Netlify emulation on port 8888
```
