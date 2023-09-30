import React, { useState } from "react";
import style from "../css/Search.module.scss"; // Importa il file SCSS per lo stile del menu
import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";
function SearchCategory({ setQuery }) {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Aggiorna il valore dell'input quando cambia
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Impedisce l'invio predefinito del modulo
    if (inputValue) {
      setQuery(inputValue); // Imposta la prop query utilizzando Redux
      navigate("/"); // Naviga a "/home" dopo il submit
    } else {
      // Visualizza un messaggio di errore
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className={style.searchForm}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="SEARCH"
          className={style.search}
        />
        <button type="submit" className={style.submit}>
          GO
        </button>
      </form>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  setQuery: (query) => dispatch({ type: "SET_QUERY", payload: query }),
});

export default connect(null, mapDispatchToProps)(SearchCategory);
