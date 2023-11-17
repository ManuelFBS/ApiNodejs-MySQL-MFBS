import db from '../config/db.js';

/**
 * La función `deleteBook` elimina un libro de la base de datos según su ID y devuelve un mensaje de
 * éxito si la eliminación se realiza correctamente; de lo contrario, arroja un error.
 * @param id - El parámetro "id" es el identificador único del libro que debe eliminarse de la base de
 * datos.
 * @returns un objeto con una propiedad de mensaje si el libro se eliminó correctamente. Si no se
 * encuentra el libro con la identificación proporcionada, arroja un error.
 */
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
