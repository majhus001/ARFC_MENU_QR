import MenuCard from "./MenuCard";
import "../components/MenuCard.css";

const MenuSection = ({ category, registerRef, onSelectItem }) => {
  return (
    <section
      id={category.id}
      ref={registerRef}
      className="menu-section"
    >
      <div className="category-header-wrap">
        <h2 className="category-title">{category.name}</h2>
        <span className="category-count">{category.items.length} {category.items.length === 1 ? "dish" : "dishes"}</span>
      </div>

      <div className="item-grid">
        {category.items.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
            onSelect={() => onSelectItem(item)}
          />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;