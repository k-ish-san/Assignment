import React from "react";
import womanImage2 from "../assets/5617a13221609fb0ba6cd721b235ba7e9b1ffa06.png"; // Update your image path if needed
import award from "../assets/award.svg";


const FeatureSection = () => {
  return (
    <section className="bg-[#FEFFF4] text-[#2D3B36] px-6 py-12 lg:py-24 font-inter">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <button className="mb-6 border-2 border-[#2D3B36] text-sm px-4 py-1 rounded-full text-[#2D3B36] font-medium hover:bg-[#2D3B36] hover:text-white transition">
            <span className="inline-block w-2 h-2 bg-black rounded-full mr-2 hover:bg-white"></span>
            Why Our Products
          </button>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            YOUR SKIN DESERVES <br className="hidden md:block" /> THE BEST CARE.
          </h2>

          <p className="text-gray-700 text-base sm:text-lg mb-10 max-w-xl">
            Discover a curated collection of skincare products designed to
            rejuvenate, protect, and pamper your skin. Explore our range crafted
            with love backed by science, and inspired by nature.
          </p>

          {/* Feature List */}
          <ul className="space-y-8">
            <li>
              <p className="text-xl sm:text-2xl lg:text-[60px] font-[400] mb-1 tracking-[-0.02em]">
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-[#2D3B36] to-[#FEFFF4] ">
                  01
                </span>{" "}
                Bio Ingredients
              </p>
              <p className="text-gray-700 text-sm sm:text-base ml-20">
                Get naturally beautiful and transform with our bio ingredients
                creams for healthy, radiant skin.
              </p>
            </li>
            <li>
              <p className="text-xl sm:text-2xl font-[400] mb-1 lg:text-[60px] tracking-[-0.02em]">
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-[#2D3B36] to-[#FEFFF4]">
                  02
                </span>{" "}
                Everything Natural
              </p>
              <p className="text-gray-700 text-sm sm:text-base ml-20">
                Pure ingredients for pure skin. The perfect solution for your
                skin care needs.
              </p>
            </li>
            <li>
              <p className="text-xl sm:text-2xl font-[400] mb-1 lg:text-[60px] tracking-[-0.02em]">
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-[#2D3B36] to-[#FEFFF4]">
                  03
                </span>{" "}
                All Handmade
              </p>
              <p className="text-gray-700 text-sm sm:text-base ml-20">
                Made with love and care. Just for you. Give your skin the tender
                loving care it deserves.
              </p>
            </li>
          </ul>
        </div>

        {/* Right Image & Badge */}
        <div className="relative w-full">
          <img
            src={womanImage2}
            alt="Skincare model"
            className="rounded-2xl w-full object-cover shadow-lg"
          />

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-[#EFF5E1] border px-4 py-2 rounded-full flex items-center gap-2 shadow-sm text-xs sm:text-sm">
            {/* Icon Circle */}
            <div className="flex items-center justify-center p-1 rounded-full border border-dashed">
              <img
                src={award}
                alt="Award"
                className="w-10 h-10 bg-[#2D3B36] rounded-full object-contain"
              />
            </div>

            {/* Text */}
            <span className="text-[#2D3B36] font-medium">
              Best Skin Care Product Award Winning
            </span>
          </div>

          {/* Footer Text */}
          <div className="flex justify-between text-xs sm:text-sm text-gray-600 mt-4 px-2">
            <span>SINCE 2001</span>
            <span>LEARN MORE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
