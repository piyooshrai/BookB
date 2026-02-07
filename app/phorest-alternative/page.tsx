import Image from 'next/image'
import { images } from '@/lib/unsplash-images'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

export default function PhorestAlternative() {
  return (
    <>
      <Navigation />

      <section className="hero">
        <div className="hero-grid">
        <div className="hero-content">
          <h1>The Modern Phorest Alternative That Saves You Thousands</h1>
          <p className="hero-subtitle">
            BookB delivers powerful salon management software at a fraction of Phorest's cost, without sacrificing features or support quality. No lengthy contracts, no expensive hardware requirements, no complex training periods. Get enterprise-level capabilities with consumer-grade simplicity and transparent pricing that makes sense for salons of any size.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Join thousands of salons saving $3,000+ annually versus Phorest</p>
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
          <h2>BookB vs Phorest: Real Cost Analysis</h2>
          <p className="section-subtitle">Compare actual costs, not just advertised monthly fees</p>

          <div className="comparison-table">
            <div className="comparison-row comparison-header">
              <div className="feature-name">Cost Factor</div>
              <div className="competitor-value">Phorest</div>
              <div className="bookb-value">BookB</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Monthly Fee (5 users)</div>
              <div className="competitor-value">$299</div>
              <div className="bookb-value">$99</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Implementation Fee</div>
              <div className="competitor-value">$750-1,500</div>
              <div className="bookb-value">$0</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Minimum Contract</div>
              <div className="competitor-value">12 months</div>
              <div className="bookb-value">Month-to-month</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Training Cost</div>
              <div className="competitor-value">$500-1,000</div>
              <div className="bookb-value">Free</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Hardware Required</div>
              <div className="competitor-value">Specific iPad models</div>
              <div className="bookb-value">Any device</div>
            </div>
            <div className="comparison-row savings-row">
              <div className="feature-name"><strong>First Year Total Cost</strong></div>
              <div className="competitor-value">$5,838</div>
              <div className="bookb-value">$1,188</div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Salons Switch from Phorest to BookB</h2>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Simpler Without Being Limited</h3>
              <p>

                Phorest's complexity stems from trying to serve international salon chains, making it overwhelming for independent salons and small groups. BookB delivers professional capabilities through intuitive interfaces that staff actually enjoy using.

              </p>

              <p>

                Appointment scheduling works the way salon receptionists think, not how software engineers design databases. Service menus organize naturally by category and popularity rather than requiring complex hierarchies.

              </p>

              <p>

                Client profiles show relevant information prominently instead of burying details across multiple tabs. Color formula documentation integrates seamlessly into service notes without separate modules.

              </p>

              <p>

                Staff scheduling handles shift swaps and time-off requests without administrator intervention. Commission tracking accommodates complex splits and overrides through simple configuration.

              </p>

              <p>

                Inventory management prevents stockouts without requiring dedicated inventory specialists. Marketing automation runs sophisticated campaigns through straightforward setup wizards.

              </p>

              <p>

                Reporting provides actionable insights without overwhelming users with every possible metric. The mobile app gives stylists schedule access and earnings visibility without desktop complexity.

              </p>

              <p>

                Client self-service booking works flawlessly without requiring IT support for widget installation. Walk-in queue management integrates with scheduled appointments through unified interfaces.

              </p>

              <p>

                Package and membership sales happen naturally during checkout without separate transaction workflows. Gift card activation and redemption require no special training.

              </p>

              <p>

                Retail product scanning integrates with service checkout seamlessly. Payment processing handles tips, splits, and refunds through intuitive prompts.

              </p>

              <p>

                End-of-day closeout reconciles automatically without manual cash drawer counting. Multi-location visibility happens through simple location switching, not complex navigation.

              </p>

              <p>

                API integrations with accounting software work through pre-built connectors. Data exports generate in standard formats without custom report builders.

              </p>

              <p>

                User permissions control access appropriately without elaborate role engineering.

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
              <h3>No Hardware Lock-In</h3>
              <p>

                Phorest requires specific iPad models and proprietary hardware, creating vendor lock-in and ongoing replacement costs. BookB works on any modern device with a web browser.

              </p>

              <p>

                Use existing computers, tablets, or smartphones without purchasing proprietary hardware. Android tablets cost less than iPads while working identically.

              </p>

              <p>

                Staff can use personal devices through secure browser access. Payment terminals integrate with major processors without brand restrictions.

              </p>

              <p>

                Receipt printers work via standard protocols, not proprietary connections. Barcode scanners for retail products use industry-standard formats.

              </p>

              <p>

                Cash drawers connect through common interfaces. Customer-facing displays work with standard monitors or tablets.

              </p>

              <p>

                Digital signature pads integrate through standard drivers. Scale hardware for weight-based product sales connects via USB.

              </p>

              <p>

                Card readers support EMV chip, contactless, and magnetic stripe universally. Existing point-of-sale hardware often works with simple configuration.

              </p>

              <p>

                No special maintenance contracts for proprietary equipment. Hardware failures don't shut down your entire operation.

              </p>

              <p>

                Backup devices activate immediately without licensing issues. Remote locations use whatever hardware makes sense locally.

              </p>

              <p>

                Franchisees choose cost-effective hardware within their budgets. Seasonal locations avoid hardware sitting idle during closed periods.

              </p>

              <p>

                Mobile stylists use smartphones and inexpensive card readers. Home-based businesses avoid unnecessary hardware investments.

              </p>

              <p>

                Popup locations and events use portable consumer devices. Hardware upgrades happen on your timeline, not forced by vendor compatibility matrices.

              </p>

              <p>

                Trade show demos run on rental equipment without custom provisioning. Training environments use existing equipment without duplicating expensive hardware.

              </p>

              <p>

                Development and staging environments work on standard computers.

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
              <h3>Faster Implementation, Better Support</h3>
              <p>

                Phorest implementation drags over weeks with expensive training requirements and consultant dependencies. BookB gets you operational in days with hands-on support that continues long after go-live.

              </p>

              <p>

                Migration specialists import your client database, service menu, and historical appointments within 48 hours. Training happens through role-specific video tutorials, live group sessions, and one-on-one coaching calls.

              </p>

              <p>

                Setup wizards guide configuration of services, staff, and business rules without consultant billable hours. Template libraries provide starting points for email campaigns, service descriptions, and client communications.

              </p>

              <p>

                Pre-built reports cover common salon metrics without custom development. Integration connectors work through simple authentication without API programming.

              </p>

              <p>

                Test environments let you experiment safely before committing changes to production. Staging areas preview updates before deploying to staff-facing systems.

              </p>

              <p>

                Sandbox accounts provide unlimited practice without affecting live data. Documentation includes screenshots, videos, and searchable knowledge bases.

              </p>

              <p>

                Community forums connect you with other salon owners solving similar challenges. Feature request voting influences product roadmap prioritization.

              </p>

              <p>

                Beta programs offer early access to new capabilities with dedicated support channels. Support tickets receive responses within hours, not days.

              </p>

              <p>

                Phone support connects quickly without automated phone tree mazes. Screen sharing helps resolve complex issues faster than email exchanges.

              </p>

              <p>

                Emergency support handles critical issues 24/7 without premium charges. Account managers check in proactively, not just when contracts renew.

              </p>

              <p>

                Business reviews analyze your usage patterns and suggest optimization opportunities. Industry best practices get shared through webinars and newsletters.

              </p>

              <p>

                Regulatory compliance updates deploy automatically without manual intervention. Payment processor changes integrate smoothly through guided workflows.

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
              <h3>Marketing That Actually Drives Revenue</h3>
              <p>

                Phorest's marketing tools require separate subscriptions and complex setup. BookB includes sophisticated marketing automation in every plan at no extra cost.

              </p>

              <p>

                Automated appointment reminders reduce no-shows through SMS and email sent at optimal times. Birthday campaigns celebrate clients with personalized offers based on their service preferences.

              </p>

              <p>

                Re-engagement workflows target inactive clients with compelling incentives to return. New service announcements reach interested clients based on historical booking patterns.

              </p>

              <p>

                Last-minute availability notifications fill cancellations through targeted outreach. Package promotions encourage prepayment through limited-time offers and bundle discounts.

              </p>

              <p>

                Membership drives create recurring revenue through automated enrollment campaigns. Referral programs reward existing clients for bringing friends with tracked incentive delivery.

              </p>

              <p>

                Review request automation sends timing-optimized requests after successful appointments. Before and after galleries showcase your work across social media and website properties.

              </p>

              <p>

                Client success stories highlight transformations with permission-based sharing. Seasonal promotions align with holidays, weather changes, and cultural events.

              </p>

              <p>

                Event marketing drives traffic for trunk shows, product launches, and special guests. Educational content positions your salon as beauty experts through blog posts and videos.

              </p>

              <p>

                Social media scheduling maintains consistent presence without daily manual posting. Email segmentation delivers relevant messages based on client characteristics and behaviors.

              </p>

              <p>

                A/B testing optimizes subject lines, offers, and call-to-action effectiveness. Conversion tracking measures which campaigns drive actual bookings and revenue.

              </p>

              <p>

                Customer lifetime value analysis identifies your most profitable client segments. Retention metrics highlight at-risk clients before they churn to competitors.

              </p>

              <p>

                Acquisition cost tracking measures marketing efficiency across channels. Campaign attribution connects marketing spend to revenue generation.

              </p>

              <p>

                ROI dashboards prove marketing effectiveness to justify budgets.

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
          <h2>Common Questions About Switching from Phorest</h2>
          <p className="section-subtitle">Everything you need to know about making the transition</p>

          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'left'}}>
            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>How difficult is migration from Phorest?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Migration typically completes in 2-3 days with BookB's dedicated team handling the technical work. We export your complete Phorest database including clients, appointments, staff, services, and financial history. Color formulas, client notes, and photos transfer automatically. Package balances and gift card values migrate precisely. Your team receives role-specific training during the transition period.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Can I escape my Phorest contract early?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Many salons find that annual savings with BookB exceed Phorest early termination fees, making switching worthwhile even mid-contract. We provide cost comparison calculators showing breakeven timing. Some salons run BookB alongside Phorest during contract wind-down. Others negotiate early termination when presenting competitive quotes. Our team provides documentation supporting your business case for switching.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>What happens to my client appointment history?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                All historical appointment data transfers completely including services performed, products used, stylists, pricing, and notes. This history remains searchable and reportable in BookB. Clients see their complete service history when they log into their account. Stylists access past services during consultations. Reports include historical data for year-over-year comparisons.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Does BookB integrate with my accounting software?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                BookB integrates with QuickBooks, Xero, and other major accounting platforms. Daily sales summaries export automatically. Chart of accounts mapping ensures transactions categorize correctly. Sales tax calculation and reporting matches your jurisdiction requirements. End-of-day reconciliation provides audit trails. Payroll data exports in formats your payroll provider accepts.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>How does reporting compare?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                BookB reporting focuses on actionable salon metrics rather than overwhelming data dumps. Track revenue by service category, staff performance, retail versus service sales, peak booking times, and client retention. Custom reports can be created and scheduled for automatic delivery. Data exports to Excel for additional analysis. Dashboards provide at-a-glance business health. Historical comparisons show trends over time.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Will my existing payment processor work?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                BookB integrates with major payment processors including Square, Stripe, and traditional merchant accounts. You maintain existing processor relationships and negotiated rates. Card readers typically work with simple reconfiguration. If you prefer BookB's integrated processing, rates are competitive with transparent pricing and no hidden fees.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Can clients keep booking online during the switch?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Yes, BookB's online booking goes live immediately after setup. We provide communication templates announcing the new booking system to your clients. The booking widget embeds on your existing website. Social media posts direct clients to the new booking page. Transition happens seamlessly from the client perspective. Many salons report improved booking rates with BookB's mobile-optimized interface.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>What if I need features Phorest has that BookB doesn't?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                BookB covers 99% of features salons actually use daily. For edge cases, our API allows custom integrations. Enterprise plans include custom development for specialized requirements. Feature requests influence our roadmap with popular requests prioritized. Many salons discover they were paying for Phorest features they never used. Our team helps identify truly essential features versus nice-to-haves during evaluation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2>Straightforward Pricing Without Surprises</h2>
          <p className="section-subtitle">Everything included, no hidden fees or expensive add-ons</p>

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
