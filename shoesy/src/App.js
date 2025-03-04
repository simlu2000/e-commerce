import './App.css';
import { CartProvider } from './components/CartContext';
import React from 'react';
import ProductsPage from './components/ProductsPage';

function App() {
  return (
    <CartProvider>
      <ProductsPage />
    </CartProvider>
  );
}

export default App;