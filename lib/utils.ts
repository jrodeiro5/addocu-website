import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Addocu Brand Colors
export const addocuColors = {
  primary: '#1A5DBB',
  primaryLight: '#00AEEF', 
  success: '#4CAF50',
  successLight: '#8BC34A',
  white: '#FFFFFF',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  }
} as const;

// Utility functions for consistent styling
export function getAddocuButtonStyles(variant: 'primary' | 'secondary' | 'outline' = 'primary') {
  const baseStyles = "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  switch (variant) {
    case 'primary':
      return cn(baseStyles, "bg-[#1A5DBB] text-white hover:bg-[#1A5DBB]/90 focus:ring-[#1A5DBB]");
    case 'secondary':
      return cn(baseStyles, "bg-[#4CAF50] text-white hover:bg-[#4CAF50]/90 focus:ring-[#4CAF50]");
    case 'outline':
      return cn(baseStyles, "border-2 border-[#1A5DBB] text-[#1A5DBB] hover:bg-[#1A5DBB] hover:text-white focus:ring-[#1A5DBB]");
    default:
      return cn(baseStyles, "bg-[#1A5DBB] text-white hover:bg-[#1A5DBB]/90 focus:ring-[#1A5DBB]");
  }
}

export function getAddocuInputStyles() {
  return "block w-full rounded-full border border-gray-300 px-3 py-2 placeholder-gray-500 shadow-sm focus:border-[#1A5DBB] focus:outline-none focus:ring-2 focus:ring-[#1A5DBB] sm:text-sm";
}

// SEO and Analytics helpers
export function generateStructuredData(page: 'home' | 'about' | 'pricing') {
  const baseData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Addocu",
    "description": "Free and open-source Google Sheets Add-on for digital marketers",
    "url": "https://addocu.com",
    "logo": "https://addocu.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hola@addocu.com",
      "contactType": "customer service"
    }
  };

  switch (page) {
    case 'home':
      return {
        ...baseData,
        "@type": "SoftwareApplication",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web Browser",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      };
    default:
      return baseData;
  }
}
