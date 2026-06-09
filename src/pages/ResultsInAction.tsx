import { useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Gallery } from "@/components/site/Gallery";
import { OperationalEcosystem } from "@/components/site/OperationalEcosystem";

const ResultsInAction = () => {
  useEffect(() => {
    document.title = "Results in Action — Generation Supply";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <Gallery />
        <OperationalEcosystem />
      </div>
      <Footer />
    </main>
  );
};

export default ResultsInAction;
