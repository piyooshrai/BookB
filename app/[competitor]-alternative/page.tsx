import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ComparisonTable } from '@/components/ComparisonTable'
import { PricingCard } from '@/components/PricingCard'
import { generateFAQSchema, generateSoftwareApplicationSchema } from '@/lib/schema'
import competitors from '@/content/competitors.json'

type Props = {
  params: { competitor: string }
}

export async function generateStaticParams() {
  return competitors.map((competitor) => ({
    competitor: competitor.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const competitor = competitors.find((c) => c.slug === params.competitor)

  if (!competitor) return {}

  return {
    title: `BookB vs ${competitor.name}: Save £${(competitor.monthlyPrice - 15) * 12}/Year | Better Alternative`,
    description: `${competitor.name} charges £${competitor.monthlyPrice}/month. BookB delivers the same features for £15/month. Save £${(competitor.monthlyPrice - 15) * 12} annually with no contracts.`,
    openGraph: {
      title: `BookB vs ${competitor.name}: Save £${(competitor.monthlyPrice - 15) * 12}/Year`,
      description: `Switch from ${competitor.name} to BookB and save £${(competitor.monthlyPrice - 15) * 12} per year.`,
    },
  }
}

export default function CompetitorAlternativePage({ params }: Props) {
  const competitor = competitors.find((c) => c.slug === params.competitor)

  if (!competitor) {
    notFound()
  }

  const annualSavings = (competitor.monthlyPrice - 15) * 12

  const faqs = [
    {
      question: `How does BookB compare to ${competitor.name}?`,
      answer: `BookB offers the same core features as ${competitor.name} (queue management, booking, POS, analytics) but at 95% lower cost. While ${competitor.name} charges £${competitor.monthlyPrice}/month with a ${competitor.contract}, BookB is just £15/month with no contracts.`,
    },
    {
      question: `Can you migrate my data from ${competitor.name}?`,
      answer: `Yes! We offer free data migration from ${competitor.name}. Our team will transfer your clients, appointments, and history at no extra cost.`,
    },
    {
      question: `What features does BookB have that ${competitor.name} doesn't?`,
      answer: `BookB includes advanced queue management, real-time analytics, and 24/7 support as standard. Unlike ${competitor.name}, we charge zero transaction fees and have no setup costs.`,
    },
    {
      question: `Is there a setup fee like ${competitor.name}?`,
      answer: `No! ${competitor.name} charges £${competitor.setupFee}+ for setup. BookB has zero setup fees—start using it immediately.`,
    },
    {
      question: `Do I need an annual contract?`,
      answer: `No. ${competitor.name} requires ${competitor.contract}. BookB is month-to-month with no long-term commitments.`,
    },
    {
      question: `What if I'm currently locked into a ${competitor.name} contract?`,
      answer: `We'll help you plan your transition. Many salons switch mid-contract and still save money by the end of the year.`,
    },
    {
      question: `How long does migration take?`,
      answer: `Most ${competitor.name} migrations complete within 48 hours. We handle everything so you can focus on running your salon.`,
    },
    {
      question: `Will I lose any features switching from ${competitor.name}?`,
      answer: `No. BookB includes all essential features and often adds capabilities that ${competitor.name} charges extra for.`,
    },
  ]

  const faqSchema = generateFAQSchema(faqs)
  const softwareSchema = generateSoftwareApplicationSchema(
    'BookB Salon Management Software',
    `Professional salon software alternative to ${competitor.name}. Save £${annualSavings} per year.`,
    '15'
  )

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                BookB vs {competitor.name}: Save £{annualSavings.toLocaleString()} Per Year
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                {competitor.name} charges £{competitor.monthlyPrice}/month for salon software. BookB delivers the same enterprise features for £15/month—saving you <span className="font-bold text-white">£{annualSavings.toLocaleString()} annually</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-accent px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                >
                  Switch to BookB
                </a>
                <a
                  href="/pricing"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Side-by-Side Comparison
              </h2>
              <p className="text-xl text-gray-600">
                Same features. 95% lower cost. No annual contract.
              </p>
            </div>
            <ComparisonTable competitorName={competitor.name} competitorPrice={competitor.monthlyPrice} />
          </div>
        </section>

        {/* Why Switch */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-primary text-center mb-12">
              Why Salon Owners Switch from {competitor.name} to BookB
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-success/10 border-2 border-success rounded-lg p-8">
                <h3 className="text-2xl font-bold text-success mb-4">
                  95% Cost Savings
                </h3>
                <p className="text-gray-700 mb-4">
                  {competitor.name} charges £{competitor.monthlyPrice}/month. BookB is £15/month. That's £{annualSavings.toLocaleString()} saved every year—enough to hire another stylist or invest in marketing.
                </p>
                <div className="bg-white rounded p-4 font-mono">
                  <div className="flex justify-between mb-2">
                    <span>{competitor.name} (annual):</span>
                    <span className="font-bold">£{(competitor.monthlyPrice * 12).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>BookB (annual):</span>
                    <span className="font-bold">£{(15 * 12).toLocaleString()}</span>
                  </div>
                  <div className="border-t-2 border-success pt-2 flex justify-between">
                    <span className="font-bold">You save:</span>
                    <span className="font-bold text-success">£{annualSavings.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 border-2 border-accent rounded-lg p-8">
                <h3 className="text-2xl font-bold text-accent mb-4">
                  No Setup Fees
                </h3>
                <p className="text-gray-700 mb-4">
                  {competitor.name} charges £{competitor.setupFee}+ for setup and onboarding. BookB has zero setup fees—start using it immediately with free data migration.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-success text-xl mr-2">✓</span>
                    <span className="text-gray-700">Free account setup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success text-xl mr-2">✓</span>
                    <span className="text-gray-700">Free data migration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success text-xl mr-2">✓</span>
                    <span className="text-gray-700">Free training & onboarding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success text-xl mr-2">✓</span>
                    <span className="text-gray-700">Start in under 24 hours</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/10 border-2 border-primary rounded-lg p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Month-to-Month Pricing
                </h3>
                <p className="text-gray-700 mb-4">
                  {competitor.name} requires {competitor.contract}. BookB is month-to-month with no long-term commitments. Cancel anytime with no penalties.
                </p>
                <div className="bg-white rounded p-4">
                  <div className="mb-3">
                    <div className="text-danger font-bold mb-1">{competitor.name}:</div>
                    <div className="text-sm text-gray-600">{competitor.contract}</div>
                  </div>
                  <div>
                    <div className="text-success font-bold mb-1">BookB:</div>
                    <div className="text-sm text-gray-600">Month-to-month • Cancel anytime • No penalties</div>
                  </div>
                </div>
              </div>

              <div className="bg-success/10 border-2 border-success rounded-lg p-8">
                <h3 className="text-2xl font-bold text-success mb-4">
                  Same Features
                </h3>
                <p className="text-gray-700 mb-4">
                  BookB includes all the features you use in {competitor.name}: queue management, online booking, POS, analytics, and more.
                </p>
                <ul className="space-y-2">
                  {['Queue Management', 'Online Booking', 'POS System', 'Analytics Dashboard', 'SMS Reminders', 'Staff Management', 'Mobile App', 'Customer CRM'].map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <span className="text-success text-lg mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Migration Guide */}
        <section className="py-20 bg-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-primary text-center mb-12">
              Migration Made Easy
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border-l-4 border-accent">
                <div className="flex items-center mb-3">
                  <div className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-primary">Book a Demo</h3>
                </div>
                <p className="text-gray-700 ml-12">
                  Schedule a 15-minute call to see BookB in action and discuss your needs.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-accent">
                <div className="flex items-center mb-3">
                  <div className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-primary">We Migrate Your Data</h3>
                </div>
                <p className="text-gray-700 ml-12">
                  Our team transfers all your data from {competitor.name} (clients, appointments, history) for free.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-accent">
                <div className="flex items-center mb-3">
                  <div className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-primary">Training & Setup</h3>
                </div>
                <p className="text-gray-700 ml-12">
                  We train your team and ensure everything works perfectly before you go live.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-success">
                <div className="flex items-center mb-3">
                  <div className="bg-success text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-success">Start Saving</h3>
                </div>
                <p className="text-gray-700 ml-12">
                  Go live with BookB and start saving £{annualSavings.toLocaleString()} per year immediately.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="/contact"
                className="inline-block bg-accent text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-accent/90 transition-colors"
              >
                Start Migration Today
              </a>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-primary text-center mb-12">
              BookB Pricing
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PricingCard
                tier="starter"
                features={['Up to 1 stylist', 'Queue management', 'Online booking', 'Basic POS', 'SMS reminders', 'Mobile app']}
              />
              <PricingCard
                tier="professional"
                featured={true}
                features={['Up to 5 stylists', 'All Starter features', 'Advanced analytics', 'Inventory management', 'Email marketing', 'Priority support']}
              />
              <PricingCard
                tier="business"
                features={['Up to 15 stylists', 'All Professional features', 'Multi-location', 'Custom branding', 'API access', 'Account manager']}
              />
              <PricingCard
                tier="enterprise"
                features={['Unlimited stylists', 'All Business features', 'Custom integrations', 'White-label', 'SLA guarantee', '24/7 phone support']}
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-accent text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Save £{annualSavings.toLocaleString()} Per Year?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Join the salons who switched from {competitor.name} to BookB and never looked back.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-accent px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Switch to BookB Today
            </a>
            <p className="mt-4 text-sm text-gray-200">
              Free data migration • 14-day trial • No credit card required
            </p>
          </div>
        </section>
      </main>
      <Footer />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
    </>
  )
}
