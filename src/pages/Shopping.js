import React, { useState, createContext, useContext } from 'react';
import './StylePages.css';

// Crear el contexto para el carrito
export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0); // Estado para el contador de productos

  const addToCart = (book) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === book._id);
      if (existingItem) {
        // Incrementar la cantidad del producto si ya está en el carrito
        return prevCart.map(item =>
          item.id === book._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Añadir un nuevo producto al carrito
        return [...prevCart, { id: book._id, title: book.title, price: book.price, quantity: 1 }];
      }
    });
    // Incrementar el total de artículos en el carrito
    setTotalItems((prevTotal) => prevTotal + 1);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, totalItems}}>
      {children}
    </CartContext.Provider>
  );
}

export default function Shopping() {
  const { cart } = useContext(CartContext);

  return (
    <>
    <h2 className='genericH2'>Tu Cesta</h2>
    <div className="shoppingCart">
        {cart.length > 0 ? (
            <ul>
            {cart.map((item) => (
                <li key={item.id}>
                {item.title} - {item.quantity} x {item.price} € = {item.quantity * item.price} €
                </li>
            ))}
            </ul>
            ) : (
            <p>El carrito está vacío.</p>
        )}
    </div>
    </>
    );
}