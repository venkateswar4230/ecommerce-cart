// src/pages/Checkout.js
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const getTotal = () =>
    cart.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed successfully!\nThank you, ${formData.name}`);
    clearCart();
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <h3>Order Summary</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} × {item.qty} = ${(item.price * item.qty).toFixed(2)}
              </li>
            ))}
          </ul>
          <h3>Total: ${getTotal()}</h3>

          <form onSubmit={handleSubmit} className="checkout-form">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Address:
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit">Place Order</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Checkout;
