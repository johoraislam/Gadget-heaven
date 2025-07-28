import { Link, NavLink } from "react-router";
import { FaHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
const Navbar = () => {

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="hover:text-purple-600">Home</NavLink>
      </li>
      <li>
        <NavLink to="/statistics" className="hover:text-purple-600">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className="hover:text-purple-600">Dashboard</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-white shadow-md">
      <div className="navbar px-4 lg:px-16 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-purple-700">
          Gadget Heaven
        </Link>

        {/* Menu for large screens */}
        <ul className="hidden lg:flex space-x-6 font-medium text-gray-600">
          {navLinks}
        </ul>

        {/* Right Side Icon/Button  */}
        <div className="hidden lg:flex items-center space-x-4 relative">
          <button className="relative bg-white text-gray-800 p-4 rounded-full hover:bg-gray-200">
            <GrCart className="text-xl" />
            
          </button>

          <button className="bg-white text-gray-800 p-4 rounded-full hover:bg-gray-200">
            <FaHeart className="text-xl" />
          </button>
        </div>

        {/* Hamburger Menu for small screens */}
        <div className="lg:hidden">
          <details className="dropdown">
            <summary className="m-1 btn btn-sm">☰</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 space-y-2">
              {navLinks}
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
