import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { CartContext } from '../pages/Shopping.js';
import logo from '../assets/img/logo2.png';
import llave from '../assets/img/llave.png';
import carrito from '../assets/img/carrito.png';

export default function Header() {
    const { totalItems } = useContext(CartContext); // Obtener el contador de productos del carrito
    return (
        <>
        <header>
            <Link to="/"><img src={logo} className='logoHeader' alt='Logo de GeekMedia' /></Link>
            <div className='divH1'>
                <h1>GEEKMEDIA</h1>
                <p>Tu tienda online definitiva para películas, música y libros.</p>
            </div>
            <div className='divLogin'>
                <button className='btnLogin'><Link to="/register" className='linkRegistro'>REGISTRO</Link><img src={llave} className='imgLogin' alt='' /></button>
                <button className='btnLogin'><Link to="/login" className='linkRegistro'>LOGIN</Link><img src={llave} className='imgLogin' alt='' /></button>
            </div>
        </header>
        <nav className='navBar'>
            <ul>
                <li>
                    <Link to="/books" className='link'>Libros</Link>
                </li>
                <li>
                    <Link to="/movies" className='link'>Películas</Link>
                </li>
                <li>
                    <Link to="/music" className='link'>Musica</Link>
                </li>
            </ul>
            <Link to="/shopping" className='link'><img src={carrito} className='cart' alt='Icono de carrito de la compra' /><span className='counter'>{totalItems}</span> {/* Mostrar el contador */}</Link>
        </nav>
        </>
    )
}