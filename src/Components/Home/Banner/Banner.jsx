import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="w-[1024px]">
      <img
        src="https://via.placeholder.com/1024"
        className="w-full rounded-lg object-cover h-[576px]"
        alt=""
      />
      <div className="mt-32 flex items-center">
        <section className="w-5/12 relative flex items-center justify-center">
          <div className="absolute left-32 z-10">
            <FaCheckCircle className="text-[#cc66ff]" size={140} />
          </div>
          <div className="absolute left-52 top-2">
            <FaCheckCircle size={100} className="text-[#80dd00]" />
          </div>
        </section>
        <section className="w-7/12 flex flex-col gap-3">
          <p className="text-justify text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            blanditiis, molestias voluptate natus quod sequi aut, explicabo
            animi porro sapiente saepe consectetur soluta commodi repudiandae
            cum voluptatum recusandae facilis placeat, esse iure. Dolores quam
            officiis rerum deserunt quibusdam molestiae enim ab. Esse ipsam
            quasi debitis facilis, voluptas dolorum excepturi ex. Quod ipsam
            itaque dolorem ab nulla, enim sint recusandae aliquid obcaecati
            velit ratione, odio, natus corporis nesciunt odit aspernatur laborum
            sapiente. Modi ipsa quia temporibus vero
          </p>
          <img
            src="https://via.placeholder.com/644"
            className="w-[644px] rounded-sm object-cover h-[100px]"
            alt=""
          />
        </section>
      </div>
    </div>
  );
};

export default Banner;
