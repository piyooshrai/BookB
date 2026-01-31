import Image from 'next/image'
import { images } from '@/lib/unsplash-images'

export default function TimelyAlternative() {
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
          <h1>The Timely Alternative Without Commission Fees</h1>
          <p className="hero-subtitle">
            BookB provides comprehensive salon management software with zero commission on online bookings, complete client data ownership, and transparent pricing that doesn't penalize your growth. Get professional features designed specifically for salons without surrendering a percentage of every appointment to software vendors.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Trusted by 10,000+ salons who keep 100% of their revenue</p>
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
          <h2>BookB vs Timely: Pricing That Rewards Growth</h2>
          <p className="section-subtitle">Compare subscription vs commission models honestly</p>

          <div className="comparison-table">
            <div className="comparison-row comparison-header">
              <div className="feature-name">Pricing Factor</div>
              <div className="competitor-value">Timely</div>
              <div className="bookb-value">BookB</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Base Monthly Fee</div>
              <div className="competitor-value">$0-29</div>
              <div className="bookb-value">$99</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Commission Per Booking</div>
              <div className="competitor-value">Up to 5%</div>
              <div className="bookb-value">$0</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Payment Processing Markup</div>
              <div className="competitor-value">Added fees</div>
              <div className="bookb-value">Transparent</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Cost as You Grow</div>
              <div className="competitor-value">Increases</div>
              <div className="bookb-value">Fixed tiers</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Client Data Ownership</div>
              <div className="competitor-value">Shared</div>
              <div className="bookb-value">100% Yours</div>
            </div>
            <div className="comparison-row savings-row">
              <div className="feature-name"><strong>Annual Cost (200 bookings/mo)</strong></div>
              <div className="competitor-value">$2,400+</div>
              <div className="bookb-value">$1,188</div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Successful Salons Choose BookB Over Timely</h2>

          <div className="feature-item">
            <div className="feature-content">
              <h3>No Commission Ever Means More Profit</h3>
              <p>
                Timely's commission-based pricing model takes a percentage of every online booking creating a hidden tax on your growth and success. BookB operates on transparent subscription pricing where your monthly cost stays predictable regardless of booking volume or revenue growth. Book 100 appointments or 1,000 appointments monthly and pay the same flat subscription fee without percentage calculations. Successful busy months don't trigger higher software costs penalizing efficient operations and popular stylists. Revenue growth stays in your business rather than flowing to software vendors taking commission slices. Online booking adoption by clients reduces phone interruptions without increasing software expenses through commission charges. Marketing campaigns that drive appointment volume improve profitability without corresponding software cost increases eating margins. Seasonal peak periods generate maximum profit without commission percentages reducing take-home during your busiest most profitable months. New client acquisition through online booking builds your business without perpetual commission obligations on those relationships. Loyal clients booking repeatedly don't generate ongoing commission charges on transactions that should be pure profit. Price increases to match market rates and rising costs flow to your bottom line without sharing with software vendors. Package sales and prepaid services generate cash flow without commission calculations reducing the benefit of prepayment programs. Multi-location expansion scales at predictable incremental costs rather than percentage-based pricing that penalizes growing salon groups. Franchise operations maintain consistent unit economics without commission variability affecting profitability projections and business planning. High-ticket services and premium pricing strategies reward your positioning without sharing premium revenue with software platforms. Successful stylists with loyal followings keep earnings without commission on appointments booked through their personal online booking links.
              </p>
            </div>
            <div className="feature-visual">
              <Image
                src={images.hairSalon.url}
                alt="Professional salon management software features"
                width={500}
                height={375}
                loading="lazy"
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Complete Client Data Ownership</h3>
              <p>
                Timely's business model depends on controlling client relationships creating conflicts of interest between your business goals and their platform objectives. BookB believes your clients are your business assets that you should own and control completely without platform interference. Client contact information including email addresses and phone numbers belongs exclusively to you without sharing with marketplace systems. Marketing campaigns reach your clients directly without platform algorithms filtering or competitors advertising in your communication channels. Loyalty programs reward your specific salon and stylists rather than teaching clients to shop around through marketplace browsing. Booking history and service preferences inform your personalized recommendations not platform-driven suggestions promoting highest-commission services. Treatment plans track progress toward beauty goals you define together building long-term relationships with your salon specifically. Color formulas remain proprietary intellectual property of your stylists not shared across platform provider databases. Product recommendations align with your retail inventory and philosophies not affiliate relationships benefiting the platform financially. Pricing strategies match your market positioning without platform pressure toward standardized pricing that benefits marketplace comparison shopping. Client reviews and ratings appear on your owned properties not marketplace pages that promote competitors alongside your salon. Gift card programs build your brand equity and customer commitment not platform dependency that makes switching software costly. Membership programs create recurring revenue streams you control completely including billing, benefits, and communication with members. Referral incentives reward clients for recommending your specific salon not generic platform referrals that may go to competitors. Birthday promotions and client celebrations strengthen individual relationships without platform interference or data mining for other vendors.
              </p>
            </div>
            <div className="feature-visual">
              <Image
                src={images.hairSalon.url}
                alt="Professional salon management software features"
                width={500}
                height={375}
                loading="lazy"
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Salon-Specific Features Without Compromises</h3>
              <p>
                Timely serves diverse appointment-based businesses from yoga studios to medical clinics diluting focus on salon-specific functionality needs. BookB concentrates exclusively on beauty business operations with purpose-built features matching how salons actually work daily. Advanced appointment scheduling handles overlapping services like cuts with color where different service phases require varying stylist attention levels. Service duration estimates adjust automatically based on client hair characteristics documented in profiles including length, density, and texture factors. Color formula documentation saves precise mixing ratios, processing times, developer strengths, and application techniques with reference photos. Before and after photo galleries organize by client creating visual service history for consultations and portfolio building purposes. Treatment plan tracking monitors progress toward long-term beauty goals like growing out color or repairing damage from previous services elsewhere. Product usage per service automatically tracks cost of goods sold for accurate profitability analysis by service category and individual stylist. Retail product recommendations appear contextually during checkout based on services just performed and documented client hair characteristics. Walk-in queue management integrates seamlessly with scheduled appointments showing realistic wait times based on current workload and service complexity. Staff skill matching ensures proper service assignment based on training certifications, experience levels, and demonstrated competency with specific techniques. Commission structures accommodate complex salon scenarios including service splits between assistants and lead stylists, different retail versus service percentages, and tiered performance bonuses. Package and membership management encourages client prepayment and loyalty with automatic remaining service tracking and expiration date management. Gift card programs build brand equity and generate prepaid revenue with balance tracking and redemption management preventing fraud or errors.
              </p>
            </div>
            <div className="feature-visual">
              <Image
                src={images.hairSalon.url}
                alt="Professional salon management software features"
                width={500}
                height={375}
                loading="lazy"
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Support That Understands Your Business</h3>
              <p>
                Timely supports diverse appointment-based businesses reducing salon-specific expertise and contextual understanding of beauty industry operations. BookB focuses exclusively on salons, barbershops, and beauty businesses with specialized knowledge and relevant experience to provide meaningful assistance. Phone support connects to representatives who understand salon terminology, common workflows, and industry-standard practices without requiring education during support calls. Chat support resolves questions quickly from people familiar with appointment booking patterns, walk-in traffic management, and commission calculation scenarios typical in salons. Email responses come from support staff who have worked extensively with beauty businesses understanding context behind questions and appropriate solutions. Screen sharing troubleshooting sessions proceed efficiently with support understanding typical salon software usage patterns and common configuration scenarios. Training materials cover salon-specific scenarios like color formula documentation, treatment plan tracking, and retail product recommendation workflows throughout examples. Knowledge bases organize information by salon roles including receptionist tasks, stylist functions, and manager responsibilities for targeted relevant assistance. Video tutorials demonstrate features using beauty business examples with realistic service menus, client scenarios, and operational workflows throughout demonstrations. Implementation guides reference typical salon service structures, pricing strategies, and staffing patterns making setup faster and more relevant to actual operations. Migration specialists understand common data structures from competitor salon software platforms enabling smoother transitions with less data loss or corruption. Integration support connects salon-specific third-party tools like color formula apps, continuing education tracking, and beauty industry suppliers seamlessly. Community forums facilitate peer discussions among salon owners facing similar operational challenges, marketing questions, and growth planning decisions. Feature requests get evaluated by product managers with beauty industry experience who understand which capabilities actually matter versus nice-to-have features.
              </p>
            </div>
            <div className="feature-visual">
              <Image
                src={images.hairSalon.url}
                alt="Professional salon management software features"
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
          <h2>Questions from Timely Users Considering BookB</h2>
          <p className="section-subtitle">Everything you need to know about escaping commission-based pricing</p>

          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'left'}}>
            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>How do I calculate if BookB saves money versus Timely?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Calculate Timely's total monthly cost including base subscription, commission on all online bookings, and payment processing markups. Compare to BookB's flat monthly fee at your staff count tier. For salons with 100+ monthly appointments, BookB typically costs significantly less while providing superior features, complete data ownership, and zero commission regardless of booking volume growth over time.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Can you migrate our Timely data completely?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Yes, BookB's migration specialists export your complete Timely database including client profiles, appointment history, service menus, staff information, and financial records. Color formulas, client notes, and treatment plans transfer where Timely stored them properly. Package balances and gift card values migrate precisely. The process typically completes within 48 hours with minimal salon involvement beyond providing data access.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>What about clients who book through Timely currently?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                BookB provides communication templates announcing your new booking system to existing clients via email and SMS. Your website booking widget updates seamlessly. Social media posts direct clients to new booking pages. The transition is smooth from client perspective with many salons reporting improved booking rates with BookB's customizable mobile-optimized interface and faster booking flow without commission-driven upsells.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>How does online booking compare feature-wise?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                BookB's online booking offers full customization with your branding, service descriptions, stylist bios with photos, and before/after galleries without commission-driven design constraints. Clients request specific stylists or take next available. Real-time availability prevents conflicts. Service add-ons and package purchasing happen during booking. Mobile optimization ensures easy booking from any device. No commission fees mean you can promote online booking without financial penalty.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Can I keep my current payment processor?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Yes, BookB integrates with major payment processors including Square, Stripe, and traditional merchant accounts. You maintain existing processor relationships and negotiated rates without forced changes. If you prefer integrated processing, BookB offers competitive transparent rates with no hidden markups or transaction fees beyond actual processing costs passed through at cost.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>What happens to our online reviews and ratings?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Your Timely reviews remain on that platform. BookB helps you build independent review presence on Google, Facebook, and beauty-specific platforms that you control. Automated review requests send after appointments. Review monitoring alerts you to new feedback across platforms. You build owned review assets that can't be controlled, hidden, or monetized by software platforms.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>How long until staff are fully productive with BookB?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Staff familiar with Timely typically reach full productivity with BookB within 2-3 days since basic concepts like booking appointments and processing payments work similarly. The salon-specific features like color formula documentation and commission tracking enhance capabilities without complicating basic operations. Video tutorials and live training cover your specific workflows efficiently.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Can I test BookB before fully committing?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Yes, BookB offers a comprehensive 30-day free trial with complete feature access. Import your Timely data to test with real information. Run BookB alongside Timely during evaluation if preferred. Our team provides hands-on training and implementation support throughout trial. Cancel anytime if it doesn't meet expectations. No credit card required to start your trial period.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2>Flat-Fee Pricing That Rewards Your Success</h2>
          <p className="section-subtitle">No commission, no hidden fees, no penalties for growth</p>

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
