export function ProductIntro() {
  return (
    <section id="demo" className="py-24 lg:py-32 scroll-mt-24">
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
            transaction, connected directly to your custodians, with the controls your firm runs on.
            Manual work is eliminated while oversight is strengthened, leaving zero room for human
            error.
          </p>
        </div>

        <div className="mt-14 relative rounded-3xl overflow-hidden border border-brand-navy/10 bg-white shadow-2xl shadow-brand-navy/10 aspect-[16/9]">
          <iframe
            title="Atomic Insights clickable product demo"
            src="https://embed.figma.com/proto/NBW9OZH3SUEF0ClgLPPXpD/Web-App-Prototype?content-scaling=fixed&kind=proto&node-id=2033-106124&scaling=scale-down-width&starting-point-node-id=2033%3A106124&embed-host=share"
            className="absolute inset-0 h-full w-full"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <div className="mt-3 text-xs text-brand-navy/50 text-center">
          Interactive prototype · Click through the platform
        </div>
      </div>
    </section>
  );
}
