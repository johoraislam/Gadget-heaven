import { useState } from "react";
import Cart from "../../components/Cart";
import Wishlist from "../../components/Wishlist"; 

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("cart"); 

  return (
    <>
      <div className="text-center pt-10 pb-32 bg-purple-800 rounded-md">
        <h1 className="text-4xl font-bold text-white">Dashboard</h1>
        <p className="my-4 text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have it
          all!
        </p>
        <button
          className={`border border-white text-white font-bold py-2 px-8 rounded-full ${
            activeComponent === "cart" ? "text-amber-700" : "hover:bg-white hover:text-purple-700"
          }`}
          onClick={() => setActiveComponent("cart")}
        >
          Cart
        </button>
        <button
          className={`border border-white ml-3 text-white font-bold py-2 px-4 rounded-full ${
            activeComponent === "wishlist" ? "text-amber-700" : "hover:bg-white hover:text-purple-700"
          }`}
          onClick={() => setActiveComponent("wishlist")}
        >
          Wishlist
        </button>
      </div>

      {activeComponent === "cart" && <Cart />}
      {activeComponent === "wishlist" && <Wishlist />}
    </>
  );
};

export default Dashboard;
