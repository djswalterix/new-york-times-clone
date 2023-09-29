// Menu.js
import React from "react";
import style from "../css/Menu.module.scss"; // Importa il file SCSS per lo stile del menu

function Menu({ isOpen }) {
  if (!isOpen) {
    return null; // Il menu è chiuso, quindi non renderlo
  }
  const menuList = [
    "world",
    "us",
    "politics",
    "ny",
    "business",
    "opinion",
    "scienze",
    "Health",
    "sports",
    "arts",
    "books",
    "style",
    "food",
    "travel",
    "magazine",
    "realestate",
  ];
  const menuClassName = isOpen ? `${style.menu} ${style.open}` : style.menu;
  return (
    <div className={menuClassName}>
      <ul>
        {menuList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
