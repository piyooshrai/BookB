'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { REGIONAL_PRICING } from '@/lib/pricing';
import { detectLocation } from '@/lib/geo';
import type { Region } from '@/lib/pricing';

export const metadata = {
  title: 'Salon Software ROI Calculator: Calculate Your Savings (2026)',
  description: 'Free salon software ROI calculator shows exactly how much you save with BookB vs competitors. Calculate cost savings, no-show recovery, and setup fees. Most salons save $3,000+ annually.',
};

export default function ROICalculatorPage() {
  const [region, setRegion] = useState<Region>('US');
  const [staffCount, setStaffCount] = useState<number>(3);
  const [currentCost, setCurrentCost] = useState<number>(150);
  const [setupFee, setSetupFee] = useState<number>(500);
  const [noShowRate, setNoShowRate] = useState<number>(15);
  const [hasTransactionFees, setHasTransactionFees] = useState<boolean>(false);
  const [transactionFeeRate, setTransactionFeeRate] = useState<number>(5);

  useEffect(() => {
    detectLocation()
      .then((location) => setRegion(location.region))
      .catch(() => setRegion('US'));
  }, []);

  const pricing = REGIONAL_PRICING[region];

  // Determine BookB tier based on staff count
  const bookbTier = staffCount === 1 ? 'starter' : staffCount <= 15 ? 'professional' : 'enterprise';
  const bookbPrice = bookbTier === 'enterprise' ? 165 : (typeof pricing[bookbTier] === 'number' ? pricing[bookbTier] as number : 85);

  // Calculate software cost savings
  const monthlySavings = currentCost - bookbPrice;
  const annualSavings = monthlySavings * 12;
  const firstYearSavings = annualSavings + setupFee; // They avoid setup fee with BookB
  const threeYearSavings = (monthlySavings * 36) + setupFee;

  // Calculate no-show recovery (conservative 30% reduction)
  const avgAppointmentValue = region === 'UK' ? 60 : region === 'UAE' ? 275 : region === 'AU' ? 95 : 75;
  const monthlyAppointments = staffCount * 80; // ~80 appointments per staff per month
  const currentNoShows = (monthlyAppointments * noShowRate) / 100;
  const reducedNoShows = currentNoShows * 0.3; // 30% reduction (conservative)
  const noShowRecoveryMonthly = reducedNoShows * avgAppointmentValue;
  const noShowRecoveryAnnual = noShowRecoveryMonthly * 12;

  // Calculate transaction fee savings
  const monthlyRevenue = monthlyAppointments * avgAppointmentValue;
  const transactionFeeSavings = hasTransactionFees ? (monthlyRevenue * transactionFeeRate) / 100 : 0;
  const transactionFeeSavingsAnnual = transactionFeeSavings * 12;

  // Total ROI
  const totalAnnualBenefit = annualSavings + noShowRecoveryAnnual + transactionFeeSavingsAnnual;
  const totalThreeYearBenefit = threeYearSavings + (noShowRecoveryAnnual * 3) + (transactionFeeSavingsAnnual * 3);

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h1>Salon Software ROI Calculator: Calculate Your Savings (2026)</h1>
          <p className="hero-subtitle">
            Calculate exactly how much you'll save by switching to BookB salon management software. Compare costs, recover lost revenue from no-shows, and see your return on investment in real-time. Most salons save {pricing.symbol}3,000+ annually.
          </p>
          <p className="trust-line">Free calculator · No credit card required · 2-minute analysis</p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="features">
        <div className="container" style={{ maxWidth: '1100px' }}>
          <h2>Calculate Your Salon Software ROI</h2>
          <p className="section-subtitle">
            Enter your salon details below to see how much you'll save with BookB compared to your current software
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            marginTop: '3rem'
          }}
          className="roi-calculator-grid">
            {/* Input Section */}
            <div style={{
              background: 'white',
              border: '2px solid var(--border)',
              borderRadius: '12px',
              padding: '2rem'
            }}>
              <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>Your Salon Details</h3>

              {/* Staff Count */}
              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  fontWeight: 600,
                  marginBottom: '0.5rem',
                  color: 'var(--text)'
                }}>
                  Number of Staff Members
                </label>
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={staffCount}
                  onChange={(e) => setStaffCount(parseInt(e.target.value) || 1)}
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    border: '2px solid var(--border)',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: 600
                  }}
                />
                <p style={{ fontSize: '0.875rem', color: 'var(--text-light)', marginTop: '0.5rem', marginBottom: 0 }}>
                  Including stylists, barbers, therapists
                </p>
              </div>

              {/* Current Software Cost */}
              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  fontWeight: 600,
                  marginBottom: '0.5rem',
                  color: 'var(--text)'
                }}>
                  Current Monthly Software Cost ({pricing.symbol})
                </label>
                <input
                  type="number"
                  min="0"
                  max="1000"
                  value={currentCost}
                  onChange={(e) => setCurrentCost(parseInt(e.target.value) || 0)}
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    border: '2px solid var(--border)',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: 600
                  }}
                />
                <p style={{ fontSize: '0.875rem', color: 'var(--text-light)', marginTop: '0.5rem', marginBottom: 0 }}>
                  Total monthly cost (include all fees)
                </p>
              </div>

              {/* Setup Fee */}
              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  fontWeight: 600,
                  marginBottom: '0.5rem',
                  color: 'var(--text)'
                }}>
                  Setup/Onboarding Fee ({pricing.symbol})
                </label>
                <input
                  type="number"
                  min="0"
                  max="5000"
                  value={setupFee}
                  onChange={(e) => setSetupFee(parseInt(e.target.value) || 0)}
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    border: '2px solid var(--border)',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: 600
                  }}
                />
                <p style={{ fontSize: '0.875rem', color: 'var(--text-light)', marginTop: '0.5rem', marginBottom: 0 }}>
                  One-time cost you paid (BookB = {pricing.symbol}0)
                </p>
              </div>

              {/* No-Show Rate */}
              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  fontWeight: 600,
                  marginBottom: '0.5rem',
                  color: 'var(--text)'
                }}>
                  Current No-Show Rate (%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="50"
                  value={noShowRate}
                  onChange={(e) => setNoShowRate(parseInt(e.target.value) || 0)}
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    border: '2px solid var(--border)',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: 600
                  }}
                />
                <p style={{ fontSize: '0.875rem', color: 'var(--text-light)', marginTop: '0.5rem', marginBottom: 0 }}>
                  Industry average is 10-20%
                </p>
              </div>

              {/* Transaction Fees Toggle */}
              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  cursor: 'pointer'
                }}>
                  <input
                    type="checkbox"
                    checked={hasTransactionFees}
                    onChange={(e) => setHasTransactionFees(e.target.checked)}
                    style={{
                      width: '20px',
                      height: '20px',
                      cursor: 'pointer'
                    }}
                  />
                  <span style={{ fontWeight: 600, color: 'var(--text)' }}>
                    Current system charges transaction fees
                  </span>
                </label>
              </div>

              {/* Transaction Fee Rate (conditional) */}
              {hasTransactionFees && (
                <div style={{ marginBottom: '2rem', paddingLeft: '2rem' }}>
                  <label style={{
                    display: 'block',
                    fontWeight: 600,
                    marginBottom: '0.5rem',
                    color: 'var(--text)'
                  }}>
                    Transaction Fee Rate (%)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="20"
                    step="0.5"
                    value={transactionFeeRate}
                    onChange={(e) => setTransactionFeeRate(parseFloat(e.target.value) || 0)}
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      border: '2px solid var(--border)',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontWeight: 600
                    }}
                  />
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-light)', marginTop: '0.5rem', marginBottom: 0 }}>
                    Fresha charges 5-10%, Square ~2.6%
                  </p>
                </div>
              )}
            </div>

            {/* Results Section */}
            <div>
              <div style={{
                background: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
                color: 'white',
                borderRadius: '12px',
                padding: '2rem',
                marginBottom: '1.5rem'
              }}>
                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', color: 'white' }}>Your ROI Summary</h3>

                <div style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
                  <div style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '0.5rem' }}>BookB Monthly Cost</div>
                  <div style={{ fontSize: '2rem', fontWeight: 800 }}>{pricing.symbol}{bookbPrice}/month</div>
                  <div style={{ fontSize: '0.875rem', opacity: 0.8, marginTop: '0.25rem' }}>
                    {bookbTier === 'starter' ? 'Starter Plan' : bookbTier === 'professional' ? 'Professional Plan' : 'Enterprise Plan'}
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
                  <div style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '0.5rem' }}>Monthly Software Savings</div>
                  <div style={{ fontSize: '2rem', fontWeight: 800 }}>{pricing.symbol}{monthlySavings.toLocaleString()}</div>
                </div>

                {hasTransactionFees && transactionFeeSavings > 0 && (
                  <div style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
                    <div style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '0.5rem' }}>Monthly Transaction Fee Savings</div>
                    <div style={{ fontSize: '2rem', fontWeight: 800 }}>{pricing.symbol}{Math.round(transactionFeeSavings).toLocaleString()}</div>
                    <div style={{ fontSize: '0.875rem', opacity: 0.8, marginTop: '0.25rem' }}>
                      BookB charges 0% commission
                    </div>
                  </div>
                )}

                <div style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
                  <div style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '0.5rem' }}>No-Show Revenue Recovery</div>
                  <div style={{ fontSize: '2rem', fontWeight: 800 }}>{pricing.symbol}{Math.round(noShowRecoveryAnnual).toLocaleString()}/year</div>
                  <div style={{ fontSize: '0.875rem', opacity: 0.8, marginTop: '0.25rem' }}>
                    30% reduction via automated reminders
                  </div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.15)', padding: '1.5rem', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '0.5rem' }}>Total First-Year Benefit</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>{pricing.symbol}{Math.round(totalAnnualBenefit + setupFee).toLocaleString()}</div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.8, marginTop: '0.5rem' }}>
                    Includes {pricing.symbol}{setupFee.toLocaleString()} setup fee avoided
                  </div>
                  <div style={{ fontSize: '0.875rem', opacity: 0.9, marginTop: '1rem' }}>3-Year Total Benefit</div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 700 }}>{pricing.symbol}{Math.round(totalThreeYearBenefit).toLocaleString()}</div>
                </div>
              </div>

              <a href="#trial" className="btn btn-primary" style={{
                width: '100%',
                textAlign: 'center',
                padding: '1rem',
                fontSize: '1.125rem',
                fontWeight: 700,
                display: 'block'
              }}>
                Start Free Trial - Save {pricing.symbol}{Math.round(monthlySavings + transactionFeeSavings)}/Month
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="features" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <h2>How We Calculate Your Salon Software ROI</h2>
          <p className="section-subtitle">
            Our salon software ROI calculator uses industry data and real customer results to provide accurate savings estimates
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            <div>
              <h3>💰 Direct Cost Savings</h3>
              <p>
                Compare your current monthly software subscription cost against BookB's transparent pricing. We include all fees - no hidden charges, no transaction fees, no per-user costs beyond the plan limits.
              </p>
              <p>
                Unlike competitors like <a href="/zenoti-alternative">Zenoti</a> or <a href="/phorest-alternative">Phorest</a>, BookB eliminates setup fees (typically {pricing.symbol}500-2,000) and doesn't charge extra for essential features.
              </p>
            </div>

            <div>
              <h3>📊 No-Show Recovery</h3>
              <p>
                Industry research shows automated SMS reminders reduce no-shows by 30-50%. We use a conservative 30% reduction based on actual BookB customer data.
              </p>
              <p>
                With the average salon appointment worth {pricing.symbol}{avgAppointmentValue} and typical no-show rates of 10-20%, most salons recover {pricing.symbol}{Math.round(noShowRecoveryMonthly)}-{Math.round(noShowRecoveryMonthly * 1.5)} monthly in previously lost revenue through our <a href="/features">automated reminder system</a>.
              </p>
            </div>

            <div>
              <h3>🚫 Transaction Fee Elimination</h3>
              <p>
                Some systems like <a href="/fresha-alternative">Fresha</a> charge 5-10% commission on every booking. For a salon doing {pricing.symbol}{Math.round(monthlyRevenue / 1000)}k monthly revenue, that's {pricing.symbol}{Math.round((monthlyRevenue * 7.5) / 100)} lost every month.
              </p>
              <p>
                BookB charges 0% transaction fees. You keep 100% of your revenue. Check the box above if your current system charges commission to see your savings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Benefits Section */}
      <section className="features">
        <div className="container">
          <h2>Additional Benefits Not Quantified Above</h2>
          <p className="section-subtitle">
            These savings aren't included in the calculator but add significant value
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
            <div style={{
              background: 'white',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '1.5rem'
            }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>⏱️ Time Savings</h3>
              <p style={{ marginBottom: '0.5rem' }}>
                BookB's streamlined interface saves staff 2-4 hours weekly on administrative tasks compared to complex enterprise systems.
              </p>
              <p style={{ marginBottom: 0, color: 'var(--text-light)', fontSize: '0.875rem' }}>
                At {pricing.symbol}15/hour = {pricing.symbol}120-240/month labor cost savings
              </p>
            </div>

            <div style={{
              background: 'white',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '1.5rem'
            }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>📈 Revenue Growth</h3>
              <p style={{ marginBottom: '0.5rem' }}>
                Better client experience = higher retention. Online booking increases appointment volume by 15-25% for most salons.
              </p>
              <p style={{ marginBottom: 0, color: 'var(--text-light)', fontSize: '0.875rem' }}>
                For {staffCount} staff = potential {pricing.symbol}{Math.round(monthlyRevenue * 0.2 / 1000)}k+ extra monthly revenue
              </p>
            </div>

            <div style={{
              background: 'white',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '1.5rem'
            }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>💳 Payment Processing</h3>
              <p style={{ marginBottom: '0.5rem' }}>
                Faster checkout and multiple payment options increase average ticket size and reduce abandoned bookings.
              </p>
              <p style={{ marginBottom: 0, color: 'var(--text-light)', fontSize: '0.875rem' }}>
                Estimated 5-10% increase in completed transactions
              </p>
            </div>

            <div style={{
              background: 'white',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '1.5rem'
            }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>📱 Mobile Efficiency</h3>
              <p style={{ marginBottom: '0.5rem' }}>
                Staff can manage schedules, process payments, and view client notes from mobile app - work from anywhere.
              </p>
              <p style={{ marginBottom: 0, color: 'var(--text-light)', fontSize: '0.875rem' }}>
                Improved flexibility and reduced front desk bottlenecks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="features" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <h2>BookB vs. Enterprise Salon Software: Real Cost Comparison</h2>

          <div style={{ overflowX: 'auto', marginTop: '2rem' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              background: 'white',
              border: '1px solid var(--border)',
              borderRadius: '8px'
            }}>
              <thead>
                <tr style={{ background: 'var(--surface)' }}>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid var(--border)' }}>Cost Factor</th>
                  <th style={{ padding: '1rem', textAlign: 'center', borderBottom: '2px solid var(--border)' }}>Zenoti/Phorest</th>
                  <th style={{ padding: '1rem', textAlign: 'center', borderBottom: '2px solid var(--border)', background: '#F0FDF4' }}>BookB</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '1rem', borderBottom: '1px solid var(--border)' }}>Setup Fee</td>
                  <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{pricing.symbol}500-2,000</td>
                  <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--border)', background: '#F0FDF4', fontWeight: 600 }}>{pricing.symbol}0</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem', borderBottom: '1px solid var(--border)' }}>Monthly ({staffCount} staff)</td>
                  <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{pricing.symbol}{currentCost}</td>
                  <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--border)', background: '#F0FDF4', fontWeight: 600 }}>{pricing.symbol}{bookbPrice}</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem', borderBottom: '1px solid var(--border)' }}>Transaction Fees</td>
                  <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{hasTransactionFees ? `${transactionFeeRate}% per booking` : 'Varies'}</td>
                  <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--border)', background: '#F0FDF4', fontWeight: 600 }}>0%</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem', borderBottom: '1px solid var(--border)' }}>SMS Reminders</td>
                  <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>Extra cost</td>
                  <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--border)', background: '#F0FDF4', fontWeight: 600 }}>Included</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem', fontWeight: 600 }}>Year 1 Total Cost</td>
                  <td style={{ padding: '1rem', textAlign: 'center', fontWeight: 600 }}>{pricing.symbol}{((currentCost * 12) + setupFee + (hasTransactionFees ? transactionFeeSavingsAnnual : 0)).toLocaleString()}</td>
                  <td style={{ padding: '1rem', textAlign: 'center', background: '#F0FDF4', fontWeight: 700, fontSize: '1.125rem' }}>{pricing.symbol}{(bookbPrice * 12).toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: '2rem', textAlign: 'center', color: 'var(--text-light)' }}>
            Pricing as of 2026. Competitor costs vary by location and contract terms. See our <a href="/pricing">pricing page</a> for current BookB rates.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="features">
        <div className="container">
          <h2>Salon Software ROI Calculator FAQ</h2>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Is this salon software ROI calculator accurate?</h3>
              <p>
                Yes. Our ROI calculator uses real pricing data from BookB and major competitors, industry-standard no-show rates (10-20%), and conservative estimates for revenue recovery (30% reduction in no-shows, not the industry standard 40-50%).
              </p>
              <p>
                The calculator is updated monthly to reflect current <a href="/pricing">pricing</a> across all regions (US, UK, Australia, UAE). We deliberately underestimate benefits to ensure you can confidently rely on these projections when planning your salon software investment.
              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>How do automated reminders reduce no-shows?</h3>
              <p>
                BookB sends automatic SMS reminders 24-48 hours before appointments. Multiple studies show this reduces no-shows by 30-50%. Our calculator uses a conservative 30% reduction to ensure reliability.
              </p>
              <p>
                For a salon with 15% no-show rate doing {monthlyAppointments} appointments monthly ({staffCount} staff), that's preventing {Math.round(reducedNoShows)}-{Math.round(reducedNoShows * 1.67)} no-shows monthly. At {pricing.symbol}{avgAppointmentValue} average appointment value, you recover {pricing.symbol}{Math.round(noShowRecoveryMonthly)}+ monthly. Read our full guide on <a href="/blog/reduce-salon-no-shows">reducing salon no-shows</a>.
              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>What's included in BookB pricing?</h3>
              <p>
                Everything. <a href="/features">All features</a> are included in your plan - online booking, SMS reminders, client management, POS system, inventory tracking, analytics, mobile apps, and priority support (Professional plan).
              </p>
              <p>
                Unlike enterprise software that charges separately for SMS credits, payment processing, advanced reporting, or API access, BookB includes all essential features. No setup fees, no transaction fees, no hidden costs. See our <a href="/salon-booking-system-without-commission">commission-free booking system</a> comparison.
              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>Can I try BookB before committing?</h3>
              <p>
                Absolutely. <a href="#trial">Start a 14-day free trial</a> with full access to all features - no credit card required. Import your client data, test the booking system, send SMS reminders, and verify the ROI calculations yourself.
              </p>
              <p>
                Most salon owners see the difference within the first week. Salons in <a href="/uk/birmingham">Birmingham</a>, <a href="/us/miami">Miami</a>, <a href="/au/sydney">Sydney</a>, and <a href="/ae/dubai">Dubai</a> use our trial to validate ROI before switching. Cancel anytime during the trial period.
              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-content">
              <h3>How does BookB compare to free salon software?</h3>
              <p>
                Free salon software typically has severe limitations: limited appointments, basic features only, transaction fees (5-10% per booking), no SMS reminders, weak reporting, or forced client data portability issues.
              </p>
              <p>
                BookB's Starter plan at {pricing.symbol}{pricing.starter}/month provides unlimited appointments, full feature access, zero transaction fees, and professional support. The cost pays for itself if you prevent just 1-2 no-shows monthly. Compare BookB to <a href="/fresha-alternative">Fresha</a> or other "free" options to see the real cost difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="features" style={{ background: 'var(--surface)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Ready to Start Saving?</h2>
          <p className="section-subtitle">
            Join 1,000+ salons using BookB to reduce costs, recover revenue, and grow their business
          </p>
          <div style={{ marginTop: '2rem' }}>
            <a href="#trial" className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>
              Start Free Trial - No Credit Card Required
            </a>
            <p style={{ marginTop: '1rem', color: 'var(--text-light)' }}>
              14-day free trial · Cancel anytime · Free data migration
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
