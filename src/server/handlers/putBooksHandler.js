import { updateBook } from '../controllers/putBooksController.js';

/**
 * Esta función actualiza un libro en una base de datos y devuelve un mensaje de éxito junto con el
 * libro actualizado.
 * @param req - El parámetro `req` es el objeto de solicitud que contiene información sobre la
 * solicitud HTTP realizada por el cliente. Incluye detalles como el método de solicitud, encabezados,
 * URL y cuerpo.
 * @param res - El parámetro `res` es el objeto de respuesta que se utiliza para enviar la respuesta al
 * cliente. Contiene métodos y propiedades que le permiten controlar la respuesta, como configurar el
 * código de estado, enviar datos JSON o redirigir al cliente a otra URL.
 */
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
