import Image from 'next/image'
import { images } from '@/lib/unsplash-images'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

export default function UKPage() {
  return (
    <>
      <Navigation />

      <section className="hero">
        <div className="hero-grid">
          <div className="hero-content">
            <h1>UK Salon Management Software - £15/month</h1>
            <p className="hero-subtitle">
              Professional salon booking and management software for UK salons. Trusted by salons across London, Manchester, Birmingham, and 13 more cities. Save £3,420 annually vs Zenoti, Phorest, and other expensive alternatives.
            </p>
            <div className="cta-buttons">
              <a href="#trial" className="btn btn-primary">Start 14-Day Free Trial</a>
              <a href="/pricing" className="btn btn-secondary">See UK Pricing</a>
            </div>
            <p className="trust-line">Serving salons across England, Scotland, Wales & Northern Ireland</p>
          </div>
          <div className="hero-image">
            <Image
              src={images.cities.london.url}
              alt={images.cities.london.alt}
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
          <h2>UK Salon Software Features</h2>
          <p className="section-subtitle">Complete salon management designed for UK salons</p>

          <div className="feature-item">
            <div className="feature-content">
              <h3>UK-Specific Features</h3>
              <p>Built for UK salons with GBP pricing, UK phone number formatting, and integrations with popular UK payment processors. GDPR compliant with data stored securely.</p>
              <ul>
                <li>£ GBP pricing throughout</li>
                <li>UK bank holiday calendar</li>
                <li>Stripe UK integration</li>
                <li>GDPR compliant data handling</li>
                <li>UK mobile number formats</li>
              </ul>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Pricing for UK Salons</h3>
              <p>Transparent UK pricing with no hidden fees. All prices shown in GBP.</p>
              <ul>
                <li><strong>Starter:</strong> £15/month - Perfect for solo stylists</li>
                <li><strong>Professional:</strong> £45/month - For growing salons (up to 15 staff)</li>
                <li><strong>Business:</strong> £75/month - Established salons (up to 50 staff)</li>
                <li><strong>Enterprise:</strong> £125/month - Large chains & franchises</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="locations">
        <div className="container">
          <h2>Serving Salons Across the UK</h2>
          <p className="section-subtitle">BookB powers salons in major UK cities</p>
          <div className="city-grid">
            <div className="city-card"><a href="/uk/london">London Salons</a></div>
            <div className="city-card"><a href="/uk/manchester">Manchester Salons</a></div>
            <div className="city-card"><a href="/uk/birmingham">Birmingham Salons</a></div>
            <div className="city-card"><a href="/uk/edinburgh">Edinburgh Salons</a></div>
            <div className="city-card"><a href="/uk/glasgow">Glasgow Salons</a></div>
            <div className="city-card"><a href="/uk/liverpool">Liverpool Salons</a></div>
            <div className="city-card"><a href="/uk/bristol">Bristol Salons</a></div>
            <div className="city-card"><a href="/uk/leeds">Leeds Salons</a></div>
            <div className="city-card"><a href="/uk/sheffield">Sheffield Salons</a></div>
            <div className="city-card"><a href="/uk/cardiff">Cardiff Salons</a></div>
            <div className="city-card"><a href="/uk/brighton">Brighton Salons</a></div>
            <div className="city-card"><a href="/uk/newcastle">Newcastle Salons</a></div>
            <div className="city-card"><a href="/uk/nottingham">Nottingham Salons</a></div>
            <div className="city-card"><a href="/uk/leicester">Leicester Salons</a></div>
            <div className="city-card"><a href="/uk/southampton">Southampton Salons</a></div>
            <div className="city-card"><a href="/uk/belfast">Belfast Salons</a></div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
