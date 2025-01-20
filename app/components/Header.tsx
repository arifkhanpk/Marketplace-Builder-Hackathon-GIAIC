"use client";
import Link from "next/link";
import { useState, useContext } from "react";
import LogoIcon from "../Images/Logo Icon.png";
import CartLogo from "../Images/cart-logo.png";
import { CartContext } from "../components/CartContext"; // Adjust the path based on your file structure

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Access the cart context
  const context = useContext(CartContext);

  // If context is available, extract cart, otherwise fallback to an empty array
  const cartItemCount = context ? context.cart.length : 0;

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-[#1F1B2E] text-white text-sm py-2 px-4 flex justify-between items-center lg:px-8">
        <div className="hidden lg:block">
          ✔ Free Shipping On All Orders Over $50
        </div>
        <div className="flex justify-center w-full lg:w-auto space-x-4">
          <button className="hover:underline">Eng</button>
          <Link href="../Pages/FAQs">
            <button className="hover:underline">FAQs</button>
          </Link>
          <Link href="../Pages/ContactUs">
            <button className="hover:underline">Need Help</button>
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-[#F8F9FA] py-4 px-4 border-b border-gray-300 lg:px-8">
        {/* Content container */}
        <div className="w-full max-w-[1321px] mx-auto flex justify-between items-center">
          {/* Logo on the left */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg">
              <img src={LogoIcon.src} alt="" />
            </div>

            <span className="text-lg font-semibold">Comforty</span>
          </div>

          {/* Hamburger Menu - Mobile */}
          <button
            className="lg:hidden text-2xl ml-auto"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Cart on the right */}
          <Link href="../Pages/Cart">
            <div className="relative hidden lg:block">
              <button className="bg-white border rounded-full p-2 flex items-center space-x-2 shadow-md hover:shadow-lg">
                <div className="w-8 h-8 rounded-full">
                  <img src={CartLogo.src} alt="" />
                </div>
                <span className="text-sm">Cart</span>
              </button>
              <span className="absolute top-0 right-0 bg-teal-500 text-white text-xs rounded-full px-1.5">
                {cartItemCount} {/* Dynamic cart item count */}
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Nav Links - Below Logo */}
      <div className="max-w-[1321px] mx-auto mt-4 hidden lg:flex justify-between items-center">
        <nav className="flex space-x-6 text-sm font-medium">
          <Link href="/" className="text-teal-500 hover:underline">
            Home
          </Link>
          <Link href="../Pages/Singleproduct" className="hover:underline">
            Shop
          </Link>
          <Link href="../Product" className="hover:underline">
            Product
          </Link>
          <Link href="/" className="hover:underline">
            Pages
          </Link>
          <Link href="../Pages/About" className="hover:underline">
            About
          </Link>
          <Link href="../studio" className="hover:underline">
            Studio
          </Link>
        </nav>
        
        {/* Contact - Right side */}
        <div className="w-45 h-8">Contact: (805) 555-0111</div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="bg-[#F8F9FA] p-4 text-sm font-medium lg:hidden max-w-[1321px] mx-auto">
          {/* Links */}
          <div className="space-y-2">
            <Link href="/" className="block text-teal-500 hover:underline">
              Home
            </Link>
            <Link
              href="../Pages/Singleproduct"
              className="block hover:underline"
            >
              Shop
            </Link>
            <Link href="../Product" className="block hover:underline">
              Product
            </Link>
            <Link href="/" className="block hover:underline">
              Pages
            </Link>
            <Link href="../Pages/About" className="block hover:underline">
              About
            </Link>
          </div>

          {/* Contact and Cart - Mobile */}
          <div className="mt-4 space-y-2">
            <div className="w-40 h-8">Contact: (805) 555-0111</div>
            <Link href="../Pages/Cart">
              <button className="w-full bg-white border rounded-md p-2 flex justify-center items-center space-x-2 shadow-md hover:shadow-lg">
                <div className="w-8 h-8 rounded-full">
                  <img src={CartLogo.src} alt="" />
                </div>
                <span className="text-sm">Cart</span>
              </button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
