import React from "react";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-area footer-padding">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
              <div className="single-footer-caption mb-50">
                <div className="single-footer-caption mb-30">
                  <div className="footer-logo mb-35">
                    <a href="/">
                      <img
                        src="logo.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="footer-tittle">
                    <div className="footer-pera">
                      <p>
                        Hotel Valle Del Volcán lleva más de 25 años acercandote
                        a las termas de Copahue.
                      </p>
                    </div>

                    <div className="footer-social">
                      <a href="https://twitter.com/valledelvolcan">
                        <i className="fab fa-twitter-square"></i>
                      </a>
                      <a href="https://www.facebook.com/clubhotelvalledelvolcan">
                        <i className="fab fa-facebook-square"></i>
                      </a>
                      <a href="https://api.whatsapp.com/send?phone=5492942669435">
                        <i class="fab fa-whatsapp"></i>
                      </a>
                      <a href="https://ar.pinterest.com/copahueclub">
                        <i className="fab fa-pinterest-square"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>Menu</h4>
                  <ul>
                    <li>
                      <a href="sobrenosotros">
                        Sobre Nosotros
                      </a>
                    </li>
                    <li>
                      <a href="habitaciones">
                        Nuestras Habitaciones
                      </a>
                    </li>
                    <li>
                      <a href="contacto">
                        Reserva
                      </a>
                    </li>
                    <li>
                      <a href="https://preview.colorlib.com/theme/ecoho/index.html#">
                        Blog
                      </a>
                    </li>
                    {/* <!-- <li><a href="https://preview.colorlib.com/theme/ecoho/index.html#">Privacy &amp; Policy</a></li> --> */}
                    <li>
                      <a href="contacto">
                        Contacto
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-8">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle mb-20">
                  <h4>Dirección</h4>
                  <p>Herrero Ducloux 120, Copahue Q8348AGA Argentina</p>
                </div>
                <ul className="mb-20">
                  <li className="number">
                    <a href="https://preview.colorlib.com/theme/ecoho/index.html#">
                      +54 9 2942 66-9435
                    </a>
                  </li>
                  <li className="number2">
                    <a href="https://preview.colorlib.com/theme/ecoho/index.html#">
                      contact@carwash.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-area">
        <div className="container">
          <div className="footer-border">
            <div className="row">
              <div className="col-xl-12 ">
                <div className="footer-copy-right text-center">
                  <p>
                    Copyright ©
                    <script>document.write(new Date().getFullYear());</script>
                    2021 All rights reserved | This template is made with{" "}
                    <i
                      className="fa fa-heart color-danger"
                      aria-hidden="true"
                    ></i>{" "}
                    by{" "}
                    <a
                      href="https://colorlib.com/"
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      Colorlib
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
