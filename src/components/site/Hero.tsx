import { useRef, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import logo from "@/assets/logo.png";

// ── Animation preset shared with AnimatedGroup ─────────────────────────────
const transitionVariants = {
  item: {
    hidden: { opacity: 0, filter: "blur(12px)", y: 12 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { type: "spring", bounce: 0.3, duration: 1.5 },
    },
  },
};

// ── Metric data ─────────────────────────────────────────────────────────────
const METRICS = [
  { value: 2,   label: "Procurement Hubs"   },
  { value: 1,   label: "Distribution Hub"   },
  { value: 800, label: "Students Supported" },
];

// ── Animated counter (module-level to avoid remount on Hero re-renders) ─────
function MetricCounter({ to, inView }: { to: number; inView: boolean }) {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!inView) return;

    // Delay start until the AnimatedGroup copy has settled (~1 s)
    let controls: { stop: () => void } | undefined;
    const timer = setTimeout(() => {
      controls = animate(0, to, {
        duration: to >= 100 ? 2.0 : 1.2,
        ease: [0.22, 1, 0.36, 1],
        onUpdate(v) {
          if (spanRef.current) spanRef.current.textContent = String(Math.round(v));
        },
      });
    }, 1000);

    return () => {
      clearTimeout(timer);
      controls?.stop();
    };
  }, [inView, to]);

  return <span ref={spanRef}>0</span>;
}

// ── Hero ────────────────────────────────────────────────────────────────────
export const Hero = () => {
  const metricsRef  = useRef<HTMLDivElement>(null);
  const metricsInView = useInView(metricsRef, { once: true, amount: 0.3 });

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-black text-white pt-32 pb-24 md:pt-44 md:pb-36"
    >
      {/* Animated beam background — sits at z-0, behind all content */}
      <BackgroundBeams className="z-0" />

      {/* Decorative ambient blob */}
      <div
        className="absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-white/5 blur-3xl pointer-events-none z-[1]"
        aria-hidden
      />

      <div className="container relative z-10 grid md:grid-cols-12 gap-12 items-center">

        {/* ────────────── Left column ────────────── */}
        <div className="md:col-span-7">

          {/* Stagger-animated copy block */}
          <AnimatedGroup
            variants={{
              container: {
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.12, delayChildren: 0.1 },
                },
              },
              ...transitionVariants,
            }}
            className="flex flex-col"
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm w-fit text-white">
              <Sparkles className="h-3.5 w-3.5 text-white" />
              <span>Student-led · Fairfax County, VA</span>
            </div>

            {/* Headline */}
            <h1 className="mt-6 font-display font-black text-4xl sm:text-5xl md:text-7xl leading-[0.95] text-balance text-white">
              Optimizing Resource Procurement for{" "}
              <span className="text-white">Academic Equality</span>{" "}
              Across Fairfax County.
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg md:text-xl text-neutral-400 text-balance">
              A student-led, hub-and-spoke community initiative engineering
              end-to-end supply chains to route high-demand academic assets from
              collection hubs directly to underserved regional campuses.
            </p>

            {/* ── Magnetic CTA buttons ── */}
            <div className="mt-10 flex flex-wrap gap-4">
              <MagneticButton>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-black hover:bg-neutral-200 rounded-xl px-6 font-semibold"
                >
                  <a href="#contact">
                    Partner With Us <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </MagneticButton>

              <MagneticButton>
                <Button
                  asChild
                  size="lg"
                  className="bg-transparent border border-white text-white hover:bg-white/10 rounded-xl px-6 font-semibold"
                >
                  <a href="#impact">See Our Impact</a>
                </Button>
              </MagneticButton>
            </div>
          </AnimatedGroup>

          {/* ── Glassmorphic animated metric cards ──
              Kept outside AnimatedGroup so useInView drives them
              independently without opacity conflicts.             */}
          <div
            ref={metricsRef}
            className="mt-14 grid grid-cols-3 gap-3 max-w-lg"
          >
            {METRICS.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                animate={
                  metricsInView
                    ? { opacity: 1, y: 0, filter: "blur(0px)" }
                    : {}
                }
                transition={{
                  duration: 0.8,
                  delay: 0.85 + i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  borderColor: "rgba(255,255,255,0.28)",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  boxShadow: "0 0 28px rgba(255,255,255,0.07)",
                  y: -3,
                }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 cursor-default transition-colors duration-200"
              >
                {/* Animated number */}
                <div className="font-display text-3xl md:text-4xl font-black text-white leading-none">
                  <MetricCounter to={m.value} inView={metricsInView} />
                </div>

                {/* Label */}
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-neutral-400 leading-snug">
                  {m.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ────────────── Right column: logo ────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5 flex justify-center"
        >
          <div className="relative animate-float">
            <div className="relative h-72 w-72 md:h-96 md:w-96 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center overflow-hidden">
              <img
                src={logo}
                alt="Generation Supply circular emblem"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
