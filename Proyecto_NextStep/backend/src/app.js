const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./config/db');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API funcionando');
});

// Rutas
// app.use('/api/usuarios', require('./routes/usuarios'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log('servidor corriendo en el puerto ${PORT}')
});