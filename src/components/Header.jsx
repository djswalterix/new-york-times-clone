import React, { useState } from "react";
import style from "../css/Header.module.scss"; // Importa il file SCSS
import HamburgerMenu from "./Hamburgher";
import Logo from "./Logo";
import userIcon from "../images/userIcon.svg";
function Header() {
  return (
    <div className={style.component}>
      <HamburgerMenu />
      <Logo />
    </div>
  );
}

export default Header;
