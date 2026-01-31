import Image from 'next/image'
import { images } from '@/lib/unsplash-images'

export default function ManchesterSalonSoftware() {
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
          <h1>Manchester Salon Management Software</h1>
          <p className="hero-subtitle">
            BookB provides cloud-based salon software perfect for Manchester's thriving beauty industry. From Northern Quarter boutiques to MediaCityUK salons, Deansgate chains to suburban neighborhood shops, Manchester salons choose BookB for reliable appointment booking, staff management, and client relationships that work perfectly with UK business practices, VAT requirements, and local payment systems.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Trusted by 200+ Manchester salons and beauty businesses</p>
        </div>
          <div className="hero-image">
            <Image
              src={images.cities.manchester.url}
              alt={images.cities.manchester.alt}
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
          <h2>Built for Manchester Salons and Barbershops</h2>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Perfect for Manchester's Beauty Market</h3>
              <p>
                Manchester's beauty industry serves diverse clientele from students to professionals, requiring software that handles walk-ins and appointments, budget services and premium treatments, individual stylists and large teams. BookB adapts perfectly to Manchester market conditions with flexible scheduling handling both pre-booked appointments and walk-in traffic common in city center locations and shopping districts like Trafford Centre. Online booking works seamlessly for busy Manchester professionals booking between meetings while walk-in queue management serves spontaneous clients shopping in Arndale Centre or exploring trendy neighborhoods. Pricing flexibility accommodates student discounts popular in Manchester's university areas, corporate packages for MediaCityUK businesses, and premium services in upscale Didsbury and Altrincham neighborhoods. Staff scheduling coordinates teams across morning openings through late evening appointments serving Manchester's varied work schedules and nightlife culture. Multi-location management helps Manchester salon groups operating in city center, Spinningfields, Salford Quays, and suburban locations like Chorlton and Sale. UK-specific features include automatic VAT calculation for HMRC reporting, bank holiday scheduling for English public holidays, and payment processing through UK providers serving Manchester businesses. Marketing tools target Manchester postcodes and neighborhoods effectively reaching potential clients in specific areas. Review management builds reputation on platforms popular with Manchester consumers researching beauty services. Gift cards and packages sell well to Manchester clients looking for birthday presents, Christmas gifts, and special occasion treats. Commission structures handle varied compensation models from booth rental common in Manchester to traditional employment with performance bonuses. Inventory management tracks retail products from professional beauty brands to local artisan product lines popular with Manchester's independent salon culture.
              </p>
            </div>
            <div className="feature-visual">
              <div style={{padding: '60px', background: '#f8fafc', borderRadius: '8px'}}>
                [Manchester Features Visual]
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Client Management Manchester Salons Need</h3>
              <p>
                Manchester clients expect personalized service and digital convenience matching experiences from other Manchester service providers and national brands. BookB provides comprehensive client management helping Manchester salons build loyal relationships in competitive market. Detailed client profiles track service history, color formulas, product preferences, and personal notes ensuring consistency whether clients see their regular stylist or try someone new during busy periods. Before and after photo galleries document transformations building portfolio for attracting new Manchester clients through social media and website marketing. Treatment plans track progress toward long-term goals like growing out color, improving hair health, or achieving specific style objectives over multiple visits. Allergy alerts and sensitivity notes protect client safety and demonstrate professional care important to Manchester's health-conscious consumers. Appointment history shows patterns helping identify loyal clients worthy of VIP treatment and occasional visitors needing re-engagement campaigns. Service preferences guide recommendations for additional treatments and retail products aligned with each client's specific needs and interests. Birthday tracking enables celebration promotions and special offers building emotional connections beyond transactional service delivery. Family account linking manages household bookings common in Manchester's suburban family neighborhoods and multi-generational immigrant communities. Referral tracking rewards clients who recommend your salon to friends, family, and colleagues throughout Manchester's social networks. Client communication preferences respect how people want to receive appointment reminders, marketing messages, and service updates via SMS, email, or app notifications. Spending history identifies high-value clients deserving special attention and price-sensitive clients needing budget-friendly options during economic pressures. Retention analysis shows which Manchester clients visit regularly versus one-time visitors helping target marketing effectively.
              </p>
            </div>
            <div className="feature-visual">
              <div style={{padding: '60px', background: '#f8fafc', borderRadius: '8px'}}>
                [Client Management Visual]
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Staff Management for Manchester Teams</h3>
              <p>
                Managing salon staff in Manchester requires balancing labor costs with service quality, coordinating schedules across diverse team needs, and tracking performance fairly across experienced professionals and junior stylists building careers. BookB provides comprehensive staff management tools designed for real Manchester salon operations. Intelligent scheduling prevents understaffing during busy Saturday rushes and overstaffing during quiet Monday mornings based on historical booking patterns specific to your Manchester location and neighborhood. Staff availability management lets team members block personal appointments, indicate preferred shifts, and request time off through self-service mobile app reducing administrative burden on managers. Skill-based assignment ensures clients receive appropriate stylist expertise matching requested services with staff certifications, training, and demonstrated competency levels. Commission tracking handles complex compensation structures including service percentages, retail bonuses, product usage deductions, and tiered performance incentives motivating Manchester stylists toward business goals. Payroll reports generate data formatted for UK payroll providers serving Manchester businesses including PAYE tax, National Insurance, pension contributions, and holiday pay calculations. Time clock integration tracks actual hours worked compared to scheduled shifts for accurate wage calculations and productivity analysis identifying training needs. Break management ensures compliance with UK Working Time Regulations requiring rest breaks during shifts and time off between working days protecting staff wellbeing. Holiday entitlement tracking manages statutory minimums and additional company benefits ensuring fair allocation and preventing scheduling conflicts during popular vacation periods. Performance metrics compare productivity across team members including clients served, average ticket values, retail attachment rates, and client rebooking percentages. Training records document continuing education, advanced certifications, and skill development helping Manchester stylists progress careers while building your salon's service capabilities. Staff retention analytics identify turnover patterns and at-risk team members worth retention efforts in Manchester's competitive employment market.
              </p>
            </div>
            <div className="feature-visual">
              <div style={{padding: '60px', background: '#f8fafc', borderRadius: '8px'}}>
                [Staff Management Visual]
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Marketing Automation for Manchester Growth</h3>
              <p>
                Growing salon business in competitive Manchester market requires consistent marketing reaching right people with compelling messages at optimal times. BookB provides marketing automation helping busy Manchester salon owners maintain client engagement without consuming hours daily on promotional activities. Appointment reminder sequences reduce no-shows through SMS and email sent at timing proven to maximize attendance without annoying clients with excessive communication. Birthday campaigns celebrate clients automatically with personalized offers based on their service history and preferences encouraging celebratory salon visits. Re-engagement workflows target Manchester clients who haven't booked within typical intervals with compelling incentives to return before they become permanently inactive. New service announcements reach interested clients based on past behavior and stated preferences ensuring relevant targeting and high conversion rates. Last-minute availability notifications fill same-day cancellations by reaching clients who previously indicated interest in short-notice discounted appointments. Package promotions encourage prepayment and commitment through limited-time offers and bundle pricing improving cash flow during slower periods. Membership enrollment campaigns create recurring revenue streams highlighting convenience and savings of monthly subscription programs. Referral incentive programs reward existing clients for bringing friends with tracked credits applied automatically when referrals complete first appointments. Review request automation generates testimonials for Google, Facebook, and beauty-specific platforms building online reputation crucial for attracting new Manchester clients. Social media scheduling maintains consistent brand presence across platforms popular with Manchester demographics without daily manual posting requirements. Email segmentation delivers relevant messages based on client characteristics, behaviors, and preferences rather than generic blasts everyone ignores. Seasonal promotion campaigns align with Manchester weather, cultural events, and shopping patterns when demand for specific services naturally increases. Client win-back campaigns target inactive clients with aggressive offers acknowledging absence and incentivizing return before relationships end permanently.
              </p>
            </div>
            <div className="feature-visual">
              <div style={{padding: '60px', background: '#f8fafc', borderRadius: '8px'}}>
                [Marketing Visual]
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2>Affordable Pricing for Manchester Salons</h2>
          <p className="section-subtitle">Professional software at prices that work in Manchester</p>

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="plan-name">Starter</div>
              <div className="plan-price">£39<span className="plan-period">/mo</span></div>
              <p className="plan-description">Perfect for Manchester independents</p>
              <ul className="plan-features">
                <li>Up to 2 staff members</li>
                <li>Unlimited appointments</li>
                <li>Online booking</li>
                <li>Client management</li>
                <li>Email support</li>
              </ul>
              <a href="#trial" className="btn btn-primary plan-cta">Start Free Trial</a>
            </div>

            <div className="pricing-card featured">
              <div className="popular-badge">MOST POPULAR</div>
              <div className="plan-name">Professional</div>
              <div className="plan-price">£79<span className="plan-period">/mo</span></div>
              <p className="plan-description">For growing Manchester salons</p>
              <ul className="plan-features">
                <li>Up to 10 staff members</li>
                <li>Everything in Starter</li>
                <li>SMS notifications</li>
                <li>Advanced reporting</li>
                <li>Marketing automation</li>
                <li>Phone support</li>
              </ul>
              <a href="#trial" className="btn btn-primary plan-cta">Start Free Trial</a>
            </div>

            <div className="pricing-card">
              <div className="plan-name">Business</div>
              <div className="plan-price">£159<span className="plan-period">/mo</span></div>
              <p className="plan-description">For established Manchester businesses</p>
              <ul className="plan-features">
                <li>Up to 25 staff members</li>
                <li>Everything in Professional</li>
                <li>Multi-location support</li>
                <li>Priority support</li>
                <li>Account manager</li>
              </ul>
              <a href="#trial" className="btn btn-primary plan-cta">Start Free Trial</a>
            </div>

            <div className="pricing-card">
              <div className="plan-name">Enterprise</div>
              <div className="plan-price">Custom</div>
              <p className="plan-description">For Manchester salon groups</p>
              <ul className="plan-features">
                <li>Unlimited staff</li>
                <li>Everything in Business</li>
                <li>Custom development</li>
                <li>SLA guarantees</li>
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
