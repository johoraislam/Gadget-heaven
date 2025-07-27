import Heading from "../Heading";

const Footer = () => {
  return (
    <footer className=" text-black py-10 mt-10">
        <div className="text-center mb-6">
        <Heading title={'Gadget Heaven'} subTitle="Leading the way in cutting-edge technology and innovation."></Heading>

        </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        
        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-900">
            <li className="hover:text-purple-900 cursor-pointer">Product Support</li>
            <li className="hover:text-purple-900 cursor-pointer">Order Tracking</li>
            <li className="hover:text-purple-900 cursor-pointer">Shipping & Delivery</li>
            <li className="hover:text-purple-900 cursor-pointer">Returns</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-900">
            <li className="hover:text-purple-900 cursor-pointer">About Us</li>
            <li className="hover:text-purple-900 cursor-pointer">Careers</li>
            <li className="hover:text-purple-900 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-900">
            <li className="hover:text-purple-900 cursor-pointer">Terms of Service</li>
            <li className="hover:text-purple-900 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-purple-900 cursor-pointer">Cookie Policy</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} Gadget Heaven. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
