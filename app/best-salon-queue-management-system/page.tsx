import Image from 'next/image'
import { images } from '@/lib/unsplash-images'

export default function best_salon_queue_management_systemPage() {
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
        <div className="hero-content">
          <h1>Best Salon Queue Management System</h1>
          <p className="hero-subtitle">
            Complete guide to queue management for modern salons. Learn proven strategies, best practices, and practical solutions that help beauty businesses improve operations, increase revenue, and deliver better client experiences. BookB provides the software tools you need to implement these strategies effectively.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Trusted by 1,000+ salons · No credit card required</p>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Understanding Best Salon Queue Management System</h2>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Why This Matters for Your Salon</h3>
              <p>
                Understanding queue management is essential for salon success in today's competitive market. Modern clients expect professional service, convenient booking options, and seamless experiences from first contact through checkout and beyond. Salons that master queue management see significant improvements in client satisfaction, staff productivity, and overall profitability. The challenge many salon owners face is implementing effective systems without expensive enterprise software or complicated processes that overwhelm their teams. BookB solves this problem by providing professional tools designed specifically for salons at pricing independent businesses can afford. Our software handles queue management automatically using proven best practices developed through working with thousands of salons worldwide. You get enterprise-level capabilities without enterprise-level costs or complexity. Whether you run a single-chair operation or manage multiple locations, BookB provides the features you need to implement effective queue management strategies starting day one. Our intuitive interface ensures your team can use the system productively without extensive training or technical expertise. Cloud-based access means you can manage operations from anywhere using any device with internet connection. Automatic updates deliver new features and improvements regularly without manual software upgrades or IT support requirements.
              </p>
            </div>
            <div className="feature-visual">
              <Image
                src={images.hairSalon.url}
                alt="Professional salon management software features"
                width={500}
                height={375}
                loading="lazy"
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>How BookB Helps</h3>
              <p>
                BookB provides comprehensive tools for queue management built specifically for salon operations. Our software automates routine tasks, streamlines workflows, and provides insights that help you make better business decisions. Appointment scheduling handles bookings from multiple channels preventing double-bookings and scheduling conflicts. Client management stores detailed information about preferences, service history, and contact details enabling personalized service. Staff management coordinates schedules, tracks performance, and manages payroll information efficiently. Point of sale processing accepts all payment methods with competitive rates and no hidden fees. Marketing automation sends targeted campaigns to specific client segments increasing repeat visits and referrals. Reporting and analytics provide clear insights into business performance identifying opportunities for improvement. Mobile apps for staff and clients ensure everyone stays connected and informed wherever they are. Integration with popular payment processors, accounting software, and marketing tools creates seamless workflows. Security features protect sensitive client and business information meeting industry standards for data protection. Our support team provides responsive assistance ensuring you get help when you need it without long wait times. Training resources include video tutorials, documentation, and live onboarding sessions helping your team master the system quickly.
              </p>
            </div>
            <div className="feature-visual">
              <Image
                src={images.hairSalon.url}
                alt="Professional salon management software features"
                width={500}
                height={375}
                loading="lazy"
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Implementation and ROI</h3>
              <p>
                Implementing effective queue management delivers measurable returns through increased revenue, reduced costs, and improved efficiency. Salons using BookB report significant improvements in key performance metrics within first 90 days. Appointment booking becomes more efficient reducing phone time and administrative overhead. Client retention improves through better service and automated follow-up communications. Staff productivity increases when freed from manual tasks and paperwork. No-shows decrease dramatically with automated reminders and confirmation requests. Marketing effectiveness improves through targeted campaigns based on client data and behavior. Inventory management reduces waste and ensures products are always in stock. Financial reporting provides clear visibility into profitability by service, stylist, and location. The best part is implementing BookB requires minimal disruption to your operations. We handle data migration from your existing systems ensuring smooth transition. Training takes hours not weeks thanks to intuitive design and comprehensive resources. Support during transition ensures any questions get answered quickly. Month-to-month pricing means no long-term commitment or expensive contracts. Free trial lets you test everything before committing. Money-back guarantee protects your investment if you're not satisfied.
              </p>
            </div>
            <div className="feature-visual">
              <Image
                src={images.hairSalon.url}
                alt="Professional salon management software features"
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
          <p className="section-subtitle">Join 1,000+ salons using BookB for queue management</p>
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
