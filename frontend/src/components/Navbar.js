import React from "react";
import { Link } from "react-router-dom";
import '../css/Navbar.css'; // Ensure you import your custom CSS file

const Navbar = () => {
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
          <div className="d-flex">
            <Link className="btn btn-outline-light me-2" to="/login">Login</Link>
            <Link className="btn btn-outline-light" to="/register">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
