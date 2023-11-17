import * as bookGET from '../controllers/getBooksController.js';

/**
 * La función getAllBooksHandler recupera todos los libros y los devuelve como respuesta, manejando
 * cualquier error que pueda ocurrir.
 * @param req - El parámetro `req` es el objeto de solicitud que contiene información sobre la
 * solicitud HTTP entrante, como los encabezados de la solicitud, los parámetros de consulta y el
 * cuerpo de la solicitud. Se utiliza para recuperar información del cliente que realiza la solicitud.
 * @param res - El parámetro `res` es el objeto de respuesta que se utiliza para enviar la respuesta al
 * cliente. Es una instancia del objeto Express `Response` y tiene métodos como `status`, `json`, etc.
 * que se utilizan para establecer el código de estado y enviar los datos de respuesta.
 * @returns el resultado de la llamada a la función bookGET.getAllBooks().
 */
export const getAllBooksHandler = async (req, res) => {
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

/**
 * La función `getBookByIDHandler` es una función asincrónica que recupera un libro por su ID y
 * devuelve una respuesta con los datos del libro si se encuentra, o un mensaje de error si no se
 * encuentra o si hay un error interno del servidor.
 * @param req - El parámetro `req` es el objeto de solicitud que contiene información sobre la
 * solicitud HTTP entrante, como los encabezados de la solicitud, los parámetros de la solicitud, el
 * cuerpo de la solicitud, etc. En este fragmento de código, `req.params` se utiliza para acceder a los
 * parámetros pasados. la URL de la solicitud.
 * @param res - El parámetro `res` es el objeto de respuesta que se utiliza para enviar la respuesta al
 * cliente. Contiene métodos y propiedades que le permiten controlar la respuesta, como configurar el
 * código de estado, enviar datos JSON o enviar un mensaje de error.
 */
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
