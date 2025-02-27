import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductsPage from './components/ProductsPage';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/cartpage" element={<CartPage/>} />
      <Route path="/checkoutpage" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
