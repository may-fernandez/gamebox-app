const BASE_URL= "https://api.rawg.io/api/games";
const API_KEY= process.env.REACT_APP_RAWG_API_KEY;

const fetchGames = async (params = "") => {

    try{
        const response = await fetch(`${BASE_URL}?key=${API_KEY}&${params}`);
        const data = await response.json();

        return data.results.map((game) => ({
            id: game.id,
            name: game.name,
            image: game.background_image,
            rating: game.rating,
            genres: game.genres.map((g) => game.name),
        }));
    }
    catch(error){
        console.error("Error al buscar juegos", error);
        return [];
    }
}

export default fetchGames;