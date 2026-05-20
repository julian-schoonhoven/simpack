# Simpack Brand Identity

Production visual system for Simpack — AI investment simulation & decision intelligence.

---

## Concept

The logomark is a **modular geometric S** built from three precision slabs connected by decision-path bridges. It communicates:

- **Structured systems** — grid-aligned modules
- **Simulation flow** — connectors between stages (input → engine → output)
- **Decision intelligence** — accent node at the junction (scenario branch point)

The mark is original, not typographic clip-art. No AI clichés, charts, or circuit imagery.

---

## Logo files

| File | Use |
|------|-----|
| `public/brand/logo-mark.svg` | Primary icon (48×48, navy container) |
| `public/brand/logo-full.svg` | Mark + wordmark, light backgrounds |
| `public/brand/logo-mono.svg` | Single-color, print / legal |
| `public/brand/logo-on-dark.svg` | Mark + wordmark on dark surfaces |

React component: `src/components/brand/SimpackMark.tsx`  
Variants: `color` · `mono` · `on-dark` · `favicon`

---

## Color palette

| Token | Hex | Role |
|-------|-----|------|
| **Ink** | `#0A101F` | Primary brand, text, mark container |
| **Graphite** | `#3D4F66` | Secondary text |
| **Slate** | `#64748B` | Muted UI copy |
| **Cloud** | `#FAFBFC` | Background, mark slabs on dark |
| **Surface** | `#FFFFFF` | Cards, panels |
| **Electric** | `#1E5EFF` | Primary accent, CTA, decision node |
| **Cyan** | `#38BDF8` | Dark-mode accent, highlights |
| **Indigo** | `#4F46E5` | Secondary accent (gradients) |
| **Border** | `#E2E8F0` | Dividers, inputs |

### CSS variables (in `globals.css`)

```css
--color-brand-ink: #0a101f;
--color-brand-electric: #1e5eff;
--color-brand-cyan: #38bdf8;
```

---

## Typography

| Role | Family | Weight | Notes |
|------|--------|--------|-------|
| UI & marketing | **Inter** | 400–600 | Loaded via `next/font` |
| Wordmark | Inter | 600 | Letter-spacing `-0.02em` |
| Data / metrics | Inter | 500–600 | Tabular nums where needed |

Alternatives for future brand extension: Geist, Satoshi, Aeonik.

**Scale**

- Display (hero): 40–56px / semibold / tracking-tight
- H2 (sections): 32–40px / semibold
- Body: 16–18px / regular / relaxed leading
- Caption: 12–14px / medium / muted color

---

## Spacing & layout

- **Logo clear space**: minimum padding = height of one slab (7px at 48px mark scale) on all sides
- **Minimum mark size**: 16px (favicon only); 24px+ for UI; 32px+ navbar
- **Section rhythm**: 80–112px vertical padding (mobile → desktop)
- **Corner radius**: cards `16–24px` (xl–2xl); buttons `12–16px`

---

## Logo usage

### Do

- Use `logo-full.svg` on light backgrounds
- Use `logo-on-dark.svg` on navy/graphite sections
- Use `logo-mono.svg` for fax, emboss, or single-ink print
- Keep the decision node visible at 32px and above
- Scale proportionally (never stretch)

### Don’t

- Rotate or skew the mark
- Change slab colors independently (breaks system metaphor)
- Place mark on busy photography without a scrim
- Use gradients inside the mark
- Swap the wordmark for another typeface

---

## Favicon

| File | Size | Notes |
|------|------|-------|
| `public/favicon.svg` | Scalable | Primary browser icon |
| `public/favicon-32.svg` | 32×32 | Crisp tab icon |
| `public/favicon-16.svg` | 16×16 | Pixel-snapped, no connectors |
| `public/favicon.ico` | 16+32 multi | Legacy browsers |
| `src/app/icon.svg` | 32×32 | Next.js App Router metadata |

16px variant drops thin connectors; uses square decision node for legibility.

---

## Next.js integration

See `src/app/layout.tsx` for `metadata.icons`.  
Regenerate `.ico` after mark changes: `npm run brand:favicon`.
