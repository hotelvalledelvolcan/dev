import React from "react";
import clasess from "./CoverPage.module.css"


const CoverPage = () => {
  return (
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7 col-md-8 col-sm-10  position-sticky">
            <div className="hero-caption">
              <h1
                data-animation="fadeInLeft"
                data-delay=".4s"
                className={clasess.animation4}
              >
                Visita las Termas de Copahue
              </h1>
              <p
                data-animation="fadeInLeft"
                data-delay=".6s"
                className={clasess.animation6}
              >
                Hotel Valle Del Volcán lleva más de 25 <br />
                años acercándote a las termas de Copahue
              </p>

              <a
                href="#"
                className={"btn hero-btn " + clasess.animation9}
                data-animation="fadeInLeft"
                data-delay=".9s"
                tabIndex="0"
              >
                Ver Más
              </a>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CoverPage;
