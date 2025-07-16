import React from "react";
import Calificacion from "../../components/Calificacion";
import "./GameDetail.css"

function GameDetail({game}){

    if(!game){
        return <p className="select-game">Selecciona un juego para ver más detalles</p>;
    }

    return(
    <div className="game-container">
        <h2 className="game-title">{game.name}</h2>
        <img src={game.image} alt={game.name} className="game-image"/>
        <p className="game-description">{game.description}</p>

        <div className="genres">
            {game.genres?.map((genre, index) => (
                <span key={index} className="game-genre">
                    {genre}
                </span>
            ))}
        </div>

        <div className="rating">
            <Calificacion gameId={game.id}/>
        </div>
    </div>
    );
}

export default GameDetail