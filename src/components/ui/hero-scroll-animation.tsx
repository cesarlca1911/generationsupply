'use client';

import { useScroll, useTransform, motion, MotionValue } from 'motion/react';
import React, { useRef, forwardRef } from 'react';

interface SectionProps {
  scrollYProgress: MotionValue<number>;
}

const Section1: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <motion.section
      style={{ scale, rotate }}
      className='sticky top-0 h-screen bg-gradient-to-b from-[#f5f5f5] to-[#fafafa] flex flex-col items-center justify-center text-black relative overflow-hidden'
    >
      {/* Aurora effect background */}
      <div className='absolute inset-0 opacity-40'>
        <div className='absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-teal-200 to-blue-200 rounded-full blur-3xl animate-pulse' />
        <div className='absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full blur-3xl animate-pulse' />
      </div>

      {/* Grid pattern overlay */}
      <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

      <div className='relative z-10'>
        <h1 className='2xl:text-7xl text-6xl px-8 font-semibold text-center tracking-tight leading-[120%]'>
          Empowering Students <br /> Through Supply Drives <br /> <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600'>Scroll to explore</span>
        </h1>
      </div>
    </motion.section>
  );
};

const Section2: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className='relative h-screen bg-gradient-to-b from-[#fafafa] to-white text-black flex flex-col items-center justify-center'
    >
      {/* Aurora effect background */}
      <div className='absolute inset-0 opacity-30'>
        <div className='absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-teal-200 via-purple-200 to-pink-200 rounded-full blur-3xl' />
      </div>

      <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

      <article className='container mx-auto relative z-10 px-4'>
        <h1 className='text-6xl leading-[120%] py-10 font-semibold tracking-tight text-center max-w-3xl mx-auto'>
          Real Impact in <br />
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600'>
            Fairfax County Schools
          </span>
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>
          <div className='bg-white/60 backdrop-blur-sm border border-primary/20 rounded-lg p-6 shadow-card-soft hover:shadow-elegant transition-all'>
            <div className='text-4xl font-black text-primary mb-2'>1,800+</div>
            <p className='text-sm text-muted-foreground'>Students Reached</p>
          </div>
          <div className='bg-white/60 backdrop-blur-sm border border-primary/20 rounded-lg p-6 shadow-card-soft hover:shadow-elegant transition-all'>
            <div className='text-4xl font-black text-accent mb-2'>$1,756.54</div>
            <p className='text-sm text-muted-foreground'>Total Value Raised</p>
          </div>
          <div className='bg-white/60 backdrop-blur-sm border border-primary/20 rounded-lg p-6 shadow-card-soft hover:shadow-elegant transition-all'>
            <div className='text-4xl font-black text-primary mb-2'>900+</div>
            <p className='text-sm text-muted-foreground'>Students Supported</p>
          </div>
          <div className='bg-white/60 backdrop-blur-sm border border-primary/20 rounded-lg p-6 shadow-card-soft hover:shadow-elegant transition-all'>
            <div className='text-4xl font-black text-accent mb-2'>3</div>
            <p className='text-sm text-muted-foreground'>Active Hubs</p>
          </div>
        </div>
      </article>
    </motion.section>
  );
};

const HeroScrollAnimation = forwardRef<HTMLDivElement>((props, ref) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <>
      <main ref={container} className='relative h-[200vh] bg-background'>
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
      </main>
    </>
  );
});

HeroScrollAnimation.displayName = 'HeroScrollAnimation';

export default HeroScrollAnimation;
