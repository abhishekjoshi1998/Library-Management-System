import express from 'express';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import bookRoutes from './routes/bookRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();


app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);


app.get('/', (req, res) => {
  res.send('Library Management System API');
});

export default app;
