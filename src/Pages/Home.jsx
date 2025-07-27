import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Products from "../components/Products";

const Home = () => {
  const product = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const filteredProducts = selectedCategory === 'all'?product:product.filter((item) =>item.category===selectedCategory)
  return (
    <>
      <Banner></Banner>
      <div className="pt-64 text-center">
        <Heading title={"Explore Cutting-Edge Gadgets"}></Heading>
      </div>
       <div className="flex gap-4 px-6 py-4">
        <div className="w-1/4">
          <Sidebar setCategory={setSelectedCategory}></Sidebar>
        </div>
        <div className="w-3/4">
          <Products products={filteredProducts}></Products>
        </div>
      </div>
    </>
  );
};

export default Home;
