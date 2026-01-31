import Image from 'next/image'
import { images } from '@/lib/unsplash-images'

export default function AUPage() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="logo">BookB</div>
          <ul>
            <li><a href="/features">Features</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="#trial" className="nav-cta">Start Free Trial</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-grid">
          <div className="hero-content">
            <h1>Australian Salon Management Software - AUD25/month</h1>
            <p className="hero-subtitle">
              Professional salon booking and management software for Australian salons. Trusted by salons across Sydney, Melbourne, Brisbane and more. Save thousands annually vs expensive international alternatives.
            </p>
            <div className="cta-buttons">
              <a href="#trial" className="btn btn-primary">Start 14-Day Free Trial</a>
              <a href="/pricing" className="btn btn-secondary">See Australian Pricing</a>
            </div>
            <p className="trust-line">Proudly serving salons across Australia</p>
          </div>
          <div className="hero-image">
            <Image
              src={images.cities.sydney.url}
              alt={images.cities.sydney.alt}
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
          <h2>Australian Salon Software Features</h2>
          <p className="section-subtitle">Complete salon management designed for Australian salons</p>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Australia-Specific Features</h3>
              <p>Built for Australian salons with AUD pricing, Australian phone number formatting, and integrations with popular Australian payment processors. Full compliance with Australian privacy laws.</p>
              <ul>
                <li>AUD pricing throughout</li>
                <li>Australian public holiday calendar</li>
                <li>Stripe Australia integration</li>
                <li>GST calculation support</li>
                <li>Australian mobile number formats</li>
              </ul>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Pricing for Australian Salons</h3>
              <p>Transparent Australian pricing with no hidden fees. All prices shown in AUD.</p>
              <ul>
                <li><strong>Starter:</strong> AUD25/month - Perfect for solo stylists</li>
                <li><strong>Professional:</strong> AUD75/month - For growing salons (up to 15 staff)</li>
                <li><strong>Business:</strong> AUD125/month - Established salons (up to 50 staff)</li>
                <li><strong>Enterprise:</strong> AUD199/month - Large chains & franchises</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="locations">
        <div className="container">
          <h2>Serving Salons Across Australia</h2>
          <p className="section-subtitle">BookB powers salons in major Australian cities</p>
          <div className="city-grid">
            <div className="city-card"><a href="/au/sydney">Sydney Salons</a></div>
            <div className="city-card"><a href="/au/melbourne">Melbourne Salons</a></div>
            <div className="city-card"><a href="/au/brisbane">Brisbane Salons</a></div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <h4>Product</h4>
              <ul>
                <li><a href="/features">Features</a></li>
                <li><a href="/pricing">Pricing</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Solutions</h4>
              <ul>
                <li><a href="/hair-salon-software">Hair Salon Software</a></li>
                <li><a href="/barbershop-software">Barbershop Software</a></li>
                <li><a href="/nail-salon-software">Nail Salon Software</a></li>
                <li><a href="/beauty-therapist-software">Beauty Therapist Software</a></li>
                <li><a href="/day-spa-software">Day Spa Software</a></li>
                <li><a href="/mobile-hairdresser-software">Mobile Hairdresser Software</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Alternatives</h4>
              <ul>
                <li><a href="/zenoti-alternative">Zenoti Alternative</a></li>
                <li><a href="/fresha-alternative">Fresha Alternative</a></li>
                <li><a href="/phorest-alternative">Phorest Alternative</a></li>
                <li><a href="/vagaro-alternative">Vagaro Alternative</a></li>
                <li><a href="/boulevard-alternative">Boulevard Alternative</a></li>
                <li><a href="/square-appointments-alternative">Square Alternative</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Popular Locations</h4>
              <ul>
                <li><a href="/uk/london">London</a></li>
                <li><a href="/uk/manchester">Manchester</a></li>
                <li><a href="/us/new-york">New York</a></li>
                <li><a href="/us/los-angeles">Los Angeles</a></li>
                <li><a href="/us/chicago">Chicago</a></li>
                <li><a href="/au/sydney">Sydney</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">© 2026 BookB. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
