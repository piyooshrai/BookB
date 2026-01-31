import Image from 'next/image'
import { images } from '@/lib/unsplash-images'

export default function SmallBusinessPage() {
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
          <h1>Salon Software for Small Business</h1>
          <p className="hero-subtitle">
            Complete management solution designed specifically for small beauty businesses. BookB helps independent salon owners, solo stylists, and small teams streamline operations, increase revenue, and deliver exceptional client experiences without enterprise pricing or complexity. Trusted by small salons worldwide.
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
          <h2>Why Small Salons Choose BookB</h2>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Built for Independent Businesses</h3>
              <p>
                Small salon businesses face unique challenges in today's competitive market. You need professional software to compete with larger chains, but enterprise solutions cost hundreds of pounds per month with features you will never use. Budget options lack essential capabilities forcing you to cobble together multiple tools. BookB solves this problem by providing professional features at pricing independent businesses can afford. Our Starter plan at just £15/month gives solo stylists complete salon management including unlimited appointments, online booking, client records, POS system, SMS reminders, and mobile app access. No setup fees, no long-term contracts, no hidden costs. Professional plan at £35/month supports up to 5 staff members adding advanced analytics, inventory management, email marketing, and priority support. Business plan at £75/month handles up to 15 staff with multi-location capabilities, advanced reporting, and dedicated account manager. Whether you operate solo from home, rent a chair at an established salon, or run a small team from your own location, BookB scales perfectly with your business. You get enterprise-level capabilities without enterprise-level costs or complexity. Our intuitive interface ensures you can start using the system productively within hours not weeks. Cloud-based access means you manage everything from your phone, tablet, or computer. Automatic updates deliver new features regularly without manual upgrades or IT support requirements.
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
              <h3>Essential Features Without Complexity</h3>
              <p>
                Small businesses need software that works immediately without extensive training or configuration. BookB provides essential salon management features in an intuitive interface your entire team can master quickly. Online booking widget embeds on your website or shares as direct link on Instagram, Facebook, and Google letting clients book 24/7 without phone calls. Real-time availability prevents double-bookings automatically. Clients receive instant confirmation and can reschedule through their portal. Client management stores service history, preferences, photos, and notes ensuring consistent experience. Automated birthday messages and win-back campaigns keep your schedule full. Point of sale accepts cards, cash, and mobile payments with competitive processing rates. No transaction fees unlike competitors who charge 5-10% per booking. Split payments, tips, and receipts all handled smoothly. Staff scheduling for small teams coordinates calendars and time off preventing conflicts. Commission tracking supports percentage splits, tiered rates, or service-specific compensation. SMS reminders reduce no-shows by up to 40% saving you hundreds in lost revenue monthly. Email marketing keeps clients engaged with targeted campaigns and special offers. Basic analytics show revenue trends, popular services, and client retention. Mobile app lets you manage everything from your phone between appointments. Inventory tracking for retail products prevents stockouts and reduces waste. Gift cards and prepaid packages encourage commitment while improving cash flow. All features work together seamlessly without jumping between different systems or paying for multiple subscriptions.
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
              <h3>Affordable Pricing That Scales</h3>
              <p>
                Small businesses need predictable costs that scale appropriately as you grow. BookB pricing starts at just £15/month for solo operators and grows only when you add team members or need advanced features. Starter plan provides complete salon management for one person including everything needed to run professional operations - unlimited appointments and clients, online booking widget, client database with service history, basic POS system accepting all payment methods, SMS appointment reminders, mobile app for iOS and Android, and email support during business hours. That is less than one haircut per month for complete business management. Professional plan at £35/month supports teams up to 5 staff adding advanced analytics showing revenue trends and client retention, inventory management tracking product usage and stock levels, email marketing sending 1,000 campaigns monthly, custom branding on booking widget and receipts, staff performance reports comparing productivity across team members, and priority support with faster response times. Business plan at £75/month handles larger teams up to 15 staff with multi-location support managing multiple salons centrally, advanced reporting with custom date ranges and filters, email marketing allowance of 5,000 campaigns monthly, API access for custom integrations, loyalty program management rewarding repeat clients, and dedicated account manager providing personalized assistance. All plans include unlimited appointments, clients, and bookings so costs stay predictable as your business grows. Free 14-day trial lets you test everything before paying anything. Month-to-month billing means no annual contracts or long-term commitments. Pay annually and save 20% making Professional plan just £336/year instead of £420. Money-back guarantee if not completely satisfied within first 30 days.
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
              <h3>Success Stories from Small Salons</h3>
              <p>
                Thousands of small salon businesses trust BookB to manage their operations efficiently. Solo stylists working from home studios use BookB to accept online bookings, manage client relationships, and process payments professionally competing effectively against larger salons. Chair renters at established salons maintain their own client database and schedule independently while looking professional to clients. Small salon owners with 2-5 staff members coordinate team schedules, track individual performance, and manage inventory without needing dedicated administrative staff. Mobile hairdressers running businesses from their vehicle use the mobile app to manage appointments on the go and process payments at client locations. Husband-wife salon teams split responsibilities with one focusing on services while the other handles marketing and client retention using BookB automation. Home-based nail technicians expanded to small studios hiring additional technicians and scaling BookB alongside their growth. The common thread among successful BookB customers is focus on service delivery rather than administrative tasks. Our software handles booking confirmations, payment processing, appointment reminders, marketing campaigns, and record-keeping automatically in the background. This frees small business owners to focus on what they do best - delivering exceptional service that keeps clients coming back. Many small salons report that BookB pays for itself within the first month just through reduced no-shows from automated reminders. Additional revenue from improved booking conversion, retail product sales, and client retention provides ongoing return making BookB one of the best investments small salon businesses can make.
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
          <p className="section-subtitle">Join small salons worldwide using BookB to streamline operations and increase revenue</p>
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
