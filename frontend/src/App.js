import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/cart';
import Checkout from './components/checkout';
import Navbar from './components/navbar';
import Home from './components/home';

function App() {
  const [cartItemCount, setCartItemCount] = useState(0);

  return (
    <Router>
      <Navbar cartItemCount={cartItemCount} />
      <Routes>
        <Route 
          path="/" 
          element={<Home setCartItemCount={setCartItemCount} />} 
        />
        <Route 
          path="/cart" 
          element={<Cart setCartItemCount={setCartItemCount} />} 
        />
        <Route 
          path="/checkout" 
          element={<Checkout />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
