import React from "react";
import style from "../../css/Header.module.scss"; // Importa il file SCSS
import HamburgerMenu from "./Hamburgher";

import Logo from "./Logo";

import DateSection from "./Date";
function Header() {
  return (
    <div className={style.component}>
      <div className={style.line}>
        <HamburgerMenu />
        <Logo />
      </div>

      <DateSection />
    </div>
  );
}

export default Header;
