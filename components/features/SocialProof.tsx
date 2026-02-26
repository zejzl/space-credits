'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function SocialProof() {
  return (
    <motion.div
      className="bg-[#0a0e1a]/80 border-y border-[#00f0ff]/10 py-5"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center font-mono">
          <div className="flex items-center gap-3">
            <span className="text-[#00f0ff] text-sm">[LIVE]</span>
            <div>
              <div className="text-xl font-bold text-white">
                <AnimatedCounter end={1337} suffix="+" />
              </div>
              <div className="text-xs text-gray-500 tracking-wider">JOINED TODAY</div>
            </div>
          </div>

          <div className="hidden md:block w-px h-10 bg-[#00f0ff]/10" />

          <div className="flex items-center gap-3">
            <span className="text-[#ff9500] text-sm">[ALL]</span>
            <div>
              <div className="text-xl font-bold text-white">
                <AnimatedCounter end={42069} suffix="+" />
              </div>
              <div className="text-xs text-gray-500 tracking-wider">TOTAL HOLDERS</div>
            </div>
          </div>

          <div className="hidden md:block w-px h-10 bg-[#00f0ff]/10" />

          <div className="flex items-center gap-3">
            <span className="text-[#7c3aed] text-sm">[DIA]</span>
            <div>
              <div className="text-xl font-bold text-white">
                <AnimatedCounter end={95} suffix="%" />
              </div>
              <div className="text-xs text-gray-500 tracking-wider">DIAMOND HANDS</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
