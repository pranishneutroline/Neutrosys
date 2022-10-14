import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";

import "./navbar.css";
import TheNavbarProps from "./TheNavbarProps";
function TheNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="navbar">
      <LinkContainer to="/" >
        <Navbar.Brand href="#home" className="navbar_img">
          <img src="/images/neutrosys.png" alt="" />
        </Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav navbar_list">
        <Nav className="m-auto">
          <TheNavbarProps link="/aboutus" name="About us" />
          <TheNavbarProps link="/services" name="Services" />
          <TheNavbarProps link="/employers" name="Employers" />
          <TheNavbarProps link="/careers" name="Careers" />
          <TheNavbarProps link="/contactus" name="Contact us" />
        </Nav>
        <Nav>
          <Nav.Link href="#login">
            <button className="navbar_button">Login</button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TheNavbar;
