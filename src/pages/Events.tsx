import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ImagePlus, MapPin, X } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import fcpsSummerExtravaganza from "@/assets/summer-extravaganza-2026.jpeg";
import mosbyWoodsFlyer from "@/assets/mosby-woods-supply-drive-flyer.jpeg";

type EventItem = {
  slug: string;
  name: string;
  date: string;
  location?: string;
  description: string;
  photoSlots: number;
  photos?: string[];
};

const events: EventItem[] = [
  {
    slug: "fcps-summer-extravaganza",
    name: "Volunteering @ FCPS Summer Extravaganza",
    date: "June 6, 2026",
    location: "Woodson High School",
    description:
      "Our team volunteered at the FCPS Summer Extravaganza, supporting families across the county with academic resources and community outreach.",
    photoSlots: 6,
    photos: [fcpsSummerExtravaganza],
  },
  {
    slug: "mosby-woods-supply-drive",
    name: "Mosby Woods Supply Drive",
    date: "June 14, 2026",
    location: "Mosby Woods",
    description:
      "A neighborhood-wide supply drive fundraiser at Mosby Woods to collect unused school supplies for underserved FCPS students. Supplies will be redistributed for the 2026-27 school year.",
    photoSlots: 6,
    photos: [mosbyWoodsFlyer],
  },
  {
    slug: "cfa-spirit-night",
    name: "CFA Spirit Night at Chick-fil-A Fair Lakes",
    date: "September 17, 2026 · 4–8 PM",
    location: "Chick-fil-A Fair Lakes",
    description:
      "Join us for Spirit Night at Chick-fil-A Fair Lakes — a portion of every order benefits Generation Supply's mission to equip underserved students.",
    photoSlots: 6,
  },
];

const Events = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const closeLightbox = useCallback(() => {
    setActiveImage(null);
  }, []);

  useEffect(() => {
    document.title = "Events — Generation Supply";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 md:pt-32 pb-24 md:pb-32 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Community Events</p>
            <h1 className="mt-4 font-display text-4xl md:text-5xl font-black text-primary text-balance">
              Generation Supply on the Ground.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground text-balance">
              From volunteer days to spirit nights, every event drives momentum for the students we serve. Explore where
              we've been — and where we're heading next.
            </p>
          </motion.div>

          <div className="mt-16 space-y-12">
            {events.map((ev, i) => (
              <motion.article
                key={ev.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-card shadow-card-soft overflow-hidden"
              >
                <div className="p-6 md:p-8 border-b border-border flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {ev.date}
                      </span>
                      {ev.location && (
                        <span className="inline-flex items-center gap-1.5 text-slate">
                          <MapPin className="h-3.5 w-3.5" />
                          {ev.location}
                        </span>
                      )}
                    </div>
                    <h2 className="mt-3 font-display text-2xl md:text-3xl font-black text-primary tracking-tight">
                      {ev.name}
                    </h2>
                    <p className="mt-3 text-muted-foreground max-w-2xl leading-relaxed">{ev.description}</p>
                  </div>
                </div>

                <div className="p-6 md:p-8 bg-secondary/40">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate mb-4">
                    Photo Gallery
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {ev.photos && ev.photos.length > 0
                      ? ev.photos.map((photo, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveImage(photo)}
                            className="group aspect-square rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all cursor-pointer"
                          >
                            <img
                              src={photo}
                              alt={`${ev.name} photo ${idx + 1}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </button>
                        ))
                      : Array.from({ length: ev.photoSlots }).map((_, idx) => (
                          <div
                            key={idx}
                            className="group aspect-square rounded-xl border-2 border-dashed border-primary/20 bg-background/60 flex flex-col items-center justify-center text-slate/60 hover:border-accent/60 hover:text-accent transition-colors"
                          >
                            <ImagePlus className="h-6 w-6" />
                            <span className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.14em]">
                              Add Photo
                            </span>
                          </div>
                        ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <Footer />

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
    </main>
  );
};

export default Events;
