import React from "react";
import bannerImage from "../assets/model.jpg"; // Your uploaded image

const PromoBanner = () => {
  return (
    <section className="px-4 py-10 bg-[#FEFFF4]">
      <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden relative h-[450px] sm:h-[520px] lg:h-[600px]">
        {/* Background Image */}
        <img
          src={bannerImage}
          alt="Promo"
          className="w-full h-full object-cover"
        />

        {/* Overlay with gradient */}
        <div className="absolute  bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

        {/* Text + Button */}
        <div className="absolute left-1/3 bottom-8 flex flex-col items-center justify-center text-center px-6 text-white z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 leading-tight">
            Feel Beautiful Inside and Out <br /> with Every Product.
          </h2>
          <button className="mt-2 bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-[#e7e7e7] transition">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
