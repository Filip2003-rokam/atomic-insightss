import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Circle } from "lucide-react";
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
  return (
    <section className="relative flex min-h-[90vh] flex-col overflow-hidden bg-white">
      {/* soft gradient stage */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-full -z-0"
        style={{
          background:
            "radial-gradient(1200px 500px at 20% 0%, rgba(111,190,68,0.12), transparent 60%), radial-gradient(900px 500px at 85% 0%, rgba(47,128,194,0.15), transparent 60%), linear-gradient(180deg, #F5F9FC 0%, #FFFFFF 100%)",
        }}
      />

      <div className="relative flex flex-1 items-center w-full mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full">
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
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-brand-navy tracking-tight"
            >
              More clients, more wires, more capital calls.{" "}
              <span className="brand-gradient-text">One platform to run them.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 text-lg text-brand-navy/70 max-w-xl leading-relaxed"
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

            <div className="mt-8 flex items-center gap-6 text-xs text-brand-navy/60">
              <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-brand-green" /> SOC 2 Type II</span>
              <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-brand-green" /> Direct custodian APIs</span>
              <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-brand-green" /> Maker-checker approvals</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative"
    >
      {/* floating summary card top-left */}
      <motion.div
        initial={{ opacity: 0, y: 10, x: -10 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute -top-6 -left-4 z-10 rounded-2xl bg-white p-4 ring-brand hidden sm:block"
      >
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Total Volume</div>
        <div className="mt-1 text-2xl font-semibold text-brand-navy">$1.6M</div>
        <div className="mt-1 text-[11px] text-muted-foreground">1.26M transactions</div>
      </motion.div>

      {/* floating pending card */}
      <motion.div
        initial={{ opacity: 0, y: 10, x: 10 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="absolute -bottom-6 -right-4 z-10 rounded-2xl bg-brand-navy p-4 text-white shadow-2xl shadow-brand-navy/25 hidden sm:block"
      >
        <div className="text-[10px] uppercase tracking-wider text-white/60">Pending</div>
        <div className="mt-1 text-2xl font-semibold">$1.2M</div>
        <div className="mt-1 flex items-center gap-1.5 text-[11px] text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-pulse" />
          33 pending transactions
        </div>
      </motion.div>

      <div className="relative rounded-2xl bg-white border border-border shadow-2xl shadow-brand-navy/10 overflow-hidden">
        {/* window chrome */}
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
          <div className="ml-4 text-[11px] text-muted-foreground">Atomic Capital Advisory · Payment Requests</div>
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Payment Requests</div>
              <div className="mt-1 text-sm font-medium text-brand-navy">Awaiting review · In process · Completed</div>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <Stat label="Review" value="2" />
              <Stat label="In Process" value="8" tone="warn" />
              <Stat label="Completed" value="—" tone="ok" />
            </div>
          </div>

          <div className="rounded-xl border border-border overflow-hidden">
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
