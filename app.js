import express from 'express';
import booksRoutes from './routes/books.js';

const app = express();
app.use(express.json());
app.use('/', booksRoutes);

if (process.env.NODE_ENV !== 'test') {
  const PORT = 3000;
  app.listen(PORT, () => console.log(`Servidor rodando em - http://localhost:${PORT}`));
}

export default app;
