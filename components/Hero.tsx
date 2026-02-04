import Link from 'next/link';
import { HeroContent } from '@/types';

interface HeroProps {
  content: HeroContent;
}

export default function Hero({ content }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl animate-float opacity-20">🚀</div>
        <div className="absolute top-40 right-20 text-8xl animate-float opacity-10" style={{ animationDelay: '1s' }}>⭐</div>
        <div className="absolute bottom-32 left-1/4 text-7xl animate-float opacity-15" style={{ animationDelay: '0.5s' }}>🌙</div>
        <div className="absolute bottom-20 right-1/3 text-6xl animate-float opacity-10" style={{ animationDelay: '1.5s' }}>🪐</div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Title with glow effect */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black mb-4 text-white drop-shadow-2xl animate-glow">
            {content.title}
          </h1>
          <div className="inline-block">
            <p className="text-2xl md:text-4xl gradient-text font-bold">
              {content.tagline}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          {content.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href={content.ctaButtons.primary.href}>
            <button className="btn-primary w-full sm:w-auto">
              {content.ctaButtons.primary.text}
            </button>
          </Link>
          <Link href={content.ctaButtons.secondary.href}>
            <button className="btn-secondary w-full sm:w-auto">
              {content.ctaButtons.secondary.text}
            </button>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-8 h-8 text-white opacity-50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
