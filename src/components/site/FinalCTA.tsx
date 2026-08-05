import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import mark from "@/assets/atomic-mark.svg.asset.json";
import { Reveal } from "./Reveal";

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
      <Reveal className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 w-full">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-3 py-1 text-xs font-medium text-white/90"
            >
              <img src={mark.url} alt="" className="h-3.5 w-3.5 brightness-0 invert" />
              Built for RIAs & family offices
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-5 text-[2rem] sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white tracking-tight [text-shadow:0_2px_24px_rgba(7,24,56,0.45)]"
            >
              More clients, more wires, more capital calls.{" "}
              <span className="brand-gradient-text">One platform to run them.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-brand-navy hover:bg-white/90 transition-colors"
              >
                Book a demo <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur px-5 py-3 text-sm font-medium text-white hover:bg-white/20 transition-colors"
              >
                See the platform
              </a>
            </motion.div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
