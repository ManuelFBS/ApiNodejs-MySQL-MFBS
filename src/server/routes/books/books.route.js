import { Router } from 'express';
import {
  getAllBooksHandler,
  getBookByIDHandler
} from '../../handlers/getBooksHandler.js';
import { createBookHandler } from '../../handlers/postBooksHandler.js';
import { updateBookHandler } from '../../handlers/putBooksHandler.js';
// import { deleteBookHandler } from '../../handlers/deleteBooksHandler.js'

export const bookRoutes = Router();

bookRoutes.get('/', getAllBooksHandler);

bookRoutes.get('/byid/:id', getBookByIDHandler);

bookRoutes.post('/create', createBookHandler);

bookRoutes.patch('/update/:id', updateBookHandler);

// bookRoutes.delete('/del/:id', deleteBookHandler);
