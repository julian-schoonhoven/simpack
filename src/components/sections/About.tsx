"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/providers/LanguageProvider";

export function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <Section id="about" className="bg-background">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div>
          <SectionHeader
            align="left"
            title={a.title}
            description={a.description}
            className="mb-0 !text-left"
          />
          <p className="mt-6 text-base leading-relaxed text-muted">{a.p1}</p>
          <p className="mt-4 text-base leading-relaxed text-muted">{a.p2}</p>
          <div className="mt-8">
            <Button href="#faq" variant="outline">
              {a.learnMore}
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            {a.leadership}
          </p>
          <div className="mt-6 flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-surface-elevated text-lg font-semibold text-muted">
              SP
            </div>
            <div>
              <p className="font-semibold text-foreground">Founding Team</p>
              <p className="text-sm text-muted">{a.founderRole}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{a.founderBio}</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-8">
            {[
              { value: "50+", label: a.stat1 },
              { value: "12", label: a.stat2 },
              { value: "99.9%", label: a.stat3 },
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
