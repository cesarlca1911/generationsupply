import { motion } from "framer-motion";
import { Users, GraduationCap, Home } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Users,
    title: "Club Chapters",
    body: "We're launching our flagship club chapter at Fairfax High School and building a blueprint to expand into high schools across the region — empowering students to lead supply drives in their own communities.",
  },
  {
    number: "02",
    icon: GraduationCap,
    title: "Holistic Tutoring",
    body: "Supplies are only the first step. Our next phase brings free, peer-led tutoring directly to underserved students — closing academic gaps and unlocking long-term growth beyond the classroom.",
  },
  {
    number: "03",
    icon: Home,
    title: "Direct Family Support",
    body: "We believe that academic success starts at home. We are planning to equip families with personalized advice and navigation strategies for the school system: from course selection to general advocacy, so every student has a champion in their corner.",
  },
];

export const Vision = () => {
  return (
    <section id="vision" className="bg-paper py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Our Vision</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-black text-primary text-balance">
            The Three-Step Success Model.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground text-balance">
            A strategic roadmap to transform student support — from foundational supplies to academic mentorship to family empowerment.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl bg-card border border-border p-8 shadow-card-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              <span
                aria-hidden
                className="absolute -top-4 -right-2 font-display text-[7rem] leading-none font-black select-none text-primary"
              >
                {s.number}
              </span>

              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gradient text-accent-foreground shadow-accent-glow">
                  <s.icon className="h-6 w-6" />
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  Step {s.number}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold text-primary">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
