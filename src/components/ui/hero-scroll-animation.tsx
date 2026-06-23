'use client';

import { useScroll, useTransform, motion } from 'motion/react';
import React, { useRef, ReactNode } from 'react';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
}

const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({ children }) => {
  const container = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Scroll progress for the entire page
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  // Hero section animations - scale down and fade as you scroll
  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.8]);
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3]);

  // Content animations - fade in and slide up
  const contentOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.15, 0.35], [100, 0]);

  return (
    <div ref={container} className='relative bg-background'>
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{
          scale: heroScale,
          y: heroY,
          opacity: heroOpacity,
        }}
        className='relative h-screen w-full bg-gradient-to-b from-[#f5f5f5] to-[#fafafa] flex flex-col items-center justify-center text-black overflow-hidden'
      >
        {/* Aurora effect background */}
        <div className='absolute inset-0 opacity-40'>
          <div className='absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-teal-200 to-blue-200 rounded-full blur-3xl animate-pulse' />
          <div className='absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full blur-3xl animate-pulse' />
        </div>

        {/* Grid pattern overlay */}
        <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

        <div className='relative z-10 px-4'>
          <h1 className='2xl:text-7xl text-6xl font-semibold text-center tracking-tight leading-[120%]'>
            Empowering Young Minds <br /> Through Scalable and <br /> Sustainable Educational <br /> Asset Fundraising
          </h1>
          <p className='mt-8 text-lg text-muted-foreground text-center max-w-2xl mx-auto'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 font-semibold'>Scroll to explore the mission</span>
          </p>
        </div>
      </motion.section>

      {/* Main Content with Scroll Effects */}
      <motion.div
        style={{
          opacity: contentOpacity,
          y: contentY,
        }}
        className='relative'
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollAnimationWrapper;
