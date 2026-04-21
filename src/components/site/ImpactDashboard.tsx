import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import {
  Users,
  DollarSign,
  Network,
  FolderClosed,
  Palette,
  Pencil,
  Highlighter,
  Eraser,
  Paperclip,
  Download,
  MapPin,
} from "lucide-react";
import { useEffect, useRef } from "react";

type Metric = {
  icon: typeof Users;
  prefix?: string;
  value: number;
  suffix?: string;
  display?: (n: number) => string;
  label: string;
  sub: string;
};

const metrics: Metric[] = [
  {
    icon: Users,
    value: 290,
    suffix: "+",
    label: "Underserved Students",
    sub: "Directly supported across active hubs",
  },
  {
    icon: DollarSign,
    prefix: "$",
    value: 518,
    label: "In Premium Academic Assets",
    sub: "Sourced & distributed in the Greenbriar East initiative",
  },
  {
    icon: Network,
    value: 1,
    label: "Active Hub · 3 Pitched Sites",
    sub: "Scaling across Fairfax County",
  },
];

const Counter = ({
  to,
  prefix = "",
  suffix = "",
  inView,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  inView: boolean;
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${prefix}${Math.round(v).toLocaleString()}${suffix}`);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        if (ref.current) {
          ref.current.textContent = `${prefix}${Math.round(latest).toLocaleString()}${suffix}`;
        }
      },
    });
    return controls.stop;
  }, [inView, to, prefix, suffix, count]);

  return <span ref={ref}>{`${prefix}0${suffix}`}</span>;
};

export const ImpactDashboard = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="relative bg-secondary py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute top-0 right-0 h-[24rem] w-[24rem] rounded-full bg-primary/5 blur-3xl" aria-hidden />
      <div className="absolute bottom-0 left-0 h-[20rem] w-[20rem] rounded-full bg-success/10 blur-3xl" aria-hidden />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-success">Live Impact Dashboard</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-black text-primary text-balance">
            The Numbers Behind the Mission.
          </h2>
          <p className="mt-5 text-lg text-slate text-balance">
            Real-time metrics from our active operations — every dollar, every student, every site, accounted for.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative rounded-2xl bg-card border border-border p-8 shadow-card-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-elegant hover:border-success/40"
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-success/10 text-success transition-all duration-500 group-hover:bg-success group-hover:text-success-foreground group-hover:scale-110">
                  <m.icon className="h-6 w-6" />
                </div>
                <div className="h-2 w-2 rounded-full bg-success animate-pulse" aria-label="Live" />
              </div>

              <div className="mt-8">
                <div className="font-display text-5xl md:text-6xl font-black text-primary leading-none tracking-tight">
                  <Counter to={m.value} prefix={m.prefix} suffix={m.suffix} inView={inView} />
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                  {m.label}
                </p>
                <p className="mt-2 text-sm text-slate leading-relaxed">{m.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
