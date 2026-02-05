'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/effects/ScrollReveal';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/utils/animations';

export default function OurStory() {
  return (
    <section className="section-container">
      <ScrollReveal variants={fadeInUp}>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Story 📖
          </h2>
          <p className="text-xl text-gray-300">
            From meme to Mars - the Space Credits journey
          </p>
        </div>
      </ScrollReveal>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* The Beginning */}
        <ScrollReveal variants={fadeInLeft}>
          <div className="glass-effect-enhanced rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-4xl">🌱</span>
              <div>
                <h3 className="text-2xl font-bold mb-3">The Beginning</h3>
                <p className="text-gray-300 leading-relaxed">
                  It started as a joke in a crypto Discord server: "What if we made a memecoin
                  for Mars?" But as we kept talking, the idea grew more serious. Humanity IS
                  going to Mars. SpaceX is building Starship. NASA has Mars missions planned.
                  Private companies are racing to space.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Someone will need to figure out interplanetary commerce. Why not us? Why not now?
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* The Vision */}
        <ScrollReveal variants={fadeInRight}>
          <div className="glass-effect-enhanced rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-4xl">🔭</span>
              <div>
                <h3 className="text-2xl font-bold mb-3">The Vision Takes Shape</h3>
                <p className="text-gray-300 leading-relaxed">
                  We researched everything: Solana's speed, blockchain in space, latency between
                  planets (3-22 minutes!), what early Mars colonists would need. We realized this
                  could actually work—not just as a meme, but as real infrastructure.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Space Credits was born: a cryptocurrency designed for a multi-planetary civilization,
                  starting today on Earth, ready for Mars tomorrow.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* The Community */}
        <ScrollReveal variants={fadeInLeft}>
          <div className="glass-effect-enhanced rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-4xl">🚀</span>
              <div>
                <h3 className="text-2xl font-bold mb-3">Building the Rocket</h3>
                <p className="text-gray-300 leading-relaxed">
                  We assembled an anonymous team of developers, marketers, and space enthusiasts.
                  Built on Solana for speed and low fees. Created a supply number that perfectly
                  represents internet culture: 420,691,337 tokens.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Fair launch. Zero taxes. No presale to VCs. Just pure community-driven ambition
                  to make Space Credits the first currency accepted on Mars.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* The Future */}
        <ScrollReveal variants={fadeInRight}>
          <div className="glass-effect-enhanced rounded-2xl p-8 md:p-12 border-2 border-red-500/30">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-4xl">🌌</span>
              <div>
                <h3 className="text-2xl font-bold mb-3">The Future (You Are Here)</h3>
                <p className="text-gray-300 leading-relaxed">
                  This is where you come in. We're building partnerships with space companies,
                  integrating with metaverse projects, and preparing for the day when humans
                  actually need interplanetary currency.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  It might sound crazy. So did Bitcoin in 2009. So did going to the Moon in 1961.
                  The craziest ideas become reality when enough people believe.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4 font-bold">
                  Join us. Let's make Space Credits the official currency of Mars. 🔴
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <ScrollReveal variants={fadeInUp} delay={0.3}>
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Quick Timeline</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">💡</div>
                <div className="font-bold mb-1">Q4 2024</div>
                <div className="text-sm text-gray-400">Initial concept</div>
              </div>
              <div>
                <div className="text-3xl mb-2">🏗️</div>
                <div className="font-bold mb-1">Q1 2025</div>
                <div className="text-sm text-gray-400">Development & launch</div>
              </div>
              <div>
                <div className="text-3xl mb-2">📈</div>
                <div className="font-bold mb-1">Q2-Q3 2025</div>
                <div className="text-sm text-gray-400">Growth & partnerships</div>
              </div>
              <div>
                <div className="text-3xl mb-2">🔴</div>
                <div className="font-bold mb-1">2030+</div>
                <div className="text-sm text-gray-400">Mars integration</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
