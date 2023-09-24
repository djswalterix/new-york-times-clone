import React from "react";
import style from "../css/Logo.module.scss"; // Importa il file SCSS
import logoImg from "../images/The_New_York_Times_logo.png";

function Logo() {
  return (
    <div className={style.logo}>
      <img src={logoImg} alt="Logo New York Times" />
    </div>
  );
}
export default Logo;
