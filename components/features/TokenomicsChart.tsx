'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/effects/ScrollReveal';
import { fadeInUp } from '@/utils/animations';

const data = [
  { name: 'Public Sale', value: 40, color: '#00f0ff' },
  { name: 'Liquidity Pool', value: 30, color: '#ff9500' },
  { name: 'Team & Development', value: 15, color: '#7c3aed' },
  { name: 'Marketing', value: 10, color: '#ffb347' },
  { name: 'Reserve', value: 5, color: '#00c4d4' }
];

const COLORS = data.map(item => item.color);

export default function TokenomicsChart() {
  return (
    <section className="section-container">
      <ScrollReveal variants={fadeInUp}>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">
            Tokenomics
          </h2>
          <p className="text-xl text-gray-400">
            Fair distribution for a sustainable space economy
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal variants={fadeInUp} delay={0.2}>
        <div className="terminal-card">
          <div className="terminal-header">
            <span className="terminal-dot terminal-dot-red" />
            <span className="terminal-dot terminal-dot-yellow" />
            <span className="terminal-dot terminal-dot-green" />
            <span className="ml-2">tokenomics_distribution.dat</span>
          </div>
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Chart */}
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                      animationBegin={0}
                      animationDuration={1000}
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(10, 14, 26, 0.95)',
                        border: '1px solid rgba(0, 240, 255, 0.3)',
                        borderRadius: '0',
                        fontFamily: 'var(--font-space-mono), monospace',
                        fontSize: '0.75rem',
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Legend */}
              <div className="space-y-3">
                {data.map((item, index) => (
                  <motion.div
                    key={item.name}
                    className="flex items-center justify-between p-3 border border-[#00f0ff]/10 hover:border-[#00f0ff]/30 transition-all cursor-pointer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-3 h-3"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="font-mono text-sm">{item.name}</span>
                    </div>
                    <span className="text-xl font-mono font-bold">{item.value}%</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Token Details */}
            <div className="mt-12 pt-8 border-t border-[#00f0ff]/10">
              <div className="grid md:grid-cols-3 gap-6 text-center font-mono">
                <div>
                  <div className="text-gray-500 text-xs mb-2 tracking-wider">MAX SUPPLY</div>
                  <div className="text-2xl font-bold text-[#00f0ff]">420,691,337</div>
                </div>
                <div>
                  <div className="text-gray-500 text-xs mb-2 tracking-wider">NETWORK</div>
                  <div className="text-2xl font-bold text-[#ff9500]">Solana</div>
                </div>
                <div>
                  <div className="text-gray-500 text-xs mb-2 tracking-wider">TAX</div>
                  <div className="text-2xl font-bold text-[#00f0ff]">0%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
