import { AboutContent } from '@/types';

interface AboutSectionProps {
  content: AboutContent;
}

export default function AboutSection({ content }: AboutSectionProps) {
  return (
    <section className="section-container">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 text-center">
          {content.title}
        </h2>

        {/* Description */}
        <div className="glass-effect rounded-2xl p-8 md:p-12 border border-white/10">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
            {content.description}
          </p>

          {/* Decorative elements */}
          <div className="mt-8 flex justify-center space-x-8 text-4xl">
            <span className="animate-float">🌌</span>
            <span className="animate-float" style={{ animationDelay: '0.5s' }}>🚀</span>
            <span className="animate-float" style={{ animationDelay: '1s' }}>🔴</span>
          </div>
        </div>
      </div>
    </section>
  );
}
