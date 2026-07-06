## Cilj
Dodati suptilne scroll-triggered animacije na landing page — elementi se pojavljuju (fade + slide up) kad uđu u viewport dok korisnik skroluje.

## Pristup
Koristim već instalirani `framer-motion` (Hero ga već koristi) sa `whileInView` propom — nema novih dependencies, radi out-of-the-box, respektuje `prefers-reduced-motion` uz mali dodatak.

Kreiram jednu reusable komponentu `<Reveal>` u `src/components/site/Reveal.tsx`:
- fade in + translateY(20px → 0)
- trigger na `whileInView` sa `viewport={{ once: true, margin: "-80px" }}`
- podržava `delay` prop za stagger efekat
- respektuje `useReducedMotion` (bez animacije za korisnike koji to preferiraju)

## Gde se primenjuje
Wrapujem ključne sekcije/blokove na landing-u:

1. **StatsBanner** (`src/components/site/StatsBanner.tsx`) — svaki stat broj sa staggered delay (0, 0.1, 0.2, 0.3s)
2. **ProductIntro** (`src/components/site/ProductIntro.tsx`) — heading blok + demo iframe container
3. **FeatureSuite** (`src/components/site/FeatureSuite.tsx`) — section header + svaki feature card sa staggerom
4. **TrustSocial** (`src/components/site/TrustSocial.tsx`) — logo grid i testimonial blokovi
5. **FinalCTA** (`src/components/site/FinalCTA.tsx`) — CTA blok

**Hero se NE dira** — već ima entry animacije na mount (koje su ispravne jer je above-the-fold).

## Šta se NE menja
- Nikakva logika, layout, tekst, boje
- Postojeće Hero animacije ostaju
- Bez novih paketa

## Tehnički detalji
```tsx
// src/components/site/Reveal.tsx
"use client";
import { motion, useReducedMotion } from "framer-motion";

export function Reveal({ children, delay = 0, y = 20, className }: {...}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
```

Rezultat: mekan "reveal on scroll" efekat kroz celu stranicu, konzistentan tajming, bez performance overhead-a (once: true).
