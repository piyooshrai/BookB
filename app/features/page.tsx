import Image from 'next/image'
import { images } from '@/lib/unsplash-images'

export default function FeaturesPage() {
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
          <h1>Complete Salon Management Features</h1>
          <p className="hero-subtitle">
            Everything you need to run a successful salon business. BookB provides enterprise-level features at independent pricing, helping you deliver exceptional client experiences while maximizing efficiency and profitability.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Trusted by 1,000+ salons · No credit card required</p>
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

      <section className="features">
        <div className="container">
          <h2>Core Features</h2>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Online Booking</h3>
              <p>
                Accept appointments 24/7 through your website, social media, and Google. Clients can book instantly without phone calls or waiting for business hours. Your booking widget integrates seamlessly with your existing website using a simple embed code that takes minutes to install. Customizable booking flow lets you collect exactly the information you need upfront. Real-time availability prevents double-bookings and scheduling conflicts automatically. Clients receive instant confirmation with appointment details and can reschedule or cancel through their client portal reducing administrative workload. Mobile-optimized booking works perfectly on all devices ensuring smooth experience whether clients book from phone, tablet, or desktop. Recurring appointments let regular clients book their usual time slot weeks or months in advance improving retention and reducing last-minute scheduling. Service add-ons and upgrades during booking increase average ticket size automatically. Waitlist management fills cancellations immediately by notifying clients when preferred times become available. Multi-location support lets clients book at any of your locations from single booking page. Deposit collection during booking reduces no-shows significantly while securing revenue in advance.
              </p>
            </div>
            <div className="feature-visual">
              <div style={{padding: '60px', background: '#f8fafc', borderRadius: '8px'}}>
                [Online Booking Visual]
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Client Management</h3>
              <p>
                Complete client profiles with service history, preferences, photos, and notes. Track every interaction from first contact through lifetime relationship. Store color formulas, product preferences, allergies, and special requests ensuring consistent service across all visits and staff members. Automated client tagging segments your database for targeted marketing campaigns. Birthday and anniversary tracking enables personalized outreach that strengthens relationships. Client portal gives customers access to appointment history, upcoming bookings, receipts, and loyalty points without staff involvement. Photo galleries document results over time helping you demonstrate value and build trust. Referral tracking identifies your best advocates and rewards them appropriately. Feedback collection after each visit provides insights for improvement while showing clients you care about their experience. Client retention reports highlight at-risk customers before they churn. Lifetime value calculations help you understand your most valuable relationships. Import tools migrate existing client data from spreadsheets or other systems quickly.
              </p>
            </div>
            <div className="feature-visual">
              <div style={{padding: '60px', background: '#f8fafc', borderRadius: '8px'}}>
                [Client Management Visual]
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Point of Sale</h3>
              <p>
                Accept all payment methods including cards, cash, mobile wallets, and buy-now-pay-later options. Integrated payment processing offers competitive rates without hidden fees or long-term contracts. Split payments between multiple methods when clients want to use gift cards plus credit cards. Tip management lets clients add gratuity on card payments with automatic distribution to correct team members. Receipt delivery via email or SMS eliminates paper waste while maintaining records. Product sales with barcode scanning make retail transactions quick and accurate. Service packages and prepaid bundles encourage commitment while improving cash flow. Gift card sales and redemption built-in without third-party integrations. Tax calculation handles complex scenarios including VAT, sales tax, and service charges automatically. End-of-day reconciliation matches expected revenue against actual deposits identifying discrepancies immediately. Multi-currency support for international clients or businesses operating across borders. Offline mode ensures you can process sales even during internet outages with automatic sync when connection restores.
              </p>
            </div>
            <div className="feature-visual">
              <div style={{padding: '60px', background: '#f8fafc', borderRadius: '8px'}}>
                [POS Visual]
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Staff Management</h3>
              <p>
                Individual staff calendars with custom working hours, breaks, and time off. Permission levels control who can access sensitive business information and features. Performance tracking shows revenue, client retention, and productivity metrics per team member. Commission calculation supports multiple compensation structures including percentage splits, tiered rates, and service-specific commissions. Payroll export integrates with popular accounting software eliminating manual data entry. Staff mobile app lets team members manage their schedule, view upcoming appointments, access client information, and process sales from their phone. Team messaging keeps everyone coordinated without separate communication tools. Training modules help onboard new staff quickly with video tutorials and documentation. Continuing education tracking ensures your team maintains required certifications and licenses. Client assignment rules distribute new clients fairly or based on expertise and availability. Booking preferences let staff block specific services, set buffer times, or limit daily appointments.
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
              <h3>Marketing Automation</h3>
              <p>
                Email and SMS campaigns reach clients with targeted messages based on behavior and preferences. Automated reminders reduce no-shows by up to 40% with customizable timing and messaging. Win-back campaigns re-engage clients who haven't booked recently with special offers. Birthday and anniversary messages with exclusive discounts strengthen relationships and drive bookings. Post-appointment follow-ups request feedback and reviews while experience is fresh. Promotional campaigns announce new services, seasonal specials, or last-minute availability. List segmentation targets specific client groups with relevant offers improving response rates. A/B testing compares message variations to optimize campaign performance. Referral program automation rewards clients who bring friends with credits or discounts. Review generation encourages satisfied clients to share experiences on Google, Facebook, and Yelp. Social media integration shares promotions and content across platforms from one dashboard. Analytics track campaign performance including open rates, click rates, bookings generated, and ROI.
              </p>
            </div>
            <div className="feature-visual">
              <div style={{padding: '60px', background: '#f8fafc', borderRadius: '8px'}}>
                [Marketing Visual]
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Reporting & Analytics</h3>
              <p>
                Real-time dashboard provides instant overview of business performance including today's revenue, bookings, and key metrics. Revenue reports break down sales by service, product, staff member, and location showing exactly where money comes from. Client retention analysis identifies trends and at-risk customers before they churn. Staff performance comparisons highlight top performers and training opportunities. Appointment analytics show booking patterns, peak times, and capacity utilization helping optimize scheduling. Inventory reports track product usage, stock levels, and reorder points preventing shortages. Marketing ROI demonstrates which campaigns drive most bookings and revenue. Custom reports let you analyze any combination of data points relevant to your business. Scheduled reports deliver insights via email automatically without logging in. Export capabilities allow further analysis in Excel or other tools. Year-over-year comparisons track growth and seasonal patterns. Forecasting helps plan staffing, inventory, and marketing based on historical trends.
              </p>
            </div>
            <div className="feature-visual">
              <div style={{padding: '60px', background: '#f8fafc', borderRadius: '8px'}}>
                [Analytics Visual]
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="comparison">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p className="section-subtitle">Join 1,000+ salons using BookB</p>
          <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <a href="#trial" className="btn btn-primary" style={{fontSize: '18px', padding: '1rem 2rem'}}>
              Start Your Free Trial
            </a>
            <p style={{marginTop: '1rem', color: 'var(--text-light)'}}>
              No credit card required · 14-day free trial · Cancel anytime
            </p>
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
