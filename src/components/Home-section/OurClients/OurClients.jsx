import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { logo } from "./our-clients";
function OurClients() {
  
  return (
    <div>
      <Slider >
        {" "}
        {logo.map((item) => (
          <div className="company-logo">
            <img src={item.image} alt="company logo" />
            <h1>{item.name}</h1>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default OurClients;
