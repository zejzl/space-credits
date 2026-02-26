'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/effects/ScrollReveal';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import { teamData } from '@/data/team';

export default function TeamSection() {
  return (
    <section className="section-container">
      <ScrollReveal variants={fadeInUp}>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">
            Meet the Crew
          </h2>
          <p className="text-xl text-gray-400">
            Anonymous astronauts on a mission to Mars
          </p>
        </div>
      </ScrollReveal>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {teamData.map((member, index) => (
          <ScrollReveal key={index} variants={fadeInUp} delay={index * 0.1}>
            <motion.div
              className="terminal-card group"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="terminal-header">
                <span className="terminal-dot terminal-dot-red" />
                <span className="terminal-dot terminal-dot-yellow" />
                <span className="terminal-dot terminal-dot-green" />
                <span className="ml-2">crew_{String(index).padStart(2, '0')}</span>
              </div>

              <div className="p-6 text-center">
                {/* Avatar */}
                <motion.div
                  className="w-20 h-20 mx-auto mb-4 border border-[#00f0ff]/30 flex items-center justify-center font-mono text-xl font-bold text-[#00f0ff] group-hover:border-[#00f0ff] group-hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {member.emoji}
                </motion.div>

                {/* Name */}
                <h3 className="text-lg font-mono font-bold mb-2 group-hover:text-[#00f0ff] transition-colors">
                  {member.name}
                </h3>

                {/* Role */}
                <div className="text-xs text-[#ff9500] font-mono font-semibold mb-3 uppercase tracking-widest">
                  {member.role}
                </div>

                {/* Bio */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </motion.div>
    </section>
  );
}
