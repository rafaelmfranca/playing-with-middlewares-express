const express = require('express');
const { validateProductName, validateInfos } = require('../middlewares/index');
const router = express.Router();

router.post('/', validateProductName, validateInfos, (req, res) => {
  res.status(201).json({ message: 'Sale created successfully!' });
});

module.exports = router;
