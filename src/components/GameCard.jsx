import React from 'react';

const GameCard = ({game}) => {

    return(
        <div style={{width: 160, marginRight: 10}}>
            <img src={game.img} alt={game.name} style={{width: "100%", borderRadius: "8px"}}/>
            <h3 style={{fontSize: "14px", marginTop: "5px"}}>{game.name}</h3>
        </div>
    );
}

export default GameCard;