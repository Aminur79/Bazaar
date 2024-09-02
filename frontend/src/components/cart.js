import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ setCartItemCount }) => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
        setCartItemCount(storedCart.reduce((acc, item) => acc + item.quantity, 0));
    }, [setCartItemCount]);

    const removeFromCart = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCartItemCount(updatedCart.reduce((acc, item) => acc + item.quantity, 0));
    };

    const decreaseQuantity = (id) => {
        const updatedCart = cart.map(item =>
            item.id === id
                ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
                : item
        );
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCartItemCount(updatedCart.reduce((acc, item) => acc + item.quantity, 0));
    };

    const increaseQuantity = (id) => {
        const updatedCart = cart.map(item =>
            item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCartItemCount(updatedCart.reduce((acc, item) => acc + item.quantity, 0));
    };

    const handleCheckout = () => {
        navigate('/checkout', { state: { cart } });
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Shopping Cart</h2>

            <h4>Cart Items</h4>
            {cart.length === 0 ? (
                <p>No items in the cart.</p>
            ) : (
                <>
                    <ul className="list-group mb-3">
                        {cart.map((item, index) => (
                            <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                                    className="me-3"
                                />
                                <div className="flex-grow-1">
                                    {item.title} - ${item.price}
                                </div>
                                <div>
                                    <button
                                        className="btn btn-secondary btn-sm me-2"
                                        onClick={() => decreaseQuantity(item.id)}
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        className="btn btn-secondary btn-sm ms-2"
                                        onClick={() => increaseQuantity(item.id)}
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <button
                        className="btn btn-success"
                        onClick={handleCheckout}
                    >
                        Proceed to Checkout
                    </button>
                </>
            )}
        </div>
    );
};

export default Cart;
