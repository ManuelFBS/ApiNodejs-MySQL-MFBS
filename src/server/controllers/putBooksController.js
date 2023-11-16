import db from '../config/db.js';

export const updateBook = async (id, book) => {
  try {
    const fieldsToUpdate = [];
    const valuesToUpdate = [];

    for (const key in book) {
      fieldsToUpdate.push(`${key}=?`);
      valuesToUpdate.push(book[key]);
    }

    const query = `UPDATE books SET ${fieldsToUpdate.join(', ')} WHERE id = ?`;

    await db.execute(query, [...valuesToUpdate, id]);

    // Consulta para obtener el libro actualizado...
    const selectQuery = 'SELECT * FROM books WHERE id = ?';
    const [updatedBook] = await db.execute(selectQuery, [id]);

    return updatedBook;

    // return bookUpdate;
  } catch (error) {
    throw error;
  }
};
