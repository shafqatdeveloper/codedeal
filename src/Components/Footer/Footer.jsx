import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImYoutube2 } from "react-icons/im";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center py-20">
      <div className="flex flex-col gap-3 items-center justify-center">
        <div className="flex items-center gap-5 text-gray-200">
          <Link to={"https://twitter.com"} target="_blank">
            <FaXTwitter size={35} />
          </Link>
          <Link
            to={"https://youtube.com"}
            target="_blank"
            className="flex items-center gap-1"
          >
            <FaYoutube size={35} />
            <ImYoutube2 size={60} />
          </Link>
        </div>
        <section className="flex items-center gap-2.5 text-gray-500 tracking-wide">
          <Link to={"/about"}>About</Link>
          <div className="w-[2px] h-4 bg-gray-500"></div>
          <Link to={"/contact"}>Contact</Link>
          <div className="w-[2px] h-4 bg-gray-500"></div>
          <Link to={"/disclaimer"}>Disclaimer</Link>
          <div className="w-[2px] h-4 bg-gray-500"></div>
          <Link to={"/terms"}>Terms</Link>
          <div className="w-[2px] h-4 bg-gray-500"></div>
          <Link to={"/privacy-policy"}>Privacy Policy</Link>
        </section>
        <h1>
          <span className="text-xs text-gray-500">&copy; 2024 Code Inc.</span>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
