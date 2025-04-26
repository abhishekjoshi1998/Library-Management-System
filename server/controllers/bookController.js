import Book from "../models/book.js";

export const getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

export const addBook = async (req, res) => {
  const book = await Book.create(req.body);
  res.status(201).json(book);
};

export const borrowBook = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book.available) return res.status(400).send("Book not available");

  book.available = false;
  await book.save();

  req.user.borrowedBooks.push(book._id);
  await req.user.save();

  res.send("Book borrowed");
};

export const returnBook = async (req, res) => {
  const book = await Book.findById(req.params.id);
  book.available = true;
  await book.save();

  req.user.borrowedBooks = req.user.borrowedBooks.filter(
    (b) => b.toString() !== req.params.id
  );
  await req.user.save();

  res.send("Book returned");
};
