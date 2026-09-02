---
name: NeoCore for Enterprise
description: NeoSapien's brand world applied to enterprise — soft ground, Outfit type, mint-gradient cards over dark product insets, brand green #00df79. Light + dark themes.
themes: [light, dark]
colors:
  green: "#00df79"
  green-ink: "#04160c"
  light:
    ground: "#ebebeb"
    surface: "#ffffff"
    card-gradient: ["#d4f4e2", "#f4fbf7"]
    ink: "#0e1512"
    ink-2: "#566159"
    ink-3: "#8a938c"
    green-text: "#04945a"
    btn-bg: "#1f2623"
    btn-text: "#00df79"
  dark:
    ground: "#0a0f0c"
    surface: "#121a15"
    card-gradient: ["#12301f", "#0e1712"]
    ink: "#eef4ef"
    ink-2: "#a6b3aa"
    ink-3: "#74827a"
    green-text: "#45e79b"
    btn-bg: "#00df79"
    btn-text: "#04160c"
  inset:
    bg: "#1f2623"
    bg-2: "#2b332e"
    ink: "#eef4f0"
typography:
  display: { fontFamily: "Outfit Variable, Outfit, system-ui, sans-serif", fontSize: "clamp(2.7rem, 5vw, 4.4rem)", fontWeight: 300, emphasisWeight: 600, letterSpacing: "-0.02em" }
  h2: { fontFamily: "Outfit Variable", fontSize: "clamp(2rem, 3.6vw, 3.1rem)", fontWeight: 400, emphasisWeight: 600 }
  h3: { fontFamily: "Outfit Variable", fontSize: "clamp(1.35rem, 2vw, 1.75rem)", fontWeight: 500 }
  lede: { fontFamily: "Outfit Variable", fontSize: "clamp(1.08rem, 1.4vw, 1.3rem)", fontWeight: 400, color: "ink-2" }
  body: { fontFamily: "Outfit Variable", fontSize: "1.0625rem", fontWeight: 400 }
rounded: { s: "14px", m: "22px", l: "32px", pill: "999px" }
components:
  pill-button: { bg: "{btn-bg}", text: "{btn-text}", radius: "{rounded.pill}", icon: "green circle badge" }
  ghost-button: { bg: "{surface}", border: "border-2", radius: "{rounded.pill}" }
  card: { fill: "mint gradient {card-gradient}", radius: "{rounded.l}", shadow: soft }
  card-plain: { fill: "{surface}", radius: "{rounded.m}" }
  inset: { fill: "{inset.bg}", radius: "{rounded.m}", note: "dark product 'screen' — dark in BOTH themes" }
  chip: { fill: "{surface}", radius: "{rounded.pill}", marker: "green dot" }
  nav: { style: "floating white/dark rounded pill bar, sticky, soft shadow" }
---

# Design System: NeoCore for Enterprise

## Overview

**North star: NeoSapien's own brand world, made enterprise.** The page reuses the visual language of neosapien.ai — a soft light ground, **Outfit** type (light display weights with bold emphasis words), a **floating rounded pill navbar**, **dark pill buttons with green text and a green icon badge**, and large rounded **mint-green→white gradient cards** that hold **dark rounded product "insets"** (the app-screen look). One brand green `#00df79` is the through-line. It ships in **two themes** (light default, dark), toggled in the nav and persisted; the brand green is constant across both, and in dark the primary pill inverts to a green fill.

**Deliberate refusal:** no data-table dashboards — no bar charts, gridlines, or divider-row tables. Every reading is a friendly card, chip, or a dark inset row with a green check. (This is a hard product/brand constraint from the client.)

**Key characteristics:**
- Soft ground (`#ebebeb` light / `#0a0f0c` dark), never stark white/black.
- Outfit; display at weight 300 with 600 emphasis words; headings 400–500.
- Floating white/dark **pill navbar** with soft shadow; **theme toggle** (sun/moon).
- **Pill buttons:** dark bg + green text + green icon badge (light); green fill + dark text (dark).
- **Mint-gradient cards** as the dominant surface; **dark rounded insets** for representative product UI, tagged "Illustrative view".
- Green reserved for the accent, active states, checks, and the one filled CTA field.
- One reveal per fold; reduced-motion honored.

