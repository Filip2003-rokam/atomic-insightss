import { Link } from "@tanstack/react-router";
import { ArrowRight, Zap, Layers, Receipt, LineChart, FileCheck } from "lucide-react";
import type { ReactNode } from "react";

type Feature = {
  eyebrow: string;
  title: string;
  promise: string;
  differentiator: string;
  bullets: string[];
  icon: ReactNode;
  visual: ReactNode;
};

const features: Feature[] = [
  {
    eyebrow: "Secured Core",
    title: "Money Movement",
    promise: "Execute wires, ACH, journals, and checks through one secure workspace.",
    differentiator: "Direct custodian execution. No portal hopping, no spreadsheets.",
    bullets: ["Real-time custodian APIs", "Maker-checker approvals", "Validation on every request"],
    icon: <Zap className="h-4 w-4" />,
    visual: <WireVisual />,
  },
  {
    eyebrow: "Alts & Private Investments",
    title: "Bulk capital calls, without the chase.",
    promise: "Fund capital calls and process distributions without the manual chase.",
    differentiator: "Built around private-market cadence, not retrofitted.",
    bullets: ["Bulk capital call workflow", "Canoe, Arch, iCapital integrations", "Cross-entity allocation"],
    icon: <Layers className="h-4 w-4" />,
    visual: <CapitalCallVisual />,
  },
  {
    eyebrow: "Comprehensive Bill Pay",
    title: "Every client payment, one platform.",
    promise: "Centralize every client payment — vendors, tuition, taxes — in one platform.",
    differentiator: "Purpose-built for the family-CFO model, not generic AP.",
    bullets: ["Vendor & biller management", "Invoice capture", "Full audit trail on every payment"],
    icon: <Receipt className="h-4 w-4" />,
    visual: <BillPayVisual />,
  },
  {
    eyebrow: "Cash Management",
    title: "Treasury across every account.",
    promise: "Orchestrate treasury across accounts, entities, and custodians.",
    differentiator: "Cashflow intelligence layered on the rails. Not just movement.",
    bullets: ["Multi-account visibility", "Sweep rules & scheduled transfers", "Higher-yield management"],
    icon: <LineChart className="h-4 w-4" />,
    visual: <CashVisual />,
  },
  {
    eyebrow: "Reporting & Reconciliation",
    title: "One system of record.",
    promise: "A complete audit trail and cashflow reporting across every source of truth.",
    differentiator: "A single system of record across custodian, CRM, and PMS.",
    bullets: ["Salesforce CRM sync", "Transaction-level audit trail", "Client-ready cashflow reporting"],
    icon: <FileCheck className="h-4 w-4" />,
    visual: <ReconVisual />,
  },
];

