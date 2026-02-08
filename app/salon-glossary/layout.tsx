import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Salon Management Glossary: 50+ Industry Terms Defined (2026)',
  description: 'Complete salon industry glossary with 50+ definitions covering services, software, operations, and business terms. Learn balayage, online booking, no-show management, commission structures, and more.',
  openGraph: {
    title: 'Salon Management Glossary: 50+ Industry Terms Defined (2026)',
    description: 'Complete salon industry glossary with 50+ definitions covering services, software, operations, and business terms. Learn balayage, online booking, no-show management, commission structures, and more.',
    type: 'website',
    url: 'https://bookb.io/salon-glossary',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Salon Management Glossary - BookB',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salon Management Glossary: 50+ Industry Terms Defined (2026)',
    description: 'Complete salon industry glossary with 50+ definitions covering services, software, operations, and business terms.',
    images: ['/og-image.svg'],
  },
  alternates: {
    canonical: 'https://bookb.io/salon-glossary',
  },
};

export default function SalonGlossaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
