import React from "react";
import img1 from "../../assets/brands/Aroma-logo.png";
import img2 from "../../assets/brands/Blackstar-logo.png";
import img3 from "../../assets/brands/Boss-logo.png";
import img5 from "../../assets/brands/Casio.png";
import img6 from "../../assets/brands/Epiphone-logo-jpg.webp";
import img7 from "../../assets/brands/Lava-Music-logo.png";
import img8 from "../../assets/brands/Marshall-logo-jpg.webp";
import img9 from "../../assets/brands/Orange-Logo.png";
import img10 from "../../assets/brands/Promark-logo-jpg.webp";

const Brands = () => {
  return (
    <>
      <h2 className=" my-10 text-4xl font-bold text-[#0C4B65] fancy-underline">
        Our Brands
      </h2>
      <div className="md:flex my-10">
        <img className="h-14" src={img1} alt="" />
        <img className="h-14" src={img2} alt="" />
        <img className="h-14" src={img3} alt="" />
        <img className="h-14" src={img5} alt="" />
        <img className="h-14" src={img6} alt="" />
        <img className="h-14" src={img7} alt="" />
        <img className="h-14" src={img8} alt="" />
        <img className="h-14" src={img9} alt="" />
        <img className="h-14" src={img10} alt="" />
      </div>
    </>
  );
};

export default Brands;
