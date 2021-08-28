import React, { useEffect } from "react";

const VideoPreview = () => {
  useEffect(() => {
    $(".popup-video").magnificPopup({
      type: "iframe",
      closeOnContentClick: true,
    });
  }, []);

  return (
    <div className="video-area">
      <div className="container">
        <div
          className="video-wrap video-height-bg section-bg2 position-relative"
          data-background="https://www.neuqueninforma.gob.ar/wp-content/uploads/2018/11/Web...El-complejo-termal-de-Copahue-abre-sus-puertas-_2015_efraindavila.com-70.jpg"
          style={{
            backgroundImage:
              "url(https://www.neuqueninforma.gob.ar/wp-content/uploads/2018/11/Web...El-complejo-termal-de-Copahue-abre-sus-puertas-_2015_efraindavila.com-70.jpg)",
          }}
        >
          <div className="video-icon">
            <a
              className="popup-video btn-icon"
              href="https://www.youtube.com/watch?v=QUOV5ktvtY0"
            >
              <img src="images/play-button.svg" alt="" />
            </a>
            <h5>Video Copahue</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPreview;
