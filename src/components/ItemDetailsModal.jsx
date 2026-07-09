import { useEffect } from "react";
import { IoClose, IoShieldCheckmark } from "react-icons/io5";
import "../components/MenuCard.css";

const ItemDetailsModal = ({ item, onClose }) => {
  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [item]);

  if (!item) return null;

  const { img, name, price, description, type, tag } = item;

  return (
    <div className="sheet-overlay">
      <div className="sheet-backdrop" onClick={onClose}></div>
      
      <div className="sheet-panel">
        {/* Grab Handle for Mobile Feel */}
        <div className="sheet-handle-bar" onClick={onClose}>
          <div className="sheet-handle"></div>
        </div>

        {/* Close Button */}
        <button className="sheet-close-btn" onClick={onClose} aria-label="Close Details">
          <IoClose />
        </button>

        <div className="sheet-content">
          {/* Main Image Banner */}
          <div className="sheet-img-wrap">
            <img 
              src={img || "/images/burger.png"} 
              alt={name} 
              className="sheet-img" 
            />
            {tag && (
              <span className={`sheet-tag-badge ${tag.toLowerCase().replace(" ", "-")}`}>
                {tag}
              </span>
            )}
          </div>

          {/* Info Details */}
          <div className="sheet-details-body">
            <div className="sheet-title-row">
              <h2>{name}</h2>
              {type && (
                <span 
                  className={`food-indicator ${type}`} 
                  title={type === "veg" ? "Vegetarian" : "Non-Vegetarian"}
                >
                  <span className="indicator-dot"></span>
                </span>
              )}
            </div>

            <div className="sheet-rating-row">
              <span className="rating-count halal-verified">
                <IoShieldCheckmark className="verified-icon" /> Halal prepared
              </span>
            </div>

            <p className="sheet-desc-text">
              {description || "Prepared with fresh, premium halal ingredients and cooked to perfection by our culinary experts. Experience delicious taste in every single bite."}
            </p>
          </div>
        </div>

        {/* Footer Actions Panel */}
        <div className="sheet-footer">
          <div className="sheet-price-column">
            <span className="price-label">Price</span>
            <span className="price-val">₹{price}</span>
          </div>

          <div className="sheet-action-column">
            <button className="sheet-back-close-btn" onClick={onClose}>
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsModal;
