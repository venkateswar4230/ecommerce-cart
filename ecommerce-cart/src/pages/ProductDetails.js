// src/pages/ProductDetails.js
import React,{ useContext } from "react";
import { useParams } from "react-router-dom";
// import productsData from "../data/products.json"; // or API
import { CartContext } from "../context/CartContext";
import { useEffect } from "react";
import { useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) {
    return <p>Loading product...</p>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.title} className="details-img" />
      <div className="details-info">
        <h2>{product.title}</h2>
        <p className="price">${product.price}</p>
        <p>{product.description || "No description available."}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
