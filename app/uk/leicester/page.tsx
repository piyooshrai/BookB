import Image from 'next/image'
import { images } from '@/lib/unsplash-images'

export default function LeicesterSalonSoftware() {
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
          <h1>Salon Software for Leicester Hair & Beauty Businesses</h1>
          <p className="hero-subtitle">
            BookB helps Leicester salons manage appointments, clients, staff, and payments with powerful cloud-based software designed specifically for UK beauty businesses. From City Centre to Clarendon Park, Oadby to Stoneygate, Leicester salons trust BookB for reliable, affordable salon management that works perfectly with UK payment systems, VAT requirements, and local business practices serving the East Midlands' diverse beauty community.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Trusted by 140+ Leicester salons and growing</p>
        </div>
          <div className="hero-image">
            <Image
              src={images.cities.generic.url}
              alt={images.cities.generic.alt}
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
          <h2>Perfect for Leicester's Multicultural Market</h2>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Built for UK Salons and Beauty Businesses</h3>
              <p>
                Leicester's beauty industry serves one of Britain's most diverse cities requiring software that understands local business practices and regulatory requirements while supporting multicultural clientele. BookB provides features specifically designed for UK salons including automatic VAT calculation and reporting that aligns with HMRC requirements making tax compliance straightforward for Leicester business owners managing successful salons. Price display follows UK conventions with VAT-inclusive pricing visible to clients while tracking VAT separately for business accounting and quarterly submissions to tax authorities. Payment processing integrates seamlessly with UK banks and card processors including contactless payments ubiquitous throughout Leicester from Highcross Shopping Centre to local neighborhood salons. Online booking works perfectly with UK phone number formats, postal codes including Leicester's LE postcodes, and address conventions familiar to local clients across Belgrave, Evington, and city centre. Appointment scheduling accounts for UK bank holidays automatically preventing booking conflicts during Easter, Christmas, and other public holidays when Leicester salons may close. Multi-language support helps Leicester salons serve diverse communities with booking and communication options beyond English reflecting the city's multicultural population. Staff scheduling respects UK employment law including Working Time Regulations, break requirements, and holiday entitlements mandatory for Leicester employees whether experienced stylists or trainee beauty therapists. Payroll reporting generates data formatted for UK accounting software and payroll providers serving Leicester businesses from independent operators to growing salon groups. GDPR compliance features help Leicester salons meet data protection obligations for storing and processing client personal information in accordance with UK regulations. Marketing communications respect UK regulations around consent, opt-outs, and commercial electronic messages ensuring your promotional campaigns stay compliant. Currency displays in pounds sterling with proper formatting and no confusing currency conversions. Time displays in 24-hour or 12-hour formats matching UK preferences. Date formats follow UK conventions preventing American-style date confusion.
              </p>
            </div>
            <div className="feature-visual">
              <div style={{padding: '60px', background: '#f8fafc', borderRadius: '8px'}}>
                [UK Features Visual]
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Appointment Management for Leicester Salons</h3>
              <p>
                Leicester salons manage hundreds of appointments weekly requiring efficient scheduling that prevents conflicts, maximizes revenue, and provides excellent client experiences. BookB's appointment management features help Leicester salons optimize scheduling and improve operations. Calendar views display daily, weekly, and monthly schedules showing all appointments at glance helping reception staff and managers understand capacity and workload. Color coding distinguishes appointment types, stylists, and service categories making visual scanning quick and preventing errors during busy Leicester shopping days. Drag and drop rescheduling makes adjusting appointments easy when clients need different times or stylists have unexpected availability changes. Recurring appointments automate rebooking for clients visiting regularly every few weeks creating reliable revenue streams and ensuring clients maintain their beauty routines. Group appointments coordinate multiple clients receiving services simultaneously for wedding parties, special events, or friends booking together. Appointment notes record important information about client preferences, previous service details, and special requirements ensuring consistent quality across visits and stylists. Service duration estimates prevent overbooking by calculating realistic time requirements based on historical data and stylist experience levels. Buffer time adds padding between appointments for cleanup, preparation, or running over preventing cascading delays affecting subsequent Leicester clients. Waitlist management captures interested clients when preferred times unavailable enabling contact when cancellations create unexpected openings in your Leicester salon schedule. Double booking prevention alerts staff when attempting to schedule conflicting appointments protecting against costly errors and disappointed clients. Mobile access lets Leicester salon staff view and manage appointments from smartphones whether on breaks, commuting, or working remotely. Calendar synchronization integrates with personal calendars helping stylists coordinate salon work with personal commitments and availability.
              </p>
            </div>
            <div className="feature-visual">
              <div style={{padding: '60px', background: '#f8fafc', borderRadius: '8px'}}>
                [Appointment Management Visual]
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Online Booking That Leicester Clients Love</h3>
              <p>
                Leicester clients expect sophisticated online booking capabilities matching the digital experiences they enjoy from other service providers throughout the East Midlands. BookB provides mobile-optimized online booking that works perfectly on Leicester buses, in Highcross cafes, and anywhere clients access their smartphones throughout the day. Real-time availability shows exactly which appointment slots remain open preventing the frustration of booking requests that get declined hours later when clients have already made alternative plans. Stylist profiles include photos, specialties, and reviews helping Leicester clients choose the right professional for their specific needs whether working with diverse hair types or specialist beauty treatments. Service descriptions explain treatments clearly with duration estimates and pricing so Leicester clients understand exactly what they're booking from quick services to comprehensive packages. Before and after galleries showcase your salon's work building confidence in new clients considering your Leicester salon for the first time after social media discovery or friend recommendation. Location information includes directions from Leicester station, local parking options, and bus routes helping clients plan their journey from suburbs to city centre. Contactless deposit payments secure appointments reducing no-shows common in busy Leicester market where clients juggle work schedules and family commitments. Automatic appointment reminders via SMS and email reduce no-shows without requiring staff time making confirmation calls. Rescheduling and cancellation through client self-service reduces phone interruptions during busy Leicester Saturdays. Package purchasing during online booking encourages prepayment and commitment from Leicester clients. Gift card purchases online generate revenue and introduce new clients. Membership programs with recurring billing create predictable revenue.
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
              <h3>Reporting and Analytics for Leicester Business Owners</h3>
              <p>
                Running a profitable salon in Leicester requires understanding your numbers with competitive rent, staff wages, and pricing pressures from numerous beauty businesses throughout the city. BookB provides comprehensive reporting helping Leicester salon owners make data-driven decisions about their businesses daily, weekly, and monthly. Revenue reporting breaks down income by service category, retail products, individual stylists, and time periods for deep understanding of business performance. Staff productivity metrics compare performance across your Leicester team identifying top performers and those needing coaching. Client retention analysis shows which clients visit regularly versus one-time visitors helping target marketing to build loyal client base. Service profitability calculations deduct product costs and staff time showing true margins helping optimize your service menu. Peak hour analysis identifies busiest times helping optimize staff scheduling to match demand. Marketing campaign tracking measures effectiveness of different promotional efforts showing return on investment. Inventory turnover reports identify slow-moving products occupying valuable shelf space. No-show and cancellation tracking quantifies revenue lost to appointment gaps. Year-over-year comparisons show business growth trends and seasonal patterns. VAT reporting generates data formatted for HMRC submission. Payroll reports provide data for UK payroll processing. Custom report building lets Leicester owners analyze specific questions.
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
          <h2>Why Leicester Salons Choose BookB</h2>
          <p className="section-subtitle">Join hundreds of Leicester beauty businesses already using BookB</p>

          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'left'}}>
            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Works with UK payment processors</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                BookB integrates with popular UK payment providers. Process chip and PIN, contactless, and mobile wallet payments common throughout Leicester. Accept pounds sterling without currency conversion fees.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Supports diverse Leicester community</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Multi-language support and flexible service options help Leicester salons serve diverse clientele. Accommodate different hair types, cultural preferences, and beauty traditions reflecting Leicester's multicultural population.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Local support during UK business hours</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Support team available during Leicester business hours. No waiting overnight for responses. Representatives understand UK salon operations.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Transparent pricing in pounds sterling</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Pricing displayed clearly in GBP without currency conversions. Payment processing in pounds through UK bank accounts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2>Affordable Pricing for Leicester Salons</h2>
          <p className="section-subtitle">Professional software at prices that work for Leicester businesses</p>

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="plan-name">Starter</div>
              <div className="plan-price">£39<span className="plan-period">/mo</span></div>
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
              <div className="plan-price">£79<span className="plan-period">/mo</span></div>
              <p className="plan-description">For growing Leicester salons with multiple stylists</p>
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
              <div className="plan-price">£159<span className="plan-period">/mo</span></div>
              <p className="plan-description">For established Leicester salons with larger teams</p>
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
              <p className="plan-description">For Leicester salon chains and franchise operations</p>
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
