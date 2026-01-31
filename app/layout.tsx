import type { Metadata } from 'next'
import './globals.css'
import { CurrencyProvider } from '@/components/CurrencyDetector'
import { Analytics } from '@/lib/analytics'

export const metadata: Metadata = {
  metadataBase: new URL('https://bookb.io'),
  title: {
    default: 'BookB - Professional Salon Management Software | £15/month',
    template: '%s | BookB'
  },
  description: 'Enterprise salon management software for £15/month. Queue management, booking system, POS, analytics. Why pay £300 when BookB delivers same results for £15?',
  keywords: ['salon software', 'salon management', 'booking system', 'queue management', 'salon POS', 'hairdresser software', 'beauty salon software'],
  authors: [{ name: 'BookB' }],
  creator: 'BookB',
  publisher: 'BookB',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://bookb.io',
    title: 'BookB - Professional Salon Management Software',
    description: 'Enterprise salon management software for £15/month. Queue management, booking system, POS, analytics.',
    siteName: 'BookB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BookB - Professional Salon Management Software',
    description: 'Enterprise salon management software for £15/month.',
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
