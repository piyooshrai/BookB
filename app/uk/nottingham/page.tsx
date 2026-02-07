import Image from 'next/image'
import { images } from '@/lib/unsplash-images'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

export default function NottinghamSalonSoftware() {
  return (
    <>
      <Navigation />

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

                Nottingham's beauty industry serves this East Midlands city requiring software that understands local business practices and regulatory requirements while supporting the city's student population and professional workforce driving diverse beauty service demand. BookB provides features specifically designed for UK salons including automatic VAT calculation and reporting that aligns with HMRC requirements making tax compliance straightforward for Nottingham business owners managing successful salons.

              </p>

              <p>

                Price display follows UK conventions with VAT-inclusive pricing visible to clients while tracking VAT separately for business accounting and quarterly submissions. Payment processing integrates seamlessly with UK banks and card processors including contactless payments ubiquitous throughout Nottingham from Victoria Centre to independent boutiques.

              </p>

              <p>

                Online booking works perfectly with UK phone number formats, postal codes including Nottingham's NG postcodes, and address conventions familiar to local clients. Appointment scheduling accounts for UK bank holidays automatically preventing booking conflicts.

              </p>

              <p>

                Student pricing enables discounted services for university students common in Nottingham market. Staff scheduling respects UK employment law including Working Time Regulations and holiday entitlements.

              </p>

              <p>

                Payroll reporting generates data formatted for UK accounting software. GDPR compliance helps Nottingham salons meet data protection obligations.

              </p>

              <p>

                Marketing communications respect UK regulations ensuring compliant campaigns. Currency displays in pounds sterling with proper formatting.

              </p>

              <p>

                Time displays match UK preferences. Date formats follow UK conventions.

              </p>
            </div>
            <div className="feature-visual">
              <Image
                src={images.staffManagement.url}
                alt={images.staffManagement.alt}
                width={500}
                height={375}
                loading="lazy"
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Student and Discount Management</h3>
              <p>

                Nottingham's large student population requires flexible pricing accommodating student discounts while maintaining profitability serving professional clients paying full prices. BookB's pricing features help Nottingham salons implement complex pricing strategies maximizing revenue across diverse clientele.

              </p>

              <p>

                Student verification validates university enrollment through email verification or ID checking before applying discounted pricing protecting profit margins from discount abuse. Tiered pricing offers different rates for students, professionals, and seniors enabling targeted pricing strategies matching client demographics and willingness to pay.

              </p>

              <p>

                Off-peak discounts incentivize appointments during quiet periods filling schedule gaps while maintaining premium pricing during busy Nottingham shopping Saturdays. First-time client promotions attract new customers with introductory offers building client base and encouraging repeat business through excellent service experiences.

              </p>

              <p>

                Referral discounts reward clients who recommend your Nottingham salon to friends and colleagues generating word-of-mouth marketing and new client acquisition. Package bundles combine multiple services at attractive pricing encouraging larger transactions and prepayment creating predictable revenue and client commitment.

              </p>

              <p>

                Loyalty program discounts reward repeat visits building long-term relationships with best Nottingham clients who provide stable recurring revenue throughout university terms and year-round. Birthday promotions offer special discounts during birth months encouraging celebratory salon visits and bringing friends for group bookings.

              </p>

              <p>

                Seasonal promotions create limited-time offers for Christmas, Valentine's Day, and other occasions generating urgency and increased booking volume. Promo codes enable trackable discount campaigns measuring effectiveness of different marketing channels and promotional strategies.

              </p>

              <p>

                Group booking discounts incentivize wedding parties and friends booking together creating efficient scheduling and larger total transaction values. Corporate discounts serve local Nottingham businesses offering employee benefits programs and building bulk business relationships.

              </p>
            </div>
            <div className="feature-visual">
              <Image
                src={images.scheduling.url}
                alt={images.scheduling.alt}
                width={500}
                height={375}
                loading="lazy"
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Online Booking That Nottingham Clients Love</h3>
              <p>

                Nottingham clients expect convenient online booking matching digital experiences from other services. BookB provides mobile-optimized booking working on trams, in cafes, anywhere.

              </p>

              <p>

                Real-time availability shows open slots. Stylist profiles help choose professionals.

              </p>

              <p>

                Service descriptions explain treatments. Galleries showcase work.

              </p>

              <p>

                Location information includes directions from Nottingham Station. Deposit payments secure appointments.

              </p>

              <p>

                Automatic reminders reduce no-shows. Self-service rescheduling reduces phone calls.

              </p>

              <p>

                Package purchasing encourages prepayment. Gift cards generate revenue.

              </p>

              <p>

                Membership programs create predictable income.

              </p>
            </div>
            <div className="feature-visual">
              <Image
                src={images.analytics.url}
                alt={images.analytics.alt}
                width={500}
                height={375}
                loading="lazy"
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Reporting and Analytics for Nottingham Business Owners</h3>
              <p>

                Running profitable Nottingham salons requires understanding numbers with competitive rent and pricing pressures. BookB provides comprehensive reporting for data-driven decisions.

              </p>

              <p>

                Revenue reporting breaks down income by categories, products, stylists, and periods. Staff productivity compares team performance.

              </p>

              <p>

                Client retention shows visit patterns. Service profitability shows true margins.

              </p>

              <p>

                Peak hour analysis identifies busy times. Marketing tracking measures campaign effectiveness.

              </p>

              <p>

                Inventory reports identify slow products. No-show tracking quantifies lost revenue.

              </p>

              <p>

                Year comparisons show growth trends. VAT reporting provides HMRC data.

              </p>

              <p>

                Payroll reports support UK processing. Custom reporting analyzes specific questions.

              </p>
            </div>
            <div className="feature-visual">
              <Image
                src={images.mobileApp.url}
                alt={images.mobileApp.alt}
                width={500}
                height={375}
                loading="lazy"
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
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

      <Footer />
    </>
  );
}
