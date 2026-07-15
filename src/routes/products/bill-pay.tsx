import { createFileRoute, Link } from "@tanstack/react-router";
import { Play, Check, X } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/products/bill-pay")({
  head: () => ({
    meta: [
      { title: "Comprehensive Bill Pay — Atomic Insights" },
      {
        name: "description",
        content:
          "Bill pay built for the family, not the back office. Vendors, tuition, taxes, and recurring payments centralized in one platform with a full audit trail.",
      },
      { property: "og:title", content: "Comprehensive Bill Pay — Atomic Insights" },
      {
        property: "og:description",
        content:
          "Vendors, tuition, taxes, and recurring payments — centralized in one platform with a full audit trail.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { rel: "canonical", href: "https://atomic-insightss.lovable.app/products/bill-pay" },
    ],
  }),
  component: BillPayPage,
});

const bandItems = [
  { big: "All", label: "Transaction types" },
  { big: "Multi", label: "Entity structures handled natively" },
  { big: "Full", label: "Audit trail on every payment, timestamped" },
  { big: "1", label: "Platform for every client payment" },
];

const steps = [
  { n: "1", title: "Capture", body: "Invoices captured, coded, and attached, ready for review." },
  { n: "2", title: "Route", body: "Vendors and billers managed together, approvals built in." },
  { n: "3", title: "Pay", body: "Every transaction type supported, no delayed payment times." },
  { n: "4", title: "Record", body: "Full audit trail on every payment, timestamped." },
];

const manualWork = [
  "Tracking client bills across spreadsheets",
  "Re-entering vendor and payment detail",
  "Approvals scattered across email",
  "Detail that lives in one person's head",
  "No record built for family categories",
  "Rebuilding the report when a client asks",
];

const atomicDelivers = [
  "Vendor and biller management in one place",
  "Invoice capture, coding, and attachment",
  "Payment support for all transaction types",
  "Family categories, including charitable gifts",
  "No delayed payment times",
  "Full audit trail on every payment",
];

function BillPayPage() {
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
                Bill Pay
              </div>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold text-brand-navy tracking-tight leading-[1.05]">
                Bill pay built for the family, not the <span className="brand-gradient-text">back office</span>.
              </h1>
              <p className="mt-6 text-lg text-brand-navy/70 leading-relaxed max-w-xl">
                Vendors, tuition, taxes, and recurring payments, centralized in one platform with a full audit trail.
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
                Bill pay for a family is not accounts payable.
              </h2>
              <p className="mt-6 text-lg text-brand-navy/70 leading-relaxed">
                Generic AP tools treat a family's payments like a business expense report. They are not one.
              </p>
              <p className="mt-4 text-base text-brand-navy/70 leading-relaxed">
                It is many entities, many vendors, and payments that carry a personal weight most software never accounts
                for. So the work gets done by hand, across spreadsheets and separate approvals, with the detail living in
                someone's head. That does not scale, and it does not leave a clean record. When a family asks where the
                money went, the answer should already be there.
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
                Every client payment, in <span className="brand-gradient-text">one place</span>.
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
                See it against your own bill-pay process.
              </h2>
              <p className="mt-6 text-lg text-white/70 leading-relaxed">
                Show us how your firm handles client payments today. We'll show you the difference.
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
