import React from "react";

const SignupInvitation = () => {
  return (
    <div className="bg-black text-white flex items-center justify-between py-12 space-x-4 w-full mx-auto">
      {/* Left Side Circles */}
      <div className="relative w-36 h-40 flex items-center justify-start">
        <div className="absolute left-0 top-10 bg-[#4D8500] rounded-full w-8 h-8 bg-opacity-90 z-10"></div>
        <div className="absolute left-2 top-12 bg-[#65B100] rounded-full w-12 h-12 bg-opacity-90 z-20"></div>
        <div className="absolute left-7 top-14 bg-[#00B4B4] rounded-full w-14 h-14 bg-opacity-90 z-30"></div>
        <div className="absolute left-14 top-6 bg-[#015151] rounded-full w-7 h-7"></div>
      </div>

      {/* Text Section */}
      <div className="flex items-center gap-10">
        <img
          src="https://via.placeholder.com/144"
          className="w-[144px] h-[156px] "
          alt=""
        />
        <div className="flex flex-col gap-5 justify-end">
          <h1 className="flex flex-col gap-2">
            <span>Enhance Your Business Capabilities with</span>
            <span>Testtest.com</span>
          </h1>
          <button className="border border-brightOrange bg-brightOrange text-black rounded-xl px-20 py-3">
            Sign Up Free
          </button>
        </div>
      </div>

      {/* Right Side Circles */}
      <div className="relative w-36 h-40 flex items-center justify-end">
        <div className="absolute right-16 top-10 bg-[#E58623] rounded-full w-14 h-14 bg-opacity-90 z-30"></div>
        <div className="absolute right-9 top-[60px] bg-[#A352CC] rounded-full w-12 h-12 bg-opacity-90 z-20"></div>
        <div className="absolute right-6 top-[82px] bg-[#995A18] rounded-full w-8 h-8 bg-opacity-90 z-10"></div>
        <div className="absolute right-24 top-28 bg-[#522967] rounded-full w-7 h-7"></div>
      </div>
    </div>
  );
};

export default SignupInvitation;
