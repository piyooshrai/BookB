import Image from 'next/image'
import { images } from '@/lib/unsplash-images'
import { OrganizationSchema } from './components/Schema'

export default function Home() {
  return (
    <>
      <OrganizationSchema />
      <nav>
        <div className="container">
          <a href="/" className="logo">
            <img src="/bookb-logo.svg" alt="BookB Logo" width="40" height="40" style={{ display: 'block' }} />
            <span>BookB</span>
          </a>
          <ul>
            <li><a href="/features">Features</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="#trial" className="nav-cta">Start Free Trial</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-grid">
          <div className="hero-content">
            <h1>Why pay $300 when BookB delivers same results for $15?</h1>
            <p className="hero-subtitle">
              Professional salon management for independent pricing. Queue management, scheduling, POS, and mobile apps. Save $3,420 annually vs enterprise software.
            </p>
            <div className="cta-buttons">
              <a href="#trial" className="btn btn-primary">Start 14-Day Free Trial</a>
              <a href="/pricing" className="btn btn-secondary">See Pricing</a>
            </div>
            <p className="trust-line">Trusted by salons in 15+ countries · No credit card required</p>
          </div>
          <div className="hero-image">
            <Image
              src={images.hero.url}
              alt={images.hero.alt}
              width={600}
              height={400}
              priority
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </div>
        </div>
      </section>

      <section className="comparison">
        <div className="container">
          <h2>The $3,420 Question</h2>
          <p className="section-subtitle">Same enterprise features. 95% lower cost. No contracts.</p>
          <div className="comparison-table">
            <div className="comparison-row comparison-header">
              <div>Feature</div>
              <div>Zenoti</div>
              <div>BookB</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Monthly Cost</div>
              <div className="competitor-value">$300+</div>
              <div className="bookb-value">$15</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Setup Fees</div>
              <div className="competitor-value">$500+</div>
              <div className="bookb-value">FREE</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Queue Management</div>
              <div className="competitor-value">✓</div>
              <div className="bookb-value">✓</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Appointment Scheduling</div>
              <div className="competitor-value">✓</div>
              <div className="bookb-value">✓</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">POS System</div>
              <div className="competitor-value">✓</div>
              <div className="bookb-value">✓</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Mobile App</div>
              <div className="competitor-value">✓</div>
              <div className="bookb-value">✓</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Contract Required</div>
              <div className="competitor-value">Yes</div>
              <div className="bookb-value">No</div>
            </div>
            <div className="comparison-row savings-row">
              <div className="feature-name"><strong>Annual Savings</strong></div>
              <div className="competitor-value">—</div>
              <div className="bookb-value">$3,420</div>
            </div>
          </div>

          <div className="comparison-table" style={{marginTop: '3rem'}}>
            <div className="comparison-row comparison-header">
              <div>Feature</div>
              <div>Fresha</div>
              <div>BookB</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Monthly Cost</div>
              <div className="competitor-value">$0 + 8% Fee</div>
              <div className="bookb-value">$15</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Hidden Commission</div>
              <div className="competitor-value">8% of revenue</div>
              <div className="bookb-value">ZERO</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Queue Management</div>
              <div className="competitor-value">Basic</div>
              <div className="bookb-value">Advanced</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Own Your Data</div>
              <div className="competitor-value">Limited</div>
              <div className="bookb-value">✓</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Client Ownership</div>
              <div className="competitor-value">Platform owns</div>
              <div className="bookb-value">You own</div>
            </div>
            <div className="comparison-row savings-row">
              <div className="feature-name"><strong>Cost on $50k Revenue</strong></div>
              <div className="competitor-value">$4,000/year</div>
              <div className="bookb-value">$180/year</div>
            </div>
          </div>

          <div className="comparison-table" style={{marginTop: '3rem'}}>
            <div className="comparison-row comparison-header">
              <div>Feature</div>
              <div>Phorest</div>
              <div>BookB</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Monthly Cost</div>
              <div className="competitor-value">$150+</div>
              <div className="bookb-value">$15</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Setup Fees</div>
              <div className="competitor-value">$300+</div>
              <div className="bookb-value">FREE</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Contract Length</div>
              <div className="competitor-value">12-24 months</div>
              <div className="bookb-value">Month-to-month</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">All Features Included</div>
              <div className="competitor-value">Tiered</div>
              <div className="bookb-value">✓</div>
            </div>
            <div className="comparison-row savings-row">
              <div className="feature-name"><strong>Annual Savings</strong></div>
              <div className="competitor-value">—</div>
              <div className="bookb-value">$1,620</div>
            </div>
          </div>

          <div className="comparison-table" style={{marginTop: '3rem'}}>
            <div className="comparison-row comparison-header">
              <div>Feature</div>
              <div>Vagaro</div>
              <div>BookB</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Monthly Cost</div>
              <div className="competitor-value">$25 + fees</div>
              <div className="bookb-value">$15</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Processing Fees</div>
              <div className="competitor-value">3.5% + $0.30</div>
              <div className="bookb-value">Standard rates</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Booking Fees</div>
              <div className="competitor-value">$0.99 per booking</div>
              <div className="bookb-value">ZERO</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">SMS Costs</div>
              <div className="competitor-value">Extra fees</div>
              <div className="bookb-value">Included</div>
            </div>
            <div className="comparison-row savings-row">
              <div className="feature-name"><strong>Cost on 200 Bookings/mo</strong></div>
              <div className="competitor-value">$498/month</div>
              <div className="bookb-value">$15/month</div>
            </div>
          </div>

        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Enterprise Features at Independent Pricing</h2>
          <p className="section-subtitle">Professional salon management tools that don't require enterprise budgets</p>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Queue Management</h3>
              <p>Smart queue system eliminates walk-in chaos. Real-time updates, estimated wait times, and SMS notifications keep customers informed and happy.</p>
            </div>
            <div className="feature-visual">
              <Image
                src={images.queueManagement.url}
                alt={images.queueManagement.alt}
                width={500}
                height={375}
                loading="lazy"
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Appointment Scheduling</h3>
              <p>Professional booking with automated reminders. Reduce no-shows by 40% with SMS and email confirmations. Online booking integrates seamlessly.</p>
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
              <h3>Complete POS System</h3>
              <p>Fast payments with integrated processing. Accept cards, contactless, and digital payments. Track sales, tips, and inventory in one system.</p>
            </div>
            <div className="feature-visual">
              <Image
                src={images.pos.url}
                alt={images.pos.alt}
                width={500}
                height={375}
                loading="lazy"
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Branded Mobile App</h3>
              <p>Customized app for your clients. They book appointments, check queue status, and receive notifications. Your salon name, your branding.</p>
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

          <div className="feature-item">
            <div className="feature-content">
              <h3>Real-Time Analytics</h3>
              <p>Comprehensive business intelligence. Track busiest hours, top services, stylist performance, and revenue trends. Make data-driven decisions.</p>
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
              <h3>Staff Management</h3>
              <p>Schedule, track performance, and manage teams. Digital rota, shift swaps, and performance metrics. Keep your team organized and motivated.</p>
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
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2>Choose Your Plan</h2>
          <p className="section-subtitle">Professional salon management at independent pricing. All plans include every feature.</p>
          <div className="pricing-grid">

            <div className="pricing-card">
              <div className="plan-name">Starter</div>
              <div className="plan-price">$15</div>
              <div className="plan-period">/month</div>
              <div className="plan-description">Perfect for solo stylists</div>
              <ul className="plan-features">
                <li>Single owner/stylist</li>
                <li>Queue management</li>
                <li>Appointment scheduling</li>
                <li>POS system</li>
                <li>Mobile app</li>
                <li>Basic analytics</li>
              </ul>
              <a href="/contact" className="btn btn-primary plan-cta">Get Started</a>
            </div>

            <div className="pricing-card featured">
              <div className="popular-badge">Most Popular</div>
              <div className="plan-name">Professional</div>
              <div className="plan-price">$45</div>
              <div className="plan-period">/month</div>
              <div className="plan-description">For growing salons</div>
              <ul className="plan-features">
                <li>Up to 15 stylists</li>
                <li>All Starter features</li>
                <li>Advanced analytics</li>
                <li>Staff management</li>
                <li>Marketing automation</li>
                <li>Priority support</li>
              </ul>
              <a href="/contact" className="btn btn-primary plan-cta">Get Started</a>
            </div>

            <div className="pricing-card">
              <div className="plan-name">Business</div>
              <div className="plan-price">$75</div>
              <div className="plan-period">/month</div>
              <div className="plan-description">For established salons</div>
              <ul className="plan-features">
                <li>Up to 50 stylists</li>
                <li>All Professional features</li>
                <li>Multi-location support</li>
                <li>Advanced integrations</li>
                <li>Custom branding</li>
                <li>Dedicated support</li>
              </ul>
              <a href="/contact" className="btn btn-primary plan-cta">Get Started</a>
            </div>

            <div className="pricing-card">
              <div className="plan-name">Enterprise</div>
              <div className="plan-price">$125</div>
              <div className="plan-period">/month</div>
              <div className="plan-description">For large chains</div>
              <ul className="plan-features">
                <li>Unlimited stylists</li>
                <li>All Business features</li>
                <li>White-label options</li>
                <li>Custom development</li>
                <li>Advanced security</li>
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
              <h4>United Kingdom</h4>
              <ul>
                <li><a href="/uk/london">London</a></li>
                <li><a href="/uk/manchester">Manchester</a></li>
                <li><a href="/uk/birmingham">Birmingham</a></li>
                <li><a href="/uk/edinburgh">Edinburgh</a></li>
                <li><a href="/uk/glasgow">Glasgow</a></li>
                <li><a href="/uk/liverpool">Liverpool</a></li>
                <li><a href="/uk/leeds">Leeds</a></li>
                <li><a href="/uk/bristol">Bristol</a></li>
                <li><a href="/uk/brighton">Brighton</a></li>
                <li><a href="/uk/newcastle">Newcastle</a></li>
                <li><a href="/uk/nottingham">Nottingham</a></li>
                <li><a href="/uk/sheffield">Sheffield</a></li>
                <li><a href="/uk/leicester">Leicester</a></li>
                <li><a href="/uk/cardiff">Cardiff</a></li>
                <li><a href="/uk/southampton">Southampton</a></li>
                <li><a href="/uk/belfast">Belfast</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>United States</h4>
              <ul>
                <li><a href="/us/new-york">New York</a></li>
                <li><a href="/us/los-angeles">Los Angeles</a></li>
                <li><a href="/us/chicago">Chicago</a></li>
                <li><a href="/us/miami">Miami</a></li>
                <li><a href="/us/atlanta">Atlanta</a></li>
                <li><a href="/us/boston">Boston</a></li>
                <li><a href="/us/dallas">Dallas</a></li>
                <li><a href="/us/denver">Denver</a></li>
                <li><a href="/us/houston">Houston</a></li>
                <li><a href="/us/phoenix">Phoenix</a></li>
                <li><a href="/us/san-diego">San Diego</a></li>
                <li><a href="/us/san-francisco">San Francisco</a></li>
                <li><a href="/us/seattle">Seattle</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Australia & Middle East</h4>
              <ul>
                <li><a href="/au/sydney">Sydney</a></li>
                <li><a href="/au/melbourne">Melbourne</a></li>
                <li><a href="/au/brisbane">Brisbane</a></li>
                <li><a href="/ae/dubai">Dubai</a></li>
                <li><a href="/ae/abu-dhabi">Abu Dhabi</a></li>
                <li><a href="/ae/riyadh">Riyadh</a></li>
                <li><a href="/ae/jeddah">Jeddah</a></li>
                <li><a href="/ae/sharjah">Sharjah</a></li>
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
