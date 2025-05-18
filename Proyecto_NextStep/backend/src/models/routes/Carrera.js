const express = require('express');
const router = express.Router();
const {carrera} = require('../models/associations');

router.get('/', async(_req, res) => {
    const carreras = await carrera.findAll();
    res.json(carreras);
});

module.exports = router;