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
    const bookUpdate = await db.execute(query, [...valuesToUpdate, id]);

    return bookUpdate;
    // const { title, author, edition } = book;
    // const query =
    //   'UPDATE books SET title = ?, author = ?, edition = ? WHERE id = ?';
    // const bookUpdate = await db.execute(query, [title, author, edition], id);
    // return bookUpdate;
  } catch (error) {
    throw error;
  }
};
/*
export const updateBook = async (id, book) => {
  try {
    const fieldsToUpdate = [];
    const valuesToUpdate = [];

    for (const key in book) {
      fieldsToUpdate.push(`${key} = ?`);
      valuesToUpdate.push(book[key]);
    }

    const query = `UPDATE books SET ${fieldsToUpdate.join(', ')} WHERE id = ?`;
    const bookUpdate = await db.execute(query, [...valuesToUpdate, id]);

    return bookUpdate;
  } catch (error) {
    throw error;
  }
};

*/
