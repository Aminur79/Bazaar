import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || [];

  // State for selected payment method
  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  // Calculate the total price of the items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Function to handle payment
  const handlePayment = () => {
    // Simulate payment action (here you would integrate a real payment gateway)
    alert(`Payment Successful! Method: ${paymentMethod}`);

    // Clear cart from local storage
    localStorage.removeItem('cart');

    // After payment, you can navigate the user to a confirmation page or reset the cart
    navigate('/'); // Redirect to home or any other route after payment
  };

  return (
    <div className="container mt-5">
      <h2>Checkout</h2>

      {/* Cart Items */}
      {cart.length === 0 ? (
        <p>No items in your cart.</p>
      ) : (
        <>
          <div className="card mb-3">
            <div className="card-body">
              <h4 className="card-title">Your Selected Items</h4>
              <ul className="list-group">
                {cart.map((item, index) => (
                  <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      style={{ width: '50px', height: '50px', objectFit: 'contain' }} 
                      className="me-3"
                    />
                    <div className="flex-grow-1">
                      {item.title} - ${item.price} x {item.quantity}
                    </div>
                    <div>
                      <strong>Total: ${(item.price * item.quantity).toFixed(2)}</strong>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Total Price */}
          <div className="card mb-3">
            <div className="card-body">
              <h4 className="card-title">Total Price</h4>
              <p><strong>${totalPrice.toFixed(2)}</strong></p>
            </div>
          </div>

          {/* Payment Method Selection */}
          <div className="mb-3">
            <h4>Payment Method</h4>
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="radio" 
                id="creditCard" 
                name="paymentMethod" 
                value="creditCard" 
                checked={paymentMethod === 'creditCard'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className="form-check-label" htmlFor="creditCard">
                Credit Card
              </label>
            </div>
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="radio" 
                id="paypal" 
                name="paymentMethod" 
                value="paypal" 
                checked={paymentMethod === 'paypal'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className="form-check-label" htmlFor="paypal">
                PayPal
              </label>
            </div>
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="radio" 
                id="bankTransfer" 
                name="paymentMethod" 
                value="bankTransfer" 
                checked={paymentMethod === 'bankTransfer'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className="form-check-label" htmlFor="bankTransfer">
                Bank Transfer
              </label>
            </div>
          </div>

          {/* Pay Button */}
          <button 
            className="btn btn-primary"
            onClick={handlePayment}
          >
            Pay ${totalPrice.toFixed(2)}
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
