'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PriceTicker() {
  const [price, setPrice] = useState(0.00042069);
  const [change, setChange] = useState(0);
  const [isIncreasing, setIsIncreasing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const changePercent = (Math.random() - 0.5) * 10; // -5% to +5%
      const newPrice = price * (1 + changePercent / 100);

      setChange(changePercent);
      setIsIncreasing(changePercent > 0);
      setPrice(newPrice);
    }, 3000);

    return () => clearInterval(interval);
  }, [price]);

  return (
    <div className="glass-effect-enhanced rounded-2xl p-8 text-center">
      <div className="text-gray-400 text-sm uppercase tracking-wider mb-2">
        Live Price
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={price}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="text-4xl md:text-5xl font-bold mb-2"
        >
          ${price.toFixed(8)}
        </motion.div>
      </AnimatePresence>
      <motion.div
        className={`text-lg font-semibold ${
          isIncreasing ? 'text-green-400' : 'text-red-400'
        }`}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.3 }}
      >
        {isIncreasing ? '▲' : '▼'} {Math.abs(change).toFixed(2)}%
      </motion.div>
      <div className="mt-4 text-xs text-gray-500">
        *Mock prices for demonstration
      </div>
    </div>
  );
}
