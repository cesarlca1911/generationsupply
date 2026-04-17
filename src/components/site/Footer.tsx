import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Generation Supply" className="h-10 w-10 object-contain" />
          <div className="leading-tight">
            <div className="font-display font-bold">Generation Supply</div>
            <div className="text-xs uppercase tracking-wider text-accent">Empowering Young Minds</div>
          </div>
        </div>
        <p className="text-sm text-primary-foreground/70 text-center md:text-right">
          © {new Date().getFullYear()} Generation Supply · Fairfax County, Virginia
        </p>
      </div>
    </footer>
  );
};
