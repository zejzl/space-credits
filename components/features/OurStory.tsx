'use client';

import ScrollReveal from '@/components/effects/ScrollReveal';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/utils/animations';

export default function OurStory() {
  return (
    <section className="section-container">
      <ScrollReveal variants={fadeInUp}>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">
            Our Story
          </h2>
          <p className="text-xl text-gray-400">
            From meme to Mars - the Space Credits journey
          </p>
        </div>
      </ScrollReveal>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* The Beginning */}
        <ScrollReveal variants={fadeInLeft}>
          <div className="terminal-card">
            <div className="terminal-header">
              <span className="terminal-dot terminal-dot-red" />
              <span className="terminal-dot terminal-dot-yellow" />
              <span className="terminal-dot terminal-dot-green" />
              <span className="ml-2">chapter_01_genesis.log</span>
            </div>
            <div className="flex items-start gap-4 p-6 md:p-8">
              <span className="font-mono text-2xl text-[#00f0ff] flex-shrink-0 mt-1">[START]</span>
              <div>
                <h3 className="text-2xl font-mono font-bold mb-3">The Beginning</h3>
                <p className="text-gray-300 leading-relaxed">
                  It started as a joke in a crypto Discord server: &quot;What if we made a memecoin for Mars?&quot; But as we kept talking, the idea grew more serious. Humanity IS going to Mars. SpaceX is building Starship. NASA has Mars missions planned. Private companies are racing to space.
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
          <div className="terminal-card">
            <div className="terminal-header">
              <span className="terminal-dot terminal-dot-red" />
              <span className="terminal-dot terminal-dot-yellow" />
              <span className="terminal-dot terminal-dot-green" />
              <span className="ml-2">chapter_02_vision.log</span>
            </div>
            <div className="flex items-start gap-4 p-6 md:p-8">
              <span className="font-mono text-2xl text-[#ff9500] flex-shrink-0 mt-1">[IDEA]</span>
              <div>
                <h3 className="text-2xl font-mono font-bold mb-3">The Vision Takes Shape</h3>
                <p className="text-gray-300 leading-relaxed">
                  We researched everything: Solana&apos;s speed, blockchain in space, latency between planets (3-22 minutes!), what early Mars colonists would need. We realized this could actually work—not just as a meme, but as real infrastructure.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Space Credits was born: a cryptocurrency designed for a multi-planetary civilization, starting today on Earth, ready for Mars tomorrow.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Building the Rocket */}
        <ScrollReveal variants={fadeInLeft}>
          <div className="terminal-card">
            <div className="terminal-header">
              <span className="terminal-dot terminal-dot-red" />
              <span className="terminal-dot terminal-dot-yellow" />
              <span className="terminal-dot terminal-dot-green" />
              <span className="ml-2">chapter_03_execution.log</span>
            </div>
            <div className="flex items-start gap-4 p-6 md:p-8">
              <span className="font-mono text-2xl text-[#7c3aed] flex-shrink-0 mt-1">[BUILD]</span>
              <div>
                <h3 className="text-2xl font-mono font-bold mb-3">Building the Rocket</h3>
                <p className="text-gray-300 leading-relaxed">
                  We assembled an anonymous team of developers, marketers, and space enthusiasts. Built on Solana for speed and low fees. Created a supply number that perfectly represents internet culture: 420,691,337 tokens.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Fair launch. Zero taxes. No presale to VCs. Just pure community-driven ambition to make Space Credits the first currency accepted on Mars.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* The Future */}
        <ScrollReveal variants={fadeInRight}>
          <div className="terminal-card border-2 border-[#00f0ff]/30">
            <div className="terminal-header">
              <span className="terminal-dot terminal-dot-red" />
              <span className="terminal-dot terminal-dot-yellow" />
              <span className="terminal-dot terminal-dot-green" />
              <span className="ml-2">chapter_04_future.log</span>
            </div>
            <div className="flex items-start gap-4 p-6 md:p-8">
              <span className="font-mono text-2xl text-[#00f0ff] flex-shrink-0 mt-1 animate-pulse">[LIVE]</span>
              <div>
                <h3 className="text-2xl font-mono font-bold mb-3">The Future (You Are Here)</h3>
                <p className="text-gray-300 leading-relaxed">
                  This is where you come in. We&apos;re building partnerships with space companies, integrating with metaverse projects, and preparing for the day when humans actually need interplanetary currency.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  It might sound crazy. So did Bitcoin in 2009. So did going to the Moon in 1961. The craziest ideas become reality when enough people believe.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4 font-mono font-bold text-[#00f0ff]">
                  Join us. Let&apos;s make Space Credits the official currency of Mars.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <ScrollReveal variants={fadeInUp} delay={0.3}>
          <div className="terminal-card">
            <div className="terminal-header">
              <span className="terminal-dot terminal-dot-red" />
              <span className="terminal-dot terminal-dot-yellow" />
              <span className="terminal-dot terminal-dot-green" />
              <span className="ml-2">timeline.txt</span>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-mono font-bold mb-6 text-center">Quick Timeline</h3>
              <div className="grid md:grid-cols-4 gap-4 font-mono text-sm">
                <div className="text-center p-4 border border-[#00f0ff]/10">
                  <div className="text-[#00f0ff] font-bold mb-1">Q4 2024</div>
                  <div className="text-gray-400 text-xs">Concept Phase</div>
                </div>
                <div className="text-center p-4 border border-[#00f0ff]/10">
                  <div className="text-[#ff9500] font-bold mb-1">Q1 2025</div>
                  <div className="text-gray-400 text-xs">Dev & Launch</div>
                </div>
                <div className="text-center p-4 border border-[#00f0ff]/10">
                  <div className="text-[#7c3aed] font-bold mb-1">Q2-Q3 2025</div>
                  <div className="text-gray-400 text-xs">Growth Phase</div>
                </div>
                <div className="text-center p-4 border border-[#00f0ff]/10">
                  <div className="text-[#ff9500] font-bold mb-1">2030+</div>
                  <div className="text-gray-400 text-xs">Mars Integration</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
