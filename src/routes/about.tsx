import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Layers, ShieldCheck, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  animate,
  useReducedMotion,
} from "framer-motion";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal } from "@/components/site/Reveal";
import mark from "@/assets/atomic-mark.svg.asset.json";

// Word-by-word stagger reveal (IEQ-style quiet cinematic entrance)
function WordReveal({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  if (reduce) return <span className={className}>{text}</span>;
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-baseline pb-[0.15em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.9,
              delay: delay + i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

// Count-up animation for the $120B stat
function CountUp({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(String(to));
      return;
    }
    const controls = animate(mv, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v).toString()),
    });
    return () => controls.stop();
  }, [inView, to, reduce, mv]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Atomic Insights · Institutional precision. Human trust." },
      {
        name: "description",
        content:
          "Atomic Insights was founded by operators who ran money movement at institutional scale. We connect the systems RIAs and family offices already trust into one workflow.",
      },
      { property: "og:title", content: "About Atomic Insights · Institutional precision. Human trust." },
      {
        property: "og:description",
        content:
          "Money movement infrastructure built by operators for the firms trusted with the most complex wealth.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://atomic-insightss.lovable.app/about" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Atomic Insights" },
      {
        name: "twitter:description",
        content:
          "Money movement infrastructure built by operators for the firms trusted with the most complex wealth.",
      },
    ],
    links: [{ rel: "canonical", href: "https://atomic-insightss.lovable.app/about" }],
  }),
});

const integrations = ["Schwab", "Fidelity", "Salesforce", "Addepar", "Arch", "Canoe", "iCapital"];

