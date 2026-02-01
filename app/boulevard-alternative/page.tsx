import Image from 'next/image'
import { images } from '@/lib/unsplash-images'

export default function BoulevardAlternative() {
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
          <h1>The Boulevard Alternative Built for Independent Salons</h1>
          <p className="hero-subtitle">
            BookB provides sophisticated salon software without Boulevard's enterprise complexity and pricing. Get intuitive tools that work from day one, transparent pricing that fits your budget, and support that treats you like a priority customer regardless of salon size. Everything you need without everything you don't.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Trusted by 10,000+ salons who need Boulevard features at BookB prices</p>
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
          <h2>BookB vs Boulevard: Cost & Value Comparison</h2>
          <p className="section-subtitle">Enterprise features without enterprise costs</p>

          <div className="comparison-table">
            <div className="comparison-row comparison-header">
              <div className="feature-name">Comparison Point</div>
              <div className="competitor-value">Boulevard</div>
              <div className="bookb-value">BookB</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Starting Price</div>
              <div className="competitor-value">$175/mo</div>
              <div className="bookb-value">$49/mo</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Onboarding Fee</div>
              <div className="competitor-value">$1,200-2,000</div>
              <div className="bookb-value">$0</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Contract Required</div>
              <div className="competitor-value">Yes, 12mo minimum</div>
              <div className="bookb-value">No contracts</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Setup Time</div>
              <div className="competitor-value">4-6 weeks</div>
              <div className="bookb-value">2-3 days</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Small Salon Friendly</div>
              <div className="competitor-value">Complex for small teams</div>
              <div className="bookb-value">Perfect for any size</div>
            </div>
            <div className="comparison-row savings-row">
              <div className="feature-name"><strong>Annual Savings</strong></div>
              <div className="competitor-value">-</div>
              <div className="bookb-value">$2,712+</div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Salons Choose BookB Over Boulevard</h2>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Built for Salons, Not Just High-End Spas</h3>
              <p>

                Boulevard targets luxury spas and high-end establishments, making it overbuilt for typical salons and barbershops. BookB serves the full spectrum of beauty businesses with appropriate sophistication for each.

              </p>

              <p>

                <strong>Appointment Scheduling:</strong> Handles both scheduled appointments and walk-in traffic equally well. Service duration estimates adjust based on client hair type and service complexity.

              </p>

              <p>

                Color formulas save with photos and application notes for perfect consistency. Client profiles track preferences without requiring extensive intake forms.

              </p>

              <p>

                Treatment plans work for ongoing relationships, not just single visits. Stylist skill matching ensures appropriate service assignments.

              </p>

              <p>

                Commission structures handle salon-typical scenarios including service splits and retail. Package sales encourage prepayment without complex membership hierarchies.

              </p>

              <p>

                Gift card programs build revenue without accounting complexity. Retail integration treats product sales as important revenue, not an afterthought.

              </p>

              <p>

                Inventory management prevents stockouts of essential supplies and retail products. Staff scheduling accommodates typical salon hours and part-time workers.

              </p>

              <p>

                Time tracking integrates with common payroll providers. Marketing automation understands salon customer lifecycles and rebooking patterns.

              </p>

              <p>

                Online booking works for walk-in friendly businesses, not just appointment-only establishments. Queue management handles busy Saturday mornings when appointments and walk-ins overlap.

              </p>

              <p>

                Mobile apps serve stylists who need schedule access, not just administrators. Reporting focuses on metrics that matter to salon profitability.

              </p>

              <p>

                The interface works on budget tablets and computers, not just premium hardware. Training takes hours, not weeks.

              </p>

              <p>

                Support understands salon operations and terminology. Pricing fits salon budgets, not spa chain budgets.

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
              <h3>Faster Implementation, Less Disruption</h3>
              <p>

                Boulevard's implementation drags over 4-6 weeks with extensive consultant involvement and staff training requirements. BookB gets you operational in 2-3 days with self-service tools and expert assistance only when needed.

              </p>

              <p>

                Migration specialists import your existing client database, service menu, and staff information automatically. Template libraries provide starting points for service descriptions, pricing, and policies.

              </p>

              <p>

                Setup wizards guide configuration without requiring consultant billable hours. Video tutorials cover common tasks in role-specific tracks.

              </p>

              <p>

                Live training sessions accommodate your schedule, not consultant availability. One-on-one coaching helps with unique business requirements.

              </p>

              <p>

                Documentation includes screenshots and step-by-step instructions. Knowledge bases offer searchable answers to common questions.

              </p>

              <p>

                Community forums connect you with other salon owners. Your existing website integrates booking widgets without developer involvement.

              </p>

              <p>

                Social media booking links work immediately after setup. Email signatures can include booking links from day one.

              </p>

              <p>

                Staff start using the system productively within hours, not weeks. Client communication templates work with minimal customization.

              </p>

              <p>

                Appointment reminders send automatically once configured. Marketing campaigns launch from proven templates.

              </p>

              <p>

                Reports generate immediately with sensible defaults. Payment processing activates through simple processor connection.

              </p>

              <p>

                Receipt templates print professional invoices without graphic design. End-of-day procedures happen through guided workflows.

              </p>

              <p>

                Multi-location setup replicates successful configurations. Franchisees deploy consistent systems without reinventing processes.

              </p>

              <p>

                Seasonal businesses activate quickly after off-season closures. New hires learn the system during their first shifts.

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
              <h3>Pricing That Scales With Your Business</h3>
              <p>

                Boulevard pricing starts high and increases as you grow, penalizing success. BookB pricing starts affordably and scales reasonably as your team expands.

              </p>

              <p>

                Starter plans serve single practitioners and small salons at prices that make sense. Professional tiers accommodate growing salons without requiring enterprise budgets.

              </p>

              <p>

                Business plans support established salons with larger teams and multiple locations. Enterprise options serve salon groups and franchises with custom requirements.

              </p>

              <p>

                Adding staff follows clear published pricing without negotiation. Seasonal staff additions don't trigger permanent price increases.

              </p>

              <p>

                Part-time staff count fractionally, not as full licenses. Location additions happen at transparent incremental costs.

              </p>

              <p>

                Feature access doesn't tier between plans unfairly. Support quality remains consistent regardless of plan level.

              </p>

              <p>

                Payment processing rates stay competitive across all volumes. Transaction fees don't include hidden markups.

              </p>

              <p>

                SMS costs charge actual carrier rates without profit margins. Email marketing sends unlimited messages at all plan levels.

              </p>

              <p>

                Storage capacity scales automatically without quota overages. API rate limits accommodate reasonable integration needs.

              </p>

              <p>

                Data exports work without additional charges. Historical reporting reaches back indefinitely.

              </p>

              <p>

                Backup and disaster recovery come standard. Security and compliance updates deploy universally.

              </p>

              <p>

                Mobile apps download free for all users. Training resources remain accessible permanently.

              </p>

              <p>

                Community support works for all customers. Priority support costs less than Boulevard basic support.

              </p>

              <p>

                Volume discounts apply automatically at thresholds. Loyalty discounts reward long-term customers.

              </p>

              <p>

                Referral credits reduce costs for customer advocacy.

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
              <h3>Support That Responds, Not Deflects</h3>
              <p>

                Boulevard support prioritizes large enterprise customers while small salons wait. BookB treats every customer as important with consistent response times and solution quality.

              </p>

              <p>

                Phone support answers quickly without automated mazes. Chat support connects to real people who understand salon operations.

              </p>

              <p>

                Email support responds within hours, not days. Screen sharing resolves complex issues faster than email exchanges.

              </p>

              <p>

                Video tutorials cover common scenarios in searchable libraries. Knowledge bases organize information logically by role and task.

              </p>

              <p>

                Community forums provide peer support and best practices. Feature request voting influences product roadmap.

              </p>

              <p>

                Beta programs offer early access to new capabilities. Account managers check in proactively with all business tier customers.

              </p>

              <p>

                Business reviews analyze usage and suggest optimizations. Implementation specialists remain available beyond initial setup.

              </p>

              <p>

                Training refreshers help onboard new hires. Seasonal businesses get reactivation assistance after closures.

              </p>

              <p>

                Ownership transitions receive special attention. Franchise expansion gets documented playbooks.

              </p>

              <p>

                Industry changes trigger proactive guidance. Software updates include release notes explaining changes.

              </p>

              <p>

                Deprecation notices provide migration paths. Security incidents receive immediate transparent communication.

              </p>

              <p>

                Downtime notifications include estimated resolution times. Performance issues get investigated proactively.

              </p>

              <p>

                Integration problems receive priority attention. Payment processing issues escalate automatically.

              </p>

              <p>

                Data integrity concerns trigger immediate investigation. Privacy inquiries get legal team review.

              </p>

              <p>

                Compliance questions receive documented answers. Custom development requests get feasibility assessment.

              </p>

              <p>

                Partner integrations receive technical liaison support. API changes include backwards compatibility support.

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
          <h2>Frequently Asked Questions About Switching</h2>
          <p className="section-subtitle">Everything you need to know about leaving Boulevard for BookB</p>

          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'left'}}>
            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>How does BookB handle complex commission structures?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                BookB accommodates complex commission scenarios including tiered performance bonuses, service category variations, retail versus service differences, and split commissions for assistant work. The system calculates automatically and provides transparency for stylists to verify earnings. Payroll reports export ready for processing.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Can I migrate mid-contract from Boulevard?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Many salons find annual savings with BookB exceed Boulevard early termination fees. We provide detailed cost analysis showing breakeven timing. Some salons run systems in parallel during contract wind-down. Others negotiate termination when presenting competitive alternatives. Our team provides documentation supporting your business case.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>What about my client data and history?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Complete client profiles transfer including contact information, service history, preferences, notes, photos, and color formulas. Historical appointment data remains searchable and reportable. Package balances and gift card values migrate precisely. Clients see their complete history in self-service portals. Stylists access past services during consultations.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Does BookB support multiple locations?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Yes, multi-location support works seamlessly with centralized client databases, location-specific scheduling, consolidated reporting, and distributed inventory management. Clients book at any location with history following them. Staff can work at multiple locations with appropriate scheduling. Reporting aggregates or separates by location as needed.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>How does online booking compare?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                BookB's online booking is fully customizable with your branding, service descriptions, and pricing. The booking widget embeds on your website or works standalone. Mobile optimization ensures easy booking from any device. Real-time availability prevents conflicts. Service add-ons and package purchases happen during booking. No competitor advertising appears in your booking flow.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>What payment processors does BookB support?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                BookB integrates with major processors including Square, Stripe, and traditional merchant accounts. You maintain existing relationships and negotiated rates. If you prefer integrated processing, BookB offers competitive transparent pricing. Card readers typically work with simple reconfiguration. No forced processor changes or rate markups.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Is there a mobile app for stylists?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Yes, stylists access schedules, earnings, client notes, and availability management through iOS and Android apps. Clients have dedicated apps for booking, appointment history, and profile management. Both apps work offline with automatic syncing when connection returns. Updates deploy automatically without manual app store downloads.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>How long until my team is fully productive?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Most teams reach full productivity within their first week. Receptionists book appointments confidently after brief orientation. Stylists check schedules and update notes immediately. Managers access reports and adjust settings within days. The interface follows salon workflows intuitively. Training happens through short focused sessions, not marathon workshops.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2>Transparent Pricing for Every Size Salon</h2>
          <p className="section-subtitle">Start small, scale affordably, no surprises</p>

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
