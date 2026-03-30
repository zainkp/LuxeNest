import React from 'react';
import { Link } from 'react-router-dom';

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

const Footer = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer section-padding">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link to="/" className="brand-logo footer-logo" onClick={handleScroll}>
            LuxeNest<span className="text-accent">.</span>
          </Link>
          <p className="footer-tagline">Redefining Comfort & Luxury Living.</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/luxenest.india?igsh=cGx1Z2E3enE5bmlw" aria-label="Instagram"><InstagramIcon /></a>
            <a href="https://www.facebook.com/share/1CUdzMAqrg" aria-label="Facebook"><FacebookIcon /></a>
            <a href="https://x.com/luxenestindia" aria-label="Twitter"><TwitterIcon /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Shop</h4>
          <ul>
            <li><Link to="/collections" onClick={handleScroll}>All Products</Link></li>
            <li><Link to="/collections?category=Sofa" onClick={handleScroll}>Sofas</Link></li>
            <li><Link to="/collections?category=Beds" onClick={handleScroll}>Beds</Link></li>
            <li><Link to="/collections?category=Chairs" onClick={handleScroll}>Chairs</Link></li>
            <li><Link to="/collections?category=Tables" onClick={handleScroll}>Tables</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about" onClick={handleScroll}>About Us</Link></li>
            <li><Link to="#" onClick={handleScroll}>Sustainability</Link></li>
            <li><Link to="#" onClick={handleScroll}>Careers</Link></li>
            <li><Link to="/contact" onClick={handleScroll}>Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Stay Updated</h4>
          <p>Subscribe to our newsletter for exclusive offers and design inspiration.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address" required />
            <button type="submit" className="btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom container">
        <p>&copy; {new Date().getFullYear()} LuxeNest. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
