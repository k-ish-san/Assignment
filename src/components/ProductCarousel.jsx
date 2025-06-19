import React from "react";
import product1 from "../assets/prod1.jpg";
import product2 from "../assets/prod2.jpg";
import product3 from "../assets/prod3.jpg";
import arrowLeft from "../assets/arrowleft.svg";
import arrowRight from "../assets/arrowright.svg";

const products = [
  {
    id: 1,
    name: "ALYA SKIN CLEANSER.",
    price: "FROM $29.99",
    image: product1,
  },
  {
    id: 2,
    name: "RITUAL OF SAKURA.",
    price: "FROM $27.99",
    image: product2,
  },
  {
    id: 3,
    name: "THE BODY LOTION.",
    price: "FROM $19.99",
    image: product3,
    selected: true,
  },
];

const ProductCarousel = () => {
  return (
    <section className="bg-[#FEFFF4] px-6 py-12 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <button className="flex items-center gap-2 border border-black px-4 py-1 rounded-full text-sm">
            <span className="inline-block w-2 h-2 bg-black rounded-full" />
            Best Selling Products
          </button>

          <h2 className="text-2xl sm:text-3xl font-semibold text-center text-[#2D3B36]">
            Skincare That Brings Out <br className="sm:hidden" />
            Your Natural Radiance
          </h2>

          <div className="flex gap-3">
            {/* Left Arrow */}
            <button className="w-10 h-10 bg-[#FEFFF4] border flex items-center justify-center rounded-full transition">
              <img src={arrowLeft} alt="Previous" className="w-6 h-4 relative left-2" />
            </button>

            {/* Right Arrow */}
            <button className="w-10 h-10 bg-[#2D3B36] border flex items-center justify-center rounded-full transition">
              <img src={arrowRight} alt="Next" className="w-6 h-4 relative right-2" />
            </button>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
          <div
            key={product.id}
            className="rounded-2xl overflow-hidden shadow-md border-2
                 border-transparent
              transition-all duration-300 ease-in-out"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 object-cover"
            />
            <div className="bg-[#FEFFF4] flex justify-between items-center px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-[#2D3B36]">
                  {product.name}
                </p>
                <p className="text-xs text-gray-500">{product.price}</p>
              </div>
              <button
                className="w-8 h-8 rounded bg-[#E6E9D6] flex items-center justify-center "
                 
              >
                {/* Shopping Cart SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-[#2D3B36]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.293 1.293a1 1 0 001.415 1.414L9 15m0 0l1.293 1.293a1 1 0 001.414-1.414L11 13"
                  />
                </svg>
              </button>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
