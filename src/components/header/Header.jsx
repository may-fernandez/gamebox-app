import React from "react";
import "Header.css";
import search from "../../assets/search.svg";
import Home from "../../pages/home/Home.jsx";
import Wishlist from "../../pages/wishlist/Wishlist.jsx";
import AllGames from "../../pages/allGames/AllGames.jsx";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Header() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/wishlist">Wishlist</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/wishlist' element={<Wishlist allGames={allGames}/>}></Route>
        <Route path='/detalle/:id' element={<GameDetail allGames={allGames}/>}></Route>
      </Routes>
    </Router>
  );
}

export default Header;
