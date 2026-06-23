import { motion } from "framer-motion";
import { Instagram as InstagramIcon, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiles = [
  { label: "Behind the scenes", hint: "Drop days at Greenbriar East" },
  { label: "Student stories", hint: "Why this matters" },
  { label: "Partner spotlights", hint: "Local businesses showing up" },
  { label: "Roadmap updates", hint: "What's next for Fairfax" },
];

export const Instagram = () => {
  return (
    <section id="instagram" className="bg-transparent py-24 md:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Follow Our Story</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-black text-primary text-balance">
              Live from the field, on Instagram.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              Drop days, partner shout-outs, and student moments — see the mission in motion every week. Follow{" "}
              <span className="font-semibold text-primary">@generationsupply</span> to stay close to the work.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild variant="hero" size="lg">
                <a
                  href="https://instagram.com/generationsupply"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Generation Supply on Instagram"
                >
                  <InstagramIcon className="h-5 w-5" />
                  Follow @generationsupply
                </a>
              </Button>
              <a
                href="https://instagram.com/generationsupply"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors"
              >
                Open profile
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div>
                <div className="font-display text-3xl font-black text-primary">70+</div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">Followers</div>
              </div>
              <div className="h-10 w-px bg-border" aria-hidden />
              <div>
                <div className="font-display text-3xl font-black text-primary">Weekly</div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">Updates</div>
              </div>
              <div className="h-10 w-px bg-border" aria-hidden />
              <div>
                <div className="font-display text-3xl font-black text-primary">Fairfax</div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">Based</div>
              </div>
            </div>
          </motion.div>

          {/* Right: feed placeholder grid */}
          <motion.a
            href="https://instagram.com/generationsupply"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group relative block"
            aria-label="Open Generation Supply Instagram profile"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-500/20 to-violet-400/20 blur-2xl group-hover:opacity-60 transition-opacity" aria-hidden />

            <div className="relative rounded-3xl bg-black/40 backdrop-blur-sm border border-white/10 shadow-elegant overflow-hidden">
              {/* Header bar mimicking IG */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent-gradient inline-flex items-center justify-center shadow-accent-glow">
                    <InstagramIcon className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div className="leading-tight">
                    <div className="font-semibold text-sm text-primary">@generationsupply</div>
                    <div className="text-[11px] text-muted-foreground">Fairfax, VA · Student-led</div>
                  </div>
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  Live Feed
                </span>
              </div>

              {/* Tiles */}
              <div className="grid grid-cols-2 gap-px bg-border">
                {tiles.map((t, i) => (
                  <div
                    key={t.label}
                    className="relative aspect-square bg-white/5 p-5 flex flex-col justify-between overflow-hidden"
                  >
                    <div
                      className="absolute inset-0 opacity-60"
                      style={{
                        background:
                          i % 2 === 0
                            ? "radial-gradient(circle at 30% 20%, rgb(99 102 241 / 0.18), transparent 60%)"
                            : "radial-gradient(circle at 70% 80%, rgb(139 92 246 / 0.15), transparent 60%)",
                      }}
                      aria-hidden
                    />
                    <div className="relative font-display text-5xl font-black text-primary/15 leading-none">
                      0{i + 1}
                    </div>
                    <div className="relative">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">
                        {t.label}
                      </div>
                      <div className="mt-1 text-sm font-semibold text-primary leading-snug">
                        {t.hint}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="px-5 py-4 border-t border-white/10 flex items-center justify-between bg-black/20">
                <span className="text-sm text-muted-foreground">Tap to view the full feed</span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                  Open Instagram
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};
