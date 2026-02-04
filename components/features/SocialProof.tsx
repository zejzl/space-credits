'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function SocialProof() {
  return (
    <motion.div
      className="bg-gradient-to-r from-red-500/20 to-green-500/20 border-y border-red-500/30 py-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🚀</span>
            <div>
              <div className="text-2xl font-bold">
                <AnimatedCounter end={1337} suffix="+" />
              </div>
              <div className="text-sm text-gray-300">Holders joined today</div>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-white/20" />

          <div className="flex items-center gap-3">
            <span className="text-3xl">⭐</span>
            <div>
              <div className="text-2xl font-bold">
                <AnimatedCounter end={42069} suffix="+" />
              </div>
              <div className="text-sm text-gray-300">Total holders</div>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-white/20" />

          <div className="flex items-center gap-3">
            <span className="text-3xl">💎</span>
            <div>
              <div className="text-2xl font-bold">
                <AnimatedCounter end={95} suffix="%" />
              </div>
              <div className="text-sm text-gray-300">Diamond hands</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
