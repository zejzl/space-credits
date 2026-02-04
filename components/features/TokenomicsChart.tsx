'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/effects/ScrollReveal';
import { fadeInUp } from '@/utils/animations';

const data = [
  { name: 'Public Sale', value: 40, color: '#ff4757' },
  { name: 'Liquidity Pool', value: 30, color: '#2ed573' },
  { name: 'Team & Development', value: 15, color: '#ffa502' },
  { name: 'Marketing', value: 10, color: '#5352ed' },
  { name: 'Reserve', value: 5, color: '#ff6348' }
];

const COLORS = data.map(item => item.color);

export default function TokenomicsChart() {
  return (
    <section className="section-container">
      <ScrollReveal variants={fadeInUp}>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tokenomics 📊
          </h2>
          <p className="text-xl text-gray-300">
            Fair distribution for a sustainable space economy
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal variants={fadeInUp} delay={0.2}>
        <div className="glass-effect-enhanced rounded-3xl p-8 md:p-12">
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
                      backgroundColor: 'rgba(30, 30, 46, 0.95)',
                      border: '1px solid rgba(255, 71, 87, 0.3)',
                      borderRadius: '12px',
                      backdropFilter: 'blur(10px)'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="space-y-4">
              {data.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="flex items-center justify-between p-4 rounded-xl glass-effect hover-lift cursor-pointer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="font-semibold">{item.name}</span>
                  </div>
                  <span className="text-2xl font-bold">{item.value}%</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Token Details */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-gray-400 text-sm mb-2">Max Supply</div>
                <div className="text-2xl font-bold">420,691,337</div>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-2">Network</div>
                <div className="text-2xl font-bold">Solana</div>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-2">Tax</div>
                <div className="text-2xl font-bold text-green-400">0%</div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
