import * as bookPOST from '../controllers/postBooksController.js';

export const createBookHandler = async (req, res) => {
  try {
    const book = req.body;
    const result = await bookPOST.createBook(book);

    res.status(201).json({
      message: 'The book has been successfully registered...!!!',
      data: book
    });

    return result;
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error...',
      error: error.message
    });
  }
};
