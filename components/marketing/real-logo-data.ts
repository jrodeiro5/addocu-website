// Real company logos for Addocu - optimized WebP format without backgrounds
// These logos represent actual companies using marketing audit tools

export interface LogoItem {
  name: string;
  logo: string;
  width?: number;
  height?: number;
}

// Real customer logos using local WebP files (transparent backgrounds, better performance)
export const realCustomerLogos: LogoItem[] = [
  {
    name: 'BSD Digital Group',
    logo: '/images/logos/companies/logo_bsd_digital_group.webp',
    width: 140,
    height: 40
  },
  {
    name: 'Ayesa',
    logo: '/images/logos/companies/logo_ayesa.webp',
    width: 120,
    height: 40
  },
  {
    name: 'BySidecar',
    logo: '/images/logos/companies/logo_bysidecar.webp',
    width: 130,
    height: 40
  },
  {
    name: 'Pull & Bear',
    logo: '/images/logos/companies/pull_and_bear.webp',
    width: 120,
    height: 40
  }
];

// Marketing agencies and consultancies
export const agencyLogos: LogoItem[] = [
  {
    name: 'BSD Digital Group',
    logo: '/images/logos/companies/logo_bsd_digital_group.webp',
    width: 140,
    height: 40
  },
  {
    name: 'BySidecar',
    logo: '/images/logos/companies/logo_bysidecar.webp',
    width: 130,
    height: 40
  },
  {
    name: 'Ayesa Advanced Analytics',
    logo: '/images/logos/companies/logo_ayesa.webp',
    width: 120,
    height: 40
  }
];

// Enterprise brands
export const enterpriseLogos: LogoItem[] = [
  {
    name: 'Pull & Bear',
    logo: '/images/logos/companies/pull_and_bear.webp',
    width: 120,
    height: 40
  },
  {
    name: 'Ayesa',
    logo: '/images/logos/companies/logo_ayesa.webp',
    width: 120,
    height: 40
  }
];

// Combined logos for main carousel (uses real WebP images with transparent backgrounds)
export const trustedByLogos: LogoItem[] = [
  ...realCustomerLogos
];
