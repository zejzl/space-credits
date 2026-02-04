import { Metadata } from 'next';
import FeatureList from '@/components/FeatureList';
import { content } from '@/data/content';

export const metadata: Metadata = {
  title: 'Mission - Space Credits',
  description: 'Our mission is to create the first space-ready cryptocurrency for interplanetary commerce on Mars and beyond.',
};

export default function MissionPage() {
  return (
    <>
      {/* Hero section */}
      <section className="pt-32 pb-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Our <span className="gradient-text">Mission</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            {content.mission.description}
          </p>
        </div>
      </section>

      {/* Features */}
      <FeatureList
        features={content.mission.features}
        title="What Makes Space Credits Special"
        description="Built for the future of interplanetary commerce"
      />

      {/* Roadmap teaser */}
      <section className="section-container">
        <div className="glass-effect rounded-2xl p-12 border border-white/10 text-center">
          <h2 className="text-4xl font-black text-white mb-6">
            The Journey to Mars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="space-y-4">
              <div className="text-4xl">🌍</div>
              <h3 className="text-xl font-bold text-white">Phase 1: Launch</h3>
              <p className="text-gray-400">Token launch on Solana, community building</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl">🌙</div>
              <h3 className="text-xl font-bold text-white">Phase 2: Moon</h3>
              <p className="text-gray-400">Exchange listings, partnerships, adoption</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl">🔴</div>
              <h3 className="text-xl font-bold text-white">Phase 3: Mars</h3>
              <p className="text-gray-400">Interplanetary integration, Mars commerce</p>
            </div>
          </div>
          <button className="btn-primary mt-12">
            Join the Mission
          </button>
        </div>
      </section>
    </>
  );
}
