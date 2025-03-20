import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-6 pt-20">
      {/* Book Image */}
      <img 
        src="https://images.unsplash.com/photo-1524578271613-d550eacf6090" 
        alt="Library Books" 
        className="w-96 h-64 object-cover rounded-lg shadow-md mb-6"
      />

      <h1 className="text-4xl font-bold text-pink-600 mb-4">Welcome to the Library</h1>
      <p className="text-gray-700 mb-6 text-lg">Discover and borrow books easily.</p>
      
      <div className="space-x-4">
        <Link to="/catalog" className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-700">
          Browse Books
        </Link>
        <Link to="/profile" className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-700">
          My Profile
        </Link>
      </div>
    </div>
  );
}

export default Home;
