import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <h1>Book Management App</h1>
      <hr />
      <div className="links">
        <NavLink to="/" activeclassname="active">
          Book List
        </NavLink>
        <NavLink to="/add" activeclassname="active">
          Add Book
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
