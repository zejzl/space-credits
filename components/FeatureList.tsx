import { Feature } from '@/types';

interface FeatureListProps {
  features: Feature[];
  title?: string;
  description?: string;
}

export default function FeatureList({ features, title, description }: FeatureListProps) {
  return (
    <section className="section-container">
      {/* Section header */}
      {title && (
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-white mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Features grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="terminal-card hover-lift group"
          >
            <div className="terminal-header">
              <span className="terminal-dot terminal-dot-red" />
              <span className="terminal-dot terminal-dot-yellow" />
              <span className="terminal-dot terminal-dot-green" />
              <span className="ml-2">feature_{String(index).padStart(2, '0')}</span>
            </div>
            <div className="p-8">
              {/* Icon */}
              {feature.icon && (
                <div className="font-mono text-lg mb-4 text-[#00f0ff] group-hover:text-[#ff9500] transition-colors duration-300">
                  {feature.icon}
                </div>
              )}

              {/* Title */}
              <h3 className="text-2xl font-mono font-bold text-white mb-3 group-hover:text-[#00f0ff] transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
