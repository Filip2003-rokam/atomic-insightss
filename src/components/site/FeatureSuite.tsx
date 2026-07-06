import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Layers, Receipt, LineChart, FileCheck, Check, TrendingUp } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";


type Feature = {
  eyebrow: string;
  title: string;
  promise: string;
  differentiator: string;
  bullets: string[];
  icon: ReactNode;
  visual: ReactNode;
  floater: ReactNode;
};

/* ---------------- floaters (defined below the features array) ---------------- */

function FloatWrap({
  children,
  className,
  duration = 5,
  delay = 0,
}: {
  children: ReactNode;
  className: string;
  duration?: number;
  delay?: number;
}) {
  return (
    <div className={`absolute z-20 hidden lg:block ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
          className="rounded-2xl bg-white shadow-2xl shadow-brand-navy/15 ring-1 ring-brand-navy/5"
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}

function WireFloater() {
  return (
    <FloatWrap className="-top-6 -right-6 xl:-right-10" duration={4.5}>
      <div className="flex items-center gap-3 pl-2 pr-4 py-2">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-green/15 text-brand-green">
          <Check className="h-4 w-4" strokeWidth={3} />
        </span>
        <div>
          <div className="text-[12px] font-semibold text-brand-navy leading-tight">
            Wire executed · $75K
          </div>
          <div className="text-[10px] text-brand-navy/55 mt-0.5">
            Fidelity → Acme LP · 3s
          </div>
        </div>
      </div>
    </FloatWrap>
  );
}

function CapCallFloater() {
  return (
    <FloatWrap className="-bottom-8 -left-6 xl:-left-10" duration={5.2} delay={0.4}>
      <div className="px-4 py-3 min-w-[180px]">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-wider">
          <span className="text-brand-blue font-semibold">Bulk call</span>
          <span className="text-brand-green font-semibold">Done · 12s</span>
        </div>
        <div className="mt-1.5 text-sm font-semibold text-brand-navy tabular-nums">
          87 / 87 wires
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-brand-navy/10 overflow-hidden">
          <div className="h-full w-full bg-gradient-to-r from-brand-blue to-brand-green" />
        </div>
      </div>
    </FloatWrap>
  );
}

function BillPayFloater() {
  return (
    <FloatWrap className="-top-6 -right-6 xl:-right-10" duration={4.8} delay={0.2}>
      <div className="px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-[9px] uppercase tracking-[0.18em] text-brand-blue font-semibold">
            IRS Q3
          </span>
          <span className="inline-flex items-center gap-1 rounded-md bg-brand-green/10 px-1.5 py-0.5 text-[10px] font-medium text-brand-green">
            <Check className="h-3 w-3" strokeWidth={3} /> Paid
          </span>
        </div>
        <div className="mt-1 text-lg font-semibold text-brand-navy tabular-nums">
          $112,000
        </div>
        <div className="text-[10px] text-brand-navy/50 mt-0.5">1 click · scheduled</div>
      </div>
    </FloatWrap>
  );
}

function CashFloater() {
  return (
    <FloatWrap className="-top-6 -right-6 xl:-right-10" duration={5.5} delay={0.3}>
      <div className="px-4 py-3">
        <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-muted-foreground">
          <TrendingUp className="h-3 w-3 text-brand-green" />
          Yield YTD
        </div>
        <div className="mt-1 flex items-baseline gap-1">
          <span className="text-brand-green text-sm font-semibold">+</span>
          <span className="text-2xl font-semibold text-brand-navy tabular-nums">$2.1M</span>
        </div>
        <div className="text-[10px] text-brand-navy/50 mt-0.5">Idle cash swept</div>
      </div>
    </FloatWrap>
  );
}

function ReconFloater() {
  return (
    <FloatWrap className="-bottom-8 -right-6 xl:-right-10" duration={4.6} delay={0.5}>
      <div className="flex items-center gap-3 pl-2 pr-4 py-2">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-green/15 text-brand-green">
          <Check className="h-4 w-4" strokeWidth={3} />
        </span>
        <div>
          <div className="text-[12px] font-semibold text-brand-navy leading-tight">
            100% reconciled
          </div>
          <div className="text-[10px] text-brand-navy/55 mt-0.5">
            Salesforce ↔ Addepar
          </div>
        </div>
      </div>
    </FloatWrap>
  );
}

const features: Feature[] = [
  {
    eyebrow: "Secured Core",
    title: "Money Movement",
    promise: "Execute wires, ACH, journals, and checks through one secure workspace.",
    differentiator: "Direct custodian execution. No portal hopping, no spreadsheets.",
    bullets: ["Real-time custodian APIs", "Maker-checker approvals", "Validation on every request"],
    icon: <Zap className="h-4 w-4" />,
    visual: <WireVisual />,
    floater: <WireFloater />,
  },
  {
    eyebrow: "Alts & Private Investments",
    title: "Bulk capital calls, without the chase.",
    promise: "Fund capital calls and process distributions without the manual chase.",
    differentiator: "Built around private-market cadence, not retrofitted.",
    bullets: ["Bulk capital call workflow", "Canoe, Arch, iCapital integrations", "Cross-entity allocation"],
    icon: <Layers className="h-4 w-4" />,
    visual: <CapitalCallVisual />,
    floater: <CapCallFloater />,
  },
  {
    eyebrow: "Comprehensive Bill Pay",
    title: "Every client payment, one platform.",
    promise: "Centralize every client payment (vendors, tuition, taxes) in one platform.",
    differentiator: "Purpose-built for the family-CFO model, not generic AP.",
    bullets: ["Vendor & biller management", "Invoice capture", "Full audit trail on every payment"],
    icon: <Receipt className="h-4 w-4" />,
    visual: <BillPayVisual />,
    floater: <BillPayFloater />,
  },
  {
    eyebrow: "Cash Management",
    title: "Treasury across every account.",
    promise: "Orchestrate treasury across accounts, entities, and custodians.",
    differentiator: "Cashflow intelligence layered on the rails. Not just movement.",
    bullets: ["Multi-account visibility", "Sweep rules & scheduled transfers", "Higher-yield management"],
    icon: <LineChart className="h-4 w-4" />,
    visual: <CashVisual />,
    floater: <CashFloater />,
  },
  {
    eyebrow: "Reporting & Reconciliation",
    title: "One system of record.",
    promise: "A complete audit trail and cashflow reporting across every source of truth.",
    differentiator: "A single system of record across custodian, CRM, and PMS.",
    bullets: ["Salesforce CRM sync", "Transaction-level audit trail", "Client-ready cashflow reporting"],
    icon: <FileCheck className="h-4 w-4" />,
    visual: <ReconVisual />,
    floater: <ReconFloater />,
  },
];

export function FeatureSuite() {
  return (
    <section className="bg-surface border-y border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] text-brand-blue font-medium">
            The Atomic Suite
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-navy tracking-tight leading-[1.1]">
            Everything money movement demands, in one platform.
          </h2>
          <p className="mt-5 text-lg text-brand-navy/70 leading-relaxed">
            From capital call to wire confirmation. No re-keying, no portal hopping, no spreadsheets.
          </p>
        </Reveal>

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
      <Reveal className={reverse ? "lg:order-2" : ""} y={24}>
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
      </Reveal>

      <Reveal className={reverse ? "lg:order-1" : ""} delay={0.1} y={24}>
        <div className="relative">
          <div className="relative rounded-2xl bg-white border border-border shadow-xl shadow-brand-navy/5 overflow-hidden aspect-[4/3]">
            {feature.visual}
          </div>
          {feature.floater}
        </div>
      </Reveal>
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
