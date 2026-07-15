import { createFileRoute, Link } from "@tanstack/react-router";
import { Play, Check, X } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal } from "@/components/site/Reveal";
import bakerStreet from "@/assets/baker-street.png.asset.json";

export const Route = createFileRoute("/products/reporting")({
  head: () => ({
    meta: [
      { title: "Reporting & Reconciliation — Atomic Insights" },
      {
        name: "description",
        content:
          "A complete audit trail and client-ready reporting across custodian, CRM, and portfolio systems.",
      },
      { property: "og:title", content: "Reporting & Reconciliation — Atomic Insights" },
      {
        property: "og:description",
        content:
          "One record. Every system. No rebuilding. Client-ready reporting in seconds.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://atomic-insightss.lovable.app/products/reporting" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://atomic-insightss.lovable.app/products/reporting" }],
  }),
  component: ReportingPage,
});

const bandItems = [
  { big: "1", label: "Record across custodian, CRM, and PMS" },
  { big: "2-Way", label: "CRM and portfolio data sync" },
  { big: "Full", label: "Transaction-level audit trail, automatic" },
  { big: "Seconds", label: "To pull a client-ready report" },
];

const steps = [
  { n: "1", title: "Reconcile", body: "Every transaction matched to one ending balance." },
  { n: "2", title: "Log", body: "Transaction-level audit trail, built without manual effort." },
  { n: "3", title: "Sync", body: "Data flows both ways with CRM and portfolio systems." },
  { n: "4", title: "Report", body: "Client-ready reporting pulls in seconds." },
];

const manualWork = [
  "Cross-checking transactions one account at a time",
  "Every team member using their own method",
  "No shared audit trail",
  "Re-keying data between CRM and custodian",
  "Rebuilding reports by hand on request",
  "Chasing down where the money went",
];

const atomicDelivers = [
  "Every transaction reconciled to one record",
  "Transaction-level audit trail, automatic",
  "Bi-directional Salesforce CRM sync",
  "Addepar and portfolio system sync",
  "Client-ready cashflow reporting",
  "A single system of record across the stack",
];

function ReportingPage() {
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
                Reporting & Reconciliation
              </div>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold text-brand-navy tracking-tight leading-[1.05]">
                One record. Every system. <span className="brand-gradient-text">No rebuilding</span>.
              </h1>
              <p className="mt-6 text-lg text-brand-navy/70 leading-relaxed max-w-xl">
                A complete audit trail and client-ready reporting across custodian, CRM, and portfolio systems.
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
              <div className="relative rounded-2xl overflow-hidden border border-brand-navy/10 bg-brand-navy/[0.03] shadow-xl shadow-brand-navy/10 aspect-[4/3]">
                <img src={bakerStreet.url} alt="Product preview" className="absolute inset-0 h-full w-full object-cover" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* SECTION 1 — THE PROBLEM */}
        <section className="py-20 lg:py-28 bg-surface">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.2em] text-brand-blue font-medium">The problem</div>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-navy tracking-tight leading-[1.1]">
                Reconciliation is where the day disappears.
              </h2>
              <p className="mt-6 text-lg text-brand-navy/70 leading-relaxed">
                It rarely gets a firm in the door. But it decides whether a client stays.
              </p>
              <p className="mt-4 text-base text-brand-navy/70 leading-relaxed">
                Every transaction cross-checked against a reference code, one account at a time. Every person with their
                own method. No shared trail. When a client asks where the money went, the answer takes hours to assemble.
                It is the quiet work that drives retention and referral, because it answers the question every client
                eventually asks.
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
                A single source of truth across the <span className="brand-gradient-text">stack</span>.
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
              <div className="mt-14 relative rounded-2xl overflow-hidden border border-brand-navy/10 bg-brand-navy/[0.03] shadow-xl shadow-brand-navy/10 aspect-[16/9]">
                <img src={bakerStreet.url} alt="Product video preview" className="absolute inset-0 h-full w-full object-cover" />
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
                <div className="relative rounded-2xl overflow-hidden border border-brand-navy/10 bg-brand-navy/[0.03] aspect-[4/5]">
                  <img src={bakerStreet.url} alt="Atomic team" className="absolute inset-0 h-full w-full object-cover" />
                </div>
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
