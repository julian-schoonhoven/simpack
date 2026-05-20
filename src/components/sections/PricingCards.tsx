"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PRICING_TIERS } from "@/lib/constants";
import { useLanguage } from "@/providers/LanguageProvider";
import { cn } from "@/lib/utils";

export function PricingCards() {
  const { t } = useLanguage();
  const p = t.pricing;

  return (
    <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch lg:gap-5">
      {PRICING_TIERS.map((tier, i) => (
        <motion.article
          key={tier.nameKey}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.45 }}
          className={cn(
            "relative flex flex-col rounded-2xl border p-6 sm:p-8",
            tier.highlighted
              ? "z-10 border-accent bg-surface shadow-xl shadow-teal-500/15 ring-1 ring-accent/25 lg:-my-2 lg:scale-[1.02] lg:py-10"
              : "border-border bg-surface shadow-sm"
          )}
        >
          {"badgeKey" in tier && tier.badgeKey && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white shadow-md">
              {p[tier.badgeKey as keyof typeof p]}
            </span>
          )}

          <div>
            <h3 className="text-lg font-semibold text-foreground">
              {p[tier.nameKey as keyof typeof p]}
            </h3>
            <p className="mt-1 text-sm text-muted">
              {p[tier.descriptionKey as keyof typeof p]}
            </p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-semibold tracking-tight text-foreground">
                {tier.price}
              </span>
              {tier.period && (
                <span className="text-sm text-muted">{tier.period}</span>
              )}
            </div>
          </div>

          <ul className="mt-8 flex-1 space-y-3">
            {tier.featureKeys.map((key) => (
              <li key={key} className="flex items-start gap-3 text-sm text-muted">
                <Check
                  className={cn(
                    "mt-0.5 h-4 w-4 shrink-0",
                    tier.highlighted ? "text-accent" : "text-accent/80"
                  )}
                  strokeWidth={2.5}
                />
                <span>{p[key as keyof typeof p]}</span>
              </li>
            ))}
          </ul>

          <Button
            href="#home"
            variant={tier.highlighted ? "accent" : "secondary"}
            className="mt-8 w-full"
            size="lg"
          >
            {p[tier.ctaKey as keyof typeof p]}
          </Button>
        </motion.article>
      ))}
    </div>
  );
}
