import Image from 'next/image'
import { images } from '@/lib/unsplash-images'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

export default function how_to_manage_salon_walk_insPage() {
  return (
    <>
      <Navigation />

      <section className="hero">
        <div className="hero-content">
          <h1>How to Manage Salon Walk-Ins</h1>
          <p className="hero-subtitle">
            Complete guide to managing walk-in clients for modern salons. Learn proven strategies, best practices, and practical solutions that help beauty businesses improve operations, increase revenue, and deliver better client experiences. BookB provides the software tools you need to implement these strategies effectively.
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
          <h2>Understanding How to Manage Salon Walk-Ins</h2>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Why This Matters for Your Salon</h3>
              <p>
                Understanding managing walk-in clients is essential for salon success in today's competitive market. Modern clients expect professional service, convenient booking options, and seamless experiences from first contact through checkout and beyond.
              </p>
              <p>
                The challenge many salon owners face is implementing effective systems without expensive enterprise software or complicated processes that overwhelm their teams. BookB solves this problem by providing professional tools designed specifically for salons at pricing independent businesses can afford.
              </p>
              <p>
                Our software handles walk-in client management automatically using proven best practices developed through working with thousands of salons worldwide. You get enterprise-level capabilities without enterprise-level costs or complexity.
              </p>
              <p>
                Whether you run a single-chair operation or manage multiple locations, BookB provides the features you need starting day one. Our intuitive interface ensures your team can use the system productively without extensive training or technical expertise.
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
              <h3>How BookB Helps</h3>
              <p>
                BookB provides comprehensive tools for managing walk-in clients built specifically for salon operations. Our software automates routine tasks, streamlines workflows, and provides insights that help you make better business decisions.
              </p>
              <p>
                <strong>Appointment Scheduling:</strong> Handles bookings from multiple channels preventing double-bookings and scheduling conflicts.
              </p>
              <p>
                <strong>Client Management:</strong> Stores detailed information about preferences, service history, and contact details enabling personalized service.
              </p>
              <p>
                <strong>Staff Management:</strong> Coordinates schedules, tracks performance, and manages payroll information efficiently.
              </p>
              <p>
                <strong>Point of Sale:</strong> Accepts all payment methods with competitive rates and no hidden fees.
              </p>
              <p>
                <strong>Marketing Automation:</strong> Sends targeted campaigns to specific client segments increasing repeat visits and referrals.
              </p>
              <p>
                Mobile apps for staff and clients ensure everyone stays connected and informed wherever they are. Integration with popular payment processors, accounting software, and marketing tools creates seamless workflows.
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
              <h3>Implementation and ROI</h3>
              <p>
                Implementing effective walk-in management delivers measurable returns through increased revenue, reduced costs, and improved efficiency. Salons using BookB report significant improvements in key performance metrics within first 90 days.
              </p>
              <p>
                <strong>Operational Improvements:</strong> Appointment booking becomes more efficient reducing phone time and administrative overhead. <strong>Revenue Growth:</strong> No-shows decrease dramatically with automated reminders and confirmation requests. <strong>Marketing:</strong> Effectiveness improves through targeted campaigns based on client data and behavior. <strong>Financial Reporting:</strong> Provides clear visibility into profitability by service, stylist, and location.
              </p>
              <p>
                Client retention improves through better service and automated follow-up communications. <strong>Staff Productivity:</strong> Increases when freed from manual tasks and paperwork.
              </p>
              <p>
                <strong>Revenue Growth:</strong> No-shows decrease dramatically with automated reminders and confirmation requests. <strong>Marketing:</strong> Effectiveness improves through targeted campaigns based on client data and behavior. <strong>Financial Reporting:</strong> Provides clear visibility into profitability by service, stylist, and location.
              </p>
              <p>
                The best part is implementing BookB requires minimal disruption to your operations. We handle data migration from your existing systems ensuring smooth transition. Month-to-month pricing means no long-term commitment or expensive contracts.
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
        </div>
      </section>

      <section className="comparison">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p className="section-subtitle">Join 1,000+ salons using BookB for managing walk-in clients</p>
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
