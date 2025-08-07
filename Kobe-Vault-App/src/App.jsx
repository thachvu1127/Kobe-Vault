import { useState } from "react";
import HeroSection from "./components/hero/HeroSection";
import NavBar from "./components/navigation/NavBar";
function App() {
  const [activeShoe, setActiveShoe] = useState(null);
  const handleShoeClick = (index) => {
    setActiveShoe(index);
  };
  return (
    <div className="min-h-screen">
      <NavBar activeShoe={activeShoe} onShoeClick={handleShoeClick}></NavBar>
      <HeroSection></HeroSection>
    </div>
  );
}

export default App;
