import React, { useEffect } from "react";

const Gallery = () => {
  useEffect(() => {
    tns({
      container: ".my-slider-photos",
      autoplay: true,
      autoplayTimeout: 4000,
      swipeAngle: false,
      speed: 600,
      items: 2,
      mouseDrag: true,
      nav: false,
      controls: false,
      autoplayButtonOutput: false,
      responsive: {
        640: {
          edgePadding: 20,
          gutter: 20,
          items: 2,
        },
        700: {
          gutter: 30,
        },
        900: {
          items: 3,
        },
        900: {
          items: 5,
        },
      },
    });
  }, []);

  return (
    <div className="instagram-area fix">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-xl-12">
            <div className="instagram-active">
              <div className="">
                <div className="my-slider-photos">
                  <img className="image-gallery" src="images/carousel/termas-invierno.jpg" alt="" />

                  <img className="image-gallery" src="images/carousel/laguna-verde.jpg" alt="" />

                  <img className="image-gallery" src="images/carousel/termas.jpg" alt="" />

                  <img className="image-gallery" src="images/carousel/termas-2.jpg" alt="" />

                  <img className="image-gallery" src="images/carousel/termas-3.jpg" alt="" />

                  <img className="image-gallery" src="images/carousel/salto-del-agrio.jpg" alt="" />

                  <img className="image-gallery" src="images/carousel/termas-nevadas.jpg" alt="" />

                  <img className="image-gallery" src="images/carousel/copahue-verano.jpg" alt="" />

                  <img className="image-gallery" src="images/carousel/termas-4.jpg" alt="" />

                  <img className="image-gallery" src="images/carousel/salto-del-gigante.jpg" alt="" />

                  <img className="image-gallery" src="images/carousel/termas-cartel.jpg" alt="" />

                  <img className="image-gallery" src="images/carousel/termas-puente.jpg" alt="" />

                  <img className="image-gallery" src="images/carousel/termas-5.jpg" alt="" />

                  <img className="image-gallery" src="images/carousel/termas-nieve.jpg" alt="" />

                  <img className="image-gallery" src="images/carousel/cartel-bienvenida.jpg" alt="" />

                  <img className="image-gallery" src="images/carousel/termas-6.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
