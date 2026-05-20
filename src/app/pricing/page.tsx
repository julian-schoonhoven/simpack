import type { Metadata } from "next";
import { PricingCards } from "@/components/sections/PricingCards";
import { CTABanner } from "@/components/sections/CTABanner";
import { PricingHeader, PricingFootnote } from "@/components/sections/PricingHeader";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for teams of every size. Start with Starter, scale with Pro, or talk to us about Enterprise.",
};

export default function PricingPage() {
  return (
    <>
      <PricingHeader />
      <section className="section-padding pt-0 bg-background">
        <div className="container-wide">
          <PricingCards />
          <PricingFootnote />
        </div>
      </section>
      <CTABanner />
    </>
  );
}
