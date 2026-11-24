'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/effects/ScrollReveal';
import { fadeInUp } from '@/utils/animations';
import { faqData } from '@/data/faq';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-container">
      <ScrollReveal variants={fadeInUp}>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">
            FAQ
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about Space Credits
          </p>
        </div>
      </ScrollReveal>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqData.map((item, index) => (
          <ScrollReveal key={index} variants={fadeInUp} delay={index * 0.05}>
            <motion.div
              className="terminal-card overflow-hidden"
              initial={false}
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-[#00f0ff]/5 transition-colors"
              >
                <span className="font-mono font-bold text-sm pr-4">{item.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#00f0ff] flex-shrink-0 font-mono text-sm"
                >
                  {openIndex === index ? '[-]' : '[+]'}
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-400 leading-relaxed border-t border-[#00f0ff]/10 pt-4 text-sm">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal variants={fadeInUp} delay={0.3}>
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4 font-mono text-sm">{"// Still have questions?"}</p>
          <motion.button
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            JOIN OUR TELEGRAM
          </motion.button>
        </div>
      </ScrollReveal>
    </section>
  );
}
