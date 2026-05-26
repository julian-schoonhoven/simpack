"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PRICING_URL } from "@/lib/constants";
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
          className={[
            "relative overflow-hidden rounded-3xl border px-6 py-12 text-center sm:px-12 sm:py-16",
            "transition-colors duration-300",
            /* Light: iconic navy CTA */
            "border-navy-muted/50 bg-navy shadow-xl shadow-navy/20",
            /* Dark: clean off-white for contrast */
            "dark:border-slate-200/80 dark:bg-[#f8fafc] dark:shadow-lg dark:shadow-black/20",
          ].join(" ")}
        >
          <div
            className={[
              "pointer-events-none absolute inset-0 transition-opacity duration-300",
              "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]",
              "from-teal-400/20 via-transparent to-transparent",
              "dark:from-teal-500/10",
            ].join(" ")}
            aria-hidden
          />

          <h2
            className={[
              "relative text-2xl font-semibold tracking-tight sm:text-3xl",
              "transition-colors duration-300",
              "text-white dark:text-navy",
            ].join(" ")}
          >
            {t.cta.title}
          </h2>

          <p
            className={[
              "relative mx-auto mt-3 max-w-lg text-sm sm:text-base",
              "transition-colors duration-300",
              "text-slate-300 dark:text-slate-600",
            ].join(" ")}
          >
            {t.cta.subtitle}
          </p>

          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#home" variant="accent" size="lg" className="w-full sm:w-auto">
              {t.cta.try}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href={PRICING_URL}
              variant="outline"
              size="lg"
              className={[
                "w-full sm:w-auto",
                "transition-colors duration-300",
                "border-white/30 text-white hover:border-white/50 hover:bg-white/10",
                "dark:border-navy/20 dark:text-navy dark:hover:border-navy/35 dark:hover:bg-navy/5",
              ].join(" ")}
            >
              {t.cta.pricing}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
