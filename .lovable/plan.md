## Ubacivanje Figma clickable demo-a

**Gde:** `src/components/site/ProductIntro.tsx` — trenutni "guided demo" placeholder se zamenjuje pravim Figma prototype embed-om.

**Šta se menja:**
1. Placeholder karticu zameniti responsive 16:9 wrapper-om (`aspect-video`) koji sadrži `<iframe>` sa Figma embed URL-om:
   - `https://embed.figma.com/proto/NBW9OZH3SUEF0ClgLPPXpD/Web-App-Prototype?...&embed-host=share`
   - `width="100%" height="100%"`, `allowfullscreen`, `loading="lazy"`, suptilan border/shadow u brand stilu (rounded-2xl, brand-navy/10 border).
2. Dodati sekciji stabilan `id="demo"` za sidro.
3. Hero sekundarni CTA "See the platform" povezati kao `<a href="#demo">` sa smooth-scroll ponašanjem (već je globalno omogućeno preko Tailwind-a / može se dodati `scroll-mt-24` na sekciju za sticky header offset).

**Van opsega:** modal varijanta, analytics tracking, poseban `/demo` route. Ako kasnije zatrebaju, dodajemo posebno.
