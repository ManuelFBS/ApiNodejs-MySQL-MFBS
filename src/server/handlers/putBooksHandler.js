import { updateBook } from '../controllers/putBooksController.js';

export const updateBookHandler = async (req, res) => {
  const { id } = req.params;
  const updatedFieldsBook = req.body;
  try {
    const result = await updateBook(id, updatedFieldsBook);

    res.status(200).json({
      messsage: 'The book has been updated...!!!',
      result
    });
  } catch (error) {
    res.status(500).json({
      error: 'Error when trying to update the book...!!!'
    });
  }
};
