import { AboutUsSection } from "./components/about-us-section";
import { HeroSection } from "./components/hero-section";
import { ServicesSection } from "./components/services-section";

export default function Home() {
  return (
    <>
      <HeroSection />

      <ServicesSection />

      <AboutUsSection />
    </>
  );
}
