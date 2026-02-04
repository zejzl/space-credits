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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet the Crew 👨‍🚀
          </h2>
          <p className="text-xl text-gray-300">
            Anonymous astronauts on a mission to Mars
          </p>
        </div>
      </ScrollReveal>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {teamData.map((member, index) => (
          <ScrollReveal key={index} variants={fadeInUp} delay={index * 0.1}>
            <motion.div
              className="glass-effect-enhanced rounded-2xl p-6 text-center group"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Avatar */}
              <motion.div
                className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-500 to-purple-600 flex items-center justify-center text-5xl"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                {member.emoji}
              </motion.div>

              {/* Name */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-red-400 transition-colors">
                {member.name}
              </h3>

              {/* Role */}
              <div className="text-sm text-green-400 font-semibold mb-3 uppercase tracking-wider">
                {member.role}
              </div>

              {/* Bio */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          </ScrollReveal>
        ))}
      </motion.div>
    </section>
  );
}
