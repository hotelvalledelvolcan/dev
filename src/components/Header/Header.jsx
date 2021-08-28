import React from "react";
import InfoSection from "./InfoSection/InfoSection";
import Logo from "./InfoSection/Logo";
import MenuMobile from "./MenuSection/MenuMobile";
import MenuSection from "./MenuSection/MenuSection";

const Header = () => {
  return (
    <div className="header-area header_area">
      <div className="main-header header-sticky sticky-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <Logo />
              <InfoSection />
            </div>
            <MenuSection />
            <MenuMobile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
