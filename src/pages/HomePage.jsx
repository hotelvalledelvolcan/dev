import React from "react";
import Cover from "../components/Cover/Cover";
import AboutUs from "../components/About/AboutUs";
import Rooms from "../components/Rooms/Rooms";
import BlogSectionMiniature from "../components/Blog/Miniature/BlogSectionMiniature";
import Testimonials from "../components/Testimonials/Testimonials";
import Gallery from "../components/Gallery/Gallery";
import VideoPreview from "../components/VIdeoPreview/VideoPreview";


const HomePage = () => {
  return (
    <main>
      <Cover />
      <AboutUs
        text1="Las termas de Copahue son las únicas termas en el mundo que reunen una innumerable cantidad de recursos minerales naturales."
        text2="Cercanía y comodidad para disfrutar Copahue"
        text3="Junto al volcán copahue hacen una combinación perfecta para que Copahue sea un paraíso termal."
      />
      <Rooms />
      <VideoPreview />
      <BlogSectionMiniature />
      <Testimonials />
      <Gallery />
    </main>
  );
};

export default HomePage;
