import React, { useState } from 'react'
import './StylePages.css';

export default function Form() {
    // Guardamos en formData los valores con un estado inicial vacio que se espera que despues vayan a cambiar, por eso usamos el hook useState. Modificaremos los valores con el dato del value del input del formulario
    const [formData, setFormData] = useState({
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: '',
        street: '',
        number: '',
        floor: '',
        letter: '',
        city: '',
        province: '',
        country: '',
        postalCode: '',
        phone: '',
      });
    
    // Llamamos a esta funcion handleChange (manejar el cambio) cada vez que escribimos algo en el formulario. Name es nombre del name del input, value el valor del name del input y e.target representa el campo que está siendo modificado, con setFormData actualiza el estado del formulario manteniendo los valores existentes pero cambiando el que se acaba de modificar con prevData que nos da el dato anterior y lo cambiamos por el contenido de [name]: value. Con esta funcion lo que hacemos es que cuando haya un cambio en el onChange del input registre el cambio y lo guarde en la constante formData que contiene los datos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    
    // Con esta funcion evitamos que el formulario recargue la página al enviarse
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    return(
        <form onSubmit={handleSubmit} className='formRegister'>
            <div className='formFlex'>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className='formFlex'>
                <label>Confirmación de Email:</label>
                <input type="email" name="confirmEmail" value={formData.confirmEmail} onChange={handleChange} required />
            </div>
            <div className='formFlex'>
                <label>Contraseña:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <div className='formFlex'>
                <label>Confirmación de Contraseña:</label>
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
            </div>
            <div className='formFlex'>
                <label>Calle:</label>
                <input type="text" name="street" value={formData.street} onChange={handleChange} required />
            </div>
            <div className='formFlex'>
                <label>Número:</label>
                <input type="text" name="number" value={formData.number} onChange={handleChange} required />
            </div>
            <div className='formFlex'>
                <label>Piso:</label>
                <input type="text" name="floor" value={formData.floor} onChange={handleChange} required />
            </div>
            <div className='formFlex'>
                <label>Letra:</label>
                <input type="text" name="letter" value={formData.letter} onChange={handleChange} required />
            </div>
            <div className='formFlex'>
                <label>Población:</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} required />
            </div>
            <div className='formFlex'>
                <label>Provincia:</label>
                <input type="text" name="province" value={formData.province} onChange={handleChange} required />
            </div>
            <div className='formFlex'>
                <label>País:</label>
                <input type="text" name="country" value={formData.country} onChange={handleChange} required />
            </div>
            <div className='formFlex'>
                <label>Código Postal:</label>
                <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
            </div>
            <div className='formFlex'>
                <label>Teléfono:</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className='divForm-btn'>
                <button type="submit" className='form-btn'>Registrarse</button>
                <button type="submit" className='form-btn'>Borrar</button>
            </div>
        </form>
    );
}