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

// Dynamic import for heavy components
const TokenomicsChart = dynamic(() => import('@/components/features/TokenomicsChart'), {
  ssr: false
});

const TOKEN_ADDRESS = 'SpACE1234567890YourTokenAddressHere';

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
          <div className="glass-effect-enhanced rounded-2xl p-8 text-center flex flex-col justify-center">
            <div className="text-gray-400 text-sm uppercase tracking-wider mb-4">
              Contract Address
            </div>
            <div className="mb-4 font-mono text-xs text-gray-300 break-all px-4">
              {TOKEN_ADDRESS}
            </div>
            <CopyButton
              text={TOKEN_ADDRESS}
              label="Copy Address 📋"
              className="btn-primary mx-auto"
            />
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
        <div className="glass-effect-enhanced rounded-2xl p-12 border-2 border-red-500/30 neon-glow">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to go to Mars? 🚀
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of space enthusiasts who believe in the future of interplanetary commerce.
          </p>
          <button className="btn-primary text-lg">
            Get Space Credits Now
          </button>
        </div>
      </section>
    </>
  );
}
