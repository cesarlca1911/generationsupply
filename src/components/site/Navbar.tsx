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
          "group fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300 overflow-visible",
          scrolled || pathname !== "/"
            ? "bg-background/80 backdrop-blur-3xl border-border shadow-card-soft"
            : "bg-transparent border-transparent"
        )}
      >
        <div className="container transition-all duration-300">
          <div className="relative flex flex-wrap items-center justify-between gap-6 h-16 md:h-20 lg:gap-0">
            {/* Brand */}
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link to="/" aria-label="home" className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Generation Supply logo"
                  className="h-10 w-10 md:h-12 md:w-12 object-contain"
                />
                <div className="leading-tight">
                  <div className="font-display font-black text-base md:text-lg text-primary">
                    Generation Supply
                  </div>
                  <div className="text-[10px] md:text-xs uppercase tracking-[0.18em] text-accent font-semibold">
                    Empowering Young Minds
                  </div>
                </div>
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden text-primary"
              >
                <Menu
                  className={cn(
                    "m-auto size-6 duration-200",
                    menuOpen
                      ? "rotate-180 scale-0 opacity-0"
                      : "rotate-0 scale-100 opacity-100"
                  )}
                />
                <X
                  className={cn(
                    "absolute inset-0 m-auto size-6 duration-200",
                    menuOpen
                      ? "rotate-0 scale-100 opacity-100"
                      : "-rotate-180 scale-0 opacity-0"
                  )}
                />
              </button>

              {/* Desktop nav with tubelight effect */}
              <div className="hidden lg:block">
                <TubelightNavbar
                  items={navItems}
                  activeTab={navItems.find(item => item.url === pathname)?.name || "Home"}
                />
              </div>

              {/* Mobile nav with tubelight effect - compact version */}
              <div className="lg:hidden">
                <TubelightNavbar
                  items={navItems}
                  activeTab={navItems.find(item => item.url === pathname)?.name || "Home"}
                  className="bg-background/10 py-0.5 px-0.5"
                />
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button asChild variant="hero" size="sm">
                <a href="/#contact">Get Involved</a>
              </Button>
            </div>

            {/* Mobile dropdown */}
            {menuOpen && (
              <div className="w-full lg:hidden bg-background border-t border-border rounded-b-2xl shadow-2xl px-4 pb-6 pt-4">
                <ul className="space-y-1 mb-4">
                  {links.map((l) => (
                    <li key={l.to}>
                      <NavLink
                        to={l.to}
                        end={l.to === "/"}
                        className={({ isActive }) =>
                          cn(
                            "block py-2 text-base font-medium rounded-lg px-3 transition-colors",
                            isActive
                              ? "text-primary bg-accent/10"
                              : "text-foreground hover:text-primary hover:bg-accent/5"
                          )
                        }
                      >
                        {l.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="hero" className="w-full">
                  <a href="/#contact">Get Involved</a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
