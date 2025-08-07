import React, { useState } from "react";
import { createPortal } from "react-dom";
import { EllipsisVertical, X } from "lucide-react";

const MobileTimeline = ({ activeShoe, onShoeClick, shoes }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTimeline = () => {
    setIsOpen(!isOpen);
  };

  const handleShoeClick = (index) => {
    onShoeClick(activeShoe === index ? null : index);
    setIsOpen(false); // Close the menu after selection
  };

  const renderTimeline = () => (
    <div 
      className="bg-black/50 backdrop-blur-sm overflow-y-auto"
      onClick={() => setIsOpen(false)}
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        zIndex: 99999,
        width: '100vw',
        height: '100vh'
      }}
    >
      <div className="min-h-full flex items-center justify-center py-8">
      <div className="flex flex-col items-center space-y-4 max-w-xs w-full px-4 py-8">
        <div className="flex flex-col items-center space-y-4 max-w-xs w-full px-4 py-8">
          {shoes.map((shoe, index) => (
            <button
              key={shoe.number}
              onClick={(e) => {
                e.stopPropagation();
                handleShoeClick(index);
              }}
              className={`w-full px-6 py-5 text-center font-bold rounded-full transition-all duration-300 whitespace-nowrap ${
                activeShoe === index
                  ? "bg-gradient-to-r from-purple-500 to-yellow-400 text-black shadow-lg transform scale-105"
                  : "text-white hover:text-yellow-300 hover:scale-105 bg-white/10 hover:bg-white/20"
              }`}
            >
              {shoe.name}
            </button>
          ))}
        </div>
      </div>
        </div>
    </div>
  );

  return (
    <div className="text-white md:hidden lg:hidden xl:hidden">
      <button
        className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200 hover:text-yellow-300"
        onClick={toggleTimeline}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <EllipsisVertical className="h-6 w-6" />
        )}
      </button>
      
      {isOpen && createPortal(renderTimeline(), document.body)}
    </div>
  );
};

export default MobileTimeline;