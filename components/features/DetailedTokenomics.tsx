'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/effects/ScrollReveal';
import { fadeInUp } from '@/utils/animations';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function DetailedTokenomics() {
  return (
    <section className="section-container">
      <ScrollReveal variants={fadeInUp}>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Detailed Tokenomics 📈
          </h2>
          <p className="text-xl text-gray-300">
            Fair distribution for sustainable growth
          </p>
        </div>
      </ScrollReveal>

      {/* Supply Breakdown */}
      <ScrollReveal variants={fadeInUp} delay={0.2}>
        <div className="glass-effect-enhanced rounded-3xl p-8 md:p-12 mb-8">
          <h3 className="text-3xl font-bold mb-8 text-center">Token Distribution</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Allocations */}
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Public Sale</span>
                  <span className="text-2xl font-bold text-red-400">40%</span>
                </div>
                <p className="text-sm text-gray-400">168,276,535 tokens available to the public</p>
              </div>

              <div className="border-b border-white/10 pb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Liquidity Pool</span>
                  <span className="text-2xl font-bold text-green-400">30%</span>
                </div>
                <p className="text-sm text-gray-400">126,207,401 tokens locked in DEX liquidity</p>
              </div>

              <div className="border-b border-white/10 pb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Team & Development</span>
                  <span className="text-2xl font-bold text-yellow-400">15%</span>
                </div>
                <p className="text-sm text-gray-400">63,103,700 tokens, 12-month vesting</p>
              </div>

              <div className="border-b border-white/10 pb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Marketing</span>
                  <span className="text-2xl font-bold text-purple-400">10%</span>
                </div>
                <p className="text-sm text-gray-400">42,069,134 tokens for growth</p>
              </div>

              <div className="pb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Reserve Fund</span>
                  <span className="text-2xl font-bold text-blue-400">5%</span>
                </div>
                <p className="text-sm text-gray-400">21,034,567 tokens for emergencies</p>
              </div>
            </div>

            {/* Right: Key Metrics */}
            <div className="glass-effect rounded-2xl p-6 space-y-6">
              <div>
                <div className="text-sm text-gray-400 mb-1">Total Supply</div>
                <div className="text-3xl font-bold">
                  <AnimatedCounter end={420691337} />
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-400 mb-1">Circulating Supply</div>
                <div className="text-3xl font-bold text-green-400">
                  <AnimatedCounter end={168276535} />
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-400 mb-1">Market Cap (Est.)</div>
                <div className="text-3xl font-bold text-purple-400">
                  $<AnimatedCounter end={1250000} />
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Buy Tax</span>
                  <span className="font-bold text-green-400">0%</span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-gray-400">Sell Tax</span>
                  <span className="font-bold text-green-400">0%</span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-gray-400">Max Wallet</span>
                  <span className="font-bold text-green-400">None</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Vesting Schedule */}
      <ScrollReveal variants={fadeInUp} delay={0.3}>
        <div className="glass-effect-enhanced rounded-3xl p-8 md:p-12 mb-8">
          <h3 className="text-3xl font-bold mb-8 text-center">Vesting Schedule</h3>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-32 text-sm font-bold">Month 0</div>
              <div className="flex-1 bg-white/10 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-500 to-green-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: '70%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
              <div className="w-20 text-right text-sm">70% unlock</div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-32 text-sm font-bold">Month 3</div>
              <div className="flex-1 bg-white/10 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-yellow-500 to-orange-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: '10%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                />
              </div>
              <div className="w-20 text-right text-sm">10% unlock</div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-32 text-sm font-bold">Month 6</div>
              <div className="flex-1 bg-white/10 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: '10%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
              </div>
              <div className="w-20 text-right text-sm">10% unlock</div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-32 text-sm font-bold">Month 12</div>
              <div className="flex-1 bg-white/10 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: '10%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </div>
              <div className="w-20 text-right text-sm">10% unlock</div>
            </div>
          </div>

          <p className="text-center text-gray-400 mt-6 text-sm">
            Team tokens vest over 12 months to ensure long-term commitment
          </p>
        </div>
      </ScrollReveal>

      {/* Why These Numbers? */}
      <ScrollReveal variants={fadeInUp} delay={0.4}>
        <div className="glass-effect-enhanced rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-6 text-center">Why These Numbers?</h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-5xl font-black gradient-text mb-3">40%</div>
              <h4 className="font-bold mb-2">Public Sale</h4>
              <p className="text-sm text-gray-400">
                Maximum community ownership ensures decentralization and fair distribution
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-black gradient-text mb-3">30%</div>
              <h4 className="font-bold mb-2">Liquidity</h4>
              <p className="text-sm text-gray-400">
                Deep liquidity prevents manipulation and ensures stable trading
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-black gradient-text mb-3">0%</div>
              <h4 className="font-bold mb-2">Tax</h4>
              <p className="text-sm text-gray-400">
                Zero taxes mean you keep 100% of your gains. No hidden fees.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
