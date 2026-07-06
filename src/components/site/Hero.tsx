import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import mark from "@/assets/atomic-mark.svg.asset.json";

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

  const yToastRaw = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yCallRaw = useTransform(scrollYProgress, [0, 1], [0, 70]);

  const zero = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const yToast = reduce ? zero : yToastRaw;
  const yCall = reduce ? zero : yCallRaw;

  const floatB = reduce ? undefined : { y: [0, -6, 0] };
  const floatC = reduce ? undefined : { y: [0, -10, 0] };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative"
    >
      {/* Wire approved toast — top right, above the laptop */}
      <motion.div
        style={{ y: yToast }}
        initial={{ opacity: 0, y: -20, x: 10 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.55, delay: 1.0 }}
        className="absolute -top-8 right-0 xl:-right-6 z-30 hidden lg:flex items-center gap-3 rounded-2xl bg-white pl-2 pr-4 py-2 shadow-2xl shadow-brand-navy/15 ring-1 ring-brand-navy/5"
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

      {/* Capital call chip — bottom left, below the laptop */}
      <motion.div
        style={{ y: yCall }}
        initial={{ opacity: 0, y: 20, x: -10 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.55, delay: 1.25 }}
        className="absolute -bottom-8 left-0 xl:-left-4 z-30 hidden lg:block rounded-2xl bg-white p-3.5 shadow-2xl shadow-brand-navy/15 ring-1 ring-brand-navy/5"
      >
        <motion.div animate={floatB} transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}>
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

      {/* LAPTOP */}
      <Laptop />
    </motion.div>
  );
}

function Laptop() {
  return (
    <div
      className="hero-laptop relative mx-auto w-full max-w-[640px]"
      style={{
        animation: "heroLaptopFloat 9s ease-in-out infinite",
        filter: "drop-shadow(0 34px 48px rgba(7,24,56,.22))",
      }}
    >
      {/* lid */}
      <div style={{ background: "#071838", borderRadius: "20px 20px 6px 6px", padding: "12px 12px 14px" }}>
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: 10,
            aspectRatio: "16 / 10",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* chrome */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 14px",
              borderBottom: "1px solid #ECEFF4",
              flex: "none",
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#E4E8EF" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#E4E8EF" }} />
            <img src={mark.url} alt="" style={{ height: 13, width: "auto", marginLeft: 8 }} />
            <span style={{ fontSize: 9.5, color: "#8A96AA", fontWeight: 500 }}>
              Atomic Capital Advisory
            </span>
            <span
              style={{
                marginLeft: "auto",
                width: 18,
                height: 18,
                borderRadius: "50%",
                background: "linear-gradient(135deg,#6DBF80,#71AEDA)",
              }}
            />
          </div>
          <div style={{ display: "flex", flex: 1, minHeight: 0 }}>
            {/* sidebar */}
            <div
              style={{
                width: 38,
                flex: "none",
                borderRight: "1px solid #ECEFF4",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
                paddingTop: 14,
              }}
            >
              <span style={{ width: 16, height: 16, borderRadius: 5, background: "#071838" }} />
              <span style={{ width: 16, height: 16, borderRadius: 5, background: "#E4E8EF" }} />
              <span style={{ width: 16, height: 16, borderRadius: 5, background: "#E4E8EF" }} />
              <span style={{ width: 16, height: 16, borderRadius: 5, background: "#E4E8EF" }} />
            </div>
            {/* scenes */}
            <div style={{ position: "relative", flex: 1, minWidth: 0 }}>
              <ScenePayments />
              <SceneCapitalCall />
              <SceneCash />
            </div>
          </div>
        </div>
      </div>
      {/* base */}
      <div
        style={{
          height: 15,
          width: "112%",
          marginLeft: "-6%",
          background: "linear-gradient(180deg,#E3E7EE 0%,#C7CEDA 100%)",
          borderRadius: "2px 2px 14px 14px",
          position: "relative",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 96,
            height: 6,
            background: "#B4BCCA",
            borderRadius: "0 0 8px 8px",
          }}
        />
      </div>
    </div>
  );
}

const sceneStyle = (delay: number): React.CSSProperties => ({
  position: "absolute",
  inset: 0,
  padding: "14px 16px",
  animation: `heroSceneWin 18s linear infinite both`,
  animationDelay: `${delay}s`,
});