## Color

Brand green `#00df79` (`--green`) is constant. `--green-ink #04160c` is the near-black that sits on green. Text-green is theme-adjusted for contrast (`#04945a` on light, `#45e79b` on dark). Grounds, surfaces, ink, and card gradients swap per theme via `:root` / `:root[data-theme="dark"]`. Dark **insets** (`#1f2623`) stay dark in both themes — they represent product screens, and logos sit on a fixed light plaque (`#f3f5f3`) in both themes so brand marks stay recognizable.

**Named rules**
- **One green field:** exactly one surface is filled with `--green` — the final pilot CTA panel (Fold 7). Its button inverts to green-ink.
- **Green is the accent, not the ground:** green marks action, active state, a check, or the live dot — never a decorative wash.
- **No tables:** intelligence is shown as cards, chips, and inset rows with green checks; never bar/gridline dashboards.

## Typography

**Outfit Variable** throughout (matches neosapien.ai). Display sets at weight **300** with **600** emphasis words carrying the phrase ("visible, measurable"). Headings 400–500, tight tracking. Lede in `--ink-2`. Body 1.0625rem/1.55. There is no mono face — the brand doesn't use one.

## Layout

Centred `1240px` column, fluid gutter. Folds separated by `--fold` rhythm; grounds alternate (`--ground` ↔ `.fold--soft` on `--surface-2`). The hero is a 47/53 split (copy / mint card). Fold 3 is `0.9fr / 4.4fr` — a small Capture card beside the dominant "NeoCore intelligence layer" card (the 80/20 mandate). Outcome, capability, security-stage, and pilot rows are equal card grids that collapse to fewer columns then one on mobile. The logo wall is a 9-col grid → a two-row horizontal scroll-snap strip on mobile.

## Components

- **Pill navbar:** floating rounded-pill bar (`--surface`, soft shadow), brand roundel + wordmark, section links, **theme toggle** (42px round), primary pill CTA; collapses to a menu button + drawer under 920px.
- **Pill button (`.pill`):** dark bg + green text + green circular icon badge (light); green fill + dark text + dark icon badge (dark). `.ghost` is the one secondary action.
- **Card (`.card`):** mint→white gradient, `rounded.l`, soft shadow — the dominant surface. **`.card-plain`** is a flat surface card for sub-items (stops, stages, FAQ, steps).
- **Inset (`.inset`):** dark rounded panel for representative product UI, holding **inset-rows** (a green ✓ badge, a label, a right-aligned value) and small pill chips. Always tagged "Illustrative view / synthetic example".
- **Chip:** rounded pill, surface fill, green dot — proof points, meta, VoC themes.
- **Accordion (FAQ):** native `<details>` as rounded plain cards, first open, plus-icon rotates to minus (green) on open.
- **Terminus CTA:** the one green-filled panel; headline in green-ink, dark pill button.
- **Dialog:** rounded surface card, rounded inputs (focus → green ring), pill submit, in-place green-check success → Calendly redirect.

## Motion

One `.reveal` entrance per fold (fade + rise), a shared IntersectionObserver, visible-by-default. Pill/card hovers lift 1–2px. The theme transition eases background/color over 0.3s. Everything nulls under `prefers-reduced-motion`.

## Do / Don't

**Do:** keep Outfit light-display-with-bold-emphasis; use mint cards over dark insets for product UI; reserve green for accent/active/checks/the one CTA field; keep logos on the fixed light plaque; support both themes with the green constant.
**Don't:** introduce bar-chart/gridline/divider-row tables; set a mono "technical" face; fill a second surface with green; use green as a background wash; borrow a stark white or pure-black ground.
