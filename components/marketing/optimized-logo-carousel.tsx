'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { LogoItem } from './real-logo-data';

interface OptimizedLogoCarouselProps {
  title?: string;
  subtitle?: string;
  logos: LogoItem[];
  speed?: number;
  className?: string;
}

export function OptimizedLogoCarousel({ 
  title = "Trusted by digital marketing teams",
  subtitle,
  logos,
  speed = 40,
  className = ""
}: OptimizedLogoCarouselProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Expand logos to fill more space when we have few customers
  const expandedLogos = logos.length < 6 ? [...logos, ...logos, ...logos] : [...logos, ...logos];

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <section className={`py-16 bg-gray-50 ${className}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="flex justify-center items-center h-16">
            <div className="animate-pulse bg-gray-300 h-10 w-40 rounded" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      {/* Narrower container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Optimized Logo Carousel - Narrower with bigger logos */}
        <div className="relative overflow-hidden">
          <div 
            className="flex animate-scroll"
            style={{
              animationDuration: `${speed}s`,
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite'
            }}
          >
            {/* First set of logos */}
            <div className="flex items-center justify-center space-x-12 px-6 flex-shrink-0 min-w-full">
              {expandedLogos.map((logo, index) => (
                <div 
                  key={`first-${index}`}
                  className="flex items-center justify-center h-16 opacity-70 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                >
                  <Image
                    src={logo.logo}
                    alt={`${logo.name} - using Addocu for Google marketing audits`}
                    width={(logo.width || 120) * 1.4} // 40% bigger
                    height={(logo.height || 40) * 1.4} // 40% bigger
                    className="max-h-12 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                    priority={index < 3}
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Second set for infinite scroll effect */}
            <div className="flex items-center justify-center space-x-12 px-6 flex-shrink-0 min-w-full" aria-hidden="true">
              {expandedLogos.map((logo, index) => (
                <div 
                  key={`second-${index}`}
                  className="flex items-center justify-center h-16 opacity-70 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                >
                  <Image
                    src={logo.logo}
                    alt={`${logo.name} - using Addocu for Google marketing audits`}
                    width={(logo.width || 120) * 1.4}
                    height={(logo.height || 40) * 1.4}
                    className="max-h-12 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social proof text with adjusted numbers */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Join 100+ marketing professionals who save hours every month with automated auditing
          </p>
        </div>
      </div>
    </section>
  );
}
