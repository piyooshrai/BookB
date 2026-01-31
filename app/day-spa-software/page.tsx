import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PricingCard } from '@/components/PricingCard'

export const metadata: Metadata = {
  title: 'Day Spa Management Software | Booking & Client Management - £15/month',
  description: 'Complete day spa software with appointment booking, treatment tracking, and client management. Trusted by spas worldwide.',
}

export default function DaySpaSoftwarePage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">Day Spa Management Software</h1>
            <p className="text-xl mb-8">Complete spa management with treatment tracking, client profiles, and resource booking. From £15/month.</p>
            <a href="/contact" className="inline-block bg-white text-accent px-8 py-4 rounded-lg font-bold hover:bg-gray-100">Start Free Trial</a>
          </div>
        </section>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PricingCard tier="starter" features={['1 therapist', 'Treatment booking', 'Client profiles', 'Basic POS', 'SMS reminders', 'Product tracking']} />
              <PricingCard tier="professional" featured features={['Up to 5 therapists', 'Room management', 'Package sales', 'Email marketing', 'Gift certificates', 'Priority support']} />
              <PricingCard tier="business" features={['Up to 15 therapists', 'Multi-location', 'Membership management', 'Advanced reporting', 'API access', 'Account manager']} />
              <PricingCard tier="enterprise" features={['Unlimited therapists', 'White-label', 'Custom integrations', 'Spa chain support', 'SLA guarantee', '24/7 support']} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
