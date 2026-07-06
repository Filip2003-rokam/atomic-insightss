# Atomic Insights — Marketing Site Plan

Build a polished, Monarch-inspired marketing landing page for **Atomic Insights**, a money-movement platform for RIAs and family offices. Wire up brand assets (logo, Gantari font, navy/blue/green palette), a full header/footer, and all six content sections you provided.

## Brand system

- **Logo:** upload `Primary_Logotype_-_Blue.svg` (header, footer) and `Mono_Grayscale_Logo_Symbol.svg` (favicon/accent) via `lovable-assets` → `.asset.json` pointers.
- **Typography:** self-hosted **Gantari** (variable, regular + italic). TTFs uploaded via `lovable-assets` and referenced from `src/styles.css` with `@font-face` (CDN URL in `src()`). Gantari for both display + body — geometric-humanist tone matches the logotype and Monarch's clean register.
- **Color tokens (from your Color Hueues doc + logo):**
  - `--brand-navy: #19284A` (logotype, primary text, buttons)
  - `--brand-navy-deep: #071838` (dark surfaces, hero base)
  - `--brand-indigo: #464A80` / hover `#3E4073` (secondary CTAs, accents)
  - `--brand-blue: #2F80C2` (link/gradient stop, matches logo blue)
  - `--brand-green: #6FBE44` (success + logo gradient stop)
  - `--brand-teal-mist: #B3D9C7` (soft accent, tag chips)
  - `--surface: #F9FAFB`, `--surface-alt: #EEF1F6`, `--border: #E4E8EF`
  - Semantic: success `#3E9E56`, info `#2F80C2`, error `#C4342E`
  - Gradient (hero + hero art): `linear-gradient(135deg, #6FBE44 0%, #2F80C2 55%, #19284A 100%)` — mirrors the logo mark
- All tokens registered in `@theme inline` so Tailwind utilities (`bg-brand-navy`, `text-brand-blue`, etc.) work everywhere. No hardcoded hex in components.

## Reference-driven design direction

Take structural cues from **monarch.com**: generous whitespace, oversized headline, single hero screenshot on a soft tinted stage, feature cards with product visuals alternating, quiet trust logos, testimonial cards, deep-navy final CTA band. Keep density tighter and language more institutional (B2B fintech, not consumer). No purple/indigo AI-gradient clichés — lean on the navy → green/blue brand gradient sparingly.

## Route architecture

Single landing route for now. Each section is its own component so we can expand later.

```
src/routes/
  __root.tsx        (updated: real SEO meta, Gantari, favicon)
  index.tsx         (landing, composes sections below)
src/components/site/
  SiteHeader.tsx    (promo bar + nav + dropdowns + CTAs)
  SiteFooter.tsx    (4 cols + integrations strip + trust line + bottom bar)
  Hero.tsx          (Section 1)
  StatsBanner.tsx   (Section 2)
  ProductIntro.tsx  (Section 3 — "What is Atomic Insights?" + demo placeholder)
  FeatureSuite.tsx  (Section 4 — five feature blocks, alternating layout)
  TrustSocial.tsx   (Section 5 — client logos + 4 testimonials)
  FinalCTA.tsx      (Section 6)
src/assets/
  logo-primary.svg.asset.json, logo-mark.svg.asset.json
  gantari.ttf.asset.json, gantari-italic.ttf.asset.json
  ohana.png.asset.json, ieq.png.asset.json, baker-street.png.asset.json
```

## Section-by-section content

1. **Hero** — promo bar (thin navy strip, dismissible), sticky nav, H1 "More clients, more wires, more capital calls. One platform to run them.", subhead as provided, primary "Book a demo" (solid navy), secondary "See the platform" (outline). Hero visual: stylized dashboard mock built in HTML/CSS (Payment Requests table + verification badges resolving) on a soft gradient stage with subtle floating cards. Framer-motion: staggered fade+rise for headline, badge dots cycle green in sequence, rows populate top-to-bottom. Placeholder-ready for a later video/Lottie swap.
2. **Stats banner** — 4-column strip on tinted surface: $120B, Fidelity+Schwab, SOC 2 Type II, 2022. Small caps labels, oversized numeric.
3. **Product intro** — centered eyebrow "What is Atomic Insights?", H2 "One platform for every way money moves", subhead as provided, then a **guided-demo placeholder card** (16:9 tinted panel with play affordance + "Guided product tour coming soon" — swappable later).
4. **Feature suite** — five feature rows, alternating text-left / visual-right. Each: eyebrow, H3, one-line promise, italic differentiator, 3 bullet chips, "Learn more →" link. Custom mini-visual per feature (SVG/CSS): wire flow, bulk capital-call list, bill inbox, sweep dials, reconciliation ledger.
5. **Trust & social** — "Trusted by Leading Firms" heading, then a client logo row using the **three uploaded logos: Ohana Advisors, IEQ Capital, Baker Street Advisors**. Logos rendered at uniform height (~40px), horizontally centered with generous spacing, kept in original color on a light surface (they're already muted navy/grey — no filter needed). Below: 2×2 testimonial grid with the four quotes you supplied, attributed correctly. Lucas Babbitt (Co-Founder & CEO) gets a larger featured card; the other three (Reed / Baker Street, Jamal DeAllie / IEQ Capital, Hayley Gilbert / Ohana Advisors) tile beneath.
6. **Final CTA** — full-bleed deep-navy band with brand gradient glow, H2 "Start with Your Own Workflow", subhead, "Book a demo" + "Talk to our team" buttons.

## Header

Sticky, translucent-on-scroll. Left: logo. Center: About · Products▾ · Resources▾ · Insights▾ · Contact. Right: "Log In" (ghost) + "Book a Demo" (solid navy). Products/Resources/Insights use shadcn `NavigationMenu` for hover dropdowns with the items you listed. Mobile: shadcn `Sheet` drawer.

## Footer

Dark navy background. Integrations strip on top: "Connected across your stack: Schwab · Fidelity · Salesforce · Addepar · Arch · Canoe · iCapital". Four columns (Products, Company, Resources, Insights) with the exact links you gave. Trust line row: "SOC 2 Type II · Direct custodian API access · Built by operators, for operators". Bottom bar: © 2026 · Privacy · Terms · Security & Trust · atomicinsights.io · hi@atomicinsights.io. All links are `<Link to="/...">` placeholders (routes to be built later) so nav is real, not `<a href="#">`.

## SEO / head

Update `__root.tsx` head:
- title: "Atomic Insights — Money movement for RIAs and family offices"
- description: "One platform for wires, capital calls, bill pay, cash management, and reconciliation — connected directly to your custodians."
- og:title, og:description, og:type=website, twitter:card=summary_large_image
- favicon → logo mark
- No og:image yet (hosting auto-injects screenshot).

## Dependencies

Install: `framer-motion` (hero + feature animations). shadcn + lucide-react already present. Fonts self-hosted via CDN asset URLs (no Google Fonts, no `@import` of remote URLs — matches Tailwind v4 guidance).

## Out of scope for this pass

- Subpages (About, individual product pages, ROI Calculator, Case Studies, Blog, Media, Contact, Log In) — nav links point to future routes; 404 handles unknowns.
- Actual guided-demo embed / video (placeholder card).
- Backend / auth / forms (Book a demo CTA is a link only for now).

## Deliverable

A single `/` route that looks and feels like a modern, institutional fintech landing page — Monarch-caliber polish, Atomic Insights identity, all six content sections wired with the exact copy you provided, real client logos in the trust row, ready for real product imagery and subpages to slot in.
