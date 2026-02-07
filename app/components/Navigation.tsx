'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import TrialModal from './TrialModal';

export default function Navigation() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  const handleTrialClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsTrialModalOpen(true);
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
          <ul>
            <li><a href="/features">Features</a></li>
            <li className="dropdown">
              <a href="#">Resources ▾</a>
              <ul className="dropdown-menu">
                <li><a href="/blog">Blog</a></li>
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
        </div>
      </nav>

      <TrialModal isOpen={isTrialModalOpen} onClose={() => setIsTrialModalOpen(false)} />
    </>
  );
}
