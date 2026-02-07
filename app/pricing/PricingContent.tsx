'use client';

import { useEffect, useState } from 'react';
import { Region, REGIONAL_PRICING, formatPrice } from '@/lib/pricing';
import { detectLocation } from '@/lib/geo';
import TrialModal from '@/app/components/TrialModal';

export default function PricingContent() {
  const [region, setRegion] = useState<Region>('US');
  const [isLoading, setIsLoading] = useState(true);
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  useEffect(() => {
    detectLocation()
      .then((location) => {
        setRegion(location.region);
      })
      .catch(() => {
        setRegion('US'); // Fallback to US
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const pricing = REGIONAL_PRICING[region];

  const handleTrialClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsTrialModalOpen(true);
  };

  if (isLoading) {
    return (
      <section className="pricing">
        <div className="container">
          <h2>Choose Your Plan</h2>
          <p className="section-subtitle">Loading pricing for your region...</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="pricing">
        <div className="container">
          <h2>Choose Your Plan</h2>
          <p className="section-subtitle">All plans include unlimited appointments, clients, and bookings</p>

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-tier">Starter</div>
              <div className="pricing-price">
                <span className="currency">{pricing.symbol}</span>
                <span className="amount">{pricing.starter}</span>
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
              <a href="#trial" className="btn btn-secondary" onClick={handleTrialClick}>Start Free Trial</a>
            </div>

            <div className="pricing-card featured">
              <div className="badge">Most Popular</div>
              <div className="pricing-tier">Professional</div>
              <div className="pricing-price">
                <span className="currency">{pricing.symbol}</span>
                <span className="amount">{pricing.professional}</span>
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
              <a href="#trial" className="btn btn-primary" onClick={handleTrialClick}>Start Free Trial</a>
            </div>

            <div className="pricing-card">
              <div className="pricing-tier">Business</div>
              <div className="pricing-price">
                <span className="currency">{pricing.symbol}</span>
                <span className="amount">{pricing.business}</span>
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
              <a href="#trial" className="btn btn-secondary" onClick={handleTrialClick}>Start Free Trial</a>
            </div>

            <div className="pricing-card">
              <div className="pricing-tier">Enterprise</div>
              <div className="pricing-price">
                <span className="currency">{pricing.symbol}</span>
                <span className="amount">{pricing.enterprise}</span>
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

      <TrialModal isOpen={isTrialModalOpen} onClose={() => setIsTrialModalOpen(false)} />
    </>
  );
}
