import PropTypes from "prop-types";
import bannerimg from "../assets/assets/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div className="relative bg-purple-700 mx-12 text-white p-8 text-center rounded-2xl space-y-2 shadow-lg pb-36">
        <h1 className="text-6xl font-bold my-3">Upgrade Your Tech Accessories with <br /> Gadget Heaven Accessories</h1>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="my-4">
            <button className="bg-white text-purple-700 font-bold px-6 py-2 rounded shadow hover:bg-purple-100 transition">Shop Now</button>
        </div>
      </div>
      <div className=" absolute -bottom-20 right-[25%] flex justify-center p-6 border-2 border-white rounded-2xl bg-white/30 ">
        <img src={bannerimg} alt="Banner" className="w-[600px] h-[300px] rounded-2xl" />
      </div>
    </div>
  );
};

Banner.propTypes = {};

export default Banner;
