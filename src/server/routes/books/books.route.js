import { Router } from 'express';
import {
  getAllBooksHandler,
  getBookByIDHandler
} from '../../handlers/getBooksHandler.js';

export const bookRoutes = Router();

bookRoutes.get('/', getAllBooksHandler);

bookRoutes.get('/byid/:id', getBookByIDHandler);
