import React, { useEffect } from "react";

const Spinner = () => {
  useEffect(() => {
    /* 1. Proloder */
    $(window).on("load", function () {
      $("#preloader-active").delay(450).fadeOut("slow");
      $("body").delay(450).css({
        overflow: "visible",
      });
    });
  }, []);

  return (
    <div id="preloader-active" style={{ display: "none" }}>
      <div className="preloader d-flex align-items-center justify-content-center">
        <div className="preloader-inner position-relative">
          <div className="preloader-circle"></div>
          <div className="preloader-img pere-text">
            <img
              src="data:image/webp;base64,UklGRnoAAABXRUJQVlA4TG4AAAAvFkAFEEcgECB49L9ig0DSxvP+Pd7yBIIQueT/NggEKPh/ygQeeFKAWsHD+aTyDW82gFFsW20ekLYMff8tEG/fQQbhHQxE9H8CdPUG0IGiXePP+alprUXlS8nWALy7EdFR01qrCjP7GoC4hi53AA=="
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
