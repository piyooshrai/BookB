'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import TrialModal from './TrialModal';

export default function Navigation() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  const handleTrialClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsTrialModalOpen(true);
    setMobileMenuOpen(false);
  };

  // Global listener for #trial links across the entire site
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');

      if (link && (link.getAttribute('href') === '#trial' || link.hash === '#trial')) {
        e.preventDefault();
        setIsTrialModalOpen(true);
      }
    };

    // Also handle direct hash navigation
    const handleHashChange = () => {
      if (window.location.hash === '#trial') {
        setIsTrialModalOpen(true);
        // Remove the hash from URL
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    };

    document.addEventListener('click', handleClick);
    window.addEventListener('hashchange', handleHashChange);

    // Check on mount if URL already has #trial
    handleHashChange();

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <>
      <nav>
        <div className="container">
          <a href="/" className="logo">
            <Image src="/bookb-logo.svg" alt="BookB Logo" width={40} height={40} style={{ display: 'block' }} />
            <span>BookB</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="desktop-nav">
            <li><a href="/features">Features</a></li>
            <li className="dropdown">
              <a href="#">Resources ▾</a>
              <ul className="dropdown-menu">
                <li><a href="/blog">Blog</a></li>
                <li><a href="/best-salon-software">Best Salon Software</a></li>
                <li><a href="/salon-software-comparison">Cost Comparison</a></li>
                <li><a href="/salon-software-roi-calculator">ROI Calculator</a></li>
                <li><a href="/salon-templates">Free Templates</a></li>
                <li><a href="/salon-glossary">Glossary</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">Industries ▾</a>
              <ul className="dropdown-menu">
                <li><a href="/hair-salon-software">Hair Salons</a></li>
                <li><a href="/barbershop-software">Barbershops</a></li>
                <li><a href="/nail-salon-software">Nail Salons</a></li>
                <li><a href="/day-spa-software">Day Spas</a></li>
                <li><a href="/beauty-therapist-software">Beauty Therapists</a></li>
                <li><a href="/mobile-hairdresser-software">Mobile Hairdressers</a></li>
              </ul>
            </li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="#trial" className="nav-cta" onClick={handleTrialClick}>Start Free Trial</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="mobile-nav">
              <ul>
                <li><a href="/features" onClick={() => setMobileMenuOpen(false)}>Features</a></li>

                <li className="mobile-dropdown">
                  <button onClick={() => setResourcesOpen(!resourcesOpen)}>
                    Resources {resourcesOpen ? '▴' : '▾'}
                  </button>
                  {resourcesOpen && (
                    <ul className="mobile-submenu">
                      <li><a href="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</a></li>
                      <li><a href="/best-salon-software" onClick={() => setMobileMenuOpen(false)}>Best Salon Software</a></li>
                      <li><a href="/salon-software-comparison" onClick={() => setMobileMenuOpen(false)}>Cost Comparison</a></li>
                      <li><a href="/salon-software-roi-calculator" onClick={() => setMobileMenuOpen(false)}>ROI Calculator</a></li>
                      <li><a href="/salon-templates" onClick={() => setMobileMenuOpen(false)}>Free Templates</a></li>
                      <li><a href="/salon-glossary" onClick={() => setMobileMenuOpen(false)}>Glossary</a></li>
                      <li><a href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
                    </ul>
                  )}
                </li>

                <li className="mobile-dropdown">
                  <button onClick={() => setIndustriesOpen(!industriesOpen)}>
                    Industries {industriesOpen ? '▴' : '▾'}
                  </button>
                  {industriesOpen && (
                    <ul className="mobile-submenu">
                      <li><a href="/hair-salon-software" onClick={() => setMobileMenuOpen(false)}>Hair Salons</a></li>
                      <li><a href="/barbershop-software" onClick={() => setMobileMenuOpen(false)}>Barbershops</a></li>
                      <li><a href="/nail-salon-software" onClick={() => setMobileMenuOpen(false)}>Nail Salons</a></li>
                      <li><a href="/day-spa-software" onClick={() => setMobileMenuOpen(false)}>Day Spas</a></li>
                      <li><a href="/beauty-therapist-software" onClick={() => setMobileMenuOpen(false)}>Beauty Therapists</a></li>
                      <li><a href="/mobile-hairdresser-software" onClick={() => setMobileMenuOpen(false)}>Mobile Hairdressers</a></li>
                    </ul>
                  )}
                </li>

                <li><a href="/pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a></li>
                <li><a href="#trial" className="nav-cta" onClick={handleTrialClick}>Start Free Trial</a></li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      <TrialModal isOpen={isTrialModalOpen} onClose={() => setIsTrialModalOpen(false)} />
    </>
  );
}
