const { dateRegex } = require('../utils/regex');

function validateSaleDate(req, res, next) {
  const { saleDate } = req.body.infos;

  if (!dateRegex.test(saleDate))
    return res.status(400).json({ message: 'Invalid sale date!' });

  next();
}

module.exports = validateSaleDate;
