const validateInfos = require('../middlewares/validateInfos');
const validateProductName = require('../middlewares/validateProductName');
const validateSaleDate = require('../middlewares/validateSaleDate');
const validateWarrantyPeriod = require('../middlewares/validateWarrantyPeriod');

module.exports = {
  validateProductName,
  validateInfos,
  validateSaleDate,
  validateWarrantyPeriod,
};
