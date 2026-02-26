import { Chapter } from '@/types';

interface WhitepaperChaptersProps {
  chapters: Chapter[];
  title?: string;
}

export default function WhitepaperChapters({ chapters, title }: WhitepaperChaptersProps) {
  return (
    <section className="section-container">
      {/* Title */}
      {title && (
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-400 font-mono text-sm tracking-wider">
            // Read our comprehensive whitepaper
          </p>
        </div>
      )}

      {/* Chapters */}
      <div className="max-w-4xl mx-auto space-y-4">
        {chapters.map((chapter) => (
          <div
            key={chapter.number}
            className="terminal-card hover:translate-x-2 transition-transform duration-300 cursor-pointer group"
          >
            <div className="terminal-header">
              <span className="terminal-dot terminal-dot-red" />
              <span className="terminal-dot terminal-dot-yellow" />
              <span className="terminal-dot terminal-dot-green" />
              <span className="ml-2">chapter_{String(chapter.number).padStart(2, '0')}.md</span>
            </div>
            <div className="p-6">
              <div className="flex items-start space-x-6">
                {/* Chapter number */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 border border-[#00f0ff]/30 flex items-center justify-center group-hover:border-[#00f0ff] group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all">
                    <span className="text-xl font-mono font-bold text-[#00f0ff]">
                      {String(chapter.number).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Chapter content */}
                <div className="flex-1">
                  <h3 className="text-xl font-mono font-bold text-white mb-2 group-hover:text-[#00f0ff] transition-colors">
                    {chapter.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {chapter.description}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[#00f0ff]">
                  {'>>'}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Download button */}
      <div className="text-center mt-12">
        <button className="btn-primary">
          Download Full Whitepaper (PDF)
        </button>
      </div>
    </section>
  );
}
