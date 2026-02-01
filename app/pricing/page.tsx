import Image from 'next/image'
import { images } from '@/lib/unsplash-images'

export default function PricingPage() {
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
          <h1>Simple, Transparent Pricing</h1>
          <p className="hero-subtitle">
            Professional salon management software at pricing that makes sense for your business. No hidden fees, no setup costs, no annual contracts. Just honest pricing that scales as you grow. BookB provides enterprise-level features at independent business pricing, helping salons worldwide streamline operations and increase revenue.
          </p>
          <div className="cta-buttons">
            <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            <a href="/contact" className="btn btn-secondary">Contact Sales</a>
          </div>
          <p className="trust-line">Trusted by 1,000+ salons · No credit card required</p>
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

      <section className="pricing">
        <div className="container">
          <h2>Choose Your Plan</h2>
          <p className="section-subtitle">All plans include unlimited appointments, clients, and bookings</p>

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-tier">Starter</div>
              <div className="pricing-price">
                <span className="currency">£</span>
                <span className="amount">15</span>
                <span className="period">/month</span>
              </div>
              <div className="pricing-features">
                <div className="feature-item">✓ 1 staff member</div>
                <div className="feature-item">✓ Unlimited appointments</div>
                <div className="feature-item">✓ Online booking widget</div>
                <div className="feature-item">✓ Client management</div>
                <div className="feature-item">✓ Basic POS system</div>
                <div className="feature-item">✓ SMS reminders</div>
                <div className="feature-item">✓ Mobile app access</div>
                <div className="feature-item">✓ Email support</div>
              </div>
              <a href="#trial" className="btn btn-secondary">Start Free Trial</a>
            </div>

            <div className="pricing-card featured">
              <div className="badge">Most Popular</div>
              <div className="pricing-tier">Professional</div>
              <div className="pricing-price">
                <span className="currency">£</span>
                <span className="amount">35</span>
                <span className="period">/month</span>
              </div>
              <div className="pricing-features">
                <div className="feature-item">✓ Up to 5 staff members</div>
                <div className="feature-item">✓ All Starter features</div>
                <div className="feature-item">✓ Advanced analytics</div>
                <div className="feature-item">✓ Inventory management</div>
                <div className="feature-item">✓ Email marketing (1,000/month)</div>
                <div className="feature-item">✓ Custom branding</div>
                <div className="feature-item">✓ Staff performance reports</div>
                <div className="feature-item">✓ Priority support</div>
              </div>
              <a href="#trial" className="btn btn-primary">Start Free Trial</a>
            </div>

            <div className="pricing-card">
              <div className="pricing-tier">Business</div>
              <div className="pricing-price">
                <span className="currency">£</span>
                <span className="amount">75</span>
                <span className="period">/month</span>
              </div>
              <div className="pricing-features">
                <div className="feature-item">✓ Up to 15 staff members</div>
                <div className="feature-item">✓ All Professional features</div>
                <div className="feature-item">✓ Multi-location support</div>
                <div className="feature-item">✓ Advanced reporting</div>
                <div className="feature-item">✓ Email marketing (5,000/month)</div>
                <div className="feature-item">✓ API access</div>
                <div className="feature-item">✓ Loyalty programs</div>
                <div className="feature-item">✓ Dedicated account manager</div>
              </div>
              <a href="#trial" className="btn btn-secondary">Start Free Trial</a>
            </div>

            <div className="pricing-card">
              <div className="pricing-tier">Enterprise</div>
              <div className="pricing-price">
                <span className="currency">£</span>
                <span className="amount">150</span>
                <span className="period">/month</span>
              </div>
              <div className="pricing-features">
                <div className="feature-item">✓ Unlimited staff members</div>
                <div className="feature-item">✓ All Business features</div>
                <div className="feature-item">✓ Custom integrations</div>
                <div className="feature-item">✓ White-label option</div>
                <div className="feature-item">✓ Unlimited email marketing</div>
                <div className="feature-item">✓ 99.9% uptime SLA</div>
                <div className="feature-item">✓ Custom contracts</div>
                <div className="feature-item">✓ 24/7 phone support</div>
              </div>
              <a href="/contact" className="btn btn-secondary">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Frequently Asked Questions</h2>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Is there a setup fee?</h3>
              <p>

                No, BookB has zero setup fees. Unlike competitors like Zenoti which charge £500+ for setup and implementation, you can start using BookB immediately with no upfront costs.

              </p>

              <p>

                We believe software should be accessible to businesses of all sizes, which is why we eliminated setup fees entirely. Your first month begins when you activate your account, and you only pay the monthly subscription rate for your chosen plan.

              </p>

              <p>

                This approach saves you hundreds of pounds compared to traditional salon software providers who charge expensive onboarding fees on top of monthly subscriptions. Many salons switching from competitors like Zenoti or Phorest tell us the lack of setup fees was a major factor in their decision to choose BookB.

              </p>

              <p>

                We want to remove barriers to entry so you can start improving your salon operations immediately without significant upfront investment.

              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Can I cancel anytime?</h3>
              <p>

                Yes, absolutely. BookB operates on month-to-month billing with no annual contracts or long-term commitments required.

              </p>

              <p>

                You can cancel your subscription at any time without penalties, fees, or complicated cancellation processes. Simply notify us before your next billing date and your subscription will end at the end of your current billing period.

              </p>

              <p>

                This flexibility contrasts sharply with many competitors who lock customers into 12-month or 24-month contracts with expensive early termination fees. We believe you should stay with BookB because you love the software, not because you are trapped in a contract.

              </p>

              <p>

                Your subscription continues month-to-month unless you actively cancel, giving you complete control over your commitment level. We also make cancellation simple - no phone calls required, no retention specialists trying to convince you to stay, just straightforward online cancellation through your account settings.

              </p>

              <p>

                If you decide to return later, reactivating your account is equally simple with all your historical data preserved.

              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Do you offer a free trial?</h3>
              <p>

                Yes! We offer a full 14-day free trial with complete access to all features in your chosen plan.

              </p>

              <p>

                No credit card required to start your trial, so there is no risk of unexpected charges. During your trial period you can explore every aspect of BookB including appointment booking, client management, point of sale, marketing automation, reporting, and all other features.

              </p>

              <p>

                Import your existing client data, set up your services and pricing, configure your booking widget, and run the system exactly as you would as a paying customer. Our goal is for you to thoroughly evaluate BookB and determine if it meets your needs before committing financially.

              </p>

              <p>

                Many competitors require credit card details upfront and automatically charge you unless you remember to cancel, but we take a different approach. Your trial ends after 14 days and you only get charged if you actively choose to subscribe.

              </p>

              <p>

                We also provide dedicated onboarding support during your trial ensuring you get maximum value from the evaluation period. Most salons know within the first week whether BookB fits their needs, but we provide two full weeks to be thorough.

              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>What happens if I exceed my staff limit?</h3>
              <p>

                You can upgrade to the next tier at any time with prorated billing so you only pay for what you use. If you start on the Starter plan with 1 staff member and hire a second stylist, simply upgrade to Professional which supports up to 5 staff members.

              </p>

              <p>

                We calculate the prorated difference between your current plan and new plan for the remainder of your billing period, charge only that difference, and your new plan takes effect immediately. This ensures you are never blocked from adding staff when you need to grow your team.

              </p>

              <p>

                The upgrade process takes less than a minute through your account settings with no phone calls or approval processes required. Similarly, if your business contracts and you need fewer staff seats, you can downgrade to a lower tier at the end of your current billing period.

              </p>

              <p>

                This flexibility ensures your software costs scale appropriately with your business size. Many salons grow from solo operations to multi-stylist teams over time, and BookB makes that transition seamless without forcing you to overpay for features you do not need yet.

              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Do you offer discounts for annual payments?</h3>
              <p>

                Yes, pay annually and save 20% on any plan. For example, the Professional plan costs £35/month with monthly billing or £336/year with annual billing - a savings of £84 per year.

              </p>

              <p>

                Annual billing provides predictable costs for budgeting purposes while delivering significant savings compared to monthly payments. You pay the full annual amount upfront and your subscription remains active for 12 months without additional charges.

              </p>

              <p>

                At the end of your annual period you can renew for another year or switch to monthly billing if your circumstances change. Annual billing works particularly well for established salons with stable operations who value the cost savings and simplified accounting.

              </p>

              <p>

                The 20% discount applies to Starter, Professional, and Business plans, while Enterprise customers work with dedicated account managers to structure custom agreements that might include multi-year terms with even better rates. Contact our sales team to discuss annual billing options and see exactly how much you would save based on your specific plan requirements.

              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Is customer support included?</h3>
              <p>

                Yes! All plans include customer support with response times and channels varying by tier.

              </p>

              <p>

                Starter plan includes email and chat support with responses within 24 hours during business days. Professional plan adds priority support with faster response times typically within 4 hours.

              </p>

              <p>

                Business plan includes dedicated account manager who knows your business and provides personalized assistance. Enterprise plan provides 24/7 phone support with guaranteed response times covered by our SLA.

              </p>

              <p>

                Our support team understands salon operations and can help with technical issues, feature questions, workflow optimization, and best practices. We also provide extensive self-service resources including video tutorials, documentation, and knowledge base articles covering every aspect of the system.

              </p>

              <p>

                Many common questions can be resolved instantly through these resources without waiting for support responses. Regular webinars and training sessions help you master advanced features and learn tips from other salon owners.

              </p>

              <p>

                The combination of responsive human support and comprehensive self-service resources ensures you always have help when you need it.

              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Can you migrate my data from another platform?</h3>
              <p>

                Yes, we offer free data migration from any salon software including Zenoti, Fresha, Phorest, Boulevard, Vagaro, Square Appointments, and others. Our migration team handles the technical process of extracting your client records, appointment history, service catalog, pricing, staff information, and other critical data from your existing system and importing it correctly into BookB.

              </p>

              <p>

                This ensures you do not lose years of valuable business information when switching platforms. The migration process typically takes 3-5 business days depending on data volume and source system.

              </p>

              <p>

                We schedule migrations carefully to minimize disruption, often completing transfers over weekends or slow periods. You can continue using your old system right up until the migration completes, then switch to BookB seamlessly.

              </p>

              <p>

                Our team validates all migrated data ensuring accuracy and completeness before declaring the migration successful. We also provide parallel running support where you can test BookB with your real data before fully committing to the switch.

              </p>

              <p>

                This de-risks the transition and gives you confidence that everything works correctly before you stop paying for your old system.

              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Are there any transaction fees?</h3>
              <p>

                No! Unlike Fresha which charges 5-10% transaction fees on every booking, BookB charges zero transaction fees regardless of your plan level.

              </p>

              <p>

                You keep 100% of your revenue without paying us a percentage of each sale. This makes a massive difference to your bottom line especially as your business grows.

              </p>

              <p>

                A salon processing £50,000 annually in bookings would pay Fresha £2,500-£5,000 per year in transaction fees on top of their subscription cost. With BookB you pay only your monthly subscription regardless of revenue volume.

              </p>

              <p>

                This pricing structure aligns our success with yours - we want you to grow revenue without penalizing that growth through transaction fees. You will still pay payment processing fees to your payment processor (Stripe, Square, etc.) which is standard across all software platforms, but BookB itself takes no percentage of your transactions.

              </p>

              <p>

                This transparent pricing model means you can accurately predict your software costs without worrying about variable transaction fees eating into margins. For high-volume salons the savings versus transaction-fee-based competitors can reach thousands of pounds annually.

              </p>
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
