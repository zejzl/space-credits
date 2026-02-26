import { Metadata } from 'next';
import FeatureList from '@/components/FeatureList';
import UseCases from '@/components/features/UseCases';
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
          <h1 className="text-5xl md:text-7xl font-mono font-bold text-white mb-6">
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

      {/* Use Cases */}
      <UseCases />

      {/* Roadmap teaser */}
      <section className="section-container">
        <div className="terminal-card inline-block">
          <div className="terminal-header">
            <span className="terminal-dot terminal-dot-red" />
            <span className="terminal-dot terminal-dot-yellow" />
            <span className="terminal-dot terminal-dot-green" />
            <span className="ml-2">mission_phases.txt</span>
          </div>
          <div className="p-12 text-center max-w-3xl">
            <h2 className="text-4xl font-mono font-bold text-white mb-6">
              The Journey to Mars
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="space-y-4 p-4 border border-[#00f0ff]/10">
                <div className="text-3xl font-mono font-bold text-[#00f0ff]">[1]</div>
                <h3 className="text-xl font-mono font-bold text-white">Launch</h3>
                <p className="text-gray-400 text-sm">Token launch on Solana, community building</p>
              </div>
              <div className="space-y-4 p-4 border border-[#00f0ff]/10">
                <div className="text-3xl font-mono font-bold text-[#ff9500]">[2]</div>
                <h3 className="text-xl font-mono font-bold text-white">Moon</h3>
                <p className="text-gray-400 text-sm">Exchange listings, partnerships, adoption</p>
              </div>
              <div className="space-y-4 p-4 border border-[#00f0ff]/10">
                <div className="text-3xl font-mono font-bold text-[#7c3aed]">[3]</div>
                <h3 className="text-xl font-mono font-bold text-white">Mars</h3>
                <p className="text-gray-400 text-sm">Interplanetary integration, Mars commerce</p>
              </div>
            </div>
            <button className="btn-primary mt-12">
              JOIN THE MISSION
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
