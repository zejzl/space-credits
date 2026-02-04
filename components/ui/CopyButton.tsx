'use client';

import { useState } from 'react';
import confetti from 'canvas-confetti';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

interface CopyButtonProps {
  text: string;
  label?: string;
  className?: string;
}

export default function CopyButton({ text, label = 'Copy', className = '' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      // Confetti celebration
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4757', '#2ed573', '#ffa502', '#5352ed']
      });

      // Toast notification
      toast.success('Copied to clipboard! 🚀');

      // Reset after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy');
    }
  };

  return (
    <motion.button
      onClick={handleCopy}
      className={`relative px-6 py-3 rounded-full font-bold text-white transition-all ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      data-testid="copy-button"
    >
      {copied ? '✓ Copied!' : label}
    </motion.button>
  );
}
