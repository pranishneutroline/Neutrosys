import React from "react";
import "./navbar.css";
function Navbar() {
  return (
    <section className="flex_direction_row navbar">
      <div>
        {/* <img src="" alt="" /> */}
        <p>logo</p>
      </div>
      <div>
        <ul className="flex_direction_row navbar_list">
          <li>
            {" "}
            <a href="/"> About us </a>
          </li>
          <li>
            {" "}
            <a href="/"> Services</a>
          </li>
          <li>
            {" "}
            <a href="/">Employers</a>{" "}
          </li>
          <li>
            {" "}
            <a href="/"> Careers</a>
          </li>
          <li>
            {" "}
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </div>
      <button className="navbar_button">Login</button>
    </section>
  );
}

export default Navbar;
