const express = require('express');

const app = express();
const port = 3031;

app.use(express.json());

app.use('/sales', require('./routes/sales'));
app.use('/signup', require('./routes/signup'));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
