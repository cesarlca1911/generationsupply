import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    // Outer div — not <main> so it doesn't conflict with Index.tsx's <main>
    <div
      className={cn(
        "relative flex flex-col min-h-screen bg-background text-foreground transition-bg",
        className
      )}
      {...props}
    >
      {/* Aurora animation layer — absolute so it underlays children */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={cn(
            `[--light-gradient:repeating-linear-gradient(100deg,hsl(0_0%_97%)_0%,hsl(0_0%_97%)_7%,var(--transparent)_10%,var(--transparent)_12%,hsl(0_0%_97%)_16%)]
            [--aurora:repeating-linear-gradient(100deg,hsl(174_75%_55%)_10%,hsl(210_75%_50%)_15%,hsl(260_75%_55%)_20%,hsl(290_70%_60%)_25%,hsl(174_75%_50%)_30%)]
            [background-image:var(--light-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px]
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--light-gradient),var(--aurora)]
            after:[background-size:200%,_100%]
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-screen
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
          )}
        />
      </div>
      {children}
    </div>
  );
};
