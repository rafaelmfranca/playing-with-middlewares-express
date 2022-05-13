function authMiddleware(req, res, next) {
  const { authorization } = req.headers;
  console.log(req.headers);
  console.log(authorization.length);

  if (!authorization || authorization.length !== 16) {
    return res.status(401).json({ message: 'Invalid token!' });
  }

  next();
}

module.exports = authMiddleware;
