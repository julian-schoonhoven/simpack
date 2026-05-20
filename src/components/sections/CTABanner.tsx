"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/providers/LanguageProvider";

export function CTABanner() {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-12 text-center shadow-xl shadow-slate-200/50 dark:border-navy-muted dark:bg-navy dark:shadow-black/30 sm:px-12 sm:py-16"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-400/15 via-transparent to-transparent dark:from-teal-500/20"
            aria-hidden
          />
          <h2 className="relative text-2xl font-semibold tracking-tight text-foreground dark:text-white sm:text-3xl">
            {t.cta.title}
          </h2>
          <p className="relative mx-auto mt-3 max-w-lg text-sm text-muted dark:text-slate-300 sm:text-base">
            {t.cta.subtitle}
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#home" variant="accent" size="lg" className="w-full sm:w-auto">
              {t.cta.try}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href="/pricing"
              variant="outline"
              size="lg"
              className="w-full border-border dark:border-white/25 dark:text-white dark:hover:bg-white/10 sm:w-auto"
            >
              {t.cta.pricing}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
