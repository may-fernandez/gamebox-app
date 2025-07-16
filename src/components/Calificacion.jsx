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

  const handleMouseMove = (e, value) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const percent = x / width;
    const half = percent < 0.5 ? 0.5 : 1;
    setHover(value - 1 + half);
  };

  const handleMouseLeave = () => {
    setHover(0);
  };

  const display = hover || rating;
  const guardado = rating;

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "1rem",
      }}>
      <div 
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center"

        }}>
        {[1, 2, 3, 4, 5].map((value) => {
          const fillLevel =
            display >= value ? 1 : display >= value - 0.5 ? 0.5 : 0;

          return (
            <span
              key={value}
              onClick={() => handleClick(fillLevel === 1 ? value : value - 0.5)}
              onMouseMove={(e) => handleMouseMove(e, value)}
              onMouseLeave={handleMouseLeave}
              style={{
                position: "relative",
                fontSize: "26px",
                width: "26px",
                height: "26px",
                display: "inline-flex",
                cursor: "pointer"
              }}
            >
              <span style={{ color: "#CCC", position: "absolute" }}>★</span>
              <span
                style={{
                  color: "#FFD700",
                  position: "absolute",
                  width: `${fillLevel * 100}%`,
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  display: "inline-flex",
                  transition: "ease 0.3s"
                }}
              >
                ★
              </span>
            </span>
          );
        })}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: "1.5rem",
          borderRadius: "5px",
          backgroundColor: `${guardado <= 2 ? "#ba0000ff" 
                            : guardado >= 2.5 && guardado < 3.5 ? "#baa101ff" 
                            :  "#009004"}`
          
        }}
        
      >
        <p
          style={{
            display: "flex",
            fontSize: "0.9rem",
            color: "white",
            padding: "0.4rem",
            fontWeight: "700",
          }}
        >
          {guardado.toFixed(1) }
        </p>
      </div>
    </div>
  );
}

export default Calificacion;
