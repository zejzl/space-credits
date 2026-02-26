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

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f0ff', '#ff9500', '#7c3aed', '#ffffff']
      });

      toast.success('Copied to clipboard');

      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Failed to copy');
    }
  };

  return (
    <motion.button
      onClick={handleCopy}
      className={`relative px-6 py-3 font-mono font-bold text-sm tracking-wider transition-all ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      data-testid="copy-button"
    >
      {copied ? '[COPIED]' : label}
    </motion.button>
  );
}
