import React from "react";
import shoes from "../../data/shoes";

const MediumTimeline = ({ activeShoe, onShoeClick }) => {
  return (
    <div className="hidden lg:flex xl:hidden items-center rounded-xl px-4 py-3 backdrop-blur-md border-white/10 max-w-5xl mx-auto overflow-hidden">
      <div className="flex flex-wrap gap-2 justify-center w-full">
        {shoes.map((shoe, index) => (
          <button
            key={shoe.number}
            onClick={() => onShoeClick(activeShoe === index ? null : index)}
            className={`px-3 py-2 text-sm font-semibold rounded-full transition-all duration-300 hover:bg-white/20 whitespace-nowrap ${
              activeShoe === index
                ? "bg-gradient-to-r from-purple-500 to-yellow-400 text-black shadow-lg"
                : "text-white hover:text-yellow-300 hover:scale-105"
            }`}
          >
            {shoe.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MediumTimeline;
