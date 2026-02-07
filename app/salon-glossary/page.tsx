'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

export default function SalonGlossaryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string>('All');
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);

  const glossaryTerms = [
    {
      term: 'Appointment Scheduling Software',
      definition: 'Digital tools that allow salon clients to book appointments online 24/7, automatically sync with staff calendars, send automated reminders, and reduce no-shows. Modern scheduling software like BookB integrates with payment processing, client records, and inventory management.',
      relatedTerms: ['Online Booking', 'Calendar Management', 'Automated Reminders'],
      category: 'Software',
    },
    {
      term: 'Balayage',
      definition: 'A freehand hair coloring technique where color is painted directly onto sections of hair to create a natural, graduated effect. Unlike traditional foiling methods, balayage allows for more creative placement and softer regrowth lines. This service typically requires 2-4 hours and commands premium pricing.',
      relatedTerms: ['Hair Coloring', 'Foiling', 'Ombré'],
      category: 'Services',
    },
    {
      term: 'Barbicide',
      definition: 'A disinfectant solution specifically formulated for salon and barbershop tools. EPA-registered and proven effective against bacteria, viruses, and fungi when tools are fully submerged for the required contact time (typically 10 minutes). Essential for health code compliance.',
      relatedTerms: ['Disinfection', 'Sanitization', 'Tool Sterilization'],
      category: 'Health & Safety',
    },
    {
      term: 'Blowout',
      definition: 'A professional hair styling service that involves shampooing, conditioning, and blow-drying hair to achieve smooth, voluminous results. Typically includes round brush technique and styling products. Standard service duration is 30-45 minutes with pricing ranging from $35-$75 depending on hair length and location.',
      relatedTerms: ['Hair Styling', 'Blow-Dry Bar', 'Keratin Treatment'],
      category: 'Services',
    },
    {
      term: 'Booking Buffer Time',
      definition: 'Scheduled gaps between client appointments that allow stylists to clean workstations, prepare for the next service, handle walk-ins, or prevent appointment overlap. Proper buffer time (typically 5-15 minutes) reduces stress and improves service quality, though it must be balanced with revenue optimization.',
      relatedTerms: ['Appointment Scheduling', 'Service Duration', 'Time Management'],
      category: 'Operations',
    },
    {
      term: 'Chair Rental',
      definition: 'A business model where licensed beauty professionals rent salon space and equipment from the salon owner rather than working as employees. Renters keep their own earnings, set their own schedules, and handle their own taxes. Also called booth rental or salon suite rental.',
      relatedTerms: ['Commission Split', 'Independent Contractor', 'Salon Suite'],
      category: 'Business Model',
    },
    {
      term: 'Client Retention Rate',
      definition: 'The percentage of clients who return for repeat services within a specific timeframe (typically 90 days for salons). Calculated as: (Clients at end of period - New clients) / Clients at start of period × 100. Healthy salons maintain 60-80% retention rates. Higher retention is more profitable than constantly acquiring new clients.',
      relatedTerms: ['Client Loyalty', 'Repeat Business', 'Customer Lifetime Value'],
      category: 'Metrics',
    },
    {
      term: 'Color Correction',
      definition: 'A specialized service to fix unwanted hair color results from previous treatments. Often involves removing built-up color, neutralizing brassy tones, or achieving desired shade after failed DIY coloring. Requires advanced expertise, extended appointment times (3-6+ hours), and commands premium pricing ($200-$500+).',
      relatedTerms: ['Hair Coloring', 'Color Removal', 'Toning'],
      category: 'Services',
    },
    {
      term: 'Commission Structure',
      definition: 'The percentage of service revenue that stylists earn on each service performed. Common structures include 40-60% commission for employees, with higher percentages for senior stylists or those who bring their own clients. Some salons use tiered commissions that increase with performance or tenure.',
      relatedTerms: ['Stylist Compensation', 'Chair Rental', 'Salary Plus Commission'],
      category: 'Business Model',
    },
    {
      term: 'Consultation',
      definition: 'A pre-service discussion between stylist and client to discuss desired results, assess hair condition, review previous treatments, identify allergies, set expectations, and determine appropriate services. Effective consultations prevent miscommunication and ensure client satisfaction. Should be documented in client records.',
      relatedTerms: ['Client Communication', 'Service Agreement', 'Patch Test'],
      category: 'Client Service',
    },
    {
      term: 'Cosmetology License',
      definition: 'State-issued credential required to legally perform hair, skin, and nail services for compensation. Requirements vary by state but typically include 1,000-2,000 hours of education at an accredited cosmetology school, passing written and practical exams, and ongoing continuing education for renewal.',
      relatedTerms: ['Esthetician License', 'Barbering License', 'Nail Technician License'],
      category: 'Licensing',
    },
    {
      term: 'Cross-Selling',
      definition: 'Recommending complementary services or retail products during a client visit. For example, suggesting a deep conditioning treatment during a haircut appointment, or recommending the shampoo and conditioner used during styling. When done authentically, cross-selling increases ticket value by 20-40% while improving results.',
      relatedTerms: ['Upselling', 'Retail Sales', 'Service Add-Ons'],
      category: 'Sales',
    },
    {
      term: 'Deep Conditioning Treatment',
      definition: 'An intensive hair treatment that penetrates the hair shaft to repair damage, add moisture, and improve manageability. Typically applied after shampooing and left on for 10-30 minutes, often with heat to enhance penetration. Popular add-on service priced at $15-$35.',
      relatedTerms: ['Hair Treatment', 'Keratin Treatment', 'Olaplex'],
      category: 'Services',
    },
    {
      term: 'Double Booking',
      definition: 'Scheduling two clients for the same stylist at overlapping times, common when offering quick services (like blowouts) or when working with an assistant. Requires careful time management and clear communication. When poorly executed, double booking leads to delays, stressed staff, and unhappy clients.',
      relatedTerms: ['Appointment Scheduling', 'Time Management', 'Service Stacking'],
      category: 'Operations',
    },
    {
      term: 'Esthetician',
      definition: 'A licensed skincare specialist who performs facials, waxing, makeup application, and other skin treatments. Requires separate licensing from cosmetology in most states (typically 600-1,500 hours of training). Estheticians can add significant revenue to full-service salons.',
      relatedTerms: ['Facial', 'Waxing', 'Cosmetology License'],
      category: 'Roles',
    },
    {
      term: 'First-Time Client Discount',
      definition: 'Promotional pricing offered to new clients to encourage trial and reduce booking hesitation. Common structures include 20% off first service, discounted signature service, or new client package deals. Must be tracked carefully to ensure profitability and prevent abuse.',
      relatedTerms: ['Client Acquisition', 'Promotional Pricing', 'Referral Program'],
      category: 'Marketing',
    },
    {
      term: 'Foiling / Highlights',
      definition: 'A hair coloring technique using aluminum foil to isolate sections of hair for lightening or color application. Creates dimension and contrast. Full highlights cover the entire head (2-3 hours, $100-$250+), while partial highlights focus on top sections and face-framing areas (1.5-2 hours, $75-$150).',
      relatedTerms: ['Balayage', 'Hair Coloring', 'Lowlights'],
      category: 'Services',
    },
    {
      term: 'Front Desk Management',
      definition: 'The administrative hub of salon operations including greeting clients, managing appointments, processing payments, answering phones, handling walk-ins, rebooking clients, and managing retail sales. Effective front desk management significantly impacts client experience and operational efficiency.',
      relatedTerms: ['Reception', 'Appointment Scheduling', 'Client Check-In'],
      category: 'Operations',
    },
    {
      term: 'Gift Certificate',
      definition: 'Prepaid vouchers for salon services or specific dollar amounts that can be purchased as gifts. Provide immediate cash flow and often result in overage when clients spend beyond the certificate value. Must be tracked for redemption and comply with state laws on expiration.',
      relatedTerms: ['Prepaid Services', 'Retail Sales', 'Revenue Management'],
      category: 'Sales',
    },
    {
      term: 'Gloss Treatment',
      definition: 'A semi-permanent hair color treatment that adds shine, enhances tone, and improves color vibrancy without significant color change. Lasts 4-6 weeks and is popular as an add-on service to color treatments or standalone service between coloring appointments. Typically priced at $30-$65.',
      relatedTerms: ['Toner', 'Hair Treatment', 'Color Maintenance'],
      category: 'Services',
    },
    {
      term: 'Gratuity / Tipping',
      definition: 'Additional payment from clients to service providers, typically 15-20% of service cost in the US. Some salon software allows tip collection at checkout or through digital payment. Policies on tip distribution (especially for assisted services) should be clearly defined.',
      relatedTerms: ['Service Charge', 'Compensation', 'Payment Processing'],
      category: 'Business Model',
    },
    {
      term: 'Hair Extension Services',
      definition: 'Services involving attachment of additional hair to add length, volume, or color. Methods include tape-in, sew-in, fusion, and clip-in extensions. Installation ranges from 1-6 hours depending on method. High-revenue service ($300-$2,000+) requiring specialized training and certification.',
      relatedTerms: ['Tape-In Extensions', 'Keratin Bond Extensions', 'Weft'],
      category: 'Services',
    },
    {
      term: 'Health Code Compliance',
      definition: 'Adherence to state and local regulations governing salon sanitation, licensing, safety, and operational standards. Includes proper disinfection protocols, ventilation requirements, product storage, and record keeping. Violations can result in fines, license suspension, or closure.',
      relatedTerms: ['Sanitization', 'Inspection', 'Licensing'],
      category: 'Health & Safety',
    },
    {
      term: 'Inventory Management',
      definition: 'Tracking and controlling stock levels of retail products, color supplies, styling products, and disposable items. Effective inventory management prevents stockouts, reduces waste from expired products, optimizes cash flow, and reveals product performance. Modern salon software automates inventory tracking.',
      relatedTerms: ['Stock Control', 'Product Ordering', 'Cost of Goods Sold'],
      category: 'Operations',
    },
    {
      term: 'Keratin Treatment',
      definition: 'A semi-permanent hair smoothing treatment that infuses keratin protein into hair to reduce frizz, add shine, and make styling easier. Results last 2-4 months. Service takes 2-3 hours and is priced at $200-$400+. Requires special training and proper ventilation due to formaldehyde concerns.',
      relatedTerms: ['Brazilian Blowout', 'Hair Smoothing', 'Frizz Control'],
      category: 'Services',
    },
    {
      term: 'Late Cancellation Fee',
      definition: 'A charge imposed when clients cancel appointments without sufficient notice (typically 24-48 hours). Common structures include flat fees ($25-$50) or percentage of service cost (50-100%). Policies must be communicated clearly at booking and enforced consistently to be effective.',
      relatedTerms: ['No-Show Fee', 'Cancellation Policy', 'Appointment Deposit'],
      category: 'Business Policy',
    },
    {
      term: 'Loyalty Program',
      definition: 'A rewards system that incentivizes repeat business by offering points, discounts, or free services based on spending or visit frequency. Examples include "$10 off every 5th visit" or "earn 1 point per dollar spent." Digital loyalty programs integrated with booking software have highest participation rates.',
      relatedTerms: ['Client Retention', 'Referral Program', 'Rewards Program'],
      category: 'Marketing',
    },
    {
      term: 'Membership Model',
      definition: 'A subscription-based business model where clients pay monthly fees for included services (e.g., $99/month for one blowout per week) or discounted pricing. Provides predictable recurring revenue and high client retention but requires careful pricing to ensure profitability.',
      relatedTerms: ['Subscription Service', 'Recurring Revenue', 'Prepaid Services'],
      category: 'Business Model',
    },
    {
      term: 'No-Show',
      definition: 'When a client fails to appear for a scheduled appointment without prior cancellation. No-shows cost salons an average of 15-30% of potential revenue. Solutions include appointment reminders, deposits for new clients, no-show fees, and waitlist management. Salon software reduces no-shows by 30-50% through automated reminders.',
      relatedTerms: ['Late Cancellation', 'Appointment Reminder', 'Booking Deposit'],
      category: 'Operations',
    },
    {
      term: 'Ombré',
      definition: 'A hair coloring technique creating a gradual transition from darker roots to lighter ends. Unlike balayage (freehand painting), ombré typically has a more defined horizontal gradient. Popular low-maintenance option as regrowth is intentional. Service duration 2-3 hours, pricing $150-$300.',
      relatedTerms: ['Balayage', 'Hair Coloring', 'Sombré'],
      category: 'Services',
    },
    {
      term: 'Online Booking',
      definition: 'Client-facing software that allows appointment scheduling through a website or app without phone calls. Available 24/7, reduces front desk workload, captures after-hours bookings, and improves client convenience. BookB\'s online booking integrates with staff schedules, service menus, and automated confirmations.',
      relatedTerms: ['Appointment Scheduling', 'Self-Service Booking', 'Calendar Sync'],
      category: 'Software',
    },
    {
      term: 'Overbooking',
      definition: 'Scheduling more appointments than can realistically be serviced in the available time. While intentional overbooking can compensate for expected cancellations, excessive overbooking leads to delays, rushed services, and client dissatisfaction. Service duration accuracy is critical to prevent overbooking.',
      relatedTerms: ['Appointment Scheduling', 'Time Management', 'Service Duration'],
      category: 'Operations',
    },
    {
      term: 'Patch Test',
      definition: 'A skin sensitivity test performed 24-48 hours before chemical services (especially hair color) to check for allergic reactions. Required by many manufacturers and recommended for legal protection. A small amount of product is applied to skin (typically behind ear or inner elbow) and monitored for reactions.',
      relatedTerms: ['Allergy Testing', 'Color Services', 'Client Safety'],
      category: 'Health & Safety',
    },
    {
      term: 'Payment Processing',
      definition: 'Systems for accepting and processing client payments including cash, credit/debit cards, digital wallets, and contactless payments. Modern salon software integrates payment processing with appointment records, tip collection, and financial reporting. Processing fees typically range from 2.5-3.5% per transaction.',
      relatedTerms: ['Point of Sale', 'Credit Card Processing', 'Checkout'],
      category: 'Software',
    },
    {
      term: 'Peak Hours',
      definition: 'Time periods with highest client demand, typically Thursday-Saturday and evenings. Strategic pricing (premium pricing during peak hours, discounts during slow periods), adequate staffing, and online booking help manage peak demand. Understanding peak patterns optimizes scheduling and revenue.',
      relatedTerms: ['Appointment Scheduling', 'Dynamic Pricing', 'Staff Scheduling'],
      category: 'Operations',
    },
    {
      term: 'Point of Sale (POS)',
      definition: 'Integrated software and hardware system for processing transactions, managing sales, tracking inventory, and generating receipts. Modern salon POS systems combine payment processing, client records, appointment scheduling, and reporting in one platform like BookB.',
      relatedTerms: ['Payment Processing', 'Checkout System', 'Sales Tracking'],
      category: 'Software',
    },
    {
      term: 'Pre-Booking',
      definition: 'Scheduling the next appointment before a client leaves the salon. Highly effective for client retention and revenue predictability. Staff trained to pre-book achieve 60-80% pre-booking rates. Phrase it as "when would you like to come back?" rather than "would you like to book your next appointment?"',
      relatedTerms: ['Client Retention', 'Appointment Scheduling', 'Rebooking'],
      category: 'Sales',
    },
    {
      term: 'Product Backbar',
      definition: 'Professional hair care products and styling supplies used during services but not for retail sale. Represents significant operating cost (typically 5-8% of service revenue). Tracking backbar usage helps identify waste, calculate true service costs, and set appropriate pricing.',
      relatedTerms: ['Inventory Management', 'Cost of Goods Sold', 'Service Costs'],
      category: 'Operations',
    },
    {
      term: 'Referral Program',
      definition: 'A marketing strategy that rewards existing clients for bringing new clients. Common structures include "$20 off for both you and your friend" or "get 10% off after 3 successful referrals." Most effective when easy to share (digital referral links) and mutually beneficial.',
      relatedTerms: ['Client Acquisition', 'Word of Mouth Marketing', 'Loyalty Program'],
      category: 'Marketing',
    },
    {
      term: 'Retail Commission',
      definition: 'Additional compensation for stylists who sell retail products to clients. Typically 5-15% of retail price, incentivizing product recommendations. Effective programs include education on product benefits, inventory access, and point-of-sale prompts. Retail sales should be 10-15% of total salon revenue.',
      relatedTerms: ['Product Sales', 'Commission Structure', 'Stylist Compensation'],
      category: 'Business Model',
    },
    {
      term: 'Root Touch-Up',
      definition: 'A partial coloring service that applies color only to new hair growth at the roots, typically 1-2 inches. Maintenance service performed every 4-8 weeks for clients with permanent color. Takes 45-90 minutes and costs $75-$150, making it a crucial recurring revenue service.',
      relatedTerms: ['Hair Coloring', 'Color Maintenance', 'Highlights'],
      category: 'Services',
    },
    {
      term: 'Salon Management Software',
      definition: 'Comprehensive digital platforms like BookB that integrate appointment scheduling, client records, payment processing, staff management, inventory control, and business analytics. Replaces paper books and multiple disconnected systems, saving 10-15 hours weekly while reducing errors and no-shows.',
      relatedTerms: ['Booking Software', 'POS System', 'Business Management'],
      category: 'Software',
    },
    {
      term: 'Salon Suite',
      definition: 'Small individual salon rooms (typically 100-200 sq ft) rented by independent beauty professionals. Provides privacy and autonomy compared to traditional chair rental while the building provides shared lobby, laundry, and sometimes marketing. Monthly rent typically $200-$800 depending on location.',
      relatedTerms: ['Chair Rental', 'Independent Stylist', 'Booth Rental'],
      category: 'Business Model',
    },
    {
      term: 'Sanitation vs. Disinfection vs. Sterilization',
      definition: 'Three levels of cleaning with different effectiveness. Sanitation reduces microorganisms to safe levels (soap and water). Disinfection kills most pathogens using EPA-registered chemicals (Barbicide). Sterilization eliminates all microorganisms using autoclave/steam. Salons typically require disinfection; only medical facilities need sterilization.',
      relatedTerms: ['Barbicide', 'Health Code Compliance', 'Tool Cleaning'],
      category: 'Health & Safety',
    },
    {
      term: 'Service Add-On',
      definition: 'Complementary services offered in addition to the primary booked service. Examples include deep conditioning treatment with haircut, scalp massage with color service, or eyebrow wax with facial. Add-ons increase average ticket by $15-$40 while enhancing client experience.',
      relatedTerms: ['Upselling', 'Cross-Selling', 'Menu Optimization'],
      category: 'Sales',
    },
    {
      term: 'Service Menu Pricing',
      definition: 'The structured list of services offered and their associated costs. Pricing strategies include flat-rate (same price regardless of time), tiered by stylist level (junior/senior/master), or variable by hair length/thickness. Transparent pricing builds trust and allows accurate online booking.',
      relatedTerms: ['Pricing Strategy', 'Service Duration', 'Tiered Pricing'],
      category: 'Business Policy',
    },
    {
      term: 'Social Media Marketing',
      definition: 'Using platforms like Instagram, Facebook, and TikTok to showcase work, attract new clients, and engage existing ones. Most effective salon social media includes before/after photos, educational content, client testimonials, and behind-the-scenes content. Instagram is particularly effective for visual hair/beauty content.',
      relatedTerms: ['Instagram Marketing', 'Client Acquisition', 'Portfolio'],
      category: 'Marketing',
    },
    {
      term: 'Standing Appointment',
      definition: 'A recurring appointment booked at the same time (e.g., "every 6 weeks on Tuesday at 2pm") for the same service and stylist. Provides scheduling predictability for both client and salon. Clients with standing appointments have 90%+ retention rates and represent the most valuable client segment.',
      relatedTerms: ['Pre-Booking', 'Client Retention', 'Recurring Appointment'],
      category: 'Operations',
    },
    {
      term: 'Texture Services',
      definition: 'Chemical treatments that permanently alter hair structure, including perms (adding curl), relaxers (straightening curly hair), and texturizers (loosening tight curls). Requires advanced training, careful timing, and proper neutralization. Service duration 1.5-3 hours, pricing $80-$250+.',
      relatedTerms: ['Perm', 'Relaxer', 'Chemical Services'],
      category: 'Services',
    },
    {
      term: 'Toner',
      definition: 'A semi-permanent hair color used after lightening to neutralize unwanted brassy or yellow tones and achieve desired shade (platinum, ash, beige, etc.). Essential finishing step for blonde services. Can be standalone service or included in highlighting price. Lasts 4-6 weeks.',
      relatedTerms: ['Hair Coloring', 'Gloss Treatment', 'Blonde Maintenance'],
      category: 'Services',
    },
    {
      term: 'Upselling',
      definition: 'Recommending a more premium or comprehensive service than originally requested. Examples include suggesting full highlights instead of partial, or gloss treatment in addition to color. When done consultatively (based on client needs, not just revenue), upselling improves results and increases ticket average by 25-40%.',
      relatedTerms: ['Cross-Selling', 'Service Add-Ons', 'Consultation'],
      category: 'Sales',
    },
    {
      term: 'Virgin Hair',
      definition: 'Hair that has never been chemically treated (colored, permed, relaxed, or bleached). Important distinction for service pricing and processing time, as virgin hair typically processes faster and more predictably than previously treated hair. Always ask about hair history during consultation.',
      relatedTerms: ['Hair History', 'Consultation', 'Color Services'],
      category: 'Technical',
    },
    {
      term: 'Wait List Management',
      definition: 'System for tracking clients who want appointments earlier than available or during canceled time slots. Automated waitlist features in salon software notify clients immediately when openings occur, filling gaps and reducing revenue loss from cancellations. Reduces no-show impact by 40-60%.',
      relatedTerms: ['Appointment Scheduling', 'No-Show Recovery', 'Cancellation Management'],
      category: 'Operations',
    },
    {
      term: 'Walk-In Client',
      definition: 'Clients who arrive without appointments seeking immediate service. Walk-in policies vary: some salons welcome them during gaps, others require appointments. Dedicated walk-in time slots or stylists can capture this revenue without disrupting scheduled appointments. Tracking walk-in vs. booked ratios reveals booking efficiency.',
      relatedTerms: ['Appointment Scheduling', 'Front Desk Management', 'Booking Buffer Time'],
      category: 'Operations',
    },
  ];

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const filteredTerms = glossaryTerms.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLetter = selectedLetter === 'All' || item.term.startsWith(selectedLetter);
    return matchesSearch && matchesLetter;
  });

  const termsByLetter = alphabet.map(letter => ({
    letter,
    count: glossaryTerms.filter(t => t.term.startsWith(letter)).length,
  }));

  return (
    <>
      <Navigation />

      <div style={{ minHeight: '100vh', background: '#ffffff' }}>
        {/* Hero Section */}
        <section style={{
          padding: '6rem 2rem 3rem',
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
            Salon Management Glossary
          </h1>

          <p style={{
            fontSize: '1.25rem',
            color: '#4a5568',
            marginBottom: '2rem',
            lineHeight: '1.6',
          }}>
            Your complete guide to salon industry terms, software features, and business concepts. Over 50 definitions to help you master salon management.
          </p>

          {/* Search Box */}
          <div style={{
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            <input
              type="text"
              placeholder="Search terms... (e.g., 'booking', 'highlights', 'no-show')"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '1rem 1.5rem',
                fontSize: '1.1rem',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                outline: 'none',
                transition: 'all 0.3s ease',
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#cbd5e0'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#e2e8f0'}
            />
          </div>
        </section>

        {/* Alphabet Navigation */}
        <section style={{
          maxWidth: '1200px',
          margin: '0 auto 2rem',
          padding: '0 2rem',
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            justifyContent: 'center',
            marginBottom: '1rem',
          }}>
            <button
              onClick={() => setSelectedLetter('All')}
              style={{
                padding: '0.5rem 1rem',
                background: selectedLetter === 'All' ? '#1a202c' : 'white',
                color: selectedLetter === 'All' ? 'white' : '#4a5568',
                border: '1px solid',
                borderColor: selectedLetter === 'All' ? '#1a202c' : '#e2e8f0',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.95rem',
                transition: 'all 0.2s ease',
              }}
            >
              All ({glossaryTerms.length})
            </button>
            {termsByLetter.map(({ letter, count }) => (
              <button
                key={letter}
                onClick={() => setSelectedLetter(letter)}
                disabled={count === 0}
                style={{
                  padding: '0.5rem 0.75rem',
                  background: selectedLetter === letter ? '#1a202c' : 'white',
                  color: selectedLetter === letter ? 'white' : count === 0 ? '#cbd5e0' : '#4a5568',
                  border: '1px solid',
                  borderColor: selectedLetter === letter ? '#1a202c' : '#e2e8f0',
                  borderRadius: '4px',
                  cursor: count === 0 ? 'not-allowed' : 'pointer',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  opacity: count === 0 ? 0.4 : 1,
                  transition: 'all 0.2s ease',
                }}
              >
                {letter}
              </button>
            ))}
          </div>
        </section>

        {/* Results Count */}
        <section style={{
          maxWidth: '1200px',
          margin: '0 auto 1rem',
          padding: '0 2rem',
          color: '#718096',
          fontSize: '0.95rem',
        }}>
          {searchTerm && (
            <div>
              Showing {filteredTerms.length} {filteredTerms.length === 1 ? 'term' : 'terms'} for "{searchTerm}"
            </div>
          )}
        </section>

        {/* Glossary Terms */}
        <section style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem 4rem',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}>
            {filteredTerms.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '3rem',
                color: '#718096',
                background: '#fafafa',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
              }}>
                <div style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#1a202c' }}>
                  No terms found
                </div>
                <div>Try a different search term or browse by letter</div>
              </div>
            ) : (
              filteredTerms.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'white',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    gap: '1rem',
                  }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontSize: '1.35rem',
                        fontWeight: '700',
                        marginBottom: '0.5rem',
                        color: '#1a202c',
                      }}>
                        {item.term}
                      </h3>

                      <div style={{
                        display: 'inline-block',
                        background: '#EDF2F7',
                        color: '#4A5568',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        marginBottom: '1rem',
                      }}>
                        {item.category}
                      </div>

                      <p style={{
                        color: '#4a5568',
                        lineHeight: '1.7',
                        fontSize: '1.05rem',
                        marginBottom: item.relatedTerms.length > 0 ? '1rem' : 0,
                      }}>
                        {item.definition}
                      </p>

                      {item.relatedTerms.length > 0 && (
                        <div>
                          <span style={{
                            fontWeight: '600',
                            color: '#2d3748',
                            fontSize: '0.9rem',
                          }}>
                            Related:
                          </span>{' '}
                          <span style={{
                            color: '#718096',
                            fontSize: '0.9rem',
                          }}>
                            {item.relatedTerms.join(', ')}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Categories Overview */}
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
            marginBottom: '2rem',
            textAlign: 'center',
            color: '#1a202c',
          }}>
            Browse by Category
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
          }}>
            {[
              { name: 'Software', count: glossaryTerms.filter(t => t.category === 'Software').length },
              { name: 'Services', count: glossaryTerms.filter(t => t.category === 'Services').length },
              { name: 'Operations', count: glossaryTerms.filter(t => t.category === 'Operations').length },
              { name: 'Business Model', count: glossaryTerms.filter(t => t.category === 'Business Model').length },
              { name: 'Marketing', count: glossaryTerms.filter(t => t.category === 'Marketing').length },
              { name: 'Health & Safety', count: glossaryTerms.filter(t => t.category === 'Health & Safety').length },
            ].map((category, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1.5rem',
                  background: '#fafafa',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onClick={() => setSearchTerm(category.name)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.borderColor = '#cbd5e0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#fafafa';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
                <div style={{ fontWeight: '600', fontSize: '1.1rem', marginBottom: '0.5rem', color: '#1a202c' }}>
                  {category.name}
                </div>
                <div style={{ color: '#718096', fontSize: '0.9rem' }}>
                  {category.count} terms
                </div>
              </div>
            ))}
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
            Master These Terms with BookB
          </h2>
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '2rem',
            opacity: 0.9,
          }}>
            Understanding salon terminology is the first step. BookB puts these concepts into action with software built for modern salon management.
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

        {/* SEO Content */}
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
            marginBottom: '1rem',
            color: '#1a202c',
          }}>
            Your Complete Salon Industry Reference Guide
          </h2>

          <p>
            The beauty and salon industry uses specialized terminology that can be confusing for new salon owners, stylists transitioning to business ownership, or clients trying to understand services. This comprehensive glossary defines over 50 essential terms related to salon services, management software, business operations, and industry practices.
          </p>

          <p>
            Understanding <strong>salon management software</strong> terminology is particularly important as the industry shifts from paper appointment books to digital solutions. Terms like "online booking," "point of sale," and "waitlist management" represent features that modern salons rely on to reduce no-shows, increase efficiency, and improve client experience.
          </p>

          <p>
            Service-related terms like <strong>balayage</strong>, <strong>keratin treatment</strong>, and <strong>color correction</strong> help salon owners price services appropriately, estimate service duration accurately, and communicate clearly with clients during consultations. Knowing the difference between services affects scheduling, product inventory, and revenue projections.
          </p>

          <p>
            Operational concepts like <strong>client retention rate</strong>, <strong>no-show management</strong>, and <strong>pre-booking</strong> directly impact salon profitability. Salons that master these practices typically achieve 60-80% client retention rates and reduce revenue loss from cancellations by 40-60%.
          </p>

          <p>
            Business model terminology including <strong>commission structure</strong>, <strong>chair rental</strong>, and <strong>membership model</strong> helps salon owners choose the right approach for their market and goals. Each model has different implications for staffing, pricing, and client relationships.
          </p>

          <p>
            Whether you're researching <a href="/features" style={{ color: '#667EEA', textDecoration: 'none' }}>salon management features</a>, training new staff, or simply want to understand industry best practices, this glossary provides clear, practical definitions you can reference anytime.
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
}
