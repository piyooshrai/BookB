import Image from 'next/image'
import { images } from '@/lib/unsplash-images'

export default function AbuDhabiSalonSoftware() {
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
          <h1>Salon Software for Abu Dhabi Hair & Beauty Businesses</h1>
          <p className="hero-subtitle">
            BookB helps Abu Dhabi salons manage appointments, clients, staff, and payments with powerful cloud-based software designed specifically for UAE beauty businesses. From Corniche to Yas Island, Marina and beyond, Abu Dhabi salons trust BookB for reliable, affordable salon management.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Trusted by 200+ Abu Dhabi salons and growing</p>
        </div>
          <div className="hero-image">
            <Image
              src={images.cities.abuDhabi.url}
              alt={images.cities.abuDhabi.alt}
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
          <h2>Perfect for Abu Dhabi's Beauty Market</h2>
          <div className="feature-item">
            <div className="feature-content">
              <h3>Built for Abu Dhabi's Refined Beauty Market</h3>
              <p>
                Abu Dhabi's beauty industry serves sophisticated clientele from Corniche to Yas Island, requiring software that handles luxury appointments and premium wellness treatments, boutique salons and hotel spas. BookB adapts perfectly to Abu Dhabi's refined market with flexible scheduling handling pre-booked appointments and walk-in traffic common in upscale locations like The Galleria and Yas Mall.
              </p>

              <p>
                Online booking works seamlessly for busy Abu Dhabi professionals and affluent residents in government and corporate sectors while mobile-friendly interfaces serve diverse expatriate communities. Pricing flexibility accommodates luxury services in premium areas like Saadiyat Island and Al Raha Beach, established services in Khalifa City and Al Reef, and accessible options in growing neighborhoods.
              </p>

              <p>
                Staff scheduling coordinates multicultural teams across morning openings through evening appointments serving Abu Dhabi's professional population and extended mall hours. Multi-location management helps salon groups operating across Abu Dhabi island, mainland areas, and tourist destinations maintaining consistent premium service standards.
              </p>

              <p>
                UAE-specific features include VAT calculation and compliance reporting, public holiday scheduling for UAE national holidays and cultural observances, and payment processing supporting AED and major international currencies. Marketing tools target Abu Dhabi's diverse communities effectively reaching expatriates, local Emirati families, and business professionals.
              </p>

              <p>
                Review management builds reputation on platforms popular with Abu Dhabi consumers including Google, TripAdvisor, and regional directories. Gift cards and packages sell well in Abu Dhabi's gift-conscious culture for weddings, celebrations, and corporate gifting.
              </p>

              <p>
                Commission structures handle varied compensation models respecting UAE labor law while motivating staff performance. Inventory management tracks premium international beauty brands and luxury wellness products expected by Abu Dhabi's sophisticated, well-traveled clientele with refined tastes.
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
              <h3>Client Management for Abu Dhabi Salons</h3>
              <p>
                Abu Dhabi clients expect refined personalized service and sophisticated digital experiences matching the capital's reputation for elegance and quality. BookB provides comprehensive client management helping Abu Dhabi salons build loyal relationships with discerning customers who value traditional hospitality combined with modern convenience.
              </p>

              <p>
                Detailed client profiles track service history, treatment preferences, product selections, and cultural considerations ensuring consistency across all visits. Multilingual support accommodates Abu Dhabi's diverse population communicating in Arabic, English, and other languages serving international residents and Emirati families.
              </p>

              <p>
                Treatment plans track progress toward long-term beauty and wellness goals accounting for Abu Dhabi's climate and lifestyle preferences. Appointment history shows patterns helping identify loyal clients deserving VIP recognition and new residents needing welcoming experiences to build lasting relationships.
              </p>

              <p>
                Service preferences guide recommendations for premium treatments and luxury products aligned with each client's specific needs and refined expectations. Birthday tracking enables celebration promotions and special offers building emotional connections in Abu Dhabi's family-oriented, celebration-focused culture.
              </p>

              <p>
                Referral tracking rewards clients who recommend your salon to friends, family, and colleagues throughout Abu Dhabi's close-knit expatriate and local communities. Client communication preferences respect how people want to receive appointment reminders, exclusive offers, and updates via SMS, email, WhatsApp, or app notifications.
              </p>

              <p>
                Spending history identifies premium clients deserving exclusive treatment and personalized service. Family account linking manages household bookings common among Abu Dhabi's family-oriented communities living in villas, apartments, and residential compounds across the emirate.
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
              <h3>Staff Management for Abu Dhabi Teams</h3>
              <p>
                Managing multicultural salon staff in Abu Dhabi requires balancing service excellence with operational efficiency, coordinating diverse teams, and ensuring compliance with UAE labor law and employment regulations. BookB provides comprehensive staff management tools designed for Abu Dhabi's professional employment environment.
              </p>

              <p>
                Intelligent scheduling prevents understaffing during peak hours and weekend rushes while optimizing coverage during quieter periods based on historical patterns. Staff availability management lets team members from different backgrounds indicate preferences, religious observances, and time-off requests through user-friendly mobile interface.
              </p>

              <p>
                Skill-based assignment ensures clients receive qualified stylist expertise matching premium service expectations with appropriate certifications and experience levels. Commission tracking handles compensation structures while ensuring compliance with UAE labor law requirements for salary structures and benefits.
              </p>

              <p>
                Payroll reports generate data supporting UAE labor law compliance including gratuity calculations, visa costs tracking, and allowance management. Time clock integration tracks hours worked for accurate wage calculations respecting maximum working hours and overtime regulations under UAE employment law.
              </p>

              <p>
                Leave management tracks annual leave entitlements, sick leave, and religious holiday observances ensuring fair allocation across multicultural teams. Performance metrics compare productivity across team members helping identify top performers deserving recognition and development opportunities.
              </p>

              <p>
                Staff retention analytics identify turnover patterns important in Abu Dhabi's stable yet competitive employment market. Documentation management helps track visa expiries, certification renewals, and compliance requirements for diverse international workforce.
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
              <h3>Marketing Automation for Abu Dhabi Growth</h3>
              <p>
                Growing salon business in Abu Dhabi's refined market requires sophisticated marketing reaching discerning clients with compelling messages at optimal times. BookB provides marketing automation helping Abu Dhabi salon owners maintain client engagement and build reputation in the capital's quality-focused beauty market.
              </p>

              <p>
                Appointment reminder sequences reduce no-shows through SMS, email, and WhatsApp sent at timing proven effective for Abu Dhabi's professional population. Birthday campaigns celebrate clients automatically with personalized offers based on their service history encouraging celebratory salon visits.
              </p>

              <p>
                Re-engagement workflows target Abu Dhabi clients who haven't booked within typical intervals with compelling incentives considering work patterns and seasonal travel. New service announcements reach interested clients based on past behavior ensuring relevant targeting for premium services and wellness treatments.
              </p>

              <p>
                Last-minute availability notifications fill cancellations by reaching preferred clients interested in short-notice appointments. Package promotions encourage commitment through luxury bundles and membership programs appealing to Abu Dhabi's stability-seeking residents who value long-term relationships.
              </p>

              <p>
                Review request automation generates testimonials for Google, TripAdvisor, and regional platforms building online reputation crucial for attracting new residents and corporate relocations. Social media scheduling maintains consistent premium brand presence across platforms popular with Abu Dhabi demographics.
              </p>

              <p>
                Email segmentation delivers relevant messages to different client groups including long-term residents, new arrivals, corporate executives, and Emirati families ensuring appropriate targeting. Seasonal campaigns align with Ramadan, Eid celebrations, National Day festivities, and summer travel patterns when demand shifts.
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
          <h2>Pricing for Abu Dhabi Salons</h2>
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
