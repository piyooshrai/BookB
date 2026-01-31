import Image from 'next/image'
import { images } from '@/lib/unsplash-images'

export default function BrightonSalonSoftware() {
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
          <h1>Salon Software for Brighton Hair & Beauty Businesses</h1>
          <p className="hero-subtitle">
            BookB helps Brighton salons manage appointments, clients, staff, and payments with powerful cloud-based software designed specifically for UK beauty businesses. From The Lanes to Kemptown, Preston Park to Brighton Marina, Brighton salons trust BookB for reliable, affordable salon management that works perfectly with UK payment systems, VAT requirements, and local business practices serving the city's vibrant beauty community.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Trusted by 150+ Brighton salons and growing</p>
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
          <h2>Perfect for Brighton's Creative Salon Market</h2>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Built for UK Salons and Beauty Businesses</h3>
              <p>
                Brighton's beauty industry thrives on creativity and innovation, requiring software that understands local business practices and regulatory requirements while supporting the city's unique artistic culture. BookB provides features specifically designed for UK salons including automatic VAT calculation and reporting that aligns with HMRC requirements making tax season straightforward for Brighton business owners. Price display follows UK conventions with VAT-inclusive pricing visible to clients while tracking VAT separately for business accounting and compliance. Payment processing integrates seamlessly with UK banks and card processors including contactless payments ubiquitous throughout Brighton's tech-savvy market. Online booking works perfectly with UK phone number formats, postal codes including Brighton's BN postcodes, and address conventions familiar to local clients. Appointment scheduling accounts for UK bank holidays automatically preventing booking conflicts during Easter, Christmas, and other public holidays when Brighton salons may close. Staff scheduling respects UK employment law including Working Time Regulations, break requirements, and holiday entitlements mandatory for Brighton employees whether full-time stylists or part-time beauty therapists. Payroll reporting generates data formatted for UK accounting software and payroll providers serving Brighton businesses from small independents to larger salon groups. GDPR compliance features help Brighton salons meet data protection obligations for storing and processing client personal information in accordance with UK and EU regulations. Marketing communications respect UK regulations around consent, opt-outs, and commercial electronic messages ensuring your promotional campaigns stay compliant. Currency displays in pounds sterling with proper formatting and no confusing currency conversions or international complications. Time displays in 24-hour or 12-hour formats matching UK preferences and client expectations. Date formats follow UK conventions preventing American-style date confusion that could cause appointment booking errors and client frustration.
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
              <h3>Manage Walk-Ins and Bookings in Busy Brighton Market</h3>
              <p>
                Brighton's seafront location and tourist traffic creates unique challenges for salon businesses balancing regular clients with walk-in customers throughout the year. BookB's queue management features help Brighton salons handle walk-in clients efficiently during busy summer weekends when tourists flock to the beach and pier. Digital waitlist management lets reception staff add walk-in clients to queue with estimated wait times displayed clearly preventing frustration. SMS notifications alert waiting clients when their turn approaches allowing them to browse Brighton shops or enjoy coffee rather than crowding your reception area. Appointment scheduling prioritizes pre-booked clients while intelligently fitting walk-ins into gaps and cancellations maximizing revenue from both visitor traffic and loyal regulars. Staff allocation balances workload across your team ensuring no stylist becomes overwhelmed during peak Brighton tourist season while others sit idle. Real-time scheduling updates reflect cancellations and no-shows immediately making those slots available for walk-in clients or online bookings. Service time estimates based on historical data help receptionists provide accurate wait time predictions for walk-in clients choosing between waiting or booking future appointments. Mobile app check-in for appointments reduces reception desk congestion during busy periods letting clients confirm arrival independently. Queue analytics identify peak walk-in times helping Brighton salon owners optimize staff scheduling for seasonal patterns and weekend rushes. VIP client prioritization ensures your best Brighton customers receive premium service even during hectic summer days when the seafront brings massive foot traffic. Flexible deposit policies let you require prepayment for tourists less likely to return while waiving fees for trusted local clients. Cancellation windows adjust by season or client history protecting revenue during peak Brighton events and festivals.
              </p>
            </div>
            <div className="feature-visual">
              <div style={{padding: '60px', background: '#f8fafc', borderRadius: '8px'}}>
                [Walk-In Management Visual]
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Online Booking That Brighton Clients Love</h3>
              <p>
                Brighton clients expect sophisticated online booking capabilities matching the digital experiences they enjoy from other service providers throughout the city's creative and tech-forward community. BookB provides mobile-optimized online booking that works perfectly on Brighton buses, in seafront cafes, and anywhere clients access their smartphones throughout the day. Real-time availability shows exactly which appointment slots remain open preventing the frustration of booking requests that get declined hours later when clients have already made plans. Stylist profiles include photos, specialties, and reviews helping Brighton clients choose the right professional for their specific needs whether color correction, creative cuts, or specialist treatments. Service descriptions explain treatments clearly with duration estimates and pricing so Brighton clients understand exactly what they're booking from balayage to Brazilian blowouts. Before and after galleries showcase your salon's work building confidence in new clients considering your Brighton salon for the first time or visitors searching for reliable service. Location information includes directions from Brighton station, local parking options, and bus routes helping clients plan their journey whether traveling from Hove, Rottingdean, or visiting from out of town. Contactless deposit payments secure appointments reducing no-shows common in busy Brighton market where clients juggle work, social activities, and seaside recreation. Automatic appointment reminders via SMS and email reduce no-shows without requiring staff time making phone confirmation calls during busy salon operating hours. Rescheduling and cancellation through client self-service reduces phone interruptions during busy Brighton weekends when your team focuses on delivering excellent service. Package purchasing during online booking encourages prepayment and commitment from Brighton clients comparing multiple salons throughout the city and seafront. Gift card purchases online generate revenue and introduce new clients through word-of-mouth referrals in Brighton's tight-knit creative community. Membership programs with recurring billing create predictable revenue and loyal client relationships essential for year-round success beyond summer tourism peaks.
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
              <h3>Reporting and Analytics for Brighton Business Owners</h3>
              <p>
                Running a profitable salon in Brighton requires understanding your numbers with seasonal fluctuations, tourist traffic patterns, and competitive pricing pressures from numerous beauty businesses throughout the city. BookB provides comprehensive reporting helping Brighton salon owners make data-driven decisions about their businesses year-round. Revenue reporting breaks down income by service category, retail products, individual stylists, and time periods for deep understanding of performance across summer peaks and winter quieter months. Staff productivity metrics compare performance across your team identifying top performers worthy of recognition and underperformers needing coaching or schedule adjustments to improve results. Client retention analysis shows which clients visit regularly versus one-time visitors helping target marketing to build loyal local client base essential for winter months when tourist traffic decreases. Service profitability calculations deduct product costs and staff time showing true margins on different treatments helping optimize your service menu for Brighton's diverse market from students to affluent professionals. Peak hour analysis identifies busiest times helping optimize staff scheduling to match client demand patterns throughout weekdays, weekends, and seasonal variations unique to Brighton's tourism calendar. Marketing campaign tracking measures effectiveness of different promotional efforts showing return on investment for various client acquisition and retention initiatives from social media to local partnerships. Inventory turnover reports identify slow-moving retail products occupying valuable shelf space in expensive Brighton salon real estate near the seafront or in prime North Laine locations. No-show and cancellation tracking quantifies revenue lost to appointment gaps helping justify deposit policies or reminder system investments that protect your bottom line. Year-over-year comparisons show business growth trends and seasonal patterns helping plan for Brighton's beauty industry cycles including Pride Festival, student term times, and summer tourist season. VAT reporting generates data formatted for HMRC submission saving accountant time and fees while ensuring compliance. Payroll reports provide data needed for UK payroll processing and employee tax obligations. Custom report building lets Brighton owners analyze specific questions about their unique business situations and local market dynamics including competition from London day-trippers.
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
          <h2>Why Brighton Salons Choose BookB</h2>
          <p className="section-subtitle">Join hundreds of Brighton beauty businesses already using BookB</p>

          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'left'}}>
            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Works with UK payment processors</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                BookB integrates with popular UK payment providers including Stripe, Square, and traditional UK merchant accounts. Process chip and PIN, contactless, and mobile wallet payments common throughout Brighton. Accept pounds sterling without currency conversion fees or complications.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Perfect for Brighton's creative community</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Brighton's independent spirit and creative culture demands flexible software that adapts to unique business models. BookB supports unconventional scheduling, artistic pricing structures, and creative marketing campaigns that match Brighton's distinctive character and clientele.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Local support during UK business hours</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Support team available during Brighton business hours via phone, email, and chat. No waiting overnight for responses from American time zones. Representatives understand UK salon operations, terminology, and regulatory environment specific to Brighton beauty businesses.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Transparent pricing in pounds sterling</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Pricing displayed clearly in GBP without confusing currency conversions or exchange rate fluctuations. Payment processing happens in pounds through UK bank accounts. No foreign transaction fees or international payment complications for Brighton businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2>Affordable Pricing for Brighton Salons</h2>
          <p className="section-subtitle">Professional software at prices that work for Brighton businesses</p>

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
              <p className="plan-description">For growing Brighton salons with multiple stylists</p>
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
              <p className="plan-description">For established Brighton salons with larger teams</p>
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
              <p className="plan-description">For Brighton salon chains and franchise operations</p>
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
