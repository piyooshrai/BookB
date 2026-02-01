export default function IntegrationsPage() {
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
        <div className="hero-content">
          <h1>Integrations</h1>
          <p className="hero-subtitle">
            Connect BookB with the tools you already use. Our platform integrates seamlessly with popular payment processors, accounting software, and marketing platforms.
          </p>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Available Integrations</h2>
          <div className="feature-item">
            <div className="feature-content">
              <h3>Payment Processing</h3>
              <p>

                BookB integrates with major payment processors including Stripe, Square, and PayPal, giving you flexibility to choose the provider that best fits your needs. Accept all payment methods including credit cards, debit cards, mobile wallets, and buy-now-pay-later options.

              </p>

              <p>

                Competitive processing rates without hidden fees or long-term contracts. Automatic reconciliation matches payments against appointments eliminating manual tracking.

              </p>

              <p>

                PCI-compliant security protects sensitive payment information meeting industry standards. International payment support handles multiple currencies for businesses operating across borders.

              </p>

              <p>

                Split payment capabilities let clients pay with multiple methods on single transactions. Tip management enables card-based gratuity with automatic distribution to team members.

              </p>

              <p>

                Recurring billing automates membership and package payments. Refund processing handles cancellations and adjustments smoothly.

              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Accounting Software</h3>
              <p>

                Seamless integration with QuickBooks, Xero, and other popular accounting platforms eliminates double-entry and ensures financial records stay synchronized. Automatic transaction export sends sales, payments, and refunds to your accounting system daily.

              </p>

              <p>

                Chart of accounts mapping ensures transactions categorize correctly from the start. Tax calculation handles VAT, sales tax, and service charges appropriately.

              </p>

              <p>

                Staff payroll export provides hours worked, services performed, and commission earned. Inventory sync keeps product stock levels accurate across systems.

              </p>

              <p>

                <strong>Financial Reporting:</strong> Provides business insights while accounting integration maintains official records. Multi-location support separates transactions by location when needed.

              </p>

              <p>

                Historical data import brings existing records into new system smoothly. Bank reconciliation matches deposits against system records identifying discrepancies quickly.

              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Marketing Platforms</h3>
              <p>

                Integration with Mailchimp, Constant Contact, and other email marketing platforms lets you leverage existing campaigns while building customer lists. Automatic list sync adds new clients to email system maintaining single source of truth.

              </p>

              <p>

                Segmentation capabilities target specific client groups with relevant offers. Behavioral triggers send automated messages based on booking patterns and purchase history.

              </p>

              <p>

                Campaign performance tracking shows which promotions drive actual bookings and revenue. Social media integration shares content across Facebook, Instagram, and other platforms from one dashboard.

              </p>

              <p>

                Review management connects with Google My Business, Yelp, and Facebook encouraging satisfied clients to share experiences. SMS marketing reaches clients via text messages with appointment reminders and promotional offers.

              </p>

              <p>

                Referral program tracking identifies advocates and rewards them appropriately.

              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Custom Integrations</h3>
              <p>

                Enterprise customers can access our API to build custom integrations with specialized tools and internal systems. RESTful API provides programmatic access to appointments, clients, services, and transactions.

              </p>

              <p>

                Webhook notifications alert external systems to important events in real-time. OAuth authentication ensures secure access to customer data.

              </p>

              <p>

                Comprehensive documentation helps developers understand available endpoints and data structures. Sandbox environment enables testing before production deployment.

              </p>

              <p>

                Rate limiting protects system performance during high-volume operations. Version control maintains backward compatibility as API evolves.

              </p>

              <p>

                Dedicated support helps enterprise customers implement complex integration requirements. We work with implementation partners who specialize in beauty industry software ensuring smooth deployments.

              </p>
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
