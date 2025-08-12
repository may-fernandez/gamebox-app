import React from "react";
import "Header.css";
import search from "../../assets/search.svg";
import Home from "../../pages/home/Home.jsx";
import Wishlist from "../../pages/wishlist/Wishlist.jsx";
import AllGames from "../../pages/allGames/AllGames.jsx";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
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
    <></>
  );
}

export default Header;
