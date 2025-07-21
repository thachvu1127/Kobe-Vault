import { useState } from "react";
import BackgroundImage from "./components/common/BackgroundImage";
import NavBar from "./components/navigation/NavBar";
function App() {
  const [activeShoe, setActiveShoe] = useState(null);
  const handleShoeClick = (index) => {
    setActiveShoe(index);
  };
  return (
    <div>
      {/* <BackgroundImage></BackgroundImage> */}
      <NavBar activeShoe={activeShoe} onShoeClick={handleShoeClick}></NavBar>
    </div>
  );
}

export default App;
