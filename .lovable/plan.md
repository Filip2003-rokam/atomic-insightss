## Plan: Capital Calls product page

Create `src/routes/products/capital-calls.tsx` following the exact same pattern as `src/routes/products/bill-pay.tsx`, using `baker-street.png` as placeholder for all product/video/people images (with `// TODO: replace placeholder` comments).

### Sections
1. **Hero** — "Capital Calls" badge, H1 "Capital calls shouldn't cost you a full day", subheadline, two CTAs (Book a demo / See it in action), placeholder image.
2. **Problem** — "They were doing the same click 130 times" heading + 3 paragraphs, followed by a 4-column stat band: `130 → 1`, `0`, `2`, `FULL`.
3. **How it works** — 4 numbered cards (Document ingestion, Intelligent parsing, Workflow review, Custodian execution) + placeholder video image.
4. **The Atomic benefit** — split layout: "The Manual Work" (✕ list, 6 items) vs "What Atomic Delivers" (✓ list) + placeholder people image.
5. **CTA** — dark navy section, "See it against your own capital-call process", Book a demo link.

### Style
- Reuse `Reveal` scroll-in animations, brand tokens (`bg-brand-navy-deep`, `text-brand-navy`, `text-brand-green`, `text-brand-blue`), `Check`/`X` icons from lucide-react — identical to bill-pay.
- Own `head()` with unique title/description/og/twitter/canonical for `/products/capital-calls`. No og:image (placeholder isn't real).
- `baker-street.png` imported from `@/assets/baker-street.png.asset.json`.

### Not doing
- No new dependencies, no real video, no nav/footer link updates unless you ask, no other pages.
