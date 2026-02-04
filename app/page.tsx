import Hero from '@/components/Hero';
import StatsGrid from '@/components/StatsGrid';
import { content } from '@/data/content';

export default function Home() {
  return (
    <>
      <Hero content={content.hero} />
      <StatsGrid stats={content.stats} />
      
      {/* Quick CTA Section */}
      <section className="section-container text-center">
        <div className="glass-effect rounded-2xl p-12 border border-white/10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to go to Mars? 🚀
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of space enthusiasts who believe in the future of interplanetary commerce.
          </p>
          <button className="btn-primary">
            Get Space Credits Now
          </button>
        </div>
      </section>
    </>
  );
}
