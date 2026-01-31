export default function BlogPage() {
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
        <div className="hero-content">
          <h1>BookB Blog</h1>
          <p className="hero-subtitle">
            Industry insights, best practices, and practical advice for salon owners. Learn how to grow your business, improve operations, and deliver exceptional client experiences.
          </p>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Latest Articles</h2>
          <div className="feature-item">
            <div className="feature-content">
              <h3>Coming Soon</h3>
              <p>
                We are building a comprehensive resource library covering salon management best practices, marketing strategies, client retention techniques, and industry trends. Subscribe to our newsletter to get notified when new articles are published.
              </p>
            </div>
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
              </ul>
            </div>
            <div className="footer-column">
              <h4>Solutions</h4>
              <ul>
                <li><a href="/hair-salon-software">Hair Salons</a></li>
                <li><a href="/barbershop-software">Barbershops</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Compare</h4>
              <ul>
                <li><a href="/zenoti-alternative">vs Zenoti</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">© 2026 BookB. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
