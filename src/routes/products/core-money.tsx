import { createFileRoute, Link } from "@tanstack/react-router";
import { Play, Check, X } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/products/core-money")({
  head: () => ({
    meta: [
      { title: "Core Money Movement — Atomic Insights" },
      {
        name: "description",
        content:
          "Wires, ACH, journals, and checks executed straight through your custodians. No portal hopping. No re-keying.",
      },
      { property: "og:title", content: "Core Money Movement — Atomic Insights" },
      {
        property: "og:description",
        content:
          "Move money without leaving the platform. Direct execution through custodian APIs with a full audit trail.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://atomic-insightss.lovable.app/products/core-money" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://atomic-insightss.lovable.app/products/core-money" }],
  }),
  component: CoreMoneyPage,
});

const bandItems = [
  { big: "1st", label: "Fintech live on Schwab's money movement API" },
  { big: "0", label: "Manual portal re-entry steps to complete a payment" },
  { big: "4", label: "Payment types: ACH, wire, check, journal" },
  { big: "Full", label: "Audit trail on every action, timestamped" },
];

const steps = [
  { n: "1", title: "Create request", body: "Payment details entered once in Atomic, not re-keyed across portals." },
  { n: "2", title: "Validate", body: "Cash, SLOA, and repeat checks run automatically before submission." },
  { n: "3", title: "Approve", body: "Workflow tasks routed and signed off by the right people." },
  { n: "4", title: "Settle", body: "API call fires directly to the custodian. No portal re-entry." },
];

const manualWork = [
  "Logging into custodian portals to execute",
  "Re-keying wire instructions by hand",
  "Separate approvals over email",
  "Manual validation before each payment",
  "Reconciling confirmations one by one",
  "No shared audit trail across the team",
];

const atomicDelivers = [
  "Direct execution through custodian APIs",
  "Wires, ACH, journals, and checks in one place",
  "Configurable maker-checker approvals",
  "Automated validation on every request",
  "Security rails and controls built in",
  "Full audit trail, every action timestamped",
];

function CoreMoneyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-brand-navy/70">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                Core Money Movement
              </div>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold text-brand-navy tracking-tight leading-[1.05]">
                Move money without leaving the <span className="brand-gradient-text">platform</span>.
              </h1>
              <p className="mt-6 text-lg text-brand-navy/70 leading-relaxed max-w-xl">
                Wires, ACH, journals, and checks, executed straight through your custodians. No portal hopping. No re-keying.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/"
                  className="inline-flex items-center rounded-full bg-brand-navy px-5 py-3 text-sm font-medium text-white hover:bg-brand-navy-deep transition-colors"
                >
                  Book a demo
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center rounded-full border border-brand-navy/20 bg-white px-5 py-3 text-sm font-medium text-brand-navy hover:bg-surface transition-colors"
                >
                  See it in action
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              {/* TODO: replace placeholder product image */}
              <div className="relative rounded-2xl overflow-hidden border border-brand-navy/10 bg-gray-200 shadow-xl shadow-brand-navy/10 aspect-[4/3]" />
            </Reveal>
          </div>
        </section>

        {/* SECTION 1 — THE PROBLEM */}
        <section className="py-20 lg:py-28 bg-surface">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.2em] text-brand-blue font-medium">The problem</div>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-navy tracking-tight leading-[1.1]">
                The highest-frequency work is also the most exposed.
              </h2>
              <p className="mt-6 text-lg text-brand-navy/70 leading-relaxed">
                Core money movement is where a single error is most expensive.
              </p>
              <p className="mt-4 text-base text-brand-navy/70 leading-relaxed">
                A wire gets typed into a custodian portal. Then checked. Then typed again somewhere else. Every re-key is
                a chance for an error, and the errors here are the ones that undo years of trust. Most firms control the
                risk with people. Two sets of eyes, sometimes three. That is the right instinct. But the manual steps
                between those checks are where the friction lives.
              </p>
            </Reveal>
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-14">
            <Reveal>
              <div className="rounded-2xl border border-brand-navy/10 bg-white grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-brand-navy/10 overflow-hidden">
                {bandItems.map((it) => (
                  <div key={it.big} className="p-6 lg:p-8 text-center">
                    <div className="text-3xl lg:text-4xl font-semibold text-brand-navy tracking-tight">{it.big}</div>
                    <div className="mt-2 text-sm text-brand-navy/60">{it.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* SECTION 2 — HOW IT WORKS */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal className="max-w-3xl">
              <div className="text-xs uppercase tracking-[0.2em] text-brand-blue font-medium">How it works</div>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-navy tracking-tight leading-[1.1]">
                One workspace, from instruction to <span className="brand-gradient-text">settlement</span>.
              </h2>
            </Reveal>

            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={0.05 * i}>
                  <div className="h-full rounded-2xl border border-brand-navy/10 bg-white p-6 lg:p-7">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-navy text-white text-sm font-semibold">
                      {s.n}
                    </div>
                    <div className="mt-5 text-lg font-semibold text-brand-navy">{s.title}</div>
                    <p className="mt-2 text-sm text-brand-navy/70 leading-relaxed">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.15}>
              {/* TODO: replace placeholder product video */}
              <div className="mt-14 relative rounded-2xl overflow-hidden border border-brand-navy/10 bg-gray-200 shadow-xl shadow-brand-navy/10 aspect-[16/9]">
                <div className="absolute inset-0 flex items-center justify-center bg-brand-navy/20">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand-navy shadow-lg">
                    <Play className="h-6 w-6 ml-0.5 fill-current" />
                  </span>
                </div>
              </div>
              <div className="mt-3 text-xs text-brand-navy/50 text-center">Product walkthrough · Coming soon</div>
            </Reveal>
          </div>
        </section>

        {/* SECTION 3 — THE ATOMIC BENEFIT */}
        <section className="py-24 lg:py-32 bg-surface">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal className="max-w-3xl">
              <div className="text-xs uppercase tracking-[0.2em] text-brand-blue font-medium">The Atomic benefit</div>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-navy tracking-tight leading-[1.1]">
                The manual work we replace.
              </h2>
            </Reveal>

            <div className="mt-12 grid lg:grid-cols-3 gap-6 items-start">
              <Reveal>
                <div className="rounded-2xl border border-brand-navy/10 bg-white p-7">
                  <div className="text-sm font-semibold text-brand-navy">The Manual Work</div>
                  <ul className="mt-5 space-y-3">
                    {manualWork.map((t) => (
                      <li key={t} className="flex gap-3 text-sm text-brand-navy/70 leading-relaxed">
                        <X className="h-4 w-4 mt-0.5 shrink-0 text-red-500" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                {/* TODO: replace placeholder people image */}
                <div className="relative rounded-2xl overflow-hidden border border-brand-navy/10 bg-gray-200 aspect-[4/5]" />
              </Reveal>

              <Reveal delay={0.15}>
                <div className="rounded-2xl border border-brand-green/30 bg-white p-7">
                  <div className="text-sm font-semibold text-brand-navy">What Atomic Delivers</div>
                  <ul className="mt-5 space-y-3">
                    {atomicDelivers.map((t) => (
                      <li key={t} className="flex gap-3 text-sm text-brand-navy/70 leading-relaxed">
                        <Check className="h-4 w-4 mt-0.5 shrink-0 text-brand-green" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SECTION 4 — CTA */}
        <section className="py-24 lg:py-32 bg-brand-navy-deep text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-40 pointer-events-none" style={{
            background: "radial-gradient(600px circle at 30% 20%, rgba(56,189,248,0.15), transparent 60%), radial-gradient(500px circle at 80% 80%, rgba(34,197,94,0.12), transparent 60%)",
          }} />
          <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1]">
                See it against your own reconciliation process.
              </h2>
              <p className="mt-6 text-lg text-white/70 leading-relaxed">
                Show us how your firm reconciles today. We'll show you the difference.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <Link
                  to="/"
                  className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-medium text-brand-navy hover:bg-white/90 transition-colors"
                >
                  Book a demo
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
