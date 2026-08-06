# Gantari font iz zipa na celom sajtu

Zip sadrži isti Gantari koji sajt već koristi, ali u punoj zvaničnoj verziji: dva variable fajla (normal + italic, težine 100-900) i 18 statičkih rezova. Sajt trenutno vuče dva ručno dodata TTF-a iz `public/assets/`.

## Šta radim

1. Uzimam iz zipa `Gantari-VariableFont_wght.ttf` i `Gantari-Italic-VariableFont_wght.ttf` (pokrivaju sve težine i kurziv, pa statički rezovi nisu potrebni).
2. Konvertujem ih u **WOFF2** (oko 3x manji fajl, brže učitavanje) i zadržavam TTF kao fallback.
3. Uploadujem ih kao CDN asete i zamenjujem stare font fajlove.
4. U `src/styles.css` ažuriram oba `@font-face` pravila na nove fajlove, sa `woff2` prvo pa `truetype-variations` kao rezerva.
5. Tokeni `--font-sans` i `--font-display` ostaju "Gantari", tako da se font automatski primenjuje na ceo sajt (home, about, sve product stranice) bez diranja komponenti.
6. Uklanjam stare font asete koji više nisu referencirani.

## Provera

Build + vizuelna provera home i about stranice da su naslovi (bold/semibold) i telo teksta ispravno renderovani, bez FOUT-a.

## Napomena

Ako klijent zapravo želi drugi font a ne Gantari, javi - ovaj zip je Gantari, isti koji je već na sajtu, pa je efekat "osvežavanje/kompletiranje" postojećeg fonta, ne promena izgleda.
