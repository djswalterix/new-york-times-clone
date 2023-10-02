import React from "react";
import style from "../../css/Logo.module.scss"; // Importa il file SCSS
import logoImg from "../../images/The_New_York_Times_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
function Logo({ setQuery }) {
  const navigate = useNavigate();

  const handleClick = () => {
    setQuery("");
    navigate("/");
  };

  return (
    <Link to="/">
      <div className={style.logo} onClick={handleClick}>
        <img src={logoImg} alt="Logo New York Times" />
      </div>
    </Link>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setQuery: (query) => dispatch({ type: "SET_QUERY", payload: query }),
});
export default connect(null, mapDispatchToProps)(Logo);
