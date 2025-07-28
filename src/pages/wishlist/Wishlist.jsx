import React from "react";
import "./Wishlist.css";
import { useState, useEffect } from "react";
import { getWishlist } from "../../utils/localStorage.js";

function Wishlist({ allGames }) {
  const [wishlistGames, setWishlistGames] = useState([]);

  useEffect(() => {
    const wishlistIds = getWishlist();

    const filteredGames = allGames.filter((game) =>
      wishlistGames.includes(game.id)
    );
    setWishlistGames(filteredGames);
  }, [allGames]);

  if (wishlistGames.length === 0) {
    return <p>Aún no hay juegos en tu wishlist.</p>;
  }
  return (
    <div className="wl-container">
      <h2 className="wl-title">Wishlist</h2>

      <div className="wl-games">
        {wishlistGames.map((game) => (
          <div key={game.id} className="game-card">
            <img src={game.image} alt={game.name} className="ww-game-img"/>
            <h3 className="game-title">{game.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
