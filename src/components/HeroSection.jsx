import React from "react";
import womanImage from "../assets/eaf98c86e767898b5d5bf09e2afbcbba14d30f51.png";
import plumProduct from "../assets/bfa6cb471def1625f335564f2d78bc0748f6b64c.jpg";

const HeroSection = () => {
  return (
    <section className="bg-[#EFF5E1] px-4 sm:px-6 lg:px-12">
      {/* Top Row */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-y-12 lg:space-x-[300px] pt-12">
        {/* Paragraph */}
        <p className="indent-[60px] text-[18px] sm:text-[20px] font-[400] text-gray-700 w-full max-w-[330px] text-center lg:text-left">
          Transform your skincare routine with premium products that restore,
          protect, and enhance your natural glow every day.
        </p>

        {/* Heading */}
        <h1 className="text-[60px] sm:text-[75px] md:text-[90px] font-[700] uppercase leading-[1.1] text-center lg:text-left">
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
        <button className="bg-[#2D3B36] text-[#EFF5E1] px-6 py-2
         rounded-full w-[180px] h-[50px] hover:bg-black transition">
          Shop Now
        </button>
      </div>

      {/* Center Image with Speech Bubble */}
      <div className="relative flex justify-center mt-10 z-10">
        <img
          src={womanImage}
          alt="Avocado woman"
          className="rounded-3xl w-[280px] sm:w-[400px] md:w-[500px] lg:w-[610px] object-cover"
        />

        {/* Speech Bubble */}
        <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 bg-[#EFF5E1] w-[90%] max-w-[476px] h-auto px-4 py-3 rounded-full flex items-center gap-2 border-[#2D3B36] text-[16px] sm:text-[18px] lg:text-[20px]">
          <img
            src={plumProduct}
            alt="icon"
            className="w-[60px] sm:w-[70px] lg:w-[80px] h-auto rounded-full border-dashed border p-0.5"
          />
          <span className="">
            While giving you an invigorating cleansing experience.
          </span>
        </div>
      </div>

      {/* Background Word "SKINCARE" */}
      <div className=" lg:mt-[-430px] text-[#2D3B36] w-full text-[120px] sm:text-[200px] md:text-[300px] lg:text-[378px] font-[800] text-center ">
        SKINCARE
      </div>
    </section>
  );
};

export default HeroSection;
