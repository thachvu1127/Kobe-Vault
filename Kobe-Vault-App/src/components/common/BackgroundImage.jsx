import React from "react";
import kobeHeroImage from "../../assets/kobe-background.jpg";

const BackgroundImage = () => {
  const imageURL = kobeHeroImage;
  return (
    <div
      className="absolute inset-0 bg-cover bg-no-repeat -z-10 bg-fixed"
      style={{ backgroundImage: `url(${imageURL})` }}
    >
      <div className="absolute inset-0 bg-opacity-40"></div>
    </div>
  );
};

export default BackgroundImage;