function ScenePayments() {
  const rows = [
    { d: "11/22", name: "Abbie Garcia ····4191", amt: "$20,000", status: "Approved", tone: "green", delay: 0.3, dotBase: 1.6, pillDelay: 3.4 },
    { d: "11/12", name: "Oliver Shaw ····6293", amt: "$56,342", status: "Approved", tone: "green", delay: 0.6, dotBase: 2.0, pillDelay: 3.8 },
    { d: "11/09", name: "Meridian FO ····4191", amt: "$75,000", status: "Approved", tone: "green", delay: 0.9, dotBase: 2.4, pillDelay: 4.2 },
    { d: "11/08", name: "Halcyon Cap ····8804", amt: "$32,500", status: "In review", tone: "blue", delay: 1.2, dotBase: 2.8, pillDelay: 4.6 },
    { d: "11/08", name: "Ashwood FO ····4191", amt: "$580", status: "Approved", tone: "green", delay: 1.5, dotBase: 3.2, pillDelay: 5.0 },
  ];
  const gridCols = "36px 1fr 62px 64px 58px";
  return (
    <div style={sceneStyle(0)}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: "#071838" }}>Payment Requests</span>
        <span style={{ fontSize: 9, fontWeight: 600, color: "#19284A", background: "#EEF2F7", borderRadius: 999, padding: "2px 8px" }}>Review · 2</span>
        <span style={{ fontSize: 9, fontWeight: 600, color: "#71AEDA" }}>In process · 8</span>
        <span style={{ fontSize: 9, fontWeight: 500, color: "#B0B9C7" }}>Completed</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: gridCols, gap: 8, fontSize: 8, fontWeight: 700, letterSpacing: ".07em", color: "#9AA5B5", padding: "12px 4px 6px", borderBottom: "1px solid #ECEFF4" }}>
        <span>DATE</span><span>FROM ACCOUNT</span><span>AMOUNT</span><span>CASH · SLOA · REP</span><span>STATUS</span>
      </div>
      {rows.map((r, i) => (
        <div
          key={i}
          style={{
            display: "grid",
            gridTemplateColumns: gridCols,
            gap: 8,
            alignItems: "center",
            padding: "7px 4px",
            borderBottom: i < rows.length - 1 ? "1px solid #F2F4F8" : undefined,
            fontSize: 9.5,
            color: "#19284A",
            animation: `heroRise 18s linear infinite both`,
            animationDelay: `${r.delay}s`,
          }}
        >
          <span style={{ color: "#8A96AA" }}>{r.d}</span>
          <span style={{ fontWeight: 600 }}>{r.name}</span>
          <span style={{ fontWeight: 700 }}>{r.amt}</span>
          <span style={{ display: "flex", gap: 4 }}>
            {[0, 1, 2].map((k) => (
              <span
                key={k}
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#DCE1E9",
                  animation: `heroResolveDot 18s linear infinite both`,
                  animationDelay: `${r.dotBase + k * 0.25}s`,
                }}
              />
            ))}
          </span>
          <span
            style={{
              justifySelf: "start",
              fontSize: 8.5,
              fontWeight: 700,
              color: r.tone === "green" ? "#3E8B57" : "#2E6FA8",
              background: r.tone === "green" ? "rgba(109,191,128,.16)" : "rgba(113,174,218,.18)",
              borderRadius: 999,
              padding: "2px 8px",
              animation: `heroPopIn 18s linear infinite both`,
              animationDelay: `${r.pillDelay}s`,
            }}
          >
            {r.status}
          </span>
        </div>
      ))}
    </div>
  );
}

