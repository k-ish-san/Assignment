import React, { useState } from "react";
import product1 from "../assets/prod1.jpg";
import product2 from "../assets/prod2.jpg";
import product3 from "../assets/prod3.jpg";
import cartIcon from "../assets/cart.svg"; // Use your cart SVG here

const categories = ["New Arrival", "Cleansing", "Acne Fighter", "Anti Aging"];

const products = [
  {
    id: 1,
    name: "ALYA SKIN CLEANSER.",
    price: "FROM $29.99",
    image: product1,
    category: "New Arrival",
  },
  {
    id: 2,
    name: "RITUAL OF SAKURA.",
    price: "FROM $27.99",
    image: product2,
    category: "New Arrival",
  },
  {
    id: 3,
    name: "THE BODY LOTION.",
    price: "FROM $19.99",
    image: product3,
    category: "New Arrival",
  },
];

const ProductListing = () => {
  const [selectedCategory, setSelectedCategory] = useState("New Arrival");

  const filteredProducts = products.filter(
    (p) => p.category === selectedCategory
  );

  return (
    <section className="bg-[#FEFFF4] px-6 py-12 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-[#2D3B36] mb-6">
          Feel Beautiful Inside and Out <br className="sm:hidden" /> with Every
          Product.
        </h2>

        {/* Category Buttons */}
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1 text-sm rounded-full border transition font-medium ${
                selectedCategory === cat
                  ? "bg-[#2D3B36] text-white"
                  : "bg-white text-[#2D3B36] border-[#2D3B36]"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl overflow-hidden shadow-md border border-gray-200 transition hover:shadow-lg"
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
                <button className="w-9 h-9 rounded bg-[#2D3B361A]/70 flex items-center justify-center">
                  <img src={cartIcon} alt="Add to Cart" className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
