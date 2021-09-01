import React from "react";
import classes from "./Item.module.css";

const Item = ({ title, image, price, description }) => {
  return (
    <div className={"col-4 " + classes.room}>
      <div className="single-items">
        <div className="items-img">
          <img className="image-rooms" src={image} alt="" />
        </div>
        <div className="items-cap">
          <div className="d-flex justify-content-between">
            <h5>
              <a href="#">
                {title}
              </a>
            </h5>
            <span>
              $<span id="precio-jornada-sin-pension">{price}</span>/Noche
            </span>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
