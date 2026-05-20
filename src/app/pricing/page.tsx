import type { Metadata } from "next";
import { PricingCards } from "@/components/sections/PricingCards";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for teams of every size. Start with Starter, scale with Pro, or talk to us about Enterprise.",
};

export default function PricingPage() {
  return (
    <>
      <section className="section-padding pt-28 sm:pt-32">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-medium tracking-wide text-accent uppercase">
              Plans
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Pricing
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Choose the plan that fits your team. All plans include a 14-day
              free trial—no credit card required.
            </p>
          </div>

          <div className="mt-14 lg:mt-16">
            <PricingCards />
          </div>

          <p className="mx-auto mt-10 max-w-xl text-center text-sm text-muted">
            Need a custom deployment, on-premise, or volume licensing?{" "}
            <span className="font-medium text-foreground">
              Contact our sales team
            </span>{" "}
            for Enterprise pricing tailored to your organization.
          </p>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
