import { Youtube, Facebook, Search, Heart, ShoppingCart, User, Globe, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import mainlogo2 from "../assets/mainlogo2.png";

const Header = () => {
  return (
    <div className="w-full">
      <div className="bg-[#629D23] h-10 flex items-center justify-between px-6 text-white text-sm">
        <p className="text-xs sm:text-sm">Welcome to our Organic store EkoMart!</p>
        <div className="flex items-center gap-2">
          <p className="hidden sm:block">Follow Us:</p>
          <Facebook size={16} />
          <Youtube size={16} />
          <Globe size={16} />
          <Phone size={16} />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between py-4 px-6 bg-white gap-4">
        <div className="flex items-center justify-center sm:justify-start w-full sm:w-auto">
          <img src={mainlogo2} alt="Codeship-logo" className="object-contain w-[180px] sm:w-[200px]"/>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <div className="flex items-center border border-[#E6E6E6] rounded-md overflow-hidden w-full sm:w-[350px] md:w-[450px]">
            <input type="text" placeholder="Search for products, categories or brands" className="px-3 py-2 w-full outline-none text-sm text-[#6E777D]"/>
            <button className="flex items-center justify-center gap-1 bg-[#629D23] px-4 py-2 text-white font-medium whitespace-nowrap">
              Search <Search size={16} />
            </button>
          </div>
          <div className="flex items-center cursor-pointer gap-2 sm:gap-3">
            <button className="relative flex items-center gap-1 border px-3 py-2 rounded-md text-sm">
              <Heart size={16} />
              <span className="hidden sm:inline">Wishlist</span>
              <span className="absolute -top-1 -right-1 bg-[#629D23] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </button>
            <button className="relative flex items-center gap-1 border px-3 py-2 rounded-md text-sm">
              <ShoppingCart size={16} />
              <span className="hidden sm:inline">Cart</span>
              <span className="absolute -top-1 -right-1 bg-[#629D23] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </button>
            <button className="flex items-center gap-1 border px-3 py-2 rounded-md text-sm">
              <User size={16} />
              <span className="hidden sm:inline">Account</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between bg-[#F8F8F8] px-6 py-3 gap-3">
        <button className="flex items-center gap-2 bg-[#629D23] text-white px-4 py-2 rounded-md w-full sm:w-auto justify-center">
          ☰ All Categories ▼
        </button>
        <nav className="flex flex-wrap gap-4 sm:gap-6 text-[#333] justify-center">
          <Link to="/home" className="hover:text-[#629D23]">Home</Link>
          <Link to="/support" className="hover:text-[#629D23]">Support</Link>
          <Link to="/shop" className="hover:text-[#629D23]">Shop ▼</Link>
          <Link to="/contact" className="hover:text-[#629D23]">Contact</Link>
        </nav>
        <div className="bg-[#629D23] text-white px-4 py-2 rounded-tr-lg rounded-bl-lg font-medium text-center w-full sm:w-auto">
          Get 30% Discount Now{" "}
          <span className="bg-white text-[#629D23] px-2 py-1 ml-2 rounded-md text-sm">
            Sale
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
