'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/effects/ScrollReveal';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import { newsArticles } from '@/data/news';
import { useState } from 'react';

const categoryConfig = {
  announcement: { bg: 'border-[#00f0ff]', text: 'text-[#00f0ff]', label: '[ANN]' },
  partnership: { bg: 'border-[#ff9500]', text: 'text-[#ff9500]', label: '[PRT]' },
  development: { bg: 'border-[#7c3aed]', text: 'text-[#7c3aed]', label: '[DEV]' },
  community: { bg: 'border-[#00f0ff]', text: 'text-[#00f0ff]', label: '[COM]' }
};

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredArticles = selectedCategory === 'all'
    ? newsArticles
    : newsArticles.filter(article => article.category === selectedCategory);

  return (
    <>
      {/* Hero section */}
      <section className="pt-32 pb-16 px-4 text-center">
        <ScrollReveal variants={fadeInUp}>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-mono font-bold text-white mb-6">
              News & <span className="gradient-text">Updates</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              Stay up to date with the latest Space Credits developments
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Category Filter */}
      <section className="section-container pt-0">
        <ScrollReveal variants={fadeInUp}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 font-mono text-xs tracking-wider border transition-all ${
                selectedCategory === 'all'
                  ? 'border-[#00f0ff] bg-[#00f0ff]/10 text-[#00f0ff]'
                  : 'border-gray-600 text-gray-400 hover:border-gray-400'
              }`}
            >
              [ALL] All News
            </button>
            {Object.entries(categoryConfig).map(([category, config]) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 font-mono text-xs tracking-wider border transition-all capitalize ${
                  selectedCategory === category
                    ? `${config.bg} ${config.text} bg-opacity-10`
                    : 'border-gray-600 text-gray-400 hover:border-gray-400'
                }`}
              >
                {config.label} {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Articles Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {filteredArticles.map((article, index) => {
            const config = categoryConfig[article.category as keyof typeof categoryConfig];
            return (
              <ScrollReveal key={article.id} variants={fadeInUp} delay={index * 0.1}>
                <motion.article
                  className={`terminal-card h-full flex flex-col border-2 ${config.bg}`}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="terminal-header">
                    <span className="terminal-dot terminal-dot-red" />
                    <span className="terminal-dot terminal-dot-yellow" />
                    <span className="terminal-dot terminal-dot-green" />
                    <span className="ml-2">{article.category}_article.md</span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    {/* Category Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`px-3 py-1 text-xs font-mono font-bold border ${config.bg} ${config.text}`}>
                        {config.label}
                      </span>
                      <span className="text-xs font-mono text-gray-500">{article.date}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-lg font-mono font-bold mb-3 line-clamp-2">
                      {article.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-400 mb-4 line-clamp-2 flex-grow text-sm">
                      {article.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#00f0ff]/10">
                      <span className="text-xs font-mono text-gray-500">by {article.author}</span>
                      <motion.button
                        className="text-[#00f0ff] font-mono text-xs hover:text-[#ff9500] transition-colors"
                        whileHover={{ x: 3 }}
                      >
                        Read {'>'}
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              </ScrollReveal>
            );
          })}
        </motion.div>

        {/* No articles message */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 font-mono">{"// No articles found in this category."}</p>
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="section-container">
        <ScrollReveal variants={fadeInUp}>
          <div className="terminal-card max-w-3xl mx-auto border-2 border-[#00f0ff]/30 inline-block w-full md:w-auto">
            <div className="terminal-header">
              <span className="terminal-dot terminal-dot-red" />
              <span className="terminal-dot terminal-dot-yellow" />
              <span className="terminal-dot terminal-dot-green" />
              <span className="ml-2">subscribe_now.sh</span>
            </div>
            <div className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4">
                Never Miss an Update
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                Join our Telegram and Twitter for real-time updates, announcements, and community discussions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  JOIN TELEGRAM
                </motion.button>
                <motion.button
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  FOLLOW ON TWITTER
                </motion.button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
