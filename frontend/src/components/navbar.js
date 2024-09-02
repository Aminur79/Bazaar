import React from "react";
import { Link } from "react-router-dom";
import '../css/Navbar.css'; // Ensure you import your custom CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = ({ cartItemCount }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-grey">
      <div className="container">
        {/* First Row: Navbar Title */}
        <div className="d-flex justify-content-center w-100 mb-2">
          <Link className="navbar-brand title-text" to="/">BAZAAR</Link>
        </div>

        {/* Second Row: Navigation Links and Buttons */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#men">Men</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#women">Women</a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            {/* Cart Icon with Badge */}
            <Link className="nav-link position-relative me-3" to="/cart">
              <i className="bi bi-cart3 text-white" style={{ fontSize: '1.5rem' }}></i>
              {cartItemCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartItemCount}
                  <span className="visually-hidden">items in cart</span>
                </span>
              )}
            </Link>
            <Link className="btn btn-outline-light me-2 btn-login" to="/login">Login</Link>
            <Link className="btn btn-outline-light btn-signup" to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
