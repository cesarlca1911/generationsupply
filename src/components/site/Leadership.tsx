import { motion } from "framer-motion";
import { User } from "lucide-react";
import cesarHeadshot from "@/assets/cesar-carlos.png";
import isaacHeadshot from "@/assets/isaac-roberts.png";
import benjiHeadshot from "@/assets/benji-cho.png";
import charlieHeadshot from "@/assets/charlie-canuel.png";

const team = [
  {
    name: "Cesar Carlos",
    title: "Founder & Executive Director",
    bio: "",
    primary: true,
    image: cesarHeadshot,
  },
  {
    name: "Isaac Roberts",
    title: "Head of Operations",
    bio: "",
    primary: false,
    image: isaacHeadshot,
  },
  {
    name: "Charlie Canuel",
    title: "Head of Communications & Research",
    bio: "",
    primary: false,
    image: charlieHeadshot,
  },
  {
    name: "Benji Cho",
    title: "Head of Logistics",
    bio: "",
    primary: false,
    image: benjiHeadshot,
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
              className={`group relative rounded-2xl p-8 border backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-accent-glow bg-accent-gradient border-accent text-accent-foreground shadow-accent-glow ${
                m.primary ? "lg:-mt-4" : ""
              }`}
            >
              <div
                className="mx-auto h-28 w-28 rounded-full flex items-center justify-center overflow-hidden ring-4 ring-accent-foreground/30 bg-primary-foreground transition-all duration-500"
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
                  <User className="h-14 w-14 text-accent-foreground/80" />
                )}
              </div>

              <div className="mt-6 text-center">
                <h3 className="font-display text-2xl font-bold text-accent-foreground">
                  {m.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] font-semibold text-accent-foreground/85">
                  {m.title}
                </p>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-center text-accent-foreground/90">
                {m.bio}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
