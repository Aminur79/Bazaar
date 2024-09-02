import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css'; 

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <div className="d-flex justify-content-center mb-2">
          <Link className="footer-link" to="/login">Login</Link>
          <Link className="footer-link mx-3" to="/register">Register</Link>
          <a className="footer-link mx-3" href="#men">Men</a>
          <a className="footer-link" href="#women">Women</a>
        </div>
        
        <p className="mb-2 mt-3">&copy; 2024 BAZAAR. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
