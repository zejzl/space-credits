import { Stat } from '@/types';

interface StatsGridProps {
  stats: Stat[];
}

export default function StatsGrid({ stats }: StatsGridProps) {
  return (
    <section className="section-container">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="glass-effect card-border p-8 text-center hover-lift group"
          >
            {/* Icon */}
            {stat.icon && (
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
            )}
            
            {/* Value */}
            <h3 className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:text-primary transition-colors">
              {stat.value}
            </h3>
            
            {/* Label */}
            <p className="text-gray-400 font-semibold uppercase text-sm tracking-wider">
              {stat.label}
            </p>

            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute inset-0 rounded-lg animate-glow" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
