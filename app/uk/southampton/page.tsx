import Image from 'next/image'
import { images } from '@/lib/unsplash-images'

export default function SouthamptonSalonSoftware() {
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
          <h1>Salon Software for Southampton Hair & Beauty Businesses</h1>
          <p className="hero-subtitle">
            BookB helps Southampton salons manage appointments, clients, staff, and payments with powerful cloud-based software designed specifically for UK beauty businesses. From City Centre to Ocean Village, Portswood to Shirley, Southampton salons trust BookB for reliable, affordable salon management that works perfectly with UK payment systems, VAT requirements, and South Coast business practices serving this maritime city's beauty industry.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Trusted by 130+ Southampton salons and growing</p>
        </div>
          <div className="hero-image">
            <Image
              src={images.cities.generic.url}
              alt={images.cities.generic.alt}
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
          <h2>Perfect for Southampton's Coastal Beauty Market</h2>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Built for UK Salons and Beauty Businesses</h3>
              <p>
                Southampton's beauty industry serves this major port city requiring software understanding UK business practices. BookB provides features for UK salons including automatic VAT calculation. Price display follows UK conventions. Payment processing integrates with UK banks. Online booking works with UK formats and Southampton's SO postcodes. Appointment scheduling accounts for UK holidays. Staff scheduling respects UK employment law. Payroll reporting generates UK data. GDPR compliance meets obligations. Marketing respects UK regulations. Currency in pounds sterling. UK time and date formats.
              </p>
            </div>
            <div className="feature-visual">
              <div style={{padding: '60px', background: '#f8fafc', borderRadius: '8px'}}>
                [UK Features Visual]
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Multi-Service Salon Management</h3>
              <p>
                Southampton salons offer diverse services from hair to nails to beauty requiring flexible service management. BookB organizes service menus, pricing, and delivery. Service catalog maintains comprehensive listings with descriptions, durations, and pricing. Category organization groups services logically for easy browsing. Add-on services enable upselling complementary treatments. Package bundles combine services attractively. Variable pricing accommodates different stylists and experience levels. Seasonal services promote timely treatments. Service dependencies ensure prerequisite treatments. Duration estimates prevent overbooking. Product requirements track supplies needed. Staff assignments restrict services to qualified professionals. Online visibility controls which services appear in booking.
              </p>
            </div>
            <div className="feature-visual">
              <div style={{padding: '60px', background: '#f8fafc', borderRadius: '8px'}}>
                [Service Management Visual]
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Online Booking That Southampton Clients Love</h3>
              <p>
                Southampton clients expect convenient booking. BookB provides mobile-optimized access. Real-time availability shows slots. Stylist profiles help selection. Service descriptions explain options. Galleries showcase results. Location includes directions. Deposits secure appointments. Reminders reduce no-shows. Self-service rescheduling reduces admin. Packages encourage prepayment. Gift cards generate revenue. Memberships create income.
              </p>
            </div>
            <div className="feature-visual">
              <div style={{padding: '60px', background: '#f8fafc', borderRadius: '8px'}}>
                [Online Booking Visual]
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Reporting and Analytics for Southampton Business Owners</h3>
              <p>
                Running profitable Southampton salons requires data analysis. BookB provides reporting. Revenue breakdown by categories. Staff productivity comparison. Client retention patterns. Service profitability margins. Peak time identification. Marketing effectiveness. Inventory tracking. No-show quantification. Year comparisons. VAT reporting. Payroll data. Custom analysis.
              </p>
            </div>
            <div className="feature-visual">
              <div style={{padding: '60px', background: '#f8fafc', borderRadius: '8px'}}>
                [Analytics Visual]
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="comparison">
        <div className="container">
          <h2>Why Southampton Salons Choose BookB</h2>
          <p className="section-subtitle">Join hundreds of Southampton beauty businesses already using BookB</p>

          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'left'}}>
            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Works with UK payment processors</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                BookB integrates with UK providers. Accept pounds sterling in Southampton.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Perfect for Southampton's diverse market</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Flexible features serve Southampton's mix of residents, students, and cruise passengers.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Local support during UK business hours</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Support during Southampton hours. UK expertise.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Transparent pricing in pounds sterling</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Clear GBP pricing. UK processing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2>Affordable Pricing for Southampton Salons</h2>
          <p className="section-subtitle">Professional software at prices that work for Southampton businesses</p>

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="plan-name">Starter</div>
              <div className="plan-price">£39<span className="plan-period">/mo</span></div>
              <p className="plan-description">Perfect for single practitioners and small salons</p>
              <ul className="plan-features">
                <li>Up to 2 staff members</li>
                <li>Unlimited appointments</li>
                <li>Online booking</li>
                <li>Client management</li>
                <li>Basic reporting</li>
                <li>Email support</li>
              </ul>
              <a href="#trial" className="btn btn-primary plan-cta">Start Free Trial</a>
            </div>

            <div className="pricing-card featured">
              <div className="popular-badge">MOST POPULAR</div>
              <div className="plan-name">Professional</div>
              <div className="plan-price">£79<span className="plan-period">/mo</span></div>
              <p className="plan-description">For growing Southampton salons with multiple stylists</p>
              <ul className="plan-features">
                <li>Up to 10 staff members</li>
                <li>Everything in Starter</li>
                <li>SMS notifications</li>
                <li>Advanced reporting</li>
                <li>Inventory management</li>
                <li>Marketing automation</li>
                <li>Phone support</li>
              </ul>
              <a href="#trial" className="btn btn-primary plan-cta">Start Free Trial</a>
            </div>

            <div className="pricing-card">
              <div className="plan-name">Business</div>
              <div className="plan-price">£159<span className="plan-period">/mo</span></div>
              <p className="plan-description">For established Southampton salons with larger teams</p>
              <ul className="plan-features">
                <li>Up to 25 staff members</li>
                <li>Everything in Professional</li>
                <li>Multi-location support</li>
                <li>Custom integrations</li>
                <li>Priority support</li>
                <li>Dedicated account manager</li>
              </ul>
              <a href="#trial" className="btn btn-primary plan-cta">Start Free Trial</a>
            </div>

            <div className="pricing-card">
              <div className="plan-name">Enterprise</div>
              <div className="plan-price">Custom</div>
              <p className="plan-description">For Southampton salon chains and franchise operations</p>
              <ul className="plan-features">
                <li>Unlimited staff</li>
                <li>Everything in Business</li>
                <li>Custom development</li>
                <li>SLA guarantees</li>
                <li>On-site training</li>
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
