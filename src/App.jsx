import { useState } from "react";
import LandingPage from "./components/LandingPage";
import Menu from "./pages/Menu";
import "./App.css";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleExplore = (category = "") => {
    setSelectedCategory(category);
    setShowMenu(true);
  };

  const handleBack = () => {
    setSelectedCategory("");
    setShowMenu(false);
  };

  return showMenu ? (
    <Menu onBack={handleBack} initialCategory={selectedCategory} />
  ) : (
    <LandingPage onExplore={handleExplore} />
  );
}

export default App;
