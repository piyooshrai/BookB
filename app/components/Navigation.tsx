'use client';

import { useState } from 'react';
import Image from 'next/image';
import TrialModal from './TrialModal';

export default function Navigation() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  const handleTrialClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsTrialModalOpen(true);
  };

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
