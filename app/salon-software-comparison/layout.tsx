import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Salon Software Cost Comparison Calculator 2026 | Compare Real Prices',
  description: 'Interactive salon software cost calculator. Compare BookB, Vagaro, Square, Fresha, Mindbody, and Boulevard with real pricing including transaction fees, setup costs, and hidden charges. See your actual savings.',
  openGraph: {
    title: 'Salon Software Cost Comparison Calculator 2026 | Compare Real Prices',
    description: 'Interactive salon software cost calculator. Compare BookB, Vagaro, Square, Fresha, Mindbody, and Boulevard with real pricing including transaction fees, setup costs, and hidden charges. See your actual savings.',
    type: 'website',
  },
};

export default function SalonSoftwareComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
