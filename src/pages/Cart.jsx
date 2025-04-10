import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css"; // Make sure to include the updated styling here
import { FiTrash2, FiChevronDown, FiChevronUp } from "react-icons/fi";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);
  const [showPopup, setShowPopup] = useState(false);

  const handleCheckout = () => {
    clearCart();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 4000);
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="cart-details">
                <h4>{item.title}</h4>
                <p>₹ {item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    <FiChevronDown />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    <FiChevronUp />
                  </button>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  <FiTrash2 /> Remove
                </button>
              </div>
            </div>
          ))}
          <div className="total-container">
            <h3>Total: ₹ {totalPrice.toFixed(2)}</h3>
            <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
          </div>
        </div>
      )}

      {showPopup && <div className="popup">🎉 Order placed successfully!</div>}
    </div>
  );
};

export default Cart;
