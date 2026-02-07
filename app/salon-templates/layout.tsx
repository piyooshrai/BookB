import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Salon Management Templates - Download Instantly (2026)',
  description: 'Download free professional salon templates: Client Intake Form, Daily Sanitization Checklist, and Service Menu Template. Instant download, easy to customize, used by 12,000+ salons.',
  openGraph: {
    title: 'Free Salon Management Templates - Download Instantly (2026)',
    description: 'Download free professional salon templates: Client Intake Form, Daily Sanitization Checklist, and Service Menu Template. Instant download, easy to customize, used by 12,000+ salons.',
    type: 'website',
  },
};

export default function SalonTemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
