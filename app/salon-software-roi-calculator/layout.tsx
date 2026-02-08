import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Salon Software ROI Calculator: Calculate Your Savings (2026)',
  description: 'Free salon software ROI calculator shows exactly how much you save with BookB vs competitors. Calculate cost savings, no-show recovery, and setup fees. Most salons save $3,000+ annually.',
  openGraph: {
    title: 'Salon Software ROI Calculator: Calculate Your Savings (2026)',
    description: 'Free salon software ROI calculator shows exactly how much you save with BookB vs competitors. Calculate cost savings, no-show recovery, and setup fees. Most salons save $3,000+ annually.',
    type: 'website',
    url: 'https://bookb.io/salon-software-roi-calculator',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'BookB Salon Software ROI Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salon Software ROI Calculator: Calculate Your Savings (2026)',
    description: 'Free salon software ROI calculator shows exactly how much you save with BookB vs competitors. Calculate cost savings, no-show recovery, and setup fees.',
    images: ['/og-image.svg'],
  },
  alternates: {
    canonical: 'https://bookb.io/salon-software-roi-calculator',
  },
};

export default function ROICalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
