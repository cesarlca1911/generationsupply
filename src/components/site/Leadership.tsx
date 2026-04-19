import { motion } from "framer-motion";
import { User } from "lucide-react";
import cesarHeadshot from "@/assets/cesar-carlos.png";

const team = [
  {
    name: "Cesar Carlos",
    title: "Founder & Executive Director",
    bio: "Architect of the successful $518 pilot campaign at Greenbriar East ES within 2 days of initial launch through a prosperous community outreach movement reaching nearly 900 students and over 600 families. Specializes in scalable supply chains, digital infrastructure, and community outreach partnerships.",
    primary: true,
    image: cesarHeadshot,
  },
  {
    name: "Isaac Roberts",
    title: "Head of Operations",
    bio: "3rd Place at Fairfax HS Science Fair in the Environmental Engineering category and DECA States 2026 competitor. Manages data precision and distribution efficiency.",
    primary: false,
  },
  {
    name: "Benji Cho",
    title: "Head of Logistics",
    bio: "Drives on-the-ground operational execution and community engagement at our active drop-off hubs.",
    primary: false,
  },
  {
    name: "Charlie Canuel",
    title: "Head of Communications & Research",
    bio: "Spearheads institutional outreach and strategic research. Led the initial communication pipelines to Daniels Run and Eagle View Elementary, and co-developed the Educate Fairfax partnership strategy.",
    primary: false,
  },
];

export const Leadership = () => {
  return (
    <section id="leadership" className="relative bg-primary text-primary-foreground py-24 md:py-32 overflow-hidden grain border-t border-primary-foreground/10">
      <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl" aria-hidden />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Executive Leadership</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-black text-balance">
            Student-Led. Community-Driven.
          </h2>
          <p className="mt-5 text-lg text-primary-foreground/75 text-balance">
            Meet the executive team engineering the future of educational logistics.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch">
          {team.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative rounded-2xl p-8 border backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 ${
                m.primary
                  ? "bg-accent-gradient border-accent text-accent-foreground shadow-accent-glow lg:-mt-4"
                  : "bg-primary-foreground/5 hover:shadow-accent-glow border-accent"
              }`}
            >
              <div
                className={`mx-auto h-28 w-28 rounded-full flex items-center justify-center overflow-hidden ring-4 ${
                  m.primary
                    ? "ring-accent-foreground/30 bg-primary-foreground"
                    : "bg-primary-foreground/10 ring-accent/40 group-hover:ring-accent"
                } transition-all duration-500`}
                aria-label={`${m.name} headshot`}
              >
                {m.image ? (
                  <img
                    src={m.image}
                    alt={`${m.name} headshot`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <User
                    className={`h-14 w-14 ${
                      m.primary ? "text-accent-foreground/80" : "text-primary-foreground/60"
                    }`}
                  />
                )}
              </div>

              <div className="mt-6 text-center">
                <h3
                  className={`font-display text-2xl font-bold ${
                    m.primary ? "text-accent-foreground" : "text-primary-foreground"
                  }`}
                >
                  {m.name}
                </h3>
                <p
                  className={`mt-1 text-xs uppercase tracking-[0.18em] font-semibold ${
                    m.primary ? "text-accent-foreground/85" : "text-primary-foreground"
                  }`}
                >
                  {m.title}
                </p>
              </div>

              <p
                className={`mt-5 text-sm leading-relaxed text-center ${
                  m.primary ? "text-accent-foreground/90" : "text-primary-foreground/70"
                }`}
              >
                {m.bio}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
