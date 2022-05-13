const validateInfos = require('../middlewares/validateInfos');
const validateProductName = require('../middlewares/validateProductName');
const validateSaleDate = require('../middlewares/validateSaleDate');
const validateWarrantyPeriod = require('../middlewares/validateWarrantyPeriod');
const validateSignup = require('../middlewares/validateSignup');
const authMiddleware = require('../middlewares/authMiddleware');

module.exports = {
  validateProductName,
  validateInfos,
  validateSaleDate,
  validateWarrantyPeriod,
  validateSignup,
  authMiddleware,
};
