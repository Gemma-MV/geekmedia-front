import React, { useState } from 'react'
import './StylePages.css';

export default function Login() {
    const [formData, setFormData] = useState({
            email: '',
            password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return(
        <div className='Login'>
            <h2 className='registerH2'>INICIA SESION</h2>
            <form onSubmit={handleSubmit} className='formLogin'>
                <div className='loginFlex'>
                    <label>Correo Electrónico:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className='loginFlex'>
                    <label>Contraseña:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <div className='divLogin-btn'>
                    <button type="submit" className='login-btn'>Registrarse</button>
                </div>
            </form>
        </div>
    )
}