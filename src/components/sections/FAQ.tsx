"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FAQ_ITEMS } from "@/lib/constants";
import { useLanguage } from "@/providers/LanguageProvider";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();
  const faq = t.faq;

  return (
    <Section id="faq" className="bg-surface-elevated/80 dark:bg-surface-elevated/30">
      <SectionHeader title={faq.title} description={faq.description} />

      <div className="mx-auto max-w-2xl divide-y divide-border rounded-2xl border border-border bg-surface shadow-sm">
        {FAQ_ITEMS.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={item.questionKey}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-teal-500/5 sm:px-6"
                aria-expanded={isOpen}
              >
                <span className="pr-2 font-medium text-foreground">
                  {faq[item.questionKey as keyof typeof faq]}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-muted transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6">
                      {faq[item.answerKey as keyof typeof faq]}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
