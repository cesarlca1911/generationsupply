import { motion } from "framer-motion";
import { Award } from "lucide-react";

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
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Partner Spotlight</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-black text-primary text-balance">
            Powered by community partners.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Local businesses standing behind our students.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-14 max-w-2xl mx-auto"
        >
          <div className="relative rounded-3xl bg-card border border-border p-8 md:p-10 shadow-elegant overflow-hidden">
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-accent/10 blur-2xl" aria-hidden />
            <div className="relative flex flex-col sm:flex-row items-center gap-6">
              <div className="h-20 w-20 flex-shrink-0 rounded-2xl bg-accent-gradient text-accent-foreground inline-flex items-center justify-center shadow-accent-glow">
                <Award className="h-10 w-10" />
              </div>
              <div className="text-center sm:text-left">
                <div className="text-[10px] uppercase tracking-[0.22em] text-accent font-bold">Featured Partner</div>
                <h3 className="mt-2 font-display text-3xl font-black text-primary">Chick-fil-A Fair Lakes</h3>
                <p className="mt-2 text-muted-foreground">
                  Proud community sponsor of Generation Supply — fueling our team and our mission.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Want to see your business here?{" "}
            <a href="#contact" className="text-primary font-semibold underline-offset-4 hover:underline">
              Become a partner →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
