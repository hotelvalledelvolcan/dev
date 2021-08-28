import React, { useEffect } from "react";
import CoverImage from "./CoverImage";
import CoverPage from "./CoverPage";
import { mainSlider } from "./coverAnimations";

const Cover = () => {

useEffect(() =>  {
  mainSlider();
}, [])

  return (
    <div className="slider-area">
      <div className="slider-active slick-initialized slick-slider">
        <div className="slick-list draggable">
          <div className="slick-track" style={{ opacity: 1, width: "1903px" }}>
            <div
              className="single-slider slider-height d-flex align-items-center position-relative slick-slide slick-current slick-active"
              style={{
                width: "1903px",
                position: "relative",
                left: "0px",
                top: "0px",
                zIndex: "999",
                opacity: "1",
              }}
              tabIndex="0"
              data-slick-index="0"
              aria-hidden="false"
            >
              <CoverPage />
              <CoverImage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
