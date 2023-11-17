import db from '../config/db.js';

/**
 * La función `getAllBooks` recupera todos los libros de una base de datos mediante una consulta SQL.
 * @returns Se devuelve el resultado de la ejecución de la consulta.
 */
export const getAllBooks = async () => {
  try {
    const query = 'SELECT * FROM books';
    const result = await db.execute(query);

    return result;
  } catch (error) {
    throw error;
  }
};

/**
 * La función `getBookByID` es una función asincrónica que recupera un libro de una base de datos en
 * función de su ID.
 * @param id - El parámetro `id` es el identificador único del libro que desea recuperar de la base de
 * datos.
 * @returns el resultado de la consulta a la base de datos.
 */
export const getBookByID = async (id) => {
  try {
    const query = 'SELECT * FROM books WHERE id = ?';
    const result = await db.execute(query, [id]);

    return result;
  } catch (error) {
    throw error;
  }
};
