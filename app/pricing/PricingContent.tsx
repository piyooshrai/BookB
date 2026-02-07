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

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            maxWidth: '1200px',
            margin: '3rem auto 0'
          }}
          className="pricing-grid-3"
          >
            {/* Starter Plan */}
            <div style={{
              background: 'white',
              border: '2px solid #E5E7EB',
              borderRadius: '16px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: '0.5rem'
                }}>Starter</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text)' }}>
                    {pricing.symbol}{pricing.starter}
                  </span>
                  <span style={{ fontSize: '1.125rem', color: 'var(--text-light)' }}>/month</span>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-light)', margin: 0 }}>
                  Perfect for solo stylists
                </p>
              </div>

              <div style={{ flex: 1, marginBottom: '1.5rem' }}>
                {[
                  '1 staff member',
                  'Unlimited appointments',
                  'Online booking widget',
                  'Client management',
                  'Basic POS system',
                  'SMS reminders',
                  'Mobile app access',
                  'Email support'
                ].map((feature, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    marginBottom: '0.875rem'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <circle cx="10" cy="10" r="10" fill="#10B981"/>
                      <path d="M14 7L8.5 12.5L6 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ fontSize: '0.9375rem', color: 'var(--text)' }}>{feature}</span>
                  </div>
                ))}
              </div>

              <a href="#trial" className="btn btn-secondary" style={{
                width: '100%',
                textAlign: 'center',
                padding: '0.875rem',
                fontSize: '1rem',
                fontWeight: 600
              }} onClick={handleTrialClick}>
                Start Free Trial
              </a>
            </div>

            {/* Professional Plan - Featured */}
            <div style={{
              background: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
              border: 'none',
              borderRadius: '16px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              transform: 'scale(1.05)',
              boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)'
            }}>
              <div style={{
                position: 'absolute',
                top: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#FFD700',
                color: '#0F172A',
                padding: '0.375rem 1rem',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Most Popular
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'white',
                  marginBottom: '0.5rem'
                }}>Professional</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white' }}>
                    {pricing.symbol}{pricing.professional}
                  </span>
                  <span style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.8)' }}>/month</span>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.9)', margin: 0 }}>
                  Best for most salons
                </p>
              </div>

              <div style={{ flex: 1, marginBottom: '1.5rem' }}>
                {[
                  'Up to 15 staff members',
                  'All Starter features',
                  'Advanced analytics & reporting',
                  'Inventory management',
                  'Multi-location support',
                  'Custom branding',
                  'Priority support'
                ].map((feature, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    marginBottom: '0.875rem'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <circle cx="10" cy="10" r="10" fill="white"/>
                      <path d="M14 7L8.5 12.5L6 10" stroke="#667EEA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ fontSize: '0.9375rem', color: 'white' }}>{feature}</span>
                  </div>
                ))}
              </div>

              <a href="#trial" style={{
                width: '100%',
                textAlign: 'center',
                padding: '0.875rem',
                fontSize: '1rem',
                fontWeight: 700,
                background: 'white',
                color: '#667EEA',
                borderRadius: '8px',
                textDecoration: 'none',
                display: 'block',
                transition: 'all 0.2s ease'
              }} onClick={handleTrialClick}>
                Start Free Trial
              </a>
            </div>

            {/* Enterprise Plan */}
            <div style={{
              background: 'white',
              border: '2px solid #E5E7EB',
              borderRadius: '16px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: '0.5rem'
                }}>Enterprise</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text)' }}>
                    {typeof pricing.enterprise === 'string' ? pricing.enterprise : `${pricing.symbol}${pricing.enterprise}`}
                  </span>
                  <span style={{ fontSize: '1.125rem', color: 'var(--text-light)' }}>
                    {typeof pricing.enterprise === 'string' ? '' : '/month'}
                  </span>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-light)', margin: 0 }}>
                  For large salon groups
                </p>
              </div>

              <div style={{ flex: 1, marginBottom: '1.5rem' }}>
                {[
                  'Unlimited staff & locations',
                  'All Professional features',
                  '99.9% uptime SLA',
                  'Custom contracts & pricing',
                  '24/7 priority phone support'
                ].map((feature, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    marginBottom: '0.875rem'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <circle cx="10" cy="10" r="10" fill="#10B981"/>
                      <path d="M14 7L8.5 12.5L6 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ fontSize: '0.9375rem', color: 'var(--text)' }}>{feature}</span>
                  </div>
                ))}
              </div>

              <a href="/contact" className="btn btn-secondary" style={{
                width: '100%',
                textAlign: 'center',
                padding: '0.875rem',
                fontSize: '1rem',
                fontWeight: 600
              }}>
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      <TrialModal isOpen={isTrialModalOpen} onClose={() => setIsTrialModalOpen(false)} />
    </>
  );
}
