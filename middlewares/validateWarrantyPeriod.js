function validateWarrantyPeriod(req, res, next) {
  const { warrantyPeriod } = req.body.infos;

  if (warrantyPeriod < 1 || warrantyPeriod > 3)
    return res
      .status(400)
      .json({ message: 'The warranty period field must be between 1 and 3!' });

  next();
}

module.exports = validateWarrantyPeriod;
