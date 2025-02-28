import React from 'react';
import logo from '../assets/img/logo2.png';
import llave from '../assets/img/llave.png';
import carrito from '../assets/img/carrito.png';

export default function Header() {
    return (
        <>
        <header>
            <img src={logo} className='logoHeader' alt='Logo de GeekMedia' />
            <div className='divH1'>
                <h1>GEEKMEDIA</h1>
                <p>Tu tienda online definitiva para películas, música y libros.</p>
            </div>
            <div className='divLogin'>
                <button className='btnLogin'>LOGIN<img src={llave} className='imgLogin' alt='nisu' /></button>
            </div>
        </header>
        <nav className='navBar'>
            <ul>
                <li>
                    <a href='#'>Libros</a>
                </li>
                <li>
                    <a href='#'>Películas</a>
                </li>
                <li>
                    <a href='#'>Musica</a>
                </li>
            </ul>
            <img src={carrito} className='carrito' alt='Icono de carrito de la compra' />
        </nav>
        </>
    )
}