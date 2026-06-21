import { motion } from "framer-motion";
import { CheckCircle2, Target, Heart } from "lucide-react";

const donorSchools = [
  {
    icon: CheckCircle2,
    school: "Greenbriar East Elementary",
    detail: "Successfully piloted student-led supply distribution model. Validated logistics for securing $953.04 worth of high-quality assets for underserved students in merely 2 weeks after initial launch. Active donation drop-off box is live.",
  },
  {
    icon: CheckCircle2,
    school: "Navy Elementary",
    detail: "Active donation hub onboarded to the network, expanding our regional procurement footprint and supporting consistent supply intake.",
  },
];

const recipientSchools = [
  {
    icon: Heart,
    school: "Greenbriar East Elementary",
    detail: "33% low-income student body receiving direct material support and optimized supply distribution from the network.",
  },
  {
    icon: Heart,
    school: "Brookfield Elementary",
    detail: "68% low-income Title I campus · 713 students · receiving targeted supply distribution as a high-need beneficiary school.",
  },
];

const pipelineSchools = [
  {
    icon: CheckCircle2,
    school: "Fairfax High School",
    status: "Confirmed",
    detail: "Official Generation Supply club chapter launching August 2026 for the 2026-2027 academic year and beyond.",
  },
];

const donationHubSchools: { icon: typeof Target; school: string; detail: string }[] = [];

export const Roadmap = () => {
  return (
    <section id="roadmap" className="relative bg-transparent text-foreground py-24 md:py-32 overflow-hidden grain">
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
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-black text-balance text-primary">
            Expansion Roadmap.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground text-balance">
            One school proved the model. We're scaling across Fairfax County — engaging campuses where students need it most.
          </p>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Donor Schools */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <h3 className="font-display text-2xl font-bold text-accent">Donor Schools</h3>
            </motion.div>
            <div className="space-y-5">
              {donorSchools.map((s, i) => (
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

          {/* Recipient Schools */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <h3 className="font-display text-2xl font-bold text-accent">Recipient Schools</h3>
            </motion.div>
            <div className="space-y-5">
              {recipientSchools.map((s, i) => (
                <motion.div
                  key={s.school}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative rounded-2xl p-6 border bg-accent-gradient border-accent transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] font-bold text-accent-foreground">
                    <s.icon className="h-3.5 w-3.5" />
                    Receiving
                  </div>
                  <h4 className="mt-4 font-display text-xl font-bold text-white">
                    {s.school}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
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
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <h3 className="font-display text-2xl font-bold text-accent">
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
                  className="relative rounded-2xl p-6 border bg-accent-gradient border-accent transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] font-bold text-accent-foreground">
                    <s.icon className="h-3.5 w-3.5" />
                    {s.status || "Pitching"}
                  </div>
                  <h4 className="mt-4 font-display text-xl font-bold text-white">
                    {s.school}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    {s.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {donationHubSchools.length > 0 && (
          <div className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-2 w-2 rounded-full bg-white/40" />
              <h3 className="font-display text-2xl font-bold text-white">
                Donation Hub Expansion Roadmap
              </h3>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {donationHubSchools.map((s, i) => (
                <motion.div
                  key={s.school}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative rounded-2xl p-6 border bg-white/5 border-white/15 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-accent/60"
                >
                  <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] font-bold text-accent">
                    <s.icon className="h-3.5 w-3.5" />
                    Pitching
                  </div>
                  <h4 className="mt-4 font-display text-xl font-bold text-white">
                    {s.school}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                    {s.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
