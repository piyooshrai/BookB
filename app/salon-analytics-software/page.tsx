import Image from 'next/image'
import { images } from '@/lib/unsplash-images'

export default function salon_analytics_softwarePage() {
  return (
    <>
      <nav>
        <div className="container">
          <a href="/" className="logo">
            <img src="/bookb-logo.svg" alt="BookB Logo" width="40" height="40" style={{ display: 'block' }} />
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
        <div className="hero-content">
          <h1>Salon Analytics Software: Professional Software for Salons</h1>
          <p className="hero-subtitle">
            BookB provides powerful analytics capabilities designed specifically for modern salons. Streamline operations, increase efficiency, and grow your business with professional software built for beauty businesses of all sizes.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start 14-Day Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">See Pricing</a>
          </div>
          <p className="trust-line">Trusted by 1,000+ salons worldwide · No credit card required</p>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose BookB for Salon Analytics Software</h2>
          <p className="section-subtitle">Professional features designed specifically for salon operations</p>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Complete Salon Analytics Software Solution</h3>
              <p>

                BookB delivers comprehensive analytics tools designed specifically for salon operations. Our software understands the unique needs of beauty businesses providing features that streamline daily operations, improve client satisfaction, and increase revenue.

              </p>

              <p>

                Whether you run a single-chair operation or manage multiple locations, BookB scales with your business providing enterprise-level capabilities at affordable pricing. Modern salons require modern software, and BookB delivers everything you need to compete in today's market.

              </p>

              <p>

                From appointment booking to staff scheduling, client management to financial reporting, BookB handles every aspect of salon operations. Our intuitive interface ensures your team can learn the system quickly without extensive training or complicated manuals.

              </p>

              <p>

                Cloud-based access means you can manage your salon from anywhere using any device with internet connection. Automatic updates ensure you always have the latest features and security improvements without manual software upgrades or IT support.

              </p>

              <p>

                Integration with popular payment processors, marketing tools, and accounting software creates seamless workflows eliminating duplicate data entry and reducing errors. Mobile apps for both staff and clients provide convenient access to scheduling, client records, and business information on the go.

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
              <h3>Easy to Use, Powerful Results</h3>
              <p>

                Our software combines powerful functionality with intuitive design making it easy for your team to adopt and use daily. Simple navigation ensures staff can find features quickly without searching through complicated menus or consulting documentation.

              </p>

              <p>

                <strong>Customizable Dashboards:</strong> Display the information most relevant to each user role from receptionists to stylists to managers. Real-time synchronization across all devices ensures everyone sees current information preventing double-bookings and communication errors.

              </p>

              <p>

                <strong>Automated Workflows:</strong> Handle routine tasks like appointment reminders, follow-up messages, and birthday greetings freeing your team to focus on delivering excellent service. <strong>Comprehensive Reporting:</strong> Provides insights into business performance helping you make informed decisions about pricing, staffing, marketing, and growth strategies.

              </p>

              <p>

                Our support team provides responsive assistance via phone, email, and chat ensuring you get help when you need it without long wait times or complicated ticket systems.

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
              <h3>Affordable Professional Software</h3>
              <p>

                BookB delivers enterprise-level capabilities at pricing designed for independent salons and small businesses. No expensive setup fees, no long-term contracts, no hidden charges.

              </p>

              <p>

                <strong>Transparent Pricing:</strong> Simple monthly pricing based on your team size with all features included at every tier. Start with a basic plan and upgrade as your business grows without losing any data or reconfiguring your system.

              </p>

              <p>

                <strong>Smooth Transition:</strong> Free data migration from your existing software ensures smooth transition without disruption to your operations. <strong>Training Included:</strong> Training and onboarding included with every plan helping your team get productive quickly.

              </p>

              <p>

                <strong>Ongoing Support:</strong> Regular feature updates and improvements included at no additional cost. Security and data backup included ensuring your client information and business data stays protected.

              </p>

              <p>

                <strong>Payment Processing:</strong> At competitive rates with no additional fees beyond standard processor charges. Money-back guarantee if you're not satisfied within first 30 days.

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
          <h2>Choose Your Plan</h2>
          <p className="section-subtitle">Professional salon management at independent pricing</p>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="plan-name">Starter</div>
              <div className="plan-price">£15</div>
              <div className="plan-period">/month</div>
              <p className="plan-description">Perfect for solo stylists</p>
              <ul className="plan-features">
                <li>1-2 staff members</li>
                <li>Unlimited appointments</li>
                <li>Online booking</li>
                <li>Client management</li>
                <li>Basic reporting</li>
              </ul>
              <a href="/contact" className="btn btn-primary plan-cta">Get Started</a>
            </div>

            <div className="pricing-card featured">
              <div className="popular-badge">Most Popular</div>
              <div className="plan-name">Professional</div>
              <div className="plan-price">£45</div>
              <div className="plan-period">/month</div>
              <p className="plan-description">For growing salons</p>
              <ul className="plan-features">
                <li>Up to 15 staff members</li>
                <li>All Starter features</li>
                <li>Advanced analytics</li>
                <li>Staff management</li>
                <li>Marketing automation</li>
              </ul>
              <a href="/contact" className="btn btn-primary plan-cta">Get Started</a>
            </div>

            <div className="pricing-card">
              <div className="plan-name">Business</div>
              <div className="plan-price">£75</div>
              <div className="plan-period">/month</div>
              <p className="plan-description">For established salons</p>
              <ul className="plan-features">
                <li>Up to 50 staff members</li>
                <li>All Professional features</li>
                <li>Multi-location support</li>
                <li>Custom integrations</li>
                <li>Dedicated support</li>
              </ul>
              <a href="/contact" className="btn btn-primary plan-cta">Get Started</a>
            </div>

            <div className="pricing-card">
              <div className="plan-name">Enterprise</div>
              <div className="plan-price">£125</div>
              <div className="plan-period">/month</div>
              <p className="plan-description">For large chains</p>
              <ul className="plan-features">
                <li>Unlimited staff</li>
                <li>All Business features</li>
                <li>White-label options</li>
                <li>Custom development</li>
                <li>24/7 support</li>
              </ul>
              <a href="/contact" className="btn btn-primary plan-cta">Contact Sales</a>
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
