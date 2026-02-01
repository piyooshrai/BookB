import Image from 'next/image'
import { images } from '@/lib/unsplash-images'

export default function RiyadhSalonSoftware() {
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
          <h1>Salon Software for Riyadh Hair & Beauty Businesses</h1>
          <p className="hero-subtitle">
            BookB helps Riyadh salons manage appointments, clients, staff, and payments with powerful cloud-based software designed specifically for UAE beauty businesses. From Kingdom Centre to Boulevard, Olaya and beyond, Riyadh salons trust BookB for reliable, affordable salon management.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Trusted by 200+ Riyadh salons and growing</p>
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
          <h2>Perfect for Riyadh's Beauty Market</h2>
          <div className="feature-item">
            <div className="feature-content">
              <h3>Built for Riyadh's Expanding Beauty Market</h3>
              <p>
                Riyadh's beauty industry serves the capital's growing population from Kingdom Centre to Boulevard City, requiring software that handles premium appointments and luxury treatments, family-oriented services and ladies-only facilities. BookB adapts perfectly to Riyadh's dynamic market with flexible scheduling handling pre-booked appointments and walk-in traffic common in shopping destinations like Riyadh Park and Granada Centre.
              </p>

              <p>
                Online booking works seamlessly for Riyadh's tech-savvy professional women and affluent families while mobile-friendly interfaces serve diverse communities. Pricing flexibility accommodates luxury services in premium areas like Diplomatic Quarter and Olaya, established salons in Al Malqa and Al Hamra, and accessible options in growing residential neighborhoods across north and east Riyadh.
              </p>

              <p>
                Staff scheduling coordinates teams across morning openings through evening appointments serving Riyadh's professional population and extended shopping hours. Multi-location management helps salon groups operating across different districts maintaining consistent service standards while respecting cultural preferences and ladies-only facility requirements.
              </p>

              <p>
                Saudi-specific features include VAT calculation and Zakat compliance reporting, public holiday scheduling for Saudi national holidays and religious observances, and payment processing supporting SAR and international currencies. Marketing tools target Riyadh's diverse neighborhoods effectively reaching Saudi families, expatriate communities, and professional women.
              </p>

              <p>
                Review management builds reputation through word-of-mouth and digital platforms while respecting cultural preferences for privacy and discretion. Gift cards and packages sell well in Riyadh's celebration-focused culture for weddings, Eid festivities, and special family occasions.
              </p>

              <p>
                Commission structures handle varied compensation models respecting Saudi labor law and cultural norms while motivating staff performance. Inventory management tracks premium international beauty brands and luxury products expected by Riyadh's sophisticated, well-traveled clientele with high quality expectations.
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
              <h3>Client Management for Riyadh Salons</h3>
              <p>
                Riyadh clients expect premium personalized service and modern digital convenience matching the capital's rapid development and high standards. BookB provides comprehensive client management helping Riyadh salons build loyal relationships with discerning customers who value traditional hospitality combined with contemporary service excellence.
              </p>

              <p>
                Detailed client profiles track service history, treatment preferences, product selections, and cultural considerations ensuring privacy and consistency across visits. Multilingual support accommodates Arabic-speaking Saudi clients and international residents, with culturally appropriate communication respecting local customs and preferences.
              </p>

              <p>
                Treatment plans track progress toward long-term beauty goals accounting for Riyadh's climate challenges and lifestyle preferences. Appointment history shows patterns helping identify loyal clients deserving VIP recognition and new clients needing welcoming experiences to build lasting relationships in Riyadh's word-of-mouth driven market.
              </p>

              <p>
                Service preferences guide recommendations for premium treatments and luxury products aligned with each client's specific needs and sophisticated expectations. Special occasion tracking enables celebration promotions for weddings, Ramadan, Eid, and family events building emotional connections in Riyadh's family-centered culture.
              </p>

              <p>
                Referral tracking rewards clients who recommend your salon to friends and family throughout Riyadh's close-knit social networks where personal recommendations carry significant weight. Client communication preferences respect cultural norms for appropriate contact methods via SMS, WhatsApp, or direct calls.
              </p>

              <p>
                Spending history identifies premium clients deserving exclusive treatment and personalized attention. Family account linking manages household bookings common among Riyadh's extended family structures living in compounds and villas across the capital's expanding neighborhoods.
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

          <div className="feature-item">
            <div className="feature-content">
              <h3>Staff Management for Riyadh Teams</h3>
              <p>
                Managing salon staff in Riyadh requires balancing service excellence with cultural considerations, coordinating teams in ladies-only environments, and ensuring compliance with Saudi labor law and Saudization requirements. BookB provides comprehensive staff management tools designed for Riyadh's unique employment landscape and cultural context.
              </p>

              <p>
                Intelligent scheduling prevents understaffing during peak hours and weekend rushes while optimizing coverage during quieter periods based on historical patterns. Staff availability management accommodates prayer times, religious observances, and cultural preferences through flexible scheduling interfaces respecting local customs.
              </p>

              <p>
                Skill-based assignment ensures clients receive qualified stylist expertise matching premium service expectations with appropriate certifications and experience levels. Commission tracking handles compensation structures while ensuring compliance with Saudi labor law requirements including Saudization ratios and benefit structures.
              </p>

              <p>
                Payroll reports generate data supporting Saudi labor law compliance including end-of-service benefits calculations, visa costs tracking for expatriate staff, and GOSI contributions. Time clock integration tracks hours worked for accurate wage calculations respecting maximum working hours and overtime regulations.
              </p>

              <p>
                Leave management tracks annual leave entitlements, Ramadan working hour adjustments, Hajj leave for Saudi staff, and religious holiday observances. Performance metrics compare productivity across team members helping identify top performers deserving recognition and development opportunities.
              </p>

              <p>
                Staff retention analytics identify turnover patterns important in Riyadh's evolving employment market with increasing Saudization. Documentation management helps track visa expiries, Iqama renewals, certification requirements, and compliance for diverse workforce combining Saudi and international staff.
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
              <h3>Marketing Automation for Riyadh Growth</h3>
              <p>
                Growing salon business in Riyadh's expanding market requires culturally appropriate marketing reaching the right clients with compelling messages at optimal times. BookB provides marketing automation helping Riyadh salon owners maintain client engagement while respecting cultural preferences and building reputation through quality service.
              </p>

              <p>
                Appointment reminder sequences reduce no-shows through SMS and WhatsApp sent at culturally appropriate times respecting prayer schedules and daily routines. Special occasion campaigns celebrate weddings, Eid festivities, and family events automatically with personalized offers encouraging celebratory salon visits.
              </p>

              <p>
                Re-engagement workflows target clients who haven't booked within typical intervals with compelling incentives delivered through preferred channels. New service announcements reach interested clients based on past behavior ensuring relevant targeting for premium services and seasonal treatments popular during different times of year.
              </p>

              <p>
                Package promotions encourage commitment through luxury bundles and membership programs appealing to Riyadh's quality-seeking residents who value long-term relationships with trusted service providers. Seasonal campaigns align with Ramadan preparation, Eid celebrations, wedding seasons, and school holiday patterns.
              </p>

              <p>
                Review and referral management builds reputation through satisfied clients sharing positive experiences within their social networks, the most effective marketing channel in Riyadh's relationship-driven culture. Social media presence maintains professional brand image on platforms popular with Riyadh demographics including Instagram and Snapchat.
              </p>

              <p>
                Client segmentation delivers relevant messages to different groups including Saudi families, expatriate residents, young professionals, and established clients ensuring culturally appropriate and effective targeting. Marketing campaigns respect cultural sensitivities while promoting premium services during high-demand periods.
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
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2>Pricing for Riyadh Salons</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="plan-name">Starter</div>
              <div className="plan-price">AED 75<span className="plan-period">/mo</span></div>
              <ul className="plan-features">
                <li>Up to 2 staff</li>
                <li>Unlimited appointments</li>
                <li>Online booking</li>
              </ul>
              <a href="#trial" className="btn btn-primary plan-cta">Start Free Trial</a>
            </div>
            <div className="pricing-card featured">
              <div className="popular-badge">MOST POPULAR</div>
              <div className="plan-name">Professional</div>
              <div className="plan-price">AED 190<span className="plan-period">/mo</span></div>
              <ul className="plan-features">
                <li>Up to 10 staff</li>
                <li>All Starter features</li>
                <li>Advanced analytics</li>
              </ul>
              <a href="#trial" className="btn btn-primary plan-cta">Start Free Trial</a>
            </div>
            <div className="pricing-card">
              <div className="plan-name">Business</div>
              <div className="plan-price">AED 370<span className="plan-period">/mo</span></div>
              <ul className="plan-features">
                <li>Up to 25 staff</li>
                <li>Multi-location</li>
                <li>Priority support</li>
              </ul>
              <a href="#trial" className="btn btn-primary plan-cta">Start Free Trial</a>
            </div>
            <div className="pricing-card">
              <div className="plan-name">Enterprise</div>
              <div className="plan-price">Custom</div>
              <ul className="plan-features">
                <li>Unlimited staff</li>
                <li>Custom development</li>
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
