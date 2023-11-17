import db from '../config/db.js';

/**
 * La función crea un nuevo registro de libro en una tabla de base de datos.
 * @param book - El parámetro `libro` es un objeto que representa los detalles de un libro. Debe tener
 * las siguientes propiedades:
 * @returns Se devuelve el resultado de la consulta de la base de datos.
 */
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
