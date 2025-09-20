'use client';

import type { LogoItem } from './logo-data';

interface SimpleLogoCarouselProps {
  title?: string;
  subtitle?: string;
  logos: LogoItem[];
  className?: string;
}

export function SimpleLogoCarousel({ 
  title = "Trusted by digital marketing teams",
  subtitle,
  logos,
  className = ""
}: SimpleLogoCarouselProps) {
  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Static Logo Grid */}
        <div className="flex justify-center items-center flex-wrap gap-8 opacity-60">
          {logos.slice(0, 6).map((logo, index) => (
            <div 
              key={index}
              className="flex items-center justify-center h-12 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={logo.logo}
                alt={logo.name}
                className="max-h-8 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                width={logo.width}
                height={logo.height}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
