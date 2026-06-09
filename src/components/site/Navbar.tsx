import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/results-in-action", label: "Results in Action" },
  { to: "/inventory", label: "Data & Inventory" },
  { to: "/vision", label: "Our Vision" },
  { to: "/events", label: "Events" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || pathname !== "/"
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-card-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Generation Supply logo" className="h-10 w-10 md:h-12 md:w-12 object-contain" />
          <div className="leading-tight">
            <div className="font-display font-black text-base md:text-lg text-primary">Generation Supply</div>
            <div className="text-[10px] md:text-xs uppercase tracking-[0.18em] text-accent font-semibold">Empowering Young Minds</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-primary" : "text-foreground/70 hover:text-primary"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Button asChild variant="hero" size="sm">
            <a href="/#contact">Get Involved</a>
          </Button>
        </nav>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 text-primary"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container py-4 flex flex-col gap-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `py-2 text-base font-medium ${isActive ? "text-primary" : "text-foreground"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Button asChild variant="hero" className="mt-2">
              <a href="/#contact">Get Involved</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
