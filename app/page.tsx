import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ComparisonTable } from '@/components/ComparisonTable'
import { FeatureShowcase } from '@/components/FeatureShowcase'
import { ROICalculator } from '@/components/ROICalculator'
import { PricingCard } from '@/components/PricingCard'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary to-accent text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
                Why pay £300 when BookB delivers same results for £15?
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Enterprise salon management software at a price that makes sense. Queue management, booking system, POS, and analytics—all included.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-accent px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="/pricing"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
              <p className="mt-6 text-sm text-gray-300">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                BookB vs Zenoti: Side-by-Side
              </h2>
              <p className="text-xl text-gray-600">
                Same features. 95% lower cost. No annual contract.
              </p>
            </div>
            <ComparisonTable competitorName="Zenoti" competitorPrice={300} />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Everything You Need to Run Your Salon
              </h2>
              <p className="text-xl text-gray-600">
                Professional features without the enterprise price tag
              </p>
            </div>
            <FeatureShowcase />
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="py-20 bg-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ROICalculator />
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600">
                No hidden fees. No annual contracts. Just honest pricing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PricingCard
                tier="starter"
                features={[
                  'Up to 1 stylist',
                  'Queue management',
                  'Online booking',
                  'Basic POS',
                  'SMS reminders',
                  'Mobile app',
                ]}
              />
              <PricingCard
                tier="professional"
                featured={true}
                features={[
                  'Up to 5 stylists',
                  'All Starter features',
                  'Advanced analytics',
                  'Inventory management',
                  'Email marketing',
                  'Priority support',
                ]}
              />
              <PricingCard
                tier="business"
                features={[
                  'Up to 15 stylists',
                  'All Professional features',
                  'Multi-location support',
                  'Custom branding',
                  'API access',
                  'Dedicated account manager',
                ]}
              />
              <PricingCard
                tier="enterprise"
                features={[
                  'Unlimited stylists',
                  'All Business features',
                  'Custom integrations',
                  'White-label option',
                  'SLA guarantee',
                  '24/7 phone support',
                ]}
              />
            </div>

            <div className="text-center mt-12">
              <Link
                href="/pricing"
                className="text-accent hover:text-accent/80 font-medium text-lg"
              >
                View full pricing comparison →
              </Link>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-12">
                Trusted by 1,000+ Salons Worldwide
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/10 rounded-lg p-8">
                  <div className="text-5xl font-bold font-mono mb-2">95%</div>
                  <div className="text-gray-300">Cost Savings vs Zenoti</div>
                </div>
                <div className="bg-white/10 rounded-lg p-8">
                  <div className="text-5xl font-bold font-mono mb-2">40%</div>
                  <div className="text-gray-300">Reduction in No-Shows</div>
                </div>
                <div className="bg-white/10 rounded-lg p-8">
                  <div className="text-5xl font-bold font-mono mb-2">24/7</div>
                  <div className="text-gray-300">Customer Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Ready to Save Thousands Per Year?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join 1,000+ salons who switched to BookB and never looked back.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-accent/90 transition-colors"
            >
              Start Your Free Trial
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              14-day free trial • No credit card required • Migrate your data for free
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
