import Image from 'next/image'
import { images } from '@/lib/unsplash-images'

export default function MillenniumAlternative() {
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
          <h1>The Millennium Alternative for Modern Salon Operations</h1>
          <p className="hero-subtitle">
            BookB delivers contemporary salon management with cloud technology, intuitive interfaces, and transparent pricing. Leave behind Millennium's outdated desktop software, expensive proprietary hardware, and legacy technology limitations. Get modern tools designed for how today's salons actually operate with mobile access, automatic updates, and features that staff love using.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Trusted by 10,000+ salons who modernized their operations</p>
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
          <h2>BookB vs Millennium: Modern vs Legacy</h2>
          <p className="section-subtitle">See how modern cloud technology improves salon operations</p>

          <div className="comparison-table">
            <div className="comparison-row comparison-header">
              <div className="feature-name">Factor</div>
              <div className="competitor-value">Millennium</div>
              <div className="bookb-value">BookB</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Technology Platform</div>
              <div className="competitor-value">Legacy desktop</div>
              <div className="bookb-value">Modern cloud</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Remote Access</div>
              <div className="competitor-value">Difficult</div>
              <div className="bookb-value">Built-in</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Mobile Apps</div>
              <div className="competitor-value">Limited</div>
              <div className="bookb-value">Full-featured</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Interface Design</div>
              <div className="competitor-value">1990s style</div>
              <div className="bookb-value">Contemporary</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Pricing Model</div>
              <div className="competitor-value">Complex licensing</div>
              <div className="bookb-value">Simple subscription</div>
            </div>
            <div className="comparison-row savings-row">
              <div className="feature-name"><strong>Total Cost of Ownership</strong></div>
              <div className="competitor-value">High</div>
              <div className="bookb-value">Transparent</div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Salons Migrate from Millennium to BookB</h2>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Escape Desktop Software Limitations</h3>
              <p>

                Millennium ties your business to specific computers in your salon creating accessibility limitations and single points of failure. BookB's cloud architecture liberates your data and operations from desktop constraints providing universal access from any device anywhere.

              </p>

              <p>

                Check tomorrow's schedule from your phone at home without driving to the salon late night. Review financial reports from tablets while traveling without VPN configuration or remote desktop complications.

              </p>

              <p>

                Staff view their schedules from personal devices preparing mentally for next day appointments. Stylists access client color formulas and service history from smartphones between appointments while details matter.

              </p>

              <p>

                Managers approve time-off requests from mobile devices without returning to office computers. Multi-location owners view consolidated reporting across all salons from anywhere internet connectivity exists.

              </p>

              <p>

                Accountants access financial data remotely without scheduling on-site visits or requesting exports manually. New locations launch immediately without purchasing expensive servers or configuring complex networks.

              </p>

              <p>

                Seasonal locations close without worrying about computer security, environmental controls, or backup procedures. Popup events and satellite locations take appointments that sync automatically with main salon schedules.

              </p>

              <p>

                Mobile stylists and home-based professionals manage complete businesses from smartphones and tablets. Computer crashes don't halt salon operations since data lives securely in cloud infrastructure.

              </p>

              <p>

                Hardware theft or damage doesn't cause business disruption beyond replacing consumer-grade devices. Operating system updates don't risk software compatibility or require IT coordination.

              </p>

              <p>

                Staff use personal devices through secure browser access without expensive business computer purchases. New employees start productively immediately on any available device without software installation.

              </p>

              <p>

                Temporary seasonal staff work without dedicated hardware investments that sit idle most of the year.

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
              <h3>Contemporary Interface Design</h3>
              <p>

                Millennium's interface reflects 1990s desktop software design creating steep learning curves and frustrating user experiences. BookB provides contemporary interfaces that new staff learn intuitively in minutes matching expectations from modern consumer applications.

              </p>

              <p>

                Visual appointment calendars display schedules at glance with color coding by service type, stylist assignment, and appointment status. Drag and drop rescheduling moves appointments effortlessly rather than navigating multiple dialog boxes and confirmation screens.

              </p>

              <p>

                Client search finds people instantly typing any fragment of name, phone number, or email address. Service menus organize logically by category with clear descriptions, current pricing, and duration estimates displayed prominently.

              </p>

              <p>

                Point of sale flows naturally from service completion through product sales to payment in guided conversational steps. Mobile-responsive design adapts perfectly whether staff use large desktop monitors or small smartphone screens.

              </p>

              <p>

                Touch-friendly controls work equally well with mouse clicks, touchpad gestures, or direct finger taps on screens. Keyboard shortcuts accelerate repetitive tasks for power users while remaining completely optional for occasional users.

              </p>

              <p>

                Contextual help appears inline exactly where needed without searching through dense documentation manuals. Error messages explain problems in plain language and suggest specific remediation steps rather than cryptic codes.

              </p>

              <p>

                Auto-complete suggests clients, services, and products as typing occurs reducing data entry errors and time. Recently accessed information provides quick shortcuts to frequent tasks without navigating deep menu hierarchies.

              </p>

              <p>

                Customizable dashboards show role-appropriate information without overwhelming users with irrelevant data meant for other positions. Print templates generate professional invoices, appointment cards, and reports without graphic design skills or software knowledge.

              </p>

              <p>

                Email templates appear professional and mobile-friendly without HTML coding or technical expertise required.

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
              <h3>Simple Transparent Pricing</h3>
              <p>

                Millennium's complex licensing model includes perpetual licenses, annual maintenance fees, per-station charges, and module-based feature access creating confusing total cost calculations. BookB uses straightforward subscription pricing where monthly fee includes everything you need to run your salon successfully.

              </p>

              <p>

                Software access for appropriate staff count at your tier level includes all core functionality without artificial feature restrictions. Automatic updates deploy new features and security patches without upgrade fees or migration projects requiring consultant involvement.

              </p>

              <p>

                Cloud hosting provides reliable infrastructure without purchasing servers, networking equipment, or backup systems separately. Technical support via phone, email, and chat comes standard without premium support contract add-ons or per-incident fees.

              </p>

              <p>

                Mobile applications for staff and clients download free without in-app purchases or additional licensing requirements. Payment processing integrates at competitive transparent rates without hidden markup or monthly gateway fees beyond actual costs.

              </p>

              <p>

                SMS notifications charge actual carrier rates without profit margins or message bundle requirements creating waste. Email marketing sends unlimited messages to your client database without per-email charges or contact list size restrictions.

              </p>

              <p>

                Data storage scales automatically as your business grows without quota limits or overage charges appearing unexpectedly. API access for custom integrations and third-party tools works without developer licensing or connection fees.

              </p>

              <p>

                Training resources including videos, documentation, and webinars remain accessible permanently without expiring access. Customer community forums and peer networking function for all customers regardless of plan tier or account age.

              </p>

              <p>

                Feature requests and product roadmap voting influence development priorities for all users equally without enterprise-only consideration. Security updates and compliance maintenance deploy universally protecting all customers not just premium tiers.

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
              <h3>No IT Maintenance Burden</h3>
              <p>

                Millennium requires ongoing IT maintenance including software updates, database optimization, backup management, and hardware maintenance that most salon owners lack expertise to handle properly. BookB eliminates IT burden through fully managed cloud service where technical maintenance happens automatically behind the scenes.

              </p>

              <p>

                Software updates deploy during off-peak hours adding new features and security improvements without requiring your involvement or coordination. Security patches apply immediately protecting against emerging threats without creating vulnerability windows waiting for manual updates.

              </p>

              <p>

                Database optimization runs continuously maintaining peak performance as your client records and transaction history accumulates over years of operation. Backup procedures execute automatically throughout the day storing data redundantly across multiple geographic locations preventing single failure catastrophes.

              </p>

              <p>

                Disaster recovery testing verifies backups actually restore successfully rather than discovering backup failures during actual emergencies when data recovery urgently matters. Capacity scaling adds computing resources automatically as your business grows avoiding performance degradation from increased usage.

              </p>

              <p>

                Browser compatibility testing ensures interface works correctly across Chrome, Safari, Firefox, and Edge without users encountering broken features. Mobile app updates deploy through standard app stores with thorough testing ensuring new releases don't break existing functionality users depend upon.

              </p>

              <p>

                Payment processor integrations maintain compatibility as providers change APIs and evolve security requirements over time. Accounting software connectors update automatically as QuickBooks, Xero, and competitors release new versions with changed data format expectations.

              </p>

              <p>

                Email delivery monitoring ensures appointment reminders and marketing messages reach clients rather than getting trapped in spam filters. Performance monitoring detects slowdowns proactively scaling resources before users experience degraded response times during busy periods.

              </p>

              <p>

                Error tracking identifies and often fixes bugs automatically before users even notice issues occurred.

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
          <h2>Questions from Millennium Users Considering BookB</h2>
          <p className="section-subtitle">Everything you need to know about modernizing to cloud software</p>

          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'left'}}>
            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Can you migrate our Millennium database?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Yes, BookB's migration team exports complete Millennium databases including client profiles, appointment history, service menus, staff information, and financial records. Color formulas, client notes, and treatment plans transfer where Millennium stored them properly. Package balances and gift card values migrate precisely. The entire process typically completes within 48-72 hours with minimal salon involvement beyond providing database access credentials.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>What happens if internet goes down?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                BookB mobile apps include offline capability letting you continue booking appointments and processing checkouts during internet outages with automatic synchronization when connectivity returns. For extended outages, mobile hotspots from smartphones provide backup internet access. Modern internet reliability combined with mobile backup options makes this significantly less problematic than Millennium server crashes or hardware failures that completely halt operations.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>How does subscription pricing compare to Millennium's perpetual license?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                While Millennium sells perpetual licenses, total cost includes annual support fees, manual backup solutions, IT maintenance time, periodic hardware replacement, and lost productivity from outdated interfaces. BookB subscription includes software, hosting, automatic backups, continuous updates, support, and mobile apps. Most salons find cloud software costs less when accounting for all factors while providing superior functionality, reliability, and user experience.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Will staff need extensive retraining?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Staff familiar with Millennium typically become productive with BookB within 2-3 days. The modern interface is more intuitive than Millennium's dated screens making the transition easier than you might expect. Video tutorials cover common tasks in focused 3-5 minute sessions. Live training addresses your specific workflows. Phone and chat support assists during the learning period. Most salons report staff strongly prefer BookB's interface over Millennium's complexity.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Can we keep our existing payment processor?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Yes, BookB integrates with major payment processors including Square, Stripe, and traditional merchant accounts. You maintain existing processor relationships and negotiated rates. Card readers typically work with simple reconfiguration. If you prefer integrated payment processing, BookB offers competitive rates with complete transparency and no hidden fees or transaction markups beyond actual processing costs.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Is our data safe in the cloud?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                BookB uses bank-level encryption, redundant backups across multiple geographic locations, and regular security audits. Cloud data is significantly safer than desktop software vulnerable to hardware theft, fire, flooding, or simple hard drive failure. You maintain complete data ownership with ability to export everything anytime. We're committed to data security because your trust is our most valuable asset.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>What about multi-location management?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                BookB's cloud architecture makes multi-location management seamless compared to Millennium's complex server networking requirements. Clients book at any location with history following them automatically. Staff work at multiple locations with centralized scheduling. Reporting aggregates across all locations or separates by individual salon as needed. Inventory transfers between locations through simple workflows. Everything stays synchronized automatically without manual reconciliation.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Can I try BookB before committing?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Yes, BookB offers a 30-day free trial with complete feature access. Import your Millennium data to test with real information and workflows. Run BookB alongside Millennium during evaluation period if you prefer gradual transition. Our team provides hands-on training and implementation support throughout trial. Cancel anytime if it's not the right fit. No credit card required to start your trial period.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2>All-Inclusive Cloud Pricing</h2>
          <p className="section-subtitle">Software, hosting, backups, updates, and support included</p>

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
