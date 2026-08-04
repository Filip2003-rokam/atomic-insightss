# Hero sa pozadinskim videom (Monarch stil)

Video `Final_v3_3.mp4` (1920x1080, 14s, 30 MB) postaje full-bleed pozadina hero sekcije na landing stranici.

## Šta se menja

**Hero sekcija (`src/components/site/Hero.tsx`)**
- Video se pušta autoplay, muted, loop, playsInline preko cele sekcije (`object-cover`, `absolute inset-0`), iza sadržaja.
- Preko videa ide tamni gradient overlay (navy, jači pri dnu i levo) da tekst ostane čitljiv.
- Naslov, podnaslov, badge i trust linija prelaze u belu/svetlu varijantu; sekundarni CTA postaje "glass" dugme sa border-om.
- Postojeći laptop mock i floating kartice (Wire approved, Capital Call) ostaju, sa parallax-om kao sada, ali dobijaju jaču senku da se odvoje od videa.
- Sekcija dobija punu visinu (`min-h-[92vh]`) i tanki fade ka beloj pozadini pri dnu, da prelaz na sledeću sekciju bude gladak.
- Poštuje se `prefers-reduced-motion`: tada se video ne pušta, prikazuje se poster slika.

**Optimizacija videa**
- 30 MB je previše za hero. Video se komprimuje u dve verzije: MP4 (H.264, ~1600px širine, CRF ~28) i WebM (VP9), plus JPG poster iz prvog frejma.
- Cilj: ~3-5 MB umesto 30 MB, bez vidljivog gubitka na pozadini ispod overlay-a.
- Fajlovi se kače kao Lovable CDN assets, ne ulaze u repo.
- Na mobilnom se video ne učitava (samo poster slika) da se ne troši data.

## Tehnički detalji
- `ffmpeg` za transcode + poster; `lovable-assets create` za MP4/WebM/poster pointere u `src/assets/`.
- `<video>` sa `preload="metadata"`, `poster={...}`, `<source>` za WebM pa MP4.
- Overlay: `bg-gradient-to-r from-brand-navy-deep/85 via-brand-navy-deep/60 to-brand-navy-deep/30` + blagi vertikalni gradient.
- Ostale stranice i sekcije se ne diraju.

## Ne radim
- Ne menjam tekst hero-a, ni ostale sekcije landinga.
- Ne dodajem kontrole za play/pause niti zvuk.
