import Image from 'next/image'
import { images } from '@/lib/unsplash-images'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

export default function BrisbaneSalonSoftware() {
  return (
    <>
      <Navigation />

      <section className="hero">
        <div className="hero-grid">
        <div className="hero-content">
          <h1>Salon Software for Brisbane Hair & Beauty Businesses</h1>
          <p className="hero-subtitle">
            BookB helps Brisbane salons manage appointments, clients, staff, and payments with powerful cloud-based software designed for Australian beauty businesses. From CBD to South Bank, Fortitude Valley and beyond, Brisbane salons trust BookB.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Trusted by 150+ Brisbane salons</p>
        </div>
          <div className="hero-image">
            <Image
              src={images.cities.brisbane.url}
              alt={images.cities.brisbane.alt}
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
          <h2>Perfect for Brisbane's Beauty Market</h2>
          <div className="feature-item">
            <div className="feature-content">
              <h3>Built for Brisbane's Growing Beauty Market</h3>
              <p>
                Brisbane's beauty industry serves diverse clientele from Fortitude Valley trendsetters to CBD professionals, requiring software that handles walk-ins and appointments, casual services and premium treatments, individual stylists and growing salon teams. BookB adapts perfectly to Brisbane market conditions with flexible scheduling handling both pre-booked appointments and walk-in traffic common in shopping districts like Queen Street Mall and James Street.
              </p>

              <p>
                Online booking works seamlessly for busy Brisbane professionals booking between meetings in CBD and South Bank while walk-in queue management serves spontaneous clients shopping in city center or exploring vibrant neighborhoods like New Farm and West End. Pricing flexibility accommodates student discounts popular near University of Queensland, corporate packages for business district clients, and premium services in upscale Ascot and Bulimba locations.
              </p>

              <p>
                Staff scheduling coordinates teams across morning openings through late evening appointments serving Brisbane's relaxed yet professional lifestyle. Multi-location management helps Brisbane salon groups operating in CBD, Fortitude Valley, Indooroopilly, and northside locations maintaining consistent service standards across venues.
              </p>

              <p>
                Australian-specific features include automatic GST calculation and BAS reporting for ATO compliance, public holiday scheduling for Queensland holidays including Ekka Show Day, and payment processing through Australian providers including EFTPOS, bank transfers, and popular mobile payment systems. Marketing tools target Brisbane postcodes and suburbs effectively reaching potential clients in specific neighborhoods.
              </p>

              <p>
                Review management builds reputation on platforms popular with Brisbane consumers including Google, Facebook, and local lifestyle directories. Gift cards and packages sell well to Brisbane clients looking for birthday presents, Christmas gifts, and special occasion treats reflecting the city's friendly, gift-giving culture.
              </p>

              <p>
                Commission structures handle varied compensation models from booth rental common in Brisbane to traditional employment with performance bonuses and Fair Work compliant wage calculations. Inventory management tracks retail products from international beauty brands to local Australian product lines popular with Brisbane's health-conscious and environmentally aware clientele.
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
              <h3>Client Management for Brisbane Salons</h3>
              <p>
                Brisbane clients expect personalized service and digital convenience matching the city's modern, tech-savvy character. BookB provides comprehensive client management helping Brisbane salons build loyal relationships in a growing market with customers who value both quality service and friendly, approachable interactions.
              </p>

              <p>
                Detailed client profiles track service history, color formulas, product preferences, and personal notes ensuring consistency whether clients see their regular stylist or try someone new during busy periods. Mobile booking enables Brisbane's mobile-first professionals to schedule appointments from their phones while enjoying the city's outdoor lifestyle.
              </p>

              <p>
                Treatment plans track progress toward long-term goals like transitioning color, protecting hair from Brisbane's sun and humidity, or achieving specific style objectives over multiple visits. Appointment history shows patterns helping identify loyal clients worthy of VIP treatment and occasional visitors needing re-engagement campaigns.
              </p>

              <p>
                Service preferences guide recommendations for additional treatments and retail products aligned with each client's specific needs and Brisbane's subtropical climate considerations. Birthday tracking enables celebration promotions and special offers building emotional connections beyond transactional service delivery.
              </p>

              <p>
                Referral tracking rewards clients who recommend your salon to friends, family, and colleagues throughout Brisbane's friendly social networks. Client communication preferences respect how people want to receive appointment reminders, marketing messages, and service updates via SMS, email, or app notifications.
              </p>

              <p>
                Spending history identifies high-value clients deserving special attention and price-sensitive clients needing budget-friendly options. Family account linking manages household bookings common in Brisbane's family-oriented suburban neighborhoods across northside, southside, and western communities.
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
              <h3>Staff Management for Brisbane Teams</h3>
              <p>
                Managing salon staff in Brisbane requires balancing labor costs with service quality, coordinating schedules across diverse team needs, and tracking performance fairly while ensuring compliance with Fair Work Australia requirements. BookB provides comprehensive staff management tools designed for Brisbane's unique salon operations and employment culture.
              </p>

              <p>
                Intelligent scheduling prevents understaffing during busy Saturday rushes and overstaffing during quiet periods based on historical booking patterns specific to your Brisbane location and neighborhood. Staff availability management lets team members block personal appointments, indicate preferred shifts, and request time off through self-service mobile app reducing administrative burden.
              </p>

              <p>
                Skill-based assignment ensures clients receive appropriate stylist expertise matching requested services with staff certifications, training, and demonstrated competency levels. Commission tracking handles complex compensation structures including service percentages, retail bonuses, product usage deductions, and tiered performance incentives motivating Brisbane stylists toward business goals.
              </p>

              <p>
                Payroll reports generate data formatted for Australian payroll providers including superannuation contributions, PAYG tax withholding, and leave accrual calculations compliant with Fair Work Act and modern awards. Time clock integration tracks actual hours worked compared to scheduled shifts for accurate wage calculations and penalty rate compliance.
              </p>

              <p>
                Break management ensures compliance with Fair Work requirements for rest breaks during shifts and time between working days protecting staff wellbeing. Holiday entitlement tracking manages annual leave, personal leave, and long service leave ensuring fair allocation and preventing scheduling conflicts during popular vacation periods including school holidays and Christmas season.
              </p>

              <p>
                Performance metrics compare productivity across team members including clients served, average ticket values, retail attachment rates, and client rebooking percentages. Staff retention analytics identify turnover patterns and at-risk team members worth retention efforts in Brisbane's competitive employment market.
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
              <h3>Marketing Automation for Brisbane Growth</h3>
              <p>
                Growing salon business in Brisbane's expanding market requires consistent marketing reaching right people with compelling messages at optimal times. BookB provides marketing automation helping busy Brisbane salon owners maintain client engagement without consuming hours daily on promotional activities.
              </p>

              <p>
                Appointment reminder sequences reduce no-shows through SMS and email sent at timing proven to maximize attendance without annoying clients with excessive communication. Birthday campaigns celebrate clients automatically with personalized offers based on their service history and preferences encouraging celebratory salon visits.
              </p>

              <p>
                Re-engagement workflows target Brisbane clients who haven't booked within typical intervals with compelling incentives to return before they become permanently inactive. New service announcements reach interested clients based on past behavior and stated preferences ensuring relevant targeting and high conversion rates.
              </p>

              <p>
                Last-minute availability notifications fill same-day cancellations by reaching clients who previously indicated interest in short-notice discounted appointments. Package promotions encourage prepayment and commitment through limited-time offers and bundle pricing improving cash flow during slower winter months.
              </p>

              <p>
                Review request automation generates testimonials for Google, Facebook, and beauty-specific platforms building online reputation crucial for attracting new Brisbane clients researching salons. Social media scheduling maintains consistent brand presence across platforms popular with Brisbane demographics without daily manual posting requirements.
              </p>

              <p>
                Email segmentation delivers relevant messages based on client characteristics, behaviors, and preferences rather than generic blasts everyone ignores. Seasonal promotion campaigns align with Brisbane's subtropical weather patterns, major events like Brisbane Festival and Royal Queensland Show, and shopping patterns when demand for specific services naturally increases.
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
          <h2>Pricing for Brisbane Salons</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="plan-name">Starter</div>
              <div className="plan-price">AUD $30<span className="plan-period">/mo</span></div>
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
              <div className="plan-price">AUD $75<span className="plan-period">/mo</span></div>
              <ul className="plan-features">
                <li>Up to 10 staff</li>
                <li>All Starter features</li>
                <li>Advanced analytics</li>
              </ul>
              <a href="#trial" className="btn btn-primary plan-cta">Start Free Trial</a>
            </div>
            <div className="pricing-card">
              <div className="plan-name">Business</div>
              <div className="plan-price">AUD $150<span className="plan-period">/mo</span></div>
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
