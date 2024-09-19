import React from "react";
import Slider from "../../Components/Home/Slider/Slider";
import Welcome from "../../Components/Home/Welcome/Welcome";
import Invitation from "../../Components/Home/Invitation/Invitation";
import Banner from "../../Components/Home/Banner/Banner";
import SignupInvitation from "../../Components/Home/SignupInvitation/SignupInvitation";

const Home = () => {
  return (
    <div className="h-full w-full mt-10 flex flex-col gap-32 pb-20">
      {/* Carousel */}
      <div className="w-full flex items-center justify-center">
        <Slider />
      </div>
      {/* Welcome Section */}
      <div className="w-full flex items-center justify-center">
        <Welcome />
      </div>
      {/* Invitation Section */}
      <div className="w-full flex items-center justify-center">
        <Invitation />
      </div>
      {/* Banner Section */}
      <div className="w-full flex items-center justify-center">
        <Banner />
      </div>
      {/* How it Works Section */}
      <div className="w-full flex items-center justify-center">
        <h1>How it Works</h1>
      </div>
      {/* Signup Invitation */}
      <div className="w-full flex items-center justify-center">
        <div className="w-[1024px]">
          <SignupInvitation />
        </div>
      </div>
    </div>
  );
};

export default Home;
