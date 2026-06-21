import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  /** Fraction of cursor offset applied as translation (0–1). Default 0.28. */
  strength?: number;
  /** Max rotation in degrees for 3-D tilt. Default 10. */
  tilt?: number;
}

export function MagneticButton({
  children,
  className,
  strength = 0.28,
  tilt = 10,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rawRX = useMotionValue(0);
  const rawRY = useMotionValue(0);

  const cfg = { stiffness: 180, damping: 16, mass: 0.4 };
  const x = useSpring(rawX, cfg);
  const y = useSpring(rawY, cfg);
  const rotateX = useSpring(rawRX, cfg);
  const rotateY = useSpring(rawRY, cfg);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const dx = e.clientX - (left + width / 2);
    const dy = e.clientY - (top + height / 2);
    rawX.set(dx * strength);
    rawY.set(dy * strength);
    rawRX.set(-(dy / (height / 2)) * tilt);
    rawRY.set((dx / (width / 2)) * tilt);
  }

  function handleMouseLeave() {
    rawX.set(0);
    rawY.set(0);
    rawRX.set(0);
    rawRY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      style={{ x, y, rotateX, rotateY, transformPerspective: 800 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 250, damping: 18 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn('inline-block', className)}
    >
      {children}
    </motion.div>
  );
}
