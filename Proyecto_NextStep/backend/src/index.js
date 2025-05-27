require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API funcionando');
});

// Rutas principales
app.use('/carreras', require('./routes/carreras'));
app.use('/usuario', require('./routes/usuario'));

// Conexión a la base de datos y levantar servidor
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Base de datos conectada correctamente');

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error al conectar la base de datos:', error);
  }
})();
