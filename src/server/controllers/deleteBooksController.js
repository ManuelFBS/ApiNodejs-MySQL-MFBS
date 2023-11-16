import db from '../config/db.js';

export const deleteBook = async (id) => {
  try {
    const queryDelete = 'DELETE FROM books WHERE id = ?';
    const result = await db.execute(queryDelete, [id]);
    console.log(result);

    if (result && result[0] && result[0].affectedRows > 0) {
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
