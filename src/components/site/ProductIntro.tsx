import { PlayCircle } from "lucide-react";

export function ProductIntro() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] text-brand-blue font-medium">
            What is Atomic Insights?
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-navy tracking-tight leading-[1.1]">
            One platform for every way <span className="brand-gradient-text">money moves</span>.
          </h2>
          <p className="mt-6 text-lg text-brand-navy/70 leading-relaxed">
            Atomic Insights brings money movement into a single system for RIAs and family offices.
            Move funds, process capital calls at scale, keep cash working, and reconcile every
            transaction — connected directly to your custodians, with the controls your firm runs on.
            Manual work is eliminated while oversight is strengthened, leaving zero room for human
            error.
          </p>
        </div>

        <div className="mt-14 relative rounded-3xl overflow-hidden border border-border bg-gradient-to-br from-surface-alt via-white to-surface aspect-[16/9] group cursor-pointer">
          <div
            aria-hidden
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(600px 260px at 30% 30%, rgba(47,128,194,0.15), transparent 60%), radial-gradient(600px 260px at 80% 70%, rgba(111,190,68,0.12), transparent 60%)",
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center px-6">
            <div className="rounded-full bg-white/80 backdrop-blur-md border border-border p-4 shadow-xl shadow-brand-navy/10 group-hover:scale-110 transition-transform">
              <PlayCircle className="h-10 w-10 text-brand-navy" />
            </div>
            <div>
              <div className="text-sm font-medium text-brand-navy">Guided product tour</div>
              <div className="text-xs text-muted-foreground mt-1">3-minute walkthrough · Coming soon</div>
            </div>
          </div>

          {/* dot pattern */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: "radial-gradient(circle, #19284A 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>
      </div>
    </section>
  );
}
