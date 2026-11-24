'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PriceTicker() {
  const [price, setPrice] = useState(0.00042069);
  const [change, setChange] = useState(0);
  const [isIncreasing, setIsIncreasing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const changePercent = (Math.random() - 0.5) * 10;
      const newPrice = price * (1 + changePercent / 100);

      setChange(changePercent);
      setIsIncreasing(changePercent > 0);
      setPrice(newPrice);
    }, 3000);

    return () => clearInterval(interval);
  }, [price]);

  return (
    <div className="terminal-card">
      <div className="terminal-header">
        <span className="terminal-dot terminal-dot-red" />
        <span className="terminal-dot terminal-dot-yellow" />
        <span className="terminal-dot terminal-dot-green" />
        <span className="ml-2">price_feed.live</span>
      </div>
      <div className="p-8 text-center">
        <div className="text-gray-500 text-xs font-mono uppercase tracking-widest mb-3">
          {"// Live Price Feed"}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={price}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-4xl md:text-5xl font-mono font-bold mb-2 text-white"
          >
            ${price.toFixed(8)}
          </motion.div>
        </AnimatePresence>
        <motion.div
          className={`text-lg font-mono font-semibold ${
            isIncreasing ? 'text-[#00f0ff]' : 'text-[#ff9500]'
          }`}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.3 }}
        >
          {isIncreasing ? '+' : '-'}{Math.abs(change).toFixed(2)}%
        </motion.div>
        <div className="mt-4 text-xs text-gray-600 font-mono">
          *Mock prices for demonstration
        </div>
      </div>
    </div>
  );
}
