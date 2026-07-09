import "../components/Sidebar.css";

const Sidebar = ({ menuData, sectionRefs, activeSection }) => {
  return (
    <nav className="sidebar">
      {menuData.map((cat) => (
        <button
          key={cat.id}
          className={`sidebar-btn ${cat.id === activeSection ? "active" : ""}`}
          onClick={() => {
            const element = sectionRefs.current[cat.id];
            if (element) {
              element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
          aria-label={`Scroll to ${cat.name}`}
        >
          <div className="sidebar-img-wrapper">
            <img
              src={cat.items[0]?.img || "/images/burger.png"}
              alt={cat.name}
              className="sidebar-img"
            />
          </div>
          <span className="sidebar-text">{cat.name}</span>
        </button>
      ))}
    </nav>
  );
};

export default Sidebar;