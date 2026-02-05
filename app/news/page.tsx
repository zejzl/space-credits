'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/effects/ScrollReveal';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import { newsArticles } from '@/data/news';
import { useState } from 'react';

const categoryColors = {
  announcement: 'bg-red-500/20 text-red-400 border-red-500/30',
  partnership: 'bg-green-500/20 text-green-400 border-green-500/30',
  development: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  community: 'bg-purple-500/20 text-purple-400 border-purple-500/30'
};

const categoryIcons = {
  announcement: '📢',
  partnership: '🤝',
  development: '⚙️',
  community: '🌟'
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
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              News & <span className="gradient-text">Updates</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Stay up to date with the latest Space Credits developments
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Category Filter */}
      <section className="section-container pt-0">
        <ScrollReveal variants={fadeInUp}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-white/20 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              All News
            </button>
            {Object.keys(categoryColors).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all capitalize ${
                  selectedCategory === category
                    ? categoryColors[category as keyof typeof categoryColors]
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {categoryIcons[category as keyof typeof categoryIcons]} {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Articles Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {filteredArticles.map((article, index) => (
            <ScrollReveal key={article.id} variants={fadeInUp} delay={index * 0.1}>
              <motion.article
                className="glass-effect-enhanced rounded-2xl p-6 h-full flex flex-col"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Category Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold border ${
                      categoryColors[article.category]
                    }`}
                  >
                    {categoryIcons[article.category]} {article.category}
                  </span>
                  <span className="text-sm text-gray-400">{article.date}</span>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold mb-3 line-clamp-2">
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-300 mb-4 line-clamp-3 flex-grow">
                  {article.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-sm text-gray-400">By {article.author}</span>
                  <motion.button
                    className="text-red-400 font-semibold hover:text-red-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Read More →
                  </motion.button>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </motion.div>

        {/* No articles message */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No articles found in this category.</p>
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="section-container">
        <ScrollReveal variants={fadeInUp}>
          <div className="glass-effect-enhanced rounded-3xl p-12 text-center border-2 border-red-500/30">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Never Miss an Update 📬
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our Telegram and Twitter for real-time updates, announcements, and community discussions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Telegram
              </motion.button>
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Follow on Twitter
              </motion.button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
