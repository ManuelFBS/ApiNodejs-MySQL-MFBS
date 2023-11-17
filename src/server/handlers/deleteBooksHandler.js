import { deleteBook } from '../controllers/deleteBooksController.js';

/**
 * La función deleteBookHandler es una función asincrónica que maneja la eliminación de un libro y
 * devuelve el resultado.
 * @param req - El parámetro `req` es el objeto de solicitud que contiene información sobre la
 * solicitud HTTP entrante, como los encabezados de la solicitud, el cuerpo de la solicitud y los
 * parámetros de la solicitud. En este caso, `req.params` es un objeto que contiene los parámetros de
 * ruta extraídos de la URL. La variable `id` es el valor
 * @param res - El parámetro `res` es el objeto de respuesta que se utiliza para enviar la respuesta al
 * cliente. Contiene métodos y propiedades que le permiten controlar la respuesta, como configurar el
 * código de estado, los encabezados y enviar el cuerpo de la respuesta.
 * @returns Se devuelve el resultado de la función eliminarLibro.
 */
export const deleteBookHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await deleteBook(id);
    res.status(200).json(result);

    return result;
  } catch (error) {
    res.status(500).json({
      error: error.message || 'Error when trying to delete the workbook...!!!'
    });
  }
};
