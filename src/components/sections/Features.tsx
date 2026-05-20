"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Brain,
  GitBranch,
  Shield,
  Wallet,
  FileText,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FEATURES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  Brain,
  GitBranch,
  Shield,
  Wallet,
  FileText,
};

export function Features() {
  return (
    <Section id="features" className="bg-surface-elevated/50">
      <SectionHeader
        eyebrow="Platform"
        title="Features"
        description="Everything you need to simulate, compare, and justify AI investments with confidence."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {FEATURES.map((feature, i) => {
          const Icon = iconMap[feature.icon];
          return (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-border bg-surface p-6 shadow-sm transition-shadow duration-300 hover:border-accent/25 hover:shadow-lg hover:shadow-teal-500/10 sm:p-7"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 text-accent transition-colors group-hover:from-accent/15 group-hover:to-teal-100 dark:from-teal-950/50 dark:to-navy-muted">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
