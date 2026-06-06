import { Link } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useCallback } from "react";
import navyDropbox from "@/assets/navy-dropbox.jpeg.asset.json";
import navySupplies from "@/assets/navy-supplies.jpeg.asset.json";
import navyNewsletter from "@/assets/navy-newsletter.png.asset.json";

const navyItems = [
  {
    slug: "navy-dropbox",
    src: navyDropbox.url,
    title: "Navy ES Supply Drive Donation Box",
    caption: "Supply drive launched June 1st, 2026 — donation hub officially live in the Navy Elementary lobby.",
  },
  {
    slug: "navy-supplies",
    src: navySupplies.url,
    title: "Supplies Raised in 3 Days",
    caption: "$158.14 worth of premium academic supplies collected in just 3 days of the Navy ES supply drive.",
  },
  {
    slug: "navy-newsletter",
    src: navyNewsletter.url,
    title: "Featured in the Official Navy ES Newsletter",
    caption: "Generation Supply's initial feature in the official Navy Elementary school newsletter — formally introducing the donation drive to the entire Navy ES community.",
  },
];

const OtherSchoolsImpact = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>("");

  const openLightbox = (src: string, title: string) => {
    setActiveImage(src);
    setActiveTitle(title);
  };

  const closeLightbox = useCallback(() => {
    setActiveImage(null);
    setActiveTitle("");
  }, []);

  useEffect(() => {
    document.title = "Impact in Other Schools — Generation Supply";
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    if (activeImage) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [activeImage, closeLightbox]);

  return (
    <main className="min-h-screen bg-background">
      <div className="container py-12 md:py-20">
        <Button asChild variant="outline" size="sm" className="mb-8">
          <Link to="/"><ArrowLeft className="mr-1 h-4 w-4" /> Back</Link>
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Regional Expansion</p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl font-black text-primary text-balance">
            Field Operations: Navy ES
          </h1>
          <p className="mt-4 text-lg text-muted-foreground text-balance">
            Our second active donation hub — proof that the Generation Supply model scales across the region.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-5xl">
          {navyItems.map((it, i) => (
            <motion.div
              key={it.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
            >
              <div className="group block relative overflow-hidden rounded-2xl bg-card border border-border shadow-card-soft hover:shadow-elegant transition-all duration-500">
                <figure className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={it.src}
                    alt={it.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">
                      Direct Community Impact
                    </div>
                    <h3 className="mt-2 font-display text-xl font-bold">{it.title}</h3>
                    <p className="mt-2 text-sm text-primary-foreground/80">{it.caption}</p>
                  </figcaption>
                </figure>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <Button asChild variant="hero" size="lg">
            <Link to="/"><ArrowLeft className="mr-1 h-4 w-4" /> Back to Home</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default OtherSchoolsImpact;
