
import React, { useEffect } from "react";

const MenuMobile = () => {

    useEffect(() => {
        let menu = $("ul#navigation");
        if (menu.length) {
          menu.slicknav({
            prependTo: ".mobile_menu",
            closedSymbol: "+",
            openedSymbol: "-",
          });
        }
      }, []);

  return (
    <div className="col-12">
      <div className="mobile_menu d-block d-lg-none"></div>
    </div>
  );
};

export default MenuMobile;
