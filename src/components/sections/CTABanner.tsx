"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CTABanner() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-navy via-navy to-navy-muted px-6 py-12 text-center sm:px-12 sm:py-16"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500/25 via-transparent to-transparent"
            aria-hidden
          />
          <h2 className="relative text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Ready to simulate your next AI investment?
          </h2>
          <p className="relative mx-auto mt-3 max-w-lg text-sm text-slate-300 sm:text-base">
            Join teams making faster, defensible decisions with Simpack.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href="#home"
              className="!bg-white !text-navy hover:!bg-slate-100 w-full sm:w-auto"
              size="lg"
            >
              Try Simpack
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              href="/pricing"
              variant="outline"
              size="lg"
              className="!border-white/30 !text-white hover:!bg-white/10 w-full sm:w-auto"
            >
              View Pricing
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
