import Image from 'next/image'
import { images } from '@/lib/unsplash-images'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

export default function SalonIrisAlternative() {
  return (
    <>
      <Navigation />

      <section className="hero">
        <div className="hero-grid">
        <div className="hero-content">
          <h1>The Modern Salon Iris Alternative for Today's Salons</h1>
          <p className="hero-subtitle">
            BookB brings salon management into the cloud era with mobile access, modern interfaces, and features designed for how salons operate today. Leave behind Salon Iris's desktop-only limitations, outdated interface, and single-computer restrictions. Get cloud-based flexibility, mobile apps for staff and clients, and intuitive tools that work on any device from anywhere.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Join 10,000+ salons who upgraded to cloud-based salon software</p>
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
          <h2>BookB vs Salon Iris: Technology Comparison</h2>
          <p className="section-subtitle">See the difference modern cloud technology makes</p>

          <div className="comparison-table">
            <div className="comparison-row comparison-header">
              <div className="feature-name">Technology</div>
              <div className="competitor-value">Salon Iris</div>
              <div className="bookb-value">BookB</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Deployment</div>
              <div className="competitor-value">Desktop only</div>
              <div className="bookb-value">Cloud-based</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Mobile Access</div>
              <div className="competitor-value">Limited</div>
              <div className="bookb-value">Full iOS/Android</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Remote Access</div>
              <div className="competitor-value">Complex VPN</div>
              <div className="bookb-value">Built-in</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Automatic Backups</div>
              <div className="competitor-value">Manual</div>
              <div className="bookb-value">Automatic</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Multi-Location</div>
              <div className="competitor-value">Requires networking</div>
              <div className="bookb-value">Native support</div>
            </div>
            <div className="comparison-row savings-row">
              <div className="feature-name"><strong>IT Maintenance</strong></div>
              <div className="competitor-value">Your responsibility</div>
              <div className="bookb-value">We handle it</div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Salons Upgrade from Salon Iris to BookB</h2>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Cloud-Based Freedom and Flexibility</h3>
              <p>

                Salon Iris ties you to specific computers in your salon, making remote access complicated and limiting staff to on-premise work. BookB's cloud-based architecture provides access from anywhere on any device with internet connectivity.

              </p>

              <p>

                Check schedules from home when planning your week without driving to the salon. Review daily reports from your phone while on vacation without VPN configuration.

              </p>

              <p>

                Staff access their schedules from home to check tomorrow's appointments and prepare mentally. Stylists update client notes immediately after appointments from their personal phones while details are fresh.

              </p>

              <p>

                Managers approve time-off requests from mobile devices without returning to the office computer. Multi-location owners view consolidated reporting across all salons from anywhere.

              </p>

              <p>

                Accountants access financial data remotely without needing salon computer access or scheduled visits. New locations go live immediately without purchasing expensive server equipment or networking infrastructure.

              </p>

              <p>

                Seasonal locations close down without worrying about computer security or data backup. Popup events and trunk shows take bookings that sync automatically with salon schedules.

              </p>

              <p>

                Mobile stylists manage their entire business from smartphones and tablets. Home-based businesses avoid unnecessary computer infrastructure investments.

              </p>

              <p>

                Data backup happens automatically to multiple geographic locations preventing catastrophic loss. Disaster recovery means new devices can access data immediately after fire, theft, or flooding.

              </p>

              <p>

                Computer crashes don't shut down your entire business operations. Operating system updates don't risk software compatibility breaking.

              </p>

              <p>

                Browser updates deploy automatically ensuring security and performance. Staff use personal devices through secure browser access without expensive business computers.

              </p>

              <p>

                New hires start working immediately on any available device. Temporary staff during busy seasons work without dedicated computer purchases.

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
              <h3>Modern Interface That Staff Actually Enjoy</h3>
              <p>

                Salon Iris's interface dates back decades with dense screens, cryptic codes, and workflows designed for different era of computing. BookB provides modern, intuitive interfaces that new staff learn in minutes rather than hours of training.

              </p>

              <p>

                Visual calendar layouts show appointments at a glance with color coding by service type and stylist assignment. Drag and drop rescheduling happens in seconds rather than navigating multiple dialogs and confirmation screens.

              </p>

              <p>

                Client search finds people instantly by typing any part of their name, phone number, or email address. Service menus organize logically by category with clear descriptions and current pricing displayed prominently.

              </p>

              <p>

                Point of sale checkout flows naturally from service completion through payment in guided steps. Mobile-responsive design works perfectly whether staff use large desktop monitors or small smartphone screens.

              </p>

              <p>

                Touch-friendly buttons and controls work equally well with mouse clicks, touchpad gestures, or finger taps. Keyboard shortcuts speed repetitive tasks for power users while remaining optional for casual users.

              </p>

              <p>

                Contextual help appears inline explaining features right where needed without searching documentation. Error messages explain what went wrong in plain language and suggest how to fix issues.

              </p>

              <p>

                Auto-complete suggests clients, services, and products as you type reducing entry errors. Recently viewed clients and common actions provide quick access to frequent tasks.

              </p>

              <p>

                Customizable dashboards show each role the information they need without overwhelming them with irrelevant data. Print formats generate clean professional invoices, appointment cards, and reports without graphic design skills.

              </p>

              <p>

                Email templates look professional and mobile-friendly without HTML coding knowledge. Dark mode reduces eye strain for staff working long shifts in dimly lit salon environments.

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
              <h3>Mobile Apps for Staff and Clients</h3>
              <p>

                Salon Iris has no meaningful mobile presence, forcing everyone to use desktop computers during an increasingly mobile era. BookB provides full-featured mobile applications for both staff members and clients accessing all essential functionality from smartphones and tablets.

              </p>

              <p>

                Stylists view their complete schedules including client names, services booked, appointment notes, and color formulas from their phones between appointments. Staff check earnings in real-time seeing service revenue, retail commissions, tips received, and projected pay for the current period.

              </p>

              <p>

                Availability management lets stylists block personal time, indicate preferred shifts, and respond to scheduling requests remotely. Client notes update immediately after appointments while details remain fresh in stylist memory.

              </p>

              <p>

                Before and after photos upload directly from phone cameras organizing automatically in client profiles. Push notifications alert staff to schedule changes, shift assignments, and important announcements.

              </p>

              <p>

                Managers approve or deny time-off requests from mobile devices with full schedule visibility to assess staffing impact. Client mobile apps allow self-service booking with real-time availability showing exactly which time slots remain open.

              </p>

              <p>

                Appointment reminders send push notifications in addition to SMS and email reaching clients through their preferred channel. Clients reschedule or cancel appointments following your policies without phone calls during busy reception times.

              </p>

              <p>

                Service history displays previous appointments with services performed, products used, and outcomes achieved. Favorite stylists save for quick rebooking with the professionals clients trust most.

              </p>

              <p>

                Package and membership balances show remaining services and expiration dates encouraging rebooking. Gift card balances check before salon visits preventing awkward payment situations.

              </p>

              <p>

                Profile management updates contact information, service preferences, and allergy alerts maintaining accurate records.

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
              <h3>Automatic Updates and Zero IT Maintenance</h3>
              <p>

                Salon Iris requires manual software updates, database maintenance, and ongoing IT attention that most salon owners aren't equipped to handle. BookB handles all technical maintenance automatically letting you focus on running your salon business.

              </p>

              <p>

                Software updates deploy automatically during off-peak hours adding new features without interrupting your workday or requiring IT coordination. Security patches apply immediately protecting against emerging threats without administrator intervention or vulnerability windows.

              </p>

              <p>

                Database optimization happens continuously maintaining peak performance as your client base and history grows over years. Backup verification tests restore procedures regularly ensuring recovery actually works when needed rather than discovering backup failures during emergencies.

              </p>

              <p>

                Capacity scaling increases automatically as your business grows without manual server upgrades or performance degradation. Browser compatibility testing ensures the interface works across Chrome, Safari, Firefox, and Edge without users encountering broken features.

              </p>

              <p>

                Mobile app updates deploy through standard app stores with automated testing ensuring new releases don't break existing functionality. Payment processor integrations update automatically as providers change APIs and security requirements evolve.

              </p>

              <p>

                Accounting software connectors maintain compatibility as QuickBooks, Xero, and others release new versions and change data formats. Email delivery monitoring ensures reminder and marketing messages reach clients rather than landing in spam folders.

              </p>

              <p>

                SMS carrier relationships maintain message delivery rates and handle changing regulations around marketing messages. Performance monitoring detects slowdowns proactively and scales resources before users experience degraded service.

              </p>

              <p>

                Error tracking identifies and fixes bugs automatically in many cases before users even notice issues. Compliance updates deploy automatically as privacy regulations, payment card standards, and labor laws evolve.

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
          <h2>Common Questions from Salon Iris Users</h2>
          <p className="section-subtitle">Everything you need to know about modernizing your salon software</p>

          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'left'}}>
            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>How do I migrate data from Salon Iris desktop software?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                BookB's migration specialists export your Salon Iris database including complete client profiles, service history, appointment data, and financial records. Color formulas, client notes, and photos transfer automatically where Salon Iris stored them. Package balances and gift card values migrate precisely. The process typically completes within 48 hours with minimal salon involvement required beyond providing database access.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>What if my internet goes down?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                BookB's mobile apps include offline modes that let you continue booking appointments and checking out clients during internet outages. Data syncs automatically when connectivity returns. For extended outages, mobile hotspots from phones provide temporary internet access. Most salons find modern internet reliability makes this a non-issue compared to Salon Iris computer crashes and hardware failures.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Will my existing hardware work with BookB?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                BookB works through web browsers on any computer, tablet, or smartphone manufactured in the last 5-7 years. Receipt printers, card readers, cash drawers, and barcode scanners typically work with simple configuration. You're not locked into specific hardware brands or models like some salon software requires. Use whatever devices make sense for your budget and preferences.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>How does cloud pricing compare to one-time Salon Iris purchase?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                While Salon Iris sells perpetual licenses, total cost includes annual support fees, manual backup solutions, IT maintenance, hardware replacement, and lost productivity from outdated interfaces. BookB's subscription includes software, hosting, backups, updates, support, and mobile apps. Most salons find cloud software costs less when accounting for all factors while providing far superior functionality and reliability.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Can I still access my data if I cancel BookB?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Yes, BookB provides complete data exports in standard formats including CSV and PDF. Your client database, service history, financial records, and all other information exports fully. Historical reporting remains available during your notice period. We want you to stay because of value, not data hostage situations. Your data is yours, always.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>How long until staff are fully productive with BookB?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Staff familiar with Salon Iris typically reach full productivity with BookB within 2-3 days. The modern interface is more intuitive than Salon Iris's dated screens. Video tutorials cover common tasks in 3-5 minute focused sessions. Live training handles your specific workflows. Phone and chat support assist during the learning period. Most salons report staff prefer BookB's interface significantly over Salon Iris.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>What about multi-location support?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                BookB's cloud architecture makes multi-location management trivial compared to Salon Iris's complex networking requirements. Client databases share across locations letting clients book at any salon. Staff can work at multiple locations with unified scheduling. Reporting aggregates or separates by location as needed. Inventory transfers between locations with simple workflows. All locations stay synchronized automatically.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Can I try BookB before committing?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Yes, BookB offers a 30-day free trial with complete feature access. Import your Salon Iris data to test with real information. Run BookB alongside Salon Iris during evaluation. Our team provides hands-on training and implementation support. Cancel anytime if it's not the right fit. No credit card required to start your trial.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2>Modern Cloud Software at Transparent Prices</h2>
          <p className="section-subtitle">All-inclusive pricing covers software, hosting, backups, updates, and support</p>

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

      <Footer />
    </>
  );
}
