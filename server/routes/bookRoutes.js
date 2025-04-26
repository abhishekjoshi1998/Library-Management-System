import express from 'express';
import { protect } from '../middlewares/authMiddleware.js';
import { getBooks, addBook, borrowBook, returnBook } from '../controllers/bookController.js';

const router = express.Router();

router.get('/', getBooks);
router.post('/', protect, addBook);
router.put('/borrow/:id', protect, borrowBook);
router.put('/return/:id', protect, returnBook);

export default router;
