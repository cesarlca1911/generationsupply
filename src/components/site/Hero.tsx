import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden bg-hero text-primary-foreground pt-32 pb-24 md:pt-44 md:pb-36 grain">
      {/* Decorative accents */}
      <div className="absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-primary-foreground/5 blur-3xl" aria-hidden />

      <div className="container relative grid md:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span>Student-led · Fairfax County, VA</span>
          </div>

          <h1 className="mt-6 font-display font-black text-4xl sm:text-5xl md:text-7xl leading-[0.95] text-balance">
            Equipping the{" "}
            <span className="bg-accent-gradient bg-clip-text text-transparent">Next Generation</span>{" "}
            and Beyond.
          </h1>

          <p className="mt-6 max-w-xl text-lg md:text-xl text-primary-foreground/80 text-balance">
            Providing sustainable academic foundations for Fairfax County students — one classroom, one community, one supply drive at a time.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild variant="hero" size="lg">
              <a href="#contact">
                Partner With Us <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outlineLight" size="lg">
              <a href="#impact">See Our Impact</a>
            </Button>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { k: "1", v: "Active school" },
              { k: "3+", v: "Schools in pipeline" },
              { k: "100%", v: "Student-run" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl md:text-4xl font-black text-accent">{s.k}</dt>
                <dd className="text-xs md:text-sm uppercase tracking-wider text-primary-foreground/70 mt-1">{s.v}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5 flex justify-center"
        >
          <div className="relative animate-float">
            <div className="relative h-72 w-72 md:h-96 md:w-96 rounded-full bg-primary-foreground/10 backdrop-blur-xl border border-primary-foreground/20 flex items-center justify-center overflow-hidden">
              <img
                src={logo}
                alt="Generation Supply circular emblem"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
