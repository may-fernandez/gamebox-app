import React from "react";
import "./GameDetail.css";
import {useState, useEffect} from "react";
import Calificacion from "../../components/Calificacion.jsx";
import {addToWishlist,
        isInWishlist,
        removeFromWishlist} from "../../utils/localStorage.js";


function GameDetail({game}){

    const [inWishlist, setInWhishlist] = useState(false);

    useEffect(() => {
        if(game){
            setInWhishlist(isInWishlist(game.id));
        }
    }, [game]);

    const toggleWishlist = () => {

        if(inWishlist){
            removeFromWishlist(game.id);
            setInWhishlist(false);
        }
        else{
            addToWishlist(game.id);
            setInWhishlist(true);
        }
    };

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

        <button className="btn-wishlist" onClick={toggleWishlist}>
            {inWishlist ? "Quitar de wishlist" : "Agregar a wishlist"}
        </button>
    </div>
    );
}

export default GameDetail