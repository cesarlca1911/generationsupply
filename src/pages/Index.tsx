import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Mission } from "@/components/site/Mission";
import { Gallery } from "@/components/site/Gallery";
import { Roadmap } from "@/components/site/Roadmap";
import { ImpactDashboard } from "@/components/site/ImpactDashboard";
import { Leadership } from "@/components/site/Leadership";
import { Partners } from "@/components/site/Partners";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
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
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Mission />
      <Gallery />
        <Roadmap />
        <Leadership />
        <Partners />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
