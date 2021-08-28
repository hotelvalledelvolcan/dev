import React from "react";
import Item from "./Item";

const Rooms = () => {
  return (
      <section className="popular-item-area fix">
        <div className="container-fluid p-0">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4">
              <div className="section-tittle text-center mb-60">
                <h2>Nuestros Precios</h2>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="row">
              <Item
                title="Jornada sin pensión"
                image="images/rooms/habitacion.jpg"
                price="450"
                description="Alojamiento con unicamente desayuno y merienda"
              />

              <Item
                title="Jornada con pesión completa"
                image="images/rooms/comedor.jpg"
                price="450"
                description="Alojamiento con las 4 comidas!"
              />

              <Item
                title="Jornada con media pensión"
                image="images/rooms/sala.jpg"
                price="450"
                description="Alojamiento con almuerzo o cena."
              />
            </div>
          </div>
        </div>
      </section>
  );
};

export default Rooms;
