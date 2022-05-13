const express = require('express');
const {
  validateProductName,
  validateInfos,
  validateSaleDate,
  validateWarrantyPeriod,
  authMiddleware,
} = require('../middlewares/index');
const router = express.Router();

router.use(authMiddleware);

router.post(
  '/',
  validateProductName,
  validateInfos,
  validateSaleDate,
  validateWarrantyPeriod,
  (_req, res) => {
    res.status(201).json({ message: 'Sale created successfully!' });
  }
);

module.exports = router;
