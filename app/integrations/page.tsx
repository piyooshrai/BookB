export default function IntegrationsPage() {
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
                BookB integrates with major payment processors including Stripe, Square, and PayPal, giving you flexibility to choose the provider that best fits your needs. Accept all payment methods including credit cards, debit cards, mobile wallets, and buy-now-pay-later options. Competitive processing rates without hidden fees or long-term contracts. Automatic reconciliation matches payments against appointments eliminating manual tracking. PCI-compliant security protects sensitive payment information meeting industry standards. International payment support handles multiple currencies for businesses operating across borders. Split payment capabilities let clients pay with multiple methods on single transactions. Tip management enables card-based gratuity with automatic distribution to team members. Recurring billing automates membership and package payments. Refund processing handles cancellations and adjustments smoothly.
              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Accounting Software</h3>
              <p>
                Seamless integration with QuickBooks, Xero, and other popular accounting platforms eliminates double-entry and ensures financial records stay synchronized. Automatic transaction export sends sales, payments, and refunds to your accounting system daily. Chart of accounts mapping ensures transactions categorize correctly from the start. Tax calculation handles VAT, sales tax, and service charges appropriately. Staff payroll export provides hours worked, services performed, and commission earned. Inventory sync keeps product stock levels accurate across systems. Financial reporting provides business insights while accounting integration maintains official records. Multi-location support separates transactions by location when needed. Historical data import brings existing records into new system smoothly. Bank reconciliation matches deposits against system records identifying discrepancies quickly.
              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Marketing Platforms</h3>
              <p>
                Integration with Mailchimp, Constant Contact, and other email marketing platforms lets you leverage existing campaigns while building customer lists. Automatic list sync adds new clients to email system maintaining single source of truth. Segmentation capabilities target specific client groups with relevant offers. Behavioral triggers send automated messages based on booking patterns and purchase history. Campaign performance tracking shows which promotions drive actual bookings and revenue. Social media integration shares content across Facebook, Instagram, and other platforms from one dashboard. Review management connects with Google My Business, Yelp, and Facebook encouraging satisfied clients to share experiences. SMS marketing reaches clients via text messages with appointment reminders and promotional offers. Referral program tracking identifies advocates and rewards them appropriately.
              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Custom Integrations</h3>
              <p>
                Enterprise customers can access our API to build custom integrations with specialized tools and internal systems. RESTful API provides programmatic access to appointments, clients, services, and transactions. Webhook notifications alert external systems to important events in real-time. OAuth authentication ensures secure access to customer data. Comprehensive documentation helps developers understand available endpoints and data structures. Sandbox environment enables testing before production deployment. Rate limiting protects system performance during high-volume operations. Version control maintains backward compatibility as API evolves. Dedicated support helps enterprise customers implement complex integration requirements. We work with implementation partners who specialize in beauty industry software ensuring smooth deployments.
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
