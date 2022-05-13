const express = require('express');
const { validateSignup } = require('../middlewares/index');
const router = express.Router();

router.post('/', validateSignup, (req, res) => {
  const randomToken = req.token;
  res.status(200).json({ token: randomToken });
});

module.exports = router;
