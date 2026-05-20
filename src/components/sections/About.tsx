"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
        <div>
          <SectionHeader
            align="left"
            title="About Simpack"
            description="Simpack bridges the gap between AI innovation and responsible business decisions."
            className="mb-0 !text-left"
          />
          <p className="mt-6 text-base leading-relaxed text-muted">
            Founded by strategists and engineers who saw teams struggle to justify
            AI spend, Simpack brings consulting-grade rigor to investment
            simulation. We help CFOs, CTOs, and innovation leaders align on
            numbers—not narratives.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Our platform is trusted by SMEs scaling their first AI pilots and
            enterprises managing multi-million euro portfolios. Every simulation
            is designed for auditability, transparency, and board-ready
            communication.
          </p>
          <div className="mt-8">
            <Button href="#faq" variant="outline">
              Learn more
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-surface-elevated p-6 sm:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            Leadership
          </p>
          <div className="mt-6 flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-200 to-slate-100 text-lg font-semibold text-slate-500">
              SP
            </div>
            <div>
              <p className="font-semibold text-foreground">Founding Team</p>
              <p className="text-sm text-muted">Strategy & AI Engineering</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Combined decades in management consulting, fintech, and
                responsible AI—building tools we wished existed when advising
                Fortune 500 clients on technology investments.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-8">
            {[
              { value: "50+", label: "Enterprise pilots" },
              { value: "12", label: "Countries" },
              { value: "99.9%", label: "Uptime SLA" },
            ].map((item) => (
              <div key={item.label} className="text-center sm:text-left">
                <p className="text-xl font-semibold text-foreground">{item.value}</p>
                <p className="mt-0.5 text-xs text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
