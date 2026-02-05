import Image from 'next/image'
import { images } from '@/lib/unsplash-images'

export default function VerticalPage() {
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
          <h1>Hair Salon Management Software</h1>
          <p className="hero-subtitle">
            Complete management solution designed specifically for hair salons. BookB helps beauty professionals streamline operations, increase revenue, and deliver exceptional client experiences. Trusted by hair salons worldwide, our platform handles everything from online booking and client management to point of sale and marketing automation.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Trusted by 1,000+ salons · No credit card required</p>
        </div>
          <div className="hero-image">
            <Image
              src={images.hairSalon.url}
              alt={images.hairSalon.alt}
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
          <h2>Why hair salons Choose BookB</h2>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Built for Your Business</h3>
              <p>

                hair salons face unique challenges in today's competitive market. Modern clients expect professional service, convenient booking options, and seamless experiences from first contact through checkout and beyond.

              </p>

              <p>

                Successful hair salons need robust management tools that handle appointments, payments, client relationships, and marketing without overwhelming complexity or enterprise pricing. BookB solves this problem by providing professional software designed specifically for beauty industry operations at pricing independent businesses can afford.

              </p>

              <p>

                Our platform understands the specific workflow requirements of hair salons including service timing, product usage, client preferences, and stylists schedules. You get enterprise-level capabilities without enterprise-level costs or complexity enabling you to compete effectively against larger chains while maintaining your independent identity.

              </p>

              <p>

                Whether you operate solo or manage a team of stylists, BookB scales with your business providing exactly the <a href="/features">features</a> you need without overwhelming you with unnecessary complexity. Our intuitive interface ensures your team can use the system productively without extensive training or technical expertise. Also explore our solutions for <a href="/barbershop-software">barbershops</a> and <a href="/mobile-hairdresser-software">mobile hairdressers</a>.

              </p>

              <p>

                Cloud-based access means you can manage your business from anywhere using any device with internet connection. Automatic updates deliver new features and improvements regularly without manual software upgrades or IT support requirements.

              </p>

              <p>

                Dedicated customer success team provides responsive assistance ensuring you get maximum value from the platform.

              </p>
            </div>
            <div className="feature-visual">
              <Image
                src={images.hairSalon.url}
                alt={images.hairSalon.alt}
                width={500}
                height={375}
                loading="lazy"
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Complete Feature Set</h3>
              <p>

                BookB provides comprehensive <a href="/features">tools designed specifically for hair salons</a> operations. Online booking accepts appointments 24/7 through your website, social media, and Google eliminating phone tag and capturing clients who book outside business hours. Whether you're in <a href="/uk/manchester">Manchester</a>, <a href="/us/los-angeles">Los Angeles</a>, or <a href="/au/melbourne">Melbourne</a>, our platform adapts to your local market.

              </p>

              <p>

                Your booking widget integrates seamlessly with existing website using simple embed code. Real-time availability prevents double-bookings and scheduling conflicts automatically.

              </p>

              <p>

                Clients receive instant confirmation with appointment details and can reschedule or cancel through their portal reducing administrative workload. <strong>Client Management:</strong> Stores detailed profiles with service history, preferences, photos, and notes ensuring consistent experience across all visits and team members.

              </p>

              <p>

                Color formulas, product preferences, allergies, and special requests get documented systematically. Automated client tagging segments your database for targeted marketing campaigns.

              </p>

              <p>

                Birthday and anniversary tracking enables personalized outreach that strengthens relationships. <strong>Point of Sale:</strong> Accepts all payment methods with competitive processing rates and no hidden fees.

              </p>

              <p>

                Split payments, tip management, and receipt delivery work seamlessly. Service packages and prepaid bundles encourage commitment while improving cash flow.

              </p>

              <p>

                Staff scheduling coordinates team calendars, time off, and availability preventing conflicts and optimizing capacity. Performance tracking shows revenue, client retention, and productivity metrics per stylist.

              </p>

              <p>

                Commission calculation supports multiple compensation structures accurately tracking earnings.

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
              <h3>Marketing and Growth</h3>
              <p>

                Growing your hair salons business requires effective marketing that brings in new clients while keeping existing ones engaged. BookB provides professional marketing automation tools that work automatically in the background.

              </p>

              <p>

                Email and SMS campaigns reach clients with targeted messages based on behavior and preferences. <strong>Automated Reminders:</strong> Reduce no-shows by up to 40% with customizable timing and messaging.

              </p>

              <p>

                Win-back campaigns re-engage clients who have not booked recently with special offers. Birthday and anniversary messages with exclusive discounts strengthen relationships and drive bookings.

              </p>

              <p>

                Post-appointment follow-ups request feedback and reviews while experience is fresh. Review generation encourages satisfied clients to share experiences on Google, Facebook, and Yelp improving your online reputation.

              </p>

              <p>

                Referral program automation rewards clients who bring friends with credits or discounts. Social media integration shares promotions and content across platforms from one dashboard.

              </p>

              <p>

                List segmentation targets specific client groups with relevant offers improving response rates. A/B testing compares message variations to optimize campaign performance.

              </p>

              <p>

                Analytics track campaign performance including open rates, click rates, bookings generated, and ROI so you know exactly what works. All marketing automation runs on autopilot once configured, freeing you to focus on service delivery while the system nurtures client relationships and drives revenue growth consistently.

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
              <h3>Pricing and Plans</h3>
              <p>

                BookB offers transparent pricing without long-term contracts or hidden fees making it accessible for hair salons at any stage of growth. Starter plan at £15/month provides complete management for solo stylists including unlimited appointments, online booking, client management, basic POS, and email support.

              </p>

              <p>

                Professional plan at £35/month supports up to 5 stylists adding advanced analytics, inventory management, email marketing, custom branding, and priority support. Business plan at £75/month handles up to 15 stylists with multi-location support, advanced reporting, API access, loyalty programs, and dedicated account manager.

              </p>

              <p>

                Enterprise plan at £150/month provides unlimited stylists, white-label options, custom integrations, 99.9% uptime SLA, and 24/7 phone support. All plans include unlimited appointments, clients, and bookings ensuring predictable costs as your business grows.

              </p>

              <p>

                Free 14-day trial lets you test everything before committing. Month-to-month billing means no long-term contracts or cancellation fees.

              </p>

              <p>

                Migration assistance helps transfer data from existing systems smoothly. Training and onboarding ensure your team masters the platform quickly.

              </p>

              <p>

                UK-based customer support provides responsive assistance during business hours via phone, email, and live chat. Money-back guarantee protects your investment if you are not completely satisfied within first 30 days.

              </p>

              <p>

                Pay annually and save 20% on any plan making the Professional plan just £336/year instead of £420.

              </p>
            </div>
            <div className="feature-visual">
              <Image
                src={images.pos.url}
                alt={images.pos.alt}
                width={500}
                height={375}
                loading="lazy"
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="comparison">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p className="section-subtitle">Join hair salons worldwide using BookB to streamline operations and increase revenue</p>
          <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <a href="#trial" className="btn btn-primary" style={{fontSize: '18px', padding: '1rem 2rem'}}>
              Start Your Free Trial
            </a>
            <p style={{marginTop: '1rem', color: 'var(--text-light)'}}>
              No credit card required · 14-day free trial · Cancel anytime
            </p>
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
