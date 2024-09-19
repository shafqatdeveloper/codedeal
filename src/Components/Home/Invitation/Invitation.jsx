import React from "react";

const Invitation = () => {
  return (
    <div className="w-[1024px]">
      <div className="flex w-full items-center justify-between">
        {/* Left Side */}
        <section className="w-7/12 flex flex-col gap-10">
          <div className="font-bold">
            <h1 className="text-5xl tracking-wider">Invite Your Provider to</h1>
            <h1 className="text-4xl pt-2 tracking-wider text-brightOrange">
              <span className="text-brightCyan tracking-widest">CODE</span>
              <span className="text-brightOrange tracking-widest">
                DEAL
              </span>{" "}
              and Earn $100
            </h1>
          </div>
          <p className="text-justify text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            ipsa corporis asperiores possimus eveniet minima laudantium eaque
            vel libero magni quis harum deleniti quisquam esse aspernatur ipsum
            aperiam corrupti nam sapiente nobis repudiandae eius doloribus, quam
            impedit? Voluptate quia aut molestiae nulla reiciendis commodi
            recusandae excepturi nemo? Amet, ducimus explicabo.
          </p>
          <button className="border border-brightCyan bg-brightCyan text-black w-3/5 rounded-lg py-4">
            Invite Now
          </button>
        </section>
        {/* Right Side */}
        <section>
          <img
            src="https://via.placeholder.com/360"
            alt=""
            className="w-[360px] h-[360px] rounded-full"
          />
        </section>
      </div>
    </div>
  );
};

export default Invitation;
