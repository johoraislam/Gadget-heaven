import {  useLoaderData, useParams } from "react-router";
import ReUseableBanner from "./ReUseableBanner";
import { GrCart } from "react-icons/gr";
import { useCart } from "../../components/Context/CartContext";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { addToCart } = useCart();

  const products = useLoaderData();
  const { id } = useParams();
  const product = products.find(
    (item) => item.id === parseInt(id) || item.product_id === parseInt(id)
  );
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div className="space-y-8">
      <div className="relative mx-auto max-w-8xl px-4 py-8 ">
        <ReUseableBanner
          title={"Product Details"}
          subTitle={`Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!`}
        ></ReUseableBanner>
      </div>
      <div className="absolute top-1/2 w-full left-0 right-0 bg-purple-800 h-1 mb-24">
        <div className=" flex gap-8 max-w-5xl mx-auto px-4 py-8 bg-gray-200 rounded-2xl">
          <div>
            <img
              className="w-[400px] h-[300px] object-cover"
              src={product.product_image}
              alt={product.product_title}
            />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-purple-700">
              {product.product_title}
            </h2>

            <p className="text-gray-600">{product.description}</p>

            <p className="text-lg font-semibold text-black">
              Price: <span className="text-green-600">${product.price}</span>
            </p>

            <div>
              <h3 className="text-lg font-medium text-gray-800">
                Specifications:
              </h3>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                {product.Specification.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>

            <p className="text-sm text-gray-700">
              <span className="font-medium">Availability:</span>{" "}
              <span
                className={
                  product.availability
                    ? "text-green-600 font-semibold"
                    : "text-red-600 font-semibold"
                }
              >
                {product.availability ? "In Stock" : "Out of Stock"}
              </span>
            </p>

            <p className="text-sm text-yellow-600 font-semibold">
              Rating: {product.rating} ⭐
            </p>
            <button
              onClick={() => {
                addToCart(product);
               toast.success("Product added to cart!");
              }}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full"
            >
              Add To Cart <GrCart className="inline-block ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
