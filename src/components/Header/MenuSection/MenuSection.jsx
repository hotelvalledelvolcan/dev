import React from "react";
import { Link } from '@reach/router'


const MenuSection = () => {
 

  return (
    <div className="col-xl-6 col-lg-6 col-md-8">
      <div className="main-menu f-right d-none d-lg-block">
        <nav>
          <ul id="navigation">
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/habitaciones">
                Habitaciones
              </Link>
            </li>
            <li>
              <Link to="/sobrenosotros">
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
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
