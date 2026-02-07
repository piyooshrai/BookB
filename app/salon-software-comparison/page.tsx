'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { detectLocation } from '@/lib/geo';
import type { Region } from '@/lib/pricing';

export default function SalonSoftwareComparisonPage() {
  const [region, setRegion] = useState<Region>('US');
  const [staffCount, setStaffCount] = useState<number>(3);
  const [monthlyAppointments, setMonthlyAppointments] = useState<number>(200);
  const [averageTicket, setAverageTicket] = useState<number>(75);
  const [selectedCompetitors, setSelectedCompetitors] = useState<string[]>(['vagaro', 'square']);

  useEffect(() => {
    detectLocation()
      .then((location) => setRegion(location.region))
      .catch(() => setRegion('US'));
  }, []);

  const competitors = {
    bookb: {
      name: 'BookB',
      baseCost: region === 'US' ? 20 : region === 'UK' ? 15 : region === 'UAE' ? 70 : 25,
      currency: region === 'US' ? '$' : region === 'UK' ? '£' : region === 'UAE' ? 'AED ' : 'A$',
      transactionFee: 0,
      setupFee: 0,
      perStaffCost: (staff: number) => {
        if (staff === 1) return region === 'US' ? 20 : region === 'UK' ? 15 : region === 'UAE' ? 70 : 25;
        if (staff <= 15) return region === 'US' ? 85 : region === 'UK' ? 65 : region === 'UAE' ? 300 : 110;
        return region === 'US' ? 165 : region === 'UK' ? 125 : region === 'UAE' ? 550 : 200;
      },
      color: '#1a202c',
    },
    vagaro: {
      name: 'Vagaro',
      baseCost: 25,
      currency: '$',
      transactionFee: 2.7,
      setupFee: 0,
      perStaffCost: (staff: number) => 25 + (staff > 1 ? (staff - 1) * 15 : 0),
      color: '#4a5568',
    },
    square: {
      name: 'Square Appointments',
      baseCost: 0,
      currency: '$',
      transactionFee: 2.6,
      setupFee: 0,
      perStaffCost: () => 0,
      color: '#718096',
    },
    fresha: {
      name: 'Fresha',
      baseCost: 0,
      currency: '$',
      transactionFee: 3.5,
      setupFee: 0,
      perStaffCost: () => 0,
      color: '#718096',
    },
    mindbody: {
      name: 'Mindbody',
      baseCost: 129,
      currency: '$',
      transactionFee: 0,
      setupFee: 500,
      perStaffCost: (staff: number) => 129 + (staff > 5 ? (staff - 5) * 30 : 0),
      color: '#4a5568',
    },
    boulevard: {
      name: 'Boulevard',
      baseCost: 300,
      currency: '$',
      transactionFee: 0,
      setupFee: 1000,
      perStaffCost: (staff: number) => 300 + (staff > 5 ? (staff - 5) * 50 : 0),
      color: '#2d3748',
    },
  };

  const calculateCosts = (competitorKey: string) => {
    const comp = competitors[competitorKey as keyof typeof competitors];
    const monthlySoftware = comp.perStaffCost(staffCount);
    const monthlyRevenue = monthlyAppointments * averageTicket;
    const monthlyTransactionFees = (monthlyRevenue * comp.transactionFee) / 100;
    const monthlyTotal = monthlySoftware + monthlyTransactionFees;
    const annualTotal = (monthlyTotal * 12) + comp.setupFee;
    const threeYearTotal = (monthlyTotal * 36) + comp.setupFee;

    return {
      monthlySoftware,
      monthlyTransactionFees,
      monthlyTotal,
      annualTotal,
      threeYearTotal,
      setupFee: comp.setupFee,
    };
  };

  const bookbCosts = calculateCosts('bookb');
  const comparisonData = ['bookb', ...selectedCompetitors].map(key => ({
    key,
    name: competitors[key as keyof typeof competitors].name,
    costs: calculateCosts(key),
    color: competitors[key as keyof typeof competitors].color,
    currency: competitors[key as keyof typeof competitors].currency,
  }));

  const savings = selectedCompetitors.map(key => {
    const compCosts = calculateCosts(key);
    return {
      name: competitors[key as keyof typeof competitors].name,
      monthly: compCosts.monthlyTotal - bookbCosts.monthlyTotal,
      annual: compCosts.annualTotal - bookbCosts.annualTotal,
      threeYear: compCosts.threeYearTotal - bookbCosts.threeYearTotal,
    };
  });

  const availableCompetitors = [
    { key: 'vagaro', label: 'Vagaro' },
    { key: 'square', label: 'Square Appointments' },
    { key: 'fresha', label: 'Fresha' },
    { key: 'mindbody', label: 'Mindbody' },
    { key: 'boulevard', label: 'Boulevard' },
  ];

  const toggleCompetitor = (key: string) => {
    if (selectedCompetitors.includes(key)) {
      if (selectedCompetitors.length > 1) {
        setSelectedCompetitors(selectedCompetitors.filter(k => k !== key));
      }
    } else {
      if (selectedCompetitors.length < 3) {
        setSelectedCompetitors([...selectedCompetitors, key]);
      }
    }
  };

  return (
    <>
      <Navigation />

      <div style={{ minHeight: '100vh', background: '#ffffff' }}>
        {/* Hero Section */}
        <section style={{
          padding: '6rem 2rem 4rem',
          textAlign: 'center',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '800',
            marginBottom: '1.5rem',
            color: '#1a202c',
            lineHeight: '1.2',
          }}>
            Salon Software Cost Comparison
          </h1>

          <p style={{
            fontSize: '1.25rem',
            color: '#4a5568',
            marginBottom: '2rem',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            Compare real costs across salon management platforms. See exactly how much you'll save with BookB when transaction fees, setup costs, and hidden charges are included.
          </p>
        </section>

        {/* Calculator Section */}
        <section style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem 4rem',
        }}>
          <div style={{
            background: '#fafafa',
            borderRadius: '8px',
            padding: '2.5rem',
            marginBottom: '3rem',
            border: '1px solid #e2e8f0',
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '2rem',
              color: '#1a202c',
            }}>
              Your Salon Details
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
            }}>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '600',
                  color: '#2d3748',
                }}>
                  Number of Staff
                </label>
                <input
                  type="number"
                  value={staffCount}
                  onChange={(e) => setStaffCount(Math.max(1, parseInt(e.target.value) || 1))}
                  min="1"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #e2e8f0',
                    borderRadius: '4px',
                    fontSize: '1rem',
                  }}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '600',
                  color: '#2d3748',
                }}>
                  Monthly Appointments
                </label>
                <input
                  type="number"
                  value={monthlyAppointments}
                  onChange={(e) => setMonthlyAppointments(Math.max(0, parseInt(e.target.value) || 0))}
                  min="0"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #e2e8f0',
                    borderRadius: '4px',
                    fontSize: '1rem',
                  }}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '600',
                  color: '#2d3748',
                }}>
                  Average Ticket ({competitors.bookb.currency})
                </label>
                <input
                  type="number"
                  value={averageTicket}
                  onChange={(e) => setAverageTicket(Math.max(0, parseInt(e.target.value) || 0))}
                  min="0"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #e2e8f0',
                    borderRadius: '4px',
                    fontSize: '1rem',
                  }}
                />
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '1rem',
                fontWeight: '600',
                color: '#2d3748',
              }}>
                Compare With (select 1-3):
              </label>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
              }}>
                {availableCompetitors.map(comp => (
                  <button
                    key={comp.key}
                    onClick={() => toggleCompetitor(comp.key)}
                    disabled={!selectedCompetitors.includes(comp.key) && selectedCompetitors.length >= 3}
                    style={{
                      padding: '0.75rem 1.5rem',
                      background: selectedCompetitors.includes(comp.key) ? '#1a202c' : 'white',
                      color: selectedCompetitors.includes(comp.key) ? 'white' : '#4a5568',
                      border: '1px solid',
                      borderColor: selectedCompetitors.includes(comp.key) ? '#1a202c' : '#e2e8f0',
                      borderRadius: '4px',
                      cursor: (!selectedCompetitors.includes(comp.key) && selectedCompetitors.length >= 3) ? 'not-allowed' : 'pointer',
                      fontWeight: '600',
                      fontSize: '0.95rem',
                      opacity: (!selectedCompetitors.includes(comp.key) && selectedCompetitors.length >= 3) ? 0.5 : 1,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {comp.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Comparison Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${comparisonData.length}, 1fr)`,
            gap: '1.5rem',
            marginBottom: '3rem',
          }}>
            {comparisonData.map((data) => (
              <div
                key={data.key}
                style={{
                  background: data.key === 'bookb' ? '#fafafa' : 'white',
                  border: data.key === 'bookb' ? '2px solid #1a202c' : '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '2rem',
                  position: 'relative',
                }}
              >
                {data.key === 'bookb' && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#1a202c',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    whiteSpace: 'nowrap',
                  }}>
                    BEST VALUE
                  </div>
                )}

                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '1.5rem',
                  color: data.color,
                  textAlign: 'center',
                }}>
                  {data.name}
                </h3>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{
                    fontSize: '0.85rem',
                    color: '#718096',
                    marginBottom: '0.5rem',
                    textAlign: 'center',
                  }}>
                    Monthly Software
                  </div>
                  <div style={{
                    fontSize: '1.75rem',
                    fontWeight: '700',
                    color: '#1a202c',
                    textAlign: 'center',
                  }}>
                    {data.currency}{data.costs.monthlySoftware.toFixed(0)}
                  </div>
                </div>

                {data.costs.monthlyTransactionFees > 0 && (
                  <div style={{
                    padding: '0.75rem',
                    background: '#fff5f5',
                    borderRadius: '4px',
                    marginBottom: '1rem',
                    border: '1px solid #fed7d7',
                  }}>
                    <div style={{
                      fontSize: '0.85rem',
                      color: '#c53030',
                      marginBottom: '0.25rem',
                    }}>
                      + Transaction Fees
                    </div>
                    <div style={{
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: '#c53030',
                    }}>
                      {data.currency}{data.costs.monthlyTransactionFees.toFixed(0)}/mo
                    </div>
                  </div>
                )}

                {data.costs.setupFee > 0 && (
                  <div style={{
                    padding: '0.75rem',
                    background: '#fffaf0',
                    borderRadius: '4px',
                    marginBottom: '1rem',
                    border: '1px solid #feebc8',
                  }}>
                    <div style={{
                      fontSize: '0.85rem',
                      color: '#c05621',
                      marginBottom: '0.25rem',
                    }}>
                      Setup Fee
                    </div>
                    <div style={{
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      color: '#c05621',
                    }}>
                      {data.currency}{data.costs.setupFee.toFixed(0)}
                    </div>
                  </div>
                )}

                <div style={{
                  borderTop: '2px solid #e2e8f0',
                  paddingTop: '1rem',
                  marginTop: '1rem',
                }}>
                  <div style={{
                    fontSize: '0.85rem',
                    color: '#718096',
                    marginBottom: '0.5rem',
                    textAlign: 'center',
                  }}>
                    Total Monthly Cost
                  </div>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: '800',
                    color: data.color,
                    textAlign: 'center',
                  }}>
                    {data.currency}{data.costs.monthlyTotal.toFixed(0)}
                  </div>
                </div>

                <div style={{
                  marginTop: '1.5rem',
                  padding: '1rem',
                  background: data.key === 'bookb' ? '#ffffff' : '#fafafa',
                  borderRadius: '4px',
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '0.5rem',
                    fontSize: '0.9rem',
                  }}>
                    <span style={{ color: '#718096' }}>First Year:</span>
                    <span style={{ fontWeight: '600', color: '#2d3748' }}>
                      {data.currency}{data.costs.annualTotal.toFixed(0)}
                    </span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.9rem',
                  }}>
                    <span style={{ color: '#718096' }}>Three Years:</span>
                    <span style={{ fontWeight: '600', color: '#2d3748' }}>
                      {data.currency}{data.costs.threeYearTotal.toFixed(0)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Savings Summary */}
          <div style={{
            background: '#f0fdf4',
            border: '2px solid #86efac',
            borderRadius: '8px',
            padding: '2.5rem',
            marginBottom: '3rem',
          }}>
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              marginBottom: '2rem',
              color: '#166534',
              textAlign: 'center',
            }}>
              Your Savings with BookB
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
            }}>
              {savings.map((saving) => (
                <div key={saving.name}>
                  <div style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#166534',
                    marginBottom: '1rem',
                  }}>
                    vs. {saving.name}
                  </div>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}>
                    <div>
                      <div style={{ fontSize: '0.85rem', color: '#15803d', marginBottom: '0.25rem' }}>
                        Monthly Savings:
                      </div>
                      <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#166534' }}>
                        {competitors.bookb.currency}{saving.monthly.toFixed(0)}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.85rem', color: '#15803d', marginBottom: '0.25rem' }}>
                        First Year:
                      </div>
                      <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#166534' }}>
                        {competitors.bookb.currency}{saving.annual.toFixed(0)}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.85rem', color: '#15803d', marginBottom: '0.25rem' }}>
                        Three Years:
                      </div>
                      <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#166534' }}>
                        {competitors.bookb.currency}{saving.threeYear.toFixed(0)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Comparison */}
          <div style={{
            background: 'white',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '2.5rem',
          }}>
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              marginBottom: '2rem',
              color: '#1a202c',
            }}>
              What You Get with BookB
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
            }}>
              {[
                'Online booking & scheduling',
                'Point of sale & payments',
                'Client management & CRM',
                'Inventory tracking',
                'Staff scheduling & payroll',
                'Marketing automation',
                'Analytics & reporting',
                'Mobile apps (iOS & Android)',
                'Multi-location support',
                'Email & SMS reminders',
                'Gift cards & memberships',
                'Commission tracking',
              ].map((feature, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem',
                  background: '#fafafa',
                  borderRadius: '4px',
                }}>
                  <span style={{ color: '#1a202c', fontWeight: '700', fontSize: '1.1rem' }}>✓</span>
                  <span style={{ color: '#4a5568', fontSize: '0.95rem' }}>{feature}</span>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: '2rem',
              padding: '1.5rem',
              background: '#f7fafc',
              borderRadius: '8px',
              textAlign: 'center',
            }}>
              <p style={{
                fontSize: '1.1rem',
                color: '#2d3748',
                marginBottom: '1rem',
                fontWeight: '600',
              }}>
                All features included. No transaction fees. No hidden costs.
              </p>
              <a
                href="#trial"
                style={{
                  display: 'inline-block',
                  padding: '1rem 2rem',
                  background: '#1a202c',
                  color: 'white',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1rem',
                }}
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '4rem 2rem',
          borderTop: '1px solid #e2e8f0',
        }}>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
            color: '#1a202c',
          }}>
            Understanding True Salon Software Costs
          </h2>

          <div style={{
            color: '#4a5568',
            lineHeight: '1.8',
            fontSize: '1.05rem',
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              When comparing salon software pricing, the monthly subscription fee is only part of the story. Many platforms advertise low base prices but make their real revenue through transaction fees, setup charges, and required add-ons.
            </p>

            <p style={{ marginBottom: '1.5rem' }}>
              <strong>Transaction fees</strong> are the biggest hidden cost. Platforms that charge 2-3.5% of every credit card transaction can add hundreds or thousands of dollars to your annual costs. For a salon processing $50,000 in monthly revenue, a 3% transaction fee costs $1,500 per month—$18,000 annually.
            </p>

            <p style={{ marginBottom: '1.5rem' }}>
              <strong>Setup fees</strong> are another consideration. Enterprise platforms like Mindbody and Boulevard charge $500-$1,000+ just to get started, with implementation costs that can reach several thousand dollars for multi-location businesses.
            </p>

            <p style={{ marginBottom: '1.5rem' }}>
              BookB takes a different approach: transparent monthly pricing with zero transaction fees, no setup charges, and all features included. What you see is what you pay. Use this calculator to see your actual savings across different salon software platforms.
            </p>

            <p style={{ marginBottom: '0' }}>
              Our calculator uses real pricing data updated monthly. Transaction fees are applied to your monthly revenue (appointments × average ticket). Setup fees are added to first-year totals. Multi-staff pricing reflects actual tier changes as you add team members.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
