import { motion } from "framer-motion";
import { CheckCircle2, Target, Rocket } from "lucide-react";

const stops = [
  {
    status: "Active",
    icon: CheckCircle2,
    school: "Greenbriar East Elementary",
    detail: "Donation box live in school lobby. Teacher mailers distributed. Featured in community newsletter.",
    accent: "live",
  },
  {
    status: "Pitching",
    icon: Target,
    school: "Fairfax High School",
    detail: "Engaging school administration to launch a peer-led collection drive on campus.",
    accent: "pitch",
  },
  {
    status: "Pitching",
    icon: Target,
    school: "TJHSST",
    detail: "Building a partnership with student leadership to mobilize Thomas Jefferson volunteers.",
    accent: "pitch",
  },
  {
    status: "Pitching",
    icon: Rocket,
    school: "Skyview Elementary",
    detail: "Early conversations underway to bring a Generation Supply chapter to Skyview.",
    accent: "pitch",
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

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stops.map((s, i) => {
            const isLive = s.accent === "live";
            return (
              <motion.div
                key={s.school}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative rounded-2xl p-6 border backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 ${
                  isLive
                    ? "bg-accent-gradient border-accent text-accent-foreground shadow-accent-glow"
                    : "bg-primary-foreground/5 border-primary-foreground/15 hover:border-accent/60"
                }`}
              >
                <div className={`inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] font-bold ${isLive ? "text-accent-foreground" : "text-accent"}`}>
                  <s.icon className="h-3.5 w-3.5" />
                  {s.status}
                </div>
                <h3 className={`mt-4 font-display text-xl font-bold ${isLive ? "text-accent-foreground" : "text-primary-foreground"}`}>
                  {s.school}
                </h3>
                <p className={`mt-3 text-sm leading-relaxed ${isLive ? "text-accent-foreground/90" : "text-primary-foreground/70"}`}>
                  {s.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
