# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: Astro. Chosen for a content-first conversion page — fast static output, minimal JS by default, islands for the qualification form, accordion, and scroll motion. Confirmed by the user as "your recommendation."

## Users

This site is the **NeoCore for Enterprise landing page**. Primary visitors, in the brief's priority order:

1. Sales Excellence / Revenue Transformation / GTM Excellence leaders (own the hero and the pilot business case)
2. CROs, national/regional sales heads, business-unit leaders
3. Sales coaching, L&D, and Customer Insights teams
4. IT, data, security, and procurement stakeholders validating deployment

Success is a **qualified conversation with NeoSapien's enterprise team** (form → 30-minute Calendly booking), not a purchase. Direct device purchase, SMB, reseller, and government journeys belong on separate pages.

## Product Purpose

NeoSapien sells frontline conversation intelligence for enterprise sales. Two-part product:

- **Neo One** — always-on pendant wearable that captures approved frontline conversations (multi-mic array, ~3 m range, 17 h battery, USB-C, mobile-data connectivity via paired phone, no offline buffering today).
- **NeoCore** — the intelligence layer: processes speech in 100+ languages, separates speakers (87%+ diarization in clear audio), understands company-specific vocabulary, structures conversations against configurable custom fields, aggregates across reps/teams/regions/time, and surfaces pitch-adherence gaps, coaching priorities, and Voice of Customer themes. ~2-minute P50 processing latency. API-first (APIs + MCP) into CRM/SFA/LMS/BI.

The page's one proposition: NeoCore turns frontline sales conversations into centralized intelligence for pitch adherence, coaching, and Voice of Customer.

## Positioning

Category: frontline conversation intelligence for enterprise sales. Core bridge: "Your CRM shows what happened. Frontline conversations reveal why." Neo One is the low-friction capture input; NeoCore is the product value. Lead verticals: FMCG, consumer durables, automotive.

## Operating Context

Enterprise deal shape: structured pilot (50–250 devices) → measured outcomes → business case → scale rollout under MSA. The buying group includes a business champion, IT/security gatekeeper (a failed security review kills the deal), executive sponsor, and L&D/enablement operators. The page must serve the business buyer first and give IT/security enough evidence to continue evaluation.

## Capabilities and Constraints

**Binding brief:** `B2B Landing page brief.md` (repo root), from NeoSapien's head of marketing — self-described single source of truth. Its final copy, fold structure (seven folds), CTA labels, logo rules, and claim rules are mandates, not suggestions. Key hard rules:

- Primary CTA label is always **"Talk to our enterprise team"** → qualification form → redirect to Calendly (https://calendly.com/enterprise-neosapien/30min). Lead saved even if booking isn't completed.
- **80/20 visual hierarchy**: NeoCore intelligence/dashboards ≥80% of solution visuals; Neo One ≤20%. No device-led heroes, no lifestyle/stock photography, no equal-sized feature-icon flows, no surveillance cues.
- **Claim rules**: only the three approved outcome figures (70%+ utilization always-on option; +15% lines per store; +20% sales per store, same FMCG rollout) with the stated footnote. ISO 27001 only — no SOC 2, HIPAA, or DPDPA claims (in progress ≠ publishable). Exact wording "No audio storage by default."
- **Logo rules**: exactly the 27 slide-9 logos, specified pilot-status outlines, never "Trusted by" as a blanket heading. Salesforce/HubSpot/Zoho/Plaud/LG/Whirlpool/Samsung/Voltas/Bain/Palantir must not appear as customer logos.
- WCAG AA, reduced-motion respected, LCP < 2.5 s mobile, no auto-playing carousels, ~1200–1280 px content width.
- Analytics events per brief §5; primary KPI is qualified Calendly bookings.

**Known discrepancy to resolve with the client:** the brief contains an older 8-fold section with a different metric set ("2× adherence", "20%+ sales per FTE"); the "Final website design brief" section (7 folds, +15%/+20% per-store figures) supersedes it, but confirm before publication.

## Brand Commitments

NeoSapien enterprise visual system (binding, volunteered in the brief): black or deep-green background, bright green accent, high-contrast white typography, restrained motion. Tone: calm, precise, enterprise-credible; customer language and outcome verbs; no inflated AI claims; avoid any framing that suggests employee monitoring or covert recording.

## Evidence on Hand

- The brief itself, including final copy for every fold, the full enterprise FAQ (45 answers), the synthetic sample analysis (must be shown ungated, labeled "Illustrative synthetic example"), and persona research.
- Source deck and enterprise FAQ on Google Drive (links in brief §6); Fold-3 visualization reference PNGs (Drive links at brief end; Option 1 "Intelligence Flow" is the chosen direction).
- **Awaited from NeoSapien before launch** (brief §6): slide-9 logo SVGs/PNGs, per-logo pilot status confirmation, approved product screenshots (or approval for "Illustrative view" representative UI), official ISO 27001 badge, approval/footnotes for the three outcome claims, CRM/form endpoint + field mapping, Calendly tracking method, Privacy Policy and Terms links.
- Nothing beyond the brief's approved claims may be fabricated — no invented metrics, testimonials, badges, or customer statuses.

## Product Principles

1. **The intelligence is the product; the device is the input.** Every visual and narrative decision preserves the 80/20 hierarchy.
2. **Claims are a whitelist.** If the brief doesn't approve a figure, badge, or logo treatment, it doesn't ship.
3. **One dominant conversion path.** "Talk to our enterprise team" everywhere; everything else is visually subordinate.
4. **Sell to the buying group.** Business outcome first; security/IT evidence present and findable without hijacking the narrative.
5. **Trust through precision.** Exact wording on security facts, accurate logo attribution, honest footnotes — precision is the persuasion.

## Accessibility & Inclusion

WCAG AA contrast and keyboard navigation required by the brief; descriptive alt text for product visuals and meaningful logo labels; reduced-motion preferences respected with full meaning available without animation.
