import { useState } from "react";

function BorrowedBooks() {
  // Sample borrowed books data
  const [borrowedBooks, setBorrowedBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", dueDate: "2025-04-01" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", dueDate: "2025-04-10" },
  ]);

  return (
    <div className="min-h-screen pt-20 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">My Borrowed Books</h2>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {borrowedBooks.length === 0 ? (
          <p className="text-gray-700 text-center">You have no borrowed books.</p>
        ) : (
          <ul className="space-y-4">
            {borrowedBooks.map((book) => (
              <li key={book.id} className="p-4 border rounded-md bg-gray-50">
                <h3 className="text-xl font-semibold">{book.title}</h3>
                <p className="text-gray-700">Author: {book.author}</p>
                <p className="text-red-500">Due Date: {book.dueDate}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default BorrowedBooks;
