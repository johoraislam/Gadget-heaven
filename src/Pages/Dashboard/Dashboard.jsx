import { useCart } from "../../components/Context/CartContext";

const Dashboard = () => {
  const { cart } = useCart();

  return (
    <div>
      <div className="text-center py-10 bg-purple-800 rounded-md pb-32">
        <h1 className="text-4xl font-bold text-white">Dashboard</h1>
        <p className="my-4 text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <button className="border hover:bg-white hover:text-purple-600 text-white px-8 py-2 rounded-full">
          Cart
        </button>
        <button className="border ml-2 hover:bg-white hover:text-purple-600 text-white px-6 py-2 rounded-full">
          Wishlist
        </button>
      </div>

      {/* cart products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8 px-4">
        {cart.length === 0 ? (
          <p className="text-center col-span-full text-gray-600 text-lg">
            No products in cart.
          </p>
        ) : (
          cart.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded-md shadow-md bg-white"
            >
              <img
                src={product.product_image}
                alt={product.product_title}
                className="w-full h-40 object-cover mb-3"
              />
              <h2 className="text-lg font-semibold">{product.product_title}</h2>
              <p className="text-sm text-gray-600">${product.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
