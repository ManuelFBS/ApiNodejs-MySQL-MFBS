import { deleteBook } from '../controllers/deleteBooksController.js';

export const deleteBookHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await deleteBook(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: 'Error when trying to delete the workbook...!!!'
    });
  }
};
