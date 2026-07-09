import { IoArrowForward, IoCall, IoShieldCheckmark, IoIceCream, IoSparkles } from "react-icons/io5";

export default function Hero({ onExplore }) {
  return (
    <header className="hero" id="hero">
      <div className="hero-overlay-glass">
        {/* Crisp Vector Logo Render */}
        <div className="hero-logo-container">
          <img 
            src="/images/logo.png" 
            alt="AR First Choice Shop Logo" 
            className="hero-logo-img" 
          />
        </div>
        
        <span className="hero-welcome-badge">
          <IoSparkles className="badge-sparkle-icon" /> Greetings from AR First Choice
        </span>
        
        <h1 className="hero-main-title">
          AR First Choice
        </h1>
        
        <p className="hero-description">
          Welcome to our gourmet kitchen. Explore our menu card and call us to place your orders.
        </p>

        {/* Styled Instructions Panel with Ionicons */}
        <div className="store-info-panel">
          <div className="info-item">
            <div className="info-icon-wrap halal-theme">
              <IoShieldCheckmark className="info-ionic-icon" />
            </div>
            <span className="info-text">All foods are prepared halal</span>
          </div>
          
          <div className="info-item">
            <div className="info-icon-wrap icecream-theme">
              <IoIceCream className="info-ionic-icon" />
            </div>
            <span className="info-text">We take event orders for ice creams</span>
          </div>
          
          <div className="info-item phone-highlight">
            <div className="tel-icon-wrap">
              <IoCall className="info-icon-tel" />
            </div>
            <span className="info-text">
              Pls contact us: <a href="tel:8903658303" className="tel-link">89036 58303</a> / <a href="tel:8610733073" className="tel-link">86107 33073</a>
            </span>
          </div>
        </div>

        <div className="hero-actions-row">
          <button onClick={onExplore} className="explore-menu-btn">
            Open Menu Card <IoArrowForward className="btn-icon" />
          </button>
        </div>
      </div>
    </header>
  );
}
