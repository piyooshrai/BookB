import Image from 'next/image'
import { images } from '@/lib/unsplash-images'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

export default function AEPage() {
  return (
    <>
      <Navigation />

      <section className="hero">
        <div className="hero-grid">
          <div className="hero-content">
            <h1>UAE Salon Management Software - AED55/month</h1>
            <p className="hero-subtitle">
              Professional salon booking and management software for UAE salons. Trusted by salons across Dubai, Abu Dhabi, Sharjah and throughout the Emirates. Modern salon management at affordable pricing.
            </p>
            <div className="cta-buttons">
              <a href="#trial" className="btn btn-primary">Start 14-Day Free Trial</a>
              <a href="/pricing" className="btn btn-secondary">See UAE Pricing</a>
            </div>
            <p className="trust-line">Serving salons across the UAE and Middle East</p>
          </div>
          <div className="hero-image">
            <Image
              src={images.cities.dubai.url}
              alt={images.cities.dubai.alt}
              width={600}
              height={400}
              priority
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>UAE Salon Software Features</h2>
          <p className="section-subtitle">Complete salon management designed for Middle East salons</p>

          <div className="feature-item">
            <div className="feature-content">
              <h3>UAE-Specific Features</h3>
              <p>Built for UAE salons with AED pricing, Middle East phone number formatting, and integrations with regional payment processors. Multilingual support for English and Arabic.</p>
              <ul>
                <li>AED pricing throughout</li>
                <li>UAE public holiday calendar</li>
                <li>Local payment gateway integration</li>
                <li>VAT calculation support</li>
                <li>Middle East mobile number formats</li>
                <li>Arabic language support (coming soon)</li>
              </ul>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Pricing for UAE Salons</h3>
              <p>Transparent UAE pricing with no hidden fees. All prices shown in AED.</p>
              <ul>
                <li><strong>Starter:</strong> AED55/month - Perfect for solo stylists</li>
                <li><strong>Professional:</strong> AED165/month - For growing salons (up to 15 staff)</li>
                <li><strong>Business:</strong> AED275/month - Established salons (up to 50 staff)</li>
                <li><strong>Enterprise:</strong> AED459/month - Large chains & franchises</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="locations">
        <div className="container">
          <h2>Serving Salons Across the UAE</h2>
          <p className="section-subtitle">BookB powers salons in major UAE cities</p>
          <div className="city-grid">
            <div className="city-card"><a href="/ae/dubai">Dubai Salons</a></div>
            <div className="city-card"><a href="/ae/abu-dhabi">Abu Dhabi Salons</a></div>
            <div className="city-card"><a href="/ae/sharjah">Sharjah Salons</a></div>
            <div className="city-card"><a href="/ae/riyadh">Riyadh Salons</a></div>
            <div className="city-card"><a href="/ae/jeddah">Jeddah Salons</a></div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
