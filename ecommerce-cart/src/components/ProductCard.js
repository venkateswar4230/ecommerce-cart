// src/components/ProductCard.js
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext"

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="product-img" />
      </Link>
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <button onClick={() => addToWishlist(product)}>❤️ Wishlist</button>
    </div>
  );
};

export default ProductCard;
