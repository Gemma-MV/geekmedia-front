import './components/StyleComponents.css';
import React from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import { CartProvider } from './pages/Shopping.js';
 
function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;