import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Heart, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShaderBackground } from "@/components/ui/shader-background";
import logo from "@/assets/generation-supply-logo.png";

function AnimatedHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["equitable", "sustainable", "student-led", "community-powered", "scalable"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full pt-20 relative overflow-hidden min-h-screen">
      {/* Shader Background */}
      <div className="absolute inset-0 h-full">
        <ShaderBackground color1="#f5f5f5" color2="#e8e8e8" />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="flex gap-2 py-2 lg:py-4 items-center justify-center flex-col">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden shadow-2xl brightness-125">
              <img
                src={logo}
                alt="Generation Supply logo"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
          <div>
            <Button variant="secondary" size="sm" className="gap-4">
              Student-led community initiative <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-4xl md:text-6xl max-w-4xl tracking-tighter text-center font-regular">
              <span className="text-black">Supply drives that are</span>
              <span className="relative flex w-full justify-center text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-accent whitespace-nowrap"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Fairfax County students leading campus-wide supply drives to empower underserved schools. We collect, audit, and distribute high-quality academic resources to students who need them most.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Link to="/results-in-action" className="inline-flex items-center justify-center h-11 rounded-md px-8 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors gap-4 font-medium text-sm">
              See our impact <Heart className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AnimatedHero };
