export default function DubaiSalonSoftware() {
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

      <div className="hero">
        <div className="hero-content">
          <h1>Salon Software for Dubai Hair & Beauty Businesses</h1>
          <p className="hero-subtitle">
            BookB helps Dubai salons manage appointments, clients, staff, and payments with powerful cloud-based software designed specifically for UAE beauty businesses. From Dubai Mall to Marina, Downtown and beyond, Dubai salons trust BookB for reliable, affordable salon management.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/pricing" className="btn btn-secondary">View Pricing</a>
          </div>
          <p className="trust-line">Trusted by 200+ Dubai salons and growing</p>
        </div>
      </div>

      <section className="features">
        <div className="container">
          <h2>Perfect for Dubai's Beauty Market</h2>
          <div className="feature-item">
            <div className="feature-content">
              <h3>Built for UAE Salons</h3>
              <p>Dubai's beauty industry requires software that understands local business practices and regulatory requirements. BookB provides features specifically designed for UAE salons including multi-currency support for AED and major international currencies. Payment processing integrates with regional payment providers popular in Dubai. Online booking works with local phone formats and addresses. Appointment scheduling accounts for UAE holidays and cultural considerations. Staff scheduling respects UAE labor law requirements. Marketing communications comply with local regulations. Time and date displays match regional preferences.</p>
            </div>
            <div className="feature-visual">
              <div style={{padding: '60px', background: '#f8fafc', borderRadius: '8px'}}>
                [Features Visual]
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2>Pricing for Dubai Salons</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="plan-name">Starter</div>
              <div className="plan-price">AED 75<span className="plan-period">/mo</span></div>
              <ul className="plan-features">
                <li>Up to 2 staff</li>
                <li>Unlimited appointments</li>
                <li>Online booking</li>
              </ul>
              <a href="#trial" className="btn btn-primary plan-cta">Start Free Trial</a>
            </div>
            <div className="pricing-card featured">
              <div className="popular-badge">MOST POPULAR</div>
              <div className="plan-name">Professional</div>
              <div className="plan-price">AED 190<span className="plan-period">/mo</span></div>
              <ul className="plan-features">
                <li>Up to 10 staff</li>
                <li>All Starter features</li>
                <li>Advanced analytics</li>
              </ul>
              <a href="#trial" className="btn btn-primary plan-cta">Start Free Trial</a>
            </div>
            <div className="pricing-card">
              <div className="plan-name">Business</div>
              <div className="plan-price">AED 370<span className="plan-period">/mo</span></div>
              <ul className="plan-features">
                <li>Up to 25 staff</li>
                <li>Multi-location</li>
                <li>Priority support</li>
              </ul>
              <a href="#trial" className="btn btn-primary plan-cta">Start Free Trial</a>
            </div>
            <div className="pricing-card">
              <div className="plan-name">Enterprise</div>
              <div className="plan-price">Custom</div>
              <ul className="plan-features">
                <li>Unlimited staff</li>
                <li>Custom development</li>
                <li>24/7 support</li>
              </ul>
              <a href="/contact" className="btn btn-secondary plan-cta">Contact Sales</a>
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
