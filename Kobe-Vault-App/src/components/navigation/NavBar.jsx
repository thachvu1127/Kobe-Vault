import React from "react";
import Logo from "./Logo";
const NavBar = () => {
  return (
    <nav className="relative z-20 bg-gradient-to-r from-purple-900/80 to-[#fdb927]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Logo></Logo>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
