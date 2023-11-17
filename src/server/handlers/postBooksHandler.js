import * as bookPOST from '../controllers/postBooksController.js';

/**
 * La función `createBookHandler` es una función asincrónica que maneja la creación de un libro al
 * recibir una solicitud y enviar una respuesta con los datos del libro creado.
 * @param req - El parámetro `req` es el objeto de solicitud que contiene información sobre la
 * solicitud HTTP entrante, como los encabezados de la solicitud, el cuerpo de la solicitud y los
 * parámetros de la solicitud. Por lo general, lo proporciona el marco web o el servidor que maneja la
 * solicitud.
 * @param res - El parámetro `res` es el objeto de respuesta que se utiliza para enviar la respuesta al
 * cliente. Contiene métodos y propiedades que le permiten controlar la respuesta, como configurar el
 * código de estado, enviar datos JSON o redirigir al cliente a otra URL.
 * @returns La función `createBookHandler` devuelve la variable `resultado`, que es el resultado de
 * llamar a la función `createBook` desde el módulo `bookPOST`.
 */
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
