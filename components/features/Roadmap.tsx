'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/effects/ScrollReveal';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/utils/animations';
import { roadmapData } from '@/data/roadmap';

const statusConfig = {
  completed: {
    color: 'bg-[#00f0ff]',
    textColor: 'text-[#00f0ff]',
    label: '[DONE]',
    borderColor: 'border-[#00f0ff]/40'
  },
  'in-progress': {
    color: 'bg-[#ff9500]',
    textColor: 'text-[#ff9500]',
    label: '[ACTIVE]',
    borderColor: 'border-[#ff9500]/40'
  },
  future: {
    color: 'bg-gray-500',
    textColor: 'text-gray-400',
    label: '[PENDING]',
    borderColor: 'border-gray-500/40'
  }
};

export default function Roadmap() {
  return (
    <section className="section-container">
      <ScrollReveal variants={fadeInUp}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">
            Mission Roadmap
          </h2>
          <p className="text-xl text-gray-400">
            Our journey from Earth to Mars and beyond
          </p>
        </div>
      </ScrollReveal>

      <div className="max-w-5xl mx-auto">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-[#00f0ff]/50 via-[#ff9500]/50 to-gray-600/30" />

          {roadmapData.map((phase, index) => {
            const config = statusConfig[phase.status];
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="relative mb-16 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0">
                  <motion.div
                    className={`w-4 h-4 ${config.color} border-2 border-[#0a0e1a]`}
                    style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  />
                </div>

                <ScrollReveal
                  variants={isEven ? fadeInLeft : fadeInRight}
                  delay={0.1}
                >
                  <div className={`flex ${isEven ? 'justify-start' : 'justify-end'}`}>
                    <motion.div
                      className={`w-full md:w-5/12 terminal-card border ${config.borderColor}`}
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="terminal-header">
                        <span className="terminal-dot terminal-dot-red" />
                        <span className="terminal-dot terminal-dot-yellow" />
                        <span className="terminal-dot terminal-dot-green" />
                        <span className="ml-2">{phase.phase.toLowerCase().replace(' ', '_')}.log</span>
                      </div>

                      <div className="p-6">
                        {/* Status badge */}
                        <div className={`inline-block px-3 py-1 text-xs font-mono font-bold mb-3 ${config.textColor} border ${config.borderColor}`}>
                          {config.label}
                        </div>

                        <h3 className="text-xl font-mono font-bold mb-2">
                          {phase.phase}: {phase.title}
                        </h3>

                        <ul className="space-y-2 mt-4">
                          {phase.items.map((item, itemIndex) => (
                            <motion.li
                              key={itemIndex}
                              className="flex items-start gap-2 text-gray-400 text-sm"
                              initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: itemIndex * 0.1 }}
                            >
                              <span className="text-[#00f0ff] mt-0.5 flex-shrink-0 font-mono">{'>'}</span>
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <ScrollReveal variants={fadeInUp} delay={0.3}>
        <div className="text-center mt-16">
          <div className="terminal-card inline-block">
            <div className="terminal-header">
              <span className="terminal-dot terminal-dot-red" />
              <span className="terminal-dot terminal-dot-yellow" />
              <span className="terminal-dot terminal-dot-green" />
              <span className="ml-2">join_mission.sh</span>
            </div>
            <div className="p-8 text-center">
              <h3 className="text-xl font-mono font-bold mb-4">
                Ready to join the mission?
              </h3>
              <p className="text-gray-400 mb-6 text-sm">
                Be part of the first cryptocurrency to reach Mars.
              </p>
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                GET SPACE CREDITS NOW
              </motion.button>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
