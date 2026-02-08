import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Salon Software Cost Comparison Calculator 2026 | Compare Real Prices',
  description: 'Interactive salon software cost calculator. Compare BookB, Vagaro, Square, Fresha, Mindbody, and Boulevard with real pricing including transaction fees, setup costs, and hidden charges. See your actual savings.',
  openGraph: {
    title: 'Salon Software Cost Comparison Calculator 2026 | Compare Real Prices',
    description: 'Interactive salon software cost calculator. Compare BookB, Vagaro, Square, Fresha, Mindbody, and Boulevard with real pricing including transaction fees, setup costs, and hidden charges. See your actual savings.',
    type: 'website',
    url: 'https://bookb.io/salon-software-comparison',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Salon Software Cost Comparison Calculator - BookB',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salon Software Cost Comparison Calculator 2026 | Compare Real Prices',
    description: 'Interactive salon software cost calculator. Compare BookB, Vagaro, Square, Fresha, Mindbody, and Boulevard with real pricing including transaction fees, setup costs, and hidden charges.',
    images: ['/og-image.svg'],
  },
  alternates: {
    canonical: 'https://bookb.io/salon-software-comparison',
  },
};

export default function SalonSoftwareComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
