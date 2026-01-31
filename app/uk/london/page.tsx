import Image from 'next/image'
import { images } from '@/lib/unsplash-images'

export default function LondonSalonSoftware() {
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

      <div className="hero">
        <div className="hero-content">
          <h1>Salon Software for London Hair & Beauty Businesses</h1>
          <p className="hero-subtitle">
            BookB helps London salons manage appointments, clients, staff, and payments with powerful cloud-based software designed specifically for UK beauty businesses. From Mayfair to Camden, Shoreditch to Kensington, London salons trust BookB for reliable, affordable salon management that works perfectly with UK payment systems, VAT requirements, and local business practices.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Trusted by 500+ London salons and growing</p>
        </div>
      </div>

      <section className="features">
        <div className="container">
          <h2>Perfect for London's Diverse Salon Market</h2>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Built for UK Salons and Beauty Businesses</h3>
              <p>
                London's beauty industry is one of the most competitive and sophisticated in the world, requiring software that understands local business practices and regulatory requirements. BookB provides features specifically designed for UK salons including automatic VAT calculation and reporting that aligns with HMRC requirements. Price display follows UK conventions with VAT-inclusive pricing visible to clients while tracking VAT separately for business accounting. Payment processing integrates seamlessly with UK banks and card processors including contactless payments ubiquitous throughout London. Online booking works perfectly with UK phone number formats, postal codes, and address conventions familiar to London clients. Appointment scheduling accounts for UK bank holidays automatically preventing booking conflicts during Easter, Christmas, and other public holidays when salons may close. Staff scheduling respects UK employment law including Working Time Regulations, break requirements, and holiday entitlements mandatory for London employees. Payroll reporting generates data formatted for UK accounting software and payroll providers serving London businesses. GDPR compliance features help London salons meet data protection obligations for storing and processing client personal information. Marketing communications respect UK regulations around consent, opt-outs, and commercial electronic messages. Currency displays in pounds sterling with proper formatting and no confusing currency conversions. Time displays in 24-hour or 12-hour formats matching UK preferences. Date formats follow UK conventions preventing American-style date confusion.
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
              <h3>Manage Multiple London Locations Effortlessly</h3>
              <p>
                Many successful London salon businesses operate multiple locations across different neighborhoods and boroughs requiring centralized management with location-specific flexibility. BookB's multi-location features let you manage salons in Knightsbridge, Notting Hill, Canary Wharf, and other London areas from single admin dashboard. Client databases share across all your London locations letting regular clients book at whichever salon is most convenient for their schedule or location. Staff can work shifts at different locations with scheduling coordinated centrally preventing double-booking and ensuring adequate coverage. Inventory management tracks stock levels separately by location while allowing emergency transfers when one salon runs short of essential products. Reporting aggregates performance across all London locations or separates by individual salon for neighborhood-specific analysis and decision making. Pricing can vary by location reflecting different operating costs and market positioning in various London neighborhoods from budget-friendly areas to premium Mayfair locations. Online booking shows all your London locations on a map letting clients choose based on proximity to home, work, or transit connections. Marketing campaigns can target specific London postcodes and neighborhoods or broadcast to your entire client database across all locations. Staff training and certifications track centrally ensuring quality standards remain consistent whether clients visit your West End or East London locations. Franchise operations maintain brand consistency across London while allowing individual franchisee management and local marketing initiatives. Corporate accounts and large employers can direct staff to nearest location for convenience.
              </p>
            </div>
            <div className="feature-visual">
              <div style={{padding: '60px', background: '#f8fafc', borderRadius: '8px'}}>
                [Multi-Location Visual]
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Online Booking That London Clients Love</h3>
              <p>
                London clients expect sophisticated online booking capabilities matching the digital experiences they enjoy from other service providers throughout the city. BookB provides mobile-optimized online booking that works perfectly on the London Underground, in coffee shops, and anywhere clients access their smartphones. Real-time availability shows exactly which appointment slots remain open preventing the frustration of booking requests that get declined hours later. Stylist profiles include photos, specialties, and reviews helping clients choose the right professional for their specific needs and preferences. Service descriptions explain treatments clearly with duration estimates and pricing so London clients understand exactly what they're booking. Before and after galleries showcase your salon's work building confidence in new clients considering your salon for the first time. Neighborhood and tube station information helps clients find your location and plan their journey across London's extensive transit network. Contactless deposit payments secure appointments reducing no-shows common in busy London market where clients juggle hectic schedules. Automatic appointment reminders via SMS and email reduce no-shows without requiring staff time making phone confirmation calls. Rescheduling and cancellation through client self-service reduces phone interruptions during busy salon operating hours throughout the day. Package purchasing during online booking encourages prepayment and commitment from London clients comparing multiple salons. Gift card purchases online generate revenue and introduce new clients through word-of-mouth referrals in social London networks. Membership programs with recurring billing create predictable revenue and loyal client relationships.
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
              <h3>Reporting and Analytics for London Business Owners</h3>
              <p>
                Running a profitable salon in London requires understanding your numbers with expensive rent, high staff costs, and competitive pricing pressures throughout the city. BookB provides comprehensive reporting helping London salon owners make data-driven decisions about their businesses. Revenue reporting breaks down income by service category, retail products, individual stylists, and time periods for deep understanding of business performance. Staff productivity metrics compare performance across your team identifying top performers worthy of recognition and underperformers needing coaching or schedule adjustments. Client retention analysis shows which clients visit regularly versus one-time visitors helping target marketing to build loyal client base essential in competitive London market. Service profitability calculations deduct product costs and staff time showing true margins on different treatments helping optimize your service menu for London market. Peak hour analysis identifies busiest times helping optimize staff scheduling to match client demand patterns throughout weekdays and weekends. Marketing campaign tracking measures effectiveness of different promotional efforts showing return on investment for various client acquisition and retention initiatives. Inventory turnover reports identify slow-moving retail products occupying valuable shelf space in expensive London salon real estate. No-show and cancellation tracking quantifies revenue lost to appointment gaps helping justify deposit policies or reminder system investments. Year-over-year comparisons show business growth trends and seasonal patterns helping plan for London's beauty industry cycles. VAT reporting generates data formatted for HMRC submission saving accountant time and fees. Payroll reports provide data needed for UK payroll processing and employee tax obligations. Custom report building lets London owners analyze specific questions about their unique business situations and local market dynamics.
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
          <h2>Why London Salons Choose BookB</h2>
          <p className="section-subtitle">Join hundreds of London beauty businesses already using BookB</p>

          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'left'}}>
            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Works with UK payment processors</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                BookB integrates with popular UK payment providers including Stripe, Square, and traditional UK merchant accounts. Process chip and PIN, contactless, and mobile wallet payments common throughout London. Accept pounds sterling without currency conversion fees or complications.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>GDPR compliant data handling</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                BookB helps London salons comply with UK and EU data protection regulations. Client consent tracking, data retention policies, and privacy controls meet GDPR requirements. Data processing agreements available for London businesses needing documentation for compliance audits.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Local support during UK business hours</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Support team available during London business hours via phone, email, and chat. No waiting overnight for responses from American time zones. Representatives understand UK salon operations, terminology, and regulatory environment specific to London beauty businesses.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Transparent pricing in pounds sterling</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Pricing displayed clearly in GBP without confusing currency conversions or exchange rate fluctuations. Payment processing happens in pounds through UK bank accounts. No foreign transaction fees or international payment complications for London businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2>Affordable Pricing for London Salons</h2>
          <p className="section-subtitle">Professional software at prices that work for London businesses</p>

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
              <p className="plan-description">For growing London salons with multiple stylists</p>
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
              <p className="plan-description">For established London salons with larger teams</p>
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
              <p className="plan-description">For London salon chains and franchise operations</p>
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
