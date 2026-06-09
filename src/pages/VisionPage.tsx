import { useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Vision } from "@/components/site/Vision";

const VisionPage = () => {
  useEffect(() => {
    document.title = "Our Vision — Generation Supply";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <Vision />
      </div>
      <Footer />
    </main>
  );
};

export default VisionPage;
