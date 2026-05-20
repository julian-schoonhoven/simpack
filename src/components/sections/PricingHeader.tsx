"use client";

import { useLanguage } from "@/providers/LanguageProvider";

export function PricingHeader() {
  const { t } = useLanguage();
  const p = t.pricing;

  return (
    <section className="section-padding pt-28 sm:pt-32">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium tracking-wide text-accent uppercase">
            {p.eyebrow}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {p.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            {p.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export function PricingFootnote() {
  const { t } = useLanguage();
  const p = t.pricing;

  return (
    <p className="mx-auto mt-10 max-w-xl text-center text-sm text-muted">
      {p.footnoteBefore}{" "}
      <span className="font-medium text-foreground">{p.contactSales}</span>
      {p.footnoteAfter}
    </p>
  );
}
