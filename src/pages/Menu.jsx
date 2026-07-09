import { useState, useEffect, useRef } from "react";
import { IoArrowBack } from "react-icons/io5";
import Sidebar from "../components/Sidebar";
import MenuSection from "../components/MenuSection";
import ItemDetailsModal from "../components/ItemDetailsModal";
import { menuData } from "../data/menuData";
import "../components/MenuCard.css";

const Menu = ({ onBack, initialCategory }) => {
  const [activeSection, setActiveSection] = useState(initialCategory || "");
  const [selectedItem, setSelectedItem] = useState(null);

  const sectionRefs = useRef({});

  useEffect(() => {
    if (initialCategory) {
      const timer = setTimeout(() => {
        const element = sectionRefs.current[initialCategory];
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [initialCategory]);

  // Scroll spy: highlight category button corresponding to active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // triggers when section is in the middle of viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Watch all rendered sections
    menuData.forEach((category) => {
      const el = sectionRefs.current[category.id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="menu-wrapper">
      {/* Premium Top Bar */}
      <header className="menu-topbar">
        <div className="topbar-left">
          <button className="back-btn" onClick={onBack} aria-label="Back to Home">
            <IoArrowBack />
          </button>
          <div className="brand-info">
            <h1 className="menu-title">AR First Choice</h1>
            <span className="brand-subtitle">Gourmet Halal Menu</span>
          </div>
        </div>

        {/* Spacing placeholder */}
        <div className="topbar-right-spacer"></div>
      </header>

      {/* Main Body */}
      <div className="menu-body">
        <Sidebar
          menuData={menuData}
          sectionRefs={sectionRefs}
          activeSection={activeSection || menuData[0]?.id || ""}
        />

        <main className="content">
          {menuData.map((category) => (
            <MenuSection
              key={category.id}
              category={category}
              registerRef={(el) => {
                sectionRefs.current[category.id] = el;
              }}
              onSelectItem={setSelectedItem}
            />
          ))}
        </main>
      </div>

      {/* Item Details Bottom Sheet Popup */}
      <ItemDetailsModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
};

export default Menu;