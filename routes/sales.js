const express = require('express');
const {
  validateProductName,
  validateInfos,
  validateSaleDate,
} = require('../middlewares/index');
const router = express.Router();

router.post(
  '/',
  validateProductName,
  validateInfos,
  validateSaleDate,
  (req, res) => {
    res.status(201).json({ message: 'Sale created successfully!' });
  }
);

module.exports = router;
