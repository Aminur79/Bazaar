import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/menCat.css'

// MenCategories Component
const MenCategories = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch men's clothing products from backend
        axios.get('http://localhost:5000/api/men/products')
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.log('Error fetching products:', error);
                setError('Failed to load products');
                setLoading(false);
            });
    }, []);

    const addToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingItem = cart.find((cartItem) => cartItem.id === product.id);
        if (existingItem) {
            cart = cart.map((cartItem) =>
                cartItem.id === product.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            );
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        // Update the cart count on the Cart page if necessary
    };

    // Loading and Error States
    if (loading) return <div className="container text-center"><p className="lead">Loading...</p></div>;
    if (error) return <div className="container text-center"><p className="lead text-danger">{error}</p></div>;

    return (
        <div className="container my-4">
            <div className="row">
                {products.length > 0 ? (
                    products.map(product => (
                        <div className="col-md-4 col-sm-6 mb-4" key={product.id}>
                            <div className="card product-card shadow-sm border-0 rounded">
                                <img src={product.image} className="card-img-top img-fluid" alt={product.title} />
                                <div className="card-body">
                                    <h5 className="card-title text-dark">{product.title}</h5>
                                    <p className="card-text text-muted">
                                        <strong>${product.price.toFixed(2)}</strong>
                                    </p>
                                    <p className="card-text text-secondary">
                                        {product.description.length > 100 ? `${product.description.substring(0, 100)}...` : product.description}
                                    </p>
                                    <button className="btn btn-primary" onClick={() => addToCart(product)}>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center">
                        <p className="lead text-muted">No products available</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MenCategories;
