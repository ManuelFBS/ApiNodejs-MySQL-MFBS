import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

/* El código está creando un objeto de conexión para conectarse a una base de datos MySQL. Utiliza el
método `mysql.createConnection()` para crear el objeto de conexión y pasa un objeto con los detalles
de conexión necesarios. Los detalles de la conexión se recuperan de las variables de entorno
utilizando `process.env`. Las variables de entorno `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_PORT` y
`DB_NAME` se utilizan para especificar el host, el usuario, la contraseña, el puerto y el nombre de
la base de datos, respectivamente. */
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME
});

export default connection.promise();
