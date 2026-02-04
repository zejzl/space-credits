'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/effects/ScrollReveal';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const steps = [
  {
    number: 1,
    title: "Get a Solana Wallet",
    description: "Download Phantom or Solflare wallet. It's like a space suit for your crypto!",
    emoji: "👛"
  },
  {
    number: 2,
    title: "Buy Some SOL",
    description: "Purchase SOL from any exchange and transfer it to your wallet.",
    emoji: "💰"
  },
  {
    number: 3,
    title: "Connect to DEX",
    description: "Visit Raydium or Jupiter and connect your wallet. The launchpad is ready!",
    emoji: "🔗"
  },
  {
    number: 4,
    title: "Swap for Space Credits",
    description: "Exchange SOL for Space Credits and join the mission to Mars!",
    emoji: "🚀"
  }
];

export default function HowToBuy() {
  return (
    <section className="section-container">
      <ScrollReveal variants={fadeInUp}>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How to Buy 🛒
          </h2>
          <p className="text-xl text-gray-300">
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
              className="glass-effect-enhanced rounded-2xl p-6 text-center relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Step Number Badge */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center font-bold text-sm">
                {step.number}
              </div>

              {/* Emoji */}
              <motion.div
                className="text-6xl mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                {step.emoji}
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {step.description}
              </p>

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
            Buy Now on Raydium →
          </motion.button>
        </div>
      </ScrollReveal>
    </section>
  );
}
