import React from "react";
import "./footer.css";
function Footer() {
  return (
    <section className="footer">
      <div className="footer_logo">
        <img src="/images/neutrosys.png" alt="" />
      </div>
      <div className="footer_getintouch">
        <h6>Get in touch</h6>
        <p>info@neutrosys.com</p>
        <p>+1 (214) 321-543</p>
        <p>1431 Greenway Dr 8th floor, Irving,</p>
        <p>TX 75038, United States</p>
      </div>
      <div className="footer_links">
        <h6>Some links</h6>
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
      <div className="footer_socials">
        <h6>social media</h6>
        <div className="social">
          <div style={{width:"40px", height:"40px", margin:"0 .2rem"}} >
          <img src="/images/footer-social-links/facebook1.png" alt="" width="50"/>
          </div>
          <div style={{width:"40px", height:"40px",  margin:"0 .2rem"}}>
          <img src="/images/footer-social-links/whatsApp.png" alt="" />
          </div>
          <div style={{width:"40px", height:"40px",  margin:"0 .2rem"}}>
          <img src="/images/footer-social-links/linkedin.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
