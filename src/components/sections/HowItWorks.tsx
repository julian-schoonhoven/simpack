"use client";

import { motion } from "framer-motion";
import { ArrowRight, Database, Cpu, LineChart } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { HOW_STEPS } from "@/lib/constants";

const stepIcons = [Database, Cpu, LineChart];

export function HowItWorks() {
  return (
    <Section id="how">
      <SectionHeader
        eyebrow="Process"
        title="How it works"
        description="From data input to decision-ready output in three streamlined steps."
      />

      <div className="relative">
        <div className="hidden lg:absolute lg:left-[16.66%] lg:right-[16.66%] lg:top-[4.5rem] lg:block lg:h-px lg:bg-gradient-to-r lg:from-transparent lg:via-border lg:to-transparent" />

        <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
          {HOW_STEPS.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <div className="mb-5 flex w-full items-center justify-center gap-4 lg:justify-start">
                  <span className="font-mono text-sm font-medium text-accent">
                    {step.step}
                  </span>
                  {i < HOW_STEPS.length - 1 && (
                    <ArrowRight className="hidden h-4 w-4 text-border lg:block lg:absolute lg:-right-3 lg:top-3" />
                  )}
                </div>

                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface shadow-sm">
                  <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
                  {step.description}
                </p>

                {i < HOW_STEPS.length - 1 && (
                  <div className="my-6 flex justify-center lg:hidden">
                    <ArrowRight className="h-5 w-5 rotate-90 text-border" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
