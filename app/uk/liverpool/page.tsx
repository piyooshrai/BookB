import Image from 'next/image'
import { images } from '@/lib/unsplash-images'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

export default function LiverpoolSalonSoftware() {
  return (
    <>
      <Navigation />

      <section className="hero">
        <div className="hero-grid">
          <div className="hero-content">
          <h1>Salon Software for Liverpool Hair & Beauty Businesses</h1>
          <p className="hero-subtitle">
            Complete salon management solution designed for Liverpool beauty professionals. BookB helps salons, spas, and beauty businesses across Albert Dock, Baltic Triangle, and Bold Street streamline operations, increase revenue, and deliver exceptional client experiences. Trusted by hair salons, nail salons, barbershops, and day spas throughout Liverpool and the Merseyside.
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
          <h2>Why Liverpool Salons Choose BookB</h2>
          
          <div className="feature-item">
            <div className="feature-content">
              <h3>Built for Liverpool Beauty Businesses</h3>
              <p>

                Liverpool salons face unique challenges in today's competitive market. Rising commercial rents across Albert Dock and Baltic Triangle, sophisticated clients with high expectations, and intense competition from chains and independents all require professional management tools to stay profitable.

              </p>

              <p>

                BookB provides enterprise-level salon software at pricing independent Liverpool businesses can afford. Our platform handles everything from online booking and client management to point of sale and marketing automation, giving you more time to focus on delivering exceptional service.

              </p>

              <p>

                Salons throughout Bold Street and surrounding areas rely on BookB to streamline operations, reduce no-shows, and build lasting client relationships. Whether you operate a single-chair studio or manage multiple locations across Liverpool, BookB scales with your business providing exactly the features you need without overwhelming complexity or enterprise pricing.

              </p>

              <p>

                Our cloud-based system works on any device with internet connection, letting you manage your business from anywhere. Automatic updates deliver new features regularly without manual software upgrades or IT support requirements.

              </p>

              <p>

                Dedicated customer success team provides responsive assistance ensuring you get maximum value from the platform.

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
              <h3>Features That Drive Results</h3>
              <p>

                BookB provides comprehensive tools designed specifically for salon operations. Online booking accepts appointments 24/7 through your website and social media, reducing phone time while capturing clients who book outside business hours.

              </p>

              <p>

                <strong>Client Management:</strong> Stores detailed profiles with service history, preferences, and photos ensuring consistent experience across all visits and staff members. <strong>Point of Sale:</strong> Accepts all payment methods with competitive processing rates and no hidden fees.

              </p>

              <p>

                Staff scheduling coordinates team calendars, time off, and availability preventing conflicts and optimizing capacity. <strong>Marketing Automation:</strong> Sends targeted campaigns, appointment reminders, and win-back messages that keep your schedule full.

              </p>

              <p>

                <strong>Reporting and Analytics:</strong> Provide clear insights into business performance, client retention, and staff productivity. Mobile apps for both staff and clients ensure everyone stays connected wherever they are.

              </p>

              <p>

                Inventory tracking monitors product usage and stock levels preventing shortages while reducing waste. Commission calculation supports multiple compensation structures accurately tracking earnings for your team.

              </p>

              <p>

                Multi-location management provides centralized oversight when you operate multiple Liverpool salons. Integration with popular payment processors, accounting software, and marketing platforms creates seamless workflows.

              </p>

              <p>

                VAT handling ensures compliance with UK tax requirements automatically.

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
              <h3>Pricing for Liverpool Salons</h3>
              <p>

                BookB offers transparent pricing without long-term contracts or hidden fees. Essential plan starts at £39/month providing complete salon management for single-location businesses including online booking, client management, point of sale, and marketing automation.

              </p>

              <p>

                Professional plan at £79/month adds advanced features like inventory management, staff commission tracking, and priority support. Enterprise plan at £159/month provides multi-location management, custom integrations, and dedicated account management.

              </p>

              <p>

                All plans include unlimited appointments, clients, and staff members ensuring predictable costs as your business grows. Prices exclude VAT which is added at checkout in accordance with UK tax law.

              </p>

              <p>

                Free 14-day trial lets you test everything before committing. Month-to-month billing means no long-term contracts or cancellation fees.

              </p>

              <p>

                Migration assistance helps transfer data from existing systems smoothly. Training and onboarding ensure your team masters the platform quickly.

              </p>

              <p>

                UK-based customer support provides responsive assistance during business hours via phone, email, and live chat. Money-back guarantee protects your investment if you're not completely satisfied within first 30 days.

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
              <h3>Success Stories from Liverpool</h3>
              <p>

                Salons across Liverpool report significant improvements after implementing BookB. Hair salons in Albert Dock increased revenue by 30% through better booking conversion and reduced no-shows.

              </p>

              <p>

                Day spas in Baltic Triangle improved staff productivity by eliminating manual appointment books and paperwork. Nail salons in Bold Street built stronger client relationships through personalized marketing and service history tracking.

              </p>

              <p>

                Multi-location operators streamlined management across their Liverpool salons with centralized oversight and reporting. Independent stylists grew from solo operations to team-based businesses using our staff management and scheduling tools.

              </p>

              <p>

                The common thread among successful BookB customers is commitment to providing excellent service while running efficient operations. Our software handles the administrative burden letting you focus on what matters most - delivering exceptional results that keep clients coming back.

              </p>

              <p>

                Many Liverpool salons recover their software investment within the first month through reduced no-shows alone. Additional revenue from improved booking conversion, retail sales, and client retention provides ongoing return on investment.

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

      <section className="comparison">
        <div className="container">
          <h2>Ready to Transform Your Liverpool Salon?</h2>
          <p className="section-subtitle">Join Liverpool salons using BookB to streamline operations and increase revenue</p>
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

      <Footer />
    </>
  );
}
