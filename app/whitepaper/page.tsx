import { Metadata } from 'next';
import WhitepaperChapters from '@/components/WhitepaperChapters';
import { content } from '@/data/content';

export const metadata: Metadata = {
  title: 'Whitepaper - Space Credits',
  description: 'Read the complete Space Credits whitepaper. Learn about our tokenomics, technology, and roadmap to Mars.',
};

export default function WhitepaperPage() {
  return (
    <>
      {/* Hero section */}
      <section className="pt-32 pb-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            <span className="gradient-text">Whitepaper</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            A comprehensive guide to Space Credits technology, economics, and vision
          </p>
        </div>
      </section>

      {/* Chapters */}
      <WhitepaperChapters
        chapters={content.whitepaper.chapters}
      />

      {/* Executive Summary */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 md:p-12 border border-white/10">
            <h2 className="text-3xl font-black text-white mb-6">
              Executive Summary
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Space Credits represents a paradigm shift in cryptocurrency design—the first token 
                built specifically for interplanetary commerce. As humanity prepares for Mars colonization, 
                we need a currency that works across planets.
              </p>
              <p>
                Built on Solana for speed and efficiency, Space Credits features a fixed supply of 
                420,691,337 tokens (a perfect combination of internet culture: 420 + 69 + 1337). 
                This ensures scarcity while providing enough supply for global—and eventually 
                interplanetary—adoption.
              </p>
              <p>
                Our roadmap includes partnerships with space technology companies, integration with 
                future Mars infrastructure, and community-driven development. Space Credits isn&apos;t 
                just a memecoin—it&apos;s the currency of humanity&apos;s multi-planetary future.
              </p>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">420,691,337</div>
                <div className="text-sm text-gray-400 mt-1">Max Supply</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">Solana</div>
                <div className="text-sm text-gray-400 mt-1">Blockchain</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">100%</div>
                <div className="text-sm text-gray-400 mt-1">Community</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">Mars</div>
                <div className="text-sm text-gray-400 mt-1">Destination</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
