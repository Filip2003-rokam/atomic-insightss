# Hero sekcija — tekst sinhronizovan sa pozadinskim videom

## Cilj
U `src/components/site/Hero.tsx` tekstualni sadržaj (headline + subline) treba da se menja u taktu sa pozadinskim videom. CTA dugmad (`Book a demo`, `See the platform`) ostaju statična i nepromenjena tokom celog videa.

## Šta se menja

### 1. Niz segmenata na vrhu fajla
Dodaje se `HERO_SEGMENTS` niz odmah ispod importa, pre `Hero` komponente:

```text
const HERO_SEGMENTS = [
  { start: 0,  headline: "...", subline: "..." },
  { start: 4,  headline: "...", subline: "..." },
  { start: 9,  headline: "...", subline: "..." },
];
```

- `start` je sekunda u videu od koje segment postaje aktivan.
- Aktivan je poslednji segment čiji je `start <= currentTime`.
- Inicijalno se popunjava Lorem Ipsum tekstom.
- Iznad niza ide komentar koji objašnjava kako se dodaje ili menja segment (format polja, pravilo aktivacije, primer).

### 2. Povezivanje sa stvarnim vremenom videa
- Dodaje se `videoRef = useRef<HTMLVideoElement>(null)`.
- Dodaje se `activeIndex` state (početno `0`).
- Na mount se, kada `showVideo` ima smisla, zaključava `timeupdate` listener na `<video>` elementu.
- U handleru se čita `videoRef.current.currentTime` i računa novi `activeIndex` preko `HERO_SEGMENTS`.
- Listener se čisti na unmount.
- Pošto je video loopovan, vraćanjem videa na 0 automatski se aktivira prvi segment — bez dodatne logike.

### 3. Animirana zamena teksta
- Postojeći statički `<motion.h1>` zamenjuje se dinamičkim blokom koji prikazuje headline i subline trenutnog segmenta.
- Za prelaz se koristi `framer-motion` koji već postoji u fajlu (`<motion.div>` ili `<AnimatePresence>` + `<motion.span>`).
- Trajanje fade-a: ~300 ms.
- Bez slide-a, bez pomeranja layouta.

### 4. Stabilna visina tekstualnog bloka
- Tekstualni kontejner dobija fiksnu ili minimalnu visinu (`min-h`) dovoljnu za najduži segment.
- To sprečava CTA dugmad da poskakuju gore-dole dok se tekst menja.

### 5. Fallback kada se video ne pušta
- Ako `showVideo` nije istinit (mobilni uređaj ili `prefers-reduced-motion`), video se ne renderuje.
- Tada se prikazuje samo **prvi segment** (`HERO_SEGMENTS[0]`) kao statičan tekst, bez animacije.
- Ovo se postiže uslovnim renderovanjem — kada `showVideo` nije aktivno, `activeIndex` ostaje `0` i animacija se ne pokreće.

## Šta se NE dira

- Pozadinski video, poster, `<source>` tagovi.
- Readability overlay gradienti (linije 44–46).
- `text-shadow` na headline-u.
- `brand-gradient-text` klasa na drugom delu headline-a.
- `HeroShowcase` ispod hero sekcije.
- Pozicija, stil i sadržaj CTA dugmadi.

## Rezultat

Nakon izmene, `HERO_SEGMENTS` niz se nalazi na vrhu `src/components/site/Hero.tsx`, odmah ispod import blokova i pre `export function Hero()`.
