import React, {useState, useEffect} from "react";
import './Home.css';
import Carrousel from '../../components/Carrousel.jsx';
import {fetchGames} from '../../utils/fetchGames.js';

const Home = () => {
    const [topDeLaSemana, setTopDeLaSemana] = useState([]);
    const [topDelAnio, setTopDelAnio] = useState([]);
    const [topDeSiempre, setTopDeSiempre] = useState([]);

    useEffect(() => {

        const getGames = async () => {
            const hoy = new Date();
            const comienzoAnio = `${hoy.getFullYear()}-01-01`;
            const finAnio = `${hoy.getFullYear}-12-31`;

            const juegosTopDeLaSemana = await fetchGames("ordering=-added&page_size=10");
            const juegosTopDelAnio = await fetchGames(`dates=${comienzoAnio},${finAnio}=ordering=-rating&page_size=10`);
            const juegosTopDeSiempre = await fetchGames("ordering=-rating&page_size=10");

            setTopDeLaSemana(juegosTopDeLaSemana);
            setTopDelAnio(juegosTopDelAnio);
            setTopDeSiempre(juegosTopDeSiempre);
        }

        getGames();
    }, []);

    return(
        <div className="home">
            <Carrousel title="Top de la semana" games={topDeLaSemana}/>
            <Carrousel title="Top del año" games={topDelAnio}/>
            <Carrousel title="Favoritos de siempre" games={topDeSiempre}/>
        </div>
    );

}

export default Home;