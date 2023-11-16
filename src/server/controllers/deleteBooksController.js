import db from '../config/db.js';

export const deleteBook = async (id) => {
  try {
    const queryDelete = 'DELETE FROM books WHERE id = ?';
    const deletedBook = await db.execute(queryDelete, [id]);

    if (deletedBook.affectedRows > 0) {
      return { message: 'The book was successfully removed...' };
    } else {
      // Si no hay filas 'afectadas', eso quiere decir que no se
      // encontró el libro con el ID proporcionado...
      throw new Error('The book with the given ID was not found...!!!');
    }
  } catch (error) {
    throw error;
  }
};
