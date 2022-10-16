import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { logo } from "./our-clients";
import "./ourClients.css";
function OurClients() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    accessibility: true,
    initialSlide: 0,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 200000000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    
    <div className="ourClients_container py-3">
      <h1 className="text-center py-3">Our Clients</h1>
      <Slider {...settings} className="d-flex flex-column">
        {" "}
        {logo.map((item) => (
          <div className="company-logo d-flex flex-column justify-content-center align-items-center" key={item.id}>
            <div className="clients_logo">
            <img src={item.image} alt="company-logo" />
            </div>
            <p>{item.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default OurClients;
