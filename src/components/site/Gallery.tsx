import { motion } from "framer-motion";
import dropbox from "@/assets/gbe-dropbox.jpeg";
import mailers from "@/assets/gbe-mailers.jpeg";
import newsletter from "@/assets/gbe-newsletter.jpeg";

const items = [
  {
    src: dropbox,
    title: "The GBE Drop-off Box",
    caption: "Direct Community Impact — supplies pouring in from Greenbriar East families.",
  },
  {
    src: mailers,
    title: "Teacher Mailer Distribution",
    caption: "Direct Community Impact — every teacher receives a personalized request flyer.",
  },
  {
    src: newsletter,
    title: "Official GBE Newsletter Feature",
    caption: "Direct Community Impact — featured in the school's community newsletter.",
  },
];

export const Gallery = () => {
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
          {items.map((it, i) => (
            <motion.figure
              key={it.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-card-soft hover:shadow-elegant transition-all duration-500"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
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
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
