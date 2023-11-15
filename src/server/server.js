import express from 'express';
import morgan from 'morgan';
import db from './config/db.js';
import { routes } from './routes/index.route.js';

const app = express();

/* El código `app.set('port', Process.env.PORT1 || 7000);` establece el valor de la propiedad `port` en
la configuración de la aplicación Express. */
app.set('port', process.env.PORT1 || 7000);

app.use(express.json());
app.use(morgan('dev'));

app.use('/', routes);
app.use('*', (req, res) => {
  res.send('404 - not found');
});

/* El código `app.listen(app.get('puerto'), () => {
  console.log('El servidor se está ejecutando en el puerto:', app.get('puerto'));
});` está iniciando el servidor y escuchando las solicitudes entrantes en el puerto especificado. */
app.listen(app.get('port'), () => {
  console.log('Server is running on port:', app.get('port'));
});

// Connect to database...

/* El código db.connect().then(() => { console.log('¡¡¡Conectado a la base de datos...!!!');
}).catch((err) => { console.log('Error : ', err); }); está estableciendo una conexión a la base de
datos utilizando el método `connect()` proporcionado por el módulo `db`. */
db.connect()
  .then(() => {
    console.log('Connected to database...!!!');
  })
  .catch((err) => {
    console.log('Error: ', err);
  });
