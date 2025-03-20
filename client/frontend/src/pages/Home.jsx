import { Link } from "react-router-dom";

function Home() {
  return (
    // Ensure Full Width (Left & Right = 0)
    <div className="absolute left-0 right-0 w-full h-screen flex items-center justify-center bg-gradient-to-br from-pink-300 to-purple-500 overflow-hidden">
      
      {/* Main Content Wrapper */}
      <div className="w-full max-w-full flex flex-col items-center text-white text-center px-6">
        
        {/* Book Image */}
        <img 
          src="https://images.unsplash.com/photo-1524578271613-d550eacf6090" 
          alt="Library Books" 
          className="w-96 h-64 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105 mb-6"
        />

        {/* Title & Description */}
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          Welcome to <span className="text-yellow-300">MyLibrary</span>
        </h1>
        <p className="text-lg text-gray-200 mb-6 px-4">
          Discover, explore, and borrow books effortlessly. Enhance your reading journey today!
        </p>
        
        {/* Buttons */}
        <div className="flex flex-wrap justify-center space-x-4">
          <Link 
            to="/catalog" 
            className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg shadow-md font-semibold text-lg transition-transform transform hover:scale-110 hover:bg-yellow-500"
          >
            📚 Browse Books
          </Link>
          <Link 
            to="/profile" 
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md font-semibold text-lg transition-transform transform hover:scale-110 hover:bg-blue-700"
          >
            👤 My Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
