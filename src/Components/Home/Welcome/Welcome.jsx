import React from "react";
import SignupInvitation from "../SignupInvitation/SignupInvitation";

const Welcome = () => {
  return (
    <div className="w-[1024px] flex flex-col gap-16">
      <div>
        <h1 className="text-center text-brightCyan text-6xl font-mono tracking-wide">
          WELCOME TO CODEDEAL HUB
        </h1>
        <p className="text-center text-brightCyan pt-2 text-2xl">
          TESTTEST.com - THE ULTIMATE PROVIDER SOLUTION
        </p>
      </div>
      <div className="flex items-center gap-10">
        <img
          src="https://via.placeholder.com/360"
          alt=""
          className="w-[360px] h-[300px] rounded-xl"
        />
        <div className="flex flex-col justify-between h-[300px]">
          <p className="text-justify text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            error sint? Temporibus laboriosam omnis, quae odit praesentium
            fugiat blanditiis earum aperiam dolores modi deleniti dolore autem,
            ea iusto! Enim, amet corrupti. Labore est iure tempora molestiae
            deserunt, voluptatem et ex fugit unde amet harum qui nihil vero
            quia, hic accusantium, at omnis quasi nulla sint? Expedita aut
            corporis molestiae ipsam!
          </p>
          <p className="text-justify text-gray-300">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium dignissimos error cum ea eum magnam repellendus ex
            minus. Excepturi tenetur, minus minima porro impedit iure adipisci
            atque consequuntur sequi, autem rerum eligendi repudiandae suscipit
            dolor error laboriosam rem ipsam quo culpa eius vero? Id ex ipsa hic
            modi explicabo nobis nam, doloremque quos iste nisi placeat natus,
            rerum quam, deserunt labore cupiditate repellat quia. Quis.
          </p>
        </div>
      </div>
      <SignupInvitation />
    </div>
  );
};

export default Welcome;
