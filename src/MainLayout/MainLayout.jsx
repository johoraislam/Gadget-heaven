import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useState } from "react";

const MainLayout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  // 🛒 Cart Functions
  const addToCart = (product) => {
    const exists = cartItems.find(
      (item) => item.product_id === product.product_id
    );
    if (exists) return;
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product_id !== productId)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // 💖 Wishlist Functions
  const addToWishlist = (product) => {
    const exists = wishlistItems.find(
      (item) => item.product_id === product.product_id
    );
    if (exists) return;
    setWishlistItems([...wishlistItems, product]);
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems((prevItems) =>
      prevItems.filter((item) => item.product_id !== productId)
    );
  };

  const clearWishlist = () => {
    setWishlistItems([]);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <Outlet
          context={{
            // Cart
            addToCart,
            cartItems,
            removeFromCart,
            clearCart,
            // Wishlist
            addToWishlist,
            wishlistItems,
            removeFromWishlist,
            clearWishlist,
          }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
