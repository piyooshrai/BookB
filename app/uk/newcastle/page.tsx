import Image from 'next/image'
import { images } from '@/lib/unsplash-images'

export default function NewcastleSalonSoftware() {
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
          <h1>Salon Software for Newcastle Hair & Beauty Businesses</h1>
          <p className="hero-subtitle">
            BookB helps Newcastle salons manage appointments, clients, staff, and payments with powerful cloud-based software designed specifically for UK beauty businesses. From City Centre to Jesmond, Quayside to Gosforth, Newcastle salons trust BookB for reliable, affordable salon management that works perfectly with UK payment systems, VAT requirements, and Geordie business practices serving the North East's vibrant beauty community.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Trusted by 190+ Newcastle salons and growing</p>
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
          <h2>Perfect for Newcastle's Thriving Beauty Scene</h2>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Built for UK Salons and Beauty Businesses</h3>
              <p>
                Newcastle's beauty industry serves the North East's regional capital requiring software that understands local business practices and regulatory requirements while supporting the city's entrepreneurial culture and famous nightlife scene driving demand for beauty services. BookB provides features specifically designed for UK salons including automatic VAT calculation and reporting that aligns with HMRC requirements making tax compliance straightforward for Newcastle business owners managing successful salons across Tyneside. Price display follows UK conventions with VAT-inclusive pricing visible to clients while tracking VAT separately for business accounting and quarterly submissions to tax authorities ensuring compliance with UK regulations. Payment processing integrates seamlessly with UK banks and card processors including contactless payments ubiquitous throughout Newcastle from Eldon Square to Grey Street boutiques. Online booking works perfectly with UK phone number formats, postal codes including Newcastle's NE postcodes covering Heaton, Fenham, and city centre, and address conventions familiar to local clients across Tyneside. Appointment scheduling accounts for UK bank holidays automatically preventing booking conflicts during Easter, Christmas, and other public holidays when Newcastle salons may close for celebrations. Staff scheduling respects UK employment law including Working Time Regulations, break requirements, and holiday entitlements mandatory for Newcastle employees whether experienced senior stylists or apprentice beauty therapists learning their trade in the North East. Payroll reporting generates data formatted for UK accounting software and payroll providers serving Newcastle businesses from sole traders to multi-location salon chains expanding across the region. GDPR compliance features help Newcastle salons meet data protection obligations for storing and processing client personal information in accordance with UK regulations protecting customer privacy and data rights. Marketing communications respect UK regulations around consent, opt-outs, and commercial electronic messages ensuring your promotional campaigns stay compliant while building your Newcastle client base throughout Tyneside and the North East. Currency displays in pounds sterling with proper formatting and no confusing currency conversions or international complications affecting pricing transparency for Newcastle clients. Time displays in 24-hour or 12-hour formats matching UK preferences and client expectations throughout Newcastle's diverse neighborhoods. Date formats follow UK conventions preventing American-style date confusion.
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
              <h3>Client Management for Newcastle Salons</h3>
              <p>
                Newcastle salons build success through loyal client relationships requiring comprehensive client management tracking service history, preferences, and communication across years of regular visits. BookB's client management features help Newcastle salons deliver personalized service that keeps clients returning month after month creating stable recurring revenue. Client profiles store complete information including contact details, service history, product preferences, and personal notes helping Newcastle stylists remember details and provide consistent excellent service. Appointment history tracks every visit showing dates, services performed, products used, and amounts spent building comprehensive picture of client relationships over time. Color formulas record exact product mixtures and techniques used for color services ensuring consistent results when clients return for root touch-ups and full color applications. Style preferences document client preferences for blow-dry techniques, parting placement, and finishing products helping Newcastle stylists deliver results clients love every visit. Allergy tracking records product sensitivities and contraindications preventing adverse reactions and protecting client safety during chemical treatments and services. Birthday notifications alert staff to upcoming client birthdays enabling personalized greeting messages and special birthday promotions encouraging celebratory salon visits. Visit frequency analysis identifies clients who visit regularly versus those becoming less frequent enabling targeted reengagement campaigns before losing clients completely. Lifetime value calculations show total revenue generated by each client helping Newcastle salons identify their most valuable customers worthy of VIP treatment and exclusive offers. Family linking connects related clients showing household relationships and enabling family-focused promotions and referral tracking between family members. Photo galleries store before and after images documenting transformation results and building portfolio showcasing Newcastle salon capabilities to prospective clients. Communication history logs all emails, text messages, and marketing contacts maintaining complete record of client interactions and preferences for contact frequency and methods.
              </p>
            </div>
            <div className="feature-visual">
              <div style={{padding: '60px', background: '#f8fafc', borderRadius: '8px'}}>
                [Client Management Visual]
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Online Booking That Newcastle Clients Love</h3>
              <p>
                Newcastle clients expect sophisticated online booking capabilities matching the digital experiences they enjoy from other service providers throughout the North East. BookB provides mobile-optimized online booking that works perfectly on Metro trains, in Quayside cafes, and anywhere clients access their smartphones throughout the day. Real-time availability shows exactly which appointment slots remain open preventing booking frustration. Stylist profiles include photos, specialties, and reviews helping Newcastle clients choose the right professional. Service descriptions explain treatments clearly with duration and pricing. Before and after galleries showcase work building confidence. Location information includes directions from Central Station, parking options, and Metro stops. Contactless deposit payments secure appointments reducing no-shows. Automatic reminders reduce no-shows without staff phone calls. Rescheduling through client self-service reduces phone interruptions. Package purchasing encourages prepayment. Gift cards generate revenue and introduce new clients. Membership programs create predictable revenue.
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
              <h3>Reporting and Analytics for Newcastle Business Owners</h3>
              <p>
                Running a profitable salon in Newcastle requires understanding numbers with competitive rent, skilled staff wages, and pricing pressures from numerous beauty businesses throughout Tyneside. BookB provides comprehensive reporting helping Newcastle salon owners make data-driven decisions daily, weekly, and monthly. Revenue reporting breaks down income by category, products, stylists, and time periods. Staff productivity metrics compare team performance. Client retention analysis shows visit frequency patterns. Service profitability calculations show true margins after costs. Peak hour analysis identifies optimal staffing times. Marketing tracking measures campaign effectiveness. Inventory turnover identifies slow-moving products. No-show tracking quantifies lost revenue. Year-over-year comparisons show growth trends. VAT reporting provides HMRC submission data. Payroll reports support UK payroll processing. Custom reporting analyzes specific questions.
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
          <h2>Why Newcastle Salons Choose BookB</h2>
          <p className="section-subtitle">Join hundreds of Newcastle beauty businesses already using BookB</p>

          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'left'}}>
            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Works with UK payment processors</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                BookB integrates with popular UK payment providers. Process payments common throughout Newcastle. Accept pounds sterling without conversion fees.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Perfect for Newcastle's vibrant market</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Newcastle's nightlife and social culture drives strong demand for beauty services. BookB helps manage busy schedules during peak weekend demand.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Local support during UK business hours</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Support available during Newcastle business hours. Representatives understand UK operations.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Transparent pricing in pounds sterling</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Clear GBP pricing without currency conversions. UK bank payment processing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2>Affordable Pricing for Newcastle Salons</h2>
          <p className="section-subtitle">Professional software at prices that work for Newcastle businesses</p>

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
              <p className="plan-description">For growing Newcastle salons with multiple stylists</p>
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
              <p className="plan-description">For established Newcastle salons with larger teams</p>
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
              <p className="plan-description">For Newcastle salon chains and franchise operations</p>
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
