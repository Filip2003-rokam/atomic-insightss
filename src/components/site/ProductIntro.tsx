import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { Reveal } from "./Reveal";


const FIGMA_SRC =
  "https://embed.figma.com/proto/NBW9OZH3SUEF0ClgLPPXpD/Web-App-Prototype?content-scaling=fixed&kind=proto&node-id=2033-106124&scaling=scale-down-width&starting-point-node-id=2033%3A106124&embed-host=share";

export function ProductIntro() {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const holderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!holderRef.current || inView) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    obs.observe(holderRef.current);
    return () => obs.disconnect();
  }, [inView]);

  return (
    <section id="demo" className="py-24 lg:py-32 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-3xl">
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
        </Reveal>

        <Reveal delay={0.15}>
        <div
          ref={holderRef}
          className="mt-14 mx-auto w-full max-w-7xl relative rounded-2xl overflow-hidden border border-brand-navy/10 bg-brand-navy/[0.03] shadow-xl shadow-brand-navy/10 aspect-[16/9]"
        >
          {loaded ? (
            <iframe
              title="Atomic Insights clickable product demo"
              src={FIGMA_SRC}
              className="absolute inset-0 h-full w-full"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <button
              type="button"
              onClick={() => setLoaded(true)}
              className="group absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-brand-navy/5 via-white to-brand-blue/5 hover:from-brand-navy/10 hover:to-brand-blue/10 transition-colors"
              aria-label="Load interactive product demo"
            >
              {inView && (
                <link rel="preconnect" href="https://embed.figma.com" />
              )}
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-navy text-white shadow-lg shadow-brand-navy/25 group-hover:scale-105 transition-transform">
                <Play className="h-6 w-6 ml-0.5 fill-current" />
              </span>
              <span className="text-sm font-medium text-brand-navy">
                Launch interactive demo
              </span>
              <span className="text-xs text-brand-navy/60">
                Click to load the prototype
              </span>
            </button>
          )}
        </div>
        </Reveal>
        <div className="mt-3 text-xs text-brand-navy/50 text-center">
          Interactive prototype · Click through the platform
        </div>
      </div>
    </section>
  );
}
