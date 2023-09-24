import React, { useState } from "react";
import styles from "../css/Header.module.scss"; // Importa il file SCSS
import Header from "./Header";

function Home() {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
}

export default Home;
