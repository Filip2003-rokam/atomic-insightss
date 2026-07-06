import ohana from "@/assets/ohana-logo.svg.asset.json";
import ieq from "@/assets/ieq.png.asset.json";
import baker from "@/assets/baker-street.png.asset.json";
import { Reveal } from "./Reveal";


const logos = [
  { name: "Ohana Advisors", url: ohana.url },
  { name: "IEQ Capital", url: ieq.url },
  { name: "Baker Street Advisors", url: baker.url },
];

const featured = {
  quote:
    "The infrastructure that used to exist only inside the wirehouses is now available to every independent firm managing complex wealth.",
  name: "Lucas Babbitt",
  role: "Co-Founder & CEO",
  note: "Former Goldman Sachs & Jordan Parks",
};

const testimonials = [
  {
    quote:
      "We were running the whole firm's cash management out of a spreadsheet and I could see exactly where that breaks as we grow. Atomic gives us the forecasting and execution in one place. It pays for itself.",
    name: "Reed",
    role: "Baker Street Advisors",
  },
  {
    quote:
      "We process capital calls at a volume most firms never see. Instead of hundreds of individual wires, Atomic lets us do a bulk submission per fund. That's the efficiency we need to hit deadlines and raise cash on time.",
    name: "Jamal DeAllie",
    role: "Associate Director, IEQ Capital",
  },
  {
    quote:
      "The bulk capital-call workflow is a huge value add for a family office like ours. It links with our data, and what used to be a manual slog is now a few boxes and an amount. It scaled with us exactly when we needed it to.",
    name: "Hayley Gilbert",
    role: "Operations, Ohana Advisors",
  },
];

export function TrustSocial() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-brand-blue font-medium">
            Trust
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-brand-navy tracking-tight">
            Trusted by leading firms
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-12 sm:gap-x-24 md:gap-x-32 lg:gap-x-40 gap-y-8 sm:gap-y-10">
          {logos.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.1}>
              <img
                src={l.url}
                alt={l.name}
                className="h-12 sm:h-20 lg:h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid lg:grid-cols-3 gap-6">
          {/* featured */}
          <Reveal className="lg:col-span-3 xl:col-span-3">
            <div className="rounded-3xl bg-brand-navy text-white p-8 sm:p-12 relative overflow-hidden">
              <div
                aria-hidden
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    "radial-gradient(600px 300px at 90% 10%, rgba(111,190,68,0.4), transparent 60%), radial-gradient(500px 260px at 10% 90%, rgba(47,128,194,0.4), transparent 60%)",
                }}
              />
              <div className="relative max-w-4xl">
                <svg className="h-8 w-8 text-brand-green mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 7c-3.3 0-6 2.7-6 6v4h6v-6H6c0-2.2 1.3-4 3-4V7zm12 0c-3.3 0-6 2.7-6 6v4h6v-6h-3c0-2.2 1.3-4 3-4V7z" />
                </svg>
                <p className="text-xl sm:text-2xl lg:text-3xl leading-snug font-medium">
                  "{featured.quote}"
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-11 w-11 rounded-full bg-white/10 flex items-center justify-center font-medium">
                    {featured.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-medium">{featured.name}</div>
                    <div className="text-sm text-white/70">{featured.role} · {featured.note}</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="rounded-2xl border border-border bg-white p-6 sm:p-7 h-full">
                <p className="text-brand-navy/85 leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 pt-5 border-t border-border">
                  <div className="text-sm font-medium text-brand-navy">{t.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
