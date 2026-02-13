import React, { useState, useEffect } from 'react';
import './LandingPage.css';

const LandingPage = ({ onExploreProperties }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'features', 'stats', 'cta', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="landing-container">
      {/* Header Section */}
      <header className={`landing-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <div className="logo-section">
            <img src="/apple-touch-icon.png" alt="Logo" className="header-logo" />
            <h1 className="brand-name">SRI SRI ARCADE</h1>
          </div>
          <nav className="nav-menu">
            <a 
              href="#home" 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            >
              About
            </a>
            <a 
              href="#features" 
              className={`nav-link ${activeSection === 'features' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}
            >
              Properties
            </a>
            <a 
              href="#contact" 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-title">Discover Your Dream Property</h2>
            <p className="hero-subtitle">Premium Residential and Commercial Plots in Prime Locations</p>
            <p className="hero-description">
              Explore our exclusive collection of carefully selected properties that offer 
              the perfect blend of location, value, and potential for your investment.
            </p>
            <div className="hero-buttons">
              <button className="explore-btn" onClick={onExploreProperties}>
                Explore Properties
              </button>
              <button className="contact-btn" onClick={() => scrollToSection('contact')}>Get in Touch</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="property-showcase">
              <div className="property-card featured">
                <div className="property-badge">Premium</div>
                <div className="property-image-placeholder">
                  <span>Property View</span>
                </div>
                <div className="property-details">
                  <h3>Exclusive Plots Available</h3>
                  <p>Strategic locations with high growth potential</p>
                  <div className="property-features">
                    <span className="feature-tag">Residential</span>
                    <span className="feature-tag">Commercial</span>
                    <span className="feature-tag">Investment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-content">
          <div className="about-header">
            <h2 className="section-title">About SRI SRI ARCADE</h2>
            <p className="section-subtitle">Your Trusted Real Estate Partner Since 2014</p>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <div className="about-intro">
                <h3>Building Dreams, Creating Value</h3>
                <p>
                  With over a decade of excellence in real estate, SRI SRI ARCADE has established itself 
                  as a premier destination for premium residential and commercial properties. Our commitment 
                  to quality, transparency, and customer satisfaction has made us the preferred choice for 
                  thousands of property buyers and investors.
                </p>
              </div>
              <div className="about-mission">
                <h4>Our Mission</h4>
                <p>
                  To provide exceptional real estate solutions that exceed customer expectations 
                  through innovation, integrity, and unparalleled service quality.
                </p>
              </div>
              <div className="about-vision">
                <h4>Our Vision</h4>
                <p>
                  To be the most trusted real estate brand, recognized for transforming landscapes 
                  and creating sustainable communities that enhance quality of life.
                </p>
              </div>
            </div>
            <div className="about-visual">
              <div className="about-stats">
                <div className="about-stat">
                  <div className="stat-number-large">500+</div>
                  <div className="stat-label">Properties Delivered</div>
                </div>
                <div className="about-stat">
                  <div className="stat-number-large">10+</div>
                  <div className="stat-label">Years of Excellence</div>
                </div>
                <div className="about-stat">
                  <div className="stat-number-large">100%</div>
                  <div className="stat-label">Customer Satisfaction</div>
                </div>
                <div className="about-stat">
                  <div className="stat-number-large">50+</div>
                  <div className="stat-label">Prime Locations</div>
                </div>
              </div>
              <div className="about-image">
                <div className="about-image-placeholder">
                  <span>About Us</span>
                </div>
              </div>
            </div>
          </div>
          <div className="about-values">
            <h3>Our Core Values</h3>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4>Excellence</h4>
                <p>Committed to delivering the highest quality in every aspect of our service</p>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h4>Integrity</h4>
                <p>Building trust through transparency, honesty, and ethical business practices</p>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
                <h4>Customer Focus</h4>
                <p>Prioritizing customer needs and ensuring complete satisfaction in every interaction</p>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4>Innovation</h4>
                <p>Embracing new technologies and approaches to enhance the real estate experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Gallery Section */}
      <section id="features" className="properties-section">
        <div className="section-header">
          <h2 className="section-title">Featured Properties</h2>
          <p className="section-subtitle">Explore Our Premium Real Estate Portfolio</p>
        </div>
        <div className="properties-gallery">
          <div className="property-item featured">
            <div className="property-image">
              <img src="/property-1.jpg" alt="Premium Residential Plot" />
              <div className="property-overlay">
                <div className="property-badge">Featured</div>
                <div className="property-actions">
                  <button className="view-btn" onClick={onExploreProperties}>View Details</button>
                </div>
              </div>
            </div>
            <div className="property-info">
              <h3>Premium Residential Plot</h3>
              <p className="property-location">Sripuram Layout - Block A</p>
              <div className="property-specs">
                <div className="spec-item">
                  <span className="spec-label">Area</span>
                  <span className="spec-value">2400 sq.ft</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Type</span>
                  <span className="spec-value">Residential</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Status</span>
                  <span className="spec-value available">Available</span>
                </div>
              </div>
              <div className="property-price">
                <span className="price-label">Starting from</span>
                <span className="price-value">₹45 Lakhs</span>
              </div>
            </div>
          </div>
          
          <div className="property-item">
            <div className="property-image">
              <img src="/property-2.jpg" alt="Commercial Space" />
              <div className="property-overlay">
                <div className="property-badge">Hot Deal</div>
                <div className="property-actions">
                  <button className="view-btn" onClick={onExploreProperties}>View Details</button>
                </div>
              </div>
            </div>
            <div className="property-info">
              <h3>Commercial Space</h3>
              <p className="property-location">Sripuram Layout - Block B</p>
              <div className="property-specs">
                <div className="spec-item">
                  <span className="spec-label">Area</span>
                  <span className="spec-value">1800 sq.ft</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Type</span>
                  <span className="spec-value">Commercial</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Status</span>
                  <span className="spec-value available">Available</span>
                </div>
              </div>
              <div className="property-price">
                <span className="price-label">Starting from</span>
                <span className="price-value">₹38 Lakhs</span>
              </div>
            </div>
          </div>
          
          <div className="property-item">
            <div className="property-image">
              <img src="/property-3.jpg" alt="Investment Plot" />
              <div className="property-overlay">
                <div className="property-badge">Premium</div>
                <div className="property-actions">
                  <button className="view-btn" onClick={onExploreProperties}>View Details</button>
                </div>
              </div>
            </div>
            <div className="property-info">
              <h3>Investment Plot</h3>
              <p className="property-location">Sripuram Layout - Block C</p>
              <div className="property-specs">
                <div className="spec-item">
                  <span className="spec-label">Area</span>
                  <span className="spec-value">3000 sq.ft</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Type</span>
                  <span className="spec-value">Investment</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Status</span>
                  <span className="spec-value available">Available</span>
                </div>
              </div>
              <div className="property-price">
                <span className="price-label">Starting from</span>
                <span className="price-value">₹52 Lakhs</span>
              </div>
            </div>
          </div>
          
          <div className="property-item">
            <div className="property-image">
              <img src="/property-4.jpg" alt="Corner Plot" />
              <div className="property-overlay">
                <div className="property-badge">Exclusive</div>
                <div className="property-actions">
                  <button className="view-btn" onClick={onExploreProperties}>View Details</button>
                </div>
              </div>
            </div>
            <div className="property-info">
              <h3>Corner Plot</h3>
              <p className="property-location">Sripuram Layout - Block D</p>
              <div className="property-specs">
                <div className="spec-item">
                  <span className="spec-label">Area</span>
                  <span className="spec-value">3600 sq.ft</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Type</span>
                  <span className="spec-value">Residential</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Status</span>
                  <span className="spec-value limited">Limited</span>
                </div>
              </div>
              <div className="property-price">
                <span className="price-label">Starting from</span>
                <span className="price-value">₹68 Lakhs</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="gallery-cta">
          <h3>Discover More Properties</h3>
          <p>Explore our complete portfolio of premium real estate opportunities</p>
          <button className="explore-all-btn" onClick={onExploreProperties}>
            View All Properties
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Properties Sold</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Customer Satisfaction</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Prime Locations</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Find Your Perfect Property?</h2>
          <p className="cta-subtitle">Let us help you discover the ideal location for your dream home or investment</p>
          <button className="cta-button" onClick={onExploreProperties}>
            Start Your Journey
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-content">
          <div className="contact-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">We're here to help you find your perfect property</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1H9c-5.52 0-10-4.48-10-10v-3.79c0-.55.45-1 1-1h2.79c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.12.35.03.74-.25 1.02l-2.2 2.19z"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>+91 12345 67890</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>info@sririarcade.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <h4>Address</h4>
                  <p>123 Business Park, City Center, State 123456</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form className="form">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Your Phone" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="4" required></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/apple-touch-icon.png" alt="Logo" className="footer-logo-img" />
              <h3>SRI SRI ARCADE</h3>
            </div>
            <p className="footer-description">
              Your trusted partner in real estate solutions, providing premium properties 
              and exceptional service for over a decade.
            </p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About Us</a></li>
              <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Properties</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#residential">Residential Plots</a></li>
              <li><a href="#commercial">Commercial Spaces</a></li>
              <li><a href="#investment">Investment Properties</a></li>
              <li><a href="#consulting">Consulting</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p><strong>Phone:</strong> +91 12345 67890</p>
              <p><strong>Email:</strong> info@sririarcade.com</p>
              <p><strong>Address:</strong> 123 Business Park, City Center</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 SRI SRI ARCADE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
