'use client';

import { useState } from 'react';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TrialModal({ isOpen, onClose }: TrialModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'trial',
          message: 'Requested to start a free 14-day trial'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', phone: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to send request');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          maxWidth: '500px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ margin: 0, fontSize: '24px', color: 'var(--text)' }}>Start Your Free Trial</h2>
            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '28px',
                cursor: 'pointer',
                color: 'var(--text-light)',
                padding: '0',
                lineHeight: '1'
              }}
              aria-label="Close"
            >
              ×
            </button>
          </div>

          {status === 'success' ? (
            <div>
              <div style={{
                background: '#F0FDF4',
                border: '1px solid #22C55E',
                borderRadius: '8px',
                padding: '1.5rem',
                marginBottom: '1.5rem',
                color: '#166534'
              }}>
                <strong>Thank you!</strong>
                <p style={{ marginTop: '0.5rem', marginBottom: 0 }}>
                  We've received your trial request and will email you login details within the next hour.
                </p>
              </div>
              <button
                onClick={onClose}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <p style={{ marginBottom: '1.5rem', color: 'var(--text-light)' }}>
                Get instant access to all features for 14 days. No credit card required.
              </p>

              {status === 'error' && (
                <div style={{
                  background: '#FEF2F2',
                  border: '1px solid #EF4444',
                  borderRadius: '8px',
                  padding: '1rem',
                  marginBottom: '1.5rem',
                  color: '#991B1B',
                  fontSize: '14px'
                }}>
                  <strong>Error:</strong> {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="trial-name" style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: 500,
                    color: 'var(--text)',
                    fontSize: '14px'
                  }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="trial-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--border)',
                      borderRadius: '6px',
                      fontSize: '15px',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="trial-email" style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: 500,
                    color: 'var(--text)',
                    fontSize: '14px'
                  }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="trial-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--border)',
                      borderRadius: '6px',
                      fontSize: '15px',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="trial-company" style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: 500,
                    color: 'var(--text)',
                    fontSize: '14px'
                  }}>
                    Salon/Company Name
                  </label>
                  <input
                    type="text"
                    id="trial-company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--border)',
                      borderRadius: '6px',
                      fontSize: '15px',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="trial-phone" style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: 500,
                    color: 'var(--text)',
                    fontSize: '14px'
                  }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="trial-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--border)',
                      borderRadius: '6px',
                      fontSize: '15px',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    fontSize: '16px',
                    cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                    opacity: status === 'submitting' ? 0.7 : 1
                  }}
                >
                  {status === 'submitting' ? 'Submitting...' : 'Start Free Trial'}
                </button>

                <p style={{
                  marginTop: '1rem',
                  fontSize: '12px',
                  color: 'var(--text-light)',
                  textAlign: 'center',
                  marginBottom: 0
                }}>
                  By clicking "Start Free Trial" you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
