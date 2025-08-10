import React, {useState, useEffect } from "react";
import './AllGames.css';

function AllGames({allGames}) {
    const [games, setGames] = useState(allGames);

    useEffect(() => {
        const fetchGames = async () => {
            try{
                const res = await fetch("`https://api.rawg.io/api/games?key=b3155505ee894e7f92ce1965670a8b72&page_size=40`");
                const data = await res.json();

                const juegos = data.results.map((game) => ({
                    id: game.id,
                    name: game.name,
                    image: game.background_image,
                    description: game.slug,
                    genre: game.genres.map((g) => g.name),
                }));

                setGames(juegos);
            }
            catch(error){
                console.error("Error al cargar los juegos: ", error);
            }
        }

        fetchGames();
    },[]);
}

export default AllGames;
