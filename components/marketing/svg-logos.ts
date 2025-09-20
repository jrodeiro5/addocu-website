// SVG Logos - Best approach for company logos
// These are inline SVGs that work everywhere and scale perfectly

export interface LogoItem {
  name: string;
  logo: string;
  width?: number;
  height?: number;
}

// Simple SVG logos for development - no external dependencies
export const placeholderLogos: LogoItem[] = [
  {
    name: 'Company A',
    logo: `<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="40" rx="8" fill="#1A5DBB"/>
      <text x="60" y="24" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="white" text-anchor="middle" dominant-baseline="middle">Company A</text>
    </svg>`,
    width: 120,
    height: 40
  },
  {
    name: 'Company B',
    logo: `<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="40" rx="8" fill="#4CAF50"/>
      <text x="60" y="24" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="white" text-anchor="middle" dominant-baseline="middle">Company B</text>
    </svg>`,
    width: 120,
    height: 40
  },
  {
    name: 'Company C',
    logo: `<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="40" rx="8" fill="#00AEEF"/>
      <text x="60" y="24" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="white" text-anchor="middle" dominant-baseline="middle">Company C</text>
    </svg>`,
    width: 120,
    height: 40
  },
  {
    name: 'Company D',
    logo: `<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="40" rx="8" fill="#8BC34A"/>
      <text x="60" y="24" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="white" text-anchor="middle" dominant-baseline="middle">Company D</text>
    </svg>`,
    width: 120,
    height: 40
  },
  {
    name: 'Company E',
    logo: `<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="40" rx="8" fill="#666666"/>
      <text x="60" y="24" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="white" text-anchor="middle" dominant-baseline="middle">Company E</text>
    </svg>`,
    width: 120,
    height: 40
  },
  {
    name: 'Company F',
    logo: `<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="40" rx="8" fill="#FF6F61"/>
      <text x="60" y="24" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="white" text-anchor="middle" dominant-baseline="middle">Company F</text>
    </svg>`,
    width: 120,
    height: 40
  }
];

// Real company logos - Use actual SVG logos from companies
export const customerLogos: LogoItem[] = [
  {
    name: 'Google',
    logo: `<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="60" y="24" font-family="Product Sans, Arial, sans-serif" font-size="18" font-weight="400" fill="#4285F4" text-anchor="middle" dominant-baseline="middle">Google</text>
    </svg>`,
    width: 120,
    height: 40
  },
  {
    name: 'Microsoft',
    logo: `<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="12" width="6" height="6" fill="#F25022"/>
      <rect x="38" y="12" width="6" height="6" fill="#7FBA00"/>
      <rect x="30" y="20" width="6" height="6" fill="#00A4EF"/>
      <rect x="38" y="20" width="6" height="6" fill="#FFB900"/>
      <text x="52" y="24" font-family="Segoe UI, Arial, sans-serif" font-size="14" font-weight="400" fill="#737373" text-anchor="start" dominant-baseline="middle">Microsoft</text>
    </svg>`,
    width: 120,
    height: 40
  },
  {
    name: 'Slack',
    logo: `<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="60" y="24" font-family="Lato, Arial, sans-serif" font-size="16" font-weight="700" fill="#4A154B" text-anchor="middle" dominant-baseline="middle">Slack</text>
    </svg>`,
    width: 120,
    height: 40
  },
  {
    name: 'Shopify',
    logo: `<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="60" y="24" font-family="Arial, sans-serif" font-size="16" font-weight="600" fill="#95BF47" text-anchor="middle" dominant-baseline="middle">Shopify</text>
    </svg>`,
    width: 120,
    height: 40
  },
  {
    name: 'HubSpot',
    logo: `<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="60" y="24" font-family="Arial, sans-serif" font-size="16" font-weight="600" fill="#FF7A59" text-anchor="middle" dominant-baseline="middle">HubSpot</text>
    </svg>`,
    width: 120,
    height: 40
  },
  {
    name: 'Salesforce',
    logo: `<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="60" y="24" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="#00A1E0" text-anchor="middle" dominant-baseline="middle">Salesforce</text>
    </svg>`,
    width: 120,
    height: 40
  }
];

// Agency/Enterprise logos
export const agencyLogos: LogoItem[] = [
  {
    name: 'Adobe',
    logo: `<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="60" y="24" font-family="Adobe Clean, Arial, sans-serif" font-size="16" font-weight="700" fill="#FA0F00" text-anchor="middle" dominant-baseline="middle">Adobe</text>
    </svg>`,
    width: 120,
    height: 40
  },
  {
    name: 'Meta',
    logo: `<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="60" y="24" font-family="Optimistic Display, Arial, sans-serif" font-size="16" font-weight="700" fill="#0866FF" text-anchor="middle" dominant-baseline="middle">Meta</text>
    </svg>`,
    width: 120,
    height: 40
  },
  {
    name: 'Spotify',
    logo: `<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="60" y="24" font-family="Spotify Circular, Arial, sans-serif" font-size="16" font-weight="700" fill="#1DB954" text-anchor="middle" dominant-baseline="middle">Spotify</text>
    </svg>`,
    width: 120,
    height: 40
  },
  {
    name: 'Zendesk',
    logo: `<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="60" y="24" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="#03363D" text-anchor="middle" dominant-baseline="middle">Zendesk</text>
    </svg>`,
    width: 120,
    height: 40
  }
];
