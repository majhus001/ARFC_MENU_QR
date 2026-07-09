

import { 
  IoArrowForward, 
  IoCall, 
  IoShieldCheckmark, 
  IoIceCream, 
  IoSparkles, 
  IoStorefront, 
  IoThumbsUp, 
  IoMenu 
} from "react-icons/io5";

import "./LandingPage.css";





export default function LandingPage({ onExplore }) {

  return (
    <div className="landing-container">
      {/* Decorative Blob Elements */}
      <div className="blob blob-orange"></div>
      <div className="blob blob-teal"></div>
      <div className="blob blob-yellow"></div>

      {/* Top Navbar */}
      <header className="landing-navbar">
        <div className="nav-brand">
          <div className="logo-glow-wrapper">
            <img src="/images/logo.png" alt="AR First Choice Logo" className="nav-logo" />
          </div>
          <span className="brand-name-text">AR First Choice</span>
        </div>
        
      </header>

      {/* Hero Section */}
      <section className="landing-hero-grid">
        {/* Left Side: Welcoming Content */}
        <div className="hero-text-block">
          

          <h1 className="hero-heading">
            <span className="hero-heading-sub">Savor the Taste of</span> <br />
            <span className="heading-highlight">First Choice Foods!</span>
          </h1>

          

          <div className="hero-action-buttons">
            <button onClick={() => onExplore()} className="primary-cta-btn">
              Explore Full Menu <IoArrowForward className="arrow-icon" />
            </button>
            <a href="tel:8903658303" className="secondary-cta-btn">
              <IoCall className="call-btn-icon" /> Call To Order
            </a>
          </div>

          {/* Contact Numbers info */}
          <div className="hero-contact-footer">
            <span className="contact-label">For any queries/orders call:</span>
            <div className="phone-links">
              <a href="tel:8903658303">89036 58303</a>
              <span className="divider">•</span>
              <a href="tel:8610733073">86107 33073</a>
            </div>
          </div>
        </div>


      </section>



      {/* Brand Values Banner */}
      <section className="values-banner-grid">
        <div className="value-item">
          <div className="value-icon-box halal-bg">
            <IoShieldCheckmark className="value-icon" />
          </div>
          <div className="value-content">
            <h4>100% Halal Food</h4>
            <p>Every single dish in our kitchen is prepared using fresh halal ingredients.</p>
          </div>
        </div>

        <div className="value-item">
          <div className="value-icon-box icecream-bg">
            <IoIceCream className="value-icon" />
          </div>
          <div className="value-content">
            <h4>Event Ice Cream Catering</h4>
            <p>Make your special occasions sweet! We take catering orders for premium ice creams.</p>
          </div>
        </div>

        <div className="value-item">
          <div className="value-icon-box fresh-bg">
            <IoThumbsUp className="value-icon" />
          </div>
          <div className="value-content">
            <h4>Fresh & Hygienic</h4>
            <p>We prioritize absolute cleanliness and fresh ingredients in every order.</p>
          </div>
        </div>
      </section>

      {/* simple footer */}
      <footer className="landing-footer-simple">
        <p className="footer-brand-title">AR First Choice</p>
        <p className="footer-tagline">Your Culinary Destination for Fresh & Spiced Flavors.</p>
        <div className="footer-divider"></div>
        <p className="footer-copyright">© {new Date().getFullYear()} AR First Choice. All rights reserved.</p>
      </footer>
    </div>
  );
}