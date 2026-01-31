import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PricingCard } from '@/components/PricingCard'
import { FeatureShowcase } from '@/components/FeatureShowcase'
import { generateLocalBusinessSchema } from '@/lib/schema'
import cities from '@/content/cities.json'

type Props = {
  params: { country: string; city: string }
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    country: city.countryCode.toLowerCase(),
    city: city.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = cities.find((c) => c.slug === params.city && c.countryCode.toLowerCase() === params.country)

  if (!city) return {}

  return {
    title: `Salon Management Software in ${city.name} | BookB - From £15/month`,
    description: `Professional salon software for salons in ${city.name}, ${city.country}. Queue management, online booking, POS system. Trusted by salons near ${city.landmarks[0]}.`,
    openGraph: {
      title: `BookB - Salon Software in ${city.name}`,
      description: `Professional salon management software serving ${city.name}. Starting at £15/month.`,
    },
  }
}

export default function CityPage({ params }: Props) {
  const city = cities.find((c) => c.slug === params.city && c.countryCode.toLowerCase() === params.country)

  if (!city) {
    notFound()
  }

  const localBusinessSchema = generateLocalBusinessSchema(
    city.name,
    city.country,
    city.lat,
    city.lng
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
                Salon Management Software in {city.name}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Professional salon software for independent salons in {city.name}. Queue management, booking system, and POS—all from £15/month.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-accent px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
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

        {/* Local Social Proof */}
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Trusted by Salons Across {city.name}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Serving salons near {city.landmarks.slice(0, 3).join(', ')}, and across {city.neighborhoods.slice(0, 3).join(', ')}
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6 border border-border">
                  <div className="text-4xl font-bold text-accent mb-2">50+</div>
                  <div className="text-gray-600">Salons in {city.name}</div>
                </div>
                <div className="bg-white rounded-lg p-6 border border-border">
                  <div className="text-4xl font-bold text-success mb-2">4.8★</div>
                  <div className="text-gray-600">Average Rating</div>
                </div>
                <div className="bg-white rounded-lg p-6 border border-border">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-gray-600">Local Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose BookB in City */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-primary text-center mb-12">
              Why {city.name} Salons Choose BookB
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border border-border rounded-lg p-8">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Affordable for {city.name} Salons
                </h3>
                <p className="text-gray-600">
                  Starting at £15/month, BookB is designed for independent salons in {city.name}. No enterprise pricing for features you don't need.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-8">
                <div className="text-3xl mb-4">📍</div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Local Payment Support
                </h3>
                <p className="text-gray-600">
                  Accept all payment methods popular in {city.country}. Integrated with local payment processors for better rates.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-8">
                <div className="text-3xl mb-4">🕐</div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Queue Management for Walk-ins
                </h3>
                <p className="text-gray-600">
                  Busy salons in {city.landmarks[0]} love our queue management. Track walk-ins and reduce wait times.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-8">
                <div className="text-3xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Mobile-First Design
                </h3>
                <p className="text-gray-600">
                  Perfect for on-the-go stylists. Book appointments from anywhere in {city.name} with our mobile app.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-8">
                <div className="text-3xl mb-4">🌍</div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Multi-Language Support
                </h3>
                <p className="text-gray-600">
                  Serve your diverse {city.name} clientele with support for multiple languages and currencies.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-8">
                <div className="text-3xl mb-4">💬</div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Local Customer Support
                </h3>
                <p className="text-gray-600">
                  Get help when you need it. Our support team understands the {city.name} salon market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Everything Your {city.name} Salon Needs
              </h2>
              <p className="text-xl text-gray-600">
                Professional features designed for busy salons
              </p>
            </div>
            <FeatureShowcase />
          </div>
        </section>

        {/* Neighborhoods */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-primary text-center mb-12">
              Serving Salons Throughout {city.name}
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {city.neighborhoods.map((neighborhood, index) => (
                <div key={index} className="bg-white border border-border rounded-lg p-6 text-center">
                  <h3 className="text-xl font-bold text-primary mb-2">{neighborhood}</h3>
                  <p className="text-gray-600 text-sm">
                    Professional salon software for salons in {neighborhood}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center text-gray-600">
              <p>Also serving: {city.landmarks.join(' • ')}</p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Pricing for {city.name} Salons
              </h2>
              <p className="text-xl text-gray-600">
                Simple, transparent pricing that scales with your salon
              </p>
            </div>

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

        {/* Local CTA */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Join {city.name}'s Top Salons on BookB
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Trusted by salons across {city.name}. From £15/month with no contracts.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </a>
            <p className="mt-4 text-sm text-gray-300">
              Serving salons in {city.name} since 2023 • 14-day free trial
            </p>
          </div>
        </section>
      </main>
      <Footer />

      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  )
}
