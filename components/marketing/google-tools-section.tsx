'use client';

import Image from 'next/image';
import { useState } from 'react';
import { googleToolsData, type ToolData } from './tools-data';
import { BarChart3, Settings, FileSpreadsheet } from 'lucide-react';

// Fallback icons mapping
const fallbackIcons = {
  'ga4': BarChart3,
  'gtm': Settings,
  'looker-studio': FileSpreadsheet,
};

interface ToolCardProps {
  tool: ToolData;
  index: number;
}

function ToolCard({ tool, index }: ToolCardProps) {
  const [imageError, setImageError] = useState(false);
  const FallbackIcon = fallbackIcons[tool.id as keyof typeof fallbackIcons];

  return (
    <div 
      className={`relative bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 ${
        index === 1 ? 'mt-10 lg:mt-0' : 'mt-10 lg:mt-0'
      }`}
    >
      {/* Logo Container */}
      <div className="mb-6">
        <div 
          className="inline-flex items-center justify-center w-16 h-16 rounded-full shadow-sm ring-1 ring-black/5"
          style={{ backgroundColor: `${tool.backgroundColor}10` }} // 10 = ~6% opacity
        >
          <div 
            className="flex items-center justify-center w-12 h-12 rounded-full shadow-inner"
            style={{ backgroundColor: tool.backgroundColor }}
          >
            {!imageError ? (
              <Image
                src={tool.logo.src}
                alt={tool.logo.alt}
                width={tool.logo.width}
                height={tool.logo.height}
                className="w-8 h-8 object-contain filter brightness-0 invert"
                onError={() => setImageError(true)}
                priority={index < 3}
              />
            ) : FallbackIcon ? (
              <FallbackIcon className="w-6 h-6 text-white" />
            ) : (
              <div className="w-6 h-6 bg-white rounded opacity-80" />
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
            {tool.name}
          </h3>
          <p className="text-gray-600 mt-2 leading-relaxed">
            {tool.description}
          </p>
        </div>

        {/* Feature List */}
        <div className="space-y-3">
          {tool.features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-start space-x-3">
              <div 
                className="w-2 h-2 rounded-full mt-2 flex-shrink-0 ring-2 ring-white shadow-sm"
                style={{ backgroundColor: tool.backgroundColor }}
              />
              <span className="text-sm text-gray-600 leading-relaxed">
                {feature}
              </span>
            </div>
          ))}
          {tool.features.length > 3 && (
            <div className="flex items-center space-x-2 mt-3 pt-2 border-t border-gray-100">
              <span 
                className="text-sm font-medium"
                style={{ color: tool.backgroundColor }}
              >
                +{tool.features.length - 3} more features
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Hover Effect Border */}
      <div 
        className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-opacity-30 transition-all duration-300 pointer-events-none"
        style={{ borderColor: tool.backgroundColor }}
      />

      {/* Subtle gradient overlay on hover */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"
        style={{ backgroundColor: tool.backgroundColor }}
      />
    </div>
  );
}

interface GoogleToolsSectionProps {
  title?: string;
  subtitle?: string;
  variant?: 'default' | 'compact';
}

export function GoogleToolsSection({ 
  title = "Complete Google Marketing Stack Audit",
  subtitle = "Automate the painful process of documenting your entire Google ecosystem with detailed metadata pulled directly into your spreadsheet.",
  variant = 'default'
}: GoogleToolsSectionProps) {
  if (variant === 'compact') {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Supported Google Tools
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {googleToolsData.map((tool, index) => (
              <div key={tool.id} className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
                <div 
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: tool.backgroundColor }}
                >
                  <Image
                    src={tool.logo.src}
                    alt={tool.logo.alt}
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain filter brightness-0 invert"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{tool.name}</h3>
                  <p className="text-sm text-gray-500">Complete audit & documentation</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 xl:gap-8">
          {googleToolsData.map((tool, index) => (
            <ToolCard 
              key={tool.id} 
              tool={tool} 
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-600">Free & Open Source</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600">No API Limits</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-gray-600">Community Driven</span>
            </div>
          </div>
          <p className="text-gray-600 mt-4 text-sm">
            All tools supported in a single Google Sheets Add-on
          </p>
        </div>
      </div>
    </section>
  );
}

// Alternative version with dark theme (like your reference image)
export function GoogleToolsSectionDark() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Additional Learning
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Master your Google marketing stack with these comprehensive tools
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {googleToolsData.map((tool, index) => (
            <div 
              key={tool.id}
              className="bg-gray-800 rounded-xl border border-gray-700 p-6 hover:bg-gray-750 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div 
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: tool.backgroundColor }}
                >
                  <Image
                    src={tool.logo.src}
                    alt={tool.logo.alt}
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain filter brightness-0 invert"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {tool.name} Audit
                  </h3>
                  <p className="text-blue-400 text-sm font-medium mt-1">
                    Addocu Platform
                  </p>
                  <div className="mt-2">
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">
                      Free Tool
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
