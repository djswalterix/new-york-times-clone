import React from "react";
import style from "../../css/Hamburgher.module.scss"; // Importa il file SCSS
import svgMenu from "../../images/X.svg";
import { Link } from "react-router-dom"; // Importa il componente Link
function DeleteButton() {
  return (
    <div>
      <Link to={`/`}>
        <img
          className={style.imgHamburgherMenu}
          src={svgMenu}
          alt="Hamburgher Menu"
        ></img>
      </Link>
    </div>
  );
}

export default DeleteButton;
