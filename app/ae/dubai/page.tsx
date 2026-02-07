import Image from 'next/image'
import { images } from '@/lib/unsplash-images'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

export default function DubaiSalonSoftware() {
  return (
    <>
      <Navigation />

      <section className="hero">
        <div className="hero-grid">
        <div className="hero-content">
          <h1>Salon Software for Dubai Hair & Beauty Businesses</h1>
          <p className="hero-subtitle">
            BookB helps Dubai salons manage appointments, clients, staff, and payments with powerful cloud-based software designed specifically for UAE beauty businesses. From Dubai Mall to Marina, Downtown and beyond, Dubai salons trust BookB for reliable, affordable salon management.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Trusted by 200+ Dubai salons and growing</p>
        </div>
          <div className="hero-image">
            <Image
              src={images.cities.dubai.url}
              alt={images.cities.dubai.alt}
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
          <h2>Perfect for Dubai's Beauty Market</h2>
          <div className="feature-item">
            <div className="feature-content">
              <h3>Built for Dubai's Luxury Beauty Market</h3>
              <p>
                Dubai's beauty industry serves discerning international clientele from Dubai Mall to Marina, requiring software that handles luxury appointments and premium treatments, individual boutique salons and large spa chains. BookB adapts perfectly to Dubai's high-standards market with flexible scheduling handling pre-booked VIP appointments and walk-in traffic common in shopping destinations like Mall of the Emirates and Dubai Marina Mall.
              </p>

              <p>
                Online booking works seamlessly for busy Dubai professionals and affluent residents booking between meetings in DIFC and Business Bay while mobile-friendly interfaces serve tech-savvy expatriate communities. Pricing flexibility accommodates luxury services in premium locations like Jumeirah and Palm Jumeirah, mid-range services in JBR and Marina, and accessible pricing in emerging areas like JVC and Dubai South.
              </p>

              <p>
                Staff scheduling coordinates multicultural teams across morning openings through late evening appointments serving Dubai's diverse population and extended shopping hours. Multi-location management helps Dubai salon groups operating in multiple emirates and mall locations maintaining consistent luxury service standards across venues.
              </p>

              <p>
                UAE-specific features include VAT calculation and compliance reporting, public holiday scheduling for UAE national holidays and cultural observances, and payment processing supporting AED and major international currencies. Marketing tools target Dubai's diverse neighborhoods and communities effectively reaching expatriate populations from different regions.
              </p>

              <p>
                Review management builds reputation on platforms popular with Dubai consumers including Google, TripAdvisor, and regional lifestyle directories. Gift cards and packages sell well to Dubai's gift-conscious culture for birthdays, weddings, and special occasions.
              </p>

              <p>
                Commission structures handle varied compensation models respecting UAE labor law while motivating staff performance. Inventory management tracks premium international beauty brands and luxury product lines expected by Dubai's sophisticated clientele with high purchasing power and brand awareness.
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
              <h3>Client Management for Dubai Salons</h3>
              <p>
                Dubai clients expect exceptional personalized service and cutting-edge digital convenience matching the city's reputation for luxury and innovation. BookB provides comprehensive client management helping Dubai salons build loyal relationships with internationally experienced, high-expectation customers who compare service quality to world-class standards.
              </p>

              <p>
                Detailed client profiles track service history, color formulas, product preferences, and cultural considerations ensuring consistency whether clients see their regular stylist or try someone new during busy periods. Multilingual support accommodates Dubai's multicultural clientele communicating in Arabic, English, and other languages commonly spoken across diverse communities.
              </p>

              <p>
                Treatment plans track progress toward long-term beauty goals accounting for Dubai's climate challenges and luxury lifestyle preferences. Appointment history shows patterns helping identify VIP clients deserving exclusive treatment and new residents needing special welcome experiences building long-term loyalty.
              </p>

              <p>
                Service preferences guide recommendations for premium treatments and luxury retail products aligned with each client's specific needs and sophisticated tastes. Birthday tracking enables celebration promotions and special offers building emotional connections in Dubai's socially active, celebration-focused culture.
              </p>

              <p>
                Referral tracking rewards clients who recommend your salon to friends, family, and colleagues throughout Dubai's extensive expatriate and local networks. Client communication preferences respect how people want to receive appointment reminders, marketing messages, and exclusive offers via SMS, email, WhatsApp, or app notifications.
              </p>

              <p>
                Spending history identifies high-value clients deserving concierge-level service and opportunities for upselling premium services. Family account linking manages household bookings common among Dubai's family-oriented communities across villas, apartments, and gated developments.
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
              <h3>Staff Management for Dubai Teams</h3>
              <p>
                Managing multicultural salon staff in Dubai requires balancing service excellence with labor costs, coordinating diverse teams across different backgrounds, and ensuring compliance with UAE labor law and visa requirements. BookB provides comprehensive staff management tools designed for Dubai's unique employment environment and luxury service standards.
              </p>

              <p>
                Intelligent scheduling prevents understaffing during peak shopping hours and weekend rushes while optimizing coverage during quieter periods based on historical booking patterns. Staff availability management lets team members from different nationalities and cultures indicate preferences, religious observances, and time-off requests through intuitive mobile app.
              </p>

              <p>
                Skill-based assignment ensures clients receive internationally trained stylist expertise matching luxury service expectations with staff certifications and demonstrated competency levels. Commission tracking handles complex compensation structures while ensuring compliance with UAE labor law requirements for salary structures and end-of-service benefits.
              </p>

              <p>
                Payroll reports generate data supporting UAE labor law compliance including gratuity calculations, visa costs tracking, and accommodation allowances. Time clock integration tracks actual hours worked for accurate wage calculations respecting maximum working hours and overtime regulations under UAE employment law.
              </p>

              <p>
                Leave management tracks annual leave entitlements, sick leave, and cultural holiday observances ensuring fair allocation across multicultural teams. Performance metrics compare productivity across team members helping identify top performers deserving recognition and additional training opportunities for skill development.
              </p>

              <p>
                Staff retention analytics identify turnover patterns important in Dubai's competitive employment market with high staff mobility across emirates and international relocations. Documentation management helps track visa expiries, certification renewals, and compliance requirements for multicultural workforce.
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
              <h3>Marketing Automation for Dubai Growth</h3>
              <p>
                Growing salon business in Dubai's competitive luxury market requires sophisticated marketing reaching affluent, discerning clients with compelling messages at optimal times. BookB provides marketing automation helping Dubai salon owners maintain client engagement and attract new customers in one of the world's most competitive beauty markets.
              </p>

              <p>
                Appointment reminder sequences reduce no-shows through SMS, email, and WhatsApp sent at timing proven effective for Dubai's mobile-first population. Birthday campaigns celebrate clients automatically with personalized luxury offers based on their service history and preferences encouraging celebratory salon visits.
              </p>

              <p>
                Re-engagement workflows target Dubai clients who haven't booked within typical intervals with compelling incentives considering the transient nature of expatriate population. New service announcements reach interested clients based on past behavior ensuring relevant targeting for premium services and seasonal treatments.
              </p>

              <p>
                Last-minute availability notifications fill cancellations by reaching VIP clients interested in exclusive short-notice appointments. Package promotions encourage commitment through luxury bundles and membership programs appealing to Dubai's affluent residents seeking premium experiences and value.
              </p>

              <p>
                Review request automation generates testimonials for Google, TripAdvisor, and regional platforms building online reputation crucial for attracting new residents and visitors researching Dubai salons. Social media scheduling maintains consistent luxury brand presence across platforms popular with Dubai demographics including Instagram and Facebook.
              </p>

              <p>
                Email segmentation delivers relevant messages to different client groups including long-term residents, new arrivals, tourists, and business visitors ensuring appropriate targeting. Seasonal campaigns align with Dubai Shopping Festival, Ramadan, Eid celebrations, and summer travel patterns when demand patterns shift significantly.
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
          <h2>Pricing for Dubai Salons</h2>
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

      <Footer />
    </>
  );
}
