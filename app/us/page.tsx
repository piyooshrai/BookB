import Image from 'next/image'
import { images } from '@/lib/unsplash-images'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

export default function USPage() {
  return (
    <>
      <Navigation />

      <section className="hero">
        <div className="hero-grid">
          <div className="hero-content">
            <h1>US Salon Management Software - $15/month</h1>
            <p className="hero-subtitle">
              Professional salon booking and management software for US salons. Trusted by salons across New York, Los Angeles, Chicago, and 10 more cities. Save $3,420 annually vs Zenoti, Vagaro, and other expensive alternatives.
            </p>
            <div className="cta-buttons">
              <a href="#trial" className="btn btn-primary">Start 14-Day Free Trial</a>
              <a href="/pricing" className="btn btn-secondary">See US Pricing</a>
            </div>
            <p className="trust-line">Serving salons coast-to-coast across America</p>
          </div>
          <div className="hero-image">
            <Image
              src={images.cities.newYork.url}
              alt={images.cities.newYork.alt}
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
          <h2>US Salon Software Features</h2>
          <p className="section-subtitle">Complete salon management designed for American salons</p>

          <div className="feature-item">
            <div className="feature-content">
              <h3>US-Specific Features</h3>
              <p>Built for US salons with USD pricing, US phone number formatting, and integrations with popular US payment processors. Full compliance with US data regulations.</p>
              <ul>
                <li>$ USD pricing throughout</li>
                <li>US holiday calendar</li>
                <li>Stripe US & Square integration</li>
                <li>US tax calculation support</li>
                <li>US mobile number formats</li>
              </ul>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Pricing for US Salons</h3>
              <p>Transparent US pricing with no hidden fees. All prices shown in USD.</p>
              <ul>
                <li><strong>Starter:</strong> $15/month - Perfect for solo stylists</li>
                <li><strong>Professional:</strong> $45/month - For growing salons (up to 15 staff)</li>
                <li><strong>Business:</strong> $75/month - Established salons (up to 50 staff)</li>
                <li><strong>Enterprise:</strong> $125/month - Large chains & franchises</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="locations">
        <div className="container">
          <h2>Serving Salons Across the USA</h2>
          <p className="section-subtitle">BookB powers salons in major US cities</p>
          <div className="city-grid">
            <div className="city-card"><a href="/us/new-york">New York Salons</a></div>
            <div className="city-card"><a href="/us/los-angeles">Los Angeles Salons</a></div>
            <div className="city-card"><a href="/us/chicago">Chicago Salons</a></div>
            <div className="city-card"><a href="/us/houston">Houston Salons</a></div>
            <div className="city-card"><a href="/us/phoenix">Phoenix Salons</a></div>
            <div className="city-card"><a href="/us/san-diego">San Diego Salons</a></div>
            <div className="city-card"><a href="/us/dallas">Dallas Salons</a></div>
            <div className="city-card"><a href="/us/san-francisco">San Francisco Salons</a></div>
            <div className="city-card"><a href="/us/atlanta">Atlanta Salons</a></div>
            <div className="city-card"><a href="/us/boston">Boston Salons</a></div>
            <div className="city-card"><a href="/us/seattle">Seattle Salons</a></div>
            <div className="city-card"><a href="/us/denver">Denver Salons</a></div>
            <div className="city-card"><a href="/us/miami">Miami Salons</a></div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
