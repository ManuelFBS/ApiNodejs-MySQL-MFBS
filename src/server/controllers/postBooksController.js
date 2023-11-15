import db from '../config/db.js';

export const createBook = async (book) => {
  try {
    const query = 'INSERT INTO books (title, author, edition) VALUES (?, ?, ?)';
    const { title, author, edition } = book;
    const result = await db.execute(query, [title, author, edition]);

    return result;
  } catch (error) {
    throw error;
  }
};
