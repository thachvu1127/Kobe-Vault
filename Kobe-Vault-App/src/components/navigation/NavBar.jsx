import React from "react";
import Logo from "./Logo";
import ShoesTimeline from "./ShoesTimeline";
import MediumTimeline from "./MediumTimeline";
const NavBar = ({ activeShoe, onShoeClick }) => {
  return (
    <nav className="relative z-20 bg-gradient-to-r from-purple-900/80 to-[#fdb927]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-10xl mx-auto px-4">
        <div className="flex items-center py-5 gap-8">
          <Logo></Logo>
          <ShoesTimeline
            activeShoe={activeShoe}
            onShoeClick={onShoeClick}
          ></ShoesTimeline>
        </div>
        <div className="hidden lg:flex xl:hidden justify-center pb-4">
          <MediumTimeline activeShoe={activeShoe} onShoeClick={onShoeClick} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
