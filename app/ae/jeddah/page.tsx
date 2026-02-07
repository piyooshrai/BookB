import Image from 'next/image'
import { images } from '@/lib/unsplash-images'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

export default function JeddahSalonSoftware() {
  return (
    <>
      <Navigation />

      <section className="hero">
        <div className="hero-grid">
        <div className="hero-content">
          <h1>Salon Software for Jeddah Hair & Beauty Businesses</h1>
          <p className="hero-subtitle">
            BookB helps Jeddah salons manage appointments, clients, staff, and payments with powerful cloud-based software designed specifically for UAE beauty businesses. From Corniche to Red Sea Mall, Al Hamra and beyond, Jeddah salons trust BookB for reliable, affordable salon management.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Trusted by 200+ Jeddah salons and growing</p>
        </div>
          <div className="hero-image">
            <Image
              src={images.cities.jeddah.url}
              alt={images.cities.jeddah.alt}
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
          <h2>Perfect for Jeddah's Beauty Market</h2>
          <div className="feature-item">
            <div className="feature-content">
              <h3>Built for Jeddah's Cosmopolitan Beauty Market</h3>
              <p>
                Jeddah's beauty industry serves the commercial capital's diverse population from Red Sea Mall to Tahlia Street, requiring software that handles premium appointments and luxury treatments, traditional services and modern trends. BookB adapts perfectly to Jeddah's cosmopolitan market with flexible scheduling handling pre-booked appointments and walk-in traffic common in shopping destinations like Mall of Arabia and Stars Avenue.
              </p>

              <p>
                Online booking works seamlessly for Jeddah's sophisticated clientele including business professionals, well-traveled residents, and international visitors while mobile-friendly interfaces serve tech-savvy communities. Pricing flexibility accommodates luxury services in premium areas like Al Shati and Al Rawdah, established salons in Al Hamra and Al Zahra, and accessible options in growing residential neighborhoods.
              </p>

              <p>
                Staff scheduling coordinates teams across morning openings through evening appointments serving Jeddah's cosmopolitan population and extended shopping culture. Multi-location management helps salon groups operating across north and south Jeddah maintaining consistent service standards while accommodating different neighborhood preferences and facility types.
              </p>

              <p>
                Saudi-specific features include VAT calculation and Zakat compliance reporting, public holiday scheduling for Saudi national holidays and religious observances, and payment processing supporting SAR and international currencies. Marketing tools target Jeddah's diverse neighborhoods effectively reaching Saudi families, expatriate communities, and international visitors.
              </p>

              <p>
                Review management builds reputation through satisfied clients and digital platforms while maintaining cultural appropriateness. Gift cards and packages sell well in Jeddah's celebration-oriented culture for weddings, Eid festivities, Umrah visits, and special occasions.
              </p>

              <p>
                Commission structures handle varied compensation models respecting Saudi labor law and cultural expectations while motivating performance. Inventory management tracks premium international beauty brands and luxury products expected by Jeddah's cosmopolitan, well-traveled clientele with sophisticated tastes and high standards.
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
              <h3>Client Management for Jeddah Salons</h3>
              <p>
                Jeddah clients expect premium personalized service and modern convenience matching the city's cosmopolitan character and commercial sophistication. BookB provides comprehensive client management helping Jeddah salons build loyal relationships with discerning customers who value quality service, cultural respect, and contemporary amenities.
              </p>

              <p>
                Detailed client profiles track service history, treatment preferences, product selections, and cultural considerations ensuring privacy and consistency. Multilingual support accommodates Arabic-speaking Saudi clients, international residents, and seasonal visitors including pilgrims and business travelers, with culturally appropriate communication.
              </p>

              <p>
                Treatment plans track progress toward long-term beauty goals accounting for Jeddah's Red Sea coastal climate and active lifestyle. Appointment history shows patterns helping identify loyal local clients and seasonal visitors returning during Umrah and Hajj periods or summer visits.
              </p>

              <p>
                Service preferences guide recommendations for premium treatments and luxury products aligned with each client's needs and sophisticated expectations. Special occasion tracking enables celebration promotions for weddings, Ramadan, Eid, and family events building connections in Jeddah's socially active, family-centered culture.
              </p>

              <p>
                Referral tracking rewards clients who recommend your salon to friends and family throughout Jeddah's extensive social networks where word-of-mouth carries significant influence. Client communication preferences respect cultural norms for appropriate contact methods via SMS, WhatsApp, or direct calls.
              </p>

              <p>
                Spending history identifies premium clients deserving VIP treatment and personalized attention. Family account linking manages household bookings common among Jeddah's extended family structures living across the city's diverse neighborhoods from coastal areas to eastern districts.
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
              <h3>Staff Management for Jeddah Teams</h3>
              <p>
                Managing salon staff in Jeddah requires balancing service excellence with cultural considerations, coordinating diverse teams in ladies-only environments, and ensuring compliance with Saudi labor law and Saudization requirements. BookB provides comprehensive staff management tools designed for Jeddah's cosmopolitan employment environment and cultural context.
              </p>

              <p>
                Intelligent scheduling prevents understaffing during peak shopping hours and weekend rushes while optimizing coverage based on historical patterns. Staff availability management accommodates prayer times, religious observances, and cultural preferences through flexible scheduling respecting local customs and international staff needs.
              </p>

              <p>
                Skill-based assignment ensures clients receive qualified stylist expertise matching premium service expectations with appropriate certifications and international training backgrounds. Commission tracking handles compensation structures while ensuring compliance with Saudi labor law requirements including Saudization ratios and benefit structures.
              </p>

              <p>
                Payroll reports generate data supporting Saudi labor law compliance including end-of-service benefits calculations, visa costs tracking for expatriate staff, and GOSI contributions. Time clock integration tracks hours worked for accurate wage calculations respecting maximum working hours and overtime regulations.
              </p>

              <p>
                Leave management tracks annual leave entitlements, Ramadan working hour adjustments, Hajj leave for Saudi staff, and religious holiday observances. Performance metrics compare productivity across team members helping identify top performers deserving recognition and career development opportunities.
              </p>

              <p>
                Staff retention analytics identify turnover patterns important in Jeddah's cosmopolitan employment market. Documentation management helps track visa expiries, Iqama renewals, certification requirements, and compliance for diverse workforce combining Saudi nationals and experienced international beauty professionals.
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
              <h3>Marketing Automation for Jeddah Growth</h3>
              <p>
                Growing salon business in Jeddah's cosmopolitan market requires culturally appropriate marketing reaching diverse clients with compelling messages at optimal times. BookB provides marketing automation helping Jeddah salon owners maintain client engagement while respecting cultural preferences and building reputation in Saudi Arabia's commercial capital.
              </p>

              <p>
                Appointment reminder sequences reduce no-shows through SMS and WhatsApp sent at culturally appropriate times respecting prayer schedules and daily routines. Special occasion campaigns celebrate weddings, Eid festivities, and family events automatically with personalized offers encouraging celebratory salon visits during peak seasons.
              </p>

              <p>
                Re-engagement workflows target clients who haven't booked within typical intervals including seasonal visitors and local residents with compelling incentives. New service announcements reach interested clients based on past behavior ensuring relevant targeting for premium services and trending treatments popular in Jeddah's fashion-conscious market.
              </p>

              <p>
                Package promotions encourage commitment through luxury bundles and membership programs appealing to Jeddah's quality-seeking residents who value relationships with trusted service providers. Seasonal campaigns align with Ramadan preparation, Eid celebrations, wedding seasons, Hajj periods, and summer travel patterns.
              </p>

              <p>
                Review and referral management builds reputation through satisfied clients sharing positive experiences within social networks, the most effective marketing in Jeddah's relationship-driven culture. Social media presence maintains professional brand image on platforms popular with Jeddah demographics including Instagram and Snapchat.
              </p>

              <p>
                Client segmentation delivers relevant messages to different groups including Saudi families, expatriate residents, business professionals, and seasonal visitors ensuring culturally appropriate and effective targeting. Marketing campaigns respect cultural sensitivities while promoting premium services during high-demand periods throughout the year.
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
          <h2>Pricing for Jeddah Salons</h2>
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
