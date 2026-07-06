import { Link } from "@tanstack/react-router";
import logo from "@/assets/atomic-logo.svg.asset.json";

const integrations = ["Schwab", "Fidelity", "Salesforce", "Addepar", "Arch", "Canoe", "iCapital"];

const cols = [
  {
    title: "Products",
    links: [
      "Secured Core Money Movement",
      "Alts & Private Investment Movement",
      "Comprehensive Bill Pay",
      "Cash Management",
      "Reporting & Reconciliation",
    ],
  },
  { title: "Company", links: ["About"] },
  { title: "Resources", links: ["ROI Calculator", "Case Studies"] },
  { title: "Insights", links: ["Blog", "Media"] },
];

export function SiteFooter() {
  return (
    <footer className="bg-brand-navy-deep text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-10">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 mb-14 flex flex-wrap items-center gap-x-8 gap-y-3">
          <span className="text-xs uppercase tracking-[0.2em] text-white/60">
            Connected across your stack
          </span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/90">
            {integrations.map((i, idx) => (
              <span key={i} className="flex items-center gap-6">
                {idx > 0 && <span className="text-white/20">·</span>}
                <span>{i}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-1">
            <img src={logo.url} alt="Atomic Insights" className="h-8 w-auto brightness-0 invert opacity-90" />
            <p className="mt-4 text-sm text-white/60 max-w-xs">
              Money movement infrastructure for RIAs and family offices.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-xs uppercase tracking-[0.18em] text-white/50 mb-4">{c.title}</div>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <Link to="/" className="text-sm text-white/80 hover:text-white transition-colors">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/60">
          <span className="inline-flex items-center gap-2">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-brand-green" /> SOC 2 Type II
          </span>
          <span className="text-white/25">·</span>
          <span>Direct custodian API access</span>
          <span className="text-white/25">·</span>
          <span>Built by operators, for operators</span>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>Atomic Insights © 2026</span>
            <Link to="/" className="hover:text-white">Privacy Policy</Link>
            <Link to="/" className="hover:text-white">Terms of Service</Link>
            <Link to="/" className="hover:text-white">Security & Trust</Link>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://atomicinsights.io" className="hover:text-white">atomicinsights.io</a>
            <a href="mailto:hi@atomicinsights.io" className="hover:text-white">hi@atomicinsights.io</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
