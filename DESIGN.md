---
name: NeoCore for Enterprise
description: A deep-evergreen instrument panel where bright green is a signal, never ambience.
colors:
  ground-abyss: "#060f0a"
  ground-deep: "#0a1811"
  ground-panel: "#0e2016"
  ground-raised: "#133023"
  ground-act: "#18402d"
  line: "#1e3d2c"
  line-strong: "#2c5740"
  line-control: "#5c8a6d"
  ink: "#f2f8f0"
  ink-2: "#a9c6b0"
  ink-3: "#7fa38b"
  green: "#3fe07c"
  green-soft: "#8ff0b4"
  green-dim: "#2a9d58"
  green-ink: "#05130b"
  green-glow: "rgba(63, 224, 124, 0.16)"
  signal-warn: "#e8ba5b"
  signal-alert: "#e76f5f"
typography:
  display:
    fontFamily: "Schibsted Grotesk Variable, Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5.4vw, 4.375rem)"
    fontWeight: 680
    lineHeight: 1.02
    letterSpacing: "-0.028em"
  headline:
    fontFamily: "Schibsted Grotesk Variable, Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 3.2vw, 2.75rem)"
    fontWeight: 660
    lineHeight: 1.08
    letterSpacing: "-0.022em"
  title:
    fontFamily: "Schibsted Grotesk Variable, Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.4vw, 2rem)"
    fontWeight: 640
    lineHeight: 1.08
    letterSpacing: "-0.018em"
  lede:
    fontFamily: "Schibsted Grotesk Variable, Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1.5vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Schibsted Grotesk Variable, Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Spline Sans Mono Variable, Spline Sans Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.08em"
  value:
    fontFamily: "Spline Sans Mono Variable, Spline Sans Mono, ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    letterSpacing: "-0.01em"
    fontFeature: "tabular-nums"
  hero:
    fontFamily: "Schibsted Grotesk Variable, Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 4vw, 3.25rem)"
    fontWeight: 680
    lineHeight: 1.02
    letterSpacing: "-0.028em"
  hero-compact:
    fontFamily: "Schibsted Grotesk Variable, Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2rem, 8.2vw, 2.5rem)"
    fontWeight: 680
    lineHeight: 1.05
  bridge:
    fontFamily: "Schibsted Grotesk Variable, Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.05rem, 3.7vw, 3.1rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.028em"
  panel-title:
    fontFamily: "Schibsted Grotesk Variable, Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.625rem, 2.4vw, 2.125rem)"
    fontWeight: 640
    letterSpacing: "-0.018em"
  cta-promise:
    fontFamily: "Schibsted Grotesk Variable, Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.9vw, 2.375rem)"
    fontWeight: 660
    letterSpacing: "-0.025em"
  step-name:
    fontFamily: "Schibsted Grotesk Variable, Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.3vw, 1.25rem)"
    fontWeight: 620
    letterSpacing: "-0.015em"
  question:
    fontFamily: "Schibsted Grotesk Variable, Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1.15vw, 1.1875rem)"
    fontWeight: 600
  node-name:
    fontFamily: "Schibsted Grotesk Variable, Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 620
    letterSpacing: "-0.015em"
  ui:
    fontFamily: "Schibsted Grotesk Variable, Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 560
  support:
    fontFamily: "Schibsted Grotesk Variable, Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 560
    lineHeight: 1.35
  caption:
    fontFamily: "Schibsted Grotesk Variable, Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 520
    lineHeight: 1.5
  micro-label:
    fontFamily: "Spline Sans Mono Variable, Spline Sans Mono, ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    letterSpacing: "0.06em"
  micro:
    fontFamily: "Spline Sans Mono Variable, Spline Sans Mono, ui-monospace, monospace"
    fontSize: "0.625rem"
    fontWeight: 500
    letterSpacing: "0.06em"
rounded:
  s: "6px"
  m: "10px"
  l: "16px"
  mark: "2px"
  pill: "999px"
  segment: "1px"
  swatch: "3px"
  index: "4px"
