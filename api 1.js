const express = require('express');
const app = express();

const product = {
  // Product object goes here
};

app.get('/product', (req, res) => {
  res.send(product);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});