import { useState } from "react";
import LandingPage from "./components/LandingPage";
import Menu from "./pages/Menu";
import "./App.css";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return showMenu ? (
    <Menu onBack={() => setShowMenu(false)} />
  ) : (
    <LandingPage onExplore={() => setShowMenu(true)} />
  );
}

export default App;
