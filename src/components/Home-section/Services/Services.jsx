import React from "react";
import ServiceItemProps from "./ServiceItemProps";
import "./services.css";

function Services() {
  return (
    <section className="services_container">
      <h1>Services</h1>

      <div className="services_items">
        <div className="services_design"></div>
        <ServiceItemProps image="images/mobile_app1.png" />
        <ServiceItemProps image="images/mobile_app2.png" />
        <ServiceItemProps image="images/mobile_app3.svg" />
      </div>
      <p className="services_learnmore">
        {" "}
        <a href="/">
          learn more{" "}
        </a>
      </p>
    </section>
  );
}

export default Services;
