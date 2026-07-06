import { Reveal } from "./Reveal";

const stats = [
  { value: "$120B", label: "Assets on platform" },
  { value: "Fidelity + Schwab", label: "Live custodian API access" },
  { value: "SOC 2", label: "Type II certified" },
  { value: "2022", label: "Built by operators, for operators" },
];

export function StatsBanner() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className={`text-center lg:text-left ${i > 0 ? "lg:border-l lg:border-border lg:pl-8" : ""}`}
            >
              <div className="text-2xl sm:text-3xl font-semibold text-brand-navy tracking-tight">
                {s.value}
              </div>
              <div className="mt-1.5 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
