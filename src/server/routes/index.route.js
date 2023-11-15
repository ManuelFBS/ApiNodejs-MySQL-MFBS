import { Router } from 'express';
import * as gBook from './books/books.route.js';

const routes = Router();

const prefix = '/api';

routes.get(prefix, (req, res) => {
  res.send('Welcome to my API Rest...!!!');
});

routes.use(`${prefix}/books`, gBook.bookRoutes);

export { routes };
