import React from 'react';
import { useBooks } from '../utils/hooks/useBooks.js';

export default function Products() {

    const { books, navigate } = useBooks();

    return (
        <div className="divProducts">
            <h2 className="h2Products">Encuentra tus libros y películas friki favoritos, junto con la mejor música, todo en un solo lugar.</h2>
            <div className="divBooks">
            {books.map((book, index) => (
                <div key={index} className="indexBook">
                    <h2 className="bookTitle">{book.title}</h2>
                </div>
            ))}
            </div>
            <div className="divMovies">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="divMusic">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}