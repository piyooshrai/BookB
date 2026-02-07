import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

export default function CaseStudiesPage() {
  return (
    <>
      <Navigation />

      <section className="hero">
        <div className="hero-content">
          <h1>Customer Success Stories</h1>
          <p className="hero-subtitle">
            See how salons, spas, and beauty businesses use BookB to streamline operations, increase revenue, and deliver exceptional client experiences.
          </p>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Real Results from Real Salons</h2>
          <div className="feature-item">
            <div className="feature-content">
              <h3>Coming Soon</h3>
              <p>
                We are working with customers to document their success stories and share specific results they have achieved using BookB. Check back soon for detailed case studies showing exactly how salons improved operations and grew revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
