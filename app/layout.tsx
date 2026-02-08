import type { Metadata } from 'next'
import './globals.css'
import { CurrencyProvider } from '@/components/CurrencyDetector'
import { Analytics } from '@/lib/analytics'

export const metadata: Metadata = {
  // metadataBase removed to allow dynamic OG image URLs on any domain (Vercel preview or production)
  title: {
    default: 'BookB - Professional Salon Management Software Starting at $20/month',
    template: '%s | BookB Salon Software'
  },
  description: 'Professional salon management software trusted by 1,000+ salons worldwide. Complete booking system, queue management, POS, analytics, and mobile apps starting at just $20/month. No contracts, no setup fees. Save $3,000+ annually vs competitors.',
  keywords: [
    'salon software',
    'salon management system',
    'hair salon booking software',
    'barbershop management',
    'salon appointment scheduling',
    'salon queue management',
    'salon POS system',
    'beauty salon software',
    'nail salon software',
    'spa management software',
    'affordable salon software',
    'zenoti alternative',
    'fresha alternative',
    'salon booking app',
    'hairdresser software'
  ],
  authors: [{ name: 'BookB by The Algorithm' }],
  creator: 'The Algorithm',
  publisher: 'BookB',
  applicationName: 'BookB Salon Management',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['en_GB', 'en_AU'],
    url: 'https://bookb.io',
    title: 'BookB - Professional Salon Management Software | $20/month',
    description: 'Professional salon management software for $20/month. Queue management, appointment scheduling, POS system, analytics, and mobile apps. No contracts. 14-day free trial.',
    siteName: 'BookB',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'BookB Salon Management Software - Professional tools for hair salons, barbershops, and beauty businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BookB - Professional Salon Software Starting at $20/month',
    description: 'Complete salon management system with booking, queue management, POS, and analytics. Save $3,000+ annually vs expensive alternatives. No contracts. 14-day free trial.',
    images: ['/og-default.png'],
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
    // Add when ready: google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://bookb.io',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CurrencyProvider>
          {children}
        </CurrencyProvider>
        <Analytics />
      </body>
    </html>
  )
}
