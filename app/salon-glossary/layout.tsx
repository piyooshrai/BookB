import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Salon Management Glossary: 50+ Industry Terms Defined (2026)',
  description: 'Complete salon industry glossary with 50+ definitions covering services, software, operations, and business terms. Learn balayage, online booking, no-show management, commission structures, and more.',
  openGraph: {
    title: 'Salon Management Glossary: 50+ Industry Terms Defined (2026)',
    description: 'Complete salon industry glossary with 50+ definitions covering services, software, operations, and business terms. Learn balayage, online booking, no-show management, commission structures, and more.',
    type: 'website',
  },
};

export default function SalonGlossaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
