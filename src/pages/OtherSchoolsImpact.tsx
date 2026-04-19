import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const OtherSchoolsImpact = () => {
  useEffect(() => {
    document.title = "Impact in Other Schools — Generation Supply";
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <div className="container py-12 md:py-20">
        <Button asChild variant="outline" size="sm" className="mb-8">
          <Link to="/"><ArrowLeft className="mr-1 h-4 w-4" /> Back</Link>
        </Button>

        <div className="max-w-3xl mx-auto text-center py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Coming Soon</p>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-black text-primary text-balance">
            Impact in Other Schools
          </h1>
          <p className="mt-8 text-lg text-muted-foreground">
            [Impact Content Placeholder]
          </p>

          <div className="mt-12">
            <Button asChild variant="hero" size="lg">
              <Link to="/"><ArrowLeft className="mr-1 h-4 w-4" /> Back to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OtherSchoolsImpact;
