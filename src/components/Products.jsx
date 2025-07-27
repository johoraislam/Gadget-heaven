import { NavLink } from "react-router";

const Products = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className=" p-4 rounded shadow hover:shadow-2xl transition"
        >
          <img src={product.product_image} alt={product.product_title} />
          <div className="mt-2 flex justify-between flex-grow">
            <p className="text-black font-bold">{product.product_title}</p>
            <p className="text-gray-600">💲{product.price}</p>
          </div>
          <div>
            <NavLink to={`/productDetails/${product.product_id}`} className="mt-2 btn border border-purple-600 text-purple-600 py-1 px-2 rounded">View Details</NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
