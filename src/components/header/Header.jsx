import React from "react";
import "Header.css";
import search from "../../assets/search.svg";
import Home from "../../pages/home/Home.jsx";
import Wishlist from "../../pages/wishlist/Wishlist.jsx";
import AllGames from "../../pages/allGames/AllGames.jsx";
import { Link, NavLink } from "react-router-dom";
import {useState, useEffect} from 'react';

function Header() {

  const [categories, setCategories] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);

  useEffect(() => {

    const fetchCategories = async () => {

      try{
        const response = await fetch(`https://api.rawg.io/api/genres?key=${process.env.REACT_APP_RAWG_API_KEY}`);
        const data = await response.json();
        if(!response.ok){
          throw new Error("Error al obtener las categorias de la API");
        }
        setCategories(data.results || []);
      }
      catch(error){
        console.error("Error buscando las categorias: ", error);
      }
    }
    fetchCategories();
  }, []);

  return (
    <header>
      <div>
        <Link to= "/" className="logo">GameBox</Link>

        <nav>
          <li>
            <NavLink to="/" className="nav-link" end>Home</NavLink>
          </li>
          <li>
            <NavLink to="/wishlist" className="nav-link">Wishlist</NavLink>
          </li>
          <li>
            <NavLink to="/all-games" className="nav-link">Juegos</NavLink>
          </li>

          <li className="dropdown" 
          onMouseEnter={() => setShowDropDown(true)} 
          onMouseLeave={() => setShowDropDown(false)}>
            <span className="categories-nav">Categories ▾</span>
          </li>
        </nav>
      </div>
    </header>
  );
}

export default Header;
