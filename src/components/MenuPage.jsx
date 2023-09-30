import React from "react";
import style from "../css/Header.module.scss"; // Importa il file SCSS
import DeleteButton from "./DeleteButton";
import Menu from "./Menu";
import Logo from "./Logo";

import DateSection from "./Date";

function MenuPage() {
  return (
    <div className={style.component}>
      <div className={style.line}>
        <DeleteButton />
        <Logo />
      </div>

      <DateSection />
      <Menu />
    </div>
  );
}

export default MenuPage;
