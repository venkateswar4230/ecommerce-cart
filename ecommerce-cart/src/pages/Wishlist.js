// src/pages/Wishlist.js
import React, { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className="wishlist-page">
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <ul>
          {wishlist.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} width="80" />
              <span>{item.title}</span>
              <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
