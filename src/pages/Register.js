import React from 'react';
import './StylePages.css';
import Form from './Form.js';

export default function Register() {
    return(
        <div className='Register'>
            <h2 className='genericH2'>Registrate con nosotros para realizar tus compras</h2>
            <Form />
        </div>
    )
}