import { createFileRoute, Link } from "@tanstack/react-router";
import { Play, Check, X } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/products/capital-calls")({
  head: () => ({
    meta: [
      { title: "Capital Calls — Atomic Insights" },
      {
        name: "description",
        content:
          "Fund capital calls, capture distributions, and move private-market cash across every client — without doing it one wire at a time.",
      },
      { property: "og:title", content: "Capital Calls — Atomic Insights" },
      {
        property: "og:description",
        content:
          "Fund calls, capture distributions and move private-market cash across every client, without doing it one wire at a time.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { rel: "canonical", href: "https://atomic-insightss.lovable.app/products/capital-calls" },
    ],
  }),
  component: CapitalCallsPage,
});

const bandItems = [
  { big: "130 → 1", label: "Capital calls to a single bulk submission" },
  { big: "0", label: "Portal re-entry steps to complete a payment" },
  { big: "2", label: "Integrations feeding notices: Canoe & Arch" },
  { big: "FULL", label: "Audit trail on every action, timestamped" },
];

const steps = [
  { n: "1", title: "Document ingestion", body: "Capital call notices arrive via Canoe or Arch integration automatically." },
  { n: "2", title: "Intelligent parsing", body: "Fund name, amount, due date, and wire instructions extracted without manual entry." },
  { n: "3", title: "Workflow review", body: "A structured approval workflow routes the payment to the right people." },
  { n: "4", title: "Custodian execution", body: "Payment transmitted directly to Schwab or Fidelity via real-time API. No portal required." },
];

const manualWork = [
  "Logging into multiple fund portals",
  "Re-keying wire instructions and amounts",
  "Spreadsheet tracking of open calls",
  "Swivel-chair entry into custodian portals",
  "Chasing approvals over email",
  "Manual reconciliation of confirmations",
];

const atomicDelivers = [
  "Automatic notice ingestion from Canoe & Arch",
  "Structured draft payment requests for review",
  "SLOA validation before submission",
  "Real-time cash and margin verification",
  "Direct API transmission to Schwab & Fidelity",
  "Full audit trail, every action timestamped",
];

function CapitalCallsPage() {
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
                Capital Calls
              </div>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold text-brand-navy tracking-tight leading-[1.05]">
                Capital calls shouldn't cost you a <span className="brand-gradient-text">full day</span>.
              </h1>
              <p className="mt-6 text-lg text-brand-navy/70 leading-relaxed max-w-xl">
                Fund calls, capture distributions and move private-market cash across every client, without doing it one wire at a time.
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
              <div className="relative rounded-2xl overflow-hidden border border-brand-navy/10 bg-gray-200 shadow-xl shadow-brand-navy/10 aspect-[4/3]">
                {/* TODO: replace placeholder product image */}
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
                They were doing the same click 130 times.
              </h2>
              <p className="mt-6 text-lg text-brand-navy/70 leading-relaxed">
                Alternatives are where the manual work piles up.
              </p>
              <p className="mt-4 text-base text-brand-navy/70 leading-relaxed">
                A single capital call can mean funding dozens of client accounts, each one by hand, against a deadline.
                Distributions arrive and have to be captured, routed, and matched. Miss a notice and the cost is real.
              </p>
              <p className="mt-4 text-base text-brand-navy/70 leading-relaxed">
                The tools most firms use were built for public markets. Private markets move differently, and the software
                never caught up. So the work falls to people, one action at a time.
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
                Fund notice to custodian execution, without the <span className="brand-gradient-text">manual steps</span>.
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
                {/* TODO: replace placeholder product video */}
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
                <div className="relative rounded-2xl overflow-hidden border border-brand-navy/10 bg-gray-200 aspect-[4/5]">
                {/* TODO: replace placeholder people image */}
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
                See it against your own capital-call process.
              </h2>
              <p className="mt-6 text-lg text-white/70 leading-relaxed">
                Show us how your firm funds calls today. We'll show you the difference.
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
