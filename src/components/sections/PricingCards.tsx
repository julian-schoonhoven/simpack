"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PRICING_TIERS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function PricingCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-3 lg:gap-5 lg:items-stretch">
      {PRICING_TIERS.map((tier, i) => (
        <motion.article
          key={tier.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.45 }}
          className={cn(
            "relative flex flex-col rounded-2xl border p-6 sm:p-8",
            tier.highlighted
              ? "border-accent bg-white shadow-xl shadow-blue-500/10 ring-1 ring-accent/20 lg:scale-[1.02] lg:-my-2 lg:py-10 z-10"
              : "border-border bg-white shadow-sm"
          )}
        >
          {"badge" in tier && tier.badge && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white shadow-md">
              {tier.badge}
            </span>
          )}

          <div>
            <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
            <p className="mt-1 text-sm text-muted">{tier.description}</p>
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
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-muted">
                <Check
                  className={cn(
                    "mt-0.5 h-4 w-4 shrink-0",
                    tier.highlighted ? "text-accent" : "text-emerald-600"
                  )}
                  strokeWidth={2.5}
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            href="#home"
            variant={tier.highlighted ? "primary" : "secondary"}
            className="mt-8 w-full"
            size="lg"
          >
            {tier.cta}
          </Button>
        </motion.article>
      ))}
    </div>
  );
}
