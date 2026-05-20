"use client";

import { motion } from "framer-motion";
import { TrendingUp, Minus, ShieldCheck, Scale } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { IMPACT_METRICS } from "@/lib/constants";

const metricIcons = [TrendingUp, Minus, ShieldCheck, Scale];

export function Impact() {
  return (
    <Section id="impact" className="bg-navy text-white overflow-hidden">
      <div className="relative">
        <div
          className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
          aria-hidden
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <p className="text-sm font-medium tracking-wide text-blue-300 uppercase mb-3">
              Measurable outcomes
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Impact you can report to the board
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              Organizations using Simpack see clearer investment narratives,
              reduced decision cycles, and stronger alignment between finance,
              technology, and compliance teams.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {IMPACT_METRICS.map((metric, i) => {
                const Icon = metricIcons[i];
                return (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                          {metric.label}
                        </p>
                        <p className="mt-1 text-2xl font-semibold">{metric.value}</p>
                        <p className="mt-0.5 text-xs text-slate-400">{metric.trend}</p>
                      </div>
                      <Icon className="h-4 w-4 text-blue-400/80" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8">
              <Button
                href="/pricing"
                variant="secondary"
                className="!bg-white !text-navy hover:!bg-slate-100"
              >
                Explore plans
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md sm:p-6 lg:rounded-3xl"
          >
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-sm font-medium text-slate-300">
                Portfolio impact dashboard
              </span>
              <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-medium text-emerald-300">
                Live
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              {["Q1", "Q2", "Q3", "Q4"].map((q, i) => (
                <div
                  key={q}
                  className={`rounded-lg p-3 ${i === 3 ? "bg-white/10 col-span-1" : "bg-white/5"}`}
                >
                  <p className="text-[10px] uppercase text-slate-500">{q}</p>
                  <div className="mt-2 flex items-end gap-0.5 h-12">
                    {[35, 50, 42, 68].slice(0, 3).map((h, j) => (
                      <div
                        key={j}
                        className="flex-1 rounded-sm bg-gradient-to-t from-blue-600/40 to-blue-400/80"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>ROI trajectory</span>
                <span className="text-emerald-400">+28%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-blue-500 to-indigo-400" />
              </div>
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Risk exposure</span>
                <span className="text-blue-300">-41%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[41%] rounded-full bg-gradient-to-r from-violet-500/80 to-blue-400/80" />
              </div>
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Ethics compliance</span>
                <span>94/100</span>
              </div>
              <div className="h-24 rounded-xl border border-white/10 bg-white/5 p-3">
                <svg viewBox="0 0 200 60" className="h-full w-full" preserveAspectRatio="none">
                  <path
                    d="M0 45 Q50 20 100 35 T200 15"
                    fill="none"
                    stroke="url(#impactGrad)"
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient id="impactGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#60a5fa" />
                      <stop offset="100%" stopColor="#a78bfa" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
