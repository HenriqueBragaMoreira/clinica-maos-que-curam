import { AboutUsSection } from "./components/about-us-section";
import { HeroSection } from "./components/hero-section";
import { PricingSection } from "./components/pricing-section";
import { ServicesSection } from "./components/services-section";
import { TestimonialsSection } from "./components/testimonials-section";

export default function Home() {
  return (
    <>
      <HeroSection />

      <ServicesSection />

      <AboutUsSection />

      <PricingSection />

      <TestimonialsSection />
    </>
  );
}
