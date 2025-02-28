import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsPage from './components/ProductsPage';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';
import { CartProvider } from './components/CartContext';
function App() {
  const [openDetailsBox, setOpenDetailsBox] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenDetailsBox = (product) => {
    console.log("Product clicked:", product);
    setSelectedProduct(product);
    setOpenDetailsBox(true);
  }


  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <ProductsPage
            openDetailsBox={openDetailsBox}
            selectedProduct={selectedProduct}
            setOpenDetailsBox={setOpenDetailsBox}
            onProductClick={handleOpenDetailsBox}
          />
        }
        />
        <Route path="/cartpage" element={<CartPage/>} />
        <Route path="/checkoutpage" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
