import React from "react";
import Navbar from "../../Components/Navbar";
import BannerSlider from "../../Components/BannerSlider";
import home from "../../Assets/Background/Home.jpg";

const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col relative"
      style={{ backgroundImage: `url(${home})` }}
    >
      <Navbar />
      <BannerSlider />
    </div>
  );
};

export default Home;
