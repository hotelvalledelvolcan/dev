import React from "react";
import AboutUs from "../components/About/AboutUs";
import Rooms from "../components/Rooms/Rooms";
import BlogSectionMiniature from "../components/Blog/BlogSectionMiniature";
import Testimonials from "../components/Testimonials/Testimonials";
import Gallery from "../components/Gallery/Gallery";
import VideoPreview from "../components/VIdeoPreview/VideoPreview";
import CoverSubPage from "../components/Cover/CoverSubPage";
import { useRouteData } from 'react-static'

const AboutUsPage = () => {
  const  {posts, prices}  = useRouteData()

  return (
    <main>
      <CoverSubPage
        title="El Hotel"
        description={[
          "Hotel Valle Del Volcán lleva más de 25 años acercandote ",
          <br />,
          " a las termas de Copahue",
        ]}
        image="/images/centro-termal-portada.jpg"
      />
      <AboutUs
        text1="Hotel valle del volcán es un establecimiento tres estrellas atendido por sus dueños, con un trato personalizado y cuidado hacia todos nuestros clientes."
        text2="Garantizar una relación precio-calidad excelente."
        text3="Contamos con menú fijo y dietas especiales a pedido de nuestros clientes, todas nuestras comidas se realizan de forma casera y sana para acompañar de manera acorde el tratamiento termal."
      />
      <Rooms prices={prices}/>
      <VideoPreview />
      <BlogSectionMiniature posts={posts}/>
      <Testimonials />
      <Gallery />
    </main>
  );
};

export default AboutUsPage;
