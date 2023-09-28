import React from "react";
import style from "../css/Date.module.scss"; // Importa il file SCSS
function DateSection() {
  //creo data
  const today = new Date();
  const optionsData = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formatoData = new Intl.DateTimeFormat("en-US", optionsData);
  const dateFormatted = formatoData.format(today);

  return <div className={style.date}>{dateFormatted}</div>;
}

export default DateSection;
