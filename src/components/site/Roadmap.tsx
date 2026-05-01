import { motion } from "framer-motion";
import { CheckCircle2, Target } from "lucide-react";

const activeSchools = [
  {
    icon: CheckCircle2,
    school: "Greenbriar East Elementary",
    detail: "Successfully piloted student-led supply distribution model. Validated logistics for securing $953.04 worth of high-quality assets for underserved students in merely 2 weeks after initial launch. Active donation drop-off box is live.",
  },
];

const pipelineSchools = [
  {
    icon: Target,
    school: "Fairfax High School",
    detail: "In active conversations with administration to establish an official Generation Supply club chapter for the 2026-2027 academic year.",
  },
  {
    icon: Target,
    school: "TJHSST",
    detail: "Engaging with student leadership and administration to adapt the GBE model for specialized high school logistics, mobilizing volunteers.",
  },
  {
    icon: Target,
    school: "Skyview High School",
    detail: "Early outreach underway to adapt the logistics framework for a unique Skyview chapter, broadening our community density.",
  },
];

export const Roadmap = () => {
  return (
    <section id="roadmap" className="relative bg-primary text-primary-foreground py-24 md:py-32 overflow-hidden grain">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-3xl" aria-hidden />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Regional Growth</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-black text-balance">
            Expansion Roadmap.
          </h2>
          <p className="mt-5 text-lg text-primary-foreground/75 text-balance">
            One school proved the model. We're scaling across Fairfax County — engaging campuses where students need it most.
          </p>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Active Schools */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <h3 className="font-display text-2xl font-bold text-accent">Active Schools</h3>
            </motion.div>
            <div className="space-y-5">
              {activeSchools.map((s, i) => (
                <motion.div
                  key={s.school}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative rounded-2xl p-6 border bg-accent-gradient border-accent text-accent-foreground shadow-accent-glow transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] font-bold text-accent-foreground">
                    <s.icon className="h-3.5 w-3.5" />
                    Active
                  </div>
                  <h4 className="mt-4 font-display text-xl font-bold text-accent-foreground">
                    {s.school}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-accent-foreground/90">
                    {s.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Club Chapter Expansion Roadmap */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-2 w-2 rounded-full bg-primary-foreground/50" />
              <h3 className="font-display text-2xl font-bold text-primary-foreground">
                Club Chapter Expansion Roadmap
              </h3>
            </motion.div>
            <div className="space-y-5">
              {pipelineSchools.map((s, i) => (
                <motion.div
                  key={s.school}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative rounded-2xl p-6 border bg-primary-foreground/5 border-primary-foreground/15 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-accent/60"
                >
                  <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] font-bold text-accent">
                    <s.icon className="h-3.5 w-3.5" />
                    Pitching
                  </div>
                  <h4 className="mt-4 font-display text-xl font-bold text-primary-foreground">
                    {s.school}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                    {s.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
