import Image from 'next/image'
import { images } from '@/lib/unsplash-images'

export default function LosAngelesSalonSoftware() {
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
          <h1>Salon Software for Los Angeles Hair & Beauty Businesses</h1>
          <p className="hero-subtitle">
            BookB helps Los Angeles salons manage appointments, clients, staff, and payments with powerful cloud-based software designed specifically for US beauty businesses. From Hollywood to Beverly Hills, Santa Monica and beyond, Los Angeles salons trust BookB for reliable, affordable salon management that works perfectly with US payment systems and local business practices.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Trusted by 300+ Los Angeles salons and growing</p>
        </div>
          <div className="hero-image">
            <Image
              src={images.cities.losAngeles.url}
              alt={images.cities.losAngeles.alt}
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
          <h2>Perfect for Los Angeles's Beauty Market</h2>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Built for US Salons and Beauty Businesses</h3>
              <p>

                Los Angeles's beauty industry requires software that understands local business practices and regulatory requirements. BookB provides features specifically designed for US salons including automatic sales tax calculation and reporting that handles Los Angeles's tax requirements.

              </p>

              <p>

                Price display follows US conventions with tax-exclusive pricing shown to clients with tax calculated at checkout matching standard American retail practices. Payment processing integrates seamlessly with US banks and card processors including Square, Stripe, and traditional merchant accounts processing credit cards, debit cards, Apple Pay, Google Pay, and other payment methods.

              </p>

              <p>

                Online booking works perfectly with US phone number formats, ZIP codes, and address conventions familiar to American clients throughout Los Angeles. Appointment scheduling accounts for US federal holidays and state holidays automatically preventing booking conflicts during major holidays when salons may close.

              </p>

              <p>

                Staff scheduling respects US employment law including Fair Labor Standards Act overtime rules, meal break requirements, and wage and hour regulations applicable to Los Angeles beauty businesses operating across the metro area. Payroll reporting generates data formatted for US accounting software like QuickBooks and payroll providers like ADP serving Los Angeles businesses from independent stylists to multi-location salon chains throughout the region.

              </p>

              <p>

                Tax compliance features help Los Angeles salons meet federal and state tax obligations including income tax withholding, unemployment insurance, and workers compensation requirements specific to operations in the area. Marketing communications comply with CAN-SPAM regulations and US consumer protection laws ensuring your promotional campaigns stay compliant while building your Los Angeles client base through email, text, and social media outreach.

              </p>

              <p>

                Currency displays in US dollars with proper formatting and no international currency complications for straightforward American business operations. Time displays in 12-hour format with AM/PM matching American preferences familiar to all Los Angeles residents.

              </p>

              <p>

                Date formats follow US conventions with month/day/year preventing confusion that could cause appointment booking errors in your busy Los Angeles salon schedule.

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
              <h3>Online Booking That Los Angeles Clients Love</h3>
              <p>

                Los Angeles clients demand sophisticated online booking capabilities matching the digital experiences they enjoy from other service providers. BookB provides mobile-optimized online booking that works perfectly on smartphones wherever clients access their devices 24/7.

              </p>

              <p>

                Real-time availability shows exactly which appointment slots remain open preventing the frustration of booking requests that get declined hours later. Stylist profiles include photos, specialties, portfolios, and client reviews helping Los Angeles clients choose the right professional for their specific needs.

              </p>

              <p>

                Service descriptions explain treatments clearly with duration estimates and pricing so clients understand exactly what they're booking. Before and after galleries showcase your salon's work building confidence in new clients considering your Los Angeles salon for the first time.

              </p>

              <p>

                Location information helps clients plan their journey and find your salon easily whether driving or using public transportation. Contactless deposit payments secure appointments reducing no-shows common in busy markets where clients juggle demanding schedules.

              </p>

              <p>

                Automatic appointment reminders via SMS and email reduce no-shows without requiring staff time making confirmation calls. Rescheduling and cancellation through client self-service reduces phone interruptions during busy salon operating hours.

              </p>

              <p>

                Package purchasing during online booking encourages prepayment and commitment from Los Angeles clients. Gift card purchases online generate revenue and introduce new clients through word-of-mouth referrals.

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
              <h3>Reporting for Los Angeles Business Owners</h3>
              <p>

                Running a profitable salon in Los Angeles requires understanding your numbers with competitive pressures throughout the area. BookB provides comprehensive reporting helping Los Angeles salon owners make data-driven decisions.

              </p>

              <p>

                Revenue reporting breaks down income by service category, retail products, individual stylists, and time periods. Staff productivity metrics compare performance across your team.

              </p>

              <p>

                Client retention analysis helps target marketing to build loyal client base. Service profitability calculations show true margins on different treatments.

              </p>

              <p>

                Peak hour analysis identifies busiest times for optimal staff scheduling. Marketing campaign tracking measures effectiveness of promotional efforts.

              </p>

              <p>

                Inventory turnover reports identify slow-moving retail products. No-show and cancellation tracking quantifies revenue lost to appointment gaps.

              </p>

              <p>

                Year-over-year comparisons show business growth trends and seasonal patterns. Sales tax reporting generates data for state tax submissions.

              </p>

              <p>

                Payroll reports provide data for US payroll processing. Custom report building lets owners analyze specific questions about their business.

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
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2>Affordable Pricing for Los Angeles Salons</h2>
          <p className="section-subtitle">Professional software at prices that work for Los Angeles businesses</p>

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="plan-name">Starter</div>
              <div className="plan-price">$20<span className="plan-period">/mo</span></div>
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
              <div className="plan-price">$50<span className="plan-period">/mo</span></div>
              <p className="plan-description">For growing salons</p>
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
              <div className="plan-price">$100<span className="plan-period">/mo</span></div>
              <p className="plan-description">For established salons</p>
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
              <p className="plan-description">For salon chains</p>
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
