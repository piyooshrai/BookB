import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PricingCard } from '@/components/PricingCard'

export const metadata: Metadata = {
  title: 'Nail Salon Software | Appointment Booking & Client Management - £15/month',
  description: 'Complete nail salon management software. Appointment booking, client history, inventory tracking, and POS. Trusted by 300+ nail salons.',
}

export default function NailSalonSoftwarePage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">
              Nail Salon Management Software
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Appointment scheduling, client management, and inventory tracking for nail salons. From £15/month.
            </p>
            <a href="/contact" className="inline-block bg-white text-accent px-8 py-4 rounded-lg font-bold hover:bg-gray-100">
              Start Free Trial
            </a>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PricingCard tier="starter" features={['1 technician', 'Appointment booking', 'Client CRM', 'Basic POS', 'SMS reminders', 'Product inventory']} />
              <PricingCard tier="professional" featured features={['Up to 5 technicians', 'Advanced booking', 'Email marketing', 'Loyalty programs', 'Gift cards', 'Priority support']} />
              <PricingCard tier="business" features={['Up to 15 technicians', 'Multi-location', 'Custom branding', 'Advanced reports', 'API access', 'Account manager']} />
              <PricingCard tier="enterprise" features={['Unlimited technicians', 'White-label', 'Custom integrations', 'Franchise support', 'SLA guarantee', '24/7 support']} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
