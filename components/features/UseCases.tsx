'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/effects/ScrollReveal';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const useCases = [
  {
    icon: '🛸',
    title: 'Space Tourism Payments',
    description: 'Book your ticket to Mars with Space Credits. Pay for orbital hotels, space flights, and interplanetary travel experiences.',
    examples: ['Virgin Galactic trips', 'SpaceX Starship bookings', 'Orbital hotel stays']
  },
  {
    icon: '🏗️',
    title: 'Mars Colony Commerce',
    description: 'Future Mars colonists will need a universal currency. Space Credits is designed for low-gravity, high-latency transactions.',
    examples: ['Colony supply purchases', 'Habitat rentals', 'Resource trading']
  },
  {
    icon: '🔬',
    title: 'Space Research Funding',
    description: 'Support cutting-edge space research and development. Fund projects that push humanity toward the stars.',
    examples: ['Asteroid mining R&D', 'Propulsion technology', 'Life support systems']
  },
  {
    icon: '🎮',
    title: 'Metaverse & Gaming',
    description: 'Use Space Credits in space-themed metaverse worlds and blockchain games. Build your virtual space empire.',
    examples: ['NFT spaceships', 'Virtual planets', 'P2E space games']
  },
  {
    icon: '🤝',
    title: 'Community Governance',
    description: 'Holders vote on key decisions: partnerships, charity initiatives, and roadmap priorities.',
    examples: ['DAO proposals', 'Charity selections', 'Feature voting']
  },
  {
    icon: '🎁',
    title: 'Staking & Rewards',
    description: 'Stake your tokens to earn rewards and support network security. Long-term holders get bonus incentives.',
    examples: ['Passive income', 'Holder airdrops', 'Early access perks']
  }
];

export default function UseCases() {
  return (
    <section className="section-container">
      <ScrollReveal variants={fadeInUp}>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real-World Use Cases 🌍
          </h2>
          <p className="text-xl text-gray-300">
            How Space Credits powers the future space economy
          </p>
        </div>
      </ScrollReveal>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {useCases.map((useCase, index) => (
          <ScrollReveal key={index} variants={fadeInUp} delay={index * 0.1}>
            <motion.div
              className="glass-effect-enhanced rounded-2xl p-6 h-full"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-6xl mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                {useCase.icon}
              </motion.div>

              <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {useCase.description}
              </p>

              <div className="space-y-2">
                {useCase.examples.map((example, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="text-red-400">▸</span>
                    <span>{example}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </motion.div>
    </section>
  );
}
