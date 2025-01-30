import React from 'react';
import logo from '../assets/img/logo2.png';
import llave from '../assets/img/llave.png';

export default function Header() {
    return (
        <>
        <header>
            <img src={logo} className='logoHeader' alt='nisu' />
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
        </nav>
        </>
    )
}