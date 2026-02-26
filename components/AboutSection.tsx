import { AboutContent } from '@/types';

interface AboutSectionProps {
  content: AboutContent;
}

export default function AboutSection({ content }: AboutSectionProps) {
  return (
    <section className="section-container">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-mono font-bold text-white mb-8 text-center">
          {content.title}
        </h2>

        {/* Description */}
        <div className="terminal-card">
          <div className="terminal-header">
            <span className="terminal-dot terminal-dot-red" />
            <span className="terminal-dot terminal-dot-yellow" />
            <span className="terminal-dot terminal-dot-green" />
            <span className="ml-2">about.txt</span>
          </div>
          <div className="p-8 md:p-12">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
              {content.description}
            </p>

            {/* Decorative terminal elements */}
            <div className="mt-8 flex justify-center space-x-8 font-mono text-sm text-[#00f0ff]/40">
              <span>[SOL]</span>
              <span>[MARS]</span>
              <span>[420M]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
