import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

const Header = () => {
  return (
    <header>
      <h1 className="header-heading">Shoe App</h1>
      <hr />
      <div className="links">
        <NavLink className={"abc"} to="/" activeclassname="active">
          Home
          <FontAwesomeIcon
            style={{ margin: "5px 0 2px 5px" }}
            icon={regular("home")}
          />
        </NavLink>
        <NavLink className={"abc"} to="/shoes" activeclassname="active">
          Shoe List
          <FontAwesomeIcon
            style={{ margin: "5px 0 0.5px 5px" }}
            icon={regular("square-list")}
          />
        </NavLink>
        <NavLink className={"abc"} to="/add" activeclassname="active">
          Add Shoe
          <FontAwesomeIcon
            style={{ margin: "5px 0 0.5px 5px" }}
            icon={regular("plus")}
          />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
