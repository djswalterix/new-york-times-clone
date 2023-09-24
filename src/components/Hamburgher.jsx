import React, { useState } from "react";
import style from "../css/Hamburgher.module.scss"; // Importa il file SCSS
import svgMenu from "../images/hamburgherMenu.svg";
function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburgherMenu">
      <div className="sectionButton">
        <img
          className={style.imgHamburgherMenu}
          src={svgMenu}
          alt="Hamburgher Menu"
        ></img>
      </div>
    </div>
  );
}

export default HamburgerMenu;
