# Simpack Brand Identity

Production visual system for Simpack — AI investment simulation & decision intelligence.

---

## Primary colors

| Name | Hex | Role |
|------|-----|------|
| **Deep Navy** | `#0F172A` | Foundation — text, containers, primary UI, dark backgrounds |
| **Teal Accent** | `#14B8A6` | Strategic accent — CTAs, nodes, charts, highlights, hovers |

### Supporting neutrals

| Name | Hex | Role |
|------|-----|------|
| **Cloud** | `#F8FAFC` | Light background, mark slabs on navy |
| **Surface** | `#FFFFFF` | Cards (light mode) |
| **Graphite** | `#64748B` | Muted text (light) |
| **Slate** | `#94A3B8` | Muted text (dark) |
| **Border** | `#E2E8F0` / `#1E293B` | Dividers (light / dark) |

### Teal scale

| Name | Hex | Role |
|------|-----|------|
| Teal hover | `#0D9488` | Button hover |
| Teal light | `#2DD4BF` | Chart gradients, dark highlights |
| Teal muted bg | `#CCFBF1` | Icon backgrounds (light) |

---

## Concept

The logomark is a **modular geometric S** — three precision slabs (input → simulation → output) with **teal decision-path bridges** and a **teal junction node** on a **deep navy** container.

---

## Logo files

| File | Use |
|------|-----|
| `public/brand/logo-mark.svg` | Primary icon (navy + teal) |
| `public/brand/logo-full.svg` | Mark + wordmark |
| `public/brand/logo-mono.svg` | Single navy, print |
| `public/brand/logo-on-dark.svg` | Light mark + teal on transparent |
| `public/brand/logo-icon-only.svg` | Mark without container |

---

## Dark mode

CSS variables in `src/app/globals.css` switch automatically via `prefers-color-scheme: dark`:

- Background → Deep Navy `#0F172A`
- Text → Cloud `#F8FAFC`
- Surfaces → `#1E293B` / `#162032`
- Teal accent unchanged for consistency

Utility `.glass` and `.text-gradient` adapt for dark surfaces.

---

## CSS tokens

```css
--color-brand-navy: #0f172a;
--color-brand-teal: #14b8a6;
--color-accent: #14b8a6;
--color-navy: #0f172a;
```

---

## Typography

- **Inter** (600 wordmark, 400–600 UI)
- Letter-spacing wordmark: `-0.02em`

---

## Usage

- **Navy** — navbar, primary buttons, section foundations, logo container
- **Teal** — primary conversion CTAs (`variant="accent"`), eyebrow dots, chart bars, pricing badge, logo node
- Never use teal as full-page background; keep it accent-level

---

## Favicon

Regenerate after mark changes: `npm run brand:favicon`

---

## Next.js

```tsx
import { Logo } from "@/components/brand/Logo";
import { SimpackMark } from "@/components/brand/SimpackMark";

<Logo />
<Button variant="accent">Try Simpack</Button>
```

Metadata icons: `src/app/layout.tsx` · `src/app/icon.svg`
