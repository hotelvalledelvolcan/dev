import React from "react";
import ArticleMiniature from "./ArticleMiniature";

const BlogSectionMiniature = () => {
  return (
    <section className="home-blog section-padding40 fix">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-4">
            <div className="section-tittle text-center mb-60">
              <h2>Nuestro Blog</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <ArticleMiniature
            title="Termas de Copahue seguras y
                    responsables"
            image="images/blog/barro.jpg"
            description="La temporada termal comenzó en diciembre, con una apertura diferente y con cambios debido a la
                    pandemia"
          />

          <ArticleMiniature
            title="Copahue, un destino de energía en un
            paraíso volcánico"
            image="images/blog/barro2.jpg"
            description="Uno de los centros termales más importantes del mundo readecuó sus protocolos e instalaciones para
            una estadía segura en el medio de la pandemia por coronavirus."
          />

          <ArticleMiniature
            title="La historia de las termas de
            Copahue"
            image="images/blog/termas.jpg"
            description="Copahue en mapuche significa “lugar de azufre” y fueron los indios Pehuenches quienes descubrieron
            que las emanaciones del suelo tenían propiedades curativas. "
          />
        </div>
      </div>
    </section>
  );
};

export default BlogSectionMiniature;
