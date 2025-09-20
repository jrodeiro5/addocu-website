// Google Tools Icons as React Components
import { type SVGProps } from 'react';

export function GoogleAnalyticsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="24" height="24" rx="4" fill="currentColor"/>
      <path 
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" 
        fill="white"
      />
      <circle cx="8" cy="16" r="1.5" fill="white"/>
      <circle cx="12" cy="12" r="2" fill="white"/>
      <circle cx="16" cy="8" r="1.5" fill="white"/>
      <path 
        d="M8 14.5v-2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v2M12 10v-1c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v1" 
        stroke="white" 
        strokeWidth="1" 
        fill="none"
      />
    </svg>
  );
}

export function GoogleTagManagerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="24" height="24" rx="4" fill="currentColor"/>
      <rect x="4" y="4" width="16" height="16" rx="2" fill="white"/>
      <rect x="6" y="6" width="12" height="12" rx="1" fill="currentColor"/>
      <rect x="8" y="8" width="8" height="8" rx="1" fill="white"/>
      <rect x="10" y="10" width="4" height="4" fill="currentColor"/>
      <text x="12" y="14" textAnchor="middle" fill="white" fontSize="3" fontWeight="bold">
        TAG
      </text>
    </svg>
  );
}

export function LookerStudioIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="24" height="24" rx="4" fill="currentColor"/>
      <rect x="4" y="7" width="16" height="1.5" fill="white"/>
      <rect x="4" y="10" width="16" height="1.5" fill="white"/>
      <rect x="4" y="13" width="16" height="1.5" fill="white"/>
      <rect x="4" y="16" width="16" height="1.5" fill="white"/>
      <circle cx="5.5" cy="5" r="0.75" fill="white"/>
      <circle cx="8" cy="5" r="0.75" fill="white"/>
      <circle cx="10.5" cy="5" r="0.75" fill="white"/>
      <rect x="14" y="4" width="5" height="2" rx="0.5" fill="white"/>
      <path d="M6 19l4-4h6l-4 4H6z" fill="white"/>
    </svg>
  );
}

// Tool data with React component icons
export interface ToolDataWithIcon {
  id: string;
  name: string;
  description: string;
  IconComponent: React.ComponentType<SVGProps<SVGSVGElement>>;
  backgroundColor: string;
  features: string[];
}

export const googleToolsWithIcons: ToolDataWithIcon[] = [
  {
    id: 'ga4',
    name: 'Google Analytics 4',
    description: 'Complete GA4 audit with properties, custom dimensions, conversion events, audiences, and data retention settings.',
    IconComponent: GoogleAnalyticsIcon,
    backgroundColor: '#FF6B35',
    features: [
      'Properties & Data Streams inventory',
      'Custom Dimensions & Metrics listing',
      'Conversion Events configuration',
      'Audiences with creation dates',
      'Data Retention Settings analysis'
    ]
  },
  {
    id: 'gtm',
    name: 'Google Tag Manager',
    description: 'Deep dive into containers, tags, triggers, and variables with complete mapping and version analysis.',
    IconComponent: GoogleTagManagerIcon,
    backgroundColor: '#246FDB',
    features: [
      'Container inventory with status',
      'Tags, Triggers & Variables mapping',
      'Firing status analysis',
      'Version comparison',
      'Multi-workspace support'
    ]
  },
  {
    id: 'looker-studio',
    name: 'Looker Studio',
    description: 'Report census with owners, sharing settings, data sources, and comprehensive usage analytics.',
    IconComponent: LookerStudioIcon,
    backgroundColor: '#4285F4',
    features: [
      'Report inventory with owners',
      'Sharing settings & permissions',
      'Data sources mapping',
      'Refresh status monitoring',
      'Usage statistics & insights'
    ]
  }
];
