import React, { useEffect } from "react";
import Item from "./Item";

const Testimonials = () => {
  
  useEffect(() => {
    tns({
      container: ".my-slider-clients",
      autoplay: false,
      autoplayTimeout: 2000,
      swipeAngle: false,
      speed: 200,
      items: 2,
      mouseDrag: true,
      nav: false,
      autoplayButtonOutput: false,
      prevButton: "#prevbutton",
      nextButton: "#nextbutton",
      responsive: {
        640: {
          edgePadding: 20,
          gutter: 20,
          items: 2,
        },
        700: {
          gutter: 30,
        },
      },
    });
  }, []);

  return (
    <section className="client-say">
      <div className="container">
        <div className="my-slider-clients">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>

        <div className="d-flex justify-content-between">
          <i id="prevbutton" className="fas fa-arrow-left"></i>
          <i id="nextbutton" className="fas fa-arrow-right"></i>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
