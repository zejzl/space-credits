'use client';

import { Stat } from '@/types';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import ScrollReveal from '@/components/effects/ScrollReveal';
import { motion } from 'framer-motion';
import { scaleIn, staggerContainer } from '@/utils/animations';

interface StatsGridProps {
  stats: Stat[];
}

// Helper function to extract numeric value from stat.value string
function parseStatValue(value: string): { number: number; suffix: string } {
  const match = value.match(/^([\d,]+)(.*)$/);
  if (match) {
    const number = parseInt(match[1].replace(/,/g, ''));
    const suffix = match[2].trim();
    return { number, suffix };
  }
  return { number: 0, suffix: value };
}

export default function StatsGrid({ stats }: StatsGridProps) {
  return (
    <section className="section-container">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {stats.map((stat, index) => {
          const { number, suffix } = parseStatValue(stat.value);
          const hasNumber = number > 0;

          return (
            <ScrollReveal key={index} variants={scaleIn} delay={index * 0.1}>
              <motion.div
                className="glass-effect-enhanced card-border p-8 text-center group relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                {stat.icon && (
                  <motion.div
                    className="text-5xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.icon}
                  </motion.div>
                )}

                {/* Value with animation */}
                <h3 className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:neon-glow transition-all">
                  {hasNumber ? (
                    <AnimatedCounter end={number} suffix={suffix} />
                  ) : (
                    stat.value
                  )}
                </h3>

                {/* Label */}
                <p className="text-gray-400 font-semibold uppercase text-sm tracking-wider">
                  {stat.label}
                </p>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none neon-glow" />
              </motion.div>
            </ScrollReveal>
          );
        })}
      </motion.div>
    </section>
  );
}
