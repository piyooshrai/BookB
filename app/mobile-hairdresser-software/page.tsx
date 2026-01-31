import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PricingCard } from '@/components/PricingCard'

export const metadata: Metadata = {
  title: 'Mobile Hairdresser Software | On-the-Go Booking & Payments - £15/month',
  description: 'Perfect for mobile hairdressers. Manage bookings, track locations, and accept payments on the go. Works offline.',
}

export default function MobileHairdresserSoftwarePage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">Mobile Hairdresser Software</h1>
            <p className="text-xl mb-8">Manage your mobile salon business on the go. Booking, payments, and client management—all from your phone. From £15/month.</p>
            <a href="/contact" className="inline-block bg-white text-accent px-8 py-4 rounded-lg font-bold hover:bg-gray-100">Start Free Trial</a>
          </div>
        </section>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PricingCard tier="starter" features={['1 stylist', 'Mobile booking', 'Location tracking', 'Mobile payments', 'Client messaging', 'Offline mode']} />
              <PricingCard tier="professional" featured features={['Schedule optimization', 'Route planning', 'Automated reminders', 'Email marketing', 'Expense tracking', 'Priority support']} />
              <PricingCard tier="business" features={['Multi-stylist teams', 'Territory management', 'Advanced reporting', 'Custom branding', 'API access', 'Account manager']} />
              <PricingCard tier="enterprise" features={['Franchise support', 'White-label app', 'Custom integrations', 'Dedicated infrastructure', 'SLA guarantee', '24/7 support']} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
