"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HERO_STATS } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] scroll-mt-0 overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute left-1/2 top-0 h-[520px] w-[min(900px,100vw)] -translate-x-1/2 rounded-full bg-gradient-to-b from-teal-50/90 via-cyan-50/30 to-transparent blur-3xl dark:from-teal-950/40 dark:via-navy/20" />
        <div className="absolute right-0 top-1/4 h-64 w-64 rounded-full bg-teal-100/40 blur-3xl dark:bg-teal-900/20" />
        <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-slate-100 blur-2xl dark:bg-slate-800/30" />
      </div>

      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/90 px-4 py-1.5 text-sm font-medium text-muted shadow-sm backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            AI Investment Intelligence
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl font-semibold tracking-tight text-gradient sm:text-5xl md:text-6xl lg:text-[3.5rem] lg:leading-[1.1]"
          >
            Decide smarter on{" "}
            <span className="text-gradient-accent">AI investments.</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
          >
            Simpack helps companies calculate ROI, risk, and ethical impact of AI
            investments in real time, enabling faster and better business
            decisions.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <Button href="#features" variant="accent" size="lg" className="w-full sm:w-auto">
              Try Simpack
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button href="#how" variant="secondary" size="lg" className="w-full sm:w-auto">
              <Play className="mr-2 h-4 w-4 fill-current" />
              See Demo
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-14 grid max-w-5xl gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-4"
        >
          {HERO_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group rounded-2xl border border-border/80 bg-surface/95 p-5 shadow-sm backdrop-blur-sm transition-shadow hover:border-accent/20 hover:shadow-md hover:shadow-teal-500/10 sm:p-6"
            >
              <p className="text-2xl font-semibold tracking-tight text-foreground sm:text-[1.65rem]">
                {stat.value}
              </p>
              <p className="mt-1 text-sm leading-snug text-muted group-hover:text-foreground/80 transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-2xl border border-border bg-surface p-1 shadow-xl shadow-slate-200/50 dark:shadow-black/30 sm:rounded-3xl"
          aria-hidden
        >
          <div className="rounded-xl sm:rounded-[1.35rem] bg-gradient-to-br from-slate-50 to-slate-100/80 p-4 dark:from-navy-muted dark:to-navy sm:p-6">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="h-24 rounded-xl bg-surface/90 border border-border/60 p-3 sm:h-28">
                <div className="h-2 w-16 rounded bg-slate-200 dark:bg-slate-600" />
                <div className="mt-3 h-8 w-full rounded-lg bg-gradient-to-r from-teal-100 to-teal-50 dark:from-teal-900/50 dark:to-teal-800/30" />
              </div>
              <div className="h-24 rounded-xl bg-surface/90 border border-border/60 p-3 sm:h-28 sm:col-span-2">
                <div className="flex h-full items-end gap-1.5">
                  {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-accent/30 to-accent/70"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
