import Image from 'next/image'
import { images } from '@/lib/unsplash-images'

export default function VerticalPage() {
  return (
    <>
      <nav>
        <div className="container">
          <a href="/" className="logo">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="5" width="10" height="30" rx="1" fill="currentColor"/>
              <rect x="4" y="10" width="6" height="2" fill="white"/>
              <rect x="4" y="14" width="6" height="2" fill="white"/>
              <rect x="4" y="18" width="6" height="2" fill="white"/>
              <rect x="4" y="22" width="6" height="2" fill="white"/>
              <rect x="4" y="26" width="6" height="2" fill="white"/>
              <rect x="4" y="30" width="6" height="2" fill="white"/>
              <path d="M18 2 L24 12 L22 13 L18 8 L14 13 L12 12 Z" fill="currentColor"/>
              <circle cx="14" cy="18" r="4" fill="currentColor"/>
              <circle cx="14" cy="18" r="2" fill="white"/>
              <circle cx="22" cy="18" r="4" fill="currentColor"/>
              <circle cx="22" cy="18" r="2" fill="white"/>
              <rect x="17" y="13.5" width="2" height="2" fill="white"/>
            </svg>
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
          <h1>Beauty Therapist Software</h1>
          <p className="hero-subtitle">
            Complete management solution designed specifically for beauty therapists. BookB helps beauty professionals streamline operations, increase revenue, and deliver exceptional client experiences. Trusted by beauty therapists worldwide, our platform handles everything from online booking and client management to point of sale and marketing automation.
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
          <h2>Why beauty therapists Choose BookB</h2>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Built for Your Business</h3>
              <p>
                beauty therapists face unique challenges in today's competitive market. Modern clients expect professional service, convenient booking options, and seamless experiences from first contact through checkout and beyond. Successful beauty therapists need robust management tools that handle appointments, payments, client relationships, and marketing without overwhelming complexity or enterprise pricing. BookB solves this problem by providing professional software designed specifically for beauty industry operations at pricing independent businesses can afford. Our platform understands the specific workflow requirements of beauty therapists including service timing, product usage, client preferences, and therapists schedules. You get enterprise-level capabilities without enterprise-level costs or complexity enabling you to compete effectively against larger chains while maintaining your independent identity. Whether you operate solo or manage a team of therapists, BookB scales with your business providing exactly the features you need without overwhelming you with unnecessary complexity. Our intuitive interface ensures your team can use the system productively without extensive training or technical expertise. Cloud-based access means you can manage your business from anywhere using any device with internet connection. Automatic updates deliver new features and improvements regularly without manual software upgrades or IT support requirements. Dedicated customer success team provides responsive assistance ensuring you get maximum value from the platform.
              </p>
            </div>
            <div className="feature-visual">
              <div style={{padding: '60px', background: '#f8fafc', borderRadius: '8px'}}>
                [Business Visual]
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Complete Feature Set</h3>
              <p>
                BookB provides comprehensive tools designed specifically for beauty therapists operations. Online booking accepts appointments 24/7 through your website, social media, and Google eliminating phone tag and capturing clients who book outside business hours. Your booking widget integrates seamlessly with existing website using simple embed code. Real-time availability prevents double-bookings and scheduling conflicts automatically. Clients receive instant confirmation with appointment details and can reschedule or cancel through their portal reducing administrative workload. Client management stores detailed profiles with service history, preferences, photos, and notes ensuring consistent experience across all visits and team members. Color formulas, product preferences, allergies, and special requests get documented systematically. Automated client tagging segments your database for targeted marketing campaigns. Birthday and anniversary tracking enables personalized outreach that strengthens relationships. Point of sale accepts all payment methods with competitive processing rates and no hidden fees. Split payments, tip management, and receipt delivery work seamlessly. Service packages and prepaid bundles encourage commitment while improving cash flow. Staff scheduling coordinates team calendars, time off, and availability preventing conflicts and optimizing capacity. Performance tracking shows revenue, client retention, and productivity metrics per therapist. Commission calculation supports multiple compensation structures accurately tracking earnings.
              </p>
            </div>
            <div className="feature-visual">
              <div style={{padding: '60px', background: '#f8fafc', borderRadius: '8px'}}>
                [Features Visual]
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Marketing and Growth</h3>
              <p>
                Growing your beauty therapists business requires effective marketing that brings in new clients while keeping existing ones engaged. BookB provides professional marketing automation tools that work automatically in the background. Email and SMS campaigns reach clients with targeted messages based on behavior and preferences. Automated reminders reduce no-shows by up to 40% with customizable timing and messaging. Win-back campaigns re-engage clients who have not booked recently with special offers. Birthday and anniversary messages with exclusive discounts strengthen relationships and drive bookings. Post-appointment follow-ups request feedback and reviews while experience is fresh. Review generation encourages satisfied clients to share experiences on Google, Facebook, and Yelp improving your online reputation. Referral program automation rewards clients who bring friends with credits or discounts. Social media integration shares promotions and content across platforms from one dashboard. List segmentation targets specific client groups with relevant offers improving response rates. A/B testing compares message variations to optimize campaign performance. Analytics track campaign performance including open rates, click rates, bookings generated, and ROI so you know exactly what works. All marketing automation runs on autopilot once configured, freeing you to focus on service delivery while the system nurtures client relationships and drives revenue growth consistently.
              </p>
            </div>
            <div className="feature-visual">
              <div style={{padding: '60px', background: '#f8fafc', borderRadius: '8px'}}>
                [Marketing Visual]
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Pricing and Plans</h3>
              <p>
                BookB offers transparent pricing without long-term contracts or hidden fees making it accessible for beauty therapists at any stage of growth. Starter plan at £15/month provides complete management for solo therapists including unlimited appointments, online booking, client management, basic POS, and email support. Professional plan at £35/month supports up to 5 therapists adding advanced analytics, inventory management, email marketing, custom branding, and priority support. Business plan at £75/month handles up to 15 therapists with multi-location support, advanced reporting, API access, loyalty programs, and dedicated account manager. Enterprise plan at £150/month provides unlimited therapists, white-label options, custom integrations, 99.9% uptime SLA, and 24/7 phone support. All plans include unlimited appointments, clients, and bookings ensuring predictable costs as your business grows. Free 14-day trial lets you test everything before committing. Month-to-month billing means no long-term contracts or cancellation fees. Migration assistance helps transfer data from existing systems smoothly. Training and onboarding ensure your team masters the platform quickly. UK-based customer support provides responsive assistance during business hours via phone, email, and live chat. Money-back guarantee protects your investment if you are not completely satisfied within first 30 days. Pay annually and save 20% on any plan making the Professional plan just £336/year instead of £420.
              </p>
            </div>
            <div className="feature-visual">
              <div style={{padding: '60px', background: '#f8fafc', borderRadius: '8px'}}>
                [Pricing Visual]
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="comparison">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p className="section-subtitle">Join beauty therapists worldwide using BookB to streamline operations and increase revenue</p>
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
