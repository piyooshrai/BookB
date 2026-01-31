import Image from 'next/image'
import { images } from '@/lib/unsplash-images'

export default function SquareAppointmentsAlternative() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="logo">BookB</div>
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
          <h1>The Square Appointments Alternative Built for Salons</h1>
          <p className="hero-subtitle">
            BookB provides salon-specific features that Square Appointments lacks, with deeper customization, better staff management, and tools designed specifically for beauty businesses. Get appointment scheduling plus inventory tracking, commission calculation, color formula documentation, and marketing automation that actually understands salon operations.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Trusted by 10,000+ salons who outgrew Square's basic features</p>
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
          <h2>BookB vs Square Appointments: Feature Comparison</h2>
          <p className="section-subtitle">See what salon-specific software provides beyond basic booking</p>

          <div className="comparison-table">
            <div className="comparison-row comparison-header">
              <div className="feature-name">Capability</div>
              <div className="competitor-value">Square</div>
              <div className="bookb-value">BookB</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Industry Focus</div>
              <div className="competitor-value">Generic</div>
              <div className="bookb-value">Salon-Specific</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Color Formula Tracking</div>
              <div className="competitor-value">Manual notes</div>
              <div className="bookb-value">Built-in</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Commission Structures</div>
              <div className="competitor-value">Basic</div>
              <div className="bookb-value">Complex splits</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Walk-In Queue</div>
              <div className="competitor-value">None</div>
              <div className="bookb-value">Integrated</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Inventory Cost Tracking</div>
              <div className="competitor-value">Limited</div>
              <div className="bookb-value">Per-service</div>
            </div>
            <div className="comparison-row savings-row">
              <div className="feature-name"><strong>Salon-Specific Features</strong></div>
              <div className="competitor-value">Few</div>
              <div className="bookb-value">Comprehensive</div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Salons Need More Than Square Appointments</h2>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Built for Beauty, Not Generic Services</h3>
              <p>
                Square Appointments serves dog groomers, tutors, consultants, and hundreds of other service businesses with one-size-fits-all features. BookB focuses exclusively on salons, barbershops, and beauty businesses with purpose-built functionality. Appointment scheduling understands overlapping services like cuts with color where different phases require different attention levels. Service duration estimates adjust automatically based on client hair type, length, and density documented in their profile. Color formula documentation saves mixing ratios, processing times, developer strengths, and application techniques with photos showing results. Before and after galleries organize by client for portfolio building and consultation reference during future appointments. Treatment plan tracking monitors progress toward long-term goals like growing out color or repairing damage from previous services. Product usage per service tracks cost of goods sold for accurate profitability analysis by service type and stylist performance. Retail product recommendations appear automatically during checkout based on services performed and client hair characteristics. Walk-in queue management integrates with scheduled appointments showing realistic wait times based on service complexity and current stylist workload. Staff skill matching ensures clients get assigned to stylists qualified for requested services based on training certifications and experience levels. Commission structures accommodate complex salon scenarios including service splits between assistants and stylists, retail versus service percentages, and performance bonuses. Package and membership programs encourage client prepayment and loyalty with automatic remaining service tracking and expiration management. Gift card programs build brand equity and prepaid revenue with balance tracking preventing fraud. Equipment and station management prevents double-booking of specialized tools like hooded dryers or specialized color processing equipment. Supply ordering integrates with beauty industry distributors using product codes and case quantities common to professional beauty supplies.
              </p>
            </div>
            <div className="feature-visual">
              <div style={{padding: '60px', background: '#f8fafc', borderRadius: '8px'}}>
                [Salon-Specific Features Visual]
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Advanced Staff Management for Salon Teams</h3>
              <p>
                Square Appointments handles basic staff scheduling but lacks salon-specific workforce features. BookB provides comprehensive team management designed for beauty business operations. Commission calculation handles tiered structures where percentages increase with performance targets, different rates for service categories versus retail sales, and split commissions for assistants helping with shampooing or color application. Payroll reporting generates detailed breakdowns of service revenue, retail commissions, tips received, and hours worked in formats that accounting software and payroll providers can import directly. Staff performance tracking compares productivity metrics including clients served, average ticket values, retail attachment rates, and rebooking percentages to identify top performers and coaching opportunities. Continuing education tracking maintains records of certifications, technique training, and product knowledge courses ensuring compliance with insurance requirements and manufacturer warranties. Staff scheduling prevents overtime violations by alerting managers when approaching threshold hours and suggests optimal shift patterns. Break management ensures compliance with labor regulations by enforcing minimum rest periods and meal breaks based on shift length. Time clock integration tracks actual hours worked compared to scheduled hours for accurate wage calculation and productivity analysis. Shift swap requests flow through manager approval workflows preventing unauthorized schedule changes while giving staff flexibility. Availability management lets stylists block personal time, set preferred working hours, and indicate willingness for on-call shifts during busy periods. Skill certification tracking maintains records of advanced techniques each stylist can perform ensuring proper service assignment and pricing authority. Personal service menus let stylists customize which services they offer and their individual pricing within salon parameters.
              </p>
            </div>
            <div className="feature-visual">
              <div style={{padding: '60px', background: '#f8fafc', borderRadius: '8px'}}>
                [Staff Management Visual]
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Inventory Management for Salon Products</h3>
              <p>
                Square's inventory system was designed for retail stores, not service businesses that consume products during service delivery. BookB tracks both retail sales and service consumption accurately. Product usage per service automatically deducts color, developer, styling products, and other consumables based on service formulas and typical usage rates. Cost of goods sold calculation provides accurate profitability analysis by deducting product costs from service revenue showing true margins by service category and individual stylist. Stock level alerts notify managers when essential products approach reorder points preventing stockouts of critical supplies during busy periods. Supplier management organizes vendor contacts, ordering history, pricing tiers, and delivery schedules for streamlined replenishment. Purchase order generation creates properly formatted orders with product codes, case quantities, and pricing that professional beauty suppliers expect. Receiving workflows verify delivered quantities match orders and update stock levels automatically preventing inventory discrepancies. Waste tracking records expired products, damaged inventory, and excess mixing that helps identify training opportunities and portion control issues. Multi-location inventory management tracks stock at each location while allowing emergency transfers between sites when one runs short. Product expiration monitoring alerts staff to products approaching expiration dates preventing use of oxidized color or expired treatments. Barcode scanning speeds retail checkout and receiving processes using standard UPC codes printed on professional beauty products. Retail pricing rules automate markups from wholesale costs with category-specific margins and promotional pricing periods. Manufacturer rebate tracking captures eligible purchases for volume rebates and promotional credits offered by beauty brands. Backbar versus retail inventory separation tracks usage of professional versus retail versions of the same product.
              </p>
            </div>
            <div className="feature-visual">
              <div style={{padding: '60px', background: '#f8fafc', borderRadius: '8px'}}>
                [Inventory Tracking Visual]
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Marketing Automation for Client Retention</h3>
              <p>
                Square provides basic appointment reminders but lacks sophisticated marketing tools salons need for client retention and revenue growth. BookB includes comprehensive marketing automation designed specifically for beauty business customer lifecycles. Appointment reminder sequences send optimized messages via SMS and email at timing intervals that minimize no-shows without annoying clients with excessive communication. Birthday campaigns celebrate clients with personalized offers based on their service preferences and historical spending patterns encouraging them to book celebratory services. Re-engagement workflows automatically target clients who haven't booked within their typical interval with compelling incentives to return before they become inactive permanently. New service launch announcements reach interested clients based on their service history and stated preferences ensuring relevant targeting and high conversion rates. Last-minute availability notifications fill same-day cancellations by reaching clients who previously indicated interest in short-notice appointments at discounted rates. Package promotion campaigns encourage clients to prepay for series of services with bundled pricing that improves cash flow and commitment. Membership enrollment campaigns create recurring revenue streams by highlighting convenience and savings of monthly membership programs. Referral incentive programs reward existing clients for bringing friends with tracked credits applied automatically when referrals complete first appointments. Review request automation sends timing-optimized requests after successful appointments generating authentic testimonials for Google, Facebook, and beauty-specific platforms. Seasonal promotion campaigns align with holidays, weather changes, and cultural events when demand for specific services naturally increases. Client win-back campaigns target clients who have become inactive with aggressive offers acknowledging their absence and incentivizing return. Retail product promotions reach clients who use specific products regularly with manufacturer specials and loyalty discounts.
              </p>
            </div>
            <div className="feature-visual">
              <div style={{padding: '60px', background: '#f8fafc', borderRadius: '8px'}}>
                [Marketing Automation Visual]
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="comparison">
        <div className="container">
          <h2>Questions from Square Users Considering BookB</h2>
          <p className="section-subtitle">Everything you need to know about upgrading to salon-specific software</p>

          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'left'}}>
            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Can I keep using Square for payment processing?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Yes, BookB integrates with Square payment processing if you prefer to maintain that relationship. You can also switch to other processors including Stripe or traditional merchant accounts. BookB offers integrated processing with competitive transparent rates if you prefer consolidated billing. Your Square card readers may work with BookB or can be easily replaced.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>How difficult is migrating from Square Appointments?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Migration typically completes in 24-48 hours. BookB's team exports your client database, appointment history, and service menu from Square. Staff schedules and historical data transfer completely. Since Square Appointments lacks some salon-specific data like color formulas, you'll build that information naturally as you use BookB going forward. Training takes a few hours since the basic concepts are familiar.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Is BookB worth the additional cost over Square's free tier?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Salons report that BookB's salon-specific features improve efficiency enough to serve more clients per day, reduce no-shows through better reminder automation, increase retail sales through intelligent product recommendations, and improve staff retention through better commission tracking. Most salons find these improvements generate far more revenue than the software cost, making BookB a profit center rather than an expense.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>What happens to my historical appointment data?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                All historical appointments transfer to BookB including dates, services performed, staff members, and pricing. This history remains searchable and reportable. Clients see their complete service history in self-service portals. Year-over-year comparisons include historical Square data. Financial reports incorporate complete revenue history for accurate trending and forecasting.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Does BookB offer hardware like Square does?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                BookB works with industry-standard hardware rather than proprietary devices. This gives you flexibility to use existing equipment, choose cost-effective options, and avoid vendor lock-in. Card readers, receipt printers, cash drawers, and barcode scanners from various manufacturers work with BookB. You can even use tablets and computers you already own.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>How does online booking compare?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                BookB's online booking offers more customization including service descriptions, stylist bios with photos, before and after galleries, and package purchasing during booking. The booking widget matches your website branding. Clients can request specific stylists or take next available. Real-time availability prevents conflicts. Mobile optimization ensures easy booking from phones and tablets.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Will my staff need extensive retraining?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Staff familiar with Square Appointments transition to BookB easily since basic concepts like booking appointments, checking out clients, and viewing schedules work similarly. The additional salon-specific features like color formula documentation and commission tracking enhance their capabilities without complicating basic operations. Most staff reach full productivity within their first week.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Can I try BookB before fully committing?</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Yes, BookB offers a 30-day free trial with complete feature access. Import your Square data to test with real information. Run BookB alongside Square during evaluation if you prefer. Our team provides hands-on training and implementation support during trial. Cancel anytime if it's not the right fit. No credit card required to start your trial.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2>Professional Software at Fair Prices</h2>
          <p className="section-subtitle">Invest in salon-specific features that drive revenue</p>

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
        </div>
      </footer>
    </>
  );
}
