import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Salon Management Templates - Download Instantly (2026)',
  description: 'Download free professional salon templates: Client Intake Form, Daily Sanitization Checklist, and Service Menu Template. Instant download, easy to customize, used by 12,000+ salons.',
  openGraph: {
    title: 'Free Salon Management Templates - Download Instantly (2026)',
    description: 'Download free professional salon templates: Client Intake Form, Daily Sanitization Checklist, and Service Menu Template. Instant download, easy to customize, used by 12,000+ salons.',
    type: 'website',
    url: 'https://bookb.io/salon-templates',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Free Salon Management Templates - BookB',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Salon Management Templates - Download Instantly (2026)',
    description: 'Download free professional salon templates: Client Intake Form, Daily Sanitization Checklist, and Service Menu Template. Instant download, easy to customize.',
    images: ['/og-image.svg'],
  },
  alternates: {
    canonical: 'https://bookb.io/salon-templates',
  },
};

export default function SalonTemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
