'use client';

import { useState } from 'react';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

export default function BestSalonSoftwarePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const competitors = [
    {
      name: 'BookB',
      rank: 1,
      rating: 4.8,
      bestFor: 'Overall Value & Modern Features',
      pricing: 'From $20/mo',
      strengths: [
        'Lowest pricing with no transaction fees',
        'Modern, intuitive interface',
        'Excellent customer support',
        'No long-term contracts',
        'Comprehensive feature set',
        'Fast setup (under 30 minutes)',
      ],
      weaknesses: [
        'Newer platform (less brand recognition)',
        'Smaller integration ecosystem than enterprise solutions',
      ],
      features: {
        onlineBooking: true,
        pos: true,
        inventory: true,
        marketing: true,
        reporting: true,
        mobileApp: true,
        multiLocation: true,
        payroll: true,
      },
    },
    {
      name: 'Vagaro',
      rank: 2,
      rating: 4.5,
      bestFor: 'Established Salons Wanting All-in-One',
      pricing: 'From $25/mo + 2.7% transaction fees',
      strengths: [
        'Well-established platform',
        'Strong marketplace feature',
        'Good mobile apps',
        'Comprehensive features',
      ],
      weaknesses: [
        'Transaction fees add significant cost',
        'Interface can be overwhelming',
        'Customer support often slow',
        'Frequent upsells for features',
      ],
      features: {
        onlineBooking: true,
        pos: true,
        inventory: true,
        marketing: true,
        reporting: true,
        mobileApp: true,
        multiLocation: true,
        payroll: false,
      },
    },
    {
      name: 'Square Appointments',
      rank: 3,
      rating: 4.3,
      bestFor: 'Solo Stylists & Side Hustles',
      pricing: 'Free + 2.6% + 10¢ per transaction',
      strengths: [
        'Free tier available',
        'Trusted brand name',
        'Simple setup',
        'Good for part-time businesses',
      ],
      weaknesses: [
        'Transaction fees quickly exceed subscription cost',
        'Limited salon-specific features',
        'Basic reporting',
        'Not built specifically for salons',
      ],
      features: {
        onlineBooking: true,
        pos: true,
        inventory: false,
        marketing: false,
        reporting: false,
        mobileApp: true,
        multiLocation: false,
        payroll: false,
      },
    },
    {
      name: 'Fresha',
      rank: 4,
      rating: 4.2,
      bestFor: 'Budget-Conscious Small Salons',
      pricing: 'Free + transaction fees',
      strengths: [
        'Free software',
        'Marketplace exposure',
        'Basic features included',
        'Quick to get started',
      ],
      weaknesses: [
        'High transaction fees (hidden cost)',
        'Limited customization',
        'Forced marketplace participation',
        'Less control over client data',
      ],
      features: {
        onlineBooking: true,
        pos: true,
        inventory: false,
        marketing: false,
        reporting: false,
        mobileApp: true,
        multiLocation: false,
        payroll: false,
      },
    },
    {
      name: 'Mindbody',
      rank: 5,
      rating: 4.0,
      bestFor: 'Large Multi-Location Operations',
      pricing: 'From $129/mo + setup fees',
      strengths: [
        'Enterprise-grade features',
        'Powerful for multi-location',
        'Extensive integrations',
        'Strong brand recognition',
      ],
      weaknesses: [
        'Very expensive for small salons',
        'Steep learning curve',
        'Slow customer support',
        'Long-term contracts required',
        'Setup fees and implementation costs',
      ],
      features: {
        onlineBooking: true,
        pos: true,
        inventory: true,
        marketing: true,
        reporting: true,
        mobileApp: true,
        multiLocation: true,
        payroll: true,
      },
    },
    {
      name: 'Boulevard',
      rank: 6,
      rating: 4.1,
      bestFor: 'High-End Salons & Spas',
      pricing: 'Custom pricing (typically $300+/mo)',
      strengths: [
        'Premium client experience',
        'Beautiful interface',
        'Advanced booking features',
        'White-glove onboarding',
      ],
      weaknesses: [
        'Extremely expensive',
        'Overkill for most salons',
        'Long sales process',
        'Complex pricing structure',
      ],
      features: {
        onlineBooking: true,
        pos: true,
        inventory: true,
        marketing: true,
        reporting: true,
        mobileApp: true,
        multiLocation: true,
        payroll: false,
      },
    },
  ];

  const categories = [
    { id: 'all', label: 'All Solutions', count: competitors.length },
    { id: 'value', label: 'Best Value', count: 2 },
    { id: 'free', label: 'Free Options', count: 2 },
    { id: 'small', label: 'Small Business', count: 3 },
    { id: 'enterprise', label: 'Enterprise', count: 2 },
  ];

  const filteredCompetitors = competitors.filter(comp => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'value') return ['BookB', 'Vagaro'].includes(comp.name);
    if (selectedCategory === 'free') return ['Square Appointments', 'Fresha'].includes(comp.name);
    if (selectedCategory === 'small') return ['BookB', 'Square Appointments', 'Fresha'].includes(comp.name);
    if (selectedCategory === 'enterprise') return ['Mindbody', 'Boulevard'].includes(comp.name);
    return true;
  });

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
            Best Salon Software 2026
          </h1>

          <p style={{
            fontSize: '1.25rem',
            color: '#4a5568',
            marginBottom: '2rem',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            Comprehensive comparison of the top salon management platforms. Honest analysis based on pricing, features, support quality, and real user experiences from 1,000+ salons.
          </p>

          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '2rem',
          }}>
            <a
              href="#comparison"
              style={{
                padding: '1rem 2rem',
                background: '#1a202c',
                color: 'white',
                borderRadius: '4px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1rem',
              }}
            >
              View Comparison
            </a>
            <a
              href="#trial"
              style={{
                padding: '1rem 2rem',
                background: 'white',
                color: '#1a202c',
                border: '1px solid #e2e8f0',
                borderRadius: '4px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1rem',
              }}
            >
              Try BookB Free
            </a>
          </div>
        </section>

        {/* Category Filter */}
        <section style={{
          maxWidth: '1200px',
          margin: '0 auto 3rem',
          padding: '0 2rem',
        }}>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            padding: '1.5rem',
            background: '#fafafa',
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
          }}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: selectedCategory === category.id ? '#1a202c' : 'white',
                  color: selectedCategory === category.id ? 'white' : '#4a5568',
                  border: '1px solid',
                  borderColor: selectedCategory === category.id ? '#1a202c' : '#e2e8f0',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  transition: 'all 0.2s ease',
                }}
              >
                {category.label}
              </button>
            ))}
          </div>
        </section>

        {/* Comparison Grid */}
        <section id="comparison" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem 4rem',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}>
            {filteredCompetitors.map((comp, idx) => (
              <div
                key={comp.name}
                style={{
                  background: comp.rank === 1 ? '#fafafa' : 'white',
                  border: comp.rank === 1 ? '2px solid #1a202c' : '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '2.5rem',
                  position: 'relative',
                }}
              >
                {comp.rank === 1 && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '2rem',
                    background: '#1a202c',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                  }}>
                    EDITOR'S CHOICE
                  </div>
                )}

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 2fr',
                  gap: '2rem',
                  alignItems: 'start',
                }}>
                  {/* Left Column */}
                  <div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: '0.75rem',
                    }}>
                      <div style={{
                        fontSize: '2rem',
                        fontWeight: '800',
                        color: '#cbd5e0',
                      }}>
                        {comp.rank}
                      </div>
                      <h3 style={{
                        fontSize: '1.75rem',
                        fontWeight: '700',
                        color: '#1a202c',
                        margin: 0,
                      }}>
                        {comp.name}
                      </h3>
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '1rem',
                    }}>
                      <div style={{
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        color: '#1a202c',
                      }}>
                        {comp.rating}
                      </div>
                      <div style={{
                        color: '#718096',
                        fontSize: '0.9rem',
                      }}>
                        / 5.0
                      </div>
                    </div>

                    <div style={{
                      padding: '0.75rem 1rem',
                      background: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '4px',
                      marginBottom: '1rem',
                    }}>
                      <div style={{
                        fontSize: '0.85rem',
                        color: '#718096',
                        marginBottom: '0.25rem',
                      }}>
                        Starting Price
                      </div>
                      <div style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: '#1a202c',
                      }}>
                        {comp.pricing}
                      </div>
                    </div>

                    <div style={{
                      padding: '1rem',
                      background: '#f7fafc',
                      borderRadius: '4px',
                      marginBottom: '1.5rem',
                    }}>
                      <div style={{
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        color: '#2d3748',
                        marginBottom: '0.5rem',
                      }}>
                        BEST FOR
                      </div>
                      <div style={{
                        fontSize: '0.95rem',
                        color: '#4a5568',
                      }}>
                        {comp.bestFor}
                      </div>
                    </div>

                    {comp.rank === 1 && (
                      <a
                        href="#trial"
                        style={{
                          display: 'block',
                          textAlign: 'center',
                          padding: '1rem',
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
                    )}
                  </div>

                  {/* Right Column */}
                  <div>
                    <div style={{ marginBottom: '2rem' }}>
                      <h4 style={{
                        fontSize: '0.95rem',
                        fontWeight: '600',
                        color: '#2d3748',
                        marginBottom: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}>
                        Strengths
                      </h4>
                      <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                      }}>
                        {comp.strengths.map((strength, idx) => (
                          <li key={idx} style={{
                            padding: '0.5rem 0',
                            color: '#4a5568',
                            fontSize: '0.95rem',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.75rem',
                            borderBottom: idx < comp.strengths.length - 1 ? '1px solid #f0f0f0' : 'none',
                          }}>
                            <span style={{ color: '#2d3748', fontWeight: '400' }}>+</span>
                            <span>{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                      <h4 style={{
                        fontSize: '0.95rem',
                        fontWeight: '600',
                        color: '#2d3748',
                        marginBottom: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}>
                        Weaknesses
                      </h4>
                      <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                      }}>
                        {comp.weaknesses.map((weakness, idx) => (
                          <li key={idx} style={{
                            padding: '0.5rem 0',
                            color: '#4a5568',
                            fontSize: '0.95rem',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.75rem',
                            borderBottom: idx < comp.weaknesses.length - 1 ? '1px solid #f0f0f0' : 'none',
                          }}>
                            <span style={{ color: '#718096', fontWeight: '400' }}>-</span>
                            <span>{weakness}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 style={{
                        fontSize: '0.95rem',
                        fontWeight: '600',
                        color: '#2d3748',
                        marginBottom: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}>
                        Features
                      </h4>
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '0.75rem',
                      }}>
                        {Object.entries(comp.features).map(([key, value]) => (
                          <div key={key} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontSize: '0.9rem',
                            color: value ? '#2d3748' : '#cbd5e0',
                          }}>
                            <span style={{ fontWeight: '600' }}>
                              {value ? '✓' : '✗'}
                            </span>
                            <span style={{ textTransform: 'capitalize' }}>
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '4rem 2rem',
          borderTop: '1px solid #e2e8f0',
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: '2rem',
            textAlign: 'center',
            color: '#1a202c',
          }}>
            Feature Comparison
          </h2>

          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              background: 'white',
              border: '1px solid #e2e8f0',
            }}>
              <thead>
                <tr style={{ background: '#fafafa' }}>
                  <th style={{
                    padding: '1rem',
                    textAlign: 'left',
                    fontWeight: '600',
                    color: '#2d3748',
                    borderBottom: '1px solid #e2e8f0',
                  }}>
                    Feature
                  </th>
                  {competitors.slice(0, 4).map(comp => (
                    <th key={comp.name} style={{
                      padding: '1rem',
                      textAlign: 'center',
                      fontWeight: '600',
                      color: '#2d3748',
                      borderBottom: '1px solid #e2e8f0',
                      borderLeft: '1px solid #e2e8f0',
                    }}>
                      {comp.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Online Booking', key: 'onlineBooking' },
                  { label: 'Point of Sale', key: 'pos' },
                  { label: 'Inventory Management', key: 'inventory' },
                  { label: 'Marketing Tools', key: 'marketing' },
                  { label: 'Analytics & Reporting', key: 'reporting' },
                  { label: 'Mobile App', key: 'mobileApp' },
                  { label: 'Multi-Location', key: 'multiLocation' },
                  { label: 'Payroll Integration', key: 'payroll' },
                ].map((feature, idx) => (
                  <tr key={feature.key} style={{
                    background: idx % 2 === 0 ? 'white' : '#fafafa',
                  }}>
                    <td style={{
                      padding: '1rem',
                      color: '#4a5568',
                      borderBottom: '1px solid #e2e8f0',
                    }}>
                      {feature.label}
                    </td>
                    {competitors.slice(0, 4).map(comp => (
                      <td key={comp.name} style={{
                        padding: '1rem',
                        textAlign: 'center',
                        borderBottom: '1px solid #e2e8f0',
                        borderLeft: '1px solid #e2e8f0',
                        color: comp.features[feature.key as keyof typeof comp.features] ? '#2d3748' : '#cbd5e0',
                      }}>
                        {comp.features[feature.key as keyof typeof comp.features] ? '✓' : '—'}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Methodology */}
        <section style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '4rem 2rem',
          borderTop: '1px solid #e2e8f0',
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: '2rem',
            color: '#1a202c',
          }}>
            How We Ranked These Solutions
          </h2>

          <div style={{
            color: '#4a5568',
            lineHeight: '1.8',
            fontSize: '1.05rem',
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Our rankings are based on extensive research, real user feedback from 1,000+ salons, and hands-on testing of each platform. We evaluated solutions across multiple criteria:
            </p>

            <div style={{ marginBottom: '2rem' }}>
              {[
                { title: 'Value for Money', weight: '30%', description: 'Total cost including hidden fees, transaction costs, and required add-ons' },
                { title: 'Feature Completeness', weight: '25%', description: 'Core salon management capabilities out of the box' },
                { title: 'Ease of Use', weight: '20%', description: 'Learning curve, interface design, and staff adoption' },
                { title: 'Customer Support', weight: '15%', description: 'Response time, availability, and problem resolution' },
                { title: 'Reliability', weight: '10%', description: 'Uptime, performance, and technical stability' },
              ].map((criterion, idx) => (
                <div key={idx} style={{
                  padding: '1.5rem',
                  background: '#fafafa',
                  borderRadius: '8px',
                  marginBottom: '1rem',
                  border: '1px solid #e2e8f0',
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.5rem',
                  }}>
                    <h3 style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      color: '#1a202c',
                      margin: 0,
                    }}>
                      {criterion.title}
                    </h3>
                    <span style={{
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: '#718096',
                    }}>
                      {criterion.weight}
                    </span>
                  </div>
                  <p style={{ margin: 0, color: '#4a5568', fontSize: '0.95rem' }}>
                    {criterion.description}
                  </p>
                </div>
              ))}
            </div>

            <p style={{ marginBottom: '1.5rem' }}>
              We conduct hands-on testing with real salon scenarios, analyze pricing structures to reveal true costs, and survey hundreds of salon owners about their experiences. Our team updates these rankings quarterly to reflect product changes, pricing updates, and evolving user feedback.
            </p>

            <p style={{ marginBottom: '0' }}>
              <strong>Transparency note:</strong> We recommend BookB as our top choice because we built it specifically to address the shortcomings we identified in other salon software. However, our comparisons are honest about where competitors excel and where BookB has room to improve.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={{
          maxWidth: '800px',
          margin: '0 auto 4rem',
          padding: '3rem 2rem',
          textAlign: 'center',
          background: '#1a202c',
          borderRadius: '8px',
          color: 'white',
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: '1rem',
          }}>
            Ready to Try the Best Value?
          </h2>
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '2rem',
            opacity: 0.9,
          }}>
            Join 1,000+ salons using BookB. Start your free 14-day trial with full access to all features.
          </p>
          <a
            href="#trial"
            style={{
              display: 'inline-block',
              padding: '1rem 2.5rem',
              background: 'white',
              color: '#1a202c',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem',
            }}
          >
            Start Free Trial
          </a>
        </section>
      </div>

      <Footer />
    </>
  );
}
