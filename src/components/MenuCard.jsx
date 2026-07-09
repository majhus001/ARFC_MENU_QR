import "../components/MenuCard.css";

const MenuCard = ({ item = {}, onSelect }) => {
  const { img, name, price, description, type, tag } = item;

  return (
    <div className="menu-card" onClick={onSelect}>
      {/* Image Container with Badges */}
      <div className="card-image-wrapper">
        <img 
          src={img || "/images/burger.png"} 
          alt={name || "Delicious Dish"} 
          className="item-img" 
          loading="lazy"
        />

        {/* Highlight Tag Badge */}
        {tag && (
          <div className={`card-tag-badge ${tag.toLowerCase().replace(" ", "-")}`}>
            {tag}
          </div>
        )}
      </div>

      {/* Info Container */}
      <div className="card-details">
        <div className="card-title-row">
          <h3 className="item-name">{name || "Delicious Dish"}</h3>
          
          {/* Veg/Non-Veg Indicator */}
          {type && (
            <span 
              className={`food-indicator ${type}`} 
              title={type === "veg" ? "Vegetarian" : "Non-Vegetarian"}
              aria-label={type === "veg" ? "Vegetarian" : "Non-Vegetarian"}
            >
              <span className="indicator-dot"></span>
            </span>
          )}
        </div>

        {/* Food Description */}
        <p className="item-description">
          {description || "Prepared with fresh, premium halal ingredients and cooked to perfection by our culinary experts."}
        </p>

        {/* Footer: Price & Details Link */}
        <div className="card-footer-row">
          <span className="price">₹{price || 0}</span>
          <span className="view-details-txt">View Details →</span>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
