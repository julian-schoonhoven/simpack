"use client";

import { motion } from "framer-motion";
import { TrendingUp, Minus, ShieldCheck, Scale } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { IMPACT_METRICS } from "@/lib/constants";
import { useLanguage } from "@/providers/LanguageProvider";
import { cn } from "@/lib/utils";

const metricIcons = [TrendingUp, Minus, ShieldCheck, Scale];

export function Impact() {
  const { t } = useLanguage();
  const imp = t.impact;

  return (
    <Section
      id="impact"
      className="relative overflow-hidden bg-surface-elevated dark:bg-background"
    >
      <div
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-teal-400/10 blur-3xl dark:bg-teal-500/10"
        aria-hidden
      />

      <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div>
          <p className="mb-3 text-sm font-medium tracking-wide text-accent uppercase">
            {imp.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {imp.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            {imp.description}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {IMPACT_METRICS.map((metric, i) => {
              const Icon = metricIcons[i];
              return (
                <motion.div
                  key={metric.labelKey}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-border bg-surface p-4 shadow-sm transition-shadow hover:shadow-md hover:shadow-teal-500/5"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted">
                        {imp[metric.labelKey as keyof typeof imp]}
                      </p>
                      <p className="mt-1 text-2xl font-semibold text-foreground">
                        {metric.value}
                      </p>
                      <p className="mt-0.5 text-xs text-muted">
                        {imp[metric.trendKey as keyof typeof imp]}
                      </p>
                    </div>
                    <Icon className="h-4 w-4 text-accent" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8">
            <Button href="/pricing" variant="accent">
              {imp.explorePlans}
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border bg-surface p-5 shadow-lg shadow-slate-200/40 dark:shadow-black/20 sm:p-6 lg:rounded-3xl"
        >
          <div className="mb-4 flex items-center justify-between border-b border-border pb-4">
            <span className="text-sm font-medium text-foreground">
              {imp.dashboardTitle}
            </span>
            <span className="rounded-full bg-teal-500/15 px-2.5 py-0.5 text-xs font-medium text-accent">
              {imp.live}
            </span>
          </div>

          <div className="mb-6 grid grid-cols-3 gap-3">
            {["Q1", "Q2", "Q3", "Q4"].map((q, i) => (
              <div
                key={q}
                className={cn(
                  "rounded-lg border border-border/60 bg-surface-elevated p-3",
                  i === 3 && "col-span-1"
                )}
              >
                <p className="text-[10px] uppercase text-muted">{q}</p>
                <div className="mt-2 flex h-12 items-end gap-0.5">
                  {[35, 50, 42, 68].slice(0, 3).map((h, j) => (
                    <div
                      key={j}
                      className="flex-1 rounded-sm bg-gradient-to-t from-teal-600/70 to-teal-400"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-muted">
              <span>{imp.roiTrajectory}</span>
              <span className="font-medium text-accent">+28%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-surface-elevated">
              <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-teal-500 to-teal-300" />
            </div>
            <div className="flex items-center justify-between text-xs text-muted">
              <span>{imp.riskExposure}</span>
              <span className="font-medium text-accent">-41%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-surface-elevated">
              <div className="h-full w-[41%] rounded-full bg-gradient-to-r from-teal-600/90 to-teal-400/80" />
            </div>
            <div className="flex items-center justify-between text-xs text-muted">
              <span>{imp.ethicsCompliance}</span>
              <span className="font-medium text-foreground">94/100</span>
            </div>
            <div className="h-24 rounded-xl border border-border bg-surface-elevated p-3">
              <svg viewBox="0 0 200 60" className="h-full w-full" preserveAspectRatio="none">
                <path
                  d="M0 45 Q50 20 100 35 T200 15"
                  fill="none"
                  stroke="url(#impactGrad)"
                  strokeWidth="2"
                />
                <defs>
                  <linearGradient id="impactGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#14b8a6" />
                    <stop offset="100%" stopColor="#2dd4bf" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
