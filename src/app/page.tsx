import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Demo } from "@/components/sections/Demo";
import { Impact } from "@/components/sections/Impact";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { CTABanner } from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Demo />
      <Impact />
      <About />
      <FAQ />
      <CTABanner />
    </>
  );
}
