import { Metadata } from 'next';
import WhitepaperChapters from '@/components/WhitepaperChapters';
import DetailedTokenomics from '@/components/features/DetailedTokenomics';
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
          <h1 className="text-5xl md:text-7xl font-mono font-bold text-white mb-6">
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

      {/* Detailed Tokenomics */}
      <DetailedTokenomics />

      {/* Executive Summary */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="terminal-card">
            <div className="terminal-header">
              <span className="terminal-dot terminal-dot-red" />
              <span className="terminal-dot terminal-dot-yellow" />
              <span className="terminal-dot terminal-dot-green" />
              <span className="ml-2">executive_summary.md</span>
            </div>
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-mono font-bold text-white mb-6 text-center">
                Executive Summary
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed font-mono text-sm">
                <p>
                  Space Credits represents a paradigm shift in cryptocurrency design - the first token built specifically for interplanetary commerce. As humanity prepares for Mars colonization, we need a currency that works across planets.
                </p>
                <p>
                  Built on Solana for speed and efficiency, Space Credits features a fixed supply of 420,691,337 tokens (a perfect combination of internet culture: 420 + 69 + 1337). This ensures scarcity while providing enough supply for global - and eventually interplanetary - adoption.
                </p>
                <p>
                  Our roadmap includes partnerships with space technology companies, integration with future Mars infrastructure, and community-driven development. Space Credits isn't just a memecoin - it's the currency of humanity's multi-planetary future.
                </p>
              </div>

              {/* Quick facts */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-[#00f0ff]/10">
                <div className="text-center">
                  <div className="text-2xl font-mono font-bold gradient-text">420,691,337</div>
                  <div className="text-xs text-gray-500 mt-1 font-mono">MAX SUPPLY</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-mono font-bold gradient-text">Solana</div>
                  <div className="text-xs text-gray-500 mt-1 font-mono">BLOCKCHAIN</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-mono font-bold gradient-text">100%</div>
                  <div className="text-xs text-gray-500 mt-1 font-mono">COMMUNITY</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-mono font-bold gradient-text">Mars</div>
                  <div className="text-xs text-gray-500 mt-1 font-mono">DESTINATION</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
