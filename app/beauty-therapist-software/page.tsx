import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PricingCard } from '@/components/PricingCard'

export const metadata: Metadata = {
  title: 'Beauty Therapist Software | Treatment Management & Booking - £15/month',
  description: 'Software for beauty therapists. Manage treatments, track client history, and grow your business. From £15/month.',
}

export default function BeautyTherapistSoftwarePage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">Beauty Therapist Software</h1>
            <p className="text-xl mb-8">Manage your beauty therapy business with ease. Bookings, client notes, and treatment tracking. From £15/month.</p>
            <a href="/contact" className="inline-block bg-white text-accent px-8 py-4 rounded-lg font-bold hover:bg-gray-100">Start Free Trial</a>
          </div>
        </section>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PricingCard tier="starter" features={['1 therapist', 'Treatment booking', 'Client consultations', 'Before/after photos', 'SMS reminders', 'Product sales']} />
              <PricingCard tier="professional" featured features={['Up to 5 therapists', 'Treatment packages', 'Skincare tracking', 'Email campaigns', 'Loyalty rewards', 'Priority support']} />
              <PricingCard tier="business" features={['Up to 15 therapists', 'Multi-location', 'Membership plans', 'Advanced analytics', 'Custom branding', 'Account manager']} />
              <PricingCard tier="enterprise" features={['Unlimited therapists', 'White-label platform', 'Custom integrations', 'Franchise tools', 'SLA guarantee', '24/7 support']} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
