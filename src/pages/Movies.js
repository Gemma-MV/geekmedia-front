import React, {useState} from 'react';
import { useMovies } from '../utils/hooks/useMovies.js';
import './StylePages.css';

export default function Movies() {
    const { movies } = useMovies();
    const [showMore, setShowMore] = useState({});

    const handleToggle = (id) => {
        setShowMore((prevState) =>({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    return (
        <div className='divMainProducts'>
            <div className="divMovies">
            <h3>Descubre nuestra colección de Peliculas</h3>
                <div className='divOneMovie'>
                    {movies.map((movie, index) => (
                    <div className="indexMovies" key={index}>
                        <div className='imgFlex'>
                            <img className="imgProducts" src={`http://localhost:3001/${movie.img}`} alt="Imagen de pelicula disponible"/>
                        </div>
                        <h4 className="movieTitle">{movie.title}</h4>
                        <p className="moviePrice">Precio: {movie.price} €</p>
                        <p className="movieDescription">{movie.description}</p>
                            {showMore[movie._id] && (
                                <p className="movieDescription">{movie.seeMore}</p>
                            )}
                        <div className='btnFlex'>
                            <button className='show-more-btn' onClick={() => handleToggle(movie._id)}> {showMore[movie._id] ? "...ver menos" : "...ver más"} </button>
                            <button className='btnBuy'>Comprar</button>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}