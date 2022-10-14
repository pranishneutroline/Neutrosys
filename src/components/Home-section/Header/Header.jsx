import React from "react";
import "./header.css";
function Header() {
  return (
    <section className="header_container">
      <div className="header_center">
        <h1>Let us Transform your business idea into reality.</h1>
        <p>
          We build custom IT solutions and products that accelerate customer’s
          business growth, simplify process and increase revenue.
        </p>
        <div className="header_btn_container">
          <button className="header_btn blue_background">View all jobs</button>
          <button className="header_btn blue_border">request resources</button>
        </div>
      </div>
    </section>
  );
}

export default Header;
