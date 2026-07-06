import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-navy-deep text-white py-24 lg:py-32">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(700px 400px at 15% 20%, rgba(111,190,68,0.35), transparent 60%), radial-gradient(700px 400px at 85% 80%, rgba(47,128,194,0.45), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-brand-green font-medium">
          Get started
        </div>
        <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
          Start with your own workflow.
        </h2>
        <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
          Walk us through how your firm moves money today, and we'll show you where Atomic fits.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-white text-brand-navy px-6 py-3.5 text-sm font-medium hover:bg-white/90 transition-colors"
          >
            Book a demo <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur px-6 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            Talk to our team
          </Link>
        </div>
      </div>
    </section>
  );
}
