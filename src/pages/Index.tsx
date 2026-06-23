import { Navbar } from "@/components/site/Navbar";
import { AnimatedHero } from "@/components/ui/animated-hero";
import { Mission } from "@/components/site/Mission";
import { Gallery } from "@/components/site/Gallery";
import { Roadmap } from "@/components/site/Roadmap";
import { ImpactDashboard } from "@/components/site/ImpactDashboard";
import { Vision } from "@/components/site/Vision";
import { Leadership } from "@/components/site/Leadership";
import { Partners } from "@/components/site/Partners";
import { Instagram } from "@/components/site/Instagram";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { GrainOverlay } from "@/components/ui/grain-overlay";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Generation Supply — Equipping the Next Generation";
    const desc = "Student-led initiative providing sustainable academic foundations for Fairfax County students.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  return (
    <AuroraBackground
      showRadialGradient
    >
      <GrainOverlay />
      <Navbar />
      <AnimatedHero />
      <Mission />
      <Gallery />
      <ImpactDashboard />
      <Vision />
      <Roadmap />
      <Leadership />
      <Partners />
      <Instagram />
      <Contact />
      <Footer />
    </AuroraBackground>
  );
};

export default Index;
