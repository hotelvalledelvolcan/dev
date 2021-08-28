import React from "react";
import AboutUs from "../components/About/AboutUs";
import Rooms from "../components/Rooms/Rooms";
import BlogSectionMiniature from "../components/Blog/Miniature/BlogSectionMiniature";
import Testimonials from "../components/Testimonials/Testimonials";
import Gallery from "../components/Gallery/Gallery";
import VideoPreview from "../components/VIdeoPreview/VideoPreview";
import CoverSubPage from "../components/Cover/CoverSubPage";
import Services from "../components/Services/Services";

const RoomsPage = () => {
  return (
    <main>
      <CoverSubPage
        title="Habitaciones"
        description={[
          "Hotel Valle Del Volcán posee 40 habitaciones ",
          <br />,
          " con baño privado ",
        ]}
        image="images/centro-termal-portada.jpg"
      />
      <Services/>

      <Rooms />
      <Testimonials />
      <Gallery />
    </main>
  );
};

export default RoomsPage;
