'use client';

import { useTheme } from 'next-themes';
import { useSyncExternalStore } from 'react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  // false on the server and during hydration, true afterwards
  const mounted = useSyncExternalStore(() => () => {}, () => true, () => false);

  if (!mounted) {
    return null;
  }

  const cycleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('mars');
    } else {
      setTheme('dark');
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case 'dark':
        return 'DRK';
      case 'light':
        return 'LGT';
      case 'mars':
        return 'MRS';
      default:
        return 'DRK';
    }
  };

  return (
    <motion.button
      onClick={cycleTheme}
      className="p-2 border border-[#00f0ff]/20 hover:border-[#00f0ff]/50 transition-all font-mono text-xs text-[#00f0ff] tracking-wider"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={`Current theme: ${theme}`}
    >
      [{getThemeLabel()}]
    </motion.button>
  );
}
