function validateInfos(req, res, next) {
  const { infos } = req.body;

  if (!infos) return res.status(400).json({ message: 'Infos is required!' });

  if (!infos.saleDate)
    return res.status(400).json({ message: 'Sale date is required!' });

  if (infos.warrantyPeriod === undefined)
    return res.status(400).json({ message: 'Warranty period is required!' });

  next();
}

module.exports = validateInfos;
