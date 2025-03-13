import React, { useState, useContext } from 'react';
import { useMusic } from '../utils/hooks/useMusic.js';
import { CartContext } from './Shopping.js'; 
import './StylePages.css';

export default function Music() {
    const { musicList } = useMusic();
    const { addToCart } = useContext(CartContext); 
    const [showMore, setShowMore] = useState({});

    const handleToggle = (id) => {
        setShowMore((prevState) => ({ ...prevState, [id]: !prevState[id] }));
    };

    return (
        <div className='divMainProducts'>
            <div className="divMusic">
            <h3>Descubre nuestra colección de Musica</h3>
                <div className='divOneMusic'>
                    {musicList.map((music, index) => (
                    <div className="indexMusic" key={index}>
                        <div className='imgFlex'>
                            <img className="imgProducts" src={`http://localhost:3001/${music.img}`} alt="Imagen de musica disponible"/>
                        </div>
                        <h4 className="musicTitle">{music.title}</h4>
                        <p className="musicPrice">Precio: {music.price} €</p>
                        <p className="musicDescription">{music.description}</p>
                            {showMore[music._id] && (
                                <p className="musicDescription">{music.seeMore}</p>
                            )}
                        <div className='btnFlex'>
                            <button className='show-more-btn' onClick={() => handleToggle(music._id)}> {showMore[music._id] ? "...ver menos" : "...ver más"} </button>
                            <button className='btnBuy' onClick={() => addToCart(music)}>Comprar</button>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}