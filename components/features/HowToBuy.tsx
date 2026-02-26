'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/effects/ScrollReveal';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const steps = [
  {
    number: 1,
    title: "Get a Solana Wallet",
    description: "Download Phantom or Solflare wallet. It's like a space suit for your crypto!",
    icon: "[WALLET]"
  },
  {
    number: 2,
    title: "Buy Some SOL",
    description: "Purchase SOL from any exchange and transfer it to your wallet.",
    icon: "[SOL]"
  },
  {
    number: 3,
    title: "Connect to DEX",
    description: "Visit Raydium or Jupiter and connect your wallet. The launchpad is ready!",
    icon: "[DEX]"
  },
  {
    number: 4,
    title: "Swap for Space Credits",
    description: "Exchange SOL for Space Credits and join the mission to Mars!",
    icon: "[SWAP]"
  }
];

export default function HowToBuy() {
  return (
    <section className="section-container">
      <ScrollReveal variants={fadeInUp}>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">
            How to Buy
          </h2>
          <p className="text-xl text-gray-400">
            Four simple steps to join the space economy
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
        {steps.map((step, index) => (
          <ScrollReveal key={step.number} variants={fadeInUp} delay={index * 0.1}>
            <motion.div
              className="terminal-card relative overflow-hidden group"
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="terminal-header">
                <span className="terminal-dot terminal-dot-red" />
                <span className="terminal-dot terminal-dot-yellow" />
                <span className="terminal-dot terminal-dot-green" />
                <span className="ml-2">step_{String(step.number).padStart(2, '0')}</span>
              </div>

              <div className="p-6 text-center">
                {/* Step Number Badge */}
                <div className="absolute top-2 right-3 font-mono text-xs text-[#00f0ff]/30">
                  {String(step.number).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className="font-mono text-lg mb-4 text-[#00f0ff]">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-mono font-bold mb-3">{step.title}</h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none neon-glow" />
            </motion.div>
          </ScrollReveal>
        ))}
      </motion.div>

      {/* CTA */}
      <ScrollReveal variants={fadeInUp} delay={0.4}>
        <div className="text-center mt-12">
          <motion.button
            className="btn-primary text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            BUY NOW ON RAYDIUM
          </motion.button>
        </div>
      </ScrollReveal>
    </section>
  );
}
