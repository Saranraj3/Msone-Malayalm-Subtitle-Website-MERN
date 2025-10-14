import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slider1 from "../Assets/Banner/future_release_creature_commandos.jpg";
import slider2 from "../Assets/Banner/future_release_alice_in_borderland.jpg";
import slider3 from "../Assets/Banner/Future_release_lost_bus.jpg";
import slider4 from "../Assets/Banner/Future_release_man_from_earth.jpg";
import slider5 from "../Assets/Banner/future_release_manda_murders.jpg";
import slider6 from "../Assets/Banner/Future_release_one_hundred_years_com.jpg";

const BannerSlider = () => {
  let settings = {
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <Slider className="h-screen m-[3.4rem] mt-0" {...settings}>
      <div>
        <img src={slider1} alt="" />
      </div>
      <div>
        <img src={slider2} alt="" />
      </div>
      <div>
        <img src={slider3} alt="" />
      </div>
      <div>
        <img src={slider4} alt="" />
      </div>
      <div>
        <img src={slider5} alt="" />
      </div>
      <div>
        <img src={slider6} alt="" />
      </div>
    </Slider>
  );
};

export default BannerSlider;
