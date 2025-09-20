'use client';

import { useEffect, useRef } from 'react';

interface LogoItem {
  name: string;
  logo: string;
  width?: number;
  height?: number;
}

interface LogoCarouselProps {
  title?: string;
  subtitle?: string;
  logos: LogoItem[];
  speed?: number;
  className?: string;
}

export function LogoCarousel({ 
  title = "Trusted by digital marketing teams",
  subtitle,
  logos,
  speed = 40,
  className = ""
}: LogoCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Pausar animación al hacer hover
    const handleMouseEnter = () => {
      track.style.animationPlayState = 'paused';
    };

    const handleMouseLeave = () => {
      track.style.animationPlayState = 'running';
    };

    track.addEventListener('mouseenter', handleMouseEnter);
    track.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      track.removeEventListener('mouseenter', handleMouseEnter);
      track.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

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

        {/* Logo Carousel */}
        <div className="relative overflow-hidden">
          <div 
            ref={trackRef}
            className="flex animate-scroll"
            style={{
              animationDuration: `${speed}s`,
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite'
            }}
          >
            {/* Primera serie de logos */}
            <div className="flex items-center justify-center space-x-16 px-8 flex-shrink-0 min-w-full">
              {logos.map((logo, index) => (
                <div 
                  key={`first-${index}`}
                  className="flex items-center justify-center h-12 opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                >
                  <img
                    src={logo.logo}
                    alt={logo.name}
                    className="max-h-8 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                    width={logo.width}
                    height={logo.height}
                  />
                </div>
              ))}
            </div>

            {/* Segunda serie de logos (duplicada para efecto infinito) */}
            <div className="flex items-center justify-center space-x-16 px-8 flex-shrink-0 min-w-full" aria-hidden="true">
              {logos.map((logo, index) => (
                <div 
                  key={`second-${index}`}
                  className="flex items-center justify-center h-12 opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                >
                  <img
                    src={logo.logo}
                    alt={logo.name}
                    className="max-h-8 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                    width={logo.width}
                    height={logo.height}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Componente helper para crear fácilmente arrays de logos
export const createLogoArray = (logos: LogoItem[]): LogoItem[] => logos;