const values = [
  {
    icon: Layers,
    title: "Everything in one place.",
    body: "Your custodians, your platforms, your CRM — connected, not replaced. Money movement runs across all of them from a single workflow, with no re-keying in between.",
  },
  {
    icon: ShieldCheck,
    title: "Accuracy you can stand behind.",
    body: "Every payment validated, every approval preserved, every action logged. When you're moving client money, precision is the standard.",
  },
  {
    icon: Clock,
    title: "Time returned to the work that matters.",
    body: "The hours spent moving data between systems go back to your team and your clients.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-brand-navy-deep text-white">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(1000px 600px at 20% 10%, rgba(111,190,68,0.10), transparent 60%), radial-gradient(1200px 700px at 85% 90%, rgba(47,128,194,0.22), transparent 60%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-28 sm:py-40 lg:py-52">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur px-3 py-1 text-xs font-medium text-white/80">
                <img src={mark.url} alt="" className="h-3.5 w-3.5 brightness-0 invert" />
                About Atomic Insights
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-8 max-w-4xl text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight">
                Institutional precision.
                <br />
                <span className="text-white/70">Human trust.</span>
              </h1>
            </Reveal>
          </div>
        </section>

        {/* MISSION */}
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 py-24 sm:py-32">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.2em] text-brand-navy/50">
                Our Mission
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 text-2xl sm:text-3xl font-light leading-snug text-brand-navy tracking-tight">
                We believe the firms trusted with the most complex wealth deserve the
                infrastructure to match.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-base sm:text-lg text-brand-navy/70 leading-relaxed">
                For too long, the tools to move money with real precision and control lived only
                inside the largest institutions. The independent firms doing the hardest work were
                left to hold it together manually. We believe that the more complex the wealth, the
                stronger the foundation beneath it should be.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-base sm:text-lg text-brand-navy/70 leading-relaxed">
                That belief is our mission: to bring institutional-grade money movement to every
                firm that needs it. To connect the systems they already trust into one place, so
                every time money moves, it does so with less effort, greater accuracy, and nothing
                left unchecked.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-base sm:text-lg text-brand-navy/70 leading-relaxed">
                When the mechanics of money movement finally work as one, firms get their time
                back, and can spend it where it matters most: with the families they serve.
              </p>
            </Reveal>
          </div>
        </section>

        {/* WHY */}
        <section className="bg-surface border-y border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-24 sm:py-32">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-7">
                <Reveal>
                  <div className="text-xs uppercase tracking-[0.2em] text-brand-navy/50">
                    The Why
                  </div>
                </Reveal>
                <Reveal delay={0.05}>
                  <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-navy leading-[1.1]">
                    Why we built Atomic
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-8 text-base sm:text-lg text-brand-navy/70 leading-relaxed">
                    Atomic Insights was founded by Lucas Babbitt and Richard Zazo, operators who
                    ran money movement at the institutional level and lived in the gaps. They
                    recognized the same pattern across every independent firm: the systems were all
                    there, but the connections between them weren't.
                  </p>
                </Reveal>
                <Reveal delay={0.15}>
                  <p className="mt-6 text-base sm:text-lg text-brand-navy/70 leading-relaxed">
                    Money movement lived in the gaps. Manually copied from a portal to a spreadsheet
                    to a CRM, checked by hand, reconciled by hand. The volume grew with every
                    client. The margin for error shrank.
                  </p>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="mt-6 text-base sm:text-lg text-brand-navy/70 leading-relaxed">
                    So we built the layer that ties it together, connecting directly to the
                    custodians and platforms firms already rely on, and running the whole workflow
                    in one place. Not a replacement for your stack. The system that finally unifies
                    it.
                  </p>
                </Reveal>
              </div>

              <div className="lg:col-span-5">
                <Reveal delay={0.1}>
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-brand-navy-deep border border-brand-navy/10">
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(600px 400px at 30% 20%, rgba(111,190,68,0.18), transparent 60%), radial-gradient(500px 400px at 80% 80%, rgba(47,128,194,0.35), transparent 60%)",
                      }}
                    />
                    <div className="absolute inset-0 flex items-end p-6">
                      <div className="text-white/90">
                        <div className="text-xs uppercase tracking-[0.2em] text-white/50 mb-2">
                          Founders
                        </div>
                        <div className="text-lg font-medium">
                          Lucas Babbitt &amp; Richard Zazo
                        </div>
                        <div className="text-sm text-white/60 mt-1">Portrait coming soon</div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* CONNECTIVITY */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-24 sm:py-32">
            <div className="max-w-3xl">
              <Reveal>
                <div className="text-xs uppercase tracking-[0.2em] text-brand-navy/50">
                  Connectivity
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-navy leading-[1.1]">
                  Atomic connects the systems you already use.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-base sm:text-lg text-brand-navy/70 leading-relaxed">
                  Direct API access to your custodians and platforms — every workflow running
                  through one system, without asking your team to change the tools they trust.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="mt-12 rounded-2xl border border-border bg-surface px-6 py-8 sm:px-10 sm:py-10">
                <div className="text-xs uppercase tracking-[0.2em] text-brand-navy/50 mb-6">
                  Connected across your stack
                </div>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                  {integrations.map((name, i) => (
                    <span key={name} className="flex items-center gap-8">
                      {i > 0 && <span className="text-brand-navy/20">·</span>}
                      <span className="text-base sm:text-lg font-medium text-brand-navy">
                        {name}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PROOF BAND */}
        <section className="bg-brand-navy-deep text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/80">
              <span className="inline-flex items-center gap-2">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-brand-green" />
                $120B assets on platform
              </span>
              <span className="text-white/25">·</span>
              <span>Fidelity + Schwab live API access</span>
              <span className="text-white/25">·</span>
              <span>SOC 2 Type II</span>
              <span className="text-white/25">·</span>
              <span>Founded 2022</span>
            </div>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section className="bg-surface border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-24 sm:py-32">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.2em] text-brand-navy/50">
                Leadership
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-navy leading-[1.1]">
                Operators who lived in the gaps.
              </h2>
            </Reveal>

            <div className="mt-14 grid md:grid-cols-2 gap-6 lg:gap-8">
              {[
                {
                  name: "Lucas Babbitt",
                  role: "Co-Founder & CEO",
                  bio: "Former Goldman Sachs. Built Atomic to connect the systems independent firms rely on into a single money-movement workflow.",
                  initials: "LB",
                },
                {
                  name: "Nick Chen",
                  role: "Co-Founder",
                  bio: "Bio coming soon.",
                  initials: "NC",
                },
              ].map((p, i) => (
                <Reveal key={p.name} delay={0.1 + i * 0.05}>
                  <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 h-full">
                    <div className="flex items-start gap-5">
                      <div className="h-16 w-16 shrink-0 rounded-full bg-brand-navy-deep text-white flex items-center justify-center text-lg font-medium tracking-wide">
                        {p.initials}
                      </div>
                      <div className="min-w-0">
                        <div className="text-lg font-semibold text-brand-navy">{p.name}</div>
                        <div className="text-sm text-brand-navy/60 mt-0.5">{p.role}</div>
                        <p className="mt-4 text-sm sm:text-base text-brand-navy/70 leading-relaxed">
                          {p.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-24 sm:py-32">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.2em] text-brand-navy/50">
                What we stand for
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-navy leading-[1.1]">
                The principles behind every workflow we build.
              </h2>
            </Reveal>

            <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={0.1 + i * 0.05}>
                  <div className="h-full rounded-2xl border border-border bg-surface p-6 sm:p-8">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy text-white">
                      <v.icon className="h-5 w-5" />
                    </div>
                    <div className="mt-5 text-lg font-semibold text-brand-navy">{v.title}</div>
                    <p className="mt-3 text-sm sm:text-base text-brand-navy/70 leading-relaxed">
                      {v.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="relative overflow-hidden bg-brand-navy-deep text-white">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(900px 500px at 15% 20%, rgba(111,190,68,0.14), transparent 60%), radial-gradient(1000px 600px at 85% 80%, rgba(47,128,194,0.25), transparent 60%)",
            }}
          />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-24 sm:py-32 text-center">
            <Reveal>
              <h2 className="mx-auto max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05]">
                See your systems working as one.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-brand-navy hover:bg-white/90 transition-colors"
                >
                  Book a demo <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white hover:bg-white/[0.08] transition-colors"
                >
                  Talk to our team
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/60">
                <span className="inline-flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-brand-green" /> SOC 2 Type II
                </span>
                <span className="text-white/25">·</span>
                <span>Direct custodian API access</span>
                <span className="text-white/25">·</span>
                <span>Built by operators, for operators</span>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
