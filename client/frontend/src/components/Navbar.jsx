import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-pink-500 text-white p-4 fixed top-0 left-0 w-full shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">MyLibrary</h1>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/catalog" className="hover:underline">Books</Link></li>
          <li><Link to="/profile" className="hover:underline">Profile</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
