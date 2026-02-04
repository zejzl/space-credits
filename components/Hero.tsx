'use client';

import Link from 'next/link';
import { HeroContent } from '@/types';
import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import { staggerContainer, fadeInUp, scaleIn } from '@/utils/animations';

const ParticleBackground = dynamic(() => import('@/components/effects/ParticleBackground'), {
  ssr: false
});

interface HeroProps {
  content: HeroContent;
}

export default function Hero({ content }: HeroProps) {
  const { scrollYProgress } = useScroll();

  // Parallax effects for floating emojis
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Animated background elements with parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 text-6xl animate-float opacity-20"
          style={{ y: y1 }}
        >
          🚀
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 text-8xl animate-float opacity-10"
          style={{ animationDelay: '1s', y: y2 }}
        >
          ⭐
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-1/4 text-7xl animate-float opacity-15"
          style={{ animationDelay: '0.5s', y: y3 }}
        >
          🌙
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-1/3 text-6xl animate-float opacity-10"
          style={{ animationDelay: '1.5s', y: y4 }}
        >
          🪐
        </motion.div>
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Title with glow effect */}
        <div className="mb-8">
          <motion.h1
            className="text-6xl md:text-8xl font-black mb-4 text-white drop-shadow-2xl animate-glow"
            variants={fadeInUp}
          >
            {content.title}
          </motion.h1>
          <motion.div
            className="inline-block"
            variants={fadeInUp}
          >
            <p className="text-2xl md:text-4xl gradient-text font-bold">
              {content.tagline}
            </p>
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          variants={fadeInUp}
        >
          {content.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          variants={scaleIn}
        >
          <Link href={content.ctaButtons.primary.href}>
            <motion.button
              className="btn-primary w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {content.ctaButtons.primary.text}
            </motion.button>
          </Link>
          <Link href={content.ctaButtons.secondary.href}>
            <motion.button
              className="btn-secondary w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {content.ctaButtons.secondary.text}
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
