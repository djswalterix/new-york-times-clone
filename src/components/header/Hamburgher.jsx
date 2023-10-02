import React from "react";
import style from "../../css/Hamburgher.module.scss"; // Importa il file SCSS
import svgMenu from "../../images/hamburgherMenu.svg";
import { Link } from "react-router-dom"; // Importa il componente Link
function HamburgerMenu() {
  return (
    <div className="hamburgherMenu">
      <Link to={`/menu`}>
        <img
          className={style.imgHamburgherMenu}
          src={svgMenu}
          alt="Hamburgher Menu"
        ></img>
      </Link>
    </div>
  );
}

export default HamburgerMenu;
