# Plan: Laptop mockup u Hero sekciji

Iz Claude dizajna (`Hero_Redesign.dc.html`) implementiram **samo laptop** — desna kolona hero-a. Sve ostalo (levi copy, gradient pozadina, floating kartice, promo bar, nav) ostaje kako je.

## Šta menjam
Samo `HeroDashboard` u `src/components/site/Hero.tsx`. Trenutno je to obična window kartica sa tabelom koja se pomera (parallax + hover shifts). Zamenjujem je laptop mockup-om iz dizajna.

## Struktura laptopa
- **Šasija:** tamno-navy (`#071838`) okvir sa `border-radius:20px 20px 6px 6px`, padding, aspect `16/10` ekran unutra.
- **Ekran:** beli, sa app chrome-om na vrhu (2 dot-a, mini logo, "Atomic Capital Advisory", avatar), levim sidebar-om (38px) sa 4 kvadratića, i scene stack-om desno.
- **Baza:** trapezoidna traka ispod ekrana sa `linear-gradient` + mala kvačica u sredini.
- **Float:** ceo laptop lagano lebdi (`y: [0,-10,0]`, 9s loop) — samo desktop (`hidden lg:block`), sa `useReducedMotion` guard-om.

## 3 scene (auto-cycle u ekranu, 18s ukupno, po 6s svaka)
Sve tri su `absolute inset-0` unutar scene-stack kontejnera, svaka sa keyframe animacijom koja je pokazuje 3–33% od 100% ciklusa:

1. **Payment Requests** (0–6s) — header sa tab pill-ovima ("Review · 2", "In process · 8"), tabela sa 5 redova (Abbie Garcia, Oliver Shaw, Meridian FO, Halcyon Cap, Ashwood FO), verification dots koji se resolve-uju kroz sivo→plavo→zeleno, status pill-ovi ("Approved"/"In review") koji pop-in-uju.
2. **Bulk Capital Call — Sequoia XII** (6–12s) — 3×2 grid LP kartica sa iznosima ($62K, $48.5K, $75K, $39.2K, $54.75K, "+ 42 more wires"), tamna traka na dnu sa progress fill-om i "Submitted ✓" chip-om.
3. **Cash Positions** (12–18s) — bar chart sa 5 stupaca (Operating/Reserve/T-Bills/MMF/Sweep) koji rastu, ispod "Idle cash detected → swept to T-Bills · +$18,420 est. annual yield".

## Postojeći floating cards
Zadržavam sve četiri float kartice koje su već tu (Total Volume, Pending, Wire approved toast, Sequoia capital call chip) — pozicioniraju se u odnosu na laptop wrapper isto kao i sada u odnosu na window karticu, ne diram njihov sadržaj.

## Ono što NE menjam
- Levu kolonu (badge, headline, paragraf, CTA-ovi, trust row)
- Gradient pozadinu hero sekcije
- Sve ostale sekcije stranice (FeatureSuite, itd.)
- Postojeći `useScroll` parallax na float karticama (ostaje)
- Mobile layout — laptop je `hidden lg:block`, na mobilnom se prikazuje fallback (jednostavna kartica sa 1 scenom, bez laptop šasije) da hero ne bude prazan

## Tehnički detalji
- Sve boje iz dizajna hardcode-ujem inline (nisu design tokens — `#071838`, `#6DBF80`, `#71AEDA`, `#464A80`, `#A3C64B`, `#3E8B57`).
- Keyframe animacije (`sceneWin`, `rise`, `popIn`, `resolveDot`, `progFill`, `growBar`, `heroFloat`) dodajem u `src/styles.css` kao globalne `@keyframes` (nije Tailwind utility) — postoji već sličan pattern.
- Sve `animation-play-state` respektuje `prefers-reduced-motion` preko `@media (prefers-reduced-motion: reduce) { * { animation-play-state: paused !important; } }` scoped na `.hero-laptop`.
- Uklanjam sadašnji `HeroDashboard` window/tabelu i njene helpere (`Stat`, `VerificationDots`, `rows`, `statusClasses`) — više nisu potrebni jer sve scene idu kroz statični markup u laptopu.

## Fajlovi koje diram
- `src/components/site/Hero.tsx` — zamena `HeroDashboard` komponente.
- `src/styles.css` — dodavanje keyframe-ova za laptop scene i float.
