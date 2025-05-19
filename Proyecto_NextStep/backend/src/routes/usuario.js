const express = require('express');
const router = express.Router();
const {usuario} = require('../models');

router.post('/', async (req, res) => {
  try {
    const nuevo = await usuario.create(req.body);
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;