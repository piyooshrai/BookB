import Image from 'next/image'
import { images } from '@/lib/unsplash-images'

export default function BristolSalonSoftware() {
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
          <h1>Salon Software for Bristol Hair & Beauty Businesses</h1>
          <p className="hero-subtitle">
            Complete salon management solution designed for Bristol beauty professionals. BookB helps salons, spas, and beauty businesses across Clifton, Harbourside, and Park Street streamline operations, increase revenue, and deliver exceptional client experiences. Trusted by hair salons, nail salons, barbershops, and day spas throughout Bristol and the Bristol region.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Trusted by 1,000+ salons · No credit card required</p>
        </div>
          <div className="hero-image">
            <Image
              src={images.cities.generic.url}
              alt={images.cities.generic.alt}
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
          <h2>Why Bristol Salons Choose BookB</h2>
          
          <div className="feature-item">
            <div className="feature-content">
              <h3>Built for Bristol Beauty Businesses</h3>
              <p>
                Bristol salons face unique challenges in today's competitive market. Rising commercial rents across Clifton and Harbourside, sophisticated clients with high expectations, and intense competition from chains and independents all require professional management tools to stay profitable. BookB provides enterprise-level salon software at pricing independent Bristol businesses can afford. Our platform handles everything from online booking and client management to point of sale and marketing automation, giving you more time to focus on delivering exceptional service. Salons throughout Park Street and surrounding areas rely on BookB to streamline operations, reduce no-shows, and build lasting client relationships. Whether you operate a single-chair studio or manage multiple locations across Bristol, BookB scales with your business providing exactly the features you need without overwhelming complexity or enterprise pricing. Our cloud-based system works on any device with internet connection, letting you manage your business from anywhere. Automatic updates deliver new features regularly without manual software upgrades or IT support requirements. Dedicated customer success team provides responsive assistance ensuring you get maximum value from the platform.
              </p>
            </div>
            <div className="feature-visual">
              <div style={{padding: '60px', background: '#f8fafc', borderRadius: '8px'}}>
                [Bristol Salons Visual]
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Features That Drive Results</h3>
              <p>
                BookB provides comprehensive tools designed specifically for salon operations. Online booking accepts appointments 24/7 through your website and social media, reducing phone time while capturing clients who book outside business hours. Client management stores detailed profiles with service history, preferences, and photos ensuring consistent experience across all visits and staff members. Point of sale accepts all payment methods with competitive processing rates and no hidden fees. Staff scheduling coordinates team calendars, time off, and availability preventing conflicts and optimizing capacity. Marketing automation sends targeted campaigns, appointment reminders, and win-back messages that keep your schedule full. Reporting and analytics provide clear insights into business performance, client retention, and staff productivity. Mobile apps for both staff and clients ensure everyone stays connected wherever they are. Inventory tracking monitors product usage and stock levels preventing shortages while reducing waste. Commission calculation supports multiple compensation structures accurately tracking earnings for your team. Multi-location management provides centralized oversight when you operate multiple Bristol salons. Integration with popular payment processors, accounting software, and marketing platforms creates seamless workflows. VAT handling ensures compliance with UK tax requirements automatically.
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
              <h3>Pricing for Bristol Salons</h3>
              <p>
                BookB offers transparent pricing without long-term contracts or hidden fees. Essential plan starts at £39/month providing complete salon management for single-location businesses including online booking, client management, point of sale, and marketing automation. Professional plan at £79/month adds advanced features like inventory management, staff commission tracking, and priority support. Enterprise plan at £159/month provides multi-location management, custom integrations, and dedicated account management. All plans include unlimited appointments, clients, and staff members ensuring predictable costs as your business grows. Prices exclude VAT which is added at checkout in accordance with UK tax law. Free 14-day trial lets you test everything before committing. Month-to-month billing means no long-term contracts or cancellation fees. Migration assistance helps transfer data from existing systems smoothly. Training and onboarding ensure your team masters the platform quickly. UK-based customer support provides responsive assistance during business hours via phone, email, and live chat. Money-back guarantee protects your investment if you're not completely satisfied within first 30 days.
              </p>
            </div>
            <div className="feature-visual">
              <div style={{padding: '60px', background: '#f8fafc', borderRadius: '8px'}}>
                [Pricing Visual]
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Success Stories from Bristol</h3>
              <p>
                Salons across Bristol report significant improvements after implementing BookB. Hair salons in Clifton increased revenue by 30% through better booking conversion and reduced no-shows. Day spas in Harbourside improved staff productivity by eliminating manual appointment books and paperwork. Nail salons in Park Street built stronger client relationships through personalized marketing and service history tracking. Multi-location operators streamlined management across their Bristol salons with centralized oversight and reporting. Independent stylists grew from solo operations to team-based businesses using our staff management and scheduling tools. The common thread among successful BookB customers is commitment to providing excellent service while running efficient operations. Our software handles the administrative burden letting you focus on what matters most - delivering exceptional results that keep clients coming back. Many Bristol salons recover their software investment within the first month through reduced no-shows alone. Additional revenue from improved booking conversion, retail sales, and client retention provides ongoing return on investment.
              </p>
            </div>
            <div className="feature-visual">
              <div style={{padding: '60px', background: '#f8fafc', borderRadius: '8px'}}>
                [Success Stories Visual]
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="comparison">
        <div className="container">
          <h2>Ready to Transform Your Bristol Salon?</h2>
          <p className="section-subtitle">Join Bristol salons using BookB to streamline operations and increase revenue</p>
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
        </div>
      </footer>
    </>
  );
}
