export default function Home() {
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
            <h1>Why pay $300 when BookB delivers same results for $15?</h1>
            <p className="hero-subtitle">
              Professional salon management for independent pricing. Queue management, scheduling, POS, and mobile apps. Save $3,420 annually vs enterprise software.
            </p>
            <div className="cta-buttons">
              <a href="#trial" className="btn btn-primary">Start 14-Day Free Trial</a>
              <a href="/pricing" className="btn btn-secondary">See Pricing</a>
            </div>
            <p className="trust-line">Trusted by salons in 15+ countries · No credit card required</p>
          </div>
          <div className="hero-image">
            <p>Your Dashboard Screenshot Here</p>
            <p style={{fontSize: '14px', color: '#6B7280', marginTop: '1rem'}}>Show: Queue management + Analytics + Modern UI<br/>(Blur sensitive data)</p>
          </div>
        </div>
      </section>

      <section className="comparison">
        <div className="container">
          <h2>The $3,420 Question</h2>
          <p className="section-subtitle">Same enterprise features. 95% lower cost. No contracts.</p>
          <div className="comparison-table">
            <div className="comparison-row comparison-header">
              <div>Feature</div>
              <div>Zenoti</div>
              <div>BookB</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Monthly Cost</div>
              <div className="competitor-value">$300+</div>
              <div className="bookb-value">$15</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Setup Fees</div>
              <div className="competitor-value">$500+</div>
              <div className="bookb-value">FREE</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Queue Management</div>
              <div className="competitor-value">✓</div>
              <div className="bookb-value">✓</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Appointment Scheduling</div>
              <div className="competitor-value">✓</div>
              <div className="bookb-value">✓</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">POS System</div>
              <div className="competitor-value">✓</div>
              <div className="bookb-value">✓</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Mobile App</div>
              <div className="competitor-value">✓</div>
              <div className="bookb-value">✓</div>
            </div>
            <div className="comparison-row">
              <div className="feature-name">Contract Required</div>
              <div className="competitor-value">Yes</div>
              <div className="bookb-value">No</div>
            </div>
            <div className="comparison-row savings-row">
              <div className="feature-name"><strong>Annual Savings</strong></div>
              <div className="competitor-value">—</div>
              <div className="bookb-value">$3,420</div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Enterprise Features at Independent Pricing</h2>
          <p className="section-subtitle">Professional salon management tools that don't require enterprise budgets</p>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Queue Management</h3>
              <p>Smart queue system eliminates walk-in chaos. Real-time updates, estimated wait times, and SMS notifications keep customers informed and happy.</p>
            </div>
            <div className="feature-visual">
              <p>[Queue Board Screenshot Placeholder]</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Appointment Scheduling</h3>
              <p>Professional booking with automated reminders. Reduce no-shows by 40% with SMS and email confirmations. Online booking integrates seamlessly.</p>
            </div>
            <div className="feature-visual">
              <p>[Calendar Screenshot Placeholder]</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Complete POS System</h3>
              <p>Fast payments with integrated processing. Accept cards, contactless, and digital payments. Track sales, tips, and inventory in one system.</p>
            </div>
            <div className="feature-visual">
              <p>[POS Screenshot Placeholder]</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Branded Mobile App</h3>
              <p>Customized app for your clients. They book appointments, check queue status, and receive notifications. Your salon name, your branding.</p>
            </div>
            <div className="feature-visual">
              <p>[Mobile App Screenshot Placeholder]</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Real-Time Analytics</h3>
              <p>Comprehensive business intelligence. Track busiest hours, top services, stylist performance, and revenue trends. Make data-driven decisions.</p>
            </div>
            <div className="feature-visual">
              <p>[Analytics Screenshot Placeholder]</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Staff Management</h3>
              <p>Schedule, track performance, and manage teams. Digital rota, shift swaps, and performance metrics. Keep your team organized and motivated.</p>
            </div>
            <div className="feature-visual">
              <p>[Staff Rota Screenshot Placeholder]</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2>Choose Your Plan</h2>
          <p className="section-subtitle">Professional salon management at independent pricing. All plans include every feature.</p>
          <div className="pricing-grid">

            <div className="pricing-card">
              <div className="plan-name">Starter</div>
              <div className="plan-price">$15</div>
              <div className="plan-period">/month</div>
              <div className="plan-description">Perfect for solo stylists</div>
              <ul className="plan-features">
                <li>Single owner/stylist</li>
                <li>Queue management</li>
                <li>Appointment scheduling</li>
                <li>POS system</li>
                <li>Mobile app</li>
                <li>Basic analytics</li>
              </ul>
              <a href="/contact" className="btn btn-primary plan-cta">Get Started</a>
            </div>

            <div className="pricing-card featured">
              <div className="popular-badge">Most Popular</div>
              <div className="plan-name">Professional</div>
              <div className="plan-price">$45</div>
              <div className="plan-period">/month</div>
              <div className="plan-description">For growing salons</div>
              <ul className="plan-features">
                <li>Up to 15 stylists</li>
                <li>All Starter features</li>
                <li>Advanced analytics</li>
                <li>Staff management</li>
                <li>Marketing automation</li>
                <li>Priority support</li>
              </ul>
              <a href="/contact" className="btn btn-primary plan-cta">Get Started</a>
            </div>

            <div className="pricing-card">
              <div className="plan-name">Business</div>
              <div className="plan-price">$75</div>
              <div className="plan-period">/month</div>
              <div className="plan-description">For established salons</div>
              <ul className="plan-features">
                <li>Up to 50 stylists</li>
                <li>All Professional features</li>
                <li>Multi-location support</li>
                <li>Advanced integrations</li>
                <li>Custom branding</li>
                <li>Dedicated support</li>
              </ul>
              <a href="/contact" className="btn btn-primary plan-cta">Get Started</a>
            </div>

            <div className="pricing-card">
              <div className="plan-name">Enterprise</div>
              <div className="plan-price">$125</div>
              <div className="plan-period">/month</div>
              <div className="plan-description">For large chains</div>
              <ul className="plan-features">
                <li>Unlimited stylists</li>
                <li>All Business features</li>
                <li>White-label options</li>
                <li>Custom development</li>
                <li>Advanced security</li>
                <li>24/7 support</li>
              </ul>
              <a href="/contact" className="btn btn-primary plan-cta">Contact Sales</a>
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
