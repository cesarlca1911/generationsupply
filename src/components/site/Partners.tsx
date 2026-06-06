import { motion } from "framer-motion";
import chickFilA from "@/assets/chick-fil-a.png.asset.json";
import educateFairfax from "@/assets/educate-fairfax.png.asset.json";

const partners = [
  {
    name: "Chick-fil-A Fair Lakes",
    tag: "Spirit Night Sponsor",
    logo: chickFilA.url,
    detail: "Spirit Night scheduled for September 17, 2026 — directly fueling our procurement hub operations.",
  },
  {
    name: "Educate Fairfax",
    tag: "Institutional Ally",
    logo: educateFairfax.url,
    detail: "Strategic alignment with Fairfax County's leading education nonprofit, amplifying our regional reach.",
  },
];

export const Partners = () => {
  return (
    <section id="partners" className="bg-secondary py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Strategic Alliances & Sustainability</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-black text-primary text-balance">
            Backed by partners who share the mission.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Corporate and institutional alliances powering our regional logistics network.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-14 grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          {partners.map((p) => (
            <div
              key={p.name}
              className="group relative rounded-3xl bg-card border border-border p-8 md:p-10 shadow-card-soft overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant hover:border-accent/40"
            >
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-accent/10 blur-2xl" aria-hidden />
              <div className="relative flex flex-col items-center text-center gap-5">
                <a
                  href={p.name === "Chick-fil-A Fair Lakes" ? "https://www.chick-fil-a.com/locations/va/fair-lakes-va?utm_source=google&utm_medium=gmb" : "https://www.educatefairfax.org/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-24 w-full flex items-center justify-center"
                >
                  <img
                    src={p.logo}
                    alt={`${p.name} logo`}
                    className="max-h-24 max-w-[220px] object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </a>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-accent font-bold">{p.tag}</div>
                  <h3 className="mt-2 font-display text-2xl font-black text-primary">{p.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Want to see your business here?{" "}
          <a href="#contact" className="text-primary font-semibold underline-offset-4 hover:underline">
            Become a partner →
          </a>
        </p>
      </div>
    </section>
  );
};
