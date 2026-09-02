# NeoCore for Enterprise — Landing Page

Marketing landing page for **NeoCore**, NeoSapien's frontline conversation-intelligence
platform for enterprise sales. The page's single goal is a qualified conversation with
NeoSapien's enterprise team (lead form → demo booking), not a purchase.

Built with [Astro](https://astro.build) for fast, content-first static output with
minimal client JS.

## Tech stack

- **Astro 5** — static site generator, component islands
- **TypeScript** — via `astro/tsconfigs/base`
- **Fontsource** — Outfit, Schibsted Grotesk, Spline Sans Mono (self-hosted variable fonts)
- **Playwright** — dev dependency for browser checks

## Getting started

Requires Node.js 18+ (or the version your Astro release targets).

```bash
npm install      # install dependencies
npm run dev      # start the local dev server (http://localhost:4321)
npm run build    # build the production site to ./dist
npm run preview  # preview the production build locally
```

## Project structure

```
.
├── src/
│   ├── pages/index.astro      # the single landing page
│   ├── layouts/Layout.astro   # base HTML shell
│   ├── components/            # page sections, in order:
│   │   ├── SiteNav.astro          # nav: Why NeoCore / Security and Privacy / Industries / FAQ
│   │   ├── Hero.astro             # hero + Neo One device
│   │   ├── TrustProof.astro       # client / pilot logo band
│   │   ├── WhyNeoCore.astro
│   │   ├── Security.astro
│   │   ├── Outcomes.astro
│   │   ├── Produces.astro         # live NeoCore + Panasonic dashboards
│   │   ├── Industries.astro
│   │   ├── Faq.astro
│   │   ├── SiteFooter.astro
│   │   ├── LeadForm.astro         # "Book a demo" lead capture → Google Sheet
│   │   ├── NeoCoreDashboard.astro / NeoCoreProductDashboard.astro
│   │   └── BrandLogo.astro
│   ├── assets/                # inlined SVGs (NeoSapien wordmark)
│   └── styles/global.css      # design tokens + global styles
├── public/                    # static assets served as-is
│   ├── logos/                 # client / pilot logos
│   ├── neocore/               # NeoCore product visuals
│   └── panasonic/             # case-study imagery
├── docs/                      # briefs, collateral, product & design docs (see below)
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## Documentation

Reference material and client collateral live in [`docs/`](docs):

- [`b2b-landing-page-brief.md`](docs/b2b-landing-page-brief.md) — the binding design
  brief from NeoSapien marketing (single source of truth: copy, fold structure, CTA
  labels, logo rules, claim rules)
- [`b2b-landing-page-brief-condensed.md`](docs/b2b-landing-page-brief-condensed.md) — shorter brief variant
- [`NeoCore_Enterprise_FAQ.pdf`](docs/NeoCore_Enterprise_FAQ.pdf) — full enterprise FAQ
- [`NeoCore_Terms_and_Conditions_v1_0.docx`](docs/NeoCore_Terms_and_Conditions_v1_0.docx) — terms & conditions
- [`Introduction-to-NeoCore.pptx`](docs/Introduction-to-NeoCore.pptx) — source product deck
- [`PRODUCT.md`](docs/PRODUCT.md) — product positioning, constraints, and the claim/logo whitelist
- [`DESIGN.md`](docs/DESIGN.md) — visual system: themes, color tokens, typography

## Key constraints

These are mandates from the brief, not suggestions:

- **Primary CTA** is "Book a demo" → lead form (captured to Google Sheet even if the
  booking isn't completed).
- **80/20 visual hierarchy** — NeoCore intelligence/dashboards ≥ 80% of solution visuals;
  the Neo One device ≤ 20%.
- **Claims are a whitelist** — only brief-approved outcome figures and security facts
  ship (ISO 27001 only; exact wording "No audio storage by default").
- **Accessibility** — WCAG AA, reduced-motion respected, LCP < 2.5 s on mobile.

## Deployment

Set the production URL via the `site` option in [`astro.config.mjs`](astro.config.mjs)
(currently a placeholder — replace `https://your-production-domain.example` with the
real domain before launch). Run `npm run build` and deploy the generated `dist/` directory
to any static host.
