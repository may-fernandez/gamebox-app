import React from "react";
import "Header.css";
import search from "../../assets/search.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-container">
        <Link to="/" className="logo"></Link>
        <Link to="">All games</Link>

        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Busca un juego..."
            className="search-bar"
          />
          <button className="btn-buscar">
            <img src={search} className="search-icon"/>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
