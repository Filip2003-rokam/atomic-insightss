## Cilj
1. Očistiti hero — ukloniti 2 od 4 novo-dodata floating elementa da ne bude prenatrpano.
2. Dodati po jedan floating element na svaki od 5 feature vizuala u "Everything money movement demands" sekciji, sa istim suptilnim float loop-om.

## 1. Hero cleanup (`src/components/site/Hero.tsx`)
Uklanjam **Schwab · Fidelity Live pill** i **Cash yield sparkline widget**. Ostaje:
- Total Volume (postojeći, top-left)
- Pending (postojeći, bottom-right)
- Wire approved toast (novi, top-right) — najjači "aha" element
- Sequoia capital call chip (novi, bottom-left) — pokazuje bulk workflow

Uklanjam i pripadajuće `useTransform` parallax vrednosti i `TrendingUp` import.

## 2. Feature floating elementi (`src/components/site/FeatureSuite.tsx`)
Svaki `feature.visual` je već `absolute inset-0` unutar `relative rounded-2xl ... overflow-hidden` kontejnera. Problem: `overflow-hidden` seče sve što viri. **Rešenje:** dodajem drugi sibling sloj u `FeatureRow` — floating element se renderuje **izvan** overflow-hidden kartice, sa `absolute` pozicioniranjem u odnosu na spoljni wrapper.

Restrukturiram vizuelnu kolonu:
```
<Reveal>
  <div className="relative">  {/* NEW outer wrapper, no overflow */}
    <div className="rounded-2xl ... overflow-hidden aspect-[4/3]">
      {feature.visual}
    </div>
    {feature.floater}  {/* NEW: absolute, viri preko ivice */}
  </div>
</Reveal>
```

Svaki feature dobija svoj `floater` (desktop only, `hidden lg:block`, float loop iz framer-motion):

1. **Secured Core → "Wire sent ✓"** — mala bela pill kartica, gore-desno viri: zelena check ikonica + "Wire executed · $75K · Fidelity → Acme LP"
2. **Alts & Private → "87/87 submitted"** — dole-levo viri: progress mini-kartica sa "Bulk capital call · 87/87 wires · 12s"
3. **Bill Pay → "IRS · Paid"** — gore-desno viri: stamp-style pill "IRS Q3 · $112,000 · Paid · 1 click"
4. **Cash Management → "+$2.1M yield YTD"** — gore-desno viri: mala kartica sa uzlaznom strelicom i "Idle cash swept · +$2.1M yield YTD"
5. **Reporting & Recon → "100% reconciled"** — dole-desno viri: badge kartica sa zelenom check ikonicom "Salesforce ↔ Addepar · 100% match"

Svi koriste istu paletu (`bg-white`, `shadow-2xl shadow-brand-navy/15`, `ring-1 ring-brand-navy/5`, `text-brand-navy`) i isti float loop pattern (`animate={{ y: [0, -6, 0] }}` sa `duration: 4.5–5.5s`, različit delay). Naizmenično se pozicioniraju u odnosu na `reverse` prop tako da uvek vire ka centru stranice.

Bez `useReducedMotion` provere po floater-u (previše koda) — koristim jedan hook na vrhu FeatureSuite komponente i prosleđujem u FeatureRow.

## Šta NE diram
- Sadržaj vizuala (WireVisual, CapitalCallVisual, itd.)
- Levu tekstualnu kolonu feature-a
- Postojeće Reveal animacije
- Mobile layout — svi floater-i su `hidden lg:block`