export function FeatureSuite() {
  return (
    <section className="bg-surface border-y border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] text-brand-blue font-medium">
            The Atomic Suite
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-navy tracking-tight leading-[1.1]">
            Everything money movement demands, in one platform.
          </h2>
          <p className="mt-5 text-lg text-brand-navy/70 leading-relaxed">
            From capital call to wire confirmation. No re-keying, no portal hopping, no spreadsheets.
          </p>
        </div>

        <div className="mt-20 space-y-24 lg:space-y-32">
          {features.map((f, i) => (
            <FeatureRow key={f.title} feature={f} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureRow({ feature, reverse }: { feature: Feature; reverse: boolean }) {
  return (
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div className={reverse ? "lg:order-2" : ""}>
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-navy/10 bg-white px-3 py-1 text-xs font-medium text-brand-navy">
          <span className="text-brand-blue">{feature.icon}</span>
          {feature.eyebrow}
        </div>
        <h3 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-semibold text-brand-navy tracking-tight leading-[1.15]">
          {feature.promise}
        </h3>
        <p className="mt-4 italic text-brand-navy/60 text-base">{feature.differentiator}</p>

        <ul className="mt-6 space-y-2">
          {feature.bullets.map((b) => (
            <li key={b} className="flex items-center gap-2.5">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-brand-green" />
              <span className="text-sm text-brand-navy/80">{b}</span>
            </li>
          ))}
        </ul>

        <Link
          to="/"
          className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-brand-navy hover:text-brand-blue transition-colors group"
        >
          Learn more
          <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      <div className={reverse ? "lg:order-1" : ""}>
        <div className="relative rounded-2xl bg-white border border-border shadow-xl shadow-brand-navy/5 overflow-hidden aspect-[4/3]">
          {feature.visual}
        </div>
      </div>
    </div>
  );
}

/* ---------------- visuals ---------------- */

function WireVisual() {
  return (
    <div className="absolute inset-0 p-6 flex flex-col gap-3">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">New wire request</div>
      {[
        { label: "From", value: "Fidelity ····4191", ok: true },
        { label: "To", value: "Acme LP · Routing ····8839", ok: true },
        { label: "Amount", value: "$75,000.00", ok: true },
        { label: "SLOA verification", value: "Signed 09/12", ok: true },
        { label: "Repeat detection", value: "Matches prior payee", ok: true },
      ].map((row) => (
        <div key={row.label} className="flex items-center justify-between border border-border rounded-lg px-3 py-2.5 text-sm">
          <span className="text-muted-foreground text-xs">{row.label}</span>
          <span className="flex items-center gap-2 font-medium text-brand-navy">
            {row.value}
            <span className={`h-1.5 w-1.5 rounded-full ${row.ok ? "bg-emerald-500" : "bg-amber-400"}`} />
          </span>
        </div>
      ))}
      <div className="mt-auto flex items-center justify-between">
        <span className="text-[11px] text-muted-foreground">Maker-checker · 1 of 2 approvals</span>
        <button className="rounded-full bg-brand-navy text-white text-xs px-4 py-2">Submit wire</button>
      </div>
    </div>
  );
}

function CapitalCallVisual() {
  const items = ["Fund 25 · Acme LP", "Growth VII · Sequoia", "Opportunities II · IEQ", "Ventures III · Ohana", "Bridge IX · Baker"];
  return (
    <div className="absolute inset-0 p-6 flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Bulk capital call · 87 wires</div>
        <div className="text-xs font-medium text-brand-navy">$14.2M</div>
      </div>
      <div className="grid grid-cols-6 gap-1 h-14 items-end mb-4">
        {[40, 65, 30, 80, 55, 45].map((h, i) => (
          <div key={i} className="rounded-t bg-gradient-to-t from-brand-blue to-brand-green" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="space-y-2 flex-1 overflow-hidden">
        {items.map((it, i) => (
          <div key={it} className="flex items-center justify-between rounded-lg border border-border px-3 py-2 text-xs">
            <span className="text-brand-navy font-medium">{it}</span>
            <span className="flex items-center gap-2 text-muted-foreground">
              <span>{18 - i * 3} entities</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BillPayVisual() {
  return (
    <div className="absolute inset-0 p-6">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-3">Inbox · 12 invoices</div>
      <div className="space-y-2">
        {[
          { v: "Stanford University", tag: "Tuition", amt: "$28,400.00" },
          { v: "Barnes & Thornburg LLP", tag: "Legal", amt: "$4,200.00" },
          { v: "IRS Q3 Estimate", tag: "Tax", amt: "$112,000.00" },
          { v: "Casa Vista Landscape", tag: "Property", amt: "$1,875.00" },
          { v: "Hearst Digital", tag: "Subscription", amt: "$120.00" },
        ].map((r) => (
          <div key={r.v} className="flex items-center justify-between rounded-lg border border-border px-3 py-2.5 text-xs">
            <div className="flex items-center gap-3">
              <div className="h-7 w-7 rounded-lg bg-surface flex items-center justify-center text-brand-navy font-medium">
                {r.v[0]}
              </div>
              <div>
                <div className="text-brand-navy font-medium">{r.v}</div>
                <div className="text-muted-foreground text-[10px] uppercase tracking-wider">{r.tag}</div>
              </div>
            </div>
            <div className="tabular-nums text-brand-navy font-medium">{r.amt}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CashVisual() {
  return (
    <div className="absolute inset-0 p-6">
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="rounded-xl border border-border p-3">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Total cash</div>
          <div className="text-xl font-semibold text-brand-navy mt-1">$847M</div>
          <div className="text-[10px] text-emerald-600 mt-1">+2.4% this week</div>
        </div>
        <div className="rounded-xl border border-border p-3">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Yield capture</div>
          <div className="text-xl font-semibold text-brand-navy mt-1">4.82%</div>
          <div className="text-[10px] text-muted-foreground mt-1">Blended · 30-day</div>
        </div>
      </div>
      <svg viewBox="0 0 300 100" className="w-full h-24">
        <defs>
          <linearGradient id="cashg" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#2F80C2" stopOpacity="0.35" />
            <stop offset="1" stopColor="#2F80C2" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,80 C30,60 60,72 90,55 C120,38 150,50 180,32 C210,15 240,22 300,10 L300,100 L0,100 Z" fill="url(#cashg)" />
        <path d="M0,80 C30,60 60,72 90,55 C120,38 150,50 180,32 C210,15 240,22 300,10" stroke="#2F80C2" strokeWidth="1.5" fill="none" />
      </svg>
      <div className="mt-3 space-y-1.5">
        {["Schwab Sweep · $312M", "Fidelity FDRXX · $286M", "JPM Treasury · $249M"].map((s) => (
          <div key={s} className="flex items-center justify-between text-xs">
            <span className="text-brand-navy/80">{s}</span>
            <span className="text-muted-foreground">→ optimized</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReconVisual() {
  return (
    <div className="absolute inset-0 p-6">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-3">Reconciliation ledger</div>
      <div className="rounded-xl border border-border overflow-hidden">
        <div className="grid grid-cols-[1fr_80px_80px_28px] gap-2 px-3 py-2 bg-surface text-[10px] uppercase tracking-wider text-muted-foreground">
          <div>Source</div><div>Custodian</div><div>PMS</div><div></div>
        </div>
        {[
          ["Wire · Acme LP", "$75,000", "$75,000", true],
          ["ACH · Stanford", "$28,400", "$28,400", true],
          ["Cap call · Sequoia", "$56,342", "$56,342", true],
          ["Journal · Ohana", "$12,900", "$12,900", true],
          ["Distribution · IEQ", "$41,120", "$41,120", true],
        ].map(([s, a, b, ok], i) => (
          <div key={i} className="grid grid-cols-[1fr_80px_80px_28px] gap-2 px-3 py-2.5 border-t border-border text-xs items-center">
            <div className="text-brand-navy">{s as string}</div>
            <div className="text-muted-foreground tabular-nums">{a as string}</div>
            <div className="text-muted-foreground tabular-nums">{b as string}</div>
            <div>
              {ok ? (
                <span className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-emerald-500 text-white text-[9px]">✓</span>
              ) : null}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between text-[11px]">
        <span className="text-muted-foreground">Salesforce · Addepar · Custodian</span>
        <span className="text-emerald-600 font-medium">100% reconciled</span>
      </div>
    </div>
  );
}
