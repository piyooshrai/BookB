import Image from 'next/image'
import { images } from '@/lib/unsplash-images'

export default function ZenotiAlternative() {
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
        <div className="hero-grid">
        <div className="hero-content">
          <h1>The Smart Zenoti Alternative for Modern Salons</h1>
          <p className="hero-subtitle">
            BookB delivers enterprise-grade salon management at a fraction of Zenoti's cost. No contracts, no setup fees, no complexity. Everything you need to run your salon efficiently without breaking the bank or requiring a computer science degree to operate.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Join 10,000+ salons who switched from expensive alternatives</p>
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
          <h2>BookB vs Zenoti: The Real Numbers</h2>
          <p className="section-subtitle">See exactly how much you'll save by switching to BookB</p>

          <div className="comparison-table">
            <div className="comparison-row comparison-header">
              <div className="feature-name">Feature</div>
              <div className="competitor-value">Zenoti</div>
              <div className="bookb-value">BookB</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Monthly Price (5 staff)</div>
              <div className="competitor-value">$399</div>
              <div className="bookb-value">$99</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Setup Fee</div>
              <div className="competitor-value">$999</div>
              <div className="bookb-value">$0</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Contract Length</div>
              <div className="competitor-value">12-36 months</div>
              <div className="bookb-value">None</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Training Required</div>
              <div className="competitor-value">5-10 hours</div>
              <div className="bookb-value">15 minutes</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Commission on Online Bookings</div>
              <div className="competitor-value">2.9%</div>
              <div className="bookb-value">0%</div>
            </div>
            <div className="comparison-row savings-row">
              <div className="feature-name"><strong>Your Annual Savings</strong></div>
              <div className="competitor-value">-</div>
              <div className="bookb-value">$4,599</div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Salon Owners Choose BookB Over Zenoti</h2>

          <div className="feature-item">
            <div className="feature-content">
              <h3>No More Overpaying for Basic Features</h3>
              <p>

                Zenoti charges enterprise prices even for single-location salons. Their pricing model was built for massive spa chains, not independent salon owners.

              </p>

              <p>

                BookB believes every salon deserves professional software without the enterprise price tag. You get intelligent appointment scheduling that actually understands salon workflows, not generic booking software adapted from the hospitality industry.

              </p>

              <p>

                Our queue management system was built specifically for walk-in traffic patterns common in beauty businesses. Client profiles track preferences, allergies, and service history without requiring staff to dig through multiple screens.

              </p>

              <p>

                Payment processing integrates seamlessly with competitive rates, not inflated fees disguised as convenience. Resource allocation happens automatically based on staff skills and availability.

              </p>

              <p>

                Inventory tracking prevents stock-outs without requiring manual counts. <strong>Marketing Automation:</strong> Sends reminders and promotions without additional monthly fees.

              </p>

              <p>

                Reporting provides actionable insights, not overwhelming data dumps. Staff management includes scheduling, commission tracking, and performance metrics.

              </p>

              <p>

                The mobile app works offline because we understand internet connectivity isn't always perfect. Client self-service booking reduces phone time and no-shows.

              </p>

              <p>

                Waitlist management fills cancellations automatically. Package and membership management encourages repeat business.

              </p>

              <p>

                Gift card tracking prevents revenue leakage. Multi-location support costs the same as single-location.

              </p>

              <p>

                API access lets you integrate with existing tools. Regular updates add features without upgrade fees.

              </p>

              <p>

                Your data remains yours, exportable anytime. Security includes encryption, backups, and compliance.

              </p>

              <p>

                Support responds in hours, not days.

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
              <h3>Built for Salons, Not Spas</h3>
              <p>

                Zenoti started as spa software and still shows its origins. BookB was purpose-built for salons, barbershops, and beauty businesses from day one.

              </p>

              <p>

                The difference shows in every feature. Appointment durations adjust automatically based on service type and client hair characteristics.

              </p>

              <p>

                Color formulas save with each service for perfect consistency. Walk-in queue management prioritizes by service type and staff availability.

              </p>

              <p>

                Staff skill matching ensures clients get stylists qualified for their requested services. Product usage tracking per service helps manage inventory and cost of goods sold.

              </p>

              <p>

                Commission structures handle complex scenarios including retail, service percentages, and tiered performance bonuses. Retail product recommendations appear automatically during checkout based on services performed.

              </p>

              <p>

                Before and after photo galleries build your portfolio and social media content. Client communication templates understand salon terminology and booking patterns.

              </p>

              <p>

                Reports focus on metrics that matter to salon profitability, not generic retail analytics. The mobile app lets stylists manage their books and track their earnings.

              </p>

              <p>

                Client profiles include detailed service history with photos, formulas, and preferences. Membership and package management encourages clients to pre-pay for regular services.

              </p>

              <p>

                Equipment and station management prevents double-booking of specialized tools. Team scheduling accounts for overlapping services and setup time.

              </p>

              <p>

                Break management ensures staff compliance with labor regulations. Supply ordering integrates with beauty industry distributors.

              </p>

              <p>

                Continuing education tracking helps staff maintain certifications. Referral tracking rewards clients who bring friends.

              </p>

              <p>

                Damage waiver collection protects your business. Retail sales tracking separates from service revenue.

              </p>

              <p>

                The POS integrates with salon-specific payment scenarios.

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
              <h3>No Contracts, No Commitments</h3>
              <p>

                Zenoti locks you into multi-year contracts with hefty cancellation penalties. BookB operates month-to-month because we're confident you'll stay for the value, not the contract.

              </p>

              <p>

                Cancel anytime with zero penalties. Your data exports completely in standard formats.

              </p>

              <p>

                No surprise price increases mid-contract. Feature updates happen automatically for all customers.

              </p>

              <p>

                Support quality doesn't degrade for month-to-month customers. Implementation assistance helps you migrate smoothly.

              </p>

              <p>

                Training resources remain accessible after initial setup. The mobile app continues working during your notice period.

              </p>

              <p>

                Payment processing transitions smoothly to your new provider. Client data transfers to most major platforms.

              </p>

              <p>

                Historical reporting remains available during transition. Staff accounts stay active until your final day.

              </p>

              <p>

                Refunds are prorated if you cancel mid-month. No retention teams pressure you to stay.

              </p>

              <p>

                Exit interviews help us improve for future customers. Recommendations for alternative software if we're not the right fit.

              </p>

              <p>

                Reference calls connect you with similar salons using BookB. Trial periods let you test thoroughly before committing.

              </p>

              <p>

                Money-back guarantees remove financial risk. Transparent pricing means no hidden fees at renewal time.

              </p>

              <p>

                Volume discounts apply immediately, not after contract negotiations. Add locations without renegotiating your entire agreement.

              </p>

              <p>

                Seasonal businesses can pause service during slow months. Ownership changes don't trigger new contracts.

              </p>

              <p>

                Franchise expansion happens at consistent pricing.

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
              <h3>Actually Simple to Use</h3>
              <p>

                Zenoti requires extensive training and often leaves staff confused. BookB is intuitive enough that new employees start using it productively within minutes.

              </p>

              <p>

                The interface follows salon workflows naturally, not computer logic. Common tasks require fewer clicks than competitors.

              </p>

              <p>

                Error messages explain what went wrong in plain language. The dashboard shows relevant information based on your role.

              </p>

              <p>

                Appointment booking flows match how receptionists think. Service menus organize by category and popularity.

              </p>

              <p>

                Client search finds people quickly by name, phone, or email. Calendar views switch between day, week, and month seamlessly.

              </p>

              <p>

                Drag and drop rescheduling happens in seconds. Color coding distinguishes service types at a glance.

              </p>

              <p>

                Staff photos help clients recognize their stylist. Real-time availability prevents double-booking automatically.

              </p>

              <p>

                Conflict warnings appear before problems occur. Mobile responsiveness means the system works on any device.

              </p>

              <p>

                Offline mode handles internet outages gracefully. Keyboard shortcuts speed up repetitive tasks.

              </p>

              <p>

                Customizable layouts adapt to your specific workflow. Print formats match your branded materials.

              </p>

              <p>

                Email templates maintain consistent communication. Text messages send automatically for reminders.

              </p>

              <p>

                Notification preferences prevent information overload. Bulk actions handle routine administrative tasks.

              </p>

              <p>

                Search filters find specific appointments or clients quickly. Archive features hide old data without deleting.

              </p>

              <p>

                Undo functions reverse accidental changes. Auto-save prevents data loss from crashes or connection issues.

              </p>

              <p>

                Browser compatibility works with Chrome, Safari, and Firefox. No special software installations required on workstations.

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
          <h2>Common Questions from Salons Switching from Zenoti</h2>
          <p className="section-subtitle">Everything you need to know about making the switch</p>

          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'left'}}>
            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>How long does migration take?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Most salons complete migration in 2-3 days. BookB's migration team imports your client database, service menu, staff schedules, and historical data. We schedule the transition during your slowest period to minimize disruption. Training happens in small group sessions tailored to different roles. Support remains available 24/7 during your first week.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Can I keep my existing payment processor?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Yes, BookB integrates with major payment processors including Square, Stripe, and traditional merchant accounts. You're never forced to use our payment processing. If you prefer our integrated option, rates are competitive with direct processor pricing. No markup or hidden fees on transactions.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>What happens to my historical data?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                All client profiles, service history, purchase records, and appointment data transfer completely. Historical reports remain available for tax and business analysis purposes. Photos and notes attached to client profiles migrate automatically. Gift card balances and package remaining services carry forward precisely.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Do you offer phone support?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Yes, phone support is included at all pricing tiers. Chat and email support are also available. Response times average under 2 hours during business hours. Emergency support handles critical issues 24/7. Video screen sharing helps resolve complex questions quickly.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Can clients keep using online booking?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Absolutely. BookB's online booking is more customizable than Zenoti's with your branding, service descriptions, and pricing. The booking widget embeds on your existing website or works as a standalone booking page. Mobile-optimized for clients booking from phones. Real-time availability prevents scheduling conflicts. Clients can reschedule or cancel following your policies.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>How does reporting compare?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                BookB's reporting focuses on actionable salon metrics rather than overwhelming you with data. Track revenue by service category, staff performance, retail vs service sales, client retention rates, and peak booking times. Custom reports can be created and scheduled for automatic delivery. Data exports to Excel for additional analysis. Dashboards provide at-a-glance business health indicators.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Is there a mobile app for staff?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Yes, stylists can view their schedule, check earnings, update client notes, and manage their availability from iOS or Android apps. Clients also have a dedicated app for booking, viewing appointment history, and managing their profile. Both apps work offline with automatic syncing when connection returns.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>What about email marketing?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Built-in marketing automation sends appointment reminders, birthday promotions, re-engagement campaigns for inactive clients, and new service announcements. Segment clients by service preferences, visit frequency, or spending level. Track open rates and booking conversions. All included in your monthly price, no per-email charges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2>Simple Pricing That Makes Sense</h2>
          <p className="section-subtitle">No contracts, no setup fees, no surprises</p>

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="plan-name">Starter</div>
              <div className="plan-price">$49<span className="plan-period">/mo</span></div>
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
              <div className="plan-price">$99<span className="plan-period">/mo</span></div>
              <p className="plan-description">For growing salons with multiple stylists</p>
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
              <div className="plan-price">$199<span className="plan-period">/mo</span></div>
              <p className="plan-description">For established salons with larger teams</p>
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
              <p className="plan-description">For salon chains and franchise operations</p>
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
