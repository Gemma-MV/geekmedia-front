import React, {useState} from 'react';
import { useBooks } from '../utils/hooks/useBooks.js';
import { useMovies } from '../utils/hooks/useMovies.js';
import { useMusic } from '../utils/hooks/useMusic.js';
// import { toggleMoreText } from '../utils/toggleMoreText.js';
 
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
                {movies.map((movies, index) => (
                    <div key={index} className="indexMovies">
                        <h4 className="movieTitle">{movies.title}</h4>
                        <p className="moviePrice">Precio: {movies.price} €</p>
                        <p className="movieDescription">{movies.description}</p>
                        <p className="movieDescriptione hidden">{movies.seeMore}</p>
                    </div>
                ))}
                </div>
            </div>
            <div className="divMusic">
            <h3>Descubre nuestra colección de Musica</h3>
                <div className='divOneMusic'>
                {music.map((music, index) => (
                    <div key={index} className="indexMusic">
                        <h4 className="musicTitle">{music.title}</h4>
                        <p className="musicPrice">Precio: {music.price} €</p>
                        <p className="musicDescription">{music.description}</p>
                        <p className="musicDescription hidden">{music.seeMore}</p>
                    </div>
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
            <h4 className="bookTitle">{book.title}</h4>
            <p className="bookPrice">Precio: {book.price} €</p>
            <p className="bookDescription">{book.description}</p>
            {showMore && (
                <p className="bookDescription">{book.seeMore}</p>
            )}
            <button className='show-more-btn' onClick={handleToggle}>{showMore ? "...ver menos" : "...ver más"}</button>
        </div>
    );
}