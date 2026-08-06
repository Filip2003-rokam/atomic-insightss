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

        <div className="mt-20">
          <Reveal>
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
        </div>
      </div>
    </section>
  );
}
