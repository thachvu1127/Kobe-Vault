import React from "react";

const TimelineButton = ({ shoe, index, activeShoe, onShoeClick }) => {
  return (
    <button
      onClick={() => onShoeClick(activeShoe === index ? null : index)}
      className={`relative px-4 py-2 text-md font-bold rounded-full whitespace-nowrap transition-all duration-300 hover:bg-white/20 min-w-[3rem] ${
        activeShoe === index
          ? "bg-gradient-to-r from-purple-500 to-yellow-400 text-black shadow-lg"
          : "text-white hover:text-yellow-300 hover:scale-110"
      }`}
    >
      {shoe.name}
    </button>
  );
};

export default TimelineButton;
