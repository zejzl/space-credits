'use client';

import Link from 'next/link';
import Image from 'next/image';
import { HeroContent } from '@/types';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { staggerContainer, fadeInUp, scaleIn } from '@/utils/animations';
import { useState, useEffect } from 'react';

const ParticleBackground = dynamic(() => import('@/components/effects/ParticleBackground'), {
  ssr: false
});

interface HeroProps {
  content: HeroContent;
}

function TypingText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayed(prev => prev + text[index]);
        setIndex(i => i + 1);
      }, 60);
      return () => clearTimeout(timer);
    }
  }, [index, text]);

  return (
    <span>
      {displayed}
      <span className="cursor-blink" />
    </span>
  );
}

export default function Hero({ content }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background: poster first (LCP, reduced motion), video loop on top */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-poster.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-50"
          priority
        />
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-50 motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/video/hero-loop-seamless.webm" type="video/webm" />
          <source src="/video/hero-loop-seamless.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/70 via-[#0a0e1a]/30 to-[#0a0e1a]/90" />
      </div>

      {/* Particle Background */}
      <ParticleBackground />

      {/* Scan line overlay */}
      <div className="scan-line-overlay z-[1]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-lines opacity-30 z-[1]" />

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Mission designation label */}
        <motion.div
          className="mb-6"
          variants={fadeInUp}
        >
          <span className="font-mono text-xs tracking-[0.3em] text-[#00f0ff]/60 uppercase">
            {"// Mission Designation: SPACE-001"}
          </span>
        </motion.div>

        {/* Title with glow effect */}
        <div className="mb-8">
          <motion.h1
            className="text-6xl md:text-8xl font-mono font-bold mb-6 text-white drop-shadow-2xl"
            style={{ textShadow: '0 0 40px rgba(0, 240, 255, 0.3)' }}
            variants={fadeInUp}
          >
            {content.title}
          </motion.h1>
          <motion.div
            className="inline-block"
            variants={fadeInUp}
          >
            <p className="text-xl md:text-3xl font-mono gradient-text font-bold">
              <TypingText text={content.tagline} />
            </p>
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-body"
          variants={fadeInUp}
        >
          {content.description}
        </motion.p>

        {/* Mission countdown feel */}
        <motion.div
          className="flex justify-center gap-8 mb-12 font-mono text-xs tracking-wider"
          variants={fadeInUp}
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-[#00f0ff]">T-00</div>
            <div className="text-gray-500 mt-1">LAUNCH</div>
          </div>
          <div className="text-gray-600">|</div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#ff9500]">SOL</div>
            <div className="text-gray-500 mt-1">NETWORK</div>
          </div>
          <div className="text-gray-600">|</div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#7c3aed]">420M</div>
            <div className="text-gray-500 mt-1">SUPPLY</div>
          </div>
        </motion.div>

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
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[10px] tracking-widest text-gray-500">SCROLL</span>
            <svg
              className="w-5 h-5 text-[#00f0ff] animate-bounce"
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
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
