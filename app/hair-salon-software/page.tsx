import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PricingCard } from '@/components/PricingCard'
import { FeatureShowcase } from '@/components/FeatureShowcase'

export const metadata: Metadata = {
  title: 'Hair Salon Software | Complete Salon Management System - £15/month',
  description: 'Professional hair salon software with booking, client management, POS, and analytics. Trusted by 1,000+ hair salons worldwide.',
}

export default function HairSalonSoftwarePage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">
              Complete Hair Salon Management Software
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Everything your hair salon needs: booking, client management, POS, inventory, and analytics. From £15/month.
            </p>
            <a href="/contact" className="inline-block bg-white text-accent px-8 py-4 rounded-lg font-bold hover:bg-gray-100">
              Start Free Trial
            </a>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-primary text-center mb-12">Features Built for Hair Salons</h2>
            <FeatureShowcase />
          </div>
        </section>

        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PricingCard tier="starter" features={['1 stylist', 'Online booking', 'Client history', 'Basic POS', 'SMS reminders', 'Product sales']} />
              <PricingCard tier="professional" featured features={['Up to 5 stylists', 'Advanced booking', 'Color formulas', 'Inventory management', 'Email campaigns', 'Priority support']} />
              <PricingCard tier="business" features={['Up to 15 stylists', 'Multi-location', 'Commission tracking', 'Advanced analytics', 'Custom branding', 'Dedicated manager']} />
              <PricingCard tier="enterprise" features={['Unlimited stylists', 'White-label', 'Custom integrations', 'Franchise support', '99.9% uptime SLA', '24/7 phone support']} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
