import Image from 'next/image'
import { images } from '@/lib/unsplash-images'

export default function ShortcutsAlternative() {
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
          <h1>The Shortcuts Alternative with Modern Cloud Technology</h1>
          <p className="hero-subtitle">
            BookB provides cloud-based salon management that works anywhere on any device, unlike Shortcuts' desktop-only limitations. Get mobile apps for staff and clients, automatic backups, remote access, and contemporary interfaces designed for today's connected world. Leave behind single-computer constraints and embrace the flexibility modern salons need.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Join 10,000+ salons who upgraded to cloud-based operations</p>
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
          <h2>BookB vs Shortcuts: Cloud vs Desktop</h2>
          <p className="section-subtitle">See how cloud technology transforms salon operations</p>

          <div className="comparison-table">
            <div className="comparison-row comparison-header">
              <div className="feature-name">Capability</div>
              <div className="competitor-value">Shortcuts</div>
              <div className="bookb-value">BookB</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Platform</div>
              <div className="competitor-value">Desktop only</div>
              <div className="bookb-value">Cloud-based</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Remote Access</div>
              <div className="competitor-value">Complex VPN</div>
              <div className="bookb-value">Native</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Mobile Apps</div>
              <div className="competitor-value">None</div>
              <div className="bookb-value">iOS & Android</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Automatic Backups</div>
              <div className="competitor-value">Manual</div>
              <div className="bookb-value">Continuous</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Multi-Location</div>
              <div className="competitor-value">Networking required</div>
              <div className="bookb-value">Built-in</div>
            </div>
            <div className="comparison-row savings-row">
              <div className="feature-name"><strong>Access Flexibility</strong></div>
              <div className="competitor-value">Limited</div>
              <div className="bookb-value">Unlimited</div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Salons Move from Shortcuts to BookB</h2>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Work from Anywhere, Not Just the Salon</h3>
              <p>

                Shortcuts confines your business to specific desktop computers in your salon making remote work impossible without complex VPN configurations. BookB's cloud architecture provides secure access from anywhere on any device with internet connectivity liberating you from location constraints.

              </p>

              <p>

                Review tomorrow's appointments from home planning your day without late-night salon trips to check the schedule book. Analyze weekly revenue reports from your phone while on vacation monitoring business performance without being physically present.

              </p>

              <p>

                Approve staff time-off requests from tablets during family time rather than waiting until you're back at the salon office. Staff check their schedules from personal phones at home preparing mentally for upcoming appointments and services.

              </p>

              <p>

                Stylists access client color formulas and service notes from smartphones between appointments while information matters most. Update client profiles immediately after services from mobile devices while details remain fresh in memory rather than forgetting by next shift.

              </p>

              <p>

                Multi-location salon owners view consolidated performance across all locations from anywhere eliminating constant travel between sites. Accountants access financial data remotely for bookkeeping without scheduling on-site visits or requesting manual exports.

              </p>

              <p>

                New locations launch immediately without purchasing expensive dedicated servers or configuring complex networking infrastructure. Seasonal businesses close without worrying about computer security, climate control for equipment, or backup system maintenance.

              </p>

              <p>

                Popup locations at events and markets take appointments that synchronize automatically with main salon scheduling system. Mobile stylists and home-based beauty professionals manage complete businesses from smartphones and consumer tablets.

              </p>

              <p>

                Computer hardware failures don't halt business operations since data lives safely in redundant cloud infrastructure. Natural disasters like fires or floods don't destroy business records backed up automatically across geographic regions.

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
              <h3>Mobile Apps for Connected Teams</h3>
              <p>

                Shortcuts has no mobile presence forcing everyone to desktop computers during an increasingly mobile-first world. BookB provides full-featured mobile applications for both staff members and clients accessing essential functionality from devices people already carry everywhere.

              </p>

              <p>

                Stylists view complete schedules including client names, booked services, appointment notes, and documented color formulas from phones throughout their day. Staff check real-time earnings including service revenue, retail commissions, tips received, and projected pay for current period motivating performance.

              </p>

              <p>

                Availability management lets stylists block personal appointments, indicate preferred shifts, and respond to scheduling requests remotely without phone calls. Client notes update immediately after appointments capturing important details while fresh in mind rather than forgetting later.

              </p>

              <p>

                Before and after photos upload directly from smartphone cameras organizing automatically in client profiles for portfolio building. Push notifications alert staff to last-minute schedule changes, shift assignments, and urgent salon announcements even when away.

              </p>

              <p>

                Managers approve or deny time-off requests from mobile devices with full schedule visibility assessing staffing impact accurately. Performance metrics show individual productivity compared to salon averages helping staff understand their relative contribution and improvement opportunities.

              </p>

              <p>

                Client mobile apps provide self-service booking with real-time availability showing exactly which appointment slots remain open. Appointment reminders send push notifications in addition to SMS and email reaching clients through preferred communication channels.

              </p>

              <p>

                Clients reschedule or cancel appointments following your policies directly through apps without phone calls during busy reception times. Service history displays previous appointments with services performed, products purchased, and results achieved creating continuity.

              </p>

              <p>

                Favorite stylist preferences save for quick rebooking with the professionals clients trust most for their beauty needs.

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
              <h3>Automatic Everything Technical</h3>
              <p>

                Shortcuts requires manual software updates, backup procedures, and ongoing IT maintenance that most salon owners lack expertise to perform properly. BookB eliminates technical burden through fully managed cloud infrastructure where maintenance happens automatically without your involvement.

              </p>

              <p>

                Software updates deploy during off-peak hours adding new features and security improvements without requiring installation coordination or downtime scheduling. Security patches apply immediately protecting against emerging cyber threats without creating vulnerability windows while waiting for manual updates.

              </p>

              <p>

                Database optimization runs continuously maintaining peak system performance as client records and transaction history accumulates over years. Backup procedures execute automatically throughout each day storing data redundantly across multiple geographic data centers preventing single failure scenarios.

              </p>

              <p>

                Disaster recovery testing verifies backups restore successfully rather than discovering backup corruption during actual emergencies when rapid recovery matters critically. Capacity scaling adds computing resources automatically as your salon grows avoiding performance degradation from increased appointment volume and staff size.

              </p>

              <p>

                Browser compatibility testing ensures interface works correctly across Chrome, Safari, Firefox, and Edge without users encountering broken functionality. Mobile app updates deploy through standard app stores with thorough automated testing ensuring new releases don't break existing features.

              </p>

              <p>

                Payment processor integrations maintain compatibility automatically as providers change APIs and evolve security requirement standards over time. Accounting software connectors update automatically as QuickBooks, Xero, and other platforms release new versions with changed data expectations.

              </p>

              <p>

                Email delivery monitoring ensures appointment reminders and marketing campaigns reach client inboxes rather than spam folders reducing effectiveness. SMS carrier relationships maintain high message delivery rates and handle changing telecommunications regulations around marketing messages.

              </p>

              <p>

                Performance monitoring detects system slowdowns proactively and scales infrastructure before users experience degraded response times during peak periods.

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
              <h3>Contemporary User Experience</h3>
              <p>

                Shortcuts' interface reflects older desktop software design philosophies creating learning curves and daily frustration for modern users. BookB provides contemporary interfaces matching expectations from consumer applications people use daily in personal lives.

              </p>

              <p>

                Visual appointment calendars display schedules intuitively with color coding by service type, stylist assignment, and booking status. Drag and drop rescheduling moves appointments effortlessly across time slots and staff members in seconds rather than multiple clicks.

              </p>

              <p>

                Client search finds people instantly by typing any fragment of their name, phone number, or email address with intelligent matching. Service menus organize logically by category with clear descriptions, transparent pricing, and realistic duration estimates displayed prominently.

              </p>

              <p>

                Point of sale checkout flows conversationally from service completion through product recommendations to payment in natural progression. Responsive design adapts perfectly whether staff use large desktop monitors, medium tablets, or small smartphone screens interchangeably.

              </p>

              <p>

                Touch-friendly controls work identically with traditional mouse clicks, touchpad gestures, or direct finger taps on touchscreen devices. Keyboard shortcuts accelerate repetitive tasks for power users while remaining completely optional for occasional system users.

              </p>

              <p>

                Contextual help appears exactly where needed explaining features inline without searching through separate documentation manuals or help systems. Error messages communicate problems in plain language suggesting specific solutions rather than displaying cryptic technical codes.

              </p>

              <p>

                Auto-complete suggests matching clients, services, and products as typing occurs reducing data entry time and minimizing errors. Recently accessed records provide quick navigation shortcuts to frequent tasks without traversing deep menu hierarchies repeatedly.

              </p>

              <p>

                <strong>Customizable Dashboards:</strong> Display role-appropriate information for receptionists, stylists, and managers without overwhelming users with irrelevant data. Print templates generate professional invoices, appointment reminders, and reports without requiring graphic design skills or technical knowledge.

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
          <h2>Questions from Shortcuts Users Considering BookB</h2>
          <p className="section-subtitle">Everything you need to know about moving to cloud software</p>

          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'left'}}>
            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Can you migrate our Shortcuts database?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Yes, BookB's migration specialists export complete Shortcuts databases including all client profiles, appointment history, service menus, staff schedules, and financial records. Color formulas, treatment notes, and client photos transfer completely. Package remaining balances and gift card values migrate precisely. The entire migration process typically completes within 48 hours with minimal salon involvement required.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>What happens during internet outages?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                BookB mobile apps include offline functionality allowing you to continue booking appointments and processing client checkouts during temporary internet disruptions with automatic synchronization when connectivity returns. Mobile hotspots from smartphones provide backup internet access for extended outages. Modern internet reliability combined with mobile backup options makes this less problematic than Shortcuts server crashes or hardware failures.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>How does cloud subscription pricing compare to Shortcuts licensing?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                While Shortcuts charges for perpetual licenses and annual support, total ownership cost includes manual backup solutions, IT maintenance time, periodic hardware replacement, and productivity losses from limited remote access. BookB subscription includes software, cloud hosting, automatic backups, continuous updates, technical support, and mobile apps. Most salons find cloud software more cost-effective when accounting for complete ownership costs.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Will our staff need extensive retraining?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Staff familiar with Shortcuts typically reach full productivity with BookB within 2-3 days. The modern interface is actually more intuitive than Shortcuts' desktop software making transition smoother than expected. Video tutorials cover common workflows in focused sessions. Live training addresses your specific processes. Support assists during learning period. Most salons report staff strongly prefer BookB's contemporary interface.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Can we use our existing payment processor?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Yes, BookB integrates with major payment processors including Square, Stripe, and traditional merchant accounts. You maintain existing relationships and negotiated processing rates. Card readers typically work with simple reconfiguration. BookB also offers integrated payment processing at competitive transparent rates if you prefer consolidated billing without hidden fees or transaction markups.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Is cloud data actually secure?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                BookB employs bank-level encryption, redundant backups across multiple geographic regions, and regular third-party security audits. Cloud storage is significantly more secure than desktop software vulnerable to hardware theft, fire, flooding, or simple hard drive failure. You retain complete data ownership with ability to export everything anytime. We stake our business reputation on protecting your data.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>How does multi-location management work?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                BookB's cloud architecture makes multi-location operations seamless compared to Shortcuts' complex networking requirements. Clients book at any location with complete history following them automatically. Staff work at multiple locations with centralized scheduling coordination. Reporting aggregates across all salons or separates by individual location as needed. Inventory transfers between locations through simple documented workflows.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Can I test BookB before fully committing?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Absolutely, BookB offers a comprehensive 30-day free trial with complete feature access. Import your Shortcuts data to evaluate with real salon information and workflows. Run BookB alongside Shortcuts during evaluation if you prefer gradual transition. Our implementation team provides hands-on training and support throughout trial period. Cancel anytime if it doesn't meet expectations. No credit card required to begin trial.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2>Complete Cloud Solution at Fair Prices</h2>
          <p className="section-subtitle">Software, hosting, backups, updates, and support all included</p>

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
