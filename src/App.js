import './App.css';
import Home from './pages/home/Home.jsx';
import Wishlist from './pages/wishlist/Wishlist.jsx';
import GameDetail from './pages/gameDetail/GameDetail.jsx';
import {useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  const [allGames, setAllGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try{
        const res = await fetch("`https://api.rawg.io/api/games?key=b3155505ee894e7f92ce1965670a8b72&page_size=40`");
        const data = await res.json();

        const formattedGames = data.results.map((game) => ({
          id: game.id,
          name: game.name,
          image: game.background_image,
          description: game.slug,
          genre: game.genres.map((g) => g.name),
        }));

        setAllGames(formattedGames);
      }
      catch(error){
        console.error("Error al cargar los juegos: ", error);
      }
    }

    fetchGames();
  }, []);

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/wishlist">Wishlist</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home allGames={allGames}/>}></Route>
        <Route path='/wishlist' element={<Wishlist allGames={allGames}/>}></Route>
        <Route path='/detalle/:id' element={<GameDetail allGames={allGames}/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
