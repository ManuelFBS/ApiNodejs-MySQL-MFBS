import db from '../config/db.js';

export const getAllBooks = async () => {
  try {
    const query = 'SELECT * FROM books';
    const result = await db.execute(query);

    return result;
  } catch (error) {
    throw error;
  }
};

export const getBookByID = async (id) => {
  try {
    const query = 'SELECT * FROM books WHERE id = ?';
    const result = await db.execute(query, [id]);

    return result;
  } catch (error) {
    throw error;
  }
};
