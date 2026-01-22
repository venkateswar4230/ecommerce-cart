// src/App.js

import React from "react";
import "./App.css";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
 import Navbar from "./components/Navbar";


  import { WishlistProvider } from "./context/WishlistContext";
  import ProtectedRoute from "./components/ProtectedRoute";
  
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { AuthProvider } from "./context/AuthContext";
// src/App.js


function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <AuthProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/cart"
                element={
                  <ProtectedRoute>
                    <Cart />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/checkout"
                element={
                  <ProtectedRoute>
                    <Checkout />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/wishlist"
                element={
                  <ProtectedRoute>
                    <Wishlist />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </Router>
        </AuthProvider>
      </WishlistProvider>
    </CartProvider>
  );
}


export default App;

