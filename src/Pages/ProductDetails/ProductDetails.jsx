import { useLoaderData, useParams, useOutletContext } from "react-router";
import ReUseableBanner from "./ReUseableBanner";
import { GrCart } from "react-icons/gr";

const ProductDetails = () => {
  const products = useLoaderData();
  const { id } = useParams();
  const { addToCart } = useOutletContext(); 

  const product = products.find(
    (item) => item.id === parseInt(id) || item.product_id === parseInt(id)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="space-y-8">
      {/* Banner */}
      <div className="relative mx-auto max-w-8xl px-4 py-8">
        <ReUseableBanner
          title="Product Details"
          subTitle="Explore the latest gadgets that will take your experience to the next level."
        />
      </div>

      {/* Product Info */}
      <div className="flex gap-8 max-w-5xl mx-auto px-4 py-8 bg-gray-200 rounded-2xl">
        <img className="w-[400px] h-[300px] object-cover" src={product.product_image} alt={product.product_title} />
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-purple-700">{product.product_title}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-lg font-semibold text-black">
            Price: <span className="text-green-600">${product.price}</span>
          </p>
          <button
            onClick={() => addToCart(product)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full"
          >
            Add To Cart <GrCart className="inline-block ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
