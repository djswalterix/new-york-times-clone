// Menu.js
import React from "react";
import style from "../css/Menu.module.scss"; // Importa il file SCSS per lo stile del menu
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SearchCategory from "./SearchCategory";
function Menu({ setQuery }) {
  const handleMenuItemClick = (query) => {
    setQuery(query); // Imposta la prop query utilizzando Redux
  };
  const menuList = [
    "World",
    "Us",
    "Politics",
    "Ny",
    "Business",
    "Opinion",
    "Scienze",
    "Health",
    "Sports",
    "Arts",
    "Books",
    "Style",
    "Food",
    "Travel",
    "Magazine",
    "Realestate",
  ];

  return (
    <div className={style.menu}>
      <SearchCategory />
      <ul>
        {menuList.map((item, index) => (
          <Link to="/" onClick={() => handleMenuItemClick(item)}>
            <li key={index}>{item}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  setQuery: (query) => dispatch({ type: "SET_QUERY", payload: query }),
});
export default connect(null, mapDispatchToProps)(Menu);
