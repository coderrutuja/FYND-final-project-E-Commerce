const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/Product');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/myapp', { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

// Define a route to get the product by ID
app.get('/products/:id', (req, res) => {
  const productId = req.params.id;
  
  // Find the product with the given ID in the MongoDB database
  Product.findById(productId, (err, product) => {
    if (err) {
      res.status(500).send('Error retrieving product');
    } else {
      res.json(product);
    }
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