spacing:
  gutter: "clamp(20px, 4vw, 48px)"
  fold: "clamp(72px, 10vw, 140px)"
  fold-head: "clamp(40px, 5vw, 64px)"
  panel-pad: "clamp(22px, 2.2vw, 30px)"
  panel-pad-compact: "clamp(18px, 1.8vw, 24px)"
  inset: "16px"
  tight: "12px"
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "{colors.green-ink}"
    rounded: "{rounded.s}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.green-soft}"
    textColor: "{colors.green-ink}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.s}"
    padding: "14px 24px"
  button-outline-hover:
    textColor: "{colors.green-soft}"
  button-inverted:
    backgroundColor: "{colors.green-ink}"
    textColor: "{colors.ink}"
    rounded: "{rounded.s}"
    padding: "18px 32px"
  panel:
    backgroundColor: "{colors.ground-panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.m}"
    padding: "{spacing.panel-pad}"
  panel-raised:
    backgroundColor: "{colors.ground-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.m}"
    padding: "{spacing.panel-pad}"
  fragment:
    backgroundColor: "{colors.ground-deep}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.s}"
    padding: "{spacing.tight}"
  illustrative-tag:
    backgroundColor: "{colors.ground-abyss}"
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
  data-chip:
    backgroundColor: "{colors.ground-panel}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.s}"
    padding: "6px 10px"
  input:
    backgroundColor: "{colors.ground-abyss}"
    textColor: "{colors.ink}"
    rounded: "{rounded.s}"
    padding: "11px 13px"
    width: "100%"
  input-focus:
    backgroundColor: "{colors.ground-abyss}"
    textColor: "{colors.ink}"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    padding: "6px 0"
  nav-link-hover:
    textColor: "{colors.ink}"
---

# Design System: NeoCore for Enterprise

## Overview

**Creative North Star: "The Instrument Panel in the Dark Room"**

This is a management console rendered as a marketing page. The whole surface sits in layered evergreen darkness, and every structure on it — folds, panels, tables, flows, accordions — is drawn with 1px hairlines rather than boxes, borders-as-decoration, or floating cards. The reading experience is that of standing in front of a working instrument: readings are precise, labels are small and mono, the grounds recede, and exactly one colour is allowed to mean something.

The system's central discipline is restraint of its own accent. Bright green (#3fe07c) is not the brand's atmosphere; it is the brand's *signal*. It appears where a person can act (primary buttons, focus rings, links), where data is live or currently measured, and where a status is being asserted (pilot-outlined tiles, the governed stage of the security pipeline). Everywhere else the page is white-green ink on evergreen, and the accent's rarity is what makes any single green mark read as information rather than styling. The one place the accent owns an entire surface is the final CTA field, and there it inverts: the button flips to near-black so the commitment still reads as a control.

Density is enterprise-high but never crowded. Sections carry generous vertical air (a 72–140px fold rhythm) around interiors that are tight and tabular. Depth comes from a five-step ground ramp plus large, soft, near-black shadows in the world's own colour — no glass, no blur, no light-mode elevation borrowed into a dark page. Motion is deliberately scarce: one entrance per fold and one authored moment on the whole page.

