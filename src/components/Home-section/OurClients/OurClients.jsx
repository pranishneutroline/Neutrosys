import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { logo } from "./our-clients";
import "./ourClients.css"
function OurClients() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    // slidesToScroll:2,
    accessibility:true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [{
      breakpoint: 768,
      setting: {
          slidesToShow:4
      }
  }, {
      breakpoint: 520,
      setting: {
          slidesToShow: 3
      }
  }]

  };
  return (
    <div className="ourClients_container">
      <Slider {...settings}>
        {" "}
        {logo.map((item) => (
          <div className="company-logo" key={item.id}>
            <img src={item.image} alt="company logo" width="10"/>
            <h3>{item.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default OurClients;
