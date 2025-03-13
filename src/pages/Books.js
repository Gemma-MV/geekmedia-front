// En la importacion de React importamos tambien el hook por defecto useState para poder utilizar el estado de los productos, esto sirve para poder manejar cuando cambia su estado, en nuestro caso si despiega o no el ver mas. E importamos tambien el useContext para poder manejar el contexto, en nuestro caso nos permite acceder a información compartida, como el carrito de compras, desde cualquier lugar de nuestra aplicación
import React, { useState, useContext } from 'react';
// Hacemos la importacion de useBooks que contiene el fetch que trae del back el endpoint /books/all-books
import { useBooks } from '../utils/hooks/useBooks.js';
// Importamos la pagina de Shopping que contiene nuestro carrito de la compra
import { CartContext } from './Shopping.js'; 
import './StylePages.css';

// Declaramos la funcion que contiene los libros y que vamos a exportar tanto a la pagina principal como al link de navegacion de libros del header
export default function Books() {
    // Guardamos en la variable books el valor de la funcion useBooks que contiene el fetch de todos los libros para que sea mas facil de usar
    const { books } = useBooks();
    // Guardamos en la variable addToCart el contenido del carrito que esta en Shopping.js de tal manera que cuando añadamos un producto se metera en el carrito
    const { addToCart } = useContext(CartContext); 
    // Guardamos en la constante showMore la informacion sobre si debe mostrarse o no el resto de la descripcion del libro y en setShowMore usamos el hook useState para recoger el cambio de estado de showMore
    const [showMore, setShowMore] = useState({});

    // Guardamos en la funcion handleToggle la actualizacion del estado del boton ver mas/ver menos para que realice el despliegue o la contraccion del texto. Le pasamos el id para que lo realice de manera individual en cada boton y no reaccione en todos al pulsar
    const handleToggle = (id) => {
        setShowMore((prevState) => ({ ...prevState, [id]: !prevState[id] }));
    };

    return (
        <div className='divMainProducts'>
            <div className="divBooks">
                <h3>Descubre nuestra colección de libros</h3>
                <div className='divOneBook'>
                    {/* Usamos el bucle map para que nos de cada libro segun la posicion de su index */}
                    {books.map((book, index) => (
                    // React necesita una "clave" única para identificar cada elemento en una lista. Aquí usamos el índice del libro.
                    <div className="indexBook" key={index}>
                        <div className='imgFlex'>
                            {/* En el src le decimos que la ruta es la del servidor local donde esta corriendo el back para que enlace con el back que es donde esta cargada la ruta de la imagen que esta guardada en una carpeta de back y la ruta subida a mongo. De mongo coje el libro (book) y del nombre de la coleccion la clave valor img */}
                            <img className="imgProducts" src={`http://localhost:3001/${book.img}`} alt="Imagen de libro disponible"/>
                        </div>
                        {/* Igual que con la imagen sacamos del libro la clave valor title */}
                        <h4 className="bookTitle">{book.title}</h4>
                        <p className="bookPrice">Precio: {book.price} €</p>
                        <p className="bookDescription">{book.description}</p>
                        {/* Aquí verificamos si el estado showMore para este libro específico es verdadero. Si lo es, mostramos más detalles (book.seeMore) y se despliega el ver mas. */}
                            {showMore[book._id] && (
                                <p className="bookDescription">{book.seeMore}</p>
                            )}
                        <div className='btnFlex'>
                            {/* Aqui tenemos el boton para ver mas/ver menos. En el onclick llamamos a la funcion handleToggle, segun su id para que lo ejecute de manera independiente */}
                            <button className='show-more-btn' onClick={() => handleToggle(book._id)}> {showMore[book._id] ? "...ver menos" : "...ver más"} </button>
                            {/* Aqui cuando el usuario hace click en el boton se ejecuta la funcion addToCart, en este caso para book y lo añade al carrito */}
                            <button className='btnBuy' onClick={() => addToCart(book)}>Comprar</button>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}