**Key Characteristics:**
- Layered evergreen grounds (five steps, #060f0a → #18402d), never neutral grey
- Hairline structure: one panel divided by 1px lines, not many separate cards
- Bright green strictly reserved for action, live data, and status
- Schibsted Grotesk at intermediate variable weights (520–680); Spline Sans Mono only on measured values
- Small radii (6/10/16px) — enterprise precision, not soft consumer roundness
- Instrument fragments (bars, meters, roll-ups, transcripts) instead of feature-icon cards
- One entrance per fold; one authored motion moment on the page

## Colors

A single-accent palette: an evergreen ground ramp and a green-cast white ink, with one bright signal green and two data-semantic tones.

### Primary
- **Signal Green** (`{colors.green}`): The action-and-liveness colour. Primary buttons, focus rings, text selection, the live data series in a chart, the live status dot, the pilot outline on a logo tile, the governed stage of the security pipeline, the rising-theme tick, the accordion's open indicator, the success mark. Nothing decorative ever wears it.
- **Green Soft** (`{colors.green-soft}`): Hover state of the primary button, inline text links, the eyebrow-scale accent text, and highlighted terms inside representative transcripts. It is the accent's "touched" state, not a second brand colour.
- **Green Dim** (`{colors.green-dim}`): Measured green — filled data bars, waveform segments already processed, the meter's satisfied segments, link underlines, the terminal node of the hero feed line. Use it whenever green must express a *quantity* rather than an *invitation*.
- **Green Ink** (`{colors.green-ink}`): The near-black that sits on top of green. Primary button label, the final CTA panel's headline, and the inverted focus ring on green grounds.
- **Green Glow** (`{colors.green-glow}`): The only translucent value in the system. Input focus halo, live-dot ring, transcript highlight ground, and the trailing comet on the Fold 3 signal.

### Secondary
- **Signal Amber** (`{colors.signal-warn}`): Dashboard and form data semantics only — a flagged coaching row, a below-target adherence value, a missed field, a public-inbox notice. It marks a *reading*, never emphasis.
- **Signal Coral** (`{colors.signal-alert}`): Validation failure only — invalid input borders, field error text, the submission-failure banner.

### Neutral
- **Abyss** (`{colors.ground-abyss}`): Page ground, sticky nav ground, unfilled bar tracks, input fields, and the ground the illustrative tag sits on. The darkest step; things that should recede completely.
- **Deep** (`{colors.ground-deep}`): The lifted fold ground (`.fold--lifted`), the recessed representative-UI fragment ground, the security pipeline panel, the mobile nav drawer. One step up from the page.
- **Panel** (`{colors.ground-panel}`): The default panel fill and the dashboard's chrome bars.
- **Raised** (`{colors.ground-raised}`): The `panel--raised` fill for the page's dominant objects — the hero dashboard, the intelligence layer, the lead dialog, the outcome cards. Also the hover fill of an interactive tile.
- **Act** (`{colors.ground-act}`): The top ramp step, used once by design: the "Act" band inside the intelligence layer, the point where the flow arrives at management action.
- **Line** (`{colors.line}`): The default hairline. Fold boundaries, panel borders, row dividers, chart gridlines, fragment chrome.
- **Line Strong** (`{colors.line-strong}`): The emphatic hairline. Chrome-bar boundaries, structural divisions inside raised panels, the outline button's rest border, quote rules, node markers.
- **Line Control** (`{colors.line-control}`): The boundary colour for interactive controls (inputs, selects) — lifted specifically to meet WCAG 1.4.11 3:1 non-text contrast against the panel grounds.
- **Ink** (`{colors.ink}`): Headlines, statements, values that matter, and any text a buyer must read at speed.
- **Ink 2** (`{colors.ink-2}`): Body copy, ledes, card copy, chart labels, nav links at rest.
- **Ink 3** (`{colors.ink-3}`): Metadata, axis ticks, timestamps, footer links, subordinate glyphs.

### Named Rules

**The Signal Rule.** `{colors.green}` is reserved for action, live data, and status. If a green mark on screen cannot be clicked, is not the currently-live measurement, and is not asserting a status, it is wrong. Audit test: cover the page and count the green marks — every one of them should be nameable as "a thing to do" or "a thing being measured right now."

**The One Green Field Rule.** Exactly one surface on a page may be filled with `{colors.green}`: the terminal call to action. Inside it the primary button inverts to `{colors.green-ink}` and the focus ring inverts with it. A second green field cancels the first.

**The Reading-Not-Emphasis Rule.** Amber and coral are data and validation semantics. They never highlight a heading, never brighten a card, and never appear outside an instrument fragment or a form.

## Typography

**Display Font:** Schibsted Grotesk Variable (with Schibsted Grotesk, system-ui, sans-serif)
**Body Font:** Schibsted Grotesk Variable — the same face carries display and prose
**Label/Mono Font:** Spline Sans Mono Variable (with Spline Sans Mono, ui-monospace, monospace)

**Character:** One grotesk does all the talking — tightly tracked and set at intermediate variable weights so headlines feel engineered rather than shouted. The mono is not a costume; it is the instrument's own readout face, appearing only where a number, an axis, an ID, or a system label needs to sit in a fixed column.

### Hierarchy
- **Display** (680, `clamp(2.5rem, 5.4vw, 4.375rem)`, 1.02, `-0.028em`): The page's single largest voice. Available as `.display-xl`; the hero H1 caps it further to `clamp(2.5rem, 4vw, 3.25rem)` at 24ch so the mandated long headline sets in 4–5 lines and the CTA stays above the fold.
- **Headline** (660, `clamp(1.9rem, 3.2vw, 2.75rem)`, 1.08, `-0.022em`): Fold headings. Deliberately capped below the hero so the page keeps one focal scale at the top.
- **Title** (640, `clamp(1.5rem, 2.4vw, 2rem)`, 1.08, `-0.018em`): Sub-headings inside a fold, the dialog title, the sample-analysis heading.
- **Lede** (400, `clamp(1.0625rem, 1.5vw, 1.25rem)`, 1.55, `{colors.ink-2}`, max 58ch): The one paragraph under a fold heading.
- **Body** (400, `1.0625rem`, 1.6): Default. Prose measures cap between 46ch and 68ch depending on column; FAQ answers run to 66ch.
- **Card title** (640, `clamp(1.25rem, 1.7vw, 1.5rem)`, `-0.02em`) and **node/step name** (620–640, `1.0625–1.125rem`, `-0.015em`): the two working sizes inside panels.
- **Label** (500, `0.75rem`, `0.08em`, uppercase, `{colors.ink-2}`): `.mono-label`. System labels, section markers, chip text, legends, footer links. Shrinks to `0.625–0.6875rem` inside dense chrome.
- **Value** (500, `0.75–0.875rem`, `-0.01em`, tabular figures): `.mono-value`. Every measured number, timestamp, region score, step index, ID, and axis tick.

### Named Rules

**The Measured-Values Rule.** Mono is for measured values, axes, chips, IDs, and system labels. It never sets prose, never sets a headline, and never appears as a stylistic flourish. Audit test: read every mono string aloud — each one should be a number, a code, or a label naming a machine-side thing. Corollary: security proof points and other buyer-facing evidence set in the display face at a readable size (`0.9375rem`), not shrunk into mono chrome.

**The In-Between Weight Rule.** Weights land on the variable font's intermediate steps — 520, 540, 560, 600, 620, 640, 660, 680 — never the 400/700 defaults. Headings are 640 with `-0.02em` tracking and `text-wrap: balance`; paragraphs get `text-wrap: pretty`.

**The Stepped-Focal Rule.** Section headings must remain visibly smaller than the page's H1. If a new surface needs a bigger heading, it needs a different page.

## Layout

A single centred column of `1240px` max width with a fluid `{spacing.gutter}` inset carries every fold. Folds are separated by rhythm, not by boxes: `padding-block: {spacing.fold}` on each `.fold`, with a `.fold-head` (max 760px, `{spacing.fold-head}` below it) introducing the section — heading plus one lede, nothing else.

Grounds alternate to mark sections. A default fold sits on `{colors.ground-abyss}`; a `.fold--lifted` fold sits on `{colors.ground-deep}` with a 1px `{colors.line}` rule above and below. Alternating these is how the page divides itself; nothing needs an outer container to be a section.

Inside a fold, the dominant object is one panel divided by hairlines rather than several detached cards. The hero splits 45/55 (copy / dashboard) above 1000px. Fold 3's flow is a 0.82fr / 4.6fr split — the capture input is deliberately ~15–20% of the composition and the intelligence layer holds the rest. Fold 4's outcome grid is a 12-column grid at 7/5 on the top row and a full-width low-profile strip beneath. Fold 5's pipeline is five equal columns joined by a hairline conduit. Fold 7's pilot rail is five equal columns on desktop.

Responsive behaviour is stack-in-reading-order, and the proportion is preserved rather than reset: multi-column instruments collapse to single column, horizontal conduits rotate to vertical, arrows rotate 90°, and the border that was `border-left` becomes `border-top`. Observed breakpoints, in the order the page actually uses them: 1239, 1080, 1000/999, 900/899, 880, 860, 760, 720, 640, 560, 480, 460, 420px. The logo wall is the one horizontally scrollable region on mobile — a manual two-row strip with scroll-snap and a fade mask, never a carousel and never autoplaying.

**The Hairline Structure Rule.** Structure comes from 1px lines inside a shared surface, not from gaps between separate surfaces. When two things need separating, add a `{colors.line}` divider before you consider adding a second panel.

## Elevation & Depth

Hybrid, and strongly weighted to tonal layering. Depth is primarily read from the five-step ground ramp — a thing is "closer" because it is a lighter evergreen, not because it floats. Shadows exist, but only two, and both are cast in the world's own near-black (`rgba(2, 8, 5, …)`) with a large blur and a negative spread, so they read as the panel sitting *in* the dark rather than hovering above a light page. There is no glass, no backdrop blur, and no ambient glow anywhere except the single primary-button lift.

### Shadow Vocabulary
- **Panel** (`box-shadow: 0 12px 32px -12px rgba(2, 8, 5, 0.55)`): Every `.panel`. The default seat.
- **Raised** (`box-shadow: 0 24px 60px -20px rgba(2, 8, 5, 0.7)`): `.panel--raised` — the page's dominant objects only (hero dashboard, intelligence layer, outcome lead cards, lead dialog, final CTA field).
- **Action lift** (`box-shadow: 0 8px 24px -10px rgba(63, 224, 124, 0.45)`): The primary button, and only the primary button. The one place the accent is allowed to emit light.
- **Focus halo** (`box-shadow: 0 0 0 3px {colors.green-glow}`): Input and select focus, and the live-status dot's ring.
- **Conduit cutout** (`box-shadow: 0 0 0 7px {colors.ground-deep}`): A solid ring in the ground colour that punches a gap in a hairline conduit where it meets a node. Depth-as-negative-space; reuse this instead of masking lines.
- **Scrim** (`background: rgba(2, 8, 5, 0.74)`): The dialog backdrop.

### Cinematic light (the room has light in it)

Added in the amplification pass, at the user's direction: the page may carry deliberate light, governed by one rule — **one light source per fold, anchored to the fold's dominant object**, never ambient wash for its own sake.

- **`.bloom`**: a soft green radial field hung behind a fold's key object (`--bloom-w/h/x/y/alpha/spread`). Lives at `z-index: -1`; the fold's container takes `isolation: isolate` so the light lands above the ground. Sections clip its horizontal spill (`main > section { overflow-x: clip }`).
- **`.fold-light`**: a faint directional wash on a fold's ground (`--light-*` props), for when the light should read as spill rather than source. Use `.bloom` OR `.fold-light` prominently, never both.
- **Catch-light**: `.panel--raised` automatically takes a 1px top inset highlight plus a faint green-soft top-down tint — panels read lit from above.
- **Recessed wells**: instrument readings sit in `{colors.ground-abyss}`/`{colors.ground-deep}` wells with inset shadows inside lighter chrome — depth encodes "screen inside machine."
- Current light assignments: hero → dashboard bloom; Fold 2 → outcome band's lit ticks (raised material, no bloom); Fold 3 → intelligence-layer bloom biased toward the Act band; Fold 4 → sample-module bloom on the Structured-intelligence panel; Fold 5 → governed-node glow pooling into the recessed well; Fold 7 → CTA-field bloom (the one earned ambient green). FAQ stays unlit by design — the valley before the close.

**The Own-Dark Shadow Rule.** Shadows are cast in the page's own near-black at low opacity with negative spread. Never a black shadow tuned for a light UI, never a coloured glow used as ambience, and never a shadow on a hairline-divided interior row.

## Shapes

Enterprise precision: radii are small and consistent. Panels and dialogs take `{rounded.m}` and `{rounded.l}`; controls, chips, tiles, fragments, and nodes take `{rounded.s}`. Data marks get near-square micro-radii — bar tracks and rail nodes at `{rounded.mark}`, step-index boxes at 4px, meter segments and waveform bars at 1px — so a reading looks machined rather than styled. Full pills (`{rounded.pill}`) are reserved for two things only: the `.illustrative-tag` and the "Optional" field badge, plus the theme chips in the Voice-of-Customer fragment; a pill on this page means "this is a label about the content," not "this is a button."

The recurring silhouettes are: the **hairline-divided panel** (one border, interior rows separated by `{colors.line}`), the **rail** (a hairline track interrupted by a small square node, horizontal on desktop and vertical on mobile), the **conduit** (a hairline joining icon nodes with a ground-coloured ring cutout at each junction), and the **fragment** (a recessed `{colors.ground-deep}` rectangle with `{colors.line}` head and foot rules, holding representative product UI).

**The Small-Radius Rule.** Nothing exceeds 16px. If a surface looks soft, it is wrong for this world.

## Components

### Buttons
- **Shape:** Tightly rounded (`{rounded.s}`), inline-flex, 10px gap for an optional glyph, `-0.01em` tracking at weight 600.
- **Primary:** Signal green on green-ink at `14px 24px`, carrying the action lift shadow. Compact in the nav (`11px 18px` / `0.9375rem`), full-width on mobile and inside the dialog, generous in the final CTA (`18px 32px` / `1.0625rem`). Hover lightens to `{colors.green-soft}`.
- **Inverted primary:** Inside the one green field, the same button flips to `{colors.green-ink}` ground with `{colors.ink}` label and the panel shadow; hover moves to `{colors.ground-raised}`. Focus rings inside that field switch to `{colors.green-ink}` at `3px` offset, because the global green ring is invisible on green.
- **Outline:** Transparent with a `{colors.line-strong}` border and `{colors.ink}` label; hover moves the border to `{colors.green}` and the label to `{colors.green-soft}`. Used for the one secondary action on the page.
- **Active:** All buttons press down 1px (`translateY(1px)`). Transitions are 0.15s on transform/colour, 0.2s on shadow.
- **Text link:** `{colors.green-soft}` at weight 560 with a `{colors.green-dim}` underline at 4px offset; hover brightens the underline only.

### Panels
- **Corner style:** `{rounded.m}` (dialog and the security pipeline use `{rounded.l}`).
- **Background:** `{colors.ground-panel}` at rest; `{colors.ground-raised}` with a `{colors.line-strong}` border for `panel--raised`.
- **Border:** Always 1px. Always present — a panel is defined by its hairline as much as its fill.
- **Shadow:** Panel or Raised from the Elevation vocabulary; never both, never neither.
- **Internal padding:** `{spacing.panel-pad}` for lead cards, `{spacing.panel-pad-compact}` for subordinate ones, `{spacing.inset}` for dashboard blocks. Chrome bars (a panel's head and foot) run `11px 16px` on `{colors.ground-panel}` with a `{colors.line-strong}` boundary.

### Tags and Chips
- **Illustrative tag:** A pill in mono at `0.6875rem` / `0.06em` uppercase, `{colors.ink-2}` on `{colors.ground-abyss}` with a `{colors.line}` hairline. It is a labelling device, not decoration.
- **Data chip:** Square-cornered (`{rounded.s}`), `{colors.line}` border, `{colors.ground-panel}` fill, label plus a `{colors.line}` divider before its mono count. Filters, themes, and masked-value fragments all use this shape.
- **Theme chip (pill variant):** Used only in the Voice-of-Customer fragment; the "rising" state promotes the border to `{colors.line-strong}`, the fill to `{colors.ground-raised}`, the name to `{colors.ink}`, and adds a `{colors.green}` trend tick.

### Inputs / Fields
- **Style:** Full-width, `{colors.ground-abyss}` fill, 1px `{colors.line-control}` border, `{rounded.s}`, `11px 13px`, `0.9375rem`. Selects strip their native appearance and carry an authored chevron at 11px from the right, pointer-events disabled.
- **Label:** `0.875rem` at weight 560 in `{colors.ink}`, with an optional mono "Optional" pill beside it.
- **Focus:** Border moves to `{colors.green}` plus a 3px `{colors.green-glow}` halo; keyboard focus additionally shows the global 2px green outline at 2px offset.
- **Error:** Border moves to `{colors.signal-alert}` with `aria-invalid`, and a `0.8125rem` coral message appears below. A soft `{colors.signal-warn}` notice is used for advisory (non-blocking) cases such as a public email domain.
- **Help text:** `0.8125rem` in `{colors.ink-3}`, always above the error slot.

### Navigation
- **Style:** Sticky at the top on `{colors.ground-abyss}` with a single `{colors.line}` bottom hairline and a 72px minimum height (64px compact). No shadow, no blur, no background transition on scroll.
- **Links:** `0.9375rem` at weight 520 in `{colors.ink-2}`; hover lifts to `{colors.ink}` and wipes in a 1px `{colors.ink-3}` underline from the left (`scaleX` 0→1 over 0.2s).
- **Brand:** Wordmark at weight 660 beside a mono suffix in `{colors.ink-3}`, separated by a vertical `{colors.line-strong}` rule.
- **Mobile:** Below 900px the section links collapse behind a mono "Sections" disclosure that drops a bordered `{colors.ground-deep}` drawer; the primary CTA never collapses. Below 460px the brand suffix and toggle text go visually-hidden while their accessible names stay complete.

### Accordion
Hairline rows, no containers: a top rule on the list and a bottom rule on each item. The question is a full-width grid button in the display face at `clamp(1.0625rem, 1.15vw, 1.1875rem)` / weight 600, with an authored plus icon that rotates its vertical bar 90° into a minus over 0.34s. Open state tints the icon `{colors.green}`. Panels expand via `grid-template-rows: 0fr → 1fr` (no JS measuring) with the inner wrapper toggling `visibility` on a delayed transition so collapsed content leaves the accessibility tree. Items toggle independently.

### Dialog
A native `<dialog>` capped at `min(560px, 100vw - 24px)`, centred, transparent itself — the visible object is a `panel--raised` at `{rounded.l}` with `clamp(24px, 4vw, 36px)` padding and its own scroll at `100dvh - 32px`. Backdrop is the Scrim. It rises 10px over 0.24s on open. A 34px square ghost close button sits at the top-right with a `{colors.line}` border. Success replaces the form in place — green check mark, title, and a text-link fallback — rather than navigating away.

### Instrument Fragments (signature)
The system's defining component: a recessed representative-UI block that stands in for a product screenshot. It is `{colors.ground-deep}` at `{rounded.s}` with a 1px `{colors.line}` border and `{spacing.tight}` padding, opened by a head row (mono title left, mono meta right, `{colors.line}` rule under) and optionally closed by a matching foot row. Inside it live the reusable readout primitives:
- **Bar row:** name / track / mono value in a 3-column grid, `{colors.ground-abyss}` track with a `{colors.line}` inset border, `{colors.green-dim}` fill by default, `{colors.green}` for the live series, `{colors.signal-warn}` when flagged.
- **Chart grid:** absolutely positioned 1px `{colors.line}` verticals at 25/50/75% plus a dashed `{colors.ink-3}` target line, with mono `0/50/100` ticks below the plot area.
- **Key/value row:** mono uppercase key left, mono value right, `{colors.line}` divider between rows, `{colors.signal-warn}` when the value is a miss.
- **Segmented meter:** 12×4px segments, filled `{colors.green-dim}` when satisfied and outlined `{colors.signal-warn}` when missed.
- **Ranked queue:** mono rank, two-line body, mono score, hairline dividers, amber score when flagged.

**The Illustrative Tag Rule.** Any fragment or panel that represents product UI carries `.illustrative-tag` ("Illustrative view" / "Illustrative synthetic example") inside its own chrome. A representative screen without its tag does not ship.

**The Control Border Rule.** Interactive controls use `{colors.line-control}`. Decorative and structural hairlines use `{colors.line}` / `{colors.line-strong}` and must never be promoted to a control border, nor a control demoted to a decorative one.

### Motion
Motion is a named, closed set. There is no general-purpose animation layer.
- **The reveal grammar.** Content is visible by default; only a JS-enabled client with motion allowed gets an entrance. `.reveal` fades from `opacity: 0` / `translateY(16px)` over 0.7s on `{ease-out}`, with an optional `--reveal-delay`, flipped by a single shared IntersectionObserver at 12% visibility.
- **The one authored moment.** Fold 3's signal traversal: each step owns a rail segment, a dot crosses them in sequence (0.95s, staggered `--i × 0.5s + 0.2s`), and each crossed rail stays lit in `{colors.green-dim}`. It runs once, on scroll into view.
- **The settling feed.** The hero's capture line runs its signal exactly twice, then rests as a plain hairline.
- **State transitions** are 0.15–0.2s on colour, border, and transform; the accordion is 0.34s; the dialog 0.24s; the nav drawer 0.18s.
- Every one of these is nulled under `prefers-reduced-motion: reduce`, and the page carries full meaning with all of them disabled.

**The One Entrance Rule.** One `.reveal` per fold, on the fold head. Staggering a grid of items, revealing a panel's interior, or adding a second entrance to a fold is out of system.

**The Settle Rule.** Authored motion runs a bounded number of passes and then rests. Nothing on this page loops.

## Do's and Don'ts

### Do:
- **Do** reserve `{colors.green}` for action, live data, and status, and let its rarity carry the meaning.
- **Do** build structure from 1px `{colors.line}` divisions inside one panel before reaching for a second panel.
- **Do** alternate fold grounds (`{colors.ground-abyss}` ↔ `.fold--lifted` on `{colors.ground-deep}`) to divide the page.
- **Do** use `.mono-label` and `.mono-value` for labels, axes, chips, IDs, and every measured number — and the display face for everything a buyer reads as prose.
- **Do** keep headings on the stepped scale: display-xl at the top of a page, display-l for folds, display-m inside them.
- **Do** cast shadows in the world's own near-black (`rgba(2, 8, 5, …)`) with a large blur and negative spread.
- **Do** give interactive controls the `{colors.line-control}` border so non-text contrast holds (WCAG 1.4.11).
- **Do** tag representative product UI with `.illustrative-tag` inside the fragment's own chrome.
- **Do** invert the focus ring to `{colors.green-ink}` on any green ground.
- **Do** express data density as instrument fragments — bars, meters, roll-ups, ranked queues — rather than icons.
- **Do** collapse multi-column instruments into reading order on mobile, rotating conduits and arrows rather than deleting them.
- **Do** null every animation under `prefers-reduced-motion` and make sure the meaning survives.

### Don't:
- **Don't** use `{colors.green}` as ambience — no green washes, gradients, ambient glows, tinted backgrounds, or green-on-green decoration. The primary button's lift is the only accent glow in the system.
- **Don't** fill a second surface with `{colors.green}`; the terminal CTA field is the page's only green field.
- **Don't** set prose, headings, buttons, or navigation in Spline Sans Mono.
- **Don't** use amber or coral for emphasis; they are data semantics and validation only.
- **Don't** introduce glass, backdrop blur, gradients-as-surface, or any light-mode shadow recipe.
- **Don't** exceed a 16px radius, and don't round data marks past 4px.
- **Don't** replace hairline-divided instruments with equal-weight icon feature cards.
- **Don't** ship a representative product screen without its illustrative tag.
- **Don't** stagger reveals across a grid, loop an animation, or add a second entrance to a fold.
- **Don't** autoplay a carousel; the mobile logo wall is manually scrolled by design.
- **Don't** borrow `{colors.line}` for an input border or `{colors.line-control}` for a divider.
