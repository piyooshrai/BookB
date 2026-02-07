import Image from 'next/image'
import { images } from '@/lib/unsplash-images'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

export default function MelbourneSalonSoftware() {
  return (
    <>
      <Navigation />

      <section className="hero">
        <div className="hero-grid">
        <div className="hero-content">
          <h1>Salon Software for Melbourne Hair & Beauty Businesses</h1>
          <p className="hero-subtitle">
            BookB helps Melbourne salons manage appointments, clients, staff, and payments with powerful cloud-based software designed for Australian beauty businesses. From CBD to Fitzroy, South Yarra and beyond, Melbourne salons trust BookB.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Trusted by 150+ Melbourne salons</p>
        </div>
          <div className="hero-image">
            <Image
              src={images.cities.melbourne.url}
              alt={images.cities.melbourne.alt}
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
          <h2>Perfect for Melbourne's Beauty Market</h2>
          <div className="feature-item">
            <div className="feature-content">
              <h3>Built for Melbourne's Thriving Beauty Market</h3>
              <p>
                Melbourne's beauty industry serves diverse clientele from Fitzroy creatives to Southbank professionals, requiring software that handles walk-ins and appointments, artisan services and premium treatments, individual stylists and established salon teams. BookB adapts perfectly to Melbourne market conditions with flexible scheduling handling both pre-booked appointments and walk-in traffic common in shopping districts like Bourke Street Mall and Chapel Street.
              </p>

              <p>
                Online booking works seamlessly for busy Melbourne professionals booking between meetings in Docklands and CBD while walk-in queue management serves spontaneous clients shopping in city center or exploring trendy neighborhoods like Brunswick and Collingwood. Pricing flexibility accommodates student discounts popular near Melbourne University and RMIT, corporate packages for Collins Street businesses, and premium services in upscale Toorak and Brighton locations.
              </p>

              <p>
                Staff scheduling coordinates teams across morning openings through late evening appointments serving Melbourne's varied work schedules and vibrant arts and dining culture. Multi-location management helps Melbourne salon groups operating in CBD, South Yarra, Fitzroy, and bayside locations maintaining consistent service standards across venues.
              </p>

              <p>
                Australian-specific features include automatic GST calculation and BAS reporting for ATO compliance, public holiday scheduling for Victorian holidays including Melbourne Cup Day, and payment processing through Australian providers including EFTPOS, bank transfers, and popular mobile payment systems. Marketing tools target Melbourne postcodes and suburbs effectively reaching potential clients in specific neighborhoods.
              </p>

              <p>
                Review management builds reputation on platforms popular with Melbourne consumers including Google, Facebook, and local lifestyle directories. Gift cards and packages sell well to Melbourne clients looking for birthday presents, Christmas gifts, and special occasion treats reflecting the city's culture of celebration.
              </p>

              <p>
                Commission structures handle varied compensation models from booth rental common in Melbourne's independent salon scene to traditional employment with performance bonuses and Fair Work compliant wage calculations. Inventory management tracks retail products from international beauty brands to local Australian product lines popular with Melbourne's environmentally conscious and locally-focused clientele.
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
              <h3>Client Management for Melbourne Salons</h3>
              <p>
                Melbourne clients expect personalized service and digital convenience matching the city's reputation for quality and innovation. BookB provides comprehensive client management helping Melbourne salons build loyal relationships in a competitive market with sophisticated, discerning customers who value both creativity and professionalism.
              </p>

              <p>
                Detailed client profiles track service history, color formulas, product preferences, and personal notes ensuring consistency whether clients see their regular stylist or try someone new during busy periods. Mobile booking enables Melbourne's urban professionals to schedule appointments from their phones while commuting on trams or waiting at coffee shops.
              </p>

              <p>
                Treatment plans track progress toward long-term goals like transitioning color, improving hair condition, or achieving specific style objectives over multiple visits. Appointment history shows patterns helping identify loyal clients worthy of VIP treatment and occasional visitors needing re-engagement campaigns tailored to Melbourne's style-conscious demographic.
              </p>

              <p>
                Service preferences guide recommendations for additional treatments and retail products aligned with each client's specific needs and aesthetic preferences. Birthday tracking enables celebration promotions and special offers building emotional connections beyond transactional service delivery in Melbourne's relationship-oriented culture.
              </p>

              <p>
                Referral tracking rewards clients who recommend your salon to friends, family, and colleagues throughout Melbourne's extensive social and professional networks. Client communication preferences respect how people want to receive appointment reminders, marketing messages, and service updates via SMS, email, or app notifications.
              </p>

              <p>
                Spending history identifies high-value clients deserving special attention and price-sensitive clients needing budget-friendly options during economic pressures. Family account linking manages household bookings common in Melbourne's suburban family neighborhoods across inner north, southeast, and western communities.
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
              <h3>Staff Management for Melbourne Teams</h3>
              <p>
                Managing salon staff in Melbourne requires balancing labor costs with service quality, coordinating schedules across diverse team needs, and tracking performance fairly while ensuring compliance with Fair Work Australia requirements. BookB provides comprehensive staff management tools designed for Melbourne's unique salon operations and employment culture.
              </p>

              <p>
                Intelligent scheduling prevents understaffing during busy Saturday rushes and overstaffing during quiet Monday mornings based on historical booking patterns specific to your Melbourne location and neighborhood. Staff availability management lets team members block personal appointments, indicate preferred shifts, and request time off through self-service mobile app reducing administrative burden.
              </p>

              <p>
                Skill-based assignment ensures clients receive appropriate stylist expertise matching requested services with staff certifications, training, and demonstrated competency levels. Commission tracking handles complex compensation structures including service percentages, retail bonuses, product usage deductions, and tiered performance incentives motivating Melbourne stylists toward business goals.
              </p>

              <p>
                Payroll reports generate data formatted for Australian payroll providers including superannuation contributions, PAYG tax withholding, and leave accrual calculations compliant with Fair Work Act and modern awards. Time clock integration tracks actual hours worked compared to scheduled shifts for accurate wage calculations and penalty rate compliance on weekends and public holidays.
              </p>

              <p>
                Break management ensures compliance with Fair Work requirements for rest breaks during shifts and time between working days protecting staff wellbeing. Holiday entitlement tracking manages annual leave, personal leave, and long service leave ensuring fair allocation and preventing scheduling conflicts during popular vacation periods including summer holidays and Melbourne Cup week.
              </p>

              <p>
                Performance metrics compare productivity across team members including clients served, average ticket values, retail attachment rates, and client rebooking percentages. Staff retention analytics identify turnover patterns and at-risk team members worth retention efforts in Melbourne's competitive employment market.
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
              <h3>Marketing Automation for Melbourne Growth</h3>
              <p>
                Growing salon business in competitive Melbourne market requires consistent marketing reaching right people with compelling messages at optimal times. BookB provides marketing automation helping busy Melbourne salon owners maintain client engagement without consuming hours daily on promotional activities in Australia's most competitive beauty market.
              </p>

              <p>
                Appointment reminder sequences reduce no-shows through SMS and email sent at timing proven to maximize attendance without annoying clients with excessive communication. Birthday campaigns celebrate clients automatically with personalized offers based on their service history and preferences encouraging celebratory salon visits reflecting Melbourne's culture of personal celebration.
              </p>

              <p>
                Re-engagement workflows target Melbourne clients who haven't booked within typical intervals with compelling incentives to return before they become permanently inactive. New service announcements reach interested clients based on past behavior and stated preferences ensuring relevant targeting and high conversion rates among Melbourne's trend-conscious demographic.
              </p>

              <p>
                Last-minute availability notifications fill same-day cancellations by reaching clients who previously indicated interest in short-notice discounted appointments. Package promotions encourage prepayment and commitment through limited-time offers and bundle pricing improving cash flow during slower winter months.
              </p>

              <p>
                Review request automation generates testimonials for Google, Facebook, and beauty-specific platforms building online reputation crucial for attracting new Melbourne clients researching salons. Social media scheduling maintains consistent brand presence across platforms popular with Melbourne demographics without daily manual posting requirements.
              </p>

              <p>
                Email segmentation delivers relevant messages based on client characteristics, behaviors, and preferences rather than generic blasts everyone ignores. Seasonal promotion campaigns align with Melbourne's changeable weather, major events like Spring Racing Carnival and Australian Open, and shopping patterns when demand for specific services naturally increases.
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
          <h2>Pricing for Melbourne Salons</h2>
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
