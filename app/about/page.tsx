import Image from 'next/image'
import { images } from '@/lib/unsplash-images'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <section className="hero">
        <div className="hero-content">
          <h1>About BookB</h1>
          <p className="hero-subtitle">
            We believe every salon deserves enterprise-quality software without enterprise pricing. BookB provides professional tools designed specifically for independent salons, spas, and beauty businesses at pricing that makes sense for your business.
          </p>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Our Story</h2>
          <div className="feature-item">
            <div className="feature-content">
              <h3>Built for Salon Owners, by People Who Understand Your Business</h3>
              <p>
                BookB started from a simple observation: salon management software was either too expensive for independent businesses or too limited to be useful. Enterprise solutions cost hundreds of pounds per month with complex features most salons never use. Budget options lacked essential capabilities forcing owners to cobble together multiple tools.
              </p>
              <p>
                We knew there had to be a better way. Our team spent years working with salon owners, stylists, and spa operators understanding their daily challenges, workflow requirements, and business goals. We learned that successful salons need robust appointment booking, comprehensive client management, efficient point of sale, and effective marketing automation working together seamlessly.
              </p>
              <p>
                They need software that saves time rather than creating more work. They need pricing that makes sense for their revenue model. Most importantly, they need a partner who understands beauty industry operations and can provide relevant support when needed.
              </p>
              <p>
                This understanding shaped every decision we made building BookB from technical architecture to pricing structure to customer success approach.
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
              <h3>Our Mission</h3>
              <p>
                We exist to help independent beauty businesses thrive through better software tools. Every feature we build, every price we set, every support interaction we have focuses on this goal. We measure success by client retention rates our customers achieve, revenue growth they experience, and time they save on administrative tasks.
              </p>
              <p>
                When salon owners tell us BookB paid for itself within the first month through reduced no-shows alone, we know we are on the right track. When stylists say our mobile app lets them focus on clients instead of paperwork, we celebrate. When multi-location operators report centralizing management saved them hours per week, we feel proud.
              </p>
              <p>
                This mission guides our product roadmap ensuring we build features that deliver real value rather than impressive demos. It shapes our pricing keeping software accessible to businesses at every stage from solo operations to growing chains. It drives our support philosophy providing responsive assistance from people who understand beauty industry challenges.
              </p>
              <p>
                We believe independent salons competing against corporate chains deserve tools that level the playing field. BookB makes enterprise capabilities accessible to businesses of any size.
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
              <h3>Our Values</h3>
              <p>
                <strong>Customer Success:</strong> We win when our customers win, which means building software that delivers measurable business results not just impressive feature lists.
              </p>
              <p>
                <strong>Simplicity:</strong> Complex software sits unused while simple tools get adopted across entire teams. We design for the stylist checking appointments on their phone, the receptionist managing walk-ins during rush hour, and the owner reviewing reports late at night.
              </p>
              <p>
                <strong>Transparency:</strong> Straightforward pricing without hidden fees and honest communication about capabilities and limitations. We would rather under-promise and over-deliver than make claims we cannot support.
              </p>
              <p>
                <strong>Continuous Improvement:</strong> We ship updates regularly, respond to feedback quickly, and invest in long-term platform development to evolve with customer needs.
              </p>
              <p>
                <strong>Industry Expertise:</strong> We understand color formulas, commission structures, walk-in management, and seasonal booking patterns because we have worked alongside beauty professionals learning their world. This knowledge shows in thoughtful features like color history tracking, flexible commission rules, and queue management designed specifically for salon operations.
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
              <h3>Join Our Community</h3>
              <p>
                Over 1,000 salons across the UK, US, UAE, and Australia trust BookB to manage their operations. From single-chair studios in Edinburgh to multi-location chains in London, from beachside salons in Sydney to downtown spas in Dubai, beauty professionals rely on our platform every day.
              </p>
              <p>
                This growing community provides invaluable feedback helping us improve and expand. User suggestions drive our roadmap. Real-world usage patterns inform our design decisions. Success stories inspire our team.
              </p>
              <p>
                We invite you to join this community of forward-thinking salon owners who believe better software creates better businesses. Start your free 14-day trial today and experience the difference professional tools make.
              </p>
              <p>
                No credit card required. No long-term contracts. No hidden fees. Just powerful software designed specifically for your business at pricing that makes sense. Our customer success team stands ready to help you get started, migrate your data, train your team, and optimize your workflows. We succeed when you succeed, and we are committed to your long-term growth and profitability.
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
          <h2>Ready to Get Started?</h2>
          <p className="section-subtitle">Join 1,000+ salons using BookB</p>
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
