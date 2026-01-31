import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PricingCard } from '@/components/PricingCard'
import { ROICalculator } from '@/components/ROICalculator'

export const metadata: Metadata = {
  title: 'Salon Software for Small Business | Affordable & Simple - £15/month',
  description: 'Salon software designed for small businesses. No enterprise pricing, no complex features. Just what you need to run your salon. From £15/month.',
}

export default function SalonSoftwareSmallBusinessPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">Salon Software for Small Businesses</h1>
            <p className="text-xl mb-8">Designed for independent salons. Simple pricing, powerful features, no enterprise bloat. From £15/month.</p>
            <a href="/contact" className="inline-block bg-white text-accent px-8 py-4 rounded-lg font-bold hover:bg-gray-100">Start Free Trial</a>
          </div>
        </section>
        <section className="py-20 bg-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ROICalculator />
          </div>
        </section>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-primary text-center mb-12">Simple Pricing for Small Businesses</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PricingCard tier="starter" features={['1 stylist', 'All core features', 'No setup fees', 'Cancel anytime', 'Email support', 'Mobile app']} />
              <PricingCard tier="professional" featured features={['Up to 5 stylists', 'Advanced features', 'Email marketing', 'Priority support', 'Custom branding', 'Analytics']} />
              <PricingCard tier="business" features={['Up to 15 stylists', 'Multi-location', 'API access', 'Dedicated support', 'Advanced reports', 'Custom integrations']} />
              <PricingCard tier="enterprise" features={['Unlimited stylists', 'White-label', 'Enterprise features', 'SLA guarantee', 'Custom contracts', '24/7 phone support']} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
