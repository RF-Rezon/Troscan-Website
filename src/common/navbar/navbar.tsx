"use client";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="lg:w-[52%] w-[90%] base-white-bg shadow-md fixed top-5 left-1/2 transform -translate-x-1/2 z-50 rounded-[5px] lg:corner-round">
      <div className="flex justify-between items-center h-[50px] md:h-[56px] lg:pl-5 pl-4 pr-[5px]">
        <div className="t-logo base-gold-text cursor-pointer">Troscán</div>
        <ul className="hidden lg:flex space-x-8 text-white">
          <li className="t-nav-links base-gold-text">About</li>
          <li className="t-nav-links base-gold-text">Projects</li>
          <li className="t-nav-links base-gold-text">News</li>
        </ul>
        <div className="hidden lg:block">
          <button className="btn t-2 base-gold-bg base-white-text transition-all duration-300">
            Contact us
          </button>
        </div>
        <button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-9 relative base-gold-bg rounded-[5px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-3 h-[1px] bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-[4px]" : ""
            }`}
          ></span>
          <span
            className={`block w-3 h-[1px] bg-white mt-1 transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[1px]" : ""
            }`}
          ></span>
        </button>
      </div>
      <div
        className={`lg:hidden base-white-bg shadow-md transition-all duration-300 overflow-hidden rounded-[5px] ${
          isOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4 pb-8">
          <li className="t-nav-links base-gold-text">About</li>
          <li className="t-nav-links base-gold-text">Projects</li>
          <li className="t-nav-links base-gold-text">News</li>
          <div>
            <button className="btn-2 t-2 base-gold-bg base-white-text">
              Contact us
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
