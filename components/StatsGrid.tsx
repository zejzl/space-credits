'use client';

import { Stat } from '@/types';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import ScrollReveal from '@/components/effects/ScrollReveal';
import { motion } from 'framer-motion';
import { scaleIn, staggerContainer } from '@/utils/animations';

interface StatsGridProps {
  stats: Stat[];
}

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
                className="terminal-card p-0 text-center group relative overflow-hidden"
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Terminal header */}
                <div className="terminal-header">
                  <span className="terminal-dot terminal-dot-red" />
                  <span className="terminal-dot terminal-dot-yellow" />
                  <span className="terminal-dot terminal-dot-green" />
                  <span className="ml-2 opacity-60">{stat.label}</span>
                </div>

                <div className="p-6">
                  {/* Icon as text symbol */}
                  {stat.icon && (
                    <div className="font-mono text-2xl mb-3 text-[#00f0ff]/60">
                      {stat.icon}
                    </div>
                  )}

                  {/* Value */}
                  <h3 className="text-3xl md:text-4xl font-mono font-bold text-white mb-2">
                    {hasNumber ? (
                      <AnimatedCounter end={number} suffix={suffix} />
                    ) : (
                      <span className="text-[#00f0ff]">{stat.value}</span>
                    )}
                  </h3>

                  {/* Label */}
                  <p className="text-gray-500 font-mono uppercase text-xs tracking-widest">
                    {stat.label}
                  </p>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none neon-glow" />
              </motion.div>
            </ScrollReveal>
          );
        })}
      </motion.div>
    </section>
  );
}
