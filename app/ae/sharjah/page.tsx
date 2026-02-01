import Image from 'next/image'
import { images } from '@/lib/unsplash-images'

export default function SharjahSalonSoftware() {
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
          <h1>Salon Software for Sharjah Hair & Beauty Businesses</h1>
          <p className="hero-subtitle">
            BookB helps Sharjah salons manage appointments, clients, staff, and payments with powerful cloud-based software designed specifically for UAE beauty businesses. From Al Qasba to Mega Mall, Al Khan and beyond, Sharjah salons trust BookB for reliable, affordable salon management.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Trusted by 200+ Sharjah salons and growing</p>
        </div>
          <div className="hero-image">
            <Image
              src={images.cities.sharjah.url}
              alt={images.cities.sharjah.alt}
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
          <h2>Perfect for Sharjah's Beauty Market</h2>
          <div className="feature-item">
            <div className="feature-content">
              <h3>Built for Sharjah's Family-Oriented Beauty Market</h3>
              <p>
                Sharjah's beauty industry serves family-oriented communities from Al Qasba to Al Majaz, requiring software that handles quality appointments and value-focused treatments, traditional services and modern amenities. BookB adapts perfectly to Sharjah's market with flexible scheduling handling pre-booked appointments and walk-in traffic common in shopping destinations like City Centre Sharjah and Mega Mall.
              </p>

              <p>
                Online booking works seamlessly for Sharjah's professional families and residents while mobile-friendly interfaces serve diverse communities across the emirate. Pricing flexibility accommodates quality services in established areas like Al Khan and Al Taawun, family-friendly salons in residential neighborhoods like Muwailih and Al Nahda, and accessible options in growing areas.
              </p>

              <p>
                Staff scheduling coordinates teams across morning openings through evening appointments serving Sharjah's family-focused population and community-oriented culture. Multi-location management helps salon groups operating across different Sharjah areas maintaining consistent quality service standards while respecting cultural preferences and family values.
              </p>

              <p>
                UAE-specific features include VAT calculation and compliance reporting, public holiday scheduling for UAE national holidays and cultural observances, and payment processing supporting AED and regional currencies. Marketing tools target Sharjah's diverse neighborhoods effectively reaching Emirati families, expatriate residents, and cross-border visitors from Dubai and Ajman.
              </p>

              <p>
                Review management builds reputation through satisfied clients and community word-of-mouth while respecting cultural preferences. Gift cards and packages sell well in Sharjah's family-oriented culture for weddings, celebrations, and special occasions reflecting community values.
              </p>

              <p>
                Commission structures handle varied compensation models respecting UAE labor law while motivating staff performance. Inventory management tracks quality beauty brands and value-oriented products expected by Sharjah's practical, quality-conscious clientele who value good service at fair prices.
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
              <h3>Client Management for Sharjah Salons</h3>
              <p>
                Sharjah clients expect quality personalized service and family-friendly convenience matching the emirate's reputation for cultural values and community focus. BookB provides comprehensive client management helping Sharjah salons build loyal relationships with clients who value traditional hospitality, quality service, and fair pricing.
              </p>

              <p>
                Detailed client profiles track service history, treatment preferences, product selections, and family connections ensuring consistency and personalized attention. Multilingual support accommodates Arabic-speaking Emirati clients, South Asian communities, and other expatriate groups, with culturally respectful communication.
              </p>

              <p>
                Treatment plans track progress toward beauty goals accounting for Sharjah's climate and family-oriented lifestyle. Appointment history shows patterns helping identify loyal family clients and new residents settling in Sharjah's growing communities, building lasting relationships through consistent quality service.
              </p>

              <p>
                Service preferences guide recommendations for treatments and products aligned with each client's needs and budget considerations. Special occasion tracking enables celebration promotions for weddings, Ramadan, Eid, and family events building emotional connections in Sharjah's close-knit, family-centered culture.
              </p>

              <p>
                Referral tracking rewards clients who recommend your salon to friends, family, and neighbors throughout Sharjah's community-oriented social networks where personal recommendations carry strong influence. Client communication preferences respect cultural norms for appropriate contact methods via SMS, WhatsApp, or calls.
              </p>

              <p>
                Spending history helps identify loyal clients deserving recognition and families needing budget-friendly options. Family account linking manages household bookings common among Sharjah's multigenerational families living in apartments and villas across residential areas from Al Nahda to University City.
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
              <h3>Staff Management for Sharjah Teams</h3>
              <p>
                Managing salon staff in Sharjah requires balancing quality service with operational efficiency, coordinating teams in family-friendly environments, and ensuring compliance with UAE labor law and cultural expectations. BookB provides comprehensive staff management tools designed for Sharjah's community-focused employment environment.
              </p>

              <p>
                Intelligent scheduling prevents understaffing during peak family shopping hours and weekend rushes while optimizing coverage during quieter periods. Staff availability management accommodates prayer times, cultural observances, and family commitments through flexible scheduling respecting local values and diverse workforce needs.
              </p>

              <p>
                Skill-based assignment ensures clients receive appropriate stylist expertise matching service expectations with relevant certifications and experience levels. Commission tracking handles compensation structures while ensuring compliance with UAE labor law requirements for salary structures, benefits, and end-of-service gratuity.
              </p>

              <p>
                Payroll reports generate data supporting UAE labor law compliance including gratuity calculations, visa costs tracking for expatriate staff, and leave entitlements. Time clock integration tracks hours worked for accurate wage calculations respecting maximum working hours and overtime regulations under UAE employment law.
              </p>

              <p>
                Leave management tracks annual leave entitlements, religious holiday observances, and family emergency provisions ensuring fair treatment across culturally diverse teams. Performance metrics compare productivity across team members helping identify reliable performers deserving recognition and training opportunities for career development.
              </p>

              <p>
                Staff retention analytics identify turnover patterns important in Sharjah's stable employment market with strong community connections. Documentation management helps track visa expiries, Emirates ID renewals, certification requirements, and compliance for diverse workforce serving Sharjah's multicultural population.
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
              <h3>Marketing Automation for Sharjah Growth</h3>
              <p>
                Growing salon business in Sharjah's community-oriented market requires culturally appropriate marketing reaching family-focused clients with relevant messages at optimal times. BookB provides marketing automation helping Sharjah salon owners maintain client engagement while respecting cultural values and building community reputation.
              </p>

              <p>
                Appointment reminder sequences reduce no-shows through SMS and WhatsApp sent at culturally appropriate times respecting prayer schedules and family routines. Special occasion campaigns celebrate weddings, Eid festivities, and family events automatically with personalized offers encouraging celebratory salon visits.
              </p>

              <p>
                Re-engagement workflows target clients who haven't booked within typical intervals with friendly reminders and value-oriented incentives. New service announcements reach interested clients based on past behavior ensuring relevant targeting for quality services and family-friendly treatments.
              </p>

              <p>
                Package promotions encourage loyalty through value bundles and family packages appealing to Sharjah's budget-conscious, quality-seeking residents who value long-term relationships with trusted local businesses. Seasonal campaigns align with Ramadan preparation, Eid celebrations, wedding seasons, and school holiday patterns.
              </p>

              <p>
                Review and referral management builds reputation through satisfied clients sharing positive experiences within family and community networks, the most trusted marketing in Sharjah's relationship-based culture. Social media presence maintains community-oriented brand image on platforms popular with Sharjah demographics.
              </p>

              <p>
                Client segmentation delivers relevant messages to different groups including Emirati families, expatriate communities, budget-conscious residents, and quality-seeking professionals ensuring appropriate and effective targeting. Marketing campaigns respect cultural sensitivities while promoting quality services during high-demand family celebration periods.
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
          <h2>Pricing for Sharjah Salons</h2>
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
