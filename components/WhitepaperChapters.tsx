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
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-400">
            Read our comprehensive whitepaper
          </p>
        </div>
      )}

      {/* Chapters */}
      <div className="max-w-4xl mx-auto space-y-6">
        {chapters.map((chapter) => (
          <div
            key={chapter.number}
            className="glass-effect rounded-xl p-8 border border-white/10 hover:translate-x-3 transition-transform duration-300 cursor-pointer group"
          >
            <div className="flex items-start space-x-6">
              {/* Chapter number */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-black text-white">
                    {chapter.number}
                  </span>
                </div>
              </div>

              {/* Chapter content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {chapter.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {chapter.description}
                </p>
              </div>

              {/* Arrow indicator */}
              <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  className="w-6 h-6 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
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
