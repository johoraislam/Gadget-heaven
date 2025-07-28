import { useOutletContext } from "react-router";
import toast from "react-hot-toast";
import { useState } from "react";

const Cart = () => {
  const { cartItems = [], removeFromCart, clearCart } = useOutletContext();
  const [sortedItems, setSortedItems] = useState([...cartItems]);

  // total price calculate
  const total = sortedItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  const handleSortByPrice = () => {
    const sorted = [...sortedItems].sort((a, b) => a.price - b.price);
    setSortedItems(sorted);
  };

  const handlePurchase = () => {
    if (sortedItems.length === 0) return;

    clearCart(); 
    toast.success("✅ Purchase Successful!");
    setSortedItems([]);
  };

  if (!cartItems.length) {
    return (
      <div className="p-8 text-center text-gray-500 text-lg">
        🛒 Your cart is empty.
      </div>
    );
  }

  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
        Your Cart
      </h2>

      {/* Price & Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white p-4 mb-6 rounded-lg shadow-md">
        <p className="text-lg font-semibold text-gray-800">
          Total Price: <span className="text-green-600">${total}</span>
        </p>
        <div className="mt-2 sm:mt-0 flex gap-3">
          <button
            onClick={handleSortByPrice}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm"
          >
            Sort by Price
          </button>
          <button
            onClick={handlePurchase}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded-full text-sm"
          >
            Purchase
          </button>
        </div>
      </div>

      {/* Cart Items */}
      <div className="space-y-4">
        {sortedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white p-4 shadow-md rounded-lg"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.product_image}
                alt={item.product_title}
                className="w-24 h-16 object-cover rounded"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {item.product_title}
                </h4>
                <p className="text-green-700 font-medium">${item.price}</p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.product_id)}
              className="text-sm bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-full"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cart;
