# Plan: About Us stranica

Nova ruta `/about` sa sadržajem iz uploadovanog `Atomic_Insights_About_Us.docx`, vizuelno inspirisana IEQ Capital about stranicom (cinematic hero sa tamnom navy overlay-om preko fotografije, tanka svetla tipografija, dosta belog prostora, tihi minimalizam).

## Struktura stranice

1. **Hero (full-viewport, cinematic)**
   - Fullscreen navy pozadina sa suptilnim gradient/texture overlay-om (u stilu IEQ moon shot, ali apstraktno — arhitektonski/atomic pattern, ne astronaut).
   - Naslov u tankom serif/light sans stilu: **"Institutional Precision. Human Trust."**
   - Bez CTA-a u hero-u — samo mirna izjava, kao na IEQ.

2. **Our Mission**
   - Belа sekcija, centrirana kolona (max ~720px).
   - Mali eyebrow "Our Mission", zatim lead paragraf ("We believe the firms trusted…") u većem svetlom stilu, pa dva prateća paragrafa manjim body tekstom.

3. **Why we built Atomic** (split layout)
   - Levo: naslov + tekst iz sekcije "The Why" (3 paragrafa).
   - Desno: image placeholder za Rich & Lucas portret (koristi jedan od već postojećih assets kao privremeni fill; kasnije korisnik ubaci pravu fotku).

4. **Atomic Connects the Systems You Already Use**
   - Naslov + kratki paragraf.
   - Ispod: reuse postojećeg integrations reda iz `SiteFooter`-a (Schwab, Fidelity, Salesforce, Addepar, Arch, Canoe, iCapital) kao statičan connectivity band. (Napomena iz dokumenta traži HTML animaciju — ostaviću placeholder komentar i jednostavan grid; ako želiš animaciju, uradićemo u sledećem koraku.)

5. **Proof band**
   - Tanka tamna traka: `$120B assets on platform · Fidelity + Schwab live API access · SOC 2 Type II · Founded 2022`.

6. **Leadership**
   - Naslov "Leadership", ispod 2 kartice (Lucas Babbitt, Nick Chen) sa avatar placeholder-om, imenom, titulom i bio-om iz dokumenta. Nick ima "Bio coming soon" jer nije dostavljen.

7. **What we stand for**
   - 3 kolone (Everything in one place / Accuracy you can stand behind / Time returned to the work that matters), svaka sa mikro-ikonom + naslov + kratki opis iz dokumenta.

8. **Closing CTA**
   - Tamna navy sekcija: "See your systems working as one." + primarni "Book a demo" i sekundarni "Talk to our team".

Zatim standardni `SiteFooter`.

## Fajlovi koje kreiram / menjam

- **`src/routes/about.tsx`** — nova ruta, `createFileRoute("/about")`, sa svojim `head()` (title/description/og:title/og:description specifično za About). Bez og:image za sada.
- **`src/components/site/AboutHero.tsx`** — hero komponenta (odvojena da ostane čista).
- **`src/components/site/AboutSections.tsx`** — ostale sekcije stranice (mission, why, connectivity, proof, leadership, values, CTA) da fajl `about.tsx` ostane pregledan.
- **`src/components/site/SiteHeader.tsx`** — dodajem link "About" da vodi na `/about` (trenutno "About" link vodi na `/`).
- **`src/components/site/SiteFooter.tsx`** — "About" u Company koloni vodi na `/about`.
- **`routeTree.gen.ts`** — automatski se regeneriše, ne diram ručno.

## Vizuelni pristup (inspirisano IEQ)

- Postojeći brand tokeni: `bg-brand-navy-deep`, `text-brand-navy`, `bg-brand-green` — koristim ih, ne dodajem nove.
- Hero: `bg-brand-navy-deep` + suptilan radial gradient + zrnasti overlay (CSS), tanki `font-weight: 300` naslov sa `tracking-wide`, uppercase varijanta odbačena (Atomic ima moderniji ton — koristim mixed case kao u ostatku sajta).
- Sve ostale sekcije: postojeće `bg-white` / `bg-surface` smene, iste type/spacing skale kao Hero.tsx da bude konzistentno sa homepage-om.
- Bez novih zavisnosti; motion sekcije koriste postojeći `Reveal` wrapper za scroll-in animacije.

## Šta NE radim (osim ako ne tražiš)

- Ne pravim posebne detaljne stranice za pojedinačne founder-e (dokumenta pominje "credibility through founder pages" ali nisu dostavljeni bio-detalji za Nick-a — ostavljam za sledeći korak).
- Ne implementiram custom "Atomic Connectivity Layer" animaciju — koristim statičan integrations band; ako pošalješ HTML animaciju iz dokumenta, ubaciću je posle.
- Ne diram homepage, Hero, FeatureSuite ni bilo šta drugo van header/footer linkova.
