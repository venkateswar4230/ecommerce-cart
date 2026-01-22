// src/pages/Cart.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const getTotal = () =>
    cart.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2);

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} width="80" />
                <div>
                  <h4>{item.title}</h4>
                  <p>${item.price} × {item.qty}</p>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${getTotal()}</h3>
          <button onClick={clearCart}>Clear Cart</button>
          <button>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
