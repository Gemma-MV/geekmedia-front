import React from 'react';
import Books from '../pages/Books.js';
import Movies from '../pages/Movies.js';
import Music from '../pages/Music.js';
 
export default function Products() {

    return (
        <div className="divProducts">
            <h2 className="h2Products">Encuentra tus libros y películas friki favoritos, junto con la mejor música, todo en un solo lugar.</h2>
            <Books />
            <Movies />
            <Music />
        </div>
    )
}