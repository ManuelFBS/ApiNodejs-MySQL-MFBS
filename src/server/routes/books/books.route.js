import { Router } from 'express';
import {
  getAllBooksHandler,
  getBookByIDHandler
} from '../../handlers/getBooksHandler.js';
import { createBookHandler } from '../../handlers/postBooksHandler.js';

export const bookRoutes = Router();

bookRoutes.get('/', getAllBooksHandler);

bookRoutes.get('/byid/:id', getBookByIDHandler);

bookRoutes.post('/create', createBookHandler);
