import Image from 'next/image'
import { images } from '@/lib/unsplash-images'

export default function GlasgowSalonSoftware() {
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
          <h1>Salon Software for Glasgow Hair & Beauty Businesses</h1>
          <p className="hero-subtitle">
            BookB helps Glasgow salons manage appointments, clients, staff, and payments with powerful cloud-based software designed specifically for UK beauty businesses. From West End to Merchant City, Finnieston to Shawlands, Glasgow salons trust BookB for reliable, affordable salon management that works perfectly with UK payment systems, VAT requirements, and Scottish business practices serving Scotland's largest city.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Trusted by 300+ Glasgow salons and growing</p>
        </div>
          <div className="hero-image">
            <Image
              src={images.cities.glasgow.url}
              alt={images.cities.glasgow.alt}
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
          <h2>Perfect for Glasgow's Vibrant Salon Scene</h2>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Built for UK and Scottish Salons</h3>
              <p>
                Glasgow's beauty industry thrives with creativity and entrepreneurial spirit requiring software that understands local business practices, regulatory requirements, and cultural considerations unique to Scotland's largest city. BookB provides features specifically designed for UK salons including automatic VAT calculation and reporting that aligns with HMRC requirements making tax compliance straightforward for Glasgow business owners managing successful salons. Price display follows UK conventions with VAT-inclusive pricing visible to clients while tracking VAT separately for business accounting and quarterly submissions to tax authorities. Payment processing integrates seamlessly with UK banks and card processors including contactless payments ubiquitous throughout Glasgow from Style Mile to local neighborhood salons. Online booking works perfectly with UK phone number formats, postal codes including Glasgow's G postcodes covering Partick, Dennistoun, and Southside, and address conventions familiar to local clients. Scottish bank holiday integration accounts for additional Scottish public holidays including St Andrew's Day and Glasgow Fair automatically preventing booking conflicts when salons close for celebrations. Appointment scheduling works across Glasgow's diverse neighborhoods from affluent West End to regenerated East End requiring software understanding different market dynamics and client expectations. Staff scheduling respects UK employment law including Working Time Regulations, break requirements, and holiday entitlements mandatory for Glasgow employees whether senior stylists or junior beauty therapists. Payroll reporting generates data formatted for UK accounting software and payroll providers serving Glasgow businesses from independent stylists to growing salon chains. GDPR compliance features help Glasgow salons meet data protection obligations for storing and processing client personal information in accordance with UK regulations. Marketing communications respect UK regulations around consent, opt-outs, and commercial electronic messages ensuring your promotional campaigns stay compliant while building your Glasgow client base. Currency displays in pounds sterling with proper formatting and no confusing currency conversions or international complications. Time displays in 24-hour or 12-hour formats matching UK preferences and client expectations throughout Glasgow's neighborhoods. Date formats follow UK conventions preventing American-style date confusion that could cause appointment booking errors.
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
              <h3>Retail and Product Management for Glasgow Salons</h3>
              <p>
                Glasgow salons increase revenue through retail product sales requiring comprehensive inventory and sales management integrated with appointment booking and client records. BookB's retail features help Glasgow salon owners maximize product sales while maintaining accurate stock levels and supplier relationships. Product catalog management maintains detailed information about every retail item from professional haircare to styling tools including wholesale costs, retail prices, and profit margins. Barcode scanning enables quick product lookup and sale processing during checkout speeding transactions and reducing errors when Glasgow clients purchase multiple items. Inventory tracking monitors stock levels in real-time alerting managers when products run low and need reordering from suppliers before running out completely. Purchase order management creates orders for suppliers tracking expected delivery dates and costs helping Glasgow salons maintain optimal inventory without tying up excessive cash in stock. Stock adjustments record breakage, theft, samples, and other inventory changes maintaining accurate counts matching physical stock to system records for financial accuracy. Multi-location inventory tracks stock separately at each Glasgow salon location while allowing transfers between locations when one runs short and another has excess. Retail sales reporting shows which products sell best helping Glasgow owners optimize shelf space and purchasing decisions to maximize revenue from limited display areas. Staff commission tracking calculates earnings from product sales incentivizing your Glasgow team to recommend appropriate products to clients during and after services. Package bundles combine services and products at attractive pricing encouraging Glasgow clients to purchase complete solutions rather than services alone. Supplier management maintains vendor contact information, pricing agreements, and order history helping Glasgow owners negotiate better terms and manage relationships effectively. Product recommendations in client profiles remind stylists which products clients use enabling personalized suggestions during appointments building trust and sales. Low stock alerts prevent disappointing Glasgow clients when popular products sell out unexpectedly creating negative experiences and lost revenue opportunities.
              </p>
            </div>
            <div className="feature-visual">
              <div style={{padding: '60px', background: '#f8fafc', borderRadius: '8px'}}>
                [Retail Management Visual]
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Online Booking That Glasgow Clients Love</h3>
              <p>
                Glasgow clients expect sophisticated online booking capabilities matching the digital experiences they enjoy from other service providers throughout Scotland's largest city. BookB provides mobile-optimized online booking that works perfectly on Glasgow Subway, in Merchant City cafes, and anywhere clients access their smartphones throughout the day. Real-time availability shows exactly which appointment slots remain open preventing the frustration of booking requests that get declined hours later when clients have already made alternative plans. Stylist profiles include photos, specialties, and reviews helping Glasgow clients choose the right professional for their specific needs whether everyday cuts or creative color work. Service descriptions explain treatments clearly with duration estimates and pricing so Glasgow clients understand exactly what they're booking from express services to comprehensive packages. Before and after galleries showcase your salon's work building confidence in new clients considering your Glasgow salon for the first time after Instagram discovery or friend recommendation. Location information includes directions from Central Station or Queen Street, local parking options at NCP car parks, and subway stations helping clients plan their journey from suburbs to city centre. Contactless deposit payments secure appointments reducing no-shows common in busy Glasgow market where clients juggle work schedules, shopping plans, and social commitments. Automatic appointment reminders via SMS and email reduce no-shows without requiring staff time making confirmation calls during busy salon operating hours. Rescheduling and cancellation through client self-service reduces phone interruptions during busy Glasgow Saturdays when your team focuses on delivering excellent service. Package purchasing during online booking encourages prepayment and commitment from Glasgow clients comparing multiple salons throughout West End, Merchant City, and Southside locations. Gift card purchases online generate revenue and introduce new clients through word-of-mouth referrals in Glasgow's tight-knit community. Membership programs with recurring billing create predictable revenue and loyal client relationships essential for long-term business success.
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
              <h3>Reporting and Analytics for Glasgow Business Owners</h3>
              <p>
                Running a profitable salon in Glasgow requires understanding your numbers with competitive rent, skilled staff wages, and pricing pressures from numerous beauty businesses throughout Scotland's largest city. BookB provides comprehensive reporting helping Glasgow salon owners make data-driven decisions about their businesses daily, weekly, and monthly. Revenue reporting breaks down income by service category, retail products, individual stylists, and time periods for deep understanding of business performance across different seasons and economic conditions. Staff productivity metrics compare performance across your Glasgow team identifying top performers worthy of recognition and underperformers needing coaching or schedule adjustments. Client retention analysis shows which clients visit regularly versus one-time visitors helping target marketing to build loyal client base essential for stable revenue. Service profitability calculations deduct product costs and staff time showing true margins on different treatments helping optimize your service menu for maximum profitability. Peak hour analysis identifies busiest times helping optimize staff scheduling to match client demand patterns throughout weekdays and busy Glasgow shopping Saturdays. Marketing campaign tracking measures effectiveness of different promotional efforts showing return on investment for social media advertising, email campaigns, and referral programs. Inventory turnover reports identify slow-moving retail products occupying valuable shelf space in expensive Glasgow salon real estate. No-show and cancellation tracking quantifies revenue lost to appointment gaps helping justify deposit policies or reminder system investments. Year-over-year comparisons show business growth trends and seasonal patterns helping plan for Glasgow's beauty industry cycles including Christmas shopping and summer weddings. VAT reporting generates data formatted for HMRC submission saving accountant time and fees. Payroll reports provide data needed for UK payroll processing and employee tax obligations. Custom report building lets Glasgow owners analyze specific questions about their unique business situations.
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
          <h2>Why Glasgow Salons Choose BookB</h2>
          <p className="section-subtitle">Join hundreds of Glasgow beauty businesses already using BookB</p>

          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'left'}}>
            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Works with UK payment processors</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                BookB integrates with popular UK payment providers including Stripe, Square, and traditional UK merchant accounts. Process chip and PIN, contactless, and mobile wallet payments common throughout Glasgow. Accept pounds sterling without currency conversion fees.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Perfect for Glasgow's entrepreneurial spirit</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Glasgow's creative culture and business innovation demands flexible software that adapts to unique business models. BookB supports independent salons, chair rental operations, and salon suites popular in Glasgow's diverse beauty market.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Local support during UK business hours</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Support team available during Glasgow business hours via phone, email, and chat. No waiting overnight for responses from American time zones. Representatives understand UK salon operations and Scottish business environment.
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '20px', marginBottom: '0.5rem'}}>Transparent pricing in pounds sterling</h3>
              <p style={{color: 'var(--text-light)', lineHeight: '1.7'}}>
                Pricing displayed clearly in GBP without confusing currency conversions. Payment processing happens in pounds through UK bank accounts. No foreign transaction fees for Glasgow businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2>Affordable Pricing for Glasgow Salons</h2>
          <p className="section-subtitle">Professional software at prices that work for Glasgow businesses</p>

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
              <p className="plan-description">For growing Glasgow salons with multiple stylists</p>
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
              <p className="plan-description">For established Glasgow salons with larger teams</p>
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
              <p className="plan-description">For Glasgow salon chains and franchise operations</p>
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
