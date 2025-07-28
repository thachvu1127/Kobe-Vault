import React from "react";
import shoes from "../../data/shoes";
import TimelineButton from "./TimelineButton";

const ShoesTimeline = ({ activeShoe, onShoeClick }) => {
  return (
    <div className="hidden xl:flex items-center space-x-2 rounded-xl px-2 py-2 blackdrop-blur-md border border-white/30 text-black">
      {shoes.map((shoe, index) => (
        <TimelineButton
          shoe={shoe}
          key={shoe.number}
          index={index}
          activeShoe={activeShoe}
          onShoeClick={onShoeClick}
        />
      ))}
    </div>
  );
};

export default ShoesTimeline;
