import { Metadata } from 'next';
import AboutSection from '@/components/AboutSection';
import StatsGrid from '@/components/StatsGrid';
import OurStory from '@/components/features/OurStory';
import UseCases from '@/components/features/UseCases';
import { content } from '@/data/content';

export const metadata: Metadata = {
  title: 'About Space Credits - Interplanetary Cryptocurrency',
  description: 'Learn about Space Credits, the first cryptocurrency designed for Mars and beyond. Built on Solana with a fixed supply of 420,691,337 tokens.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero section */}
      <section className="pt-32 pb-16 px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
          About <span className="gradient-text">Space Credits</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
          The first cryptocurrency ready for Mars
        </p>
      </section>

      <AboutSection content={content.about} />
      <StatsGrid stats={content.stats} />
      <OurStory />
      <UseCases />
      
      {/* Additional info */}
      <section className="section-container">
        <div className="glass-effect rounded-2xl p-8 md:p-12 border border-white/10">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">
            Why 420,691,337 tokens?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <span className="text-5xl font-black gradient-text">420</span>
              <p className="text-gray-400 mt-2">The classic</p>
            </div>
            <div>
              <span className="text-5xl font-black gradient-text">69</span>
              <p className="text-gray-400 mt-2">Nice</p>
            </div>
            <div>
              <span className="text-5xl font-black gradient-text">1337</span>
              <p className="text-gray-400 mt-2">Leet speak</p>
            </div>
          </div>
          <p className="text-gray-400 text-center mt-8">
            The perfect combination of internet culture in one supply number.
          </p>
        </div>
      </section>
    </>
  );
}
