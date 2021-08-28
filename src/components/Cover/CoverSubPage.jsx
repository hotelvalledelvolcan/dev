import React, { useEffect } from "react";
import { mainSlider } from "./coverAnimations";

const CoverSubPage = ({ title, description, image }) => {
  useEffect(() => {
    mainSlider();
  }, []);

  return (
    <div className="slider-area">
      <div className="slider-active">
        <div className="single-slider slider-height2 d-flex align-items-center position-relative">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-7 col-md-8 col-sm-10  position-sticky">
                <div className="hero-caption">
                  <h1 data-animation="fadeInLeft" data-delay=".4s">
                    {title}
                  </h1>
                  <p data-animation="fadeInLeft" data-delay=".6s">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-img hero-img2">
            <img
              src={image}
              alt=""
              data-animation="fadeInRight"
              data-transition-duration="5s"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverSubPage;
