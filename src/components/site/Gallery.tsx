import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useCallback } from "react";
import dropbox from "@/assets/gbe-dropbox.jpeg";
import mailers from "@/assets/gbe-mailers.jpeg";
import newsletter from "@/assets/gbe-newsletter.jpeg";

export const galleryItems = [
  {
    slug: "gbe-dropbox",
    src: dropbox,
    title: "The GBE Drop-off Box",
    caption: "Direct Community Impact — supplies pouring in from Greenbriar East families.",
  },
  {
    slug: "gbe-mailers",
    src: mailers,
    title: "Teacher Flyer Distribution",
    caption: "Every teacher receives a personalized promotion flyer to redistribute to their students.",
  },
  {
    slug: "gbe-newsletter",
    src: newsletter,
    title: "Official GBE Newsletter Feature",
    caption: "Direct Community Impact — featured in the school's community newsletter.",
  },
];

export const Gallery = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const closeLightbox = useCallback(() => {
    setActiveImage(null);
  }, []);

  return (
    <section id="impact" className="bg-background py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Results in Action</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-black text-primary text-balance">
              Field Operations: Greenbriar East ES
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-balance">
              Our flagship deployment — proof that small, focused action transforms a school community.
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-border ml-8" />
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {galleryItems.map((it, i) => (
            <motion.div
              key={it.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
            >
              <button
                onClick={() => setActiveImage(it.src)}
                className="group block relative overflow-hidden rounded-2xl bg-card border border-border shadow-card-soft hover:shadow-elegant transition-all duration-500 w-full text-left cursor-pointer"
              >
                <figure className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={it.src}
                    alt={it.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white font-bold">
                      Direct Community Impact
                    </div>
                    <h3 className="mt-2 font-display text-xl font-bold">{it.title}</h3>
                    <p className="mt-2 text-sm text-white/80">{it.caption}</p>
                  </figcaption>
                </figure>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <Link to="/impact/other-schools" className="inline-flex items-center gap-2 rounded-xl bg-white text-black hover:bg-neutral-200 px-6 py-3 font-semibold transition-all duration-300 shadow-elegant hover:shadow-elegant">
            See Our Impact in Other Schools <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-50 text-white/80 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="h-8 w-8" />
            </button>
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              src={activeImage}
              alt="Full screen image"
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
