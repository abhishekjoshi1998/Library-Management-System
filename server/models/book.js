import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  published: Date,
  available: { type: Boolean, default: true },
  reservedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

export default mongoose.model('Book', bookSchema);
