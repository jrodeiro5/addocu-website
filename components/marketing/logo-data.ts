import { createLogoArray } from './logo-carousel';

// Logo URLs for companies - these should be replaced with actual customer logos
export const customerLogos = createLogoArray([
  {
    name: 'HubSpot',
    logo: 'https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png',
    width: 120,
    height: 40
  },
  {
    name: 'Salesforce',
    logo: 'https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/nav/salesforce-logo.svg',
    width: 140,
    height: 40
  },
  {
    name: 'Shopify',
    logo: 'https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-primary-logo-456baa801ee66a0a435671082365958316831c9960c480451dd0330bcdae304f.svg',
    width: 120,
    height: 40
  },
  {
    name: 'Atlassian',
    logo: 'https://wac-cdn.atlassian.com/assets/img/favicons/atlassian/apple-touch-icon-180x180.png',
    width: 40,
    height: 40
  },
  {
    name: 'Mailchimp',
    logo: 'https://eep.io/images/yzco4xsimv0y/4JaACRHOGl1QRLqLqrxFxe/8c3b8ece1faa79b4d44063ca2e0bcaa1/mailchimp_secondary_dark.png',
    width: 140,
    height: 40
  },
  {
    name: 'Buffer',
    logo: 'https://buffer.com/static/icons/buffer-logo.svg',
    width: 100,
    height: 40
  },
  {
    name: 'Hootsuite',
    logo: 'https://hootsuite.com/uploads/images/layout/hootsuite-logo-white.svg',
    width: 130,
    height: 40
  },
  {
    name: 'Zendesk',
    logo: 'https://d1eipm3vz40hy0.cloudfront.net/images/AMER/zendesk-logo-green.svg',
    width: 120,
    height: 40
  }
]);

// Alternative set for demonstration
export const agencyLogos = createLogoArray([
  {
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    width: 80,
    height: 40
  },
  {
    name: 'Meta',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
    width: 100,
    height: 40
  },
  {
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
    width: 120,
    height: 40
  },
  {
    name: 'Adobe',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg',
    width: 80,
    height: 40
  },
  {
    name: 'Slack',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg',
    width: 40,
    height: 40
  },
  {
    name: 'Spotify',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
    width: 40,
    height: 40
  }
]);

// Placeholder logos for development - use simple colored rectangles
export const placeholderLogos = createLogoArray([
  {
    name: 'Company A',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzFBNURCQiIvPgo8dGV4dCB4PSI2MCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNvbXBhbnkgQTwvdGV4dD4KPHN2Zz4K',
    width: 120,
    height: 40
  },
  {
    name: 'Company B',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzRDQUY1MCIvPgo8dGV4dCB4PSI2MCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNvbXBhbnkgQjwvdGV4dD4KPHN2Zz4K',
    width: 120,
    height: 40
  },
  {
    name: 'Company C',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzAwQUVFRiIvPgo8dGV4dCB4PSI2MCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNvbXBhbnkgQzwvdGV4dD4KPHN2Zz4K',
    width: 120,
    height: 40
  },
  {
    name: 'Company D',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzhCQzM0QSIvPgo8dGV4dCB4PSI2MCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNvbXBhbnkgRDwvdGV4dD4KPHN2Zz4K',
    width: 120,
    height: 40
  },
  {
    name: 'Company E',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzY2NjY2NiIvPgo8dGV4dCB4PSI2MCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNvbXBhbnkgRTwvdGV4dD4KPHN2Zz4K',
    width: 120,
    height: 40
  },
  {
    name: 'Company F',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iI0ZGNkY2MSIvPgo8dGV4dCB4PSI2MCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNvbXBhbnkgRjwvdGV4dD4KPHN2Zz4K',
    width: 120,
    height: 40
  }
]);
