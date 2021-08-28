import React from "react";
import classes from "./Services.module.css";

const Services = () => {
  return (
    <section className="popular-item-area fix">
      <div className="container p-0">
        <div className="d-flex justify-content-between">
          <div>
            <i
              className={`fas fa-utensils a-3x fa-pull-left fa-border ${classes.icons}`}
              aria-hidden="true"
            ></i>

            <div className={classes.titleService}>Restaurant</div>
          </div>

          <div>
            <i
              className={`fas fa-tv a-3x fa-pull-left fa-border ${classes.icons}`}
              aria-hidden="true"
            ></i>

            <div className={classes.titleService}>
              Televisión satelital en cada habitación
            </div>
          </div>

          <div>
            <i
              className={`fas fa-burn a-3x fa-pull-left fa-border ${classes.icons}`}
              aria-hidden="true"
            ></i>

            <div className={classes.titleService}>Calefacción central</div>
            <div className={classes.titleService}>Servicio de lavandería</div>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <i
              className={`fas fa-couch a-3x fa-pull-left fa-border ${classes.icons}`}
              aria-hidden="true"
            ></i>

            <div className={classes.titleService}>Sala de usos múltiples</div>
            <div className={classes.titleService}>Servicio de caja fuerte</div>
          </div>

          <div>
            <i
              className={`fas fa-cookie a-3x fa-pull-left fa-border ${classes.icons}`}
              aria-hidden="true"
            ></i>

            <div className={classes.titleService}>Confitería</div>
            <div className={classes.titleService}>WI-FI</div>
          </div>

          <div>
            <i
              className={`fas fa-gem a-3x fa-pull-left fa-border ${classes.icons}`}
              aria-hidden="true"
            ></i>

            <div className={classes.titleService}>Servicio de caja fuerte</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
