import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { galleryItems } from "@/components/site/Gallery";
import { useEffect } from "react";

const descriptions: Record<string, string> = {
  "gbe-dropbox":
    "Secured and centralized collection of premium academic assets. Our campaign raised $518 worth of these premium assets in merely 2 days after initial launch, which will be redistributed to directly support over 290 underprivileged GBE students.",
  "gbe-mailers":
    "Direct logistics outreach. Teachers were equipped with personalized informational flyers to ensure communication with student families and to maximize participation.",
  "gbe-newsletter":
    "Institutional validation and scaling through a feature in GBE's school community newsletter endorsed by the GBE Principal, legitimizing Generation Supply as a trusted non-profit partner for future county-wide scaling.",
};

const ImpactDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = galleryItems.find((i) => i.slug === slug);

  useEffect(() => {
    document.title = item ? `${item.title} — Generation Supply` : "Impact — Generation Supply";
  }, [item]);

  if (!item) {
    return (
      <main className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
        <h1 className="font-display text-3xl font-black text-primary">Image not found</h1>
        <Button asChild variant="hero" className="mt-6">
          <Link to="/"><ArrowLeft className="mr-1 h-4 w-4" /> Back to Home</Link>
        </Button>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container py-12 md:py-20">
        <Button asChild variant="outline" size="sm" className="mb-8">
          <Link to="/#impact"><ArrowLeft className="mr-1 h-4 w-4" /> Back</Link>
        </Button>

        <article className="max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl border border-border shadow-elegant">
            <img src={item.src} alt={item.title} className="w-full h-auto object-cover" />
          </div>

          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Direct Community Impact
            </p>
            <h1 className="mt-3 font-display text-3xl md:text-5xl font-black text-primary text-balance">
              {item.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {descriptions[item.slug] ?? item.caption}
            </p>
          </div>

          <div className="mt-12">
            <Button asChild variant="hero">
              <Link to="/"><ArrowLeft className="mr-1 h-4 w-4" /> Back to Home</Link>
            </Button>
          </div>
        </article>
      </div>
    </main>
  );
};

export default ImpactDetail;
