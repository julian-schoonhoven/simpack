# Simpack

Production-ready marketing website for **Simpack** — an AI investment simulation platform for businesses.

## Tech stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command       | Description          |
|---------------|----------------------|
| `npm run dev` | Start dev server     |
| `npm run build` | Production build   |
| `npm run start` | Start production   |
| `npm run lint` | Run ESLint          |

## Pages

- `/` — Home (Hero, Features, How, Impact, About, FAQ)
- `/pricing` — Pricing tiers

## Project structure

```
src/
  app/           # Routes & layout
  components/
    brand/       # Logo
    layout/      # Navbar, Footer
    sections/    # Page sections
    ui/          # Button, Section primitives
  lib/           # Constants & utilities
public/
  favicon.svg
```
