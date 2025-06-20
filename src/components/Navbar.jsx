import { Link } from "react-router-dom";
import icon1 from "../assets/bag.svg";
import icon2 from "../assets/heart.svg";
import icon3 from "../assets/user.svg";

const Navbar = () => {
  return (
    <nav className="bg-[#EFF5E1] text-[#2D3B36] font-inter">
      <div
        className="
          ml-[30px] pt-[37px] mr-[37px] 
          md:ml-[40px] md:pt-[40px] md:mr-[45px]
          2xl:ml-[100px] 2xl:pt-[50px] 2xl:mr-[110px]
          flex 
        "
      >
        {/* Logo */}
        <Link
          to="/"
          className="text-[20px] md:text-[25px] 2xl:text-[30px] font-[800] uppercase"
        >
          Skincare
        </Link>

        {/* Navigation Links */}
        <div className="flex-1 flex justify-center">
          <div
            className="hidden tracking-[-0.05em]
            md:flex md:text-[12px] font-[400] md:pt-[4px] md:pb-[5px]
            2xl:text-[20px] pt-[3px] pb-[4px]"
          >
            <Link to="/" className="md:ml-[65px] 2xl:ml-[461px]">
              All Products
            </Link>
            <Link to="/" className="md:ml-[30px] 2xl:ml-[61px]">
              Serum
            </Link>
            <Link to="/" className="md:ml-[25px] 2xl:ml-[54px]">
              Sunscreen
            </Link>
            <Link
              to="/"
              className="md:ml-[29px] md:mr-[85px] 2xl:ml-[58px] 2xl:mr-[392px]"
            >
              Bundle
            </Link>
          </div>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-[10px]">
          {/* Cart */}
          <div className="flex items-center">
            <div className="rounded-full p-[7px] md:p-[5px] 2xl:p-[10px] bg-[#F8FEE5]">
              <img
                src={icon1}
                alt="Cart"
                className="w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px]"
              />
            </div>
          </div>
          <div className="hidden 2xl:inline-block mr-[11px] 2xl:text-[20px] tracking-[-0.05em]">
            Cart(1)
          </div>
          {/* Wishlist */}
          <div className="rounded-full p-[7px] md:p-[5px] 2xl:p-[10px] bg-[#F8FEE5]">
            <img
              src={icon2}
              alt="Wishlist"
              className="w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px]"
            />
          </div>

          {/* User */}
          <div className="rounded-full p-[7px] md:p-[5px] 2xl:p-[10px] bg-[#F8FEE5]">
            <img
              src={icon3}
              alt="User"
              className="w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px]"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
