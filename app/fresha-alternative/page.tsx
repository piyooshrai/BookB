import Image from 'next/image'
import { images } from '@/lib/unsplash-images'

export default function FreshaAlternative() {
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
          <h1>The Fresha Alternative Without Hidden Marketplace Fees</h1>
          <p className="hero-subtitle">
            BookB provides professional salon software with transparent pricing and zero commission on bookings. Own your client relationships without paying Fresha's marketplace fees or surrendering control of your customer data. Get powerful features designed specifically for salon owners who value independence.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Trusted by 10,000+ salons who chose ownership over marketplace dependency</p>
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
          <h2>BookB vs Fresha: The Complete Cost Comparison</h2>
          <p className="section-subtitle">See the real cost of "free" software with hidden marketplace fees</p>

          <div className="comparison-table">
            <div className="comparison-row comparison-header">
              <div className="feature-name">Feature</div>
              <div className="competitor-value">Fresha</div>
              <div className="bookb-value">BookB</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Monthly Software Fee</div>
              <div className="competitor-value">$0</div>
              <div className="bookb-value">$99</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Commission Per Booking</div>
              <div className="competitor-value">Variable</div>
              <div className="bookb-value">$0</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Marketplace Placement Fees</div>
              <div className="competitor-value">Up to 20%</div>
              <div className="bookb-value">$0</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Client Data Ownership</div>
              <div className="competitor-value">Shared</div>
              <div className="bookb-value">100% Yours</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Marketing to Your Clients</div>
              <div className="competitor-value">Fresha Markets</div>
              <div className="bookb-value">Only You</div>
            </div>
            <div className="comparison-row savings-row">
              <div className="feature-name"><strong>Annual Cost (200 bookings/mo)</strong></div>
              <div className="competitor-value">$4,800</div>
              <div className="bookb-value">$1,188</div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Smart Salon Owners Are Leaving Fresha for BookB</h2>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Own Your Clients, Control Your Business</h3>
              <p>

                Fresha's "free" model comes with a catch: they own the client relationship and monetize your customer base through marketplace fees and competitor advertising. BookB believes your clients should be yours alone.

              </p>

              <p>

                When clients book through BookB, their data belongs to you exclusively. We never market competing salons to your customers.

              </p>

              <p>

                Your client list remains confidential business property, not a shared marketplace resource. Email addresses, phone numbers, and booking history stay in your control.

              </p>

              <p>

                Export your complete client database anytime without restrictions. Marketing campaigns reach your clients without platform interference.

              </p>

              <p>

                Loyalty programs reward your customers, not marketplace browsers. Pricing remains under your control without platform-suggested discounts.

              </p>

              <p>

                Client reviews appear on your website, not a marketplace that promotes competitors. Appointment reminders come from your salon name, not a third-party platform.

              </p>

              <p>

                Gift card programs build your brand, not marketplace dependency. Membership packages create recurring revenue you control completely.

              </p>

              <p>

                Package sales generate prepaid income without revenue sharing. Referral programs reward clients for recommending your specific salon.

              </p>

              <p>

                Birthday promotions strengthen individual client relationships. Re-engagement campaigns target your inactive clients, not generic offers to marketplace users.

              </p>

              <p>

                Client preferences and service history inform personalized recommendations. Treatment plans track progress toward client beauty goals.

              </p>

              <p>

                Before and after photos showcase your specific work. Color formulas remain proprietary to your stylists.

              </p>

              <p>

                Product recommendations align with your retail inventory. Service packages reflect your salon's unique methodology.

              </p>

              <p>

                Pricing strategies match your market positioning. Promotional timing follows your business calendar.

              </p>

              <p>

                Client communication maintains your brand voice. The booking experience reinforces your salon identity.

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
              <h3>Transparent Pricing Without Hidden Fees</h3>
              <p>

                Fresha advertises free software but generates revenue through marketplace fees, premium placement charges, and payment processing markups. BookB pricing is completely transparent with zero hidden costs.

              </p>

              <p>

                Your monthly subscription includes everything: unlimited appointments, client profiles, online booking, automated reminders, marketing tools, reporting, inventory management, staff scheduling, and commission tracking. No surprise charges appear at month-end.

              </p>

              <p>

                Payment processing fees are clearly disclosed with competitive rates. Adding staff members follows published pricing tiers.

              </p>

              <p>

                Multi-location expansion costs are predetermined. Feature access doesn't require premium upgrades.

              </p>

              <p>

                Support quality remains consistent regardless of plan level. Training resources stay available after initial onboarding.

              </p>

              <p>

                Software updates deploy automatically without upgrade fees. Data storage scales without additional charges.

              </p>

              <p>

                API access for integrations comes standard. Export capabilities work without export fees.

              </p>

              <p>

                Cancellation happens without penalties. Refunds process for unused service periods.

              </p>

              <p>

                Volume discounts apply automatically at qualifying thresholds. Seasonal promotions appear clearly on pricing pages.

              </p>

              <p>

                Enterprise pricing gets quoted upfront. Contract terms are published, not negotiated.

              </p>

              <p>

                Renewal rates match new customer pricing. Legacy customers receive new features automatically.

              </p>

              <p>

                Beta features are available to all tiers. The mobile app downloads free without in-app purchases.

              </p>

              <p>

                Client self-service booking doesn't incur per-booking fees. SMS notifications charge actual carrier rates without markup.

              </p>

              <p>

                Email marketing sends unlimited messages. Social media integrations work without additional costs.

              </p>

              <p>

                Review management tools come included. Analytics and reporting don't require business intelligence add-ons.

              </p>

              <p>

                Inventory management handles unlimited products and suppliers. Employee management scales with published pricing.

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
              <h3>Professional Features Without Compromises</h3>
              <p>

                Fresha's free model means feature development prioritizes marketplace growth over salon-specific functionality. BookB focuses exclusively on making salon management more efficient and profitable.

              </p>

              <p>

                Advanced appointment scheduling handles complex scenarios including overlapping services, preparation time, and equipment conflicts. Walk-in queue management integrates seamlessly with scheduled appointments.

              </p>

              <p>

                Client profiles track detailed service history, product preferences, and stylist relationships. Color formula documentation ensures consistency across visits and stylists.

              </p>

              <p>

                Before and after photo galleries organize by client and service type. Treatment plan tracking monitors progress toward long-term beauty goals.

              </p>

              <p>

                Product usage per service helps control costs and inventory. Retail recommendations appear automatically during checkout based on services performed.

              </p>

              <p>

                Commission structures accommodate complex scenarios including splits, overrides, and performance bonuses. Payroll reports generate ready for accounting software import.

              </p>

              <p>

                Staff scheduling prevents overtime violations and ensures labor law compliance. Time clock integration tracks actual hours for accurate wage calculation.

              </p>

              <p>

                Tip distribution follows your specific policies including credit card tip allocation. Service menu management handles seasonal offerings and limited-time promotions.

              </p>

              <p>

                Pricing rules automate discounts for packages, memberships, and loyalty rewards. Package management tracks remaining services and expiration dates.

              </p>

              <p>

                Membership billing handles recurring charges and pro-rated adjustments. Gift card sales, redemptions, and balance tracking prevent revenue leakage.

              </p>

              <p>

                Supplier management organizes vendor contacts and ordering history. Purchase order generation streamlines inventory replenishment.

              </p>

              <p>

                Stock level alerts prevent running out of essential products. Waste tracking identifies shrinkage and training opportunities.

              </p>

              <p>

                Equipment maintenance schedules prevent unexpected breakdowns. Cleaning checklists ensure health code compliance.

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
              <h3>Marketing That Builds Your Brand</h3>
              <p>

                Fresha's marketplace model means they market to your clients, often promoting competitors. BookB's marketing tools work exclusively for your salon brand.

              </p>

              <p>

                Email campaigns send from your salon name with your branding. <strong>Automated Reminders:</strong> Reduce no-shows without third-party interference.

              </p>

              <p>

                Birthday promotions celebrate clients with personalized offers. Re-engagement campaigns target clients who haven't booked recently.

              </p>

              <p>

                New service announcements reach interested clients based on service history. Seasonal promotions align with your business calendar and inventory.

              </p>

              <p>

                Last-minute availability fills cancellations through targeted outreach. Package promotions encourage prepayment and loyalty.

              </p>

              <p>

                Membership drives create recurring revenue streams. Referral programs reward clients for specific recommendations.

              </p>

              <p>

                Social media scheduling maintains consistent brand presence. Review request automation generates testimonials for your platforms.

              </p>

              <p>

                Before and after galleries showcase your work on your website. Client success stories highlight transformation results.

              </p>

              <p>

                Stylist spotlights build individual brand recognition within your team. Educational content positions your salon as beauty experts.

              </p>

              <p>

                Event promotion drives traffic for special occasions and trunk shows. Charity partnerships enhance community reputation.

              </p>

              <p>

                Local SEO optimization improves search visibility in your market. Listing management ensures accurate information across directories.

              </p>

              <p>

                Reputation monitoring alerts you to new reviews. Response templates maintain professional review engagement.

              </p>

              <p>

                Competitive analysis tracks local market positioning. Service demand forecasting informs inventory and staffing decisions.

              </p>

              <p>

                Client lifetime value analysis identifies your most profitable relationships. Retention metrics highlight at-risk clients before they leave.

              </p>

              <p>

                Acquisition cost tracking measures marketing effectiveness. Campaign performance reporting shows ROI on promotional spending.

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
          <h2>Questions from Salons Switching from Fresha</h2>
          <p className="section-subtitle">Everything you need to know about leaving the marketplace model</p>

          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'left'}}>
            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Will I lose my client database when switching?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                No, BookB's migration team exports your complete Fresha client database including contact information, service history, preferences, and notes. All historical appointment data transfers completely. Photos, color formulas, and treatment notes migrate automatically. Package balances and gift card values carry forward precisely. The entire process typically completes in 48 hours.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>How do I transition clients from Fresha booking to BookB?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                BookB provides automated email and SMS campaigns announcing your new booking system. Your existing website booking widget updates seamlessly. Social media posts and templates communicate the change professionally. Clients receive booking links via their preferred communication channel. The transition period allows dual booking systems if needed. Staff training ensures smooth explanation at checkout. Printed materials communicate the change for walk-in clients.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>What about clients who found me through Fresha marketplace?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Clients acquired through Fresha marketplace are your clients. BookB helps you maintain those relationships without ongoing marketplace fees. Our local SEO tools ensure you remain visible to new clients searching online. Social media marketing reaches potential clients in your area. Google My Business optimization drives discovery without marketplace dependency. Review generation builds your independent online reputation. Referral programs turn existing clients into your best marketing channel.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Can I keep my current payment processor?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Yes, BookB integrates with major payment processors including Square, Stripe, and traditional merchant accounts. You control payment processing relationships and rates. No forced payment providers or rate markups. Existing payment terminals often work with simple configuration updates. If you prefer integrated payment processing, BookB offers competitive rates with transparent pricing.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>How does BookB's online booking compare to Fresha's?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                BookB's online booking is fully customizable with your branding, service descriptions, and pricing. The booking widget embeds on your existing website or works as a standalone page. Mobile optimization ensures easy booking from any device. Real-time availability prevents scheduling conflicts. Clients can request specific stylists or take next available. Service add-ons and package purchases happen during booking. No competitor advertising appears in your booking flow.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>What happens to my reviews and ratings?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                BookB helps you build an independent review presence on Google, Facebook, and industry platforms. Automated review requests send after appointments. Review monitoring alerts you to new feedback across platforms. Response templates help maintain professional engagement. Your Fresha reviews remain visible on that platform, but BookB helps you build owned review assets that competitors can't control or monetize.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Is there really zero commission on bookings?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Absolutely zero commission, ever. BookB operates on transparent subscription pricing, not taking a percentage of your hard-earned revenue. Online bookings, walk-ins, phone appointments, and rescheduled visits all process without any commission or booking fees. Your monthly subscription covers unlimited appointments regardless of volume. The more you grow, the more you save compared to commission-based models.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Can I try BookB before fully committing?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Yes, BookB offers a 30-day free trial with full feature access. Import your Fresha data into the trial environment. Test all features with your actual service menu and staff. Run BookB alongside Fresha during your evaluation period. Our team provides hands-on training and implementation support during trial. Cancel anytime if BookB isn't the right fit. No credit card required to start your trial.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2>Transparent Pricing, No Surprises</h2>
          <p className="section-subtitle">Professional software without marketplace fees or commission</p>

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
