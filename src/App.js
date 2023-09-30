// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/fonts.css"; // o import './fonts.scss';
import MenuPage from "./components/MenuPage";
import Home from "./components/Home"; // Importa il componente Home
import { Provider } from "react-redux";
import store from "./redux/store";
// Importa i componenti per le altre pagine qui

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          {/* <Route path="/about" component={About} /> */}
          {/* <Route path="/contact" component={Contact} /> */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
