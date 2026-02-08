import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Salon Software 2026: Top 6 Platforms Compared & Ranked',
  description: 'Comprehensive comparison of the best salon management software. Compare BookB, Vagaro, Square, Fresha, Mindbody, and Boulevard on pricing, features, and value. Honest rankings based on 1,000+ salon reviews.',
  openGraph: {
    title: 'Best Salon Software 2026: Top 6 Platforms Compared & Ranked',
    description: 'Comprehensive comparison of the best salon management software. Compare BookB, Vagaro, Square, Fresha, Mindbody, and Boulevard on pricing, features, and value. Honest rankings based on 1,000+ salon reviews.',
    type: 'website',
    url: 'https://bookb.io/best-salon-software',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Best Salon Software 2026 Comparison - BookB',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Salon Software 2026: Top 6 Platforms Compared & Ranked',
    description: 'Comprehensive comparison of the best salon management software. Compare BookB, Vagaro, Square, Fresha, Mindbody, and Boulevard on pricing, features, and value.',
    images: ['/og-image.svg'],
  },
  alternates: {
    canonical: 'https://bookb.io/best-salon-software',
  },
};

export default function BestSalonSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
