# Plan: Bill Pay product page

Nova ruta `/products/bill-pay` sa sadržajem iz uploadovanog `Atomic_Insights_Bill_Pay.docx`. Link u header dropdown-u "Products" već postoji i pokazuje na `/products/bill-pay` — trenutno vodi u prazno, ova stranica ga popunjava.

Stil i tokeni: isti kao `about.tsx` i `Hero.tsx` (brand navy, `Reveal` scroll-in, opciono `WordReveal`/`CountUp` iz About-a za konzistentnost). Bez novih zavisnosti.

## Struktura (po dokumentu)

1. **Hero + product image**
   - Levo: badge "Bill Pay", H1 "Bill pay built for the family, not the back office", subheadline, dva CTA (`Book a demo`, `See it in action`).
   - Desno: product image placeholder — koristim postojeći `baker-street.png` asset (isti placeholder svuda gde dokument kaže "product image / product video", kasnije menjamo).

2. **Section 1 — The Problem**
   - Naslov "Bill pay for a family is not accounts payable" + 2 paragrafa.
   - Band ispod: 4 kolone (All / Multi / Full / 1) sa velikim brojem/rečju i opisom, tanka tamna/surface traka.

3. **Section 2 — How it works** (sa "product video" placeholderom)
   - Eyebrow "How it works" + H2 "Every client payment, in one place."
   - 4 numerisane kartice: Capture / Route / Pay / Record.
   - Ispod: video placeholder — isti `baker-street.png` u 16:9 okviru sa play ikonicom (bez pravog videa, kasnije menjamo).

4. **Section 3 — The Atomic Benefit** (sa "people image" placeholderom)
   - Split: levo "The Manual Work" (crveni ✕), desno "What Atomic Delivers" (zeleni ✓), oba iz dokumenta doslovno.
   - Iznad ili pored: people image placeholder — opet `baker-street.png`.

5. **Section 4 — CTA**
   - Tamna navy sekcija: "See it against your own bill-pay process" + kratki opis + "Book a demo" dugme. Isti stil kao closing CTA na About-u.

Zatim standardni `SiteFooter`.

## Fajlovi

- **`src/routes/products/bill-pay.tsx`** — nova ruta, `createFileRoute("/products/bill-pay")`, sopstveni `head()` (title, description, og:title/description, twitter card, canonical). Bez `og:image` za sada (placeholder nije prava slika).
- **`src/routeTree.gen.ts`** — auto-regeneriše se, ne diram.
- Header/Footer link već postoji, ne menjam.

## Placeholder slika

Svaki spot koji dokument označava kao "product image", "product video" ili "people image" renderuje `baker-street.png` (postojeći asset) u odgovarajućem okviru, sa jasnim komentarom `// TODO: replace placeholder` da lako nađeš kad budeš slao prave assete.

## Šta NE radim

- Ne pravim realnu video komponentu — samo statični placeholder frame.
- Ne diram druge stranice, About, homepage, ni druge product rute.
- Ne dodajem nove brand tokene ni nove pakete.
