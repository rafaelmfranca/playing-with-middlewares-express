const express = require('express');
const validateProductName = require('../middlewares/validateProductName');
const router = express.Router();

router.post('/', validateProductName, (req, res) => {
  res.status(201).json({ message: 'Sale created successfully!' });
});

module.exports = router;
