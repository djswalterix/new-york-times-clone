import React, { useState } from "react";
import style from "../css/Header.module.scss"; // Importa il file SCSS
import HamburgerMenu from "./Hamburgher";
import Menu from "./Menu";
import Logo from "./Logo";
import get from "../data/NYTGet";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(toggleMenu);
  };

  return (
    <div className={style.component}>
      <HamburgerMenu onClick={toggleMenu} />
      <Logo />
      <Menu isOpen={isMenuOpen} />
    </div>
  );
}

export default Header;
