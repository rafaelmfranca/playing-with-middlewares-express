const generateToken = require('../utils/generateToken');

function validateSignup(req, res, next) {
  const { firstName, email, password, phone } = req.body;

  if (!firstName || !email || !password || !phone)
    return res.status(401).json({ message: 'Missing fields!' });

  const randomToken = generateToken();

  req.token = randomToken;

  next();
}

module.exports = validateSignup;
