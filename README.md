# Passagesport

A cyberpunk-themed football analysis and transfer intelligence web application. Built with TanStack Start and deployed on Netlify.

## What It Does

Passagesport delivers football content through three main sections:

- **Home** — Hero featuring live match analysis, breaking news grid, transfer hub preview, match stats comparison, and Premier League standings
- **Transfer Hub** — Filterable, sortable database of transfer deals with player stats, club info, fees, and contract details
- **Analysis** — Tactical deep-dives with xG comparisons, possession charts, tactical point breakdowns, and per-player ratings with expandable detail panels

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (React 19, TanStack Router v1) |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + custom CSS (CSS variables, keyframes) |
| Typography | Orbitron (display), Exo 2 (body), Share Tech Mono (data) — via Google Fonts |
| Icons | Inline SVG |
| Deployment | Netlify |

## Running Locally

```bash
npm install
npm run dev
```

The dev server starts on [http://localhost:3000](http://localhost:3000).

For Netlify feature emulation (edge functions, redirects, etc.):

```bash
netlify dev
```

This starts on port 8888.

## Build

```bash
npm run build
```

Output goes to `dist/client` (configured in `netlify.toml`).
