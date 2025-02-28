import React, {useState} from 'react';
import { useBooks } from '../utils/hooks/useBooks.js';
import { useMovies } from '../utils/hooks/useMovies.js';
import { useMusic } from '../utils/hooks/useMusic.js';
 
export default function Products() {

    const { books, navigate } = useBooks();
    const { movies } = useMovies();
    const { music } = useMusic();
    console.log(books);

    return (
        <div className="divProducts">
            <h2 className="h2Products">Encuentra tus libros y películas friki favoritos, junto con la mejor música, todo en un solo lugar.</h2>
                <div className="divBooks">
                <h3>Descubre nuestra colección de libros</h3>
                    <div className='divOneBook'>
                        {books.map((book, index) => (
                            
                            <Book key={index} book={book} />
                        ))}
                    </div>
                </div>
            <div className="divMovies">
            <h3>Descubre nuestra colección de Peliculas</h3>
                <div className='divOneMovie'>
                    {movies.map((movie, index) => (
                        <Movie key={index} movie={movie} />
                    ))}
                </div>
            </div>
            <div className="divMusic">
            <h3>Descubre nuestra colección de Musica</h3>
                <div className='divOneMusic'>
                    {music.map((music, index) => (
                        <Music key={index} music={music} />
                    ))}
                </div>
            </div>
        </div>
    )
}

function Book({ book }) {
    const [showMore, setShowMore] = useState(false);

    const handleToggle = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="indexBook">
            <div className='imgFlex'>
                <img className="imgProducts" src={`http://localhost:3001/${book.img}`} alt="Imagen de libro disponible"/>
            </div>
            <h4 className="bookTitle">{book.title}</h4>
            <p className="bookPrice">Precio: {book.price} €</p>
            <p className="bookDescription">{book.description}</p>
            {showMore && (
                <p className="bookDescription">{book.seeMore}</p>
            )}
            <div className='btnFlex'>
                <button className='show-more-btn' onClick={handleToggle}>{showMore ? "...ver menos" : "...ver más"}</button>
                <button className='btnInfo' >+ Info</button>
            </div>
        </div>
    );
}

function Movie({ movie }) {
    const [showMore, setShowMore] = useState(false);

    const handleToggle = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="indexMovies">
            <div className='imgFlex'>
                <img className="imgProducts" src={`http://localhost:3001/${movie.img}`} alt="Imagen de pelicula disponible"/>
            </div>
            <h4 className="movieTitle">{movie.title}</h4>
            <p className="moviePrice">Precio: {movie.price} €</p>
            <p className="movieDescription">{movie.description}</p>
            {showMore && (
                <p className="movieDescription">{movie.seeMore}</p>
            )}
            <div className='btnFlex'>
                <button className='show-more-btn' onClick={handleToggle}>{showMore ? "...ver menos" : "...ver más"}</button>
                <button className='btnInfo' >+ Info</button>
            </div>
        </div>
    );
}

function Music({ music }) {
    const [showMore, setShowMore] = useState(false);

    const handleToggle = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="indexMusic">
            <div className='imgFlex'>
                <img className="imgProducts" src={`http://localhost:3001/${music.img}`} alt="Imagen de musica disponible"/>
            </div>
            <h4 className="musicTitle">{music.title}</h4>
            <p className="musicPrice">Precio: {music.price} €</p>
            <p className="musicDescription">{music.description}</p>
            {showMore && (
                <p className="musicDescription">{music.seeMore}</p>
            )}
            <div className='btnFlex'>
                <button className='show-more-btn' onClick={handleToggle}>{showMore ? "...ver menos" : "...ver más"}</button>
                <button className='btnInfo' >+ Info</button>
            </div>
        </div>
    );
}