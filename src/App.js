// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/fonts.css"; // o import './fonts.scss';

import Home from "./components/Home"; // Importa il componente Home
// Importa i componenti per le altre pagine qui

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* Aggiungi altre route per le tue pagine */}
        {/* <Route path="/about" component={About} /> */}
        {/* <Route path="/contact" component={Contact} /> */}
      </Routes>
    </Router>
  );
}

export default App;
