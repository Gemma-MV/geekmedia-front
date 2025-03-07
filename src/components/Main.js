import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from './Products.js';
import Books from '../pages/Books.js';
import Movies from '../pages/Movies.js';
import Music from '../pages/Music.js';
import Register from '../pages/Register.js';
import Login from '../pages/Login.js';
import Shopping from '../pages/Shopping.js';

export default function Main() {
    return (
        <main className='main'>
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/books" element={<Books />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/music" element={<Music />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/shopping" element={<Shopping />} />
            </Routes>
        </main>
    )
}