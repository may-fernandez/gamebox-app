import React, { useState, useEffect } from "react";
import { getRatingForGame, setRating } from "../utils/localStorage.js";

function Calificacion({ gameId }) {
  const [rating, setLocalRating] = useState(0);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    const ratingGuardado = getRatingForGame(gameId);
    setLocalRating(ratingGuardado);
  }, [gameId]);

  const handleClick = (value) => {
    setLocalRating(value);
    setRating(gameId, value);
  };

  return (
    <div style={{ display: "flex", cursor: "pointer" }}>
      {[1, 2, 3, 4, 5].map((value) => (
        <span 
        key={value} 
        onClick={() => handleClick(value)}
        onMouseEnter={() => setHover(value)}
        onMouseLeave={() => setHover(0)}
        style={{
            fontSize: '24px', 
            color: value <= (hover || rating) ? "#FFD700" : "#CCC",
            transition: "color 0.2s"
            }}>
          ★
        </span>
      ))}
    </div>
  );
}

export default Calificacion;
