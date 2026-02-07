import Image from 'next/image'
import { images } from '@/lib/unsplash-images'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

export default function BirminghamSalonSoftware() {
  return (
    <>
      <Navigation />

      <section className="hero">
        <div className="hero-grid">
        <div className="hero-content">
          <h1>Birmingham Salon & Barbershop Software</h1>
          <p className="hero-subtitle">
            BookB helps Birmingham salons manage appointments, clients, and staff with powerful cloud software designed for UK beauty businesses. From Jewellery Quarter boutiques to Bullring shopping center locations, Edgbaston professionals to Digbeth independents, Birmingham salons choose BookB for reliable, affordable management software that understands UK business needs, VAT requirements, and local market conditions.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Trusted by 150+ Birmingham beauty businesses</p>
        </div>
          <div className="hero-image">
            <Image
              src={images.cities.birmingham.url}
              alt={images.cities.birmingham.alt}
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
          <h2>Perfect for Birmingham's Beauty Industry</h2>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Built for Birmingham Salons</h3>
              <p>

                Birmingham's diverse beauty market serves everyone from university students to affluent professionals, requiring flexible software handling varied pricing, services, and client expectations across different neighborhoods and demographics. BookB adapts perfectly to Birmingham's market with intelligent scheduling managing both appointment-based services popular with professional clients and walk-in traffic common in shopping centers like Bullring and Grand Central.

              </p>

              <p>

                Online booking serves busy Birmingham professionals scheduling between work commitments while reception tools handle spontaneous walk-ins browsing city center retail districts. Pricing flexibility accommodates student discounts near University of Birmingham, corporate packages for business districts, and premium services in upscale neighborhoods like Edgbaston, Harborne, and Sutton Coldfield.

              </p>

              <p>

                Multi-location management coordinates Birmingham salon groups operating city center locations alongside suburban neighborhoods like Solihull, Kings Heath, and Moseley. UK-specific features include automatic VAT calculation for HMRC reporting requirements, bank holiday scheduling for English public holidays when many Birmingham salons adjust hours, and payment processing through UK providers serving Midlands businesses.

              </p>

              <p>

                Staff scheduling handles varied shift patterns from early openings through late evenings serving Birmingham's diverse work schedules and shopping patterns. Marketing tools target specific Birmingham postcodes and neighborhoods effectively reaching potential clients in areas matching your salon positioning.

              </p>

              <p>

                Commission structures accommodate traditional employment, booth rental arrangements popular with Birmingham independents, and hybrid models balancing business needs with stylist preferences. Inventory management tracks products from major professional brands to local artisan lines popular with Birmingham's independent beauty culture and multicultural communities seeking specialized products.

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
              <h3>Client Management for Birmingham Market</h3>
              <p>

                Birmingham clients expect personalized service recognizing their individual needs, preferences, and history across multiple visits building long-term relationships. BookB provides comprehensive client management helping Birmingham salons deliver consistent experiences whether clients see their regular stylist or visit during busy periods requiring flexibility.

              </p>

              <p>

                Detailed client profiles document service history, color formulas, product preferences, and personal notes ensuring every team member can provide informed personalized service matching client expectations. Before and after photo galleries showcase transformations building visual portfolios for attracting new Birmingham clients researching salons through Instagram, Facebook, and website galleries.

              </p>

              <p>

                Treatment plans track progress toward long-term beauty goals like color transitions, hair repair, or style evolution over multiple appointments spanning months. Allergy alerts and sensitivity notes protect client safety while demonstrating professional care important to health-conscious Birmingham consumers with specific needs.

              </p>

              <p>

                Appointment history reveals patterns identifying loyal clients deserving VIP treatment and occasional visitors needing re-engagement to build regular routines. Service preferences guide upsell recommendations for complementary treatments and retail products aligned with documented client interests and previous purchases.

              </p>

              <p>

                Birthday tracking enables automatic celebration promotions building emotional connections beyond transactional service delivery and creating special occasion booking opportunities. Family account linking manages household scheduling common in Birmingham's suburban family neighborhoods and multi-generational communities.

              </p>

              <p>

                Referral tracking rewards clients who recommend your salon throughout Birmingham's social networks including workplaces, schools, and community organizations. Communication preferences respect how individuals want to receive appointment reminders, promotional messages, and service updates via SMS, email, or mobile app notifications.

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
              <h3>Staff Management Tools Birmingham Owners Need</h3>
              <p>

                Managing salon teams in Birmingham requires balancing labor costs with service quality, coordinating schedules across diverse needs, and tracking performance fairly. BookB provides comprehensive staff management designed for real Birmingham operations.

              </p>

              <p>

                Intelligent scheduling prevents understaffing during busy Saturdays and overstaffing during quiet periods based on historical booking data specific to your Birmingham location and neighborhood patterns. Staff availability management lets team members block personal commitments, indicate shift preferences, and request time off through mobile self-service reducing administrative burden on busy managers.

              </p>

              <p>

                Skill-based assignment matches client requests with appropriate stylist expertise based on certifications, training, and demonstrated competency ensuring quality service delivery. Commission tracking handles complex compensation including service percentages, retail bonuses, product cost deductions, and tiered performance incentives motivating Birmingham stylists toward business objectives.

              </p>

              <p>

                Payroll reports generate data formatted for UK payroll providers including PAYE, National Insurance, pension contributions, and holiday pay calculations required for Birmingham employees. Time clock integration tracks actual hours versus scheduled shifts for accurate wages and productivity analysis identifying training opportunities or scheduling improvements.

              </p>

              <p>

                Break management ensures UK Working Time Regulations compliance requiring rest breaks and time off between shifts protecting staff wellbeing and avoiding employment law violations. Holiday entitlement tracking manages statutory minimums plus company benefits ensuring fair allocation during popular vacation periods and preventing scheduling conflicts.

              </p>

              <p>

                Performance metrics compare team productivity including clients served, ticket averages, retail attachment, and rebooking rates identifying top performers and coaching opportunities. Training records document continuing education and certifications helping Birmingham stylists advance careers while building salon service capabilities.

              </p>

              <p>

                Retention analytics identify turnover patterns and at-risk team members worth retention efforts in Birmingham's competitive beauty employment market with opportunities across numerous salons.

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
              <h3>Marketing Automation for Birmingham Growth</h3>
              <p>

                Growing Birmingham salon business requires consistent marketing reaching right audiences with compelling messages without consuming excessive owner time on promotional activities. BookB automates marketing helping busy Birmingham owners maintain client engagement efficiently.

              </p>

              <p>

                Appointment reminders via SMS and email reduce no-shows through messaging sent at optimal timing maximizing attendance without annoying frequency. Birthday campaigns celebrate clients automatically with personalized offers based on service history encouraging celebratory visits and special occasion spending.

              </p>

              <p>

                Re-engagement workflows target Birmingham clients who haven't booked recently with incentives to return before they become permanently inactive or switch to competitors. New service announcements reach interested clients based on past behaviors and preferences ensuring relevant targeting and conversion rather than generic blasts.

              </p>

              <p>

                Last-minute availability notifications fill cancellations by reaching clients who indicated interest in short-notice discounted appointments improving utilization during gaps. Package promotions encourage prepayment through limited offers and bundle pricing building cash flow during slower periods while securing client commitment.

              </p>

              <p>

                Membership enrollment creates recurring revenue highlighting convenience and savings of subscription programs popular with regular Birmingham clients. Referral programs reward existing clients for recommendations with tracked credits applied when referred friends complete first appointments.

              </p>

              <p>

                Review automation generates testimonials for Google, Facebook, and beauty platforms building online reputation crucial for attracting new Birmingham clients researching options. Social media scheduling maintains consistent presence across platforms without daily manual work creating content calendars aligned with Birmingham events and seasons.

              </p>

              <p>

                Email segmentation delivers relevant messages based on client characteristics rather than one-size-fits-all approaches everyone ignores in crowded inboxes. Seasonal campaigns align with Birmingham weather, cultural events, and shopping patterns when demand for specific services naturally increases throughout the year.

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

      <section className="pricing">
        <div className="container">
          <h2>Affordable Pricing for Birmingham Salons</h2>
          <p className="section-subtitle">Professional software at Midlands-friendly prices</p>

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="plan-name">Starter</div>
              <div className="plan-price">£39<span className="plan-period">/mo</span></div>
              <p className="plan-description">For Birmingham independents</p>
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
              <p className="plan-description">For growing Birmingham salons</p>
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
              <p className="plan-description">For established Birmingham businesses</p>
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
              <p className="plan-description">For Birmingham salon groups</p>
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

      <Footer />
    </>
  );
}
