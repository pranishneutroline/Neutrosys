import React from "react";
import ServiceItemProps from "./ServiceItemProps";
import "./services.css";

function Services() {
  return (
    <section className="services_container">
      <h1>Services</h1>

      <div className="services_items">
        <div className="services_design"></div>
        <ServiceItemProps
          image="images/services/mobile_app1.png"
          desc=" Developing and maintaining smooth cross platform mobile application and
        providing end to end testing."
          name="Talent Solution"
        />
        <ServiceItemProps
          image="images/services/mobile_app2.png"
          desc=" Developing and maintaining smooth cross platform mobile application and
        providing end to end testing."
          name="Software Development"
        />
        <ServiceItemProps
          image="images/services/mobile_app3.svg"
          desc=" Developing and maintaining smooth cross platform mobile application and
        providing end to end testing."
          name="Outsourcing"
        />
      </div>
      <p className="services_learnmore">
        {" "}
        <a href="/">learn more <img src="/images/arrow.png" alt=""/> </a>
      </p>
    </section>
  );
}

export default Services;
