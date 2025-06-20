import React from "react";
import womanImage from "../assets/eaf98c86e767898b5d5bf09e2afbcbba14d30f51.png";
import plumProduct from "../assets/bfa6cb471def1625f335564f2d78bc0748f6b64c.jpg";

const HeroSection = () => {
  return (
    <>
      <section className="relative bg-[#EFF5E1] text-[#2D3B36] overflow-hidden pt-[98px]">
        {/* FIRST ROW */}
        <div className="flex flex-col md:flex-row justify-center items-center md:mx-[40px] 2xl:mx-[100px]">
          {/* box1: Paragraph */}
          <p
            className=" order-2 md:order-1 md:mr-[93px] 2xl:mr-none text-[16px] font-[400] leading-[22px] tracking-[-0.05em] w-[342px]
          md:indent-[74px] md:text-[14px] md:leading-[100%] md:w-[234px]
          2xl:indent-[105px] 2xl:text-[20px] 2xl:w-[335px] 2xl:mr-[326px]"
          >
            Transform your skincare routine with premium products that restore,
            protect, and enhance your natural glow every day.
          </p>
          {/* box2: Heading */}
          <h1
            className="order-1 md:order-2 relative md:absolute md:top-[300px] 2xl:top-0 2xl:relative md:z-20 text-[75px] font-[900] leading-[60px] tracking-[-0.05em] 
          md:text-[135px] md:leading-[110px] md:tracking-[-0.03em] md:font-[800] 
          2xl:font-[700] 2xl:leading-[90px] 2xl:text-[100px] 2xl:mr-[438px] uppercase"
          >
            GLOW
            <span className="inline-block sm:inline-block md:inline-block 2xl:hidden">
              WWW
            </span>
            <br />
            NATUR<span className="hidden 2xl:inline-block">-</span>
            <br className="hidden 2xl:inline-block" />
            ALLY
          </h1>
          {/* box3: Product Image */}
          <div className="hidden  relative md:order-3 md:flex md:w-[335px]">
            <img
              src={plumProduct}
              alt="Plum Product"
              className="w-full h-auto object-contain 2xl:rounded-3xl"
            />
          </div>
        </div>

        {/* SECOND ROW */}
        <div className=" flex flex-col md:flex-row justify-center items-center gap-6 mt-10 mb-2">
          {/* box2: Woman Image and Background Text */}
          <div className="order-1 relative flex justify-center">
            {/* SKINCARE Background Text */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-0 pointer-events-none">
              <div className="text-[#2D3B36] text-[100px] sm:text-[160px] md:text-[200px] lg:text-[240px] font-extrabold uppercase whitespace-nowrap leading-none">
                SKINCARE
              </div>
            </div>
            {/* Woman Image */}
            <img
              src={womanImage}
              alt="Avocado woman"
              className="relative z-10 md:mt-[150px] 2xl:mt-[100px] 2xl:rounded-3xl w-[280px] sm:w-[400px] md:w-[500px] lg:w-[610px] object-cover"
            />
            {/* Speech Bubble */}
            <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 bg-[#EFF5E1] w-[90%] max-w-[476px] px-4 py-3 rounded-full flex items-center gap-2 border border-[#2D3B36] text-[16px] sm:text-[18px] lg:text-[20px] z-10">
              <img
                src={plumProduct}
                alt="icon"
                className="w-[60px] sm:w-[70px] lg:w-[80px] h-auto rounded-full border-dashed border p-0.5"
              />
              <span>
                While giving you an invigorating cleansing experience.
              </span>
            </div>
          </div>
          <div className="order-2 md:hidden relative flex w-full">
            <img
              src={plumProduct}
              alt="Plum Product"
              className="w-full h-auto object-contain rounded-3xl"
            />
          </div>
        </div>
      </section>
      {/* box1: Shop Now Button */}
      <div className="flex flex-col justify-center items-center">
        <div className="relative w-[178px] h-[50px] md:absolute md:bottom-[10px] md:right-[70px]">
          <button className="bg-[#2D3B36] text-[#EFF5E1] px-6 py-2 rounded-full w-[180px] h-[50px] hover:bg-black transition">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
