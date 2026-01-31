import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PricingCard } from '@/components/PricingCard'
import { ROICalculator } from '@/components/ROICalculator'

export const metadata: Metadata = {
  title: 'Barbershop Management Software | Queue Management & Booking - £15/month',
  description: 'Modern barbershop software with queue management, walk-in tracking, and online booking. Trusted by 500+ barbershops. Start at £15/month.',
  keywords: ['barbershop software', 'barber queue management', 'barbershop booking system', 'barber POS'],
}

export default function BarbershopSoftwarePage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Barbershop Management Software Built for Busy Shops
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Queue management, walk-in tracking, and online booking designed specifically for barbershops. From £15/month.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-accent px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-primary text-center mb-12">
              Why Barbershops Love BookB
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border border-border rounded-lg p-8">
                <div className="text-3xl mb-4">✂️</div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Walk-in Queue Management
                </h3>
                <p className="text-gray-600">
                  Track walk-ins, show live wait times, and manage your queue efficiently. Customers see real-time updates on their phone.
                </p>
              </div>
              <div className="bg-white border border-border rounded-lg p-8">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Fast Checkout
                </h3>
                <p className="text-gray-600">
                  Quick POS designed for high-volume barbershops. Process payments in seconds, not minutes.
                </p>
              </div>
              <div className="bg-white border border-border rounded-lg p-8">
                <div className="text-3xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Online Booking Widget
                </h3>
                <p className="text-gray-600">
                  Let customers book online 24/7. Embed on your website or share a direct link on Instagram.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ROICalculator />
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-primary text-center mb-12">
              Barbershop Pricing
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PricingCard
                tier="starter"
                features={['1 barber', 'Queue management', 'Online booking', 'Basic POS', 'SMS reminders', 'Walk-in tracking']}
              />
              <PricingCard
                tier="professional"
                featured={true}
                features={['Up to 5 barbers', 'All Starter features', 'Advanced analytics', 'Inventory tracking', 'Email marketing', 'Priority support']}
              />
              <PricingCard
                tier="business"
                features={['Up to 15 barbers', 'Multi-location', 'Custom branding', 'API access', 'Loyalty programs', 'Account manager']}
              />
              <PricingCard
                tier="enterprise"
                features={['Unlimited barbers', 'White-label option', 'Custom integrations', 'SLA guarantee', 'Franchise support', '24/7 phone support']}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
