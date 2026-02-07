import Image from 'next/image'
import { images } from '@/lib/unsplash-images'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

export default function SheffieldSalonSoftware() {
  return (
    <>
      <Navigation />

      <section className="hero">
        <div className="hero-grid">
        <div className="hero-content">
          <h1>Salon Software for Sheffield Hair & Beauty Businesses</h1>
          <p className="hero-subtitle">
            BookB helps Sheffield salons manage appointments, clients, staff, and payments with powerful cloud-based software designed specifically for UK beauty businesses. From City Centre to Ecclesall Road, Kelham Island to Broomhill, Sheffield salons trust BookB for reliable, affordable salon management that works perfectly with UK payment systems, VAT requirements, and South Yorkshire business practices serving this dynamic city's beauty industry.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Trusted by 160+ Sheffield salons and growing</p>
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
          <h2>Perfect for Sheffield's Independent Beauty Scene</h2>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Built for UK Salons and Beauty Businesses</h3>
              <p>

                Sheffield's beauty industry serves South Yorkshire requiring software understanding local business practices and regulatory requirements. BookB provides features for UK salons including automatic VAT calculation aligning with HMRC requirements.

              </p>

              <p>

                Price display follows UK conventions with VAT-inclusive pricing. Payment processing integrates with UK banks including contactless payments throughout Sheffield.

              </p>

              <p>

                Online booking works with UK phone formats, Sheffield's S postcodes, and familiar address conventions. Appointment scheduling accounts for UK bank holidays.

              </p>

              <p>

                Staff scheduling respects UK employment law. Payroll reporting generates UK-formatted data.

              </p>

              <p>

                GDPR compliance meets data protection obligations. Marketing communications respect UK regulations.

              </p>

              <p>

                Currency displays in pounds sterling. Time and date formats follow UK conventions.

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
              <h3>Staff Scheduling and Management</h3>
              <p>

                Sheffield salons optimize team productivity through intelligent scheduling matching staff availability with client demand. BookB's scheduling features help manage rotas, shifts, and time-off.

              </p>

              <p>

                Weekly scheduling creates rotas accounting for availability and preferences. Shift patterns accommodate full-time and part-time staff.

              </p>

              <p>

                Calendar views show appointments and blocked time. Break management ensures compliance with UK regulations.

              </p>

              <p>

                Time-off tracking manages holiday requests and sick leave. Shift swapping lets staff trade shifts with manager approval.

              </p>

              <p>

                Mobile access lets team view schedules anywhere. Notifications alert staff to schedule changes.

              </p>

              <p>

                Commission tracking calculates earnings by services performed. Performance metrics compare productivity across team.

              </p>

              <p>

                Skills tracking ensures qualified staff perform specialist services.

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
              <h3>Online Booking That Sheffield Clients Love</h3>
              <p>

                Sheffield clients expect convenient online booking. BookB provides mobile-optimized booking.

              </p>

              <p>

                Real-time availability shows open slots. Stylist profiles help choose professionals.

              </p>

              <p>

                Service descriptions explain treatments. Galleries showcase work.

              </p>

              <p>

                Location information includes directions. Deposit payments secure appointments.

              </p>

              <p>

                Automatic reminders reduce no-shows. Self-service rescheduling reduces calls.

              </p>

              <p>

                Package purchasing encourages prepayment. Gift cards generate revenue.

              </p>

              <p>

                Membership programs create income.

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
              <h3>Reporting and Analytics for Sheffield Business Owners</h3>
              <p>

                Running profitable Sheffield salons requires understanding numbers. BookB provides comprehensive reporting for decisions.

              </p>

              <p>

                Revenue reporting breaks down income. Staff productivity compares performance.

              </p>

              <p>

                Client retention shows patterns. Service profitability shows margins.

              </p>

              <p>

                Peak analysis identifies busy times. Marketing tracking measures effectiveness.

              </p>

              <p>

                Inventory reports identify slow products. No-show tracking quantifies lost revenue.

              </p>

              <p>

                Year comparisons show trends. VAT reporting provides HMRC data.

              </p>

              <p>

                Payroll reports support processing. Custom reporting analyzes questions.

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
          <h2>Why Sheffield Salons Choose BookB</h2>
          <p className="section-subtitle">Join hundreds of Sheffield beauty businesses already using BookB</p>

          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'left'}}>
            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Works with UK payment processors</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                BookB integrates with UK payment providers. Accept pounds sterling throughout Sheffield.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Perfect for Sheffield's independent spirit</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Flexible software adapts to unique business models popular in Sheffield's independent salon scene.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Local support during UK business hours</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Support available during Sheffield business hours. UK operations expertise.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Transparent pricing in pounds sterling</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Clear GBP pricing. UK bank processing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2>Affordable Pricing for Sheffield Salons</h2>
          <p className="section-subtitle">Professional software at prices that work for Sheffield businesses</p>

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
              <p className="plan-description">For growing Sheffield salons with multiple stylists</p>
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
              <p className="plan-description">For established Sheffield salons with larger teams</p>
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
              <p className="plan-description">For Sheffield salon chains and franchise operations</p>
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
