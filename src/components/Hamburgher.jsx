import React, { useState } from "react";
import style from "../css/Hamburgher.module.scss"; // Importa il file SCSS
import svgMenu from "../images/hamburgherMenu.svg";
function HamburgerMenu(props) {
  return (
    <div className="hamburgherMenu" onClick={props.onClick}>
      <img
        className={style.imgHamburgherMenu}
        src={svgMenu}
        alt="Hamburgher Menu"
      ></img>
    </div>
  );
}

export default HamburgerMenu;
