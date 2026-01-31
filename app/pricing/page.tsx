import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PricingCard } from '@/components/PricingCard'
import { generateFAQSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Pricing - Simple & Transparent Salon Software Pricing',
  description: 'BookB salon management software starts at £15/month. No setup fees, no annual contracts. Compare our pricing with Zenoti, Fresha, and Phorest.',
  openGraph: {
    title: 'BookB Pricing - From £15/month',
    description: 'Enterprise salon software at a price that makes sense. Starting at £15/month.',
  },
}

const faqItems = [
  {
    question: 'Is there a setup fee?',
    answer: 'No, BookB has zero setup fees. Unlike competitors like Zenoti (£500+ setup), you can start immediately with no upfront costs.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, absolutely. BookB is month-to-month with no annual contracts. Cancel anytime with no penalties or fees.',
  },
  {
    question: 'Do you offer a free trial?',
    answer: 'Yes! We offer a full 14-day free trial with access to all features. No credit card required.',
  },
  {
    question: 'What happens if I exceed my stylist limit?',
    answer: 'You can upgrade to the next tier at any time. We\'ll prorate the difference so you only pay for what you use.',
  },
  {
    question: 'Do you offer discounts for annual payments?',
    answer: 'Yes, pay annually and save 20% on any plan. Contact us for annual pricing.',
  },
  {
    question: 'Is customer support included?',
    answer: 'Yes! All plans include 24/7 email and chat support. Business and Enterprise plans include phone support.',
  },
  {
    question: 'Can you migrate my data from another platform?',
    answer: 'Yes, we offer free data migration from any salon software including Zenoti, Fresha, Phorest, and others.',
  },
  {
    question: 'Are there any transaction fees?',
    answer: 'No! Unlike Fresha which charges 5-10% per transaction, BookB charges zero transaction fees. You keep 100% of your revenue.',
  },
]

export default function PricingPage() {
  const faqSchema = generateFAQSchema(faqItems)

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-accent text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              No hidden fees. No annual contracts. Just honest pricing that scales with your business.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <PricingCard
                tier="starter"
                features={[
                  'Up to 1 stylist',
                  'Unlimited bookings',
                  'Queue management',
                  'Online booking widget',
                  'Basic POS system',
                  'SMS reminders',
                  'Mobile app (iOS & Android)',
                  'Payment processing',
                  'Email support',
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
                  'Email marketing (1,000/month)',
                  'Custom branding',
                  'Client CRM',
                  'Staff performance reports',
                  'Priority support',
                ]}
              />
              <PricingCard
                tier="business"
                features={[
                  'Up to 15 stylists',
                  'All Professional features',
                  'Multi-location support',
                  'Advanced reporting',
                  'Email marketing (5,000/month)',
                  'API access',
                  'Loyalty programs',
                  'Gift cards',
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
                  'Unlimited email marketing',
                  'SLA guarantee (99.9% uptime)',
                  'Custom contracts',
                  'On-premise option',
                  '24/7 phone support',
                ]}
              />
            </div>

            {/* Feature Comparison Table */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-primary text-center mb-8">
                Detailed Feature Comparison
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="text-left p-4">Feature</th>
                      <th className="text-center p-4">Starter</th>
                      <th className="text-center p-4">Professional</th>
                      <th className="text-center p-4">Business</th>
                      <th className="text-center p-4">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: 'Number of Stylists', starter: '1', pro: '5', business: '15', enterprise: 'Unlimited' },
                      { feature: 'Queue Management', starter: '✓', pro: '✓', business: '✓', enterprise: '✓' },
                      { feature: 'Online Booking', starter: '✓', pro: '✓', business: '✓', enterprise: '✓' },
                      { feature: 'POS System', starter: 'Basic', pro: 'Advanced', business: 'Advanced', enterprise: 'Advanced' },
                      { feature: 'Analytics', starter: 'Basic', pro: 'Advanced', business: 'Advanced', enterprise: 'Custom' },
                      { feature: 'SMS Reminders', starter: '✓', pro: '✓', business: '✓', enterprise: '✓' },
                      { feature: 'Email Marketing', starter: '✗', pro: '1,000/mo', business: '5,000/mo', enterprise: 'Unlimited' },
                      { feature: 'Multi-location', starter: '✗', pro: '✗', business: '✓', enterprise: '✓' },
                      { feature: 'API Access', starter: '✗', pro: '✗', business: '✓', enterprise: '✓' },
                      { feature: 'White-label', starter: '✗', pro: '✗', business: '✗', enterprise: '✓' },
                      { feature: 'Support', starter: 'Email', pro: 'Priority', business: 'Dedicated AM', enterprise: '24/7 Phone' },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-surface'}>
                        <td className="p-4 font-medium text-gray-700">{row.feature}</td>
                        <td className="p-4 text-center text-gray-600">{row.starter}</td>
                        <td className="p-4 text-center text-gray-600">{row.pro}</td>
                        <td className="p-4 text-center text-gray-600">{row.business}</td>
                        <td className="p-4 text-center text-gray-600">{row.enterprise}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {item.question}
                  </h3>
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-accent text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Start Your 14-Day Free Trial
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              No credit card required. Full access to all features. Cancel anytime.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-accent px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Started Free
            </a>
          </div>
        </section>
      </main>
      <Footer />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
