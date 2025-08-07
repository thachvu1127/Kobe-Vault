import React from "react";
import Logo from "./Logo";
import ShoesTimeline from "./ShoesTimeline";
import MediumTimeline from "./MediumTimeline";
import MobileTimeline from "./MobileTimeline";
import shoes from "../../data/shoes";
const NavBar = ({ activeShoe, onShoeClick }) => {
  return (
    <nav className="relative z-20 bg-gradient-to-r from-purple-900/80 to-[#fdb927]/75 backdrop-blur-md border-b border-white/10">
      <div className="max-w-screen mx-auto px-10">
        <div className="flex items-center py-5 gap-8 justify-between">
          <Logo></Logo>
          <ShoesTimeline
            activeShoe={activeShoe}
            onShoeClick={onShoeClick}
          ></ShoesTimeline>
          <MobileTimeline
            activeShoe={activeShoe}
            onShoeClick={onShoeClick}
            shoes={shoes}
          />
        </div>
        <div className="hidden lg:flex xl:hidden justify-center pb-4">
          <MediumTimeline activeShoe={activeShoe} onShoeClick={onShoeClick} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
