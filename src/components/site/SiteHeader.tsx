import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/atomic-logo.svg.asset.json";

const products = [
  { name: "Secured Core Money Movement", to: "/products/secured-core" },
  { name: "Alts & Private Investment Movement", to: "/products/alts" },
  { name: "Comprehensive Bill Pay", to: "/products/bill-pay" },
  { name: "Cash Management", to: "/products/cash-management" },
  { name: "Reporting & Reconciliation", to: "/products/reporting" },
];
const resources = [
  { name: "ROI Calculator", to: "/resources/roi-calculator" },
  { name: "Case Studies", to: "/resources/case-studies" },
];
const insights = [
  { name: "Blog", to: "/insights/blog" },
  { name: "Media", to: "/insights/media" },
];

function NavItem({ label, items }: { label: string; items: { name: string; to: string }[] }) {
  return (
    <div className="group relative">
      <button className="inline-flex items-center gap-1 text-sm font-medium text-brand-navy/80 hover:text-brand-navy transition-colors py-2">
        {label}
        <ChevronDown className="h-3.5 w-3.5 opacity-60 group-hover:rotate-180 transition-transform" />
      </button>
      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
        <div className="w-72 rounded-2xl border border-border bg-white p-2 shadow-2xl shadow-brand-navy/10">
          {items.map((it) => (
            <Link
              key={it.to}
              to={it.to as any}
              className="block rounded-xl px-3 py-2.5 text-sm text-brand-navy/80 hover:bg-surface hover:text-brand-navy transition-colors"
            >
              {it.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [showBar, setShowBar] = useState(true);

  return (
    <header className="sticky top-0 z-40 w-full">
      {showBar && (
        <div className="bg-brand-navy-deep text-white text-xs">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-2 pr-9 flex items-center justify-center gap-2 sm:gap-3 relative flex-wrap text-center">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-brand-green shrink-0" />
            <span className="opacity-90">
              <span className="hidden sm:inline">New: bulk capital-call workflow now live for Fidelity & Schwab custodians.</span>
              <span className="sm:hidden">New: bulk capital-call workflow live.</span>
            </span>
            <Link to="/" className="underline decoration-white/40 hover:decoration-white">
              Read more →
            </Link>
            <button
              onClick={() => setShowBar(false)}
              className="absolute right-3 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100"
              aria-label="Dismiss"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}
      <div className="bg-white/85 backdrop-blur-md border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center">
              <img src={logo.url} alt="Atomic Insights" className="h-8 w-auto" />
            </Link>

            <nav className="hidden lg:flex items-center gap-7">
              <Link to="/" className="text-sm font-medium text-brand-navy/80 hover:text-brand-navy">About</Link>
              <NavItem label="Products" items={products} />
              <NavItem label="Resources" items={resources} />
              <NavItem label="Insights" items={insights} />
              <Link to="/" className="text-sm font-medium text-brand-navy/80 hover:text-brand-navy">Contact</Link>
            </nav>

            <div className="hidden lg:flex items-center gap-2">
              <Link to="/" className="text-sm font-medium text-brand-navy/80 hover:text-brand-navy px-3 py-2">
                Log In
              </Link>
              <Link
                to="/"
                className="inline-flex items-center rounded-full bg-brand-navy px-4 py-2 text-sm font-medium text-white hover:bg-brand-navy-deep transition-colors"
              >
                Book a Demo
              </Link>
            </div>

            <button
              className="lg:hidden p-2 text-brand-navy"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border bg-white">
            <div className="mx-auto max-w-7xl px-4 py-4 space-y-1">
              <Link to="/" className="block py-2 text-sm font-medium text-brand-navy">About</Link>
              <div className="py-2">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Products</div>
                {products.map((p) => (
                  <Link key={p.to} to={p.to as any} className="block py-1.5 pl-2 text-sm text-brand-navy/80">
                    {p.name}
                  </Link>
                ))}
              </div>
              <div className="py-2">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Resources</div>
                {resources.map((p) => (
                  <Link key={p.to} to={p.to as any} className="block py-1.5 pl-2 text-sm text-brand-navy/80">
                    {p.name}
                  </Link>
                ))}
              </div>
              <div className="py-2">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Insights</div>
                {insights.map((p) => (
                  <Link key={p.to} to={p.to as any} className="block py-1.5 pl-2 text-sm text-brand-navy/80">
                    {p.name}
                  </Link>
                ))}
              </div>
              <Link to="/" className="block py-2 text-sm font-medium text-brand-navy">Contact</Link>
              <div className="pt-3 flex gap-2">
                <Link to="/" className="flex-1 text-center rounded-full border border-border px-4 py-2 text-sm">Log In</Link>
                <Link to="/" className="flex-1 text-center rounded-full bg-brand-navy px-4 py-2 text-sm text-white">Book a Demo</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
