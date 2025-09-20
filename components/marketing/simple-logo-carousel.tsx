'use client';

import type { LogoItem } from './logo-data';

interface LogoDisplayProps {
  logo: LogoItem;
  className?: string;
}

// Component that handles both SVG strings and image URLs
function LogoDisplay({ logo, className = "" }: LogoDisplayProps) {
  // Check if it's an SVG string
  if (logo.logo.includes('<svg')) {
    return (
      <div 
        className={`flex items-center justify-center ${className}`}
        dangerouslySetInnerHTML={{ __html: logo.logo }}
        style={{ width: logo.width, height: logo.height }}
      />
    );
  }

  // Fallback for image URLs
  return (
    <img
      src={logo.logo}
      alt={logo.name}
      className={`max-h-8 w-auto ${className}`}
      width={logo.width}
      height={logo.height}
      loading="lazy"
      onError={(e) => {
        // Fallback text if image fails to load
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
        const parent = target.parentElement;
        if (parent) {
          parent.innerHTML = `<div class="px-4 py-2 bg-gray-200 rounded text-gray-600 text-sm font-medium">${logo.name}</div>`;
        }
      }}
    />
  );
}

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

        {/* Logo Grid with improved spacing */}
        <div className="flex justify-center items-center flex-wrap gap-12 opacity-70">
          {logos.slice(0, 6).map((logo, index) => (
            <div 
              key={index}
              className="flex items-center justify-center h-12 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
            >
              <LogoDisplay 
                logo={logo} 
                className="filter grayscale hover:grayscale-0 transition-all duration-300" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
