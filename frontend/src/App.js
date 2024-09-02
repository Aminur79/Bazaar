import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/cart';
import Checkout from './components/checkout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WomenCategory from './components/WomenCategory';
import Homepage from './components/Homepage';
import Login from './components/login';
import Signup from './components/signup';

function App() {
  const [cartItemCount, setCartItemCount] = useState(0);

  return (
    <Router>
      <Navbar cartItemCount={cartItemCount} />
      <Routes>
        <Route path="/" element={<Homepage />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} />
        
        <Route 
          path="/womencategory" 
          element={<WomenCategory setCartItemCount={setCartItemCount} />} 
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
      <Footer/>
    </Router>
  );
}

export default App;
