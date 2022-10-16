import React from "react";
import Particles from "react-tsparticles";
import AboutAnimConfig from "./AboutAnimConfig";
// import hometop from "../../../assets/hometop.svg";
// import bluebackground from "../../../assets/blue.jpg";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
const AboutFirstContainer = styled.div`
  .particle-animation {
    height: 45vh;
    background-color: #161d6f;
  }

  .about-top-image {
    position: absolute;
    top: 26%;
    width: 100%;
    margin: 0px;
    padding: 0px;
    text-align: center;
    vertical-align: middle;
  }

  .aboutbackgroundimage {
    position: absolute;
    left: 35%;
    top: 3%;
    height: 100%;
    width: 30%;
    /* background-image: url(/images/bluebackground.jpg); */
    filter: blur(29px);
    -webkit-filter: blur(39px);
    opacity: 0.4;
  }

  .imag {
    height: 50%;
    width: 10%;
    z-index: 2;
    position: relative;
  }

  .about-text {
    color: rgb(255, 255, 255);
    z-index: 2;
    position: relative;
    font-size: 3em;
    font-weight: 700;
  }
  @media (max-width: 750px) {
    height: 20vh;

    .aboutbackgroundimage {
      filter: blur(19px);
      -webkit-filter: blur(19px);
      width: 95%;
      left: 0%;
      margin: 0px;
      padding: 0px;
      display: block;
      align-items: center;
    }
    .particle-animation {
      height: 20vh;
    }
    .about-top-image {
      top: 15%;
    }
  } ;
`;
const AboutAnimBackground = () => {
  return (
    <AboutFirstContainer>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <div className="about-top">
          <Particles
            params={AboutAnimConfig}
            className="particle-animation"
          ></Particles>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className="about-top-image"
          >
            {/* <img
            src={bluebackground}
            alt="blue"
            className="aboutbackgroundimage"
          ></img> */}
            {/* <img
            src="/images/bluebackground.jpg"
            alt="blue"
            className="aboutbackgroundimage"
          ></img> */}
            <div className="about-text">ABOUT US</div>
          </Grid>
        </div>
      </Grid>
    </AboutFirstContainer>
  );
};

export default AboutAnimBackground;
