import React from "react";
import womanImage from "../assets/eaf98c86e767898b5d5bf09e2afbcbba14d30f51.png";
import plumProduct from "../assets/bfa6cb471def1625f335564f2d78bc0748f6b64c.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-[#EFF5E1] sm:px-6 lg:px-12 overflow-hidden">
      {/* Top Row */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-y-12 lg:gap-[150px] pt-12">
        {/* Paragraph */}
        <p className="indent-[60px] text-[18px] sm:text-[20px] font-normal text-gray-700 w-full max-w-[330px] text-center lg:text-left">
          Transform your skincare routine with premium products that restore,
          protect, and enhance your natural glow every day.
        </p>

        {/* Heading */}
        <h1 className="text-[60px] sm:text-[75px] md:text-[90px] font-bold uppercase leading-[1.1] text-center lg:text-left">
          GLOW <br /> NATUR-
          <br />
          ALLY
        </h1>

        {/* Top Right Image */}
        <div className="w-[180px] sm:w-[200px] md:w-[222px]">
          <img
            src={plumProduct}
            alt="Plum Product"
            className="w-full h-auto object-contain rounded-3xl"
          />
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-12 lg:mt-0 flex justify-center lg:block relative lg:top-[300px] lg:left-[150px]">
        <button className="bg-[#2D3B36] text-[#EFF5E1] px-6 py-2 rounded-full w-[180px] h-[50px] hover:bg-black transition">
          Shop Now
        </button>
      </div>

      {/* Woman Image and Background Text */}
      <div className="relative z-10 flex justify-center mt-10 mb-2">
        {/* SKINCARE Text Behind */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-0 pointer-events-none">
          <div className="text-[#2D3B36] text-[100px] sm:text-[160px] md:text-[200px] lg:text-[240px] font-extrabold uppercase whitespace-nowrap leading-none">
            SKINCARE
          </div>
        </div>

        {/* Woman Image */}
        <img
          src={womanImage}
          alt="Avocado woman"
          className="relative z-10 rounded-3xl w-[280px] sm:w-[400px] md:w-[500px] lg:w-[610px] object-cover"
        />

        {/* Speech Bubble */}
        <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 bg-[#EFF5E1] w-[90%] max-w-[476px] px-4 py-3 rounded-full flex items-center gap-2 border border-[#2D3B36] text-[16px] sm:text-[18px] lg:text-[20px] z-10">
          <img
            src={plumProduct}
            alt="icon"
            className="w-[60px] sm:w-[70px] lg:w-[80px] h-auto rounded-full border-dashed border p-0.5"
          />
          <span>While giving you an invigorating cleansing experience.</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
