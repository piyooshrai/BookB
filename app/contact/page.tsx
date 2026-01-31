import Image from 'next/image'
import { images } from '@/lib/unsplash-images'

export default function ContactPage() {
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
          <h1>Get Started with BookB</h1>
          <p className="hero-subtitle">
            Start your free 14-day trial today and discover how BookB can transform your salon operations. No credit card required, no setup fees, no long-term contracts. Join 1,000+ salons worldwide who trust BookB to manage their business. Our team is here to help you get started and answer any questions about features, pricing, migration, or implementation.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Response within 24 hours · No sales pressure</p>
        </div>
          <div className="hero-image">
            <Image
              src={images.hero.url}
              alt={images.hero.alt}
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
          <h2>How to Get Started</h2>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Start Your Free Trial</h3>
              <p>
                The fastest way to experience BookB is starting your free 14-day trial. Visit bookb.io/trial to create your account in less than 2 minutes. No credit card required, so there is absolutely no risk or obligation. You get immediate access to the full platform including all features in your chosen plan tier. During your trial you can import your existing client data, configure your services and pricing, customize your booking widget, set up staff accounts, and explore every aspect of the system. We provide comprehensive onboarding resources including video tutorials, step-by-step guides, and knowledge base articles helping you get productive quickly. Most salons are up and running within their first day, accepting real bookings and processing transactions. If you have questions during your trial our support team is available via email and chat to provide assistance. Your trial lasts 14 full days and automatically expires without any charges unless you actively choose to subscribe. This gives you plenty of time to thoroughly evaluate BookB and determine if it meets your business needs. Many salons know within the first week that BookB is the right solution, but we provide two weeks to ensure you are completely confident in your decision. At the end of your trial you can subscribe to continue using BookB or simply let the trial expire with no further action required.
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
              <h3>Schedule a Demo</h3>
              <p>
                If you prefer seeing BookB in action before starting your trial, we offer personalized demo sessions with our team. Demos typically last 30-45 minutes and cover all major features including appointment booking, client management, point of sale, marketing automation, reporting, and staff management. We customize each demo based on your specific business type whether you run a hair salon, barbershop, nail salon, day spa, or other beauty business. During the demo we can address your specific questions about functionality, pricing, migration from existing systems, or integration with other tools you use. Demos are conducted via video call using Zoom or Google Meet depending on your preference. We show you the actual BookB interface so you can see exactly how features work rather than watching generic marketing presentations. Our demo specialists understand salon operations and can provide insights about best practices and workflow optimization beyond just showing software features. After the demo you receive access to all presentation materials and can start your free trial immediately if you are ready. We also follow up via email with answers to any additional questions that arise after the demo. To schedule your personalized demo, email demo@bookb.io with your availability and we will coordinate a time that works for your schedule. Demos are available weekdays during business hours across all major time zones.
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
              <h3>Contact Sales Team</h3>
              <p>
                For questions about pricing, custom enterprise requirements, or multi-location implementations, our sales team provides expert guidance. Email sales@bookb.io or call +44 20 1234 5678 (UK) or +1 415 123 4567 (US) during business hours. Sales inquiries typically receive responses within 4 business hours. Our sales team can provide detailed pricing quotes, explain feature differences between plan tiers, discuss volume discounts for multi-location businesses, arrange custom contract terms for enterprise customers, coordinate data migration planning from existing systems, and connect you with implementation specialists for complex deployments. Unlike high-pressure sales organizations, our team focuses on understanding your needs and providing honest guidance about whether BookB fits your requirements. We would rather tell you upfront if another solution might work better than pressure you into a bad fit. For standard salon operations our self-service trial usually provides everything needed to evaluate BookB without sales involvement. Sales support becomes more valuable for businesses with unique requirements, multiple locations, franchise operations, or integration needs with specialized third-party systems. Our sales team collaborates closely with product and engineering ensuring they can provide accurate information about current capabilities and future roadmap. They also have authority to structure custom agreements for enterprise customers who need flexibility beyond standard pricing plans.
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
              <h3>Get Technical Support</h3>
              <p>
                Current BookB customers can access technical support through multiple channels depending on their plan level. All plans include email support at support@bookb.io with responses within 24 hours during business days. Professional and higher plans add live chat support available through your BookB dashboard with typical response times under 2 hours. Business plan includes dedicated account manager who you can contact directly via email or phone for personalized assistance. Enterprise plan provides 24/7 phone support at dedicated hotline numbers with guaranteed response times covered by SLA. Our support team consists of salon industry veterans who understand both the technical aspects of the software and the operational realities of running a beauty business. They can help with technical issues, feature questions, workflow optimization, troubleshooting integration problems, and best practices guidance. We also maintain extensive self-service resources including video tutorials covering every feature, comprehensive documentation with step-by-step guides, knowledge base articles addressing common questions, and community forums where salon owners share tips and advice. Many customers find they can resolve questions immediately through these resources without waiting for support responses. For complex technical issues our support team can escalate to engineering ensuring problems get resolved quickly. We track all support requests in our ticketing system so you can always check status and history of your inquiries. Support is included in your subscription cost with no additional fees or per-incident charges regardless of how many questions you ask.
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
              <h3>Migration Assistance</h3>
              <p>
                Switching from another salon software platform requires careful planning to ensure smooth transition without losing critical business data. Our migration team provides free assistance for customers moving from competitors including Zenoti, Fresha, Phorest, Boulevard, Vagaro, Square Appointments, Salon Iris, Millennium, Shortcuts, Timely, and others. To start the migration process, email migrations@bookb.io with details about your current system and approximate data volume. Our team will assess the migration complexity and provide estimated timeline typically 3-5 business days for most platforms. We extract client records, appointment history, service catalogs, pricing information, staff details, product inventory, and other critical data from your existing system. This data gets transformed into BookB format and imported with validation ensuring accuracy and completeness. We can schedule migrations during slow periods or weekends to minimize disruption to your operations. You can continue using your old system right up until migration completes, then switch to BookB seamlessly without gaps in service. After migration we provide parallel running support where you verify everything imported correctly before fully committing. This de-risks the transition and gives you confidence that all your valuable historical data transferred successfully. Our migration specialists have completed thousands of transitions and understand common pitfalls to avoid. They can guide you through planning checklist ensuring you do not miss critical steps like notifying clients about new booking system or training staff on BookB before go-live date.
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
              <h3>Partner and Integration Inquiries</h3>
              <p>
                BookB integrates with numerous payment processors, accounting platforms, marketing tools, and industry-specific systems. If you have questions about specific integrations or want to explore partnership opportunities, contact our partnerships team at partners@bookb.io. We currently integrate with payment processors including Stripe, Square, PayPal, and others. Accounting software integrations include QuickBooks, Xero, Sage, and FreshBooks. Marketing platform connections support Mailchimp, Constant Contact, Klaviyo, and major social media channels. For businesses with specialized integration requirements we provide API access allowing custom connections to proprietary systems or niche platforms. Our API documentation at developers.bookb.io covers authentication, endpoints, data formats, rate limits, and example code in multiple programming languages. If you represent a software company interested in building official BookB integration or becoming implementation partner, our partnerships team can discuss technical requirements, co-marketing opportunities, and revenue sharing arrangements. We actively seek partnerships with complementary service providers including business consultants, IT service companies, salon franchises, and industry associations. Strategic partnerships help us serve customers better while extending our reach into new markets and verticals. Partnership inquiries receive responses within 2 business days from our business development team who can evaluate fit and coordinate next steps.
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
          <p className="section-subtitle">Join 1,000+ salons using BookB to streamline operations and increase revenue</p>
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
