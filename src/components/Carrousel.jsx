import React from 'react';
import GameCard from './GameCard';

const Carrousel = ({title, games}) => {

    return(
        <section style={{marginBottom: 30}}>
            <h2 style={{fontSize: "20px", marginBottom: 10}}>{title}</h2>
            <div
            style={{
                display: "flex",
                overflowX: "auto",
                gap: "10px",
                paddingBottom: "10px"
            }}>
                {games.map((game)=>(
                    <GameCard key={game.id} game={game}/>
                ))}
            </div>
        </section>
    );
}

export default Carrousel;