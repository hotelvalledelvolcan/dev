import React from "react";

const CoverPage = () => {
  return (
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7 col-md-8 col-sm-10  position-sticky">
            <div className="hero-caption">
              <h1
                data-animation="fadeInLeft"
                data-delay=".4s"
                className=""
                style={{ animationDelay: "0.4s" }}
              >
                Visita las Termas de Copahue
              </h1>
              <p
                data-animation="fadeInLeft"
                data-delay=".6s"
                className=""
                style={{ animationDelay: "0.6s" }}
              >
                Hotel Valle Del Volcán lleva más de 25 <br />
                años acercandote a las termas de Copahue
              </p>

              <a
                href="https://preview.colorlib.com/theme/ecoho/index.html#"
                className="btn hero-btn"
                data-animation="fadeInLeft"
                data-delay=".9s"
                tabIndex="0"
                style={{ animationDelay: "0.9s" }}
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
