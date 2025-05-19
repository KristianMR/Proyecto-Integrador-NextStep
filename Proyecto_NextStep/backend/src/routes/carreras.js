const express = require('express');
const router = express.Router();
const {carrera} = require('../models');

router.get('/', async(_req, res) => {
    try{
        const carreras = await carrera.findAll();
        res.json(carreras);
    } catch(error){
        console.error('Error al obtener las carreras:', error);
        res.status(500).json({error: error.message});
    }
    
});

module.exports = router;