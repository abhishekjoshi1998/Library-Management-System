import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Mobile menu icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-pink-500 to-purple-700 text-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold tracking-wide">
          📚 MyLibrary
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-lg">
          <li>
            <Link to="/" className="hover:text-yellow-300 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/catalog" className="hover:text-yellow-300 transition duration-300">
              Books
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-yellow-300 transition duration-300">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/admin" className="hover:text-yellow-300 transition duration-300">
              Admin
            </Link>
          </li>
          <li>
            <Link 
              to="/signup" 
              className="hover:bg-yellow-400 bg-yellow-300 text-black px-5 py-2 rounded-lg transition duration-300 font-semibold"
            >
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/borrow" className="hover:text-yellow-300 transition duration-300">
              Borrowed Books
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown with Animation */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-pink-600 transition-transform duration-300 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <ul className="text-center py-4 space-y-4">
          <li>
            <Link 
              to="/" 
              className="block py-2 text-lg hover:bg-pink-700 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/catalog" 
              className="block py-2 text-lg hover:bg-pink-700 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Books
            </Link>
          </li>
          <li>
            <Link 
              to="/profile" 
              className="block py-2 text-lg hover:bg-pink-700 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link 
              to="/admin" 
              className="block py-2 text-lg hover:bg-pink-700 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Admin
            </Link>
          </li>
          <li>
            <Link 
              to="/signup" 
              className="block py-2 text-lg bg-yellow-300 text-black font-bold rounded-lg hover:bg-yellow-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </li>
          <li>
            <Link 
              to="/borrow" 
              className="block py-2 text-lg hover:bg-pink-700 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Borrowed Books
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
