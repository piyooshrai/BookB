import Image from 'next/image'
import { images } from '@/lib/unsplash-images'

export default function SydneySalonSoftware() {
  return (
    <>
      <nav>
        <div className="container">
          <a href="/" className="logo">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="5" width="10" height="30" rx="1" fill="currentColor"/>
              <rect x="4" y="10" width="6" height="2" fill="white"/>
              <rect x="4" y="14" width="6" height="2" fill="white"/>
              <rect x="4" y="18" width="6" height="2" fill="white"/>
              <rect x="4" y="22" width="6" height="2" fill="white"/>
              <rect x="4" y="26" width="6" height="2" fill="white"/>
              <rect x="4" y="30" width="6" height="2" fill="white"/>
              <path d="M18 2 L24 12 L22 13 L18 8 L14 13 L12 12 Z" fill="currentColor"/>
              <circle cx="14" cy="18" r="4" fill="currentColor"/>
              <circle cx="14" cy="18" r="2" fill="white"/>
              <circle cx="22" cy="18" r="4" fill="currentColor"/>
              <circle cx="22" cy="18" r="2" fill="white"/>
              <rect x="17" y="13.5" width="2" height="2" fill="white"/>
            </svg>
            <span>BookB</span>
          </a>
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
          <h1>Salon Software for Sydney Hair & Beauty Businesses</h1>
          <p className="hero-subtitle">
            BookB helps Sydney salons manage appointments, clients, staff, and payments with powerful cloud-based software designed for Australian beauty businesses. From CBD to Bondi, Surry Hills and beyond, Sydney salons trust BookB.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Trusted by 150+ Sydney salons</p>
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
          <h2>Perfect for Sydney's Beauty Market</h2>
          <div className="feature-item">
            <div className="feature-content">
              <h3>Built for Australian Salons</h3>
              <p>Sydney's beauty industry requires software that understands local business practices. BookB provides features designed for Australian salons including GST calculation and reporting. Payment processing integrates with Australian banks and EFTPOS systems. Online booking works with local phone formats and postcodes. Appointment scheduling accounts for Australian public holidays. Staff scheduling respects Fair Work requirements. Currency displays in AUD. Time and date formats match Australian preferences.</p>
            </div>
            <div className="feature-visual">
              <Image
                src={images.hairSalon.url}
                alt="Professional salon management software features"
                width={500}
                height={375}
                loading="lazy"
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2>Pricing for Sydney Salons</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="plan-name">Starter</div>
              <div className="plan-price">AUD $30<span className="plan-period">/mo</span></div>
              <ul className="plan-features">
                <li>Up to 2 staff</li>
                <li>Unlimited appointments</li>
                <li>Online booking</li>
              </ul>
              <a href="#trial" className="btn btn-primary plan-cta">Start Free Trial</a>
            </div>
            <div className="pricing-card featured">
              <div className="popular-badge">MOST POPULAR</div>
              <div className="plan-name">Professional</div>
              <div className="plan-price">AUD $75<span className="plan-period">/mo</span></div>
              <ul className="plan-features">
                <li>Up to 10 staff</li>
                <li>All Starter features</li>
                <li>Advanced analytics</li>
              </ul>
              <a href="#trial" className="btn btn-primary plan-cta">Start Free Trial</a>
            </div>
            <div className="pricing-card">
              <div className="plan-name">Business</div>
              <div className="plan-price">AUD $150<span className="plan-period">/mo</span></div>
              <ul className="plan-features">
                <li>Up to 25 staff</li>
                <li>Multi-location</li>
                <li>Priority support</li>
              </ul>
              <a href="#trial" className="btn btn-primary plan-cta">Start Free Trial</a>
            </div>
            <div className="pricing-card">
              <div className="plan-name">Enterprise</div>
              <div className="plan-price">Custom</div>
              <ul className="plan-features">
                <li>Unlimited staff</li>
                <li>Custom development</li>
                <li>24/7 support</li>
              </ul>
              <a href="/contact" className="btn btn-secondary plan-cta">Contact Sales</a>
            </div>
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
          <div className="by-the-algorithm">
            Built by <a href="https://www.the-algo.com" target="_blank" rel="noopener noreferrer">The Algorithm</a>
          </div>
        </div>
      </footer>
    </>
  );
}
