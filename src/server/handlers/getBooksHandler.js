import * as bookGET from '../controllers/getBooksController.js';

export const getAllBooksHandler = async (req, res) => {
  //   await bookGET
  //     .getAllBooks()
  //     .then((result) => {
  //       res.status(200).json({
  //         message: 'Books retrieved successfully...!!!',
  //         data: result[0]
  //       });
  //     })
  //     .catch((err) => {
  //       res.status(500).send(err);
  //     });
  try {
    const result = await bookGET.getAllBooks();

    if (result[0].length > 0) {
      res.status(200).json({
        message: 'Books retrieved successfully...!!!',
        data: result[0]
      });
    } else {
      res.status(404).json({
        message: 'The data is empty...!!!'
      });
    }

    return result;
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error...',
      error: error.message
    });
  }
};

export const getBookByIDHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await bookGET.getBookByID(id);

    if (result[0].length > 0) {
      res.status(200).json({
        message: 'The book retrieved successfully...!!!',
        data: result[0]
      });
    } else {
      res.status(404).json({
        message: 'Book not found or Invalid ID...'
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error...',
      error: error.message
    });
  }
};
