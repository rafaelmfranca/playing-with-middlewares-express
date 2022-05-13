const validateInfos = require('../middlewares/validateInfos');
const validateProductName = require('../middlewares/validateProductName');
const validateSaleDate = require('../middlewares/validateSaleDate');

module.exports = { validateProductName, validateInfos, validateSaleDate };
