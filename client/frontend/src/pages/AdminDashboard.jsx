import { useState } from "react";

function AdminDashboard() {
  // Sample book data
  const [books, setBooks] = useState([
    { id: 1, title: "1984", author: "George Orwell", available: true },
    { id: 2, title: "Moby", author: "Herman Melville", available: false },
  ]);

  return (
    <div className="min-h-screen pt-20 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">Admin Dashboard</h2>
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Manage Books</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Title</th>
              <th className="border p-2">Author</th>
              <th className="border p-2">Availability</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id} className="text-center">
                <td className="border p-2">{book.title}</td>
                <td className="border p-2">{book.author}</td>
                <td className="border p-2">
                  {book.available ? (
                    <span className="text-green-500">Available</span>
                  ) : (
                    <span className="text-red-500">Checked Out</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;