function SceneCapitalCall() {
  const lps = [
    { n: "Meridian FO", a: "$62,000", d: 6.3, cd: 7.7 },
    { n: "Garcia Trust", a: "$48,500", d: 6.45, cd: 7.9 },
    { n: "Northlake LP", a: "$75,000", d: 6.6, cd: 8.1 },
    { n: "Halcyon Cap", a: "$39,200", d: 6.75, cd: 8.3 },
    { n: "Ashwood FO", a: "$54,750", d: 6.9, cd: 8.5 },
  ];
  return (
    <div style={{ ...sceneStyle(6) }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: "#071838" }}>Capital Call — Sequoia Capital XII</span>
        <span style={{ fontSize: 9, fontWeight: 700, color: "#464A80", background: "rgba(70,74,128,.12)", borderRadius: 999, padding: "2px 8px" }}>47 LPs</span>
        <span style={{ fontSize: 9, fontWeight: 700, color: "#3E8B57", background: "rgba(109,191,128,.16)", borderRadius: 999, padding: "2px 8px" }}>Bulk submit</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 12 }}>
        {lps.map((lp) => (
          <div key={lp.n} style={{ border: "1px solid #ECEFF4", borderRadius: 8, padding: "8px 10px", animation: `heroRise 18s linear infinite both`, animationDelay: `${lp.d}s` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 9, fontWeight: 600, color: "#19284A" }}>{lp.n}</span>
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#6DBF80", color: "#fff", fontSize: 7, display: "inline-flex", alignItems: "center", justifyContent: "center", animation: `heroPopIn 18s linear infinite both`, animationDelay: `${lp.cd}s` }}>✓</span>
            </div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#071838", marginTop: 3 }}>{lp.a}</div>
          </div>
        ))}
        <div style={{ border: "1px dashed #D5DBE4", borderRadius: 8, padding: "8px 10px", display: "flex", alignItems: "center", justifyContent: "center", animation: `heroRise 18s linear infinite both`, animationDelay: "7.05s" }}>
          <span style={{ fontSize: 9.5, fontWeight: 600, color: "#8A96AA" }}>+ 42 more wires</span>
        </div>
      </div>
      <div style={{ marginTop: 14, background: "#071838", borderRadius: 10, padding: "11px 14px", display: "flex", alignItems: "center", gap: 12, animation: `heroRise 18s linear infinite both`, animationDelay: "8.8s" }}>
        <span style={{ fontSize: 9.5, fontWeight: 600, color: "#FFFFFF", whiteSpace: "nowrap" }}>47 wires → 1 reviewed action</span>
        <span style={{ flex: 1, height: 5, borderRadius: 999, background: "rgba(255,255,255,.16)", overflow: "hidden", display: "block" }}>
          <span style={{ display: "block", height: "100%", borderRadius: 999, background: "linear-gradient(90deg,#6DBF80,#A3C64B)", animation: `heroProgFill 18s linear infinite both` }} />
        </span>
        <span style={{ fontSize: 9, fontWeight: 700, color: "#6DBF80", whiteSpace: "nowrap", animation: `heroPopIn 18s linear infinite both`, animationDelay: "10.9s" }}>Submitted ✓</span>
      </div>
    </div>
  );
}

function SceneCash() {
  const bars = [
    { h: "46%", c: "#19284A", d: 0 },
    { h: "70%", c: "#71AEDA", d: 0.15 },
    { h: "92%", c: "#6DBF80", d: 0.3 },
    { h: "58%", c: "#464A80", d: 0.45 },
    { h: "78%", c: "#A3C64B", d: 0.6 },
  ];
  const labels = ["OPERATING", "RESERVE", "T-BILLS", "MMF", "SWEEP"];
  return (
    <div style={sceneStyle(12)}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: "#071838" }}>Cash Positions</span>
        <span style={{ fontSize: 9, fontWeight: 700, color: "#3E8B57", background: "rgba(109,191,128,.16)", borderRadius: 999, padding: "2px 8px" }}>Auto-sweep on</span>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 12, height: 104, marginTop: 16, padding: "0 6px" }}>
        {bars.map((b, i) => (
          <span
            key={i}
            style={{
              flex: 1,
              height: b.h,
              borderRadius: "6px 6px 2px 2px",
              background: b.c,
              transformOrigin: "bottom",
              animation: `heroGrowBar 18s linear infinite both`,
              animationDelay: `${b.d}s`,
            }}
          />
        ))}
      </div>
      <div style={{ display: "flex", gap: 12, padding: "6px 6px 0", fontSize: 8, fontWeight: 600, color: "#9AA5B5", letterSpacing: ".04em" }}>
        {labels.map((l) => (
          <span key={l} style={{ flex: 1, textAlign: "center" }}>{l}</span>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 12, animation: `heroRise 18s linear infinite both`, animationDelay: "13.6s" }}>
        <span style={{ fontSize: 9.5, fontWeight: 600, color: "#19284A" }}>Idle cash detected → swept to T-Bills</span>
        <span style={{ fontSize: 9, fontWeight: 700, color: "#5C7326", background: "rgba(163,198,75,.22)", borderRadius: 999, padding: "2px 8px", animation: `heroPopIn 18s linear infinite both`, animationDelay: "14.2s" }}>+$18,420 est. annual yield</span>
      </div>
    </div>
  );
}
