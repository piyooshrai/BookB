import Image from 'next/image'
import { images } from '@/lib/unsplash-images'

export default function NottinghamSalonSoftware() {
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
          <h1>Salon Software for Nottingham Hair & Beauty Businesses</h1>
          <p className="hero-subtitle">
            BookB helps Nottingham salons manage appointments, clients, staff, and payments with powerful cloud-based software designed specifically for UK beauty businesses. From City Centre to West Bridgford, Beeston to Hockley, Nottingham salons trust BookB for reliable, affordable salon management that works perfectly with UK payment systems, VAT requirements, and East Midlands business practices serving this historic city's modern beauty industry.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Trusted by 150+ Nottingham salons and growing</p>
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
          <h2>Perfect for Nottingham's Growing Beauty Market</h2>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Built for UK Salons and Beauty Businesses</h3>
              <p>
                Nottingham's beauty industry serves this East Midlands city requiring software that understands local business practices and regulatory requirements while supporting the city's student population and professional workforce driving diverse beauty service demand. BookB provides features specifically designed for UK salons including automatic VAT calculation and reporting that aligns with HMRC requirements making tax compliance straightforward for Nottingham business owners managing successful salons. Price display follows UK conventions with VAT-inclusive pricing visible to clients while tracking VAT separately for business accounting and quarterly submissions. Payment processing integrates seamlessly with UK banks and card processors including contactless payments ubiquitous throughout Nottingham from Victoria Centre to independent boutiques. Online booking works perfectly with UK phone number formats, postal codes including Nottingham's NG postcodes, and address conventions familiar to local clients. Appointment scheduling accounts for UK bank holidays automatically preventing booking conflicts. Student pricing enables discounted services for university students common in Nottingham market. Staff scheduling respects UK employment law including Working Time Regulations and holiday entitlements. Payroll reporting generates data formatted for UK accounting software. GDPR compliance helps Nottingham salons meet data protection obligations. Marketing communications respect UK regulations ensuring compliant campaigns. Currency displays in pounds sterling with proper formatting. Time displays match UK preferences. Date formats follow UK conventions.
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
              <h3>Student and Discount Management</h3>
              <p>
                Nottingham's large student population requires flexible pricing accommodating student discounts while maintaining profitability serving professional clients paying full prices. BookB's pricing features help Nottingham salons implement complex pricing strategies maximizing revenue across diverse clientele. Student verification validates university enrollment through email verification or ID checking before applying discounted pricing protecting profit margins from discount abuse. Tiered pricing offers different rates for students, professionals, and seniors enabling targeted pricing strategies matching client demographics and willingness to pay. Off-peak discounts incentivize appointments during quiet periods filling schedule gaps while maintaining premium pricing during busy Nottingham shopping Saturdays. First-time client promotions attract new customers with introductory offers building client base and encouraging repeat business through excellent service experiences. Referral discounts reward clients who recommend your Nottingham salon to friends and colleagues generating word-of-mouth marketing and new client acquisition. Package bundles combine multiple services at attractive pricing encouraging larger transactions and prepayment creating predictable revenue and client commitment. Loyalty program discounts reward repeat visits building long-term relationships with best Nottingham clients who provide stable recurring revenue throughout university terms and year-round. Birthday promotions offer special discounts during birth months encouraging celebratory salon visits and bringing friends for group bookings. Seasonal promotions create limited-time offers for Christmas, Valentine's Day, and other occasions generating urgency and increased booking volume. Promo codes enable trackable discount campaigns measuring effectiveness of different marketing channels and promotional strategies. Group booking discounts incentivize wedding parties and friends booking together creating efficient scheduling and larger total transaction values. Corporate discounts serve local Nottingham businesses offering employee benefits programs and building bulk business relationships.
              </p>
            </div>
            <div className="feature-visual">
              <div style={{padding: '60px', background: '#f8fafc', borderRadius: '8px'}}>
                [Discount Management Visual]
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Online Booking That Nottingham Clients Love</h3>
              <p>
                Nottingham clients expect convenient online booking matching digital experiences from other services. BookB provides mobile-optimized booking working on trams, in cafes, anywhere. Real-time availability shows open slots. Stylist profiles help choose professionals. Service descriptions explain treatments. Galleries showcase work. Location information includes directions from Nottingham Station. Deposit payments secure appointments. Automatic reminders reduce no-shows. Self-service rescheduling reduces phone calls. Package purchasing encourages prepayment. Gift cards generate revenue. Membership programs create predictable income.
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
              <h3>Reporting and Analytics for Nottingham Business Owners</h3>
              <p>
                Running profitable Nottingham salons requires understanding numbers with competitive rent and pricing pressures. BookB provides comprehensive reporting for data-driven decisions. Revenue reporting breaks down income by categories, products, stylists, and periods. Staff productivity compares team performance. Client retention shows visit patterns. Service profitability shows true margins. Peak hour analysis identifies busy times. Marketing tracking measures campaign effectiveness. Inventory reports identify slow products. No-show tracking quantifies lost revenue. Year comparisons show growth trends. VAT reporting provides HMRC data. Payroll reports support UK processing. Custom reporting analyzes specific questions.
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
          <h2>Why Nottingham Salons Choose BookB</h2>
          <p className="section-subtitle">Join hundreds of Nottingham beauty businesses already using BookB</p>

          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'left'}}>
            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Works with UK payment processors</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                BookB integrates with UK payment providers. Process payments throughout Nottingham. Accept pounds sterling.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Student-friendly pricing options</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Flexible pricing accommodates Nottingham's large student population while maintaining profitability across diverse clientele.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Local support during UK business hours</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Support available during Nottingham business hours. UK salon operations expertise.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Transparent pricing in pounds sterling</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Clear GBP pricing. UK bank payment processing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2>Affordable Pricing for Nottingham Salons</h2>
          <p className="section-subtitle">Professional software at prices that work for Nottingham businesses</p>

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
              <p className="plan-description">For growing Nottingham salons with multiple stylists</p>
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
              <p className="plan-description">For established Nottingham salons with larger teams</p>
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
              <p className="plan-description">For Nottingham salon chains and franchise operations</p>
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
