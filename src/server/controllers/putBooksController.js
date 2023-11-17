import db from '../config/db.js';

/**
 * La función `updateBook` actualiza un registro de libro en una base de datos utilizando el objeto
 * `id` y `book` proporcionados.
 * @param id - El parámetro id es el identificador único del libro que debe actualizarse en la base de
 * datos. Se utiliza en la cláusula WHERE de la consulta UPDATE para especificar qué libro actualizar.
 * @param book - El parámetro `libro` es un objeto que representa la información actualizada del libro.
 * Contiene pares clave-valor donde la clave es el nombre del campo en la tabla de la base de datos y
 * el valor es el nuevo valor para ese campo.
 * @returns el libro actualizado de la base de datos.
 */
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
