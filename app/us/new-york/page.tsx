import Image from 'next/image'
import { images } from '@/lib/unsplash-images'

export default function NewYorkSalonSoftware() {
  return (
    <>
      <nav>
        <div className="container">
          <a href="/" className="logo">
            <img src="/bookb-logo.svg" alt="BookB Logo" width="40" height="40" style={{ display: 'block' }} />
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
          <h1>Salon Software for New York Hair & Beauty Businesses</h1>
          <p className="hero-subtitle">
            BookB helps New York salons manage appointments, clients, staff, and payments with powerful cloud-based software designed specifically for US beauty businesses. From Manhattan to Brooklyn, Queens to the Bronx, New York salons trust BookB for reliable, affordable salon management that works perfectly with US payment systems, sales tax requirements, and local business practices serving the world's most competitive beauty market.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Trusted by 800+ New York salons and growing</p>
        </div>
          <div className="hero-image">
            <Image
              src={images.cities.newYork.url}
              alt={images.cities.newYork.alt}
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
          <h2>Perfect for New York's Competitive Beauty Market</h2>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Built for US Salons and Beauty Businesses</h3>
              <p>

                New York's beauty industry is the most competitive and demanding in America requiring software that understands local business practices, regulatory requirements, and the fast-paced nature of operating in the city that never sleeps. BookB provides <a href="/features">features</a> specifically designed for US salons including automatic sales tax calculation that handles New York's complex tax jurisdictions across all five boroughs with different rates and rules. Salons in <a href="/us/los-angeles">Los Angeles</a>, <a href="/us/chicago">Chicago</a>, and <a href="/us/miami">Miami</a> also trust our US-optimized platform.

              </p>

              <p>

                Price display follows US conventions with tax-exclusive pricing shown to clients with tax calculated at checkout matching standard American retail practices. Payment processing integrates seamlessly with US banks and card processors including Square, Stripe, and traditional merchant accounts processing credit cards, debit cards, Apple Pay, Google Pay, and other payment methods ubiquitous throughout New York City.

              </p>

              <p>

                <a href="/features">Online booking</a> works perfectly with US phone number formats, ZIP codes covering all New York neighborhoods from 10001 Manhattan to 11201 Brooklyn, and address conventions familiar to American clients. Appointment scheduling accounts for US federal holidays and New York state holidays automatically preventing booking conflicts during major holidays when salons may close. Whether you run a <a href="/nail-salon-software">nail salon</a> or <a href="/beauty-therapist-software">beauty business</a>, our platform adapts to your needs.

              </p>

              <p>

                Staff scheduling respects US employment law including Fair Labor Standards Act overtime rules, meal break requirements, and wage and hour regulations applicable to New York beauty businesses. Payroll reporting generates data formatted for US accounting software like QuickBooks and payroll providers like ADP serving New York businesses from independent stylists to multi-location salon chains.

              </p>

              <p>

                Tax compliance features help New York salons meet federal and state tax obligations including income tax withholding, unemployment insurance, and workers compensation insurance requirements. Marketing communications comply with CAN-SPAM regulations and US consumer protection laws ensuring your promotional campaigns stay compliant while building your New York client base.

              </p>

              <p>

                Currency displays in US dollars with proper formatting and no international currency complications. Time displays in 12-hour format with AM/PM matching American preferences.

              </p>

              <p>

                Date formats follow US conventions with month/day/year preventing confusion that could cause appointment booking errors.

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
              <h3>High-Volume Scheduling for New York Salons</h3>
              <p>

                New York salons operate at incredible pace serving hundreds of clients weekly in expensive real estate requiring maximum efficiency and revenue optimization. BookB's advanced scheduling features help New York salons maximize capacity while maintaining service quality in America's most demanding beauty market.

              </p>

              <p>

                Multi-stylist coordination manages complex schedules across large teams common in New York salons with 10, 20, or more professionals working simultaneously. Real-time updates ensure all staff see current schedule preventing double-bookings and communication errors that waste time and frustrate clients.

              </p>

              <p>

                Color-coded calendars distinguish appointment types, service categories, and client priority levels enabling quick visual scanning during hectic New York days. Drag-and-drop rescheduling makes adjusting appointments fast when clients run late, services run over, or last-minute changes occur constantly in fast-paced Manhattan environment.

              </p>

              <p>

                Overbooking controls allow strategic scheduling beyond theoretical capacity accounting for no-shows and cancellations that create revenue-destroying gaps in expensive New York salon chairs. Waitlist automation captures excess demand when popular stylists book solid enabling contact when cancellations create unexpected openings maximizing revenue from every available hour.

              </p>

              <p>

                Express service lanes dedicate specific appointment slots for quick services like blowouts and bang trims filling gaps between major appointments and serving time-pressed New York professionals. VIP client prioritization ensures your best customers get preferred appointment times even during peak demand protecting relationships with high-value regulars.

              </p>

              <p>

                Online booking integration shows real-time availability preventing double-bookings between phone, walk-in, and internet reservations common in high-volume New York operations. Mobile scheduling lets stylists and managers adjust calendars from smartphones whether commuting on subway, between locations, or working from home.

              </p>

              <p>

                Automated confirmations reduce no-shows by sending appointment reminders via email and text ensuring New York clients remember bookings despite hectic schedules. Cancellation policies enforce fees for late cancellations and no-shows protecting revenue in expensive New York real estate where every empty chair costs money.

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
              <h3>Online Booking That New York Clients Love</h3>
              <p>

                New York clients demand sophisticated online booking capabilities matching the digital experiences they enjoy from other service providers throughout the city's tech-forward market. BookB provides mobile-optimized online booking that works perfectly on subway trains, in coffee shops, and anywhere clients access their smartphones 24/7.

              </p>

              <p>

                Real-time availability shows exactly which appointment slots remain open preventing the frustration of booking requests that get declined hours later when clients have already made alternative plans in competitive New York market with abundant salon options. Stylist profiles include photos, specialties, portfolios, and client reviews helping New York clients choose the right professional for their specific needs whether editorial-quality color work, precision cutting, or celebrity-inspired styling.

              </p>

              <p>

                Service descriptions explain treatments clearly with duration estimates and pricing so New York clients understand exactly what they're booking from express blowouts to full transformation packages spanning multiple hours. Before and after galleries showcase your salon's work building confidence in new clients considering your New York salon for the first time after Instagram discovery, influencer recommendation, or friend referral.

              </p>

              <p>

                Location information includes subway directions from nearest stations, parking garage options in congested Manhattan, and walking directions helping clients plan their journey across New York's extensive public transit network. Contactless deposit payments secure appointments reducing no-shows common in busy New York market where clients juggle demanding jobs, active social lives, and countless entertainment options competing for their time and attention.

              </p>

              <p>

                Automatic appointment reminders via SMS and email reduce no-shows without requiring staff time making confirmation calls during busy salon operating hours when reception handles constant phone inquiries and walk-in traffic. Rescheduling and cancellation through client self-service reduces phone interruptions during busy New York weekends when your team focuses on delivering excellent service to present clients rather than administrative tasks.

              </p>

              <p>

                Package purchasing during online booking encourages prepayment and commitment from New York clients comparing multiple salons throughout Manhattan, Brooklyn, and other boroughs. Gift card purchases online generate revenue and introduce new clients through word-of-mouth referrals in New York's connected social networks where trends spread rapidly.

              </p>

              <p>

                Membership programs with recurring billing create predictable revenue and loyal client relationships essential for long-term success in transient New York market where residents frequently move neighborhoods or leave the city.

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
              <h3>Reporting and Analytics for New York Business Owners</h3>
              <p>

                Running a profitable salon in New York requires understanding your numbers with astronomical rent prices, high staff wages, and intense pricing pressures from thousands of beauty businesses competing throughout the city. BookB provides comprehensive reporting helping New York salon owners make data-driven decisions about their businesses daily, weekly, and monthly in America's most expensive beauty market.

              </p>

              <p>

                Revenue reporting breaks down income by service category, retail products, individual stylists, and time periods for deep understanding of business performance across different seasons and economic conditions affecting New York market. Staff productivity metrics compare performance across your New York team identifying top performers worthy of recognition, pay increases, or promotion to senior positions and underperformers needing coaching or schedule adjustments to improve results and profitability.

              </p>

              <p>

                Client retention analysis shows which clients visit regularly versus one-time visitors helping target marketing to build loyal client base essential for stable revenue beyond relying on tourist traffic and transient New York population. Service profitability calculations deduct product costs, staff time, and overhead expenses showing true margins on different treatments helping optimize your service menu for maximum profitability while maintaining quality standards New York clients expect.

              </p>

              <p>

                Peak hour analysis identifies busiest times helping optimize staff scheduling to match client demand patterns throughout weekdays when professionals book before work or during lunch and weekends when clients enjoy leisurely Saturday appointments. Marketing campaign tracking measures effectiveness of different promotional efforts showing return on investment for Instagram advertising, email campaigns, influencer partnerships, and referral incentive programs competing for attention in crowded New York market.

              </p>

              <p>

                Inventory turnover reports identify slow-moving retail products occupying valuable shelf space in expensive New York salon real estate where every square foot matters for profitability and revenue generation. No-show and cancellation tracking quantifies revenue lost to appointment gaps helping justify strict deposit policies or reminder system investments that protect your bottom line in expensive real estate.

              </p>

              <p>

                Year-over-year comparisons show business growth trends and seasonal patterns helping plan for New York's beauty industry cycles including Fashion Week surges, holiday shopping season, summer wedding peaks, and January slowdowns. Sales tax reporting generates data for New York State and local tax submissions ensuring compliance with complex multi-jurisdiction tax requirements.

              </p>

              <p>

                Payroll reports provide data needed for US payroll processing and employee tax obligations for your New York team. Custom report building lets New York owners analyze specific questions about their unique business situations and competitive dynamics in world's most challenging beauty market.

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
          <h2>Why New York Salons Choose BookB</h2>
          <p className="section-subtitle">Join hundreds of New York beauty businesses already using BookB</p>

          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'left'}}>
            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Works with US payment processors</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                BookB integrates with popular US payment providers including Square, Stripe, and traditional merchant accounts. Process all major credit cards, debit cards, and mobile wallets common throughout New York.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Built for New York's fast pace</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                High-performance software designed for New York's demanding beauty market. Handle high booking volume, complex schedules, and sophisticated clients expecting world-class service and efficiency.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>US-based support during business hours</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Support team available during New York business hours via phone, email, and chat. Representatives understand US salon operations, terminology, and regulatory environment specific to New York beauty businesses.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Transparent pricing in US dollars</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Pricing displayed clearly in USD without currency conversions. Payment processing happens in dollars through US bank accounts. No foreign transaction fees or international payment complications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2>Affordable Pricing for New York Salons</h2>
          <p className="section-subtitle">Professional software at prices that work for New York businesses</p>

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
              <p className="plan-description">For growing New York salons with multiple stylists</p>
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
              <p className="plan-description">For established New York salons with larger teams</p>
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
              <p className="plan-description">For New York salon chains and franchise operations</p>
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
