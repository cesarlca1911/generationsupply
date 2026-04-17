import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#mission", label: "Mission" },
  { href: "#impact", label: "Impact" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#partners", label: "Partners" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-card-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Generation Supply logo" className="h-10 w-10 md:h-12 md:w-12 object-contain" />
          <div className="leading-tight">
            <div className="font-display font-black text-base md:text-lg text-primary">Generation Supply</div>
            <div className="text-[10px] md:text-xs uppercase tracking-[0.18em] text-accent font-semibold">Empowering Young Minds</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/75 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button asChild variant="hero" size="sm">
            <a href="#contact">Get Involved</a>
          </Button>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 text-primary"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium text-foreground"
              >
                {l.label}
              </a>
            ))}
            <Button asChild variant="hero" className="mt-2">
              <a href="#contact" onClick={() => setOpen(false)}>Get Involved</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
