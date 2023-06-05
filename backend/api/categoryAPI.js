const express = require('express');
const router = express.Router();
const Category = require('./models/category');
const Product = require('./models/product');

router.get('/categories', (req, res) => {
  Category.find().then((categories) => {
    res.json(categories);
  }).catch((error) => {
    console.error('Error fetching categories:', error);
    res.sendStatus(500);
  });
});

router.get('/products/:categoryId', (req, res) => {
  Product.find({ category: req.params.categoryId }).then((products) => {
    res.json(products);
  }).catch((error) => {
    console.error('Error fetching products:', error);
    res.sendStatus(500);
  });
});

module.exports = router;
