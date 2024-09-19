import React from "react";

const TopBar = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-end py-6 pr-5 gap-7">
        <select
          name="language"
          id="language"
          className="border-none text-gray-400 text-sm outline-none focus:outline-none bg-transparent"
        >
          <option value="eng">EN</option>
        </select>
        <div className="flex items-center gap-3">
          <button className="border border-brightCyan text-lg text-brightCyan rounded-xl px-3 py-1">
            Log In
          </button>
          <button className="border border-brightOrange bg-brightOrange text-lg text-black rounded-xl px-3 py-1">
            Sign Up Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
