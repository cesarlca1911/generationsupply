import React, { useEffect, useState } from "react";
import { Menu, X, Home, Zap, Database, Lightbulb, Calendar } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { TubelightNavbar } from "@/components/ui/tubelight-navbar";
import type { NavItem } from "@/components/ui/tubelight-navbar";

const links = [
  { to: "/", label: "Home" },
  { to: "/results-in-action", label: "Results in Action" },
  { to: "/inventory", label: "Data & Inventory" },
  { to: "/vision", label: "Our Vision" },
  { to: "/events", label: "Events" },
];

const navItems: NavItem[] = [
  { name: "Home", url: "/", icon: Home },
  { name: "Results in Action", url: "/results-in-action", icon: Zap },
  { name: "Data & Inventory", url: "/inventory", icon: Database },
  { name: "Our Vision", url: "/vision", icon: Lightbulb },
  { name: "Events", url: "/events", icon: Calendar },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrolled(latest > 0.02);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header>
      <nav
        data-state={menuOpen ? "active" : undefined}
        className={cn(
          "group fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300 overflow-visible pt-6",
          scrolled || pathname !== "/"
            ? "bg-background/80 backdrop-blur-3xl border-border shadow-card-soft"
            : "bg-transparent border-transparent"
        )}
      >
        <div className="container transition-all duration-300 overflow-visible">
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-between gap-8 h-20 overflow-visible">
            {/* Brand */}
            <Link to="/" aria-label="home" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Generation Supply logo"
                className="h-12 w-12 object-contain"
              />
              <div className="leading-tight">
                <div className="font-display font-black text-lg text-primary">
                  Generation Supply
                </div>
                <div className="text-xs uppercase tracking-[0.18em] text-accent font-semibold">
                  Empowering Young Minds
                </div>
              </div>
            </Link>

            {/* Desktop nav with tubelight effect */}
            <div className="flex-1 flex justify-center overflow-visible">
              <TubelightNavbar
                items={navItems}
                activeTab={navItems.find(item => item.url === pathname)?.name || "Home"}
              />
            </div>

            {/* Desktop CTA */}
            <div className="flex items-center gap-3">
              <Button asChild variant="hero" size="sm">
                <a href="/#contact">Get Involved</a>
              </Button>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col gap-2 py-3 overflow-visible">
            {/* Brand */}
            <Link to="/" aria-label="home" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Generation Supply logo"
                className="h-10 w-10 object-contain"
              />
              <div className="leading-tight">
                <div className="font-display font-black text-base text-primary">
                  Generation Supply
                </div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-accent font-semibold">
                  Empowering Young Minds
                </div>
              </div>
            </Link>

            {/* Mobile nav with tubelight effect */}
            <div className="w-full flex justify-center py-1 overflow-visible">
              <TubelightNavbar
                items={navItems}
                activeTab={navItems.find(item => item.url === pathname)?.name || "Home"}
                className="bg-background/10 py-0.5 px-0.5"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
