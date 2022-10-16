import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./ourPartners.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import OurPartnersDetails from "./OurPartnersDetails";
// import OurPartnersDetail from "./OurPartnersDetail";
function OurPartners() {
  const testiMonials = [
    {
      id: 1,
      name: "Rekob Ramya",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      address: "USA",
      img: "https://i.ibb.co/hgGJc8d/Gareth-Bale.jpg",
    },
    {
      id: 2,
      name: "Brandon Savage",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      address: "USA",
      img: "https://i.ibb.co/z7Kp6yr/np-file-33188.jpg",
    },
    {
      id: 3,
      name: "Steve Burns",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      address: "USA",
      img: "https://i.ibb.co/CP5sj7g/2856040-58866808-2560-1440.jpg",
    },
    {
      id: 4,
      name: "Kevin Canlas",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      address: "USA",
      img: "https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg",
    },
  ];
  //Owl Carousel Settings
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    stagePadding:2,
    autoplay: true,
    dots: true,
    autoplayTimeout: 850000000,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <section id="testimonial" className="testimonials pt-70 pb-70">
      <div className="ourpartners_container">
        <h4 className="text-center partners_heading">Our Partners</h4>
        <div className="row">
          <div className="col-lg-12">
            <OwlCarousel
              id="customer-testimonoals"
              className="owl-carousel owl-theme"
              {...options}
        
            >
              {testiMonials.length === 0 ? (
                <div className="item">
                  <div className="shadow-effect">
                    <img
                      className="img-circle"
                      src="./images/our-clients/user-client.jpg"
                      alt="review of client"
                    />

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna.
                    </p>
                  </div>
                  <div className="testimonial-name">
                    <h5>Rajon Rony</h5>
                    <small>ITALY</small>
                  </div>
                </div>
              ) : (
                testiMonials.map((ourPartnerDetail) => {
                  return (
                    <>
                      <OurPartnersDetails
                        key={ourPartnerDetail.id}
                        ourPartnersDetail={ourPartnerDetail}
                      />
                    </>
                  );
                })
              )}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurPartners;
