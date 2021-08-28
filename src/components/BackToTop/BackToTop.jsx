import React, { useEffect } from "react";

const BackToTop = () => {
  useEffect(() => {
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll < 400) {
        $(".header-sticky").removeClass("sticky-bar");
        $("#back-top").fadeOut(500);
      } else {
        $(".header-sticky").addClass("sticky-bar");
        $("#back-top").fadeIn(500);
      }
    });

    // Scroll Up
    $("#back-top a").on("click", function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        800
      );
      return false;
    });
  }, []);

  return (
    <div id="back-top" style={{ display: "none" }}>
      <a title="Go to Top" href="#">
        <i className="fas fa-level-up-alt"></i>
      </a>
    </div>
  );
};

export default BackToTop;
