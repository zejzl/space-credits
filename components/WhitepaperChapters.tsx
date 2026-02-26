'use client';

import { useState } from 'react';
import { Chapter } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';

interface WhitepaperChaptersProps {
  chapters: Chapter[];
  title?: string;
}

export default function WhitepaperChapters({ chapters, title }: WhitepaperChaptersProps) {
  const [openChapter, setOpenChapter] = useState<number | null>(null);

  const toggle = (num: number) => {
    setOpenChapter(openChapter === num ? null : num);
  };

  return (
    <section className="section-container">
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

      <div className="max-w-4xl mx-auto space-y-4">
        {chapters.map((chapter) => {
          const isOpen = openChapter === chapter.number;
          return (
            <div key={chapter.number}>
              <div
                onClick={() => toggle(chapter.number)}
                className={`terminal-card transition-all duration-300 cursor-pointer group ${
                  isOpen
                    ? 'ring-1 ring-[#00f0ff]/40 shadow-[0_0_20px_rgba(0,240,255,0.1)]'
                    : 'hover:translate-x-2'
                }`}
              >
                <div className="terminal-header">
                  <span className="terminal-dot terminal-dot-red" />
                  <span className="terminal-dot terminal-dot-yellow" />
                  <span className="terminal-dot terminal-dot-green" />
                  <span className="ml-2">chapter_{String(chapter.number).padStart(2, '0')}.md</span>
                  <span className="ml-auto font-mono text-xs text-gray-500">
                    {isOpen ? '[OPEN]' : '[CLOSED]'}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className={`w-14 h-14 border flex items-center justify-center transition-all ${
                        isOpen
                          ? 'border-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.3)] bg-[#00f0ff]/5'
                          : 'border-[#00f0ff]/30 group-hover:border-[#00f0ff] group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                      }`}>
                        <span className="text-xl font-mono font-bold text-[#00f0ff]">
                          {String(chapter.number).padStart(2, '0')}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className={`text-xl font-mono font-bold mb-2 transition-colors ${
                        isOpen ? 'text-[#00f0ff]' : 'text-white group-hover:text-[#00f0ff]'
                      }`}>
                        {chapter.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-sm">
                        {chapter.description}
                      </p>
                    </div>

                    <div className="flex-shrink-0 font-mono text-[#00f0ff] transition-transform duration-300"
                      style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
                    >
                      {'>>'}
                    </div>
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {isOpen && chapter.content && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="mx-4 border-l border-r border-b border-[#00f0ff]/10 bg-[#0a0e1a]/80 backdrop-blur-sm">
                      <div className="p-8 space-y-4">
                        <div className="font-mono text-xs text-[#00f0ff]/50 mb-6 pb-4 border-b border-[#00f0ff]/10">
                          {'>'} cat chapter_{String(chapter.number).padStart(2, '0')}.md | reading...
                        </div>
                        {chapter.content.map((paragraph, i) => {
                          const isHeading = paragraph === paragraph.toUpperCase() && paragraph.length < 40 && !paragraph.startsWith('>>');
                          const isBullet = paragraph.startsWith('>>');

                          if (isHeading) {
                            return (
                              <h4 key={i} className="font-mono text-sm font-bold text-[#ff9500] mt-6 mb-2 tracking-wider">
                                {paragraph}
                              </h4>
                            );
                          }

                          if (isBullet) {
                            return (
                              <div key={i} className="flex space-x-3 pl-4 py-1">
                                <span className="text-[#00f0ff] font-mono flex-shrink-0">{'>>'}</span>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                  {paragraph.replace(/^>>\s*/, '')}
                                </p>
                              </div>
                            );
                          }

                          return (
                            <p key={i} className="text-gray-400 text-sm leading-relaxed font-mono">
                              {paragraph}
                            </p>
                          );
                        })}
                        <div className="font-mono text-xs text-[#00f0ff]/30 mt-6 pt-4 border-t border-[#00f0ff]/10">
                          // end of chapter {String(chapter.number).padStart(2, '0')}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <button className="btn-primary">
          Download Full Whitepaper (PDF)
        </button>
      </div>
    </section>
  );
}
