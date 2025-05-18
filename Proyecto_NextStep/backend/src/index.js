require('dotenv').config();
const express = require('express');
const sequelize = require('./models');
require('./models/associations');

const app = express();
app.use(express.json());

app.use('/carreras', require('./routes/Carrera'));
app.use('/usuario', require('./routes/Usuario'));

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Base de datos conectada correctamente');
        app.listen(process.env.PORT, () => {
        console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
        });
    } catch (error) {
        console.error('Error al sincronizar la base de datos:', error);
    }
})();
