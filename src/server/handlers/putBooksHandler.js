import { updateBook } from '../controllers/putBooksController.js';

export const updateBookHandler = async (req, res) => {
  const { id } = req.params;
  const updatedFieldsBook = req.body;
  try {
    const updatdBook = await updateBook(id, updatedFieldsBook);

    res.status(200).json({
      messsage: 'The book has been updated...!!!',
      book: updatdBook
    });
  } catch (error) {
    res.status(500).json({
      error: 'Error when trying to update the book...!!!'
    });
  }
};
