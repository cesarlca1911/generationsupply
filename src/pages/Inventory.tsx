import { useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ImpactDashboard } from "@/components/site/ImpactDashboard";

const Inventory = () => {
  useEffect(() => {
    document.title = "Data & Inventory — Generation Supply";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <ImpactDashboard />
      </div>
      <Footer />
    </main>
  );
};

export default Inventory;
