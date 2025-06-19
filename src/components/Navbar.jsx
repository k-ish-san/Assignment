import { Link } from "react-router-dom";
import icon1 from "../assets/bag.svg";
import icon2 from "../assets/heart.svg";
import icon3 from "../assets/user.svg";

const Navbar = () => {
  return (
    <nav className="bg-[#EFF5E1] text-[#2D3B36] font-inter">
      <div className="max-w-[1400px] mx-auto py-[35px] px-[60px] flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-[30px] font-bold uppercase tracking-wide">
          Skincare
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-12 text-[20px] font-normal tracking-[-0.05em]">
          <Link to="/" className="hover:text-blue-500 transition">
            All Products
          </Link>
          <Link to="/about" className="hover:text-blue-500 transition">
            Serum
          </Link>
          <Link to="/contact" className="hover:text-blue-500 transition">
            Sunscreen
          </Link>
          <Link to="/contact" className="hover:text-blue-500 transition">
            Bundle
          </Link>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4 ml-10">
          {/* Cart Icon + Text */}
          <div className="flex items-center gap-2">
            <div className="rounded-full p-2 bg-[#F8FEE5]">
              <img src={icon1} alt="Cart" className="w-5 h-5" />
            </div>
            <span className="text-[20px] font-normal tracking-[-0.05em]">
              Cart(1)
            </span>
          </div>

          {/* Heart Icon */}
          <div className="rounded-full p-2 bg-[#F8FEE5]">
            <img src={icon2} alt="Wishlist" className="w-5 h-5" />
          </div>

          {/* User Icon */}
          <div className="rounded-full p-2 bg-[#F8FEE5]">
            <img src={icon3} alt="User" className="w-5 h-5" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
