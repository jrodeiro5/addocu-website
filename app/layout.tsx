import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import { getUser, getTeamForUser } from '@/lib/db/queries';
import { SWRConfig } from 'swr';

export const metadata: Metadata = {
  title: {
    default: 'Addocu - Audit Your Google Marketing Stack in Seconds',
    template: '%s | Addocu'
  },
  description: 'Free and open-source Google Sheets Add-on for digital marketers. Automate GA4, GTM, and Looker Studio documentation with detailed metadata pulled directly into your spreadsheet.',
  keywords: [
    'google analytics audit',
    'google tag manager audit', 
    'looker studio audit',
    'digital marketing tools',
    'google sheets addon',
    'marketing automation',
    'GA4 audit',
    'GTM documentation',
    'marketing stack audit'
  ],
  authors: [{ name: 'Addocu Team', url: 'https://addocu.com' }],
  creator: 'Addocu',
  publisher: 'Addocu',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://addocu.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://addocu.com',
    title: 'Addocu - Audit Your Google Marketing Stack in Seconds',
    description: 'Free and open-source Google Sheets Add-on for digital marketers. Automate GA4, GTM, and Looker Studio documentation.',
    siteName: 'Addocu',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Addocu - Google Marketing Stack Audits',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Addocu - Audit Your Google Marketing Stack in Seconds',
    description: 'Free and open-source Google Sheets Add-on for digital marketers.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification
  },
};

export const viewport: Viewport = {
  themeColor: '#1A5DBB',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

const manrope = Manrope({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope'
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} font-sans`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-[100dvh] bg-gray-50 antialiased">
        <SWRConfig
          value={{
            fallback: {
              '/api/user': getUser(),
              '/api/team': getTeamForUser()
            },
            revalidateOnFocus: false,
            revalidateOnReconnect: true,
          }}
        >
          {children}
        </SWRConfig>
      </body>
    </html>
  );
}
