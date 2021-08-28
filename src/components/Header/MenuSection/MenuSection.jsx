import React from "react";


const MenuSection = () => {
 

  return (
    <div className="col-xl-6 col-lg-6 col-md-8">
      <div className="main-menu f-right d-none d-lg-block">
        <nav>
          <ul id="navigation">
            <li>
              <a href="/">
                Home
              </a>
            </li>
            <li>
              <a href="habitaciones">
                Habitaciones
              </a>
            </li>
            <li>
              <a href="sobrenosotros">
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="https://preview.colorlib.com/theme/ecoho/blog.html">
                Blog
              </a>
              <ul className="submenu">
                <li>
                  <a href="https://preview.colorlib.com/theme/ecoho/blog.html">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="https://preview.colorlib.com/theme/ecoho/blog_details.html">
                    Blog Details
                  </a>
                </li>
                <li>
                  <a href="https://preview.colorlib.com/theme/ecoho/elements.html">
                    Elements
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="contacto">Contacto</a>
            </li>
            <li>
              <div className="header-right-btn f-right  ml-30">
                <a
                  href="https://preview.colorlib.com/theme/ecoho/index.html#"
                  className="header-btn"
                >
                  Reserva
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MenuSection;
