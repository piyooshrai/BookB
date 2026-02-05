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
          <h1>Barbershop Management Software</h1>
          <p className="hero-subtitle">
            Complete management solution designed specifically for barbershops. BookB helps beauty professionals streamline operations, increase revenue, and deliver exceptional client experiences. Trusted by barbershops worldwide, our platform handles everything from online booking and client management to point of sale and marketing automation.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Trusted by 1,000+ salons · No credit card required</p>
        </div>
          <div className="hero-image">
            <Image
              src={images.barbershop.url}
              alt={images.barbershop.alt}
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
          <h2>Why barbershops Choose BookB</h2>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Built for Your Business</h3>
              <p>
                Barbershops face unique challenges in today's competitive market. Modern clients expect professional service, convenient booking options, and seamless experiences from first contact through checkout and beyond.
              </p>
              <p>
                Successful barbershops need robust management tools that handle appointments, payments, client relationships, and marketing without overwhelming complexity or enterprise pricing. BookB solves this problem by providing professional <a href="/features">software designed specifically for beauty industry operations</a> at <a href="/pricing">pricing independent businesses can afford</a>. Barbershops in <a href="/uk/glasgow">Glasgow</a>, <a href="/us/chicago">Chicago</a>, and <a href="/au/brisbane">Brisbane</a> trust our platform.
              </p>
              <p>
                Our platform understands the specific workflow requirements of barbershops including service timing, product usage, client preferences, and barber schedules. You get enterprise-level capabilities without enterprise-level costs or complexity enabling you to compete effectively against larger chains while maintaining your independent identity.
              </p>
              <p>
                Whether you operate solo or manage a team of barbers, BookB scales with your business providing exactly the features you need without overwhelming you with unnecessary complexity. Our intuitive interface ensures your team can use the system productively without extensive training or technical expertise. Cloud-based access means you can manage your business from anywhere using any device with internet connection.
              </p>
            </div>
            <div className="feature-visual">
              <Image
                src={images.barbershop.url}
                alt={images.barbershop.alt}
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
                BookB provides comprehensive tools designed specifically for barbershop operations:
              </p>
              <p>
                <strong>Online Booking:</strong> Accept appointments 24/7 through your website, social media, and Google eliminating phone tag and capturing clients who book outside business hours. Your booking widget integrates seamlessly with existing website using simple embed code. Real-time availability prevents double-bookings and scheduling conflicts automatically. Learn more in our <a href="/blog/salon-online-booking-guide">online booking guide</a>. Also see our <a href="/hair-salon-software">hair salon software</a> solution.
              </p>
              <p>
                <strong>Client Management:</strong> Store detailed profiles with service history, preferences, photos, and notes ensuring consistent experience across all visits and team members. Color formulas, product preferences, allergies, and special requests get documented systematically. Automated client tagging segments your database for targeted marketing campaigns.
              </p>
              <p>
                <strong>Point of Sale:</strong> Accept all payment methods with competitive processing rates and no hidden fees. Split payments, tip management, and receipt delivery work seamlessly. Service packages and prepaid bundles encourage commitment while improving cash flow.
              </p>
              <p>
                <strong>Staff Scheduling:</strong> Coordinate team calendars, time off, and availability preventing conflicts and optimizing capacity. Performance tracking shows revenue, client retention, and productivity metrics per barber. Commission calculation supports multiple compensation structures accurately tracking earnings.
              </p>
            </div>
            <div className="feature-visual">
              <Image
                src={images.queueManagement.url}
                alt={images.queueManagement.alt}
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
                Growing your barbershop business requires effective marketing that brings in new clients while keeping existing ones engaged. BookB provides professional marketing automation tools that work automatically in the background.
              </p>
              <p>
                <strong>Automated Campaigns:</strong> Email and SMS campaigns reach clients with targeted messages based on behavior and preferences. Automated reminders reduce no-shows by up to 40% with customizable timing and messaging. Win-back campaigns re-engage clients who haven't booked recently with special offers.
              </p>
              <p>
                <strong>Reputation Management:</strong> Post-appointment follow-ups request feedback and reviews while experience is fresh. Review generation encourages satisfied clients to share experiences on Google, Facebook, and Yelp improving your online reputation. Referral program automation rewards clients who bring friends with credits or discounts.
              </p>
              <p>
                <strong>Performance Tracking:</strong> Analytics track campaign performance including open rates, click rates, bookings generated, and ROI so you know exactly what works. List segmentation targets specific client groups with relevant offers improving response rates. All marketing automation runs on autopilot once configured, freeing you to focus on service delivery.
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
              <h3>Pricing and Plans</h3>
              <p>
                BookB offers transparent pricing without long-term contracts or hidden fees making it accessible for barbershops at any stage of growth:
              </p>
              <p>
                <strong>Starter ($15/month):</strong> Complete management for solo barbers including unlimited appointments, online booking, client management, basic POS, and email support.
              </p>
              <p>
                <strong>Professional ($45/month):</strong> Supports up to 5 barbers adding advanced analytics, inventory management, email marketing, custom branding, and priority support.
              </p>
              <p>
                <strong>Business ($95/month):</strong> Handles up to 15 barbers with multi-location support, advanced reporting, API access, loyalty programs, and dedicated account manager.
              </p>
              <p>
                <strong>Enterprise ($150/month):</strong> Unlimited barbers, white-label options, custom integrations, 99.9% uptime SLA, and 24/7 phone support.
              </p>
              <p>
                All plans include unlimited appointments, clients, and bookings ensuring predictable costs as your business grows. Free 14-day trial lets you test everything before committing. Month-to-month billing means no long-term contracts or cancellation fees. Pay annually and save 20% on any plan.
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
          <p className="section-subtitle">Join barbershops worldwide using BookB to streamline operations and increase revenue</p>
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
