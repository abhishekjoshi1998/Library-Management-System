import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Profile() {
  const { user } = useContext(AuthContext) || { user: { name: "Abhishek", email: "abhishek@gmail.com", borrowedBooks: ["The Alchemist", "1984"] } };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">My Profile</h2>
        <p className="text-lg"><strong>Name:</strong> {user?.name}</p>
        <p className="text-lg"><strong>Email:</strong> {user?.email}</p>
        <h3 className="mt-4 text-xl font-semibold">Borrowed Books</h3>
        <ul className="list-disc list-inside text-gray-700">
          {user?.borrowedBooks.map((book, index) => (
            <li key={index}>{book}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
