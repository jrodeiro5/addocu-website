// Google Tools Data with Real Logos
export interface ToolData {
  id: string;
  name: string;
  description: string;
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  backgroundColor: string;
  features: string[];
}

export const googleToolsData: ToolData[] = [
  {
    id: 'ga4',
    name: 'Google Analytics 4',
    description: 'Complete GA4 audit with properties, custom dimensions, conversion events, audiences, and data retention settings.',
    logo: {
      src: '/images/tools/google-analytics-logo.svg',
      alt: 'Google Analytics 4 Logo',
      width: 32,
      height: 32,
    },
    backgroundColor: '#FF6B35', // GA orange color
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
    logo: {
      src: '/images/tools/google-tag-manager-logo.svg',
      alt: 'Google Tag Manager Logo',
      width: 32,
      height: 32,
    },
    backgroundColor: '#246FDB', // GTM blue color
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
    logo: {
      src: '/images/tools/looker-studio-logo.svg',
      alt: 'Looker Studio Logo',
      width: 32,
      height: 32,
    },
    backgroundColor: '#4285F4', // Looker Studio blue
    features: [
      'Report inventory with owners',
      'Sharing settings & permissions',
      'Data sources mapping',
      'Refresh status monitoring',
      'Usage statistics & insights'
    ]
  }
];

// Alternative with Google Brand Colors
export const googleBrandColors = {
  analytics: '#FF6B35',
  tagManager: '#246FDB', 
  lookerStudio: '#4285F4',
  workspace: '#34A853',
  cloud: '#EA4335'
};
