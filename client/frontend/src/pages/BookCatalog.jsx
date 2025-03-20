import { useEffect, useState } from "react";

const booksData = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction" },
  { id: 2, title: "Atomic Habits", author: "James Clear", genre: "Self-Help" },
  { id: 3, title: "1984", author: "George Orwell", genre: "Dystopian" },
];

function BookCatalog() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Simulate fetching books from a backend
    setBooks(booksData);
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Book Catalog</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book.id} className="p-4 border rounded-lg shadow bg-white">
            <h3 className="text-lg font-semibold">{book.title}</h3>
            <p className="text-gray-600">Author: {book.author}</p>
            <p className="text-gray-600">Genre: {book.genre}</p>
            <button className="mt-3 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
              Borrow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookCatalog;
