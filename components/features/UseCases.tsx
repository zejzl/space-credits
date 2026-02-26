'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/effects/ScrollReveal';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const useCases = [
  {
    icon: '[TOUR]',
    title: 'Space Tourism Payments',
    description: 'Book your ticket to Mars with Space Credits. Pay for orbital hotels, space flights, and interplanetary travel experiences.',
    examples: ['Virgin Galactic trips', 'SpaceX Starship bookings', 'Orbital hotel stays']
  },
  {
    icon: '[MARS]',
    title: 'Mars Colony Commerce',
    description: 'Future Mars colonists will need a universal currency. Space Credits is designed for low-gravity, high-latency transactions.',
    examples: ['Colony supply purchases', 'Habitat rentals', 'Resource trading']
  },
  {
    icon: '[LABS]',
    title: 'Space Research Funding',
    description: 'Support cutting-edge space research and development. Fund projects that push humanity toward the stars.',
    examples: ['Asteroid mining R&D', 'Propulsion technology', 'Life support systems']
  },
  {
    icon: '[META]',
    title: 'Metaverse & Gaming',
    description: 'Use Space Credits in space-themed metaverse worlds and blockchain games. Build your virtual space empire.',
    examples: ['NFT spaceships', 'Virtual planets', 'P2E space games']
  },
  {
    icon: '[DAO]',
    title: 'Community Governance',
    description: 'Holders vote on key decisions: partnerships, charity initiatives, and roadmap priorities.',
    examples: ['DAO proposals', 'Charity selections', 'Feature voting']
  },
  {
    icon: '[EARN]',
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
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">
            Real-World Use Cases
          </h2>
          <p className="text-xl text-gray-400">
            How Space Credits powers the future space economy
          </p>
        </div>
      </ScrollReveal>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {useCases.map((useCase, index) => (
          <ScrollReveal key={index} variants={fadeInUp} delay={index * 0.1}>
            <motion.div
              className="terminal-card h-full"
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="terminal-header">
                <span className="terminal-dot terminal-dot-red" />
                <span className="terminal-dot terminal-dot-yellow" />
                <span className="terminal-dot terminal-dot-green" />
                <span className="ml-2">usecase_{String(index).padStart(2, '0')}</span>
              </div>

              <div className="p-6">
                <div className="font-mono text-lg mb-3 text-[#00f0ff]">
                  {useCase.icon}
                </div>

                <h3 className="text-lg font-mono font-bold mb-2">{useCase.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                  {useCase.description}
                </p>

                <div className="space-y-1 border-t border-[#00f0ff]/10 pt-4">
                  {useCase.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="text-[#00f0ff] font-mono">{'>'}</span>
                      <span>{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </motion.div>
    </section>
  );
}
