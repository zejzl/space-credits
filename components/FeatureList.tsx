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
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
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
            className="bg-black/30 backdrop-blur-sm rounded-xl p-8 border-l-4 border-secondary hover-lift group"
          >
            {/* Icon */}
            {feature.icon && (
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
            )}

            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
