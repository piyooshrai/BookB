import Image from 'next/image'
import { images } from '@/lib/unsplash-images'

export default function SydneySalonSoftware() {
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
          <h1>Salon Software for Sydney Hair & Beauty Businesses</h1>
          <p className="hero-subtitle">
            BookB helps Sydney salons manage appointments, clients, staff, and payments with powerful cloud-based software designed for Australian beauty businesses. From CBD to Bondi, Surry Hills and beyond, Sydney salons trust BookB.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Trusted by 150+ Sydney salons</p>
        </div>
          <div className="hero-image">
            <Image
              src={images.cities.sydney.url}
              alt={images.cities.sydney.alt}
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
          <h2>Perfect for Sydney's Beauty Market</h2>
          <div className="feature-item">
            <div className="feature-content">
              <h3>Built for Sydney's Competitive Beauty Market</h3>
              <p>
                Sydney's beauty industry serves diverse clientele from Bondi beachgoers to CBD professionals, requiring software that handles walk-ins and appointments, budget services and luxury treatments, individual stylists and large salon teams. BookB adapts perfectly to Sydney market conditions with flexible scheduling handling both pre-booked appointments and walk-in traffic common in shopping districts like Pitt Street Mall and Westfield Bondi Junction.
              </p>

              <p>
                Online booking works seamlessly for busy Sydney professionals booking between meetings in Barangaroo and North Sydney while walk-in queue management serves spontaneous clients shopping in CBD or exploring trendy neighborhoods like Surry Hills and Newtown. Pricing flexibility accommodates student discounts popular near University of Sydney, corporate packages for Martin Place businesses, and premium services in upscale Double Bay and Mosman locations.
              </p>

              <p>
                Staff scheduling coordinates teams across morning openings through late evening appointments serving Sydney's varied work schedules and vibrant social culture. Multi-location management helps Sydney salon groups operating in CBD, Bondi, Parramatta, and Northern Beaches locations maintaining consistent service standards across venues.
              </p>

              <p>
                Australian-specific features include automatic GST calculation and BAS reporting for ATO compliance, public holiday scheduling for NSW holidays, and payment processing through Australian providers including EFTPOS, bank transfers, and popular mobile payment systems. Marketing tools target Sydney postcodes and suburbs effectively reaching potential clients in specific neighborhoods.
              </p>

              <p>
                Review management builds reputation on platforms popular with Sydney consumers including Google, Facebook, and beauty-specific directories. Gift cards and packages sell well to Sydney clients looking for birthday presents, Christmas gifts, and special occasion treats for friends and family.
              </p>

              <p>
                Commission structures handle varied compensation models from booth rental common in Sydney to traditional employment with performance bonuses and Fair Work compliant wage calculations. Inventory management tracks retail products from international beauty brands to local Australian product lines popular with environmentally conscious Sydney clientele.
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
              <h3>Client Management for Sydney Salons</h3>
              <p>
                Sydney clients expect personalized service and digital convenience matching experiences from other service providers across the city. BookB provides comprehensive client management helping Sydney salons build loyal relationships in a highly competitive market with discerning customers.
              </p>

              <p>
                Detailed client profiles track service history, color formulas, product preferences, and personal notes ensuring consistency whether clients see their regular stylist or try someone new during busy periods. Mobile booking enables Sydney's on-the-go professionals to schedule appointments from their phones while commuting on trains or waiting between meetings.
              </p>

              <p>
                Treatment plans track progress toward long-term goals like growing out color, improving hair health after beach exposure, or achieving specific style objectives over multiple visits. Appointment history shows patterns helping identify loyal clients worthy of VIP treatment and occasional visitors needing re-engagement campaigns.
              </p>

              <p>
                Service preferences guide recommendations for additional treatments and retail products aligned with each client's specific needs and lifestyle. Birthday tracking enables celebration promotions and special offers building emotional connections beyond transactional service delivery common in Sydney's relationship-focused culture.
              </p>

              <p>
                Referral tracking rewards clients who recommend your salon to friends, family, and colleagues throughout Sydney's extensive social networks. Client communication preferences respect how people want to receive appointment reminders, marketing messages, and service updates via SMS, email, or app notifications.
              </p>

              <p>
                Spending history identifies high-value clients deserving special attention and price-sensitive clients needing budget-friendly options during economic pressures. Family account linking manages household bookings common in Sydney's suburban family neighborhoods across Inner West, North Shore, and Eastern Suburbs communities.
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
              <h3>Staff Management for Sydney Teams</h3>
              <p>
                Managing salon staff in Sydney requires balancing labor costs with service quality, coordinating schedules across diverse team needs, and tracking performance fairly while ensuring compliance with Fair Work Australia requirements. BookB provides comprehensive staff management tools designed for real Sydney salon operations.
              </p>

              <p>
                Intelligent scheduling prevents understaffing during busy Saturday rushes and overstaffing during quiet Monday mornings based on historical booking patterns specific to your Sydney location and neighborhood. Staff availability management lets team members block personal appointments, indicate preferred shifts, and request time off through self-service mobile app reducing administrative burden.
              </p>

              <p>
                Skill-based assignment ensures clients receive appropriate stylist expertise matching requested services with staff certifications, training, and demonstrated competency levels. Commission tracking handles complex compensation structures including service percentages, retail bonuses, product usage deductions, and tiered performance incentives motivating Sydney stylists toward business goals.
              </p>

              <p>
                Payroll reports generate data formatted for Australian payroll providers including superannuation contributions, PAYG tax withholding, and leave accrual calculations compliant with Fair Work Act and modern awards. Time clock integration tracks actual hours worked compared to scheduled shifts for accurate wage calculations and penalty rate compliance.
              </p>

              <p>
                Break management ensures compliance with Fair Work requirements for rest breaks during shifts and time between working days protecting staff wellbeing. Holiday entitlement tracking manages annual leave, personal leave, and long service leave ensuring fair allocation and preventing scheduling conflicts during popular vacation periods.
              </p>

              <p>
                Performance metrics compare productivity across team members including clients served, average ticket values, retail attachment rates, and client rebooking percentages. Staff retention analytics identify turnover patterns and at-risk team members worth retention efforts in Sydney's competitive employment market.
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
              <h3>Marketing Automation for Sydney Growth</h3>
              <p>
                Growing salon business in competitive Sydney market requires consistent marketing reaching right people with compelling messages at optimal times. BookB provides marketing automation helping busy Sydney salon owners maintain client engagement without consuming hours daily on promotional activities.
              </p>

              <p>
                Appointment reminder sequences reduce no-shows through SMS and email sent at timing proven to maximize attendance without annoying clients with excessive communication. Birthday campaigns celebrate clients automatically with personalized offers based on their service history and preferences encouraging celebratory salon visits.
              </p>

              <p>
                Re-engagement workflows target Sydney clients who haven't booked within typical intervals with compelling incentives to return before they become permanently inactive. New service announcements reach interested clients based on past behavior and stated preferences ensuring relevant targeting and high conversion rates.
              </p>

              <p>
                Last-minute availability notifications fill same-day cancellations by reaching clients who previously indicated interest in short-notice discounted appointments. Package promotions encourage prepayment and commitment through limited-time offers and bundle pricing improving cash flow during slower periods.
              </p>

              <p>
                Review request automation generates testimonials for Google, Facebook, and beauty-specific platforms building online reputation crucial for attracting new Sydney clients researching salons. Social media scheduling maintains consistent brand presence across platforms popular with Sydney demographics without daily manual posting requirements.
              </p>

              <p>
                Email segmentation delivers relevant messages based on client characteristics, behaviors, and preferences rather than generic blasts everyone ignores. Seasonal promotion campaigns align with Sydney weather patterns, beach season preparation, and local events when demand for specific services naturally increases.
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
          <h2>Pricing for Sydney Salons</h2>
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
