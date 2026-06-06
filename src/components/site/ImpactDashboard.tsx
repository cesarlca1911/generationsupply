import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import {
  Users,
  DollarSign,
  Network,
  Building2,
  FolderClosed,
  Palette,
  Pencil,
  Highlighter,
  Eraser,
  Paperclip,
  Download,
  MapPin,
  ArrowLeftRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
    icon: DollarSign,
    prefix: "$",
    value: 1388.73,
    label: "Total Monetary Value Raised",
    sub: "Aggregate value of premium supply assets across donation hubs",
  },
  {
    icon: Users,
    value: 780,
    label: "Underserved Students Supported",
    sub: "Target demographic receiving optimized material distribution",
  },
  {
    icon: Network,
    value: 2,
    label: "Active Supply Donation Hubs",
    sub: "Operational collection networks at regional campuses",
  },
  {
    icon: Building2,
    value: 1,
    label: "Verified Distribution Hub",
    sub: "Institutional beneficiary campus onboarded to the network",
  },
];

type InventoryItem = {
  name: string;
  units: number;
  icon: typeof Users;
  status: "stocked" | "low";
};

const inventoryByHub: Record<string, { hubName: string; hubLabel: string; items: InventoryItem[] }> = {
  greenbriar: {
    hubName: "Greenbriar East Elementary",
    hubLabel: "Donation Hub",
    items: [
      { name: "Folders", units: 112, icon: FolderClosed, status: "stocked" },
      { name: "Colored Pencils", units: 144, icon: Palette, status: "stocked" },
      { name: "Pencils", units: 1568, icon: Pencil, status: "stocked" },
      { name: "Expo Markers", units: 100, icon: Highlighter, status: "stocked" },
      { name: "Glue Sticks", units: 214, icon: Paperclip, status: "stocked" },
      { name: "Crayons", units: 312, icon: Palette, status: "stocked" },
      { name: "Highlighters", units: 16, icon: Eraser, status: "low" },
    ],
  },
  navy: {
    hubName: "Navy Elementary",
    hubLabel: "Donation Hub",
    items: [
      { name: "Folders", units: 0, icon: FolderClosed, status: "stocked" },
      { name: "Colored Pencils", units: 0, icon: Palette, status: "stocked" },
      { name: "Pencils", units: 0, icon: Pencil, status: "stocked" },
      { name: "Expo Markers", units: 0, icon: Highlighter, status: "stocked" },
      { name: "Glue Sticks", units: 0, icon: Paperclip, status: "stocked" },
      { name: "Crayons", units: 0, icon: Palette, status: "stocked" },
      { name: "Highlighters", units: 0, icon: Eraser, status: "stocked" },
    ],
  },
};

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
  const rounded = useTransform(count, (v) => `${prefix}${v.toLocaleString(undefined, { minimumFractionDigits: to % 1 !== 0 ? 2 : 0, maximumFractionDigits: to % 1 !== 0 ? 2 : 0 })}${suffix}`);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        if (ref.current) {
          ref.current.textContent = `${prefix}${latest.toLocaleString(undefined, { minimumFractionDigits: to % 1 !== 0 ? 2 : 0, maximumFractionDigits: to % 1 !== 0 ? 2 : 0 })}${suffix}`;
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
  const [activeHub, setActiveHub] = useState<"greenbriar" | "navy">("greenbriar");
  const currentHub = inventoryByHub[activeHub];
  const otherHubKey = activeHub === "greenbriar" ? "navy" : "greenbriar";
  const otherHubName = inventoryByHub[otherHubKey].hubName;

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

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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

        {/* Core Essentials Inventory Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 relative rounded-3xl border border-primary/15 bg-card/40 backdrop-blur-xl p-8 md:p-10 shadow-card-soft overflow-hidden"
        >
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-success/10 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" aria-hidden />

          <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-success">Core Essentials Inventory</p>
              <h3 className="mt-3 font-display text-2xl md:text-3xl font-black text-primary tracking-tight">
                Primary Hub Stock Levels
              </h3>
              <div className="mt-2 flex items-center gap-2 text-sm text-slate">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="font-semibold text-primary">{currentHub.hubName}</span>
                <span className="opacity-60">· {currentHub.hubLabel}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setActiveHub(otherHubKey)}
                className="group/swap inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent transition-all hover:bg-accent hover:text-accent-foreground hover:border-accent"
                aria-label={`See inventory from ${otherHubName}`}
              >
                <ArrowLeftRight className="h-4 w-4 transition-transform group-hover/swap:rotate-180" />
                See Inventory from Other Hubs
              </button>
              <button
                type="button"
                className="group/exp inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/60 backdrop-blur px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary"
                aria-label="Export inventory data"
                title="Synced with internal logistics spreadsheet"
              >
                <Download className="h-4 w-4 transition-transform group-hover/exp:-translate-y-0.5" />
                Export Data
              </button>
            </div>
          </div>

          <motion.div
            key={activeHub}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5"
          >
            {currentHub.items.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group/card relative rounded-2xl border border-primary/10 bg-background/50 backdrop-blur-md p-5 transition-all duration-500 hover:-translate-y-1 hover:border-success/40 hover:bg-background/70 hover:shadow-card-soft"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary transition-colors group-hover/card:bg-success/10 group-hover/card:text-success">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="font-display text-3xl font-black text-primary leading-none tracking-tight">
                      {item.units.toLocaleString()}
                    </div>
                    <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate">Units</p>
                    <p className="mt-3 text-sm font-semibold text-primary">{item.name}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="relative mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-primary/10 pt-5">
            <p className="text-xs text-slate">
              <span className="font-semibold uppercase tracking-[0.14em] text-primary">Last Audit:</span>{" "}
              May 21, 2026
            </p>
            <p className="text-[11px] text-slate/70 italic">
              Synced with internal logistics spreadsheet · Updated by hub coordinators
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
