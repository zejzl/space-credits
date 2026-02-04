'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/effects/ScrollReveal';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/utils/animations';
import { roadmapData } from '@/data/roadmap';

const statusConfig = {
  completed: {
    color: 'bg-green-500',
    textColor: 'text-green-400',
    label: 'Completed ✓',
    borderColor: 'border-green-500'
  },
  'in-progress': {
    color: 'bg-yellow-500',
    textColor: 'text-yellow-400',
    label: 'In Progress 🚀',
    borderColor: 'border-yellow-500'
  },
  future: {
    color: 'bg-gray-500',
    textColor: 'text-gray-400',
    label: 'Coming Soon 🔮',
    borderColor: 'border-gray-500'
  }
};

export default function Roadmap() {
  return (
    <section className="section-container">
      <ScrollReveal variants={fadeInUp}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Roadmap 🗺️
          </h2>
          <p className="text-xl text-gray-300">
            Our journey from Earth to Mars and beyond
          </p>
        </div>
      </ScrollReveal>

      <div className="max-w-5xl mx-auto">
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 via-yellow-500 to-gray-500" />

          {roadmapData.map((phase, index) => {
            const config = statusConfig[phase.status];
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="relative mb-16 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0">
                  <motion.div
                    className={`w-6 h-6 rounded-full ${config.color} border-4 border-slate-900`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  />
                </div>

                {/* Phase content */}
                <ScrollReveal
                  variants={isEven ? fadeInLeft : fadeInRight}
                  delay={0.1}
                >
                  <div className={`flex ${isEven ? 'justify-start' : 'justify-end'}`}>
                    <motion.div
                      className={`w-full md:w-5/12 glass-effect-enhanced rounded-2xl p-6 border-2 ${config.borderColor}`}
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Status badge */}
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${config.textColor} bg-white/10`}>
                        {config.label}
                      </div>

                      {/* Phase title */}
                      <h3 className="text-2xl font-bold mb-2">
                        {phase.phase}: {phase.title}
                      </h3>

                      {/* Items */}
                      <ul className="space-y-2 mt-4">
                        {phase.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            className="flex items-start gap-2 text-gray-300"
                            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: itemIndex * 0.1 }}
                          >
                            <span className="text-red-400 mt-1 flex-shrink-0">▸</span>
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </div>

      {/* Call to action */}
      <ScrollReveal variants={fadeInUp} delay={0.3}>
        <div className="text-center mt-16 glass-effect-enhanced rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            Ready to join the mission? 🚀
          </h3>
          <p className="text-gray-300 mb-6">
            Be part of the first cryptocurrency to reach Mars!
          </p>
          <motion.button
            className="btn-primary text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Space Credits Now
          </motion.button>
        </div>
      </ScrollReveal>
    </section>
  );
}
