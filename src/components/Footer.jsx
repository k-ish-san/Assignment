import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2D3B36] text-[#E7E8E0] py-16 px-6 font-inter relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <h3 className="text-3xl sm:text-4xl font-semibold text-[#FEFFF4] mb-4">
            Join The Skincare <br /> Community Now.
          </h3>

          <div className="flex gap-10 mt-16 text-sm">
            <a href="#" className="hover:underline">
              Facebook
            </a>
            <a href="#" className="hover:underline">
              Instagram
            </a>
            <a href="#" className="hover:underline">
              YouTube
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative md:text-right">
          <p className="text-sm mb-2 left-0 text-[#E7E8E0]">Get in Touch</p>
          <a
            href="mailto:contact.skincare.com"
            className="text-2xl sm:text-3xl left-0 font-medium text-[#FEFFF4] "
          >
            contact.skincare.com
          </a>

          <div className="flex md:justify-end gap-10 mt-20 text-sm">
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Cookies Policy
            </a>
          </div>
        </div>
      </div>

      {/* Background Watermark Text (optional) */}
      {/* Watermark Text */}
      <div
        className="relative sm:left-[-19px] md:left-[-43px] lg:left-[-115px] flex justify-center text-center w-full z-0"
      >
        <h1 className="sm:text-[90px] sm:tracking-[-0.05em] sm:leading-[60px] font-[900] text-trim leading-trim md:text-[170px] lg:text-[420px]  text-[#3D4B4680] opacity-50 lg:leading-none lg:font-[700] select-none uppercase">
          SKINCARE
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
