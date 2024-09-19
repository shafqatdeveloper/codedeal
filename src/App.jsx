import React from "react";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import TopBar from "./Components/Header/Topbar";

const App = () => {
  return (
    <div className="bg-[#000000] text-white">
      <TopBar />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
