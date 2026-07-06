## Cilj
Dodati dodatne floating "delove appa" oko HeroDashboard-a (desktop only), sa suptilnim scroll parallax + laganim float loop-om, da hero deluje kao živi proizvod koji "izlazi iz ekrana".

## Šta menjam
Samo `src/components/site/Hero.tsx`. Ostatak sajta ostaje netaknut.

## Novi floating elementi (desktop `lg:` only, sakriveni na mobile)
Oko postojeće dashboard kartice, iznad/pored/ispod nje, dodajem 4 nova elementa (pored postojeća 2 — Total Volume i Pending). Svaki će imati različit parallax speed i različit float delay da ne izgleda robotski.

1. **Toast: "Wire approved"** — gore desno, iznad dashboard-a. Zeleni check ikonica + "Wire · $75,000 approved" + "2s ago". Stil sličan tvom `Service logged by voice` primeru (bela pill kartica, ikonica u zelenom krugu).
2. **Mini custodian pill** — levo iznad, mala kartica: "Schwab · Connected" sa zelenom pulse tačkom.
3. **Capital call chip** — dole levo, ispod dashboard-a: "Capital Call · Sequoia XII · $2.4M · Bulk submit ✓"
4. **Cash yield mini-widget** — desno pored dashboard-a: mala kartica sa "Idle cash · 4.87% APY" i minijaturni sparkline (SVG polyline).

Pozicije su `absolute` sa negativnim offset-ima (`-top-10 -right-12`, itd.) tako da vire preko okvira dashboard kartice — efekat "izlazi iz ekrana".

## Animacije
- **Ulazna:** framer-motion `initial/animate` sa staggered delay-ima (nastavak postojećeg pattern-a hero-a).
- **Kontinuirani float loop:** svaki floating element dobija `animate={{ y: [0, -8, 0] }}` sa `transition={{ duration: 4–6s, repeat: Infinity, ease: "easeInOut", delay: varijabilan }}`. Različit duration/delay po elementu → organsko kretanje.
- **Scroll parallax:** koristim `useScroll` + `useTransform` iz framer-motion (već instaliran) da svaki element ima različit `y` speed dok se hero skroluje. Bliži elementi se pomeraju brže, dalji sporije.
- **`useReducedMotion` guard:** ako korisnik ima reduce-motion, isključujem float loop i parallax, ostaje samo ulazni fade.

## Responsive
Svi novi elementi su `hidden lg:block` — mobile ostaje čist (isto kao postojeće floating summary/pending kartice).

## Šta NE diram
- Levu kolonu hero-a (headline, CTA, badges) — bez promena.
- Reveal komponentu i animacije na ostatku landinga.
- Boje/tokene — koristim postojeće `brand-navy`, `brand-green`, `brand-blue`.

## Tehnički detalji
- Sve unutar `HeroDashboard()` funkcije, u istom relative kontejneru kao postojeći floating cards.
- Sparkline je inline SVG (10-12 tačaka), bez novih dep-a.
- Parallax `useScroll` sa `offset: ["start end", "end start"]` targeting hero sekcije preko `ref`.
