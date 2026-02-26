'use client';

import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import StatsGrid from '@/components/StatsGrid';
import SocialProof from '@/components/features/SocialProof';
import PriceTicker from '@/components/features/PriceTicker';
import CopyButton from '@/components/ui/CopyButton';
import HowToBuy from '@/components/features/HowToBuy';
import Roadmap from '@/components/features/Roadmap';
import TeamSection from '@/components/features/TeamSection';
import FAQSection from '@/components/features/FAQSection';
import MouseGradient from '@/components/effects/MouseGradient';
import { content } from '@/data/content';

const TokenomicsChart = dynamic(() => import('@/components/features/TokenomicsChart'), {
  ssr: false
});

const TOKEN_ADDRESS = 'B7Wz6HcG3XoYEqPUYmLu97gHMk4xifVRr6J3bJZ9u9Aj';

export default function Home() {
  return (
    <>
      <MouseGradient />
      <Hero content={content.hero} />
      <SocialProof />
      <StatsGrid stats={content.stats} />

      {/* Price & Token Address Section */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PriceTicker />
          <div className="terminal-card">
            <div className="terminal-header">
              <span className="terminal-dot terminal-dot-red" />
              <span className="terminal-dot terminal-dot-yellow" />
              <span className="terminal-dot terminal-dot-green" />
              <span className="ml-2">contract_address.txt</span>
            </div>
            <div className="p-8 text-center flex flex-col justify-center">
              <div className="text-gray-500 text-xs font-mono uppercase tracking-widest mb-4">
                // Contract Address
              </div>
              <div className="mb-4 font-mono text-xs text-gray-300 break-all px-4 bg-[#0a0e1a] p-3 border border-[#00f0ff]/10">
                {TOKEN_ADDRESS}
              </div>
              <CopyButton
                text={TOKEN_ADDRESS}
                label="Copy Address"
                className="btn-primary mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <HowToBuy />
      <TokenomicsChart />
      <Roadmap />
      <TeamSection />
      <FAQSection />

      {/* Final CTA Section */}
      <section className="section-container text-center">
        <div className="terminal-card inline-block">
          <div className="terminal-header">
            <span className="terminal-dot terminal-dot-red" />
            <span className="terminal-dot terminal-dot-yellow" />
            <span className="terminal-dot terminal-dot-green" />
            <span className="ml-2">final_call_to_action.sh</span>
          </div>
          <div className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-6">
              Ready to go to Mars?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of space enthusiasts who believe in the future of interplanetary commerce.
            </p>
            <button className="btn-primary text-lg">
              GET SPACE CREDITS NOW
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
