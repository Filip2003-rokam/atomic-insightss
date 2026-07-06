import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Circle, TrendingUp } from "lucide-react";
import mark from "@/assets/atomic-mark.svg.asset.json";

const rows = [
  { date: "11/22", from: "ABBIE GAMBOA SR CHARLES…", acct: "•••• 4191", amount: "$20,000.00", vendor: "Acme LP Fund 25", status: "approved" },
  { date: "11/12", from: "ABBIE GAMBOA SR CHARLES…", acct: "•••• 4191", amount: "$25,000.00", vendor: "Acme LP Fund 25", status: "rejected" },
  { date: "11/09", from: "ABBIE GAMBOA SR CHARLES…", acct: "•••• 4191", amount: "$75,000.00", vendor: "Acme LP Fund 25", status: "created" },
  { date: "11/08", from: "OLIVER SCRUB ADVISORS 51…", acct: "•••• 6293", amount: "$56,342.00", vendor: "Sequoia Capital", status: "created" },
  { date: "11/08", from: "ABBIE GAMBOA SR CHARLES…", acct: "•••• 4191", amount: "$580.00", vendor: "Sotheby's", status: "approved" },
];

const statusClasses: Record<string, string> = {
  approved: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100",
  rejected: "bg-red-50 text-red-700 ring-1 ring-red-100",
  created: "bg-sky-50 text-sky-700 ring-1 ring-sky-100",
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[auto] lg:min-h-[90vh] flex-col overflow-hidden bg-white"
    >
      {/* soft gradient stage */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-full -z-0"
        style={{
          background:
            "radial-gradient(1200px 500px at 20% 0%, rgba(111,190,68,0.12), transparent 60%), radial-gradient(900px 500px at 85% 0%, rgba(47,128,194,0.15), transparent 60%), linear-gradient(180deg, #F5F9FC 0%, #FFFFFF 100%)",
        }}
      />

      <div className="relative flex flex-1 items-center w-full mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-12 items-center w-full">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-navy/10 bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-brand-navy/80"
            >
              <img src={mark.url} alt="" className="h-3.5 w-3.5" />
              Built for RIAs & family offices
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-5 text-[2rem] sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-brand-navy tracking-tight"
            >
              More clients, more wires, more capital calls.{" "}
              <span className="brand-gradient-text">One platform to run them.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 text-base sm:text-lg text-brand-navy/70 max-w-xl leading-relaxed"
            >
              At most RIAs and family offices, money movement is still manual. Atomic runs it
              end-to-end with every control intact. Faster, more accurate, and idle cash put to work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-5 py-3 text-sm font-medium text-white hover:bg-brand-navy-deep transition-colors"
              >
                Book a demo <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-full border border-brand-navy/15 bg-white px-5 py-3 text-sm font-medium text-brand-navy hover:bg-surface transition-colors"
              >
                See the platform
              </a>
            </motion.div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-brand-navy/60">
              <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-brand-green" /> SOC 2 Type II</span>
              <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-brand-green" /> Direct custodian APIs</span>
              <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-brand-green" /> Maker-checker approvals</span>
            </div>
          </div>

          <div className="lg:col-span-6 min-w-0">
            <HeroDashboard scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroDashboard({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const reduce = useReducedMotion();

  // Parallax: each element moves at a different speed as the hero scrolls.
  // Different signs/magnitudes create depth.
  const yToastRaw = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yCustodianRaw = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yCallRaw = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const yYieldRaw = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const ySummaryRaw = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yPendingRaw = useTransform(scrollYProgress, [0, 1], [0, 90]);

  const zero = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const yToast = reduce ? zero : yToastRaw;
  const yCustodian = reduce ? zero : yCustodianRaw;
  const yCall = reduce ? zero : yCallRaw;
  const yYield = reduce ? zero : yYieldRaw;
  const ySummary = reduce ? zero : ySummaryRaw;
  const yPending = reduce ? zero : yPendingRaw;

  // Float loop values (disabled when reduce-motion is on)
  const floatA = reduce ? undefined : { y: [0, -8, 0] };
  const floatB = reduce ? undefined : { y: [0, -6, 0] };
  const floatC = reduce ? undefined : { y: [0, -10, 0] };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative"
    >
      {/* floating summary card top-left (existing) */}
      <motion.div
        style={{ y: ySummary }}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute -top-6 -left-4 z-20 rounded-2xl bg-white p-4 ring-brand hidden sm:block"
      >
        <motion.div
          animate={floatA}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Total Volume</div>
          <div className="mt-1 text-2xl font-semibold text-brand-navy">$1.6M</div>
          <div className="mt-1 text-[11px] text-muted-foreground">1.26M transactions</div>
        </motion.div>
      </motion.div>

      {/* floating pending card (existing) */}
      <motion.div
        style={{ y: yPending }}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="absolute -bottom-6 -right-4 z-20 rounded-2xl bg-brand-navy p-4 text-white shadow-2xl shadow-brand-navy/25 hidden sm:block"
      >
        <motion.div
          animate={floatB}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        >
          <div className="text-[10px] uppercase tracking-wider text-white/60">Pending</div>
          <div className="mt-1 text-2xl font-semibold">$1.2M</div>
          <div className="mt-1 flex items-center gap-1.5 text-[11px] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-pulse" />
            33 pending transactions
          </div>
        </motion.div>
      </motion.div>

      {/* NEW: Wire approved toast — top right, spilling above the card */}
      <motion.div
        style={{ y: yToast }}
        initial={{ opacity: 0, y: -20, x: 10 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.55, delay: 1.0 }}
        className="absolute -top-10 -right-8 xl:-right-16 z-30 hidden lg:flex items-center gap-3 rounded-2xl bg-white pl-2 pr-4 py-2 shadow-2xl shadow-brand-navy/15 ring-1 ring-brand-navy/5"
      >
        <motion.div
          animate={floatC}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green/15 text-brand-green">
            <Check className="h-5 w-5" strokeWidth={3} />
          </span>
          <div className="pr-1">
            <div className="text-[13px] font-semibold text-brand-navy leading-tight">
              Wire approved · $75,000
            </div>
            <div className="text-[11px] text-brand-navy/55 mt-0.5">
              Acme LP Fund 25 · 2s ago
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* NEW: Custodian connected pill — top left, further out */}
      <motion.div
        style={{ y: yCustodian }}
        initial={{ opacity: 0, y: -12, x: -12 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.5, delay: 1.15 }}
        className="absolute -top-12 left-24 z-30 hidden lg:block rounded-full bg-white px-4 py-2 shadow-xl shadow-brand-navy/10 ring-1 ring-brand-navy/5"
      >
        <motion.div
          animate={floatA}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="flex items-center gap-2.5 text-[12px] font-medium text-brand-navy"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green" />
          </span>
          Schwab · Live
          <span className="text-brand-navy/30">·</span>
          <span className="text-brand-navy/60">Fidelity · Live</span>
        </motion.div>
      </motion.div>

      {/* NEW: Capital call chip — bottom left, spilling below */}
      <motion.div
        style={{ y: yCall }}
        initial={{ opacity: 0, y: 20, x: -10 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.55, delay: 1.25 }}
        className="absolute -bottom-10 left-6 xl:-left-8 z-30 hidden lg:block rounded-2xl bg-white p-3.5 shadow-2xl shadow-brand-navy/15 ring-1 ring-brand-navy/5"
      >
        <motion.div
          animate={floatB}
          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        >
          <div className="flex items-center gap-2">
            <span className="text-[9px] uppercase tracking-[0.18em] text-brand-blue font-semibold">
              Capital Call
            </span>
            <span className="inline-flex items-center gap-1 rounded-md bg-brand-green/10 px-1.5 py-0.5 text-[10px] font-medium text-brand-green">
              <Check className="h-3 w-3" strokeWidth={3} /> Bulk submit
            </span>
          </div>
          <div className="mt-1.5 text-sm font-semibold text-brand-navy">Sequoia Capital XII</div>
          <div className="mt-0.5 flex items-baseline gap-2">
            <span className="text-xl font-semibold text-brand-navy tabular-nums">$2.4M</span>
            <span className="text-[11px] text-brand-navy/50">· 47 LPs · 1 click</span>
          </div>
        </motion.div>
      </motion.div>

      {/* NEW: Cash yield mini-widget — right side, mid-height */}
      <motion.div
        style={{ y: yYield }}
        initial={{ opacity: 0, y: -16, x: 16 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.55, delay: 1.35 }}
        className="absolute top-1/2 -right-10 xl:-right-20 -translate-y-1/2 z-30 hidden lg:block rounded-2xl bg-white p-4 shadow-2xl shadow-brand-navy/15 ring-1 ring-brand-navy/5"
      >
        <motion.div
          animate={floatC}
          transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-muted-foreground">
            <TrendingUp className="h-3 w-3 text-brand-green" />
            Idle cash · APY
          </div>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-2xl font-semibold text-brand-navy tabular-nums">4.87</span>
            <span className="text-sm font-medium text-brand-navy/60">%</span>
          </div>
          <svg viewBox="0 0 100 28" className="mt-1.5 w-32 h-7 overflow-visible">
            <defs>
              <linearGradient id="sparkFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#6FBE44" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#6FBE44" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,22 L10,19 L20,20 L30,15 L40,17 L50,12 L60,13 L70,8 L80,10 L90,5 L100,3 L100,28 L0,28 Z"
              fill="url(#sparkFill)"
            />
            <polyline
              points="0,22 10,19 20,20 30,15 40,17 50,12 60,13 70,8 80,10 90,5 100,3"
              fill="none"
              stroke="#6FBE44"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="mt-1 text-[10px] text-brand-navy/50">Swept · last 30d</div>
        </motion.div>
      </motion.div>

      <div className="relative rounded-2xl bg-white border border-border shadow-2xl shadow-brand-navy/10 overflow-hidden">
        {/* window chrome */}
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
          <div className="ml-4 text-[11px] text-muted-foreground">Atomic Capital Advisory · Payment Requests</div>
        </div>

        <div className="p-4 sm:p-5">
          <div className="flex items-start sm:items-center justify-between mb-4 gap-3 flex-wrap">
            <div className="min-w-0">
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Payment Requests</div>
              <div className="mt-1 text-sm font-medium text-brand-navy">Awaiting review · In process · Completed</div>
            </div>
            <div className="flex items-center gap-4 text-xs shrink-0">
              <Stat label="Review" value="2" />
              <Stat label="In Process" value="8" tone="warn" />
              <Stat label="Completed" value="-" tone="ok" />
            </div>
          </div>

          <div className="rounded-xl border border-border overflow-x-auto">
           <div className="min-w-[620px]">
            <div className="grid grid-cols-[46px_1fr_90px_100px_1fr_100px_92px] gap-2 px-3 py-2 bg-surface text-[10px] uppercase tracking-wider text-muted-foreground">
              <div>Date</div>
              <div>From account</div>
              <div>Acct #</div>
              <div>Amount</div>
              <div>Vendor</div>
              <div>Verification</div>
              <div>Status</div>
            </div>
            <div className="divide-y divide-border">
              {rows.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.45 + i * 0.08 }}
                  className="grid grid-cols-[46px_1fr_90px_100px_1fr_100px_92px] gap-2 px-3 py-2.5 text-[11px] text-brand-navy items-center"
                >
                  <div className="text-muted-foreground">{r.date}</div>
                  <div className="truncate font-medium">{r.from}</div>
                  <div className="text-muted-foreground">{r.acct}</div>
                  <div className="tabular-nums font-medium">{r.amount}</div>
                  <div className="truncate">{r.vendor}</div>
                  <VerificationDots delay={0.7 + i * 0.1} status={r.status} />
                  <div>
                    <span className={`inline-flex rounded-md px-2 py-0.5 text-[10px] font-medium capitalize ${statusClasses[r.status]}`}>
                      {r.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
           </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone?: "ok" | "warn" }) {
  return (
    <div className="text-center">
      <div className="text-[9px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className={`text-sm font-semibold ${tone === "warn" ? "text-amber-600" : tone === "ok" ? "text-emerald-600" : "text-brand-navy"}`}>
        {value}
      </div>
    </div>
  );
}

function VerificationDots({ delay, status }: { delay: number; status: string }) {
  const dots = status === "rejected" ? ["red", "amber", "red"] : status === "created" ? ["green", "amber", "red"] : ["green", "green", "green"];
  const color = (c: string) =>
    c === "green" ? "bg-emerald-500" : c === "amber" ? "bg-amber-400" : "bg-red-500";
  return (
    <div className="flex items-center gap-1">
      {dots.map((d, i) => (
        <motion.span
          key={i}
          initial={{ scale: 0.4, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: delay + i * 0.08 }}
          className={`h-2 w-2 rounded-full ${color(d)}`}
        />
      ))}
    </div>
  );
}

// Circle is imported but unused historically; keep to avoid breaking any external ref.
void Circle;
