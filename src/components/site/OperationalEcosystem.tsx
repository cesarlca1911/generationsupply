import { motion } from "framer-motion";
import { Package, ClipboardCheck, Truck, ArrowRight } from "lucide-react";

const phases = [
  {
    tag: "Phase I",
    icon: Package,
    title: "Procurement Hubs",
    subtitle: "Collection",
    body: "Simultaneous, campus-wide supply drives running across regional procurement hubs.",
    stats: [
      { label: "Greenbriar East Elementary", detail: "Launched April 15, 2026 · $966.20 raised" },
      { label: "Navy Elementary School", detail: "Launched June 1, 2026 · $610.34 raised" },
    ],
  },
  {
    tag: "Phase II",
    icon: ClipboardCheck,
    title: "Audit & Inventory Management",
    subtitle: "Validation",
    body: "100% of collected high-demand supply items — including erasers, scissors, hand sanitizers, and tissue boxes — are structurally sorted, assessed, and cataloged via weekly on-site inventory audits.",
    stats: [
      { label: "Weekly Audits", detail: "Hub coordinators verify stock levels & condition" },
      { label: "Full SKU Cataloging", detail: "Every unit logged before downstream routing" },
    ],
  },
  {
    tag: "Phase III",
    icon: Truck,
    title: "Targeted Distribution",
    subtitle: "Beneficiary Spoke",
    body: "Direct B2S (Business-to-School) routing to verified beneficiary campuses with the highest documented need.",
    stats: [
      { label: "Brookfield Elementary School", detail: "68% low-income · 713 students · 480 directly equipped" },
      { label: "Greenbriar East Elementary", detail: "33% low-income · 898 students · 300 directly supported" },
    ],
  },
];

export const OperationalEcosystem = () => {
  return (
    <section id="ecosystem" className="relative bg-transparent py-24 md:py-32 overflow-hidden">
      <div className="absolute -top-32 right-0 h-[26rem] w-[26rem] rounded-full bg-accent/5 blur-3xl" aria-hidden />
      <div className="absolute bottom-0 -left-32 h-[22rem] w-[22rem] rounded-full bg-success/10 blur-3xl" aria-hidden />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Hub-and-Spoke Model</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-black text-primary text-balance">
            Our Operational Ecosystem.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground text-balance">
            A three-phase logistics pipeline engineered to move premium academic assets from community collection points to the students who need them most.
          </p>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-3 gap-6 md:gap-8 relative">
          {phases.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.tag}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl border border-border bg-card p-8 shadow-card-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-elegant hover:border-accent/40"
              >
                {/* Connector arrow on desktop */}
                {i < phases.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-5 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-accent-glow">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">{p.tag}</span>
                </div>

                <div className="mt-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate">{p.subtitle}</p>
                  <h3 className="mt-2 font-display text-2xl font-black text-primary leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-sm text-slate leading-relaxed">{p.body}</p>
                </div>

                <ul className="mt-6 space-y-3 border-t border-border pt-5">
                  {p.stats.map((s) => (
                    <li key={s.label}>
                      <p className="text-sm font-semibold text-primary">{s.label}</p>
                      <p className="text-xs text-slate mt-0.5">{s.detail}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
