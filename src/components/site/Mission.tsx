import { motion } from "framer-motion";
import { BookOpen, HandHeart, Sprout } from "lucide-react";

const pillars = [
  {
    icon: BookOpen,
    title: "Academic Foundations",
    body: "From pencils to folders and colored pencils to glue sticks, we're supplying every student with the basics they need to focus, learn, and grow.",
  },
  {
    icon: HandHeart,
    title: "Community Driven",
    body: "Donations come from school teachers, local businesses, and families who believe in our students.",
  },
  {
    icon: Sprout,
    title: "Built to Last",
    body: "Sustainable supply pipelines so classrooms stay equipped — not just at back-to-school.",
  },
];

export const Mission = () => {
  return (
    <section id="mission" className="bg-paper py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Our Mission</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-black text-primary text-balance">
            Every student deserves the right foundation.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground text-balance">
            Founded by a Fairfax County student, Generation Supply mobilizes communities to deliver essential academic supplies directly into classrooms across the region.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl bg-card border border-border p-8 shadow-card-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gradient text-accent-foreground shadow-accent-glow">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-primary">{p.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
