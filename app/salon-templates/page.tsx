'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { detectLocation } from '@/lib/geo';
import type { Region } from '@/lib/pricing';

export default function SalonTemplatesPage() {
  const [region, setRegion] = useState<Region>('US');
  const [downloadingTemplate, setDownloadingTemplate] = useState<string | null>(null);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    salonName: '',
  });

  useEffect(() => {
    detectLocation()
      .then((location) => setRegion(location.region))
      .catch(() => setRegion('US'));
  }, []);

  const templates = [
    {
      id: 'client-intake-form',
      title: 'Client Intake Form Template',
      description: 'Professional client intake form to gather essential information, preferences, medical history, and consent. Includes sections for contact details, hair history, allergies, and service preferences.',
      fileType: 'PDF',
      features: [
        'Contact information & emergency contacts',
        'Medical history & allergy tracking',
        'Hair care history & previous treatments',
        'Style preferences & consultation notes',
        'Terms of service & consent signatures',
        'Customizable with your salon branding',
      ],
      downloads: '12.4K',
    },
    {
      id: 'sanitization-checklist',
      title: 'Daily Sanitization Checklist',
      description: 'Complete sanitization and hygiene checklist to meet health regulations and ensure client safety. Covers workstations, tools, common areas, and compliance documentation.',
      fileType: 'PDF',
      features: [
        'Opening & closing procedures',
        'Workstation cleaning protocols',
        'Tool sterilization tracking',
        'Common area maintenance',
        'Health regulation compliance',
        'Staff sign-off documentation',
      ],
      downloads: '9.8K',
    },
    {
      id: 'service-menu-template',
      title: 'Service Menu Template',
      description: 'Elegant service menu template to showcase your offerings and pricing. Includes sections for hair services, color treatments, special packages, and add-ons.',
      fileType: 'PDF',
      features: [
        'Hair cutting & styling services',
        'Color & highlighting treatments',
        'Special occasion packages',
        'Add-on services & retail',
        'Pricing structure & duration estimates',
        'Professional design ready to customize',
      ],
      downloads: '15.2K',
    },
  ];

  const handleDownloadClick = (templateId: string, templateTitle: string) => {
    setSelectedTemplate(templateId);
    setShowDownloadModal(true);
  };

  const handleDownloadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setDownloadingTemplate(selectedTemplate);

    try {
      // Send lead information to API
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          formType: 'template-download',
          message: `Downloaded template: ${selectedTemplate}`,
        }),
      });

      // Trigger actual PDF download
      const downloadLinks: Record<string, string> = {
        'client-intake-form': '/templates/client-intake-form.pdf',
        'sanitization-checklist': '/templates/sanitization-checklist.pdf',
        'service-menu-template': '/templates/service-menu-template.pdf',
      };

      const link = document.createElement('a');
      link.href = downloadLinks[selectedTemplate];
      link.download = `${selectedTemplate}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Show success message
      alert(`Thank you! Your ${templates.find(t => t.id === selectedTemplate)?.title} is downloading now. Check your email for additional resources from BookB.`);

      setShowDownloadModal(false);
      setFormData({ name: '', email: '', salonName: '' });
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setDownloadingTemplate(null);
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
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '800',
            marginBottom: '1.5rem',
            color: '#1a202c',
            lineHeight: '1.2',
          }}>
            Professional Salon Templates
          </h1>

          <p style={{
            fontSize: '1.25rem',
            color: '#4a5568',
            marginBottom: '2rem',
            lineHeight: '1.6',
            maxWidth: '700px',
            margin: '0 auto 2rem',
          }}>
            Download professionally designed templates to streamline your salon operations. Instant access, fully customizable, used by thousands of salons worldwide.
          </p>

          <div style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            fontSize: '0.95rem',
            color: '#718096',
          }}>
            <div>Instant Download</div>
            <div>Professional Design</div>
            <div>Easy to Customize</div>
            <div>Free Forever</div>
          </div>
        </section>

        {/* Templates Grid */}
        <section style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '2rem 2rem 4rem',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
          }}>
            {templates.map((template) => (
              <div
                key={template.id}
                style={{
                  background: '#fafafa',
                  borderRadius: '8px',
                  padding: '2.5rem',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.borderColor = '#cbd5e0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#fafafa';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '0.75rem',
                  color: '#1a202c',
                }}>
                  {template.title}
                </h3>

                <div style={{
                  display: 'inline-block',
                  background: '#ffffff',
                  color: '#718096',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '4px',
                  fontSize: '0.85rem',
                  fontWeight: '500',
                  marginBottom: '1.25rem',
                  border: '1px solid #e2e8f0',
                }}>
                  {template.fileType} · {template.downloads} downloads
                </div>

                <p style={{
                  color: '#4a5568',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                }}>
                  {template.description}
                </p>

                <div style={{ marginBottom: '2rem' }}>
                  <div style={{
                    fontWeight: '600',
                    marginBottom: '0.75rem',
                    color: '#2d3748',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}>
                    Includes
                  </div>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                  }}>
                    {template.features.map((feature, idx) => (
                      <li key={idx} style={{
                        padding: '0.5rem 0',
                        color: '#4a5568',
                        fontSize: '0.95rem',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        borderBottom: idx < template.features.length - 1 ? '1px solid #f0f0f0' : 'none',
                      }}>
                        <span style={{
                          color: '#2d3748',
                          fontWeight: '400',
                          minWidth: '4px',
                        }}>•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleDownloadClick(template.id, template.title)}
                  style={{
                    width: '100%',
                    padding: '1rem 2rem',
                    background: '#1a202c',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#2d3748';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#1a202c';
                  }}
                >
                  Download Template
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Why Use Templates Section */}
        <section style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '4rem 2rem',
          borderTop: '1px solid #e2e8f0',
          borderBottom: '1px solid #e2e8f0',
          marginBottom: '4rem',
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: '3rem',
            textAlign: 'center',
            color: '#1a202c',
          }}>
            Why Professional Templates Matter
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem',
          }}>
            {[
              {
                title: 'Save Time',
                description: 'No need to create forms from scratch. Start with professional templates and customize to your needs.',
              },
              {
                title: 'Stay Compliant',
                description: 'Templates include all necessary fields to meet health regulations and industry standards.',
              },
              {
                title: 'Look Professional',
                description: 'Impress clients with polished, well-designed documents that reflect your brand quality.',
              },
              {
                title: 'Improve Organization',
                description: 'Standardized forms make it easier to train staff and maintain consistent records.',
              },
            ].map((benefit, idx) => (
              <div key={idx}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '0.75rem',
                  color: '#1a202c',
                }}>
                  {benefit.title}
                </h3>
                <p style={{
                  color: '#4a5568',
                  lineHeight: '1.6',
                  margin: 0,
                }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
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
            Ready to Streamline Your Salon?
          </h2>
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '2rem',
            opacity: 0.9,
          }}>
            While templates help with paperwork, BookB automates your entire salon management system.
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
              transition: 'all 0.3s ease',
            }}
          >
            Start Free Trial
          </a>
        </section>

        {/* FAQ Section */}
        <section style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '4rem 2rem',
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: '2rem',
            textAlign: 'center',
            color: '#1a202c',
          }}>
            Frequently Asked Questions
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              {
                question: 'Are these templates really free?',
                answer: 'Yes. All templates are 100% free to download and use in your salon. We believe in providing value to salon owners, whether or not you use BookB software.',
              },
              {
                question: 'Can I customize the templates?',
                answer: 'Absolutely. All templates are provided in PDF format and can be edited to add your salon logo, adjust fields, or modify content to match your specific needs.',
              },
              {
                question: 'Do I need BookB software to use these templates?',
                answer: 'No, these templates work independently. However, if you want to automate client intake, track sanitization digitally, and manage services online, BookB can help eliminate manual paperwork entirely.',
              },
              {
                question: 'How do I download the templates?',
                answer: 'Click the "Download Template" button, enter your email address, and you\'ll receive instant access to the PDF file. We\'ll also send you the download link via email.',
              },
              {
                question: 'Can I share these templates with other salon owners?',
                answer: 'Yes. Feel free to share these resources with colleagues and friends in the beauty industry. We want to help as many salon owners as possible.',
              },
            ].map((faq, idx) => (
              <div key={idx} style={{
                background: '#fafafa',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
              }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  marginBottom: '0.75rem',
                  color: '#1a202c',
                }}>
                  {faq.question}
                </h3>
                <p style={{
                  color: '#4a5568',
                  lineHeight: '1.6',
                  margin: 0,
                }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SEO Content Section */}
        <section style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '2rem 2rem 4rem',
          color: '#4a5568',
          lineHeight: '1.8',
        }}>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
            color: '#1a202c',
          }}>
            Essential Salon Management Templates for 2026
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            Running a successful salon requires more than just great stylists—it demands efficient systems, proper documentation, and professional client communication. Our free salon management templates help you maintain industry standards, improve client experiences, and streamline daily operations.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            The <strong>Client Intake Form Template</strong> ensures you collect all necessary information before services begin, including medical history, allergies, and style preferences. This protects your business legally and helps stylists deliver personalized service that keeps clients coming back.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            Our <strong>Daily Sanitization Checklist</strong> keeps your salon compliant with health regulations while demonstrating your commitment to client safety. In a post-pandemic world, visible hygiene practices aren't just required—they're expected by informed clients.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            The <strong>Service Menu Template</strong> provides a professional way to showcase your offerings and pricing. Clear, attractive menus reduce confusion, set expectations, and can even increase average ticket size by highlighting premium services and packages.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            While these templates provide a solid foundation, many salon owners are discovering that digital solutions like <a href="/features" style={{ color: '#1a202c', textDecoration: 'underline' }}>BookB salon management software</a> eliminate manual paperwork entirely. Digital client intake, automated appointment reminders, and online booking can save hours every week while providing a better client experience.
          </p>

          <p style={{ marginBottom: '0' }}>
            Whether you're opening your first salon or optimizing an established business, these templates give you a professional starting point. Download all three and customize them to match your brand and operational needs.
          </p>
        </section>
      </div>

      {/* Download Modal */}
      {showDownloadModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem',
          }}
          onClick={() => setShowDownloadModal(false)}
        >
          <div
            style={{
              background: 'white',
              borderRadius: '8px',
              padding: '2.5rem',
              maxWidth: '500px',
              width: '100%',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              marginBottom: '0.5rem',
              color: '#1a202c',
            }}>
              Download Template
            </h3>
            <p style={{
              color: '#4a5568',
              marginBottom: '2rem',
            }}>
              Enter your details to receive instant access to{' '}
              {templates.find(t => t.id === selectedTemplate)?.title}.
            </p>

            <form onSubmit={handleDownloadSubmit}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '600',
                  color: '#2d3748',
                }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #e2e8f0',
                    borderRadius: '4px',
                    fontSize: '1rem',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '600',
                  color: '#2d3748',
                }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #e2e8f0',
                    borderRadius: '4px',
                    fontSize: '1rem',
                  }}
                />
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '600',
                  color: '#2d3748',
                }}>
                  Salon Name (optional)
                </label>
                <input
                  type="text"
                  value={formData.salonName}
                  onChange={(e) => setFormData({ ...formData, salonName: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #e2e8f0',
                    borderRadius: '4px',
                    fontSize: '1rem',
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                  type="button"
                  onClick={() => setShowDownloadModal(false)}
                  style={{
                    flex: 1,
                    padding: '1rem',
                    background: '#f7fafc',
                    color: '#2d3748',
                    border: '1px solid #e2e8f0',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={downloadingTemplate !== null}
                  style={{
                    flex: 1,
                    padding: '1rem',
                    background: '#1a202c',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: downloadingTemplate ? 'not-allowed' : 'pointer',
                    opacity: downloadingTemplate ? 0.7 : 1,
                  }}
                >
                  {downloadingTemplate ? 'Downloading...' : 'Download Now'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
