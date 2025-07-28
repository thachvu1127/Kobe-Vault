import React from "react";
import BackgroundImage from "../common/BackgroundImage";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <BackgroundImage></BackgroundImage>
      <div className="relative z-10">
        <button className="group relative px-5 py-4 bg-gradient-to-r from-purple-600 to-purple-400 text-white font-semibold text-xl rounded-full hover:from-purple-500 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-purple-500/30 opacity-90">
          <span className="relative z-20">View Collection</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
