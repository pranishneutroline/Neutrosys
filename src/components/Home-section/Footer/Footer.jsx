import React from "react";
import "./footer.css";
function Footer() {
  return (
    <section className="footer">
      <div className="footer_logo">logo</div>
      <div>
        <p>Get in touch</p>
        <p>info@neutrosys.com</p>
        <p>+1 (214) 321-543</p>
        <p>1431 Greenway Dr 8th floor, Irving,</p>
        <p>TX 75038, United States</p>
      </div>
      <div className="footer_links">
        <p>
          <a href="/">Company</a>
        </p>
        <p>
          {" "}
          <a href="/">About Us</a>
        </p>
        <p>
          <a href="/">Services</a>
        </p>
        <p>
          <a href="/">Our Clients</a>
        </p>
        <p>
          <a href="/">Careers</a>
        </p>
        <p>
          <a href="/">Contact Us</a>
        </p>
      </div>
      <div>
        <p>social media</p>
      </div>
    </section>
  );
}

export default Footer;
