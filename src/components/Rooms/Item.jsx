import React from "react";

const Item = ({title, image,price, description}) => {
  return (
    <>
      <div className="col-4" style={{width: "468.25px", marginRight: "10px"}}>
        <div className="single-items">
          <div className="items-img">
            <img
              className="image-rooms"
               src={image}
              alt=""
            />
          </div>
          <div className="items-cap">
            <div className="d-flex justify-content-between">
              <h5>
                <a href="https://preview.colorlib.com/theme/ecoho/index.html#">
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
    </>
  );
};

export default Item;
