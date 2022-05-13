function validateProductName(req, res, next) {
  const { productName } = req.body;

  if (!productName)
    return res.status(400).json({ message: 'Product name is required!' });

  if (productName.length < 4)
    return res
      .status(400)
      .json({ message: 'Product name must be at least 4 characters long!' });

  next();
}

module.exports = validateProductName;
