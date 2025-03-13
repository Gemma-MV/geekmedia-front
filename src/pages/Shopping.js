// Hacemos la importacion de React y de los hooks: useState para crear y actualizar valores que pueden cambiar con el tiempo, como el carrito y el total de productos; createContext para crear un "contexto" donde podemos almacenar información que será compartida por varios componentes, como el carrito y useContext para acceder a la información guardada en el contexto desde cualquier componente
import React, { useState, createContext, useContext } from 'react';
import './StylePages.css';

// Creamos el contexto para el carrito que guarda la información del carrito para que otros componentes puedan acceder fácilmente a ella
export const CartContext = createContext();

// CartProvider es una función que "envuelve" a otros componentes. Le da acceso a esos componentes a la información del carrito. El parámetro { children } se refiere a todos los elementos hijos que estarán dentro de este proveedor en la jerarquía de componentes
export function CartProvider({ children }) {
  // Guardamos en la constante cart el array que guarda los productos que el usuario ha añadido al carrito; setCart es la función para actualizar el carrito y useState el hook que maneja su estado para actualizar los productos
  const [cart, setCart] = useState([]);
  // Guardamos en la constante totalItems el array que guarda el número total de productos en el carrito; setTotalItems es la función para actualizar el valor de totalItems y iniciamos el hook useState a 0 para que el estado inicial sea sin productos
  const [totalItems, setTotalItems] = useState(0);

  // Guardamos en la constante addToCart la funcion a la que llamaremos cuando hagamos click en el boton comprar y le pasamos como parametro el producto 
  const addToCart = (product) => {
    // Guardamos en el actualizador setCart el ultimo estado del carrito para que lo actualice si se cumple la condicion
    setCart((prevCart) => {
      // Guardamos en existingItem la busqueda (find) del ultimo estado del carrito si existe el producto su identificador único el id del producto (product._id)
      const existingItem = prevCart.find(item => item.id === product._id);
      // Si encontramos el producto, incrementamos su cantidad en el carrito
      if (existingItem) {
        // Usamos map, que actualiza la cantidad solo del producto específico sin alterar los demás. Lo que hacemos es que recorra el array con map y vaya sumando 1 a la cantidad
        return prevCart.map(item =>
          item.id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Si no encontramos el producto en el carrito, lo añadimos como un nuevo objeto incluyendo sus datos, el id, el titulo, el precio y la cantidad
        return [...prevCart, { id: product._id, title: product.title, price: product.price, quantity: 1 }];
      }
    });
    // Cada vez que añadimos algo al carrito, incrementamos el contador total (totalItems)
    setTotalItems((prevTotal) => prevTotal + 1);
  };

  // Aqui retornamos el contexto de CartProvider que es el contenedor donde vamos a guardar: cart, que es la lista de productos en el carrito; addToCart, la funcion para añadir productos  y totalItems, el numero de productos en el carrito
  return (
    <CartContext.Provider value={{ cart, addToCart, totalItems}}>
      {children}
    </CartContext.Provider>
  );
}

// Shopping es una funcion que muestra el carrito para exportarla 
export default function Shopping() {
  // Guardamos en la constante cart el contexto que guarda la informacion del carrito sobre cuantos productos contiene
  const { cart } = useContext(CartContext);

  // Retornamos para mostrar en pantalla: si la longitud del array cart es mayor que 0 es que hay productos, en ese caso los mostramos en una lista ul. Recorremos el array con un map y mostramos por cada posicion en su item por id el titulo, la cantidad y el precio
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
          // Si no hay ningun producto mostramos el mensaje de que el carrito esta vacio
          ) : (
            <p>El carrito está vacío.</p>
          )}
      </div>
    </>
  );
}