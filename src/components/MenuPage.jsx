import React, { useState } from "react";
import style from "../css/Header.module.scss"; // Importa il file SCSS
import HamburgerMenu from "./Hamburgher";
import Menu from "./Menu";
import Logo from "./Logo";
import get from "../data/NYTGet";
import DateSection from "./Date";
function MenuPage(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(toggleMenu);
  };

  return (
    <div className={style.component}>
      <div className={style.line}>
        <HamburgerMenu onClick={toggleMenu} />
        <Logo />
      </div>

      <DateSection />
      <Menu isOpen={isMenuOpen} />
    </div>
  );
}

export default MenuPage;
