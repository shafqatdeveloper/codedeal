import React from "react";
import { FaRegFontAwesomeLogoFull } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky w-full flex items-center justify-center top-0 z-50">
      <div className="w-[1024px] flex flex-col p-2 bg-black shadow-xl shadow-white/30 rounded-b-xl">
        {/* Logo and App Invitation Section */}
        <div className="flex justify-center relative w-full">
          <Link
            to={"/"}
            className="self-center w-[440px] h-[100px] bg-gray-500 px-2 rounded-md"
          >
            <FaRegFontAwesomeLogoFull className="w-full h-full" />
          </Link>
          <div className="absolute right-4 top-0 flex flex-col gap-1">
            {/* Get on App Store */}
            <div className="flex items-center gap-1 border rounded-lg border-gray-700 pl-2 pr-3.5 pb-0.5 pt-1">
              <IoLogoApple size={32} />
              <p className="flex flex-col leading-3">
                <span
                  style={{ lineHeight: "0.75", fontSize: "0.6rem" }}
                  className=""
                >
                  Download on the
                </span>
                <span className="text-lg">App Store</span>
              </p>
            </div>
            {/* Get on Google Play */}
            <div className="flex items-center gap-1 border rounded-lg border-gray-700 pl-2 pr-3.5 pb-0.5 pt-1">
              <IoLogoGooglePlaystore size={27} />
              <p className="flex flex-col leading-3">
                <span
                  style={{ lineHeight: "0.75", fontSize: "0.6rem" }}
                  className=""
                >
                  GET IT ON
                </span>
                <span className="text-lg">Google Play</span>
              </p>
            </div>
          </div>
        </div>
        {/* Navigation Menu */}
        <nav className="mt-10 mb-2">
          <ul className="flex justify-around">
            <Link
              to={"/how-it-works"}
              className="relative group inline-block px-10 py-2"
            >
              <span className="text-gray-500 group-hover:text-gray-300">
                How It Works
              </span>

              {/* Left and Right Rounded Borders on Hover */}
              <span className="absolute left-0 top-0 h-3/4 w-1/2 border-l-[0.5px] border-t border-gray-700 rounded-tl-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"></span>
              <span className="absolute right-0 top-0 h-3/4 w-1/2 border-r-[0.5px] border-t border-gray-700 rounded-tr-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"></span>
            </Link>
            <Link
              to={"/how-it-works"}
              className="relative group inline-block px-10 py-2"
            >
              <span className="text-gray-500 group-hover:text-gray-300">
                Features
              </span>

              {/* Left and Right Rounded Borders on Hover */}
              <span className="absolute left-0 top-0 h-3/4 w-1/2 border-l-[0.5px] border-t border-gray-700 rounded-tl-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"></span>
              <span className="absolute right-0 top-0 h-3/4 w-1/2 border-r-[0.5px] border-t border-gray-700 rounded-tr-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"></span>
            </Link>
            <Link
              to={"/pricing"}
              className="relative group inline-block px-10 py-2"
            >
              <span className="text-gray-500 group-hover:text-gray-300">
                Pricing
              </span>

              {/* Left and Right Rounded Borders on Hover */}
              <span className="absolute left-0 top-0 h-3/4 w-1/2 border-l-[0.5px] border-t border-gray-700 rounded-tl-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"></span>
              <span className="absolute right-0 top-0 h-3/4 w-1/2 border-r-[0.5px] border-t border-gray-700 rounded-tr-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"></span>
            </Link>
            <Link
              to={"/certification"}
              className="relative group inline-block px-10 py-2"
            >
              <span className="text-gray-500 group-hover:text-gray-300">
                Certification
              </span>

              {/* Left and Right Rounded Borders on Hover */}
              <span className="absolute left-0 top-0 h-3/4 w-1/2 border-l-[0.5px] border-t border-gray-700 rounded-tl-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"></span>
              <span className="absolute right-0 top-0 h-3/4 w-1/2 border-r-[0.5px] border-t border-gray-700 rounded-tr-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"></span>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
