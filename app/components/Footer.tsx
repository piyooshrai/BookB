export default function Footer() {
  return (
    <footer>
      <div className="container">
        {/* First row - Product info */}
        <div className="footer-grid" style={{ marginBottom: '3rem' }}>
          <div className="footer-column">
            <h4>Product</h4>
            <ul>
              <li><a href="/features">Features</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Solutions</h4>
            <ul>
              <li><a href="/hair-salon-software">Hair Salon Software</a></li>
              <li><a href="/barbershop-software">Barbershop Software</a></li>
              <li><a href="/nail-salon-software">Nail Salon Software</a></li>
              <li><a href="/beauty-therapist-software">Beauty Therapist Software</a></li>
              <li><a href="/day-spa-software">Day Spa Software</a></li>
              <li><a href="/mobile-hairdresser-software">Mobile Hairdresser Software</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Alternatives</h4>
            <ul>
              <li><a href="/zenoti-alternative">Zenoti Alternative</a></li>
              <li><a href="/fresha-alternative">Fresha Alternative</a></li>
              <li><a href="/phorest-alternative">Phorest Alternative</a></li>
              <li><a href="/vagaro-alternative">Vagaro Alternative</a></li>
              <li><a href="/boulevard-alternative">Boulevard Alternative</a></li>
              <li><a href="/square-appointments-alternative">Square Alternative</a></li>
            </ul>
          </div>
        </div>

        {/* Second row - Locations */}
        <div className="footer-grid">
          <div className="footer-column">
            <h4>United Kingdom</h4>
            <ul>
              <li><a href="/uk/london">London</a></li>
              <li><a href="/uk/manchester">Manchester</a></li>
              <li><a href="/uk/birmingham">Birmingham</a></li>
              <li><a href="/uk/edinburgh">Edinburgh</a></li>
              <li><a href="/uk/glasgow">Glasgow</a></li>
              <li><a href="/uk/liverpool">Liverpool</a></li>
              <li><a href="/uk/leeds">Leeds</a></li>
              <li><a href="/uk/bristol">Bristol</a></li>
              <li><a href="/uk/brighton">Brighton</a></li>
              <li><a href="/uk/newcastle">Newcastle</a></li>
              <li><a href="/uk/nottingham">Nottingham</a></li>
              <li><a href="/uk/sheffield">Sheffield</a></li>
              <li><a href="/uk/leicester">Leicester</a></li>
              <li><a href="/uk/cardiff">Cardiff</a></li>
              <li><a href="/uk/southampton">Southampton</a></li>
              <li><a href="/uk/belfast">Belfast</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>United States</h4>
            <ul>
              <li><a href="/us/new-york">New York</a></li>
              <li><a href="/us/los-angeles">Los Angeles</a></li>
              <li><a href="/us/chicago">Chicago</a></li>
              <li><a href="/us/miami">Miami</a></li>
              <li><a href="/us/atlanta">Atlanta</a></li>
              <li><a href="/us/boston">Boston</a></li>
              <li><a href="/us/dallas">Dallas</a></li>
              <li><a href="/us/denver">Denver</a></li>
              <li><a href="/us/houston">Houston</a></li>
              <li><a href="/us/phoenix">Phoenix</a></li>
              <li><a href="/us/san-diego">San Diego</a></li>
              <li><a href="/us/san-francisco">San Francisco</a></li>
              <li><a href="/us/seattle">Seattle</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Australia & Middle East</h4>
            <ul>
              <li><a href="/au/sydney">Sydney</a></li>
              <li><a href="/au/melbourne">Melbourne</a></li>
              <li><a href="/au/brisbane">Brisbane</a></li>
              <li><a href="/ae/dubai">Dubai</a></li>
              <li><a href="/ae/abu-dhabi">Abu Dhabi</a></li>
              <li><a href="/ae/riyadh">Riyadh</a></li>
              <li><a href="/ae/jeddah">Jeddah</a></li>
              <li><a href="/ae/sharjah">Sharjah</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">© 2026 BookB. All rights reserved.</div>
        <div className="by-the-algorithm">
          Built by <a href="https://www.the-algo.com" target="_blank" rel="noopener noreferrer">The Algorithm</a>
        </div>
      </div>
    </footer>
  );
}
