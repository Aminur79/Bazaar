import React, { useState, useEffect } from 'react';
import "../css/Homepage.css";
import { Link } from 'react-router-dom';
import WomenCategory from './WomenCategory';
import MenCategories from './menCategories';

// Example image URLs array
const carouselImages = [
  "https://images.ctfassets.net/9q8du028z7sn/5zwIXeZwSNGR6yLbZPQMGd/32d11f02f27dbb694cd22236616461dd/MY_W_1920x725.jpeg",
  "https://images.ctfassets.net/9q8du028z7sn/3UKwkC8BwKkARO6Xd0ZxM/482398d2252621be2f7c2aa56e2fa95d/newarrival20vc-MY-Desktop.jpg",
  "https://images.ctfassets.net/9q8du028z7sn/5zwIXeZwSNGR6yLbZPQMGd/32d11f02f27dbb694cd22236616461dd/MY_W_1920x725.jpeg"
];

const Homepage = ({ setCartItemCount }) => {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(cartItem => cartItem.id === product.id);
    if (existingItem) {
      cart = cart.map(cartItem =>
        cartItem.id === product.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    setCartItemCount(cart.reduce((acc, item) => acc + item.quantity, 0));
  };

  return (
    <div>
      <div id="promotionCarousel" className="carousel slide">
        <div className="carousel-inner">
          {carouselImages.map((url, index) => (
            <div
              className={`carousel-item${index === 0 ? " active" : ""}`}
              key={index}
            >
              <img
                src={url}
                className="d-block w-100"
                alt={`Promotion ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#promotionCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#promotionCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Sections Men */}
      
        <div id="men" className="container mt-5 pt-5 pb-5 text-center">
          <h2>Men's Section</h2>
          <MenCategories/>
          <p>Content for the Men category.</p>
        </div>
      

      {/* Sections Women */}
      
        <div id="women" className="container mt-5 pt-5 pb-5 text-center">
          <h2>Women's Section</h2>
          <WomenCategory/>
          <p>Content for the Women category.</p>
        </div>
    </div>
  );
};

export default Homepage;
