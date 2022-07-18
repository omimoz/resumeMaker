import React from "react";
import Menu from "../component/menu";
import FooterMenu from "../component/menu/footerMenu";
import MobileMenu from "../component/menu/mobileMenu";
import useWindowDimensions from "../component/Tools/dimention";
import { css } from "@emotion/css";
import { Theme } from "../customizer";
const Header = () => {
  const { height, width } = useWindowDimensions();
  return (
    <div
      className={css`
        background: ${Theme.secondary};
        min-height: ${width < 900 ? "auto" : "700px"};
        padding: 24px ${width < 900 ? 16 : 101}px 0px;
        ${width < 900 ? 16 : width < 1410 ? 113 - (1410 - width) / 4 : 113}px;
        display: grid;
      `}
    >
      <Menu />
      <MobileMenu />
      <FooterMenu />
    </div>
  );
};

export default Header;